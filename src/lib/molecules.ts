export interface GalleryItem {
    id: string;
    title: string;
    category: string;
    tags: string[];
    description: string;
    url: string;
}

export const MOLECULE_GALLERY: GalleryItem[] = [
    // Proteins - Enzymes
    {
        id: '1CRN',
        title: 'Crambin',
        category: 'Proteínas',
        tags: ['Pequeña', 'Alta resolución', 'Planta', 'Tionina'],
        description: 'Pequeña proteína de almacenamiento de semillas de la col abisinia. Es un estándar de alta resolución para cristalografía.',
        url: 'https://files.rcsb.org/download/1CRN.pdb'
    },
    {
        id: '1GFL',
        title: 'Proteína fluorescente verde',
        category: 'Proteínas',
        tags: ['Bioluminiscencia', 'Premio Nobel', 'Barril beta', 'Fluorescente'],
        description: 'La famosa GFP de la medusa Aequorea victoria. Destaca la estructura de barril beta y el cromóforo.',
        url: 'https://files.rcsb.org/download/1GFL.pdb'
    },
    {
        id: '4HHB',
        title: 'Hemoglobina',
        category: 'Proteínas',
        tags: ['Sangre', 'Oxígeno', 'Tetrámero', 'Hemo'],
        description: 'Molécula de desoxihemoglobina que transporta oxígeno en la sangre. Contiene cuatro subunidades.',
        url: 'https://files.rcsb.org/download/4HHB.pdb'
    },
    {
        id: '1MBN',
        title: 'Mioglobina',
        category: 'Proteínas',
        tags: ['Músculo', 'Oxígeno', 'Histórica', 'Hemo'],
        description: 'Mioglobina de cachalote. Fue la primera estructura proteica determinada mediante cristalografía de rayos X.',
        url: 'https://files.rcsb.org/download/1MBN.pdb'
    },
    {
        id: '1E9W',
        title: 'Amylase',
        category: 'Enzimas',
        tags: ['Digestión', 'Pancreática', 'Glicosidasa'],
        description: 'Alfa-amilasa pancreática, una enzima que descompone el almidón en azúcares.',
        url: 'https://files.rcsb.org/download/1E9W.pdb'
    },
    {
        id: '8LYZ',
        title: 'Lysozyme',
        category: 'Enzimas',
        tags: ['Antibacteriana', 'Clara de huevo', 'Glicosidasa'],
        description: 'Lisozima de clara de huevo de gallina, descompone las paredes celulares bacterianas. Es un sistema modelo para estudios.',
        url: 'https://files.rcsb.org/download/8LYZ.pdb'
    },
    {
        id: '1TIM',
        title: 'Triosephosphate Isomerase',
        category: 'Enzimas',
        tags: ['Glucólisis', 'Perfección catalítica', 'Barril'],
        description: 'Estructura de barril TIM, considerada un ejemplo de perfección catalítica en enzimas.',
        url: 'https://files.rcsb.org/download/1TIM.pdb'
    },
    {
        id: '1CEX',
        title: 'Chymotrypsin',
        category: 'Enzimas',
        tags: ['Proteasa', 'Digestiva', 'Proteasa de serina'],
        description: 'Proteasa de serina que digiere proteínas en el intestino delgado.',
        url: 'https://files.rcsb.org/download/1CEX.pdb'
    },
    {
        id: '1RBP',
        title: 'Proteína fijadora de retinol',
        category: 'Proteínas',
        tags: ['Transporte', 'Vitamina A', 'Barril beta'],
        description: 'Transporta retinol (vitamina A) en el plasma sanguíneo.',
        url: 'https://files.rcsb.org/download/1RBP.pdb'
    },

    // DNA/RNA Structures
    {
        id: '1BNA',
        title: 'Hélice de ADN-B',
        category: 'ADN/ARN',
        tags: ['Genética', 'Doble hélice', 'Canónica'],
        description: 'Estructura de un dodecámero de ADN-B. Es la forma clásica de doble hélice dextrógira.',
        url: 'https://files.rcsb.org/download/1BNA.pdb'
    },
    {
        id: '4R4V',
        title: 'Hélice de ADN-A',
        category: 'ADN/ARN',
        tags: ['Doble hélice', 'Deshidratada', 'Surco ancho'],
        description: 'ADN en forma A, más ancho y corto que el ADN-B, presente en condiciones deshidratadas.',
        url: 'https://files.rcsb.org/download/4R4V.pdb'
    },
    {
        id: '2GKU',
        title: 'Z-DNA',
        category: 'ADN/ARN',
        tags: ['Zurda', 'Zigzag', 'Alternativa'],
        description: 'Doble hélice de ADN zurda con esqueleto en zigzag. Es una forma alternativa de ADN.',
        url: 'https://files.rcsb.org/download/2GKU.pdb'
    },
    {
        id: '1EHZ',
        title: 'tRNA',
        category: 'ADN/ARN',
        tags: ['ARN de transferencia', 'Hoja de trébol', 'Traducción'],
        description: 'ARNt de fenilalanina de levadura, muestra la característica estructura tridimensional en forma de L.',
        url: 'https://files.rcsb.org/download/1EHZ.pdb'
    },
    {
        id: '1FFK',
        title: 'Ribozyme',
        category: 'ADN/ARN',
        tags: ['ARN catalítico', 'Cabeza de martillo', 'Enzima'],
        description: 'Ribozima de cabeza de martillo, una molécula de ARN que cataliza reacciones químicas.',
        url: 'https://files.rcsb.org/download/1FFK.pdb'
    },

    // Membrane Proteins & Ion Channels
    {
        id: '1K4C',
        title: 'Canal de potasio',
        category: 'Canales iónicos',
        tags: ['Membrana', 'Transporte', 'Ión', 'Selectividad'],
        description: 'Estructura del canal de potasio KcsA de Streptomyces lividans.',
        url: 'https://files.rcsb.org/download/1K4C.pdb'
    },
    {
        id: '1BL8',
        title: 'Aquaporin',
        category: 'Proteínas de membrana',
        tags: ['Canal de agua', 'Membrana', 'Transporte'],
        description: 'Canal de agua aquaporina-1, facilita el transporte rápido de agua a través de membranas.',
        url: 'https://files.rcsb.org/download/1BL8.pdb'
    },
    {
        id: '1F88',
        title: 'Bacteriorhodopsin',
        category: 'Proteínas de membrana',
        tags: ['Activada por luz', 'Bomba de protones', 'Siete hélices'],
        description: 'Bomba de protones activada por luz de halobacterias. Presenta una estructura de siete hélices transmembrana.',
        url: 'https://files.rcsb.org/download/1F88.pdb'
    },
    {
        id: '2BG9',
        title: 'Receptor acoplado a proteína G',
        category: 'Proteínas de membrana',
        tags: ['GPCR', 'Transducción de señales', 'Rodopsina'],
        description: 'Rodopsina bovina, prototipo de la familia de receptores acoplados a proteína G.',
        url: 'https://files.rcsb.org/download/2BG9.pdb'
    },

    // Structural Proteins
    {
        id: '1CAG',
        title: 'Colágeno',
        category: 'Estructurales',
        tags: ['Triple hélice', 'Piel', 'Conectivo', 'Extracelular'],
        description: 'Modelo de la estructura de triple hélice del colágeno. Es un componente principal del tejido conectivo.',
        url: 'https://files.rcsb.org/download/1CAG.pdb'
    },
    {
        id: '1A6M',
        title: 'Actina',
        category: 'Estructurales',
        tags: ['Citoesqueleto', 'Músculo', 'Filamento'],
        description: 'Filamento de actina, componente principal del citoesqueleto y de los filamentos delgados musculares.',
        url: 'https://files.rcsb.org/download/1A6M.pdb'
    },
    {
        id: '1TUB',
        title: 'Tubulina',
        category: 'Estructurales',
        tags: ['Microtúbulos', 'Citoesqueleto', 'División celular'],
        description: 'Dímero alfa-beta de tubulina, bloque de construcción de los microtúbulos.',
        url: 'https://files.rcsb.org/download/1TUB.pdb'
    },
    {
        id: '2HBB',
        title: 'Queratina',
        category: 'Estructurales',
        tags: ['Cabello', 'Piel', 'Coiled-coil', 'Filamento intermedio'],
        description: 'Estructura coiled-coil de alfa-queratina, componente principal del cabello y las uñas.',
        url: 'https://files.rcsb.org/download/2HBB.pdb'
    },

    // Hormones & Signaling
    {
        id: '3PQR',
        title: 'Insulina',
        category: 'Hormonas',
        tags: ['Humana', 'Médica', 'Hexámero', 'Diabetes'],
        description: 'Hexámero de insulina humana complejado con zinc. Regula los niveles de glucosa en sangre.',
        url: 'https://files.rcsb.org/download/3PQR.pdb'
    },
    {
        id: '1GCN',
        title: 'Glucagón',
        category: 'Hormonas',
        tags: ['Metabolismo', 'Alfa hélice', 'Contrarreguladora'],
        description: 'Molécula de glucagón que regula los niveles de glucosa en sangre en sentido opuesto a la insulina.',
        url: 'https://files.rcsb.org/download/1GCN.pdb'
    },
    {
        id: '1HRP',
        title: 'Hormona del crecimiento',
        category: 'Hormonas',
        tags: ['Hipofisaria', 'Haz de cuatro hélices', 'Receptor'],
        description: 'Hormona del crecimiento humana con estructura de haz de cuatro hélices.',
        url: 'https://files.rcsb.org/download/1HRP.pdb'
    },

    // Viruses
    {
        id: '6VSB',
        title: 'SARS-CoV-2 Spike',
        category: 'Virus',
        tags: ['Pandemia', 'Viral', 'Glicoproteína', 'Fusión de membrana'],
        description: 'Glicoproteína espiga de 2019-nCoV en prefusión con un dominio de unión al receptor en posición elevada.',
        url: 'https://files.rcsb.org/download/6VSB.pdb'
    },
    {
        id: '2BBK',
        title: 'HIV-1 Protease',
        category: 'Virus',
        tags: ['Retroviral', 'Diana farmacológica', 'Dímero'],
        description: 'Proteasa del VIH-1, aspartil proteasa homodimérica esencial para la maduración viral.',
        url: 'https://files.rcsb.org/download/2BBK.pdb'
    },
    {
        id: '1A34',
        title: 'Hemaglutinina de la influenza',
        category: 'Virus',
        tags: ['Influenza', 'Fusión de membrana', 'Glicoproteína'],
        description: 'Hemaglutinina del virus de la influenza, media la entrada viral en las células del huésped.',
        url: 'https://files.rcsb.org/download/1A34.pdb'
    },

    // Molecular Machines & Complexes
    {
        id: '5B2I',
        title: 'CRISPR-Cas9',
        category: 'Enzimas',
        tags: ['Edición genética', 'Grande', 'Complejo', 'Defensa bacteriana'],
        description: 'Estructura cristalina de Cas9 de Streptococcus pyogenes complejada con ARN guía y ADN diana.',
        url: 'https://files.rcsb.org/download/5B2I.pdb'
    },
    {
        id: '7DDI',
        title: 'Polimerasa de ADN',
        category: 'Enzimas',
        tags: ['Replicación', 'ADN', 'Complejo', 'Fidelidad'],
        description: 'ADN polimerasa I de E. coli, muestra el mecanismo de fidelidad de la replicación.',
        url: 'https://files.rcsb.org/download/7DDI.pdb'
    },
    {
        id: '1GIX',
        title: 'ATP sintasa',
        category: 'Enzimas',
        tags: ['Energía', 'Rotación', 'Mitocondria', 'Proteína motora'],
        description: 'Porción F1-ATPasa de la ATP sintasa, motor rotatorio que sintetiza ATP.',
        url: 'https://files.rcsb.org/download/1GIX.pdb'
    },
    {
        id: '1RYB',
        title: 'Ribosoma',
        category: 'Complejos',
        tags: ['Traducción', 'Grande', 'ARN-proteína', 'Antibióticos'],
        description: 'Ribosoma bacteriano 70S, la máquina molecular para la síntesis de proteínas.',
        url: 'https://files.rcsb.org/download/1RYB.pdb'
    },

    // Transport & Storage
    {
        id: '1LMP',
        title: 'Mioglobina',
        category: 'Proteínas',
        tags: ['Almacenamiento de oxígeno', 'Músculo', 'Hemo'],
        description: 'Mioglobina de cachalote, encargada del almacenamiento de oxígeno en tejidos musculares.',
        url: 'https://files.rcsb.org/download/1LMP.pdb'
    },
    {
        id: '1FTP',
        title: 'Ferritin',
        category: 'Proteínas',
        tags: ['Almacenamiento de hierro', 'Esférica', 'Mineralización'],
        description: 'Ferritina, proteína de almacenamiento de hierro con estructura esférica tipo jaula.',
        url: 'https://files.rcsb.org/download/1FTP.pdb'
    },
    {
        id: '1MSH',
        title: 'Malato deshidrogenasa',
        category: 'Enzimas',
        tags: ['Ciclo del ácido cítrico', 'Oxidorreductasa', 'Mitocondrial'],
        description: 'Malato deshidrogenasa, enzima clave en el ciclo del ácido cítrico.',
        url: 'https://files.rcsb.org/download/1MSH.pdb'
    },

    // Antibodies & Immune System
    {
        id: '1IGT',
        title: 'Inmunoglobulina',
        category: 'Proteínas',
        tags: ['Anticuerpo', 'Inmunitaria', 'En forma de Y'],
        description: 'Fragmento Fab de inmunoglobulina G, muestra la estructura del sitio de unión al antígeno.',
        url: 'https://files.rcsb.org/download/1IGT.pdb'
    },
    {
        id: '1TCR',
        title: 'Receptor de células T',
        category: 'Proteínas',
        tags: ['Inmunitaria', 'Reconocimiento', 'MHC'],
        description: 'Complejo del receptor de células T, reconoce antígenos presentados por moléculas del MHC.',
        url: 'https://files.rcsb.org/download/1TCR.pdb'
    },

    // Nucleic Acid Binding Proteins
    {
        id: '1LMB',
        title: 'Represor lac',
        category: 'Proteínas',
        tags: ['Regulación génica', 'Unión al ADN', 'Hélice-giro-hélice'],
        description: 'Represor lac unido al ADN, ejemplo clásico de regulación génica.',
        url: 'https://files.rcsb.org/download/1LMB.pdb'
    },
    {
        id: '1YRN',
        title: 'Ribonucleasa A',
        category: 'Enzimas',
        tags: ['Degradación de ARN', 'Pequeña', 'Histórica'],
        description: 'Ribonucleasa A pancreática bovina, modelo temprano para estudios de plegamiento proteico.',
        url: 'https://files.rcsb.org/download/1YRN.pdb'
    },
    {
        id: '2DRP',
        title: 'Topoisomerasa de ADN',
        category: 'Enzimas',
        tags: ['Superenrollamiento del ADN', 'Topología', 'Diana anticancerígena'],
        description: 'Topoisomerasa I de ADN, regula el superenrollamiento y la topología del ADN.',
        url: 'https://files.rcsb.org/download/2DRP.pdb'
    },

    // Metabolic Enzymes
    {
        id: '4COX',
        title: 'Citocromo c oxidasa',
        category: 'Enzimas',
        tags: ['Respiración', 'Membrana', 'Reducción de oxígeno'],
        description: 'Citocromo c oxidasa, enzima terminal de la cadena mitocondrial de transporte de electrones.',
        url: 'https://files.rcsb.org/download/4COX.pdb'
    },
    {
        id: '1PHK',
        title: 'Fosfofructoquinasa',
        category: 'Enzimas',
        tags: ['Glucólisis', 'Alostérica', 'Regulación'],
        description: 'Fosfofructoquinasa, enzima reguladora clave de la glucólisis.',
        url: 'https://files.rcsb.org/download/1PHK.pdb'
    },
    {
        id: '8CAT',
        title: 'Catalasa',
        category: 'Enzimas',
        tags: ['Antioxidante', 'Hemo', 'Peróxido de hidrógeno'],
        description: 'Catalasa, convierte el peróxido de hidrógeno en agua y oxígeno.',
        url: 'https://files.rcsb.org/download/8CAT.pdb'
    },

    // Chaperones & Folding
    {
        id: '1AON',
        title: 'GroEL',
        category: 'Proteínas',
        tags: ['Chaperonina', 'Plegamiento proteico', 'Cilíndrica'],
        description: 'Chaperonina GroEL, asiste el plegamiento de proteínas en bacterias.',
        url: 'https://files.rcsb.org/download/1AON.pdb'
    },
    {
        id: '2HSP',
        title: 'Hsp70',
        category: 'Proteínas',
        tags: ['Choque térmico', 'Chaperona', 'ATPasa'],
        description: 'Chaperona Hsp70, evita la agregación de proteínas bajo condiciones de estrés.',
        url: 'https://files.rcsb.org/download/2HSP.pdb'
    },

    // Signal Transduction
    {
        id: '1F3G',
        title: 'Ras',
        category: 'Proteínas',
        tags: ['GTPasa', 'Oncogén', 'Transducción de señales'],
        description: 'GTPasa Ras, importante en la señalización celular y frecuentemente mutada en cánceres.',
        url: 'https://files.rcsb.org/download/1F3G.pdb'
    },
    {
        id: '1CDL',
        title: 'Calmodulin',
        category: 'Proteínas',
        tags: ['Unión a calcio', 'EF-hand', 'Señalización'],
        description: 'Calmodulina, proteína mensajera fijadora de calcio con motivos EF-hand.',
        url: 'https://files.rcsb.org/download/1CDL.pdb'
    },

    // Carbohydrate-binding
    {
        id: '2CGA',
        title: 'Concanavalin A',
        category: 'Proteínas',
        tags: ['Lectina', 'Unión a carbohidratos', 'Planta'],
        description: 'Concanavalina A, lectina vegetal que se une a moléculas específicas de azúcar.',
        url: 'https://files.rcsb.org/download/2CGA.pdb'
    },
    {
        id: '1SLT',
        title: 'Lisozima con sustrato',
        category: 'Enzimas',
        tags: ['Enzima-sustrato', 'Carbohidrato', 'Antibacteriana'],
        description: 'Lisozima complejada con un análogo de sustrato, muestra el mecanismo catalítico.',
        url: 'https://files.rcsb.org/download/1SLT.pdb'
    },

    // Additional important structures
    {
        id: '1UBQ',
        title: 'Ubiquitin',
        category: 'Proteínas',
        tags: ['Degradación proteica', 'Pequeña', 'Señalización'],
        description: 'Ubiquitina, pequeña proteína reguladora que marca proteínas para su degradación.',
        url: 'https://files.rcsb.org/download/1UBQ.pdb'
    },
    {
        id: '1QHW',
        title: 'Supresor tumoral p53',
        category: 'Proteínas',
        tags: ['Cáncer', 'Factor de transcripción', 'Unión al ADN'],
        description: 'Dominio de unión al ADN de la proteína supresora tumoral p53.',
        url: 'https://files.rcsb.org/download/1QHW.pdb'
    },
    {
        id: '1FAS',
        title: 'Sintasa de ácidos grasos',
        category: 'Enzimas',
        tags: ['Síntesis de lípidos', 'Multifuncional', 'Gran complejo'],
        description: 'Sintasa de ácidos grasos de mamíferos, gran complejo enzimático multifuncional.',
        url: 'https://files.rcsb.org/download/1FAS.pdb'
    },

    // Uncategorized (I'm so lazy to order them)
    {
        id: "1OPD",
        title: "Oxy-myoglobin",
        category: "Proteins",
        tags: ["Oxygen-bound", "Muscle", "Heme", "Ligand Complex"],
        description: "Sperm whale myoglobin with bound oxygen, showing how oxygen binds to heme iron.",
        url: "https://files.rcsb.org/download/1OPD.pdb"
    },
    {
        id: "1QPI",
        title: "Cytochrome c",
        category: "Proteins",
        tags: ["Electron Transport", "Mitochondrial", "Heme", "Evolutionary"],
        description: "Mitochondrial cytochrome c, involved in electron transport chain and apoptosis.",
        url: "https://files.rcsb.org/download/1QPI.pdb"
    },
    {
        id: "1MBO",
        title: "Myoglobin Mutant",
        category: "Proteins",
        tags: ["Mutant", "Heme", "Protein Engineering"],
        description: "Site-directed mutant of myoglobin, used in protein engineering studies.",
        url: "https://files.rcsb.org/download/1MBO.pdb"
    },
    {
        id: "2POR",
        title: "Porin",
        category: "Membrane Proteins",
        tags: ["Beta Barrel", "Outer Membrane", "Bacterial", "Transport"],
        description: "Bacterial porin from Rhodobacter capsulatus, beta-barrel membrane protein.",
        url: "https://files.rcsb.org/download/2POR.pdb"
    },
    {
        id: "1PRC",
        title: "C-phycocyanin",
        category: "Proteins",
        tags: ["Photosynthetic", "Algal", "Light-harvesting", "Bilin"],
        description: "Light-harvesting phycobiliprotein from cyanobacteria, contains bilin chromophores.",
        url: "https://files.rcsb.org/download/1PRC.pdb"
    },
    {
        id: "1BVP",
        title: "Bacteriochlorophyll Protein",
        category: "Proteins",
        tags: ["Photosynthetic", "Bacterial", "Chlorophyll", "Antenna"],
        description: "Bacteriochlorophyll a-protein from green sulfur bacteria, light-harvesting complex.",
        url: "https://files.rcsb.org/download/1BVP.pdb"
    },
    {
        id: "1RCF",
        title: "Reaction Center",
        category: "Membrane Proteins",
        tags: ["Photosynthetic", "Membrane", "Electron Transfer", "Bacterial"],
        description: "Photosynthetic reaction center from Rhodobacter sphaeroides.",
        url: "https://files.rcsb.org/download/1RCF.pdb"
    },
    {
        id: "1PS1",
        title: "Photosystem I",
        category: "Membrane Proteins",
        tags: ["Photosynthetic", "Plant", "Membrane Complex", "Chlorophyll"],
        description: "Photosystem I from pea plants, large membrane protein complex.",
        url: "https://files.rcsb.org/download/1PS1.pdb"
    },
    {
        id: "1JB0",
        title: "Photosystem II",
        category: "Membrane Proteins",
        tags: ["Oxygen Evolving", "Manganese Cluster", "Photosynthetic"],
        description: "Photosystem II from thermophilic cyanobacteria, contains oxygen-evolving complex.",
        url: "https://files.rcsb.org/download/1JB0.pdb"
    },
    {
        id: "1D66",
        title: "DNA Helicase",
        category: "Enzymes",
        tags: ["DNA Unwinding", "ATPase", "Replication", "Motor Protein"],
        description: "Bacteriophage T7 DNA helicase, unwinds DNA double helix during replication.",
        url: "https://files.rcsb.org/download/1D66.pdb"
    },
    {
        id: "1QRS",
        title: "QR1",
        category: "Enzymes",
        tags: ["Quinone", "Oxidoreductase", "Metabolic"],
        description: "Quinone oxidoreductase, involved in detoxification and metabolic processes.",
        url: "https://files.rcsb.org/download/1QRS.pdb"
    },
    {
        id: "1DXG",
        title: "Xylanase",
        category: "Enzymes",
        tags: ["Carbohydrate", "Hydrolase", "Plant Cell Wall"],
        description: "Endo-1,4-beta-xylanase, breaks down xylan in plant cell walls.",
        url: "https://files.rcsb.org/download/1DXG.pdb"
    },
    {
        id: "1HWG",
        title: "HIV-1 Reverse Transcriptase",
        category: "Enzymes",
        tags: ["Retroviral", "RNA-dependent DNA polymerase", "Drug Target"],
        description: "HIV-1 reverse transcriptase complexed with DNA and inhibitor.",
        url: "https://files.rcsb.org/download/1HWG.pdb"
    },
    {
        id: "1ESY",
        title: "Elastase",
        category: "Enzymes",
        tags: ["Serine Protease", "Connective Tissue", "Digestive"],
        description: "Pancreatic elastase, breaks down elastin in connective tissue.",
        url: "https://files.rcsb.org/download/1ESY.pdb"
    },
    {
        id: "1SGT",
        title: "Serine Hydroxymethyltransferase",
        category: "Enzymes",
        tags: ["One-carbon Metabolism", "Pyridoxal Phosphate", "Amino Acid"],
        description: "Serine hydroxymethyltransferase, pyridoxal phosphate-dependent enzyme.",
        url: "https://files.rcsb.org/download/1SGT.pdb"
    },
    {
        id: "1B8E",
        title: "Beta-lactamase",
        category: "Enzymes",
        tags: ["Antibiotic Resistance", "Bacterial", "Drug Target"],
        description: "TEM-1 beta-lactamase, confers resistance to penicillin antibiotics.",
        url: "https://files.rcsb.org/download/1B8E.pdb"
    },
    {
        id: "1NBT",
        title: "Nitrogenase",
        category: "Enzymes",
        tags: ["Nitrogen Fixation", "Iron-Molybdenum", "Bacterial"],
        description: "Nitrogenase MoFe protein, converts atmospheric nitrogen to ammonia.",
        url: "https://files.rcsb.org/download/1NBT.pdb"
    },
    {
        id: "7AHL",
        title: "Alcohol Dehydrogenase",
        category: "Enzymes",
        tags: ["Zinc-dependent", "Oxidoreductase", "Ethanol Metabolism"],
        description: "Horse liver alcohol dehydrogenase, zinc-containing enzyme.",
        url: "https://files.rcsb.org/download/7AHL.pdb"
    },
    {
        id: "1LDM",
        title: "Lactate Dehydrogenase",
        category: "Enzymes",
        tags: ["Glycolysis", "Oxidoreductase", "NAD-binding"],
        description: "Dogfish M4 lactate dehydrogenase, important in anaerobic metabolism.",
        url: "https://files.rcsb.org/download/1LDM.pdb"
    },
    {
        id: "1GD1",
        title: "Glyceraldehyde-3-phosphate Dehydrogenase",
        category: "Enzymes",
        tags: ["Glycolysis", "Oxidoreductase", "Key Metabolic"],
        description: "GAPDH from Bacillus stearothermophilus, key glycolytic enzyme.",
        url: "https://files.rcsb.org/download/1GD1.pdb"
    },
    {
        id: "1PYP",
        title: "Pyrophosphatase",
        category: "Enzymes",
        tags: ["Inorganic", "Hydrolysis", "Metabolic"],
        description: "Inorganic pyrophosphatase, hydrolyzes pyrophosphate to phosphate.",
        url: "https://files.rcsb.org/download/1PYP.pdb"
    },
    {
        id: "1KPB",
        title: "Kinesin",
        category: "Proteins",
        tags: ["Motor Protein", "Microtubule", "ATPase", "Intracellular Transport"],
        description: "Kinesin motor domain, walks along microtubules transporting cargo.",
        url: "https://files.rcsb.org/download/1KPB.pdb"
    },
    {
        id: "1WDC",
        title: "Dynein",
        category: "Proteins",
        tags: ["Motor Protein", "Microtubule", "AAA+ ATPase"],
        description: "Cytoplasmic dynein motor domain, minus-end directed microtubule motor.",
        url: "https://files.rcsb.org/download/1WDC.pdb"
    },
    {
        id: "1F4W",
        title: "Fibrinogen",
        category: "Proteins",
        tags: ["Blood Clotting", "Coiled-coil", "Circulatory"],
        description: "Human fibrinogen, essential for blood clot formation.",
        url: "https://files.rcsb.org/download/1F4W.pdb"
    },
    {
        id: "1CVU",
        title: "Cysteine Protease Inhibitor",
        category: "Proteins",
        tags: ["Protease Inhibitor", "Cystatin", "Regulatory"],
        description: "Cystatin, inhibitor of cysteine proteases like papain.",
        url: "https://files.rcsb.org/download/1CVU.pdb"
    },
    {
        id: "1THB",
        title: "Thioredoxin",
        category: "Proteins",
        tags: ["Redox", "Small", "Disulfide Reductase"],
        description: "E. coli thioredoxin, small redox protein with CXXC active site.",
        url: "https://files.rcsb.org/download/1THB.pdb"
    },
    {
        id: "1GTR",
        title: "Glutathione Reductase",
        category: "Enzymes",
        tags: ["Redox", "NADPH", "Antioxidant"],
        description: "Human glutathione reductase, maintains glutathione in reduced state.",
        url: "https://files.rcsb.org/download/1GTR.pdb"
    },
    {
        id: "1F1C",
        title: "Ferredoxin",
        category: "Proteins",
        tags: ["Iron-Sulfur", "Electron Transfer", "Small"],
        description: "Plant-type ferredoxin, [2Fe-2S] iron-sulfur electron transfer protein.",
        url: "https://files.rcsb.org/download/1F1C.pdb"
    },
    {
        id: "1CPQ",
        title: "Copper, Zinc Superoxide Dismutase",
        category: "Enzymes",
        tags: ["Antioxidant", "Metalloenzyme", "Superoxide"],
        description: "Cu,Zn superoxide dismutase, converts superoxide to hydrogen peroxide.",
        url: "https://files.rcsb.org/download/1CPQ.pdb"
    },
    {
        id: "1JFB",
        title: "Iron Superoxide Dismutase",
        category: "Enzymes",
        tags: ["Antioxidant", "Iron", "Bacterial"],
        description: "Fe superoxide dismutase from E. coli, bacterial antioxidant enzyme.",
        url: "https://files.rcsb.org/download/1JFB.pdb"
    },
    {
        id: "1ARB",
        title: "Adenylate Kinase",
        category: "Enzymes",
        tags: ["Nucleotide", "Phosphotransferase", "Energy Metabolism"],
        description: "Adenylate kinase, interconverts ATP, ADP and AMP.",
        url: "https://files.rcsb.org/download/1ARB.pdb"
    },
    {
        id: "1KSD",
        title: "Adenylate Kinase with substrate",
        category: "Enzymes",
        tags: ["Enzyme-Substrate", "Nucleotide", "Conformational Change"],
        description: "Adenylate kinase complexed with substrate analogs.",
        url: "https://files.rcsb.org/download/1KSD.pdb"
    },
    {
        id: "1PGA",
        title: "Phosphoglycerate Kinase",
        category: "Enzymes",
        tags: ["Glycolysis", "ATP-generating", "Two-domain"],
        description: "Phosphoglycerate kinase, ATP-generating step in glycolysis.",
        url: "https://files.rcsb.org/download/1PGA.pdb"
    },
    {
        id: "1YPI",
        title: "Triose Phosphate Isomerase with inhibitor",
        category: "Enzymes",
        tags: ["TIM Barrel", "Glycolysis", "Transition State Analog"],
        description: "Triose phosphate isomerase complexed with transition state analog.",
        url: "https://files.rcsb.org/download/1YPI.pdb"
    },
    {
        id: "1HNE",
        title: "Neuraminidase",
        category: "Enzymes",
        tags: ["Influenza", "Viral", "Glycosidase", "Drug Target"],
        description: "Influenza virus neuraminidase, target of antiviral drugs like oseltamivir.",
        url: "https://files.rcsb.org/download/1HNE.pdb"
    },
    {
        id: "1AAY",
        title: "Alpha-amylase Inhibitor",
        category: "Proteins",
        tags: ["Enzyme Inhibitor", "Plant", "Carbohydrate"],
        description: "Alpha-amylase inhibitor from bean, inhibits mammalian alpha-amylases.",
        url: "https://files.rcsb.org/download/1AAY.pdb"
    },
    {
        id: "1TIE",
        title: "Trypsin Inhibitor",
        category: "Proteins",
        tags: ["Protease Inhibitor", "Small", "Standard"],
        description: "Bovine pancreatic trypsin inhibitor, standard for protein folding studies.",
        url: "https://files.rcsb.org/download/1TIE.pdb"
    },
    {
        id: "1PPF",
        title: "Peptidyl-prolyl Isomerase",
        category: "Enzymes",
        tags: ["Protein Folding", "Isomerase", "Chaperone"],
        description: "Cyclophilin A, peptidyl-prolyl cis-trans isomerase and drug target.",
        url: "https://files.rcsb.org/download/1PPF.pdb"
    },
    {
        id: "1FKB",
        title: "FK506-binding Protein",
        category: "Proteins",
        tags: ["Immunophilin", "Drug Binding", "Isomerase"],
        description: "FKBP12, binds immunosuppressive drugs FK506 and rapamycin.",
        url: "https://files.rcsb.org/download/1FKB.pdb"
    },
    {
        id: "1SRL",
        title: "Seryl-tRNA Synthetase",
        category: "Enzymes",
        tags: ["Aminoacyl-tRNA", "Translation", "ATP-dependent"],
        description: "Seryl-tRNA synthetase, charges tRNA with serine amino acid.",
        url: "https://files.rcsb.org/download/1SRL.pdb"
    },
    {
        id: "1ASY",
        title: "Aspartyl-tRNA Synthetase",
        category: "Enzymes",
        tags: ["Aminoacyl-tRNA", "Class II", "Translation"],
        description: "Aspartyl-tRNA synthetase complexed with tRNA, class II synthetase.",
        url: "https://files.rcsb.org/download/1ASY.pdb"
    },
    {
        id: "1QF6",
        title: "Queuine tRNA-ribosyltransferase",
        category: "Enzymes",
        tags: ["tRNA Modification", "Base Exchange", "Bacterial"],
        description: "tRNA-guanine transglycosylase, modifies tRNA with queuine base.",
        url: "https://files.rcsb.org/download/1QF6.pdb"
    },
    {
        id: "1DIZ",
        title: "Dihydrofolate Reductase",
        category: "Enzymes",
        tags: ["Folate Metabolism", "Drug Target", "Anticancer"],
        description: "Human dihydrofolate reductase, target of methotrexate and trimethoprim.",
        url: "https://files.rcsb.org/download/1DIZ.pdb"
    },
    {
        id: "1J3A",
        title: "Thymidylate Synthase",
        category: "Enzymes",
        tags: ["Nucleotide Synthesis", "Anticancer Target", "Methyltransferase"],
        description: "Thymidylate synthase, synthesizes thymidine monophosphate.",
        url: "https://files.rcsb.org/download/1J3A.pdb"
    },
    {
        id: "1GSO",
        title: "Glutamine Synthetase",
        category: "Enzymes",
        tags: ["Amino Acid", "Nitrogen Metabolism", "Dodecamer"],
        description: "Glutamine synthetase, synthesizes glutamine from glutamate and ammonia.",
        url: "https://files.rcsb.org/download/1GSO.pdb"
    },
    {
        id: "1B8V",
        title: "Carbonic Anhydrase",
        category: "Enzymes",
        tags: ["Zinc", "CO2 Hydration", "Rapid Catalysis"],
        description: "Human carbonic anhydrase II, extremely efficient zinc metalloenzyme.",
        url: "https://files.rcsb.org/download/1B8V.pdb"
    },
    {
        id: "1XFK",
        title: "Carboxypeptidase A",
        category: "Enzymes",
        tags: ["Zinc", "Protease", "Exopeptidase"],
        description: "Bovine carboxypeptidase A, zinc-dependent exopeptidase.",
        url: "https://files.rcsb.org/download/1XFK.pdb"
    },
    {
        id: "1PNE",
        title: "Penicillopepsin",
        category: "Enzymes",
        tags: ["Aspartic Protease", "Fungal", "Inhibitor Complex"],
        description: "Penicillopepsin from Penicillium janthinellum, aspartic protease.",
        url: "https://files.rcsb.org/download/1PNE.pdb"
    },
    {
        id: "1TON",
        title: "Subtilisin",
        category: "Enzymes",
        tags: ["Serine Protease", "Bacterial", "Industrial"],
        description: "Subtilisin Carlsberg, bacterial serine protease used in detergents.",
        url: "https://files.rcsb.org/download/1TON.pdb"
    },
    {
        id: "1SGT",
        title: "Beta-glucanase",
        category: "Enzymes",
        tags: ["Carbohydrate", "Hydrolase", "Plant Cell Wall"],
        description: "Beta-1,3-1,4-glucanase, breaks down mixed linkage glucans.",
        url: "https://files.rcsb.org/download/1SGT.pdb"
    },
    {
        id: "1CLB",
        title: "Cellulase",
        category: "Enzymes",
        tags: ["Carbohydrate", "Hydrolase", "Plant Cell Wall"],
        description: "Cellulase from Trichoderma reesei, breaks down cellulose.",
        url: "https://files.rcsb.org/download/1CLB.pdb"
    },
    {
        id: "1AM1",
        title: "Amylomaltase",
        category: "Enzymes",
        tags: ["Carbohydrate", "Transferase", "Glycogen Metabolism"],
        description: "Amylomaltase, transfers glucose units in starch metabolism.",
        url: "https://files.rcsb.org/download/1AM1.pdb"
    },
    {
        id: "1BXW",
        title: "Xylose Isomerase",
        category: "Enzymes",
        tags: ["Carbohydrate", "Isomerase", "Industrial"],
        description: "Glucose/xylose isomerase, converts glucose to fructose industrially.",
        url: "https://files.rcsb.org/download/1BXW.pdb"
    },
    {
        id: "1RHD",
        title: "Rhodanese",
        category: "Enzymes",
        tags: ["Sulfur Transfer", "Two-domain", "Detoxification"],
        description: "Rhodanese, transfers sulfur from thiosulfate to cyanide.",
        url: "https://files.rcsb.org/download/1RHD.pdb"
    },
    {
        id: "1G40",
        title: "Glutathione S-transferase",
        category: "Enzymes",
        tags: ["Detoxification", "Xenobiotic", "Conjugation"],
        description: "Glutathione S-transferase, conjugates glutathione to xenobiotics.",
        url: "https://files.rcsb.org/download/1G40.pdb"
    },
    {
        id: "1A27",
        title: "Aconitase",
        category: "Enzymes",
        tags: ["Citric Acid Cycle", "Iron-Sulfur", "Isomerase"],
        description: "Aconitase, converts citrate to isocitrate in citric acid cycle.",
        url: "https://files.rcsb.org/download/1A27.pdb"
    },
    {
        id: "1FUM",
        title: "Fumarase",
        category: "Enzymes",
        tags: ["Citric Acid Cycle", "Hydratase", "Tetramer"],
        description: "Fumarase, hydrates fumarate to malate in citric acid cycle.",
        url: "https://files.rcsb.org/download/1FUM.pdb"
    },
    {
        id: "1SDH",
        title: "Succinate Dehydrogenase",
        category: "Enzymes",
        tags: ["Citric Acid Cycle", "Membrane", "Electron Transport"],
        description: "Succinate dehydrogenase, complex II of electron transport chain.",
        url: "https://files.rcsb.org/download/1SDH.pdb"
    },
    {
        id: "1ICT",
        title: "Isocitrate Dehydrogenase",
        category: "Enzymes",
        tags: ["Citric Acid Cycle", "NADP-dependent", "Allosteric"],
        description: "Isocitrate dehydrogenase, key regulatory enzyme in citric acid cycle.",
        url: "https://files.rcsb.org/download/1ICT.pdb"
    },
    {
        id: "1LTS",
        title: "Dihydrolipoyl Transacetylase",
        category: "Enzymes",
        tags: ["Pyruvate Dehydrogenase", "Multienzyme Complex", "Lipoyl Domain"],
        description: "E2 component of pyruvate dehydrogenase complex.",
        url: "https://files.rcsb.org/download/1LTS.pdb"
    },
    {
        id: "1B0S",
        title: "Biotin Carboxylase",
        category: "Enzymes",
        tags: ["Acetyl-CoA Carboxylase", "ATP-dependent", "Biotin"],
        description: "Biotin carboxylase component of acetyl-CoA carboxylase.",
        url: "https://files.rcsb.org/download/1B0S.pdb"
    },
    {
        id: "1MKA",
        title: "Mevalonate Kinase",
        category: "Enzymes",
        tags: ["Isoprenoid", "Kinase", "Metabolic"],
        description: "Mevalonate kinase, first committed step in isoprenoid biosynthesis.",
        url: "https://files.rcsb.org/download/1MKA.pdb"
    },
    {
        id: "1DQW",
        title: "Dehydroquinate Synthase",
        category: "Enzymes",
        tags: ["Shikimate", "Metabolic", "Plant"],
        description: "Dehydroquinate synthase, early step in shikimate pathway.",
        url: "https://files.rcsb.org/download/1DQW.pdb"
    },
    {
        id: "1PII",
        title: "Inorganic Pyrophosphatase",
        category: "Enzymes",
        tags: ["Pyrophosphate", "Hydrolysis", "Essential"],
        description: "Inorganic pyrophosphatase, essential for many biosynthetic reactions.",
        url: "https://files.rcsb.org/download/1PII.pdb"
    },
    {
        id: "1F8Z",
        title: "Fructose-1,6-bisphosphatase",
        category: "Enzymes",
        tags: ["Gluconeogenesis", "Allosteric", "Tetramer"],
        description: "Fructose-1,6-bisphosphatase, key gluconeogenic enzyme.",
        url: "https://files.rcsb.org/download/1F8Z.pdb"
    },
    {
        id: "1G3P",
        title: "Glycerol-3-phosphate Dehydrogenase",
        category: "Enzymes",
        tags: ["Glycerol", "Oxidoreductase", "NAD-binding"],
        description: "Glycerol-3-phosphate dehydrogenase, connects glycolysis and lipid metabolism.",
        url: "https://files.rcsb.org/download/1G3P.pdb"
    },
    {
        id: "1H2A",
        title: "Histone H2A",
        category: "Proteins",
        tags: ["Nucleosome", "DNA Packaging", "Chromatin"],
        description: "Core histone H2A, component of nucleosome core particle.",
        url: "https://files.rcsb.org/download/1H2A.pdb"
    },
    {
        id: "1HIO",
        title: "Histone H4",
        category: "Proteins",
        tags: ["Nucleosome", "DNA Packaging", "Chromatin"],
        description: "Core histone H4, highly conserved component of nucleosome.",
        url: "https://files.rcsb.org/download/1HIO.pdb"
    },
    {
        id: "1EQZ",
        title: "Nucleosome Core Particle",
        category: "Complexes",
        tags: ["Chromatin", "Histone", "DNA Packaging"],
        description: "Nucleosome core particle, fundamental unit of chromatin.",
        url: "https://files.rcsb.org/download/1EQZ.pdb"
    },
    {
        id: "1VA4",
        title: "Vitamin D Receptor",
        category: "Proteins",
        tags: ["Nuclear Receptor", "Transcription", "Hormone"],
        description: "Vitamin D receptor DNA-binding domain, nuclear receptor family.",
        url: "https://files.rcsb.org/download/1VA4.pdb"
    },
    {
        id: "1HCQ",
        title: "HMG-CoA Reductase",
        category: "Enzymes",
        tags: ["Cholesterol", "Membrane", "Drug Target"],
        description: "HMG-CoA reductase, rate-limiting enzyme in cholesterol biosynthesis.",
        url: "https://files.rcsb.org/download/1HCQ.pdb"
    },
    {
        id: "1LW6",
        title: "Low-density Lipoprotein Receptor",
        category: "Proteins",
        tags: ["Cholesterol", "Membrane", "Receptor"],
        description: "LDL receptor ligand-binding domain, mediates cholesterol uptake.",
        url: "https://files.rcsb.org/download/1LW6.pdb"
    },
    {
        id: "1A1M",
        title: "Annexin",
        category: "Proteins",
        tags: ["Calcium", "Membrane", "Phospholipid"],
        description: "Annexin V, calcium-dependent phospholipid-binding protein.",
        url: "https://files.rcsb.org/download/1A1M.pdb"
    },
    {
        id: "1CYO",
        title: "Cytochrome b562",
        category: "Proteins",
        tags: ["Heme", "Electron Transport", "Four-helix Bundle"],
        description: "E. coli cytochrome b562, four-helix bundle heme protein.",
        url: "https://files.rcsb.org/download/1CYO.pdb"
    },
    {
        id: "1CCR",
        title: "Cytochrome c Reductase",
        category: "Enzymes",
        tags: ["Respiratory Chain", "Membrane", "Complex III"],
        description: "Cytochrome bc1 complex, complex III of respiratory chain.",
        url: "https://files.rcsb.org/download/1CCR.pdb"
    },
    {
        id: "1OCC",
        title: "Cytochrome c Oxidase",
        category: "Enzymes",
        tags: ["Respiratory Chain", "Membrane", "Complex IV"],
        description: "Cytochrome c oxidase, complex IV of mitochondrial respiratory chain.",
        url: "https://files.rcsb.org/download/1OCC.pdb"
    },
    {
        id: "1Q16",
        title: "Quinol-fumarate Reductase",
        category: "Enzymes",
        tags: ["Respiratory", "Membrane", "Anaerobic"],
        description: "Quinol-fumarate reductase from anaerobic bacteria.",
        url: "https://files.rcsb.org/download/1Q16.pdb"
    },
    {
        id: "1DXT",
        title: "Dextranase",
        category: "Enzymes",
        tags: ["Carbohydrate", "Hydrolase", "Dental"],
        description: "Dextranase, breaks down dextran polymers.",
        url: "https://files.rcsb.org/download/1DXT.pdb"
    },
    {
        id: "1HP1",
        title: "Heparinase",
        category: "Enzymes",
        tags: ["Carbohydrate", "Lyase", "Glycosaminoglycan"],
        description: "Heparinase I, cleaves heparin and heparan sulfate.",
        url: "https://files.rcsb.org/download/1HP1.pdb"
    },
    {
        id: "1HYA",
        title: "Hyaluronidase",
        category: "Enzymes",
        tags: ["Carbohydrate", "Hydrolase", "Connective Tissue"],
        description: "Hyaluronidase, breaks down hyaluronic acid in connective tissue.",
        url: "https://files.rcsb.org/download/1HYA.pdb"
    },
    {
        id: "1K9V",
        title: "Keratanase",
        category: "Enzymes",
        tags: ["Carbohydrate", "Hydrolase", "Glycosaminoglycan"],
        description: "Keratanase, cleaves keratan sulfate glycosaminoglycan.",
        url: "https://files.rcsb.org/download/1K9V.pdb"
    },
    {
        id: "1NOP",
        title: "Nitric Oxide Synthase",
        category: "Enzymes",
        tags: ["Signaling", "Heme", "Flavoprotein"],
        description: "Nitric oxide synthase oxygenase domain, produces NO signaling molecule.",
        url: "https://files.rcsb.org/download/1NOP.pdb"
    },
    {
        id: "1F20",
        title: "Fatty Acid Binding Protein",
        category: "Proteins",
        tags: ["Lipid", "Transport", "Beta Barrel"],
        description: "Fatty acid binding protein, intracellular fatty acid transporter.",
        url: "https://files.rcsb.org/download/1F20.pdb"
    },
    {
        id: "1PMC",
        title: "Phospholipase C",
        category: "Enzymes",
        tags: ["Signaling", "Membrane", "Calcium"],
        description: "Phospholipase C, generates second messengers in signaling.",
        url: "https://files.rcsb.org/download/1PMC.pdb"
    },
    {
        id: "1POC",
        title: "Phospholipase A2",
        category: "Enzymes",
        tags: ["Lipid", "Membrane", "Calcium"],
        description: "Phospholipase A2, releases fatty acids from phospholipids.",
        url: "https://files.rcsb.org/download/1POC.pdb"
    },
    {
        id: "1MAI",
        title: "Malate Synthase",
        category: "Enzymes",
        tags: ["Glyoxylate", "Metabolic", "Large"],
        description: "Malate synthase, key enzyme in glyoxylate cycle.",
        url: "https://files.rcsb.org/download/1MAI.pdb"
    },
    {
        id: "1ISU",
        title: "Isopenicillin N Synthase",
        category: "Enzymes",
        tags: ["Antibiotic", "Iron", "Oxidase"],
        description: "Isopenicillin N synthase, non-heme iron oxidase in penicillin biosynthesis.",
        url: "https://files.rcsb.org/download/1ISU.pdb"
    },
    {
        id: "1D7T",
        title: "Deacetoxycephalosporin C Synthase",
        category: "Enzymes",
        tags: ["Antibiotic", "Iron", "Oxidase"],
        description: "Deacetoxycephalosporin C synthase, expands penicillin to cephalosporin.",
        url: "https://files.rcsb.org/download/1D7T.pdb"
    },
    {
        id: "1B56",
        title: "Beta-lactam Synthetase",
        category: "Enzymes",
        tags: ["Antibiotic", "ATP-grasp", "Biosynthesis"],
        description: "Beta-lactam synthetase, forms beta-lactam ring in antibiotics.",
        url: "https://files.rcsb.org/download/1B56.pdb"
    }
];