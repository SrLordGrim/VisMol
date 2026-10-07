#!/usr/bin/env python3
"""Descarga y comprime los modelos de células de NIH 3D que usa VisMol.

La lista curada vive en src/lib/celulas.json (la misma que lee la app). Este
script baja cada pieza desde NIH 3D, la comprime con gltfpack (meshopt) y la
deja en public/celulas/, junto con una miniatura propia que renderiza Blender
(las de NIH 3D tienen fondo blanco y varias muestran el modelo de perfil).

Solo entran modelos con licencia CC-BY, CC-BY-SA o de dominio público: las
licencias no comerciales (NC) quedaron fuera porque VisMol tiene un botón de
Patreon, y las «sin derivados» (ND) no admiten la compresión que se hace aquí.

Uso:  python3 tools/celulas.py        (requiere npx para gltfpack, blender e ImageMagick)
"""
import json
import os
import subprocess
import tempfile
import urllib.request

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONFIG = os.path.join(RAIZ, "src", "lib", "celulas.json")
SALIDA = os.path.join(RAIZ, "public", "celulas")
API = "https://3d.nih.gov/api"
LICENCIAS_OK = {"CC-BY", "CC-BY-SA", "Public Domain"}
# Por encima de este tamaño se simplifica la malla: el visor tiene que cargar
# rápido en un teléfono, y la diferencia no se nota a la distancia de la cámara.
OBJETIVO = 2_500_000


def leer_json(url):
    return json.load(urllib.request.urlopen(url, timeout=60))


def bajar(url, destino):
    with urllib.request.urlopen(url, timeout=300) as r, open(destino, "wb") as f:
        f.write(r.read())
    return os.path.getsize(destino)


def main():
    os.makedirs(SALIDA, exist_ok=True)
    modelos = json.load(open(CONFIG, encoding="utf-8"))
    for m in modelos:
        entrada = leer_json(f"{API}/entries/{m['id']}")
        sub = next((s for s in entrada["submissions"] if s["submissionStatus"] == "Published"),
                   entrada["submissions"][0])
        licencia = sub["metadata"]["license"]
        # La licencia se comprueba contra la fuente en cada corrida: si el
        # autor la cambiara, el modelo no debe seguir publicándose sin revisión.
        if licencia not in LICENCIAS_OK:
            raise SystemExit(f"{m['id']}: la licencia en NIH 3D es {licencia}, no admitida")
        sid = sub["submissionId"]
        originales = []
        for n, pieza in enumerate(m["piezas"]):
            if pieza["origen"] == "output":
                url = f"{API}/download?submissionId={sid}&fileIds={pieza['fileId']}"
            else:
                url = f"{API}/submissions/{sid}/files/input/{pieza['fileId']}"
            destino = os.path.join(SALIDA, f"{m['id']}-{n}.glb")
            with tempfile.NamedTemporaryFile(suffix=".glb", delete=False) as tmp:
                crudo = tmp.name
            tam = bajar(url, crudo)
            args = ["npx", "--yes", "gltfpack", "-i", crudo, "-o", destino, "-cc"]
            if tam > OBJETIVO:
                args += ["-si", f"{max(0.05, OBJETIVO / tam):.3f}"]
            subprocess.run(args, check=True, capture_output=True)
            originales.append(f"{crudo}#{pieza['color']}")
            print(f"{m['id']}-{n}: {tam / 1e6:.1f} MB -> {os.path.getsize(destino) / 1e6:.2f} MB")
        # La miniatura se renderiza desde el original, no desde el comprimido:
        # Blender no lee la compresión meshopt.
        subprocess.run(["blender", "-b", "--python", os.path.join(RAIZ, "tools", "miniatura_blender.py"),
                        "--", os.path.join(SALIDA, f"{m['id']}.png"), *originales],
                       check=True, capture_output=True)
        for o in originales:
            os.remove(o.split("#")[0])
        # WebP a 360×270: la cuadrícula del explorador no necesita más, y en PNG
        # las miniaturas pesaban casi tanto como los modelos.
        png = os.path.join(SALIDA, f"{m['id']}.png")
        subprocess.run(["magick", png, "-resize", "360x270", "-quality", "82", png[:-4] + ".webp"], check=True)
        os.remove(png)


if __name__ == "__main__":
    main()
