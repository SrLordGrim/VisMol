"""Renderiza la miniatura de una célula. Se ejecuta DENTRO de Blender:

    blender -b --python tools/miniatura_blender.py -- salida.png pieza1.glb#color pieza2.glb#color ...

Usa el motor Workbench (rápido, sin GPU) con fondo transparente, y mira el
modelo de frente a su cara más grande: las miniaturas de NIH 3D mostraban
varios modelos de perfil, reducidos a una línea.
"""
import sys

import bpy
from mathutils import Vector

args = sys.argv[sys.argv.index("--") + 1:]
salida, piezas = args[0], args[1:]

bpy.ops.wm.read_factory_settings(use_empty=True)
escena = bpy.context.scene

for pieza in piezas:
    ruta, _, color = pieza.partition("#")
    antes = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=ruta)
    if color and color != "None":
        rgb = tuple(int(color.lstrip("#")[i:i + 2], 16) / 255 for i in (0, 2, 4))
        mat = bpy.data.materials.new("color")
        mat.diffuse_color = (*rgb, 1)
        for o in set(bpy.data.objects) - antes:
            if o.type == "MESH":
                o.data.materials.clear()
                o.data.materials.append(mat)

mallas = [o for o in escena.objects if o.type == "MESH"]
puntos = [o.matrix_world @ Vector(c) for o in mallas for c in o.bound_box]
minimo = Vector(min(p[i] for p in puntos) for i in range(3))
maximo = Vector(max(p[i] for p in puntos) for i in range(3))
centro, tam = (minimo + maximo) / 2, maximo - minimo

# Se mira a lo largo del eje más corto, que deja de frente la cara más grande.
eje = min(range(3), key=lambda i: tam[i])
otros = [i for i in range(3) if i != eje]
direccion = Vector((0, 0, 0))
direccion[eje] = 1

cam_datos = bpy.data.cameras.new("cam")
cam_datos.type = "ORTHO"
cam_datos.ortho_scale = max(tam[otros[0]] * 4 / 3, tam[otros[1]]) * 1.15 or 1
cam_datos.clip_end = tam.length * 10 + 10
cam = bpy.data.objects.new("cam", cam_datos)
escena.collection.objects.link(cam)
cam.location = centro + direccion * (tam.length * 2 + 1)
cam.rotation_euler = (centro - cam.location).to_track_quat("-Z", "Y").to_euler()
escena.camera = cam

escena.render.engine = "BLENDER_WORKBENCH"
escena.display.shading.light = "STUDIO"
escena.display.shading.color_type = "MATERIAL"
escena.display.shading.show_cavity = True
escena.render.film_transparent = True
escena.render.resolution_x, escena.render.resolution_y = 480, 360
escena.render.filepath = salida
bpy.ops.render.render(write_still=True)
