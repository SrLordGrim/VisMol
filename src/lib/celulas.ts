// Galería de células: modelos 3D de NIH 3D (https://3d.nih.gov) con licencia
// libre. La lista curada está en celulas.json, que también lee
// tools/celulas.py para descargar y comprimir los archivos a public/celulas/.
import datos from './celulas.json';

export interface PiezaCelula {
    origen: 'output' | 'input';
    fileId: number;
    /** Color de la pieza; null conserva el material original del modelo. */
    color: string | null;
}

export interface Celula {
    id: string;
    titulo: string;
    categoria: string;
    tipo: string;
    descripcion: string;
    /** null cuando NIH 3D no declara autor: se acredita la entrada de NIH 3D. */
    autor: string | null;
    licencia: 'CC-BY' | 'CC-BY-SA' | 'CC-BY-NC' | 'CC-BY-NC-SA' | 'Dominio público';
    piezas: PiezaCelula[];
}

export const CELULAS = datos as Celula[];

export const CATEGORIA_CELULAS = 'Células (NIH 3D)';

const LICENCIAS: Record<Celula['licencia'], string | null> = {
    'CC-BY': 'https://creativecommons.org/licenses/by/4.0/deed.es',
    'CC-BY-SA': 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
    'CC-BY-NC': 'https://creativecommons.org/licenses/by-nc/4.0/deed.es',
    'CC-BY-NC-SA': 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es',
    'Dominio público': null,
};

export const urlLicencia = (c: Celula) => LICENCIAS[c.licencia];
export const urlNih = (c: Celula) => `https://3d.nih.gov/entries/${c.id}`;
export const urlPiezas = (c: Celula) => c.piezas.map((_, n) => `/celulas/${c.id}-${n}.glb`);
export const urlMiniatura = (c: Celula) => `/celulas/${c.id}.webp`;
