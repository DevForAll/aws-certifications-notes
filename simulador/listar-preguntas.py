"""Lista los enunciados ya usados en todos los bancos, para no repetir preguntas.

Uso:
  python simulador/listar-preguntas.py                 # todos, una línea por pregunta
  python simulador/listar-preguntas.py --modulo 2      # solo bancos del módulo 2
  python simulador/listar-preguntas.py --buscar "S3"   # enunciados u opciones correctas que contengan el texto
  python simulador/listar-preguntas.py --largo         # enunciado completo y respuesta correcta
"""
import argparse
import sys

from bancos import RAIZ, buscar_bancos, leer_banco

sys.stdout.reconfigure(encoding="utf-8")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--modulo", type=int, help="filtrar por número de módulo")
    ap.add_argument("--buscar", help="texto a buscar (sin distinguir mayúsculas)")
    ap.add_argument("--largo", action="store_true", help="mostrar enunciado completo y respuesta correcta")
    args = ap.parse_args()

    total = 0
    for ruta in buscar_bancos():
        b = leer_banco(ruta)
        if args.modulo is not None and b.get("modulo") != args.modulo:
            continue
        filas = []
        for q in b["preguntas"]:
            ok = " / ".join(o["texto"] for o in q["opciones"] if o.get("correcta"))
            if args.buscar and args.buscar.lower() not in (q["enunciado"] + " " + ok).lower():
                continue
            enun = " ".join(q["enunciado"].split())
            if args.largo:
                filas.append(f"  {q['id']} [D{q.get('dominio')}] {enun}\n      → {ok}")
            else:
                filas.append(f"  {q['id']} [D{q.get('dominio')}] {enun[:110]}{'…' if len(enun) > 110 else ''} → {ok[:40]}")
        if filas:
            print(f"{ruta.relative_to(RAIZ).as_posix()} ({len(filas)})")
            print("\n".join(filas))
            total += len(filas)
    print(f"\nTotal: {total} preguntas")


if __name__ == "__main__":
    main()
