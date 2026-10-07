// Galería de moléculas del explorador. Los datos viven en molecules.json, y
// tools/verificar-galeria.py comprueba contra el PDB que cada código sea la
// molécula que se nombra (la galería anterior tenía la mayoría equivocados).
import datos from './molecules.json';

export interface GalleryItem {
    id: string;
    title: string;
    category: string;
    tags: string[];
    description: string;
    url: string;
}

export const MOLECULE_GALLERY: GalleryItem[] = datos;
