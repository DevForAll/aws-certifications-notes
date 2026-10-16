"""Regenera contenido.js (índice del portal) y notas.js (texto de las notas) y valida los bancos.

Uso:  python actualizar-indice.py
Se corre en cada cierre de sesión y después de crear un banco. Sale con código 1 si algún banco tiene errores.
No editar contenido.js ni notas.js a mano: se sobrescriben.
"""
import json
import re
import sys
import unicodedata
from datetime import datetime
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent / "simulador"))
from bancos import RAIZ, buscar_bancos, leer_banco, validar_banco  # noqa: E402

sys.stdout.reconfigure(encoding="utf-8")

CP = RAIZ / "cloud-practitioner"
RE_LECCION = re.compile(r"^Lecci[oó]n\s*(\d+)\s*[-–]\s*(.+)\.(md|html)$", re.I)
RE_PARTE = re.compile(r"\s*[-–]?\s*\bparte\s*(\d+)\b", re.I)
RE_BANCO = re.compile(r"^leccion-(\d+)(?:-p(\d+))?\.js$")
RE_OBSIDIAN_IMG = re.compile(r"!\[\[([^\]|]+)(?:\|[^\]]*)?\]\]\n?")


def rel(p):
    return Path(p).relative_to(RAIZ).as_posix()


def nfc(s):
    return unicodedata.normalize("NFC", s)


def preparar_nota(ruta):
    """Lee el .md y convierte las imágenes de Obsidian (![[x.png]]) en Markdown si el archivo existe; si no, las quita."""
    texto = ruta.read_text(encoding="utf-8")

    def imagen(m):
        nombre = m.group(1).strip()
        for cand in (ruta.parent / "img" / nombre, ruta.parent / nombre):
            if cand.exists():
                return f"![{nombre}](<{cand.relative_to(ruta.parent).as_posix()}>)\n"
        return ""

    return RE_OBSIDIAN_IMG.sub(imagen, texto)


def resumen_banco(ruta, b):
    return {"ruta": rel(ruta), "id": b["id"], "titulo": b["titulo"], "tipo": b["tipo"], "n": len(b["preguntas"])}


def main():
    portal = json.loads((RAIZ / "portal.json").read_text(encoding="utf-8"))
    descripciones = {nfc(k): v for k, v in portal.get("descripciones", {}).items()}

    # ── bancos: validar todos ───────────────────────────────
    bancos, errores, avisos, ids = {}, [], [], {}
    for ruta in buscar_bancos():
        try:
            b = leer_banco(ruta)
        except ValueError as e:
            errores.append(str(e))
            continue
        e, a = validar_banco(b, ruta, ids)
        errores += e
        avisos += a
        bancos[rel(ruta)] = (ruta, b)

    # ── resultados ──────────────────────────────────────────
    resultados = []
    for ruta in sorted((RAIZ / "resultados").glob("*.json")):
        try:
            r = json.loads(ruta.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            errores.append(f"resultados/{ruta.name}: JSON inválido ({e.msg})")
            continue
        r["id"] = ruta.stem
        resultados.append(r)
    resultados.sort(key=lambda r: r.get("fecha", ""), reverse=True)
    por_banco = {}
    for r in resultados:
        por_banco.setdefault(r.get("banco"), []).append(r["id"])

    notas = {}
    modulos = []
    for cfg in portal["modulos"]:
        carpeta = CP / cfg["carpeta"]
        lecciones = {}

        def leccion(num, parte):
            return lecciones.setdefault((num, parte), {
                "num": num, "parte": parte, "titulo": None, "desc": "", "nota": None,
                "practica": None, "evalAntigua": [], "resultados": []})

        if carpeta.is_dir():
            for f in sorted(carpeta.iterdir(), key=lambda p: nfc(p.name)):
                m = RE_LECCION.match(nfc(f.name))
                if not f.is_file() or not m:
                    continue
                num, resto, ext = int(m.group(1)), m.group(2).strip(), m.group(3).lower()
                mp = RE_PARTE.search(resto)
                parte = int(mp.group(1)) if mp else 0
                titulo = RE_PARTE.sub("", resto).strip(" -–")
                es_eval = titulo.upper().startswith("EVALUACION")
                lec = leccion(num, parte)
                if es_eval:
                    lec["evalAntigua"].append({"ruta": rel(f), "tipo": ext})
                    if ext == "md":
                        notas[rel(f)] = preparar_nota(f)
                elif ext == "md":
                    lec["nota"] = rel(f)
                    lec["titulo"] = titulo + (f" (Parte {parte})" if parte else "")
                    lec["desc"] = descripciones.get(nfc(f"{cfg['carpeta']}/{f.name}"), "")
                    notas[rel(f)] = preparar_nota(f)

            practicas = carpeta / "practicas"
            simulacro = None
            if practicas.is_dir():
                for f in sorted(practicas.glob("*.js")):
                    if rel(f) not in bancos:
                        continue
                    _, b = bancos[rel(f)]
                    info = resumen_banco(f, b)
                    info["resultados"] = por_banco.get(rel(f), [])
                    m = RE_BANCO.match(f.name)
                    if m:
                        lec = leccion(int(m.group(1)), int(m.group(2) or 0))
                        lec["practica"] = info
                        lec["titulo"] = lec["titulo"] or re.sub(r"^M\d+\s+L[\w-]+\s*[—-]\s*", "", b["titulo"])
                    elif f.name == "simulacro-modulo.js":
                        simulacro = info
        else:
            simulacro = None

        lista = []
        for (num, parte), lec in sorted(lecciones.items()):
            lec["titulo"] = lec["titulo"] or (f"Evaluación antigua" if lec["evalAntigua"] else f"Lección {num}")
            if lec["practica"]:
                lec["resultados"] = lec["practica"]["resultados"]
            lista.append(lec)
        modulos.append({**cfg, "lecciones": lista, "simulacro": simulacro})

    # ── repaso general ──────────────────────────────────────
    rg = CP / "repaso-general"
    repaso = []
    if rg.is_dir():
        for f in sorted(rg.glob("Resumen_Maestro_*.md")):
            sufijo = f.stem.replace("Resumen_Maestro_", "")
            evaluacion = rg / f"Evaluacion_Simulada_{sufijo}.html"
            notas[rel(f)] = preparar_nota(f)
            repaso.append({"titulo": "Resumen maestro — " + sufijo.replace("_", " "), "nota": rel(f),
                           "evalAntigua": [{"ruta": rel(evaluacion), "tipo": "html"}] if evaluacion.exists() else [],
                           "practica": None, "resultados": []})
        for f in sorted(rg.glob("simulacro-*.js")):
            if rel(f) in bancos:
                _, b = bancos[rel(f)]
                info = resumen_banco(f, b)
                info["resultados"] = por_banco.get(rel(f), [])
                repaso.append({"titulo": b["titulo"], "nota": None, "evalAntigua": [], "practica": info,
                               "resultados": info["resultados"]})

    contenido = {
        "generado": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "examen": portal.get("examen", {}),
        "modulos": modulos,
        "repaso": repaso,
        "resultados": resultados,
    }
    escribir(RAIZ / "contenido.js", "window.CONTENIDO = ", contenido)
    escribir(RAIZ / "notas.js", "window.NOTAS = ", notas)

    n_lec = sum(1 for m in modulos for lec in m["lecciones"] if lec["nota"])
    n_prac = len(bancos)
    print(f"OK contenido.js: {len(modulos)} módulos, {n_lec} notas de lección, {n_prac} bancos, {len(resultados)} resultados")
    print(f"OK notas.js: {len(notas)} archivos .md")
    for a in avisos:
        print("AVISO", a)
    for e in errores:
        print("ERROR", e)
    if errores:
        sys.exit(1)


def escribir(ruta, prefijo, datos):
    texto = prefijo + json.dumps(datos, ensure_ascii=False, indent=1) + ";\n"
    ruta.write_text(texto, encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
