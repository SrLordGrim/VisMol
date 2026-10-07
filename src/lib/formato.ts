// Textos que llegan del PDB en inglés y se muestran en la interfaz.

const METODOS: Record<string, string> = {
    'X-RAY DIFFRACTION': 'Difracción de rayos X',
    'SOLUTION NMR': 'RMN en solución',
    'SOLID-STATE NMR': 'RMN en estado sólido',
    'ELECTRON MICROSCOPY': 'Microscopía electrónica',
    'ELECTRON CRYSTALLOGRAPHY': 'Cristalografía electrónica',
    'NEUTRON DIFFRACTION': 'Difracción de neutrones',
    'FIBER DIFFRACTION': 'Difracción de fibras',
    'POWDER DIFFRACTION': 'Difracción de polvo',
};

/** «X-RAY DIFFRACTION» → «Difracción de rayos X». Lo desconocido se deja tal cual. */
export function metodoEs(metodo: string): string {
    return metodo
        .split(/[;,]/)
        .map((m) => m.trim())
        .filter(Boolean)
        .map((m) => METODOS[m.toUpperCase()] ?? m)
        .join(' y ');
}

const MESES: Record<string, number> = {
    JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
};

/**
 * Fecha de depósito. El encabezado PDB la trae como «23-AUG-96», con el año en
 * dos cifras: el banco abrió en 1971, así que 71-99 son del siglo XX y el resto
 * del XXI. El mmCIF la trae como «1996-08-23». Si no se reconoce, se deja igual.
 */
export function fechaEs(fecha: string): string {
    let d: Date | null = null;
    const pdb = fecha.trim().match(/^(\d{1,2})-([A-Z]{3})-(\d{2})$/i);
    const iso = fecha.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (pdb && MESES[pdb[2].toUpperCase()] !== undefined) {
        const yy = Number(pdb[3]);
        d = new Date(Date.UTC(yy >= 71 ? 1900 + yy : 2000 + yy, MESES[pdb[2].toUpperCase()], Number(pdb[1])));
    } else if (iso) {
        d = new Date(Date.UTC(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3])));
    }
    return d ? d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }) : fecha;
}
