"""Lectura y validación de bancos de preguntas (window.BANCO = {JSON};).

Lo usan simulador/listar-preguntas.py y actualizar-indice.py.
"""
import json
import re
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
TIPOS = {"leccion", "simulacro-modulo", "simulacro-completo"}
_PREFIJO = re.compile(r"^\s*window\.BANCO\s*=\s*", re.S)
_PREFIJO_TALLER = re.compile(r"^\s*window\.TALLER\s*=\s*", re.S)
TIPOS_EJERCICIO = {"tarjetas": "tarjetas", "clasificar": "items", "emparejar": "pares", "ordenar": "pasos", "identificar": "rondas"}


def buscar_bancos():
    """Todos los bancos publicables, ordenados por ruta (el de ejemplo del simulador no cuenta)."""
    cp = RAIZ / "cloud-practitioner"
    rutas = [r for r in cp.glob("*/practicas/*.js") if not r.name.startswith("taller-")]
    rutas += list(cp.glob("repaso-general/simulacro-*.js"))
    return sorted(rutas, key=lambda p: p.as_posix())


def buscar_talleres():
    """Talleres interactivos (practicas/taller-NN.js), ordenados por ruta."""
    return sorted((RAIZ / "cloud-practitioner").glob("*/practicas/taller-*.js"), key=lambda p: p.as_posix())


def leer_banco(ruta):
    texto = Path(ruta).read_text(encoding="utf-8")
    m = _PREFIJO.match(texto)
    if not m:
        raise ValueError(f"{ruta}: debe empezar con 'window.BANCO = '")
    cuerpo = texto[m.end():].strip().rstrip(";").strip()
    try:
        return json.loads(cuerpo)
    except json.JSONDecodeError as e:
        raise ValueError(f"{ruta}: JSON inválido después de 'window.BANCO =' (línea {e.lineno}): {e.msg}") from e


def leer_taller(ruta):
    texto = Path(ruta).read_text(encoding="utf-8")
    m = _PREFIJO_TALLER.match(texto)
    if not m:
        raise ValueError(f"{ruta}: debe empezar con 'window.TALLER = '")
    cuerpo = texto[m.end():].strip().rstrip(";").strip()
    try:
        return json.loads(cuerpo)
    except json.JSONDecodeError as e:
        raise ValueError(f"{ruta}: JSON inválido después de 'window.TALLER =' (línea {e.lineno}): {e.msg}") from e


def validar_taller(t, ruta):
    """Devuelve la lista de errores del taller (vacía si está bien)."""
    nombre = Path(ruta).name
    errores = [f"{nombre}: falta '{c}'" for c in ("id", "titulo", "ejercicios") if c not in t]
    if errores:
        return errores
    for i, e in enumerate(t["ejercicios"], 1):
        tipo = e.get("tipo")
        if tipo not in TIPOS_EJERCICIO:
            errores.append(f"{nombre} ejercicio {i}: tipo '{tipo}' no es uno de {sorted(TIPOS_EJERCICIO)}")
            continue
        lista = e.get(TIPOS_EJERCICIO[tipo]) or []
        if len(lista) < 2:
            errores.append(f"{nombre} ejercicio {i} ({tipo}): necesita al menos 2 elementos en '{TIPOS_EJERCICIO[tipo]}'")
        if tipo == "clasificar":
            n = len(e.get("grupos") or [])
            if n < 2:
                errores.append(f"{nombre} ejercicio {i}: 'grupos' necesita al menos 2")
            errores += [f"{nombre} ejercicio {i}: ficha {k} con 'grupo' fuera de rango"
                        for k, it in enumerate(lista, 1) if not isinstance(it.get("grupo"), int) or not 0 <= it["grupo"] < n]
        if tipo == "identificar":
            errores += [f"{nombre} ejercicio {i}: ronda {k} con 'correcta' fuera de rango"
                        for k, r in enumerate(lista, 1)
                        if not isinstance(r.get("correcta"), int) or not 0 <= r["correcta"] < len(r.get("opciones") or [])]
    if t.get("siguiente") and not (Path(ruta).parent / t["siguiente"]).exists():
        errores.append(f"{nombre}: 'siguiente' apunta a {t['siguiente']}, que no existe")
    return errores


def validar_banco(b, ruta, ids_vistos=None):
    """Devuelve (errores, avisos). ids_vistos (dict id->ruta) detecta IDs repetidos entre bancos."""
    errores, avisos = [], []
    nombre = Path(ruta).name
    for campo in ("id", "titulo", "tipo", "preguntas"):
        if campo not in b:
            errores.append(f"{nombre}: falta '{campo}'")
    if errores:
        return errores, avisos
    if b["tipo"] not in TIPOS:
        errores.append(f"{nombre}: tipo '{b['tipo']}' no es uno de {sorted(TIPOS)}")
    preguntas = b["preguntas"]
    if not preguntas:
        errores.append(f"{nombre}: no tiene preguntas")
    if b["tipo"] == "leccion" and not 15 <= len(preguntas) <= 25:
        avisos.append(f"{nombre}: {len(preguntas)} preguntas (lo acordado es 15–25 por lección)")
    multiples = 0
    for i, q in enumerate(preguntas, 1):
        qid = q.get("id") or f"#{i}"
        if not q.get("id"):
            errores.append(f"{nombre} {qid}: falta 'id'")
        elif ids_vistos is not None:
            if q["id"] in ids_vistos:
                errores.append(f"{nombre} {qid}: ID repetido (también en {ids_vistos[q['id']]})")
            ids_vistos[q["id"]] = nombre
        if not q.get("enunciado"):
            errores.append(f"{nombre} {qid}: falta 'enunciado'")
        elif re.search(r"\(\s*elija", q["enunciado"], re.I):
            avisos.append(f"{nombre} {qid}: quitar '(Elija N)' del enunciado; el simulador lo agrega solo")
        if q.get("dominio") not in (1, 2, 3, 4):
            errores.append(f"{nombre} {qid}: 'dominio' debe ser 1, 2, 3 o 4")
        opciones = q.get("opciones") or []
        n_ok = sum(1 for o in opciones if o.get("correcta"))
        if len(opciones) < 2 or n_ok == 0:
            errores.append(f"{nombre} {qid}: necesita al menos 2 opciones y 1 correcta")
            continue
        if any(not o.get("texto") for o in opciones):
            errores.append(f"{nombre} {qid}: hay una opción sin 'texto'")
        if any(not o.get("porque") for o in opciones):
            avisos.append(f"{nombre} {qid}: hay opciones sin 'porque'")
        if n_ok == 1 and len(opciones) != 4:
            avisos.append(f"{nombre} {qid}: opción única con {len(opciones)} opciones (el examen usa 4)")
        if n_ok > 1:
            multiples += 1
            if len(opciones) < 5:
                avisos.append(f"{nombre} {qid}: respuesta múltiple con {len(opciones)} opciones (el examen usa 5 o más)")
    if len(preguntas) >= 15:
        pct = multiples / len(preguntas) * 100
        if not 5 <= pct <= 30:
            avisos.append(f"{nombre}: {pct:.0f} % de respuesta múltiple (lo acordado es ~15 %)")
    return errores, avisos
