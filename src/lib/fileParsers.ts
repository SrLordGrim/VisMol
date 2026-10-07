import { Structure } from './types';
import { parsePDB } from './parsers/pdb-parser';
import { parseMMCIF } from './parsers/mmcif-parser';
import { parseSDF } from './parsers/sdf-parser';
import { parseMOL2 } from './parsers/mol2-parser';
import { parseGRO } from './parsers/gro-parser';

// Format priority order for structure loading by ID
const FORMAT_PRIORITY = [
    { ext: 'pdb', url: (id: string) => `https://files.rcsb.org/download/${id}.pdb` },
    { ext: 'cif', url: (id: string) => `https://files.rcsb.org/download/${id}.cif` },
    // MMTF is binary and not yet supported, but we could add it later
    // { ext: 'mmtf', url: (id: string) => `https://files.rcsb.org/download/${id}.mmtf` },
];

/**
 * Attempts to load a structure by ID from RCSB PDB, trying multiple formats in order.
 * Returns the structure and the format that succeeded, or throws an error if all formats fail.
 */
export const loadStructureById = async (id: string): Promise<{ structure: Structure; format: string; filename: string }> => {
    const errors: string[] = [];
    
    for (const formatInfo of FORMAT_PRIORITY) {
        try {
            const url = formatInfo.url(id);
            const response = await fetch(url);
            
            if (response.status === 404) {
                errors.push(`${formatInfo.ext.toUpperCase()}: Not found (404)`);
                continue; // Try next format
            }
            
            if (!response.ok) {
                errors.push(`${formatInfo.ext.toUpperCase()}: HTTP ${response.status}`);
                continue; // Try next format
            }
            
            const text = await response.text();
            
            if (!text || text.trim().length === 0) {
                errors.push(`${formatInfo.ext.toUpperCase()}: respuesta vacía`);
                continue; // Try next format
            }
            
            // Parse the structure
            const filename = `${id}.${formatInfo.ext}`;
            const structure = parseStructureFile(text, filename);
            
            return { structure, format: formatInfo.ext, filename };
        } catch (error: any) {
            // Network errors or parsing errors
            errors.push(`${formatInfo.ext.toUpperCase()}: ${error.message || 'error desconocido'}`);
            continue; // Try next format
        }
    }
    
    // All formats failed
    throw new Error(`No se pudo cargar la estructura ${id} en ningún formato compatible. Errores: ${errors.join('; ')}`);
};

// Detect file format from filename or content
export const detectFileFormat = (filename: string, content?: string): string => {
    const ext = filename.toLowerCase().split('.').pop() || '';

    if (ext === 'pdb' || ext === 'ent') return 'pdb';
    if (ext === 'cif' || ext === 'mmcif') return 'mmcif';
    if (ext === 'mmtf') return 'mmtf';
    if (ext === 'sdf') return 'sdf';
    if (ext === 'mol2') return 'mol2';
    if (ext === 'gro') return 'gro';
    if (ext === 'xtc' || ext === 'trr' || ext === 'dcd') return 'trajectory';
    if (ext === 'mrc' || ext === 'ccp4') return 'map';

    // Try to detect from content
    if (content) {
        if (content.startsWith('data_') || content.includes('loop_')) return 'mmcif';
        if (content.startsWith('HEADER') || content.includes('ATOM') || content.includes('HETATM')) return 'pdb';
        if (content.includes('@<TRIPOS>')) return 'mol2';
        if (content.includes('V2000') || content.includes('V3000')) return 'sdf';
    }

    return 'pdb'; // Default fallback
};

// Unified parser function
export const parseStructureFile = (content: string, filename: string): Structure => {
    const format = detectFileFormat(filename, content);

    switch (format) {
        case 'pdb':
            return parsePDB(content);
        case 'mmcif':
            return parseMMCIF(content);
        case 'sdf':
            return parseSDF(content);
        case 'mol2':
            return parseMOL2(content);
        case 'gro':
            return parseGRO(content);
        case 'mmtf':
            // MMTF is binary, would need a library like mmtf-js
            throw new Error('El formato MMTF todavía no es compatible. Conviértelo a PDB o mmCIF.');
        case 'trajectory':
            // Trajectory files need special handling
            throw new Error('Los formatos de trayectoria (XTC/TRR/DCD) todavía no son compatibles. Carga por separado el archivo de estructura (GRO/PDB).');
        case 'map':
            // Cryo-EM maps need special handling
            throw new Error('Los mapas (MRC/CCP4) todavía no son compatibles. Carga por separado el archivo de estructura.');
        default:
            // Try PDB as fallback
            return parsePDB(content);
    }
};
