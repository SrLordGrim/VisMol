# VisMol

Visualizador molecular 3D gratuito para la ciencia, en [vismol.kevinzhu.me](https://vismol.kevinzhu.me). Funciona en el navegador, sin cuentas ni publicidad.

- **Moléculas:** una galería de 91 estructuras del [Protein Data Bank](https://www.rcsb.org) (proteínas, enzimas, ADN y ARN, canales, proteínas de membrana, hormonas y virus), cualquier código PDB que se escriba a mano y archivos propios en PDB, mmCIF, MOL2, SDF o GRO.
- **Células:** una galería de 32 modelos de [NIH 3D](https://3d.nih.gov): neuronas, orgánulos, bacterias, parásitos y granos de polen reconstruidos a partir de imágenes de microscopio.

## Fuentes y créditos

- Las moléculas se descargan en el momento desde el RCSB PDB, en `files.rcsb.org`. Es el único servicio externo al que se conecta la aplicación.
- Cada modelo de célula muestra en el visor a su autor, su licencia y el enlace a su ficha en NIH 3D. Solo se usan modelos con licencia CC-BY, CC-BY-SA, CC-BY-NC, CC-BY-NC-SA o de dominio público. Las licencias no comerciales (NC) se admiten porque VisMol es gratuito y no se monetiza; si eso cambiara, esos modelos tendrían que salir.
- Los modelos de células se sirven comprimidos y, en algunos casos, simplificados para que carguen rápido en un teléfono. Para las licencias «compartir igual» (SA), esa versión comprimida queda bajo la misma licencia que el original.

## Galerías

| Archivo | Qué contiene | Herramienta |
|---|---|---|
| `src/lib/molecules.json` | Las 91 moléculas, cada una con una expresión `verifica` | `python3 tools/verificar-galeria.py` comprueba contra el PDB que cada código sea la molécula que se nombra |
| `src/lib/celulas.json` | Los 32 modelos de NIH 3D | `python3 tools/celulas.py` los descarga, comprueba su licencia en la fuente, los comprime (gltfpack) y renderiza sus miniaturas (Blender) en `public/celulas/` |

**Antes de publicar un cambio en la galería de moléculas, hay que correr el verificador.** Hasta octubre de 2026 la mayoría de las entradas apuntaba a un código PDB equivocado («Insulina» abría una metarrodopsina) y nadie lo había notado.

## Desarrollo

```bash
npm ci
npm run dev        # servidor local
npm run build      # genera dist/
```

Publicación: `npm run build` y copiar `dist/` a `/opt/docker/vismol-site` en el servidor (Nginx).
