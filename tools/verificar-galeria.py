#!/usr/bin/env python3
"""Comprueba que cada molécula de la galería sea lo que dice ser.

Hasta el 07-oct-2026 la galería tenía 141 entradas y la mayoría apuntaba a un
código PDB que no correspondía a la molécula nombrada («Insulina» abría una
metarrodopsina, «CRISPR-Cas9» un nucleosoma) y cinco códigos ni existían. Se
reconstruyó entera, y cada entrada de src/lib/molecules.json lleva en
`verifica` una expresión que tiene que aparecer en el título del PDB o en la
descripción de alguna de sus cadenas.

Uso:  python3 tools/verificar-galeria.py [archivo.json]   (sale con 1 si algo no cuadra)
"""
import json
import os
import re
import sys
import urllib.request

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GALERIA = os.path.join(RAIZ, "src", "lib", "molecules.json")
CONSULTA = """{ entries(entry_ids: %s) { rcsb_id struct { title }
  polymer_entities { rcsb_polymer_entity { pdbx_description } }
  nonpolymer_entities { rcsb_nonpolymer_entity { pdbx_description } } } }"""


def main():
    galeria = json.load(open(sys.argv[1] if len(sys.argv) > 1 else GALERIA, encoding="utf-8"))
    ids = [m["id"] for m in galeria]
    fallos = [f"código repetido: {i}" for i in sorted({i for i in ids if ids.count(i) > 1})]

    cuerpo = json.dumps({"query": CONSULTA % json.dumps(ids)}).encode()
    pedido = urllib.request.Request("https://data.rcsb.org/graphql", data=cuerpo,
                                    headers={"content-type": "application/json"})
    datos = json.load(urllib.request.urlopen(pedido, timeout=120))
    pdb = {e["rcsb_id"]: e for e in datos["data"]["entries"] if e}

    for m in galeria:
        e = pdb.get(m["id"])
        if not e:
            fallos.append(f"{m['id']} ({m['title']}): no existe en el PDB")
            continue
        textos = [e["struct"]["title"]]
        textos += [p["rcsb_polymer_entity"]["pdbx_description"] or "" for p in e.get("polymer_entities") or []]
        textos += [p["rcsb_nonpolymer_entity"]["pdbx_description"] or "" for p in e.get("nonpolymer_entities") or []]
        if not re.search(m["verifica"], " | ".join(textos), re.I):
            fallos.append(f"{m['id']} ({m['title']}): el PDB dice «{e['struct']['title'][:90]}»")

    print(f"{len(galeria)} moléculas comprobadas contra el PDB, {len(fallos)} fallos")
    for f in fallos:
        print("  ✗", f)
    sys.exit(1 if fallos else 0)


if __name__ == "__main__":
    main()
