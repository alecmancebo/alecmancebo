// src/data/portfolioData.js

// 1. AHORA CADA IDIOMA ES UN ARRAY [] QUE CONTIENE BLOQUES DE TEXTO
export const textDatabase = {
  'TRANSPAPELADES': {
    en: [
      {
        tag: 'BRAND & DESIGN STRATEGY',
        subtitle: 'Quality, Trust, and Curation.',
        col2: 'We started this partnership by auditing the existing brand, competitors, and adjacent players to develop a comprehensive design brief followed by brand and design strategy...',
        col3: 'Our design story started with the creators relationship with their cameras and tools: when they are behind or in front of them (sharing the work with the world).'
      },
      {
        tag: 'VISUAL IDENTITY',
        subtitle: 'Expanding the system.',
        col2: 'More text for the second section of this project...',
        col3: 'Even more text for the third column.'
      }
    ],
    es: [
      {
        tag: 'ESTRATEGIA DE MARCA Y DISEÑO',
        subtitle: 'Calidad, Confianza y Curaduría.',
        col2: 'Comenzamos esta colaboración auditando la marca existente, los competidores y actores adyacentes para desarrollar un brief de diseño integral seguido de una estrategia...',
        col3: 'Nuestra historia de diseño comenzó con la relación de los creadores con sus cámaras y herramientas: cuando están detrás o delante de ellas (compartiendo su trabajo).'
      },
      {
        tag: 'IDENTIDAD VISUAL',
        subtitle: 'Expandiendo el sistema.',
        col2: 'Más texto para la segunda sección de este proyecto...',
        col3: 'Aún más texto para la tercera columna.'
      }
    ]
  },
  'DEFAULT': {
    en: [
      {
        tag: 'CASE STUDY',
        subtitle: 'Project details under construction.',
        col2: 'We are documenting the design process, challenges encountered, and solutions implemented for this project. Check back soon for the full case study.',
        col3: 'The documentation will include wireframes, brand strategy, color palette, and the final product development.'
      }
    ],
    es: [
      {
        tag: 'CASO DE ESTUDIO',
        subtitle: 'Detalles del proyecto en construcción.',
        col2: 'Estamos documentando el proceso de diseño, los retos encontrados y las soluciones implementadas para este proyecto. Vuelve pronto para leer el caso de estudio completo.',
        col3: 'La documentación incluirá wireframes, estrategia de marca, paleta de colores y el desarrollo del producto final.'
      }
    ]
  }
};

export const projects = [
  { id: '001', title: 'TRANSPAPELADES', category: 'web', seed: 'transpapelades' },
  { id: '002', title: 'ECHAR RAICES', category: 'web, gameDev', seed: 'echar-raices' },
  { id: '003', title: 'ENTRELINEAS', category: 'uxui', seed: 'entrelineas' },
  { id: '006', title: 'BAILANDO DESTINOS', category: 'web, uxui', seed: 'bailando-destinos' },
  { id: '005', title: 'OMEGA TRAICION', category: 'web, gameDev, graphic', seed: 'omega-traicion' },
  { id: '004', title: 'Z-TAROT', category: 'web, gameDev', seed: 'z-tarot' },
  { id: '008', title: 'MINDSCAPE', category: 'uxui', seed: 'mindscape' },
  { id: '007', title: 'ERMES OLEA PORFOLIO', category: 'web', seed: 'ermes-olea-porfolio' },
  { id: '009', title: 'FADE', category: 'gameDev, threed', seed: 'fade' },
  { id: '010', title: 'MICROSOFT HAVEN', category: 'gameDev, web, threed', seed: 'microsoft-haven' },
]

// 3. LAYOUT DE LAS IMÁGENES AL PASAR EL RATÓN (Vista Índice)
export const projectMontageLayout = {
  '001': [
    { src: 'https://picsum.photos/seed/transpapelades-1/900/1200', x: 20, y: 49, w: 15, z: 2 },
    { src: 'https://picsum.photos/seed/transpapelades-2/900/1200', x: 20, y: 67, w: 13, z: 3 },
    { src: 'https://picsum.photos/seed/transpapelades-3/900/1200', x: 45, y: 58, w: 18, z: 5 },
    { src: 'https://picsum.photos/seed/transpapelades-4/900/1200', x: 53, y: 76, w: 9, z: 4 },
    { src: 'https://picsum.photos/seed/transpapelades-5/900/1200', x: 77, y: 53, w: 24, z: 1 },
  ],
  '002': [
    { src: 'https://picsum.photos/seed/echar-raices-1/900/1200', x: 14, y: 53, w: 12, z: 2 },
    { src: 'https://picsum.photos/seed/echar-raices-2/900/1200', x: 29, y: 64, w: 11, z: 4 },
    { src: 'https://picsum.photos/seed/echar-raices-3/900/1200', x: 49, y: 49, w: 25, z: 3 },
    { src: 'https://picsum.photos/seed/echar-raices-4/900/1200', x: 77, y: 58, w: 14, z: 5 },
    { src: 'https://picsum.photos/seed/echar-raices-5/900/1200', x: 88, y: 44, w: 10, z: 1 },
  ],
  '003': [
    { src: 'https://picsum.photos/seed/entrelineas-1/900/1200', x: 17, y: 46, w: 18, z: 3 },
    { src: 'https://picsum.photos/seed/entrelineas-2/900/1200', x: 36, y: 64, w: 10, z: 1 },
    { src: 'https://picsum.photos/seed/entrelineas-3/900/1200', x: 54, y: 52, w: 20, z: 5 },
    { src: 'https://picsum.photos/seed/entrelineas-4/900/1200', x: 78, y: 48, w: 13, z: 4 },
    { src: 'https://picsum.photos/seed/entrelineas-5/900/1200', x: 84, y: 68, w: 11, z: 2 },
  ],
  '004': [
    { src: 'https://picsum.photos/seed/z-tarot-1/900/1200', x: 16, y: 57, w: 14, z: 2 },
    { src: 'https://picsum.photos/seed/z-tarot-2/900/1200', x: 16, y: 75, w: 14, z: 3 },
    { src: 'https://picsum.photos/seed/z-tarot-3/900/1200', x: 42, y: 62, w: 17, z: 4 },
    { src: 'https://picsum.photos/seed/z-tarot-4/900/1200', x: 55, y: 77, w: 10, z: 5 },
    { src: 'https://picsum.photos/seed/z-tarot-5/900/1200', x: 77, y: 52, w: 22, z: 1 },
  ],
  '005': [
    { src: 'https://picsum.photos/seed/omega-traicion-1/900/1200', x: 18, y: 52, w: 18, z: 2 },
    { src: 'https://picsum.photos/seed/omega-traicion-2/900/1200', x: 37, y: 62, w: 10, z: 4 },
    { src: 'https://picsum.photos/seed/omega-traicion-3/900/1200', x: 53, y: 49, w: 23, z: 5 },
    { src: 'https://picsum.photos/seed/omega-traicion-4/900/1200', x: 76, y: 60, w: 14, z: 3 },
    { src: 'https://picsum.photos/seed/omega-traicion-5/900/1200', x: 86, y: 44, w: 9, z: 1 },
  ],
  '006': [
    { src: 'https://picsum.photos/seed/bailando-destinos-1/900/1200', x: 16, y: 53, w: 12, z: 2 },
    { src: 'https://picsum.photos/seed/bailando-destinos-2/900/1200', x: 26, y: 66, w: 11, z: 4 },
    { src: 'https://picsum.photos/seed/bailando-destinos-3/900/1200', x: 47, y: 55, w: 21, z: 5 },
    { src: 'https://picsum.photos/seed/bailando-destinos-4/900/1200', x: 78, y: 50, w: 16, z: 3 },
    { src: 'https://picsum.photos/seed/bailando-destinos-5/900/1200', x: 84, y: 67, w: 10, z: 1 },
  ],
  '007': [
    { src: 'https://picsum.photos/seed/ermes-olea-porfolio-1/900/1200', x: 18, y: 51, w: 17, z: 3 },
    { src: 'https://picsum.photos/seed/ermes-olea-porfolio-2/900/1200', x: 33, y: 66, w: 10, z: 2 },
    { src: 'https://picsum.photos/seed/ermes-olea-porfolio-3/900/1200', x: 54, y: 50, w: 22, z: 5 },
    { src: 'https://picsum.photos/seed/ermes-olea-porfolio-4/900/1200', x: 75, y: 62, w: 12, z: 4 },
    { src: 'https://picsum.photos/seed/ermes-olea-porfolio-5/900/1200', x: 86, y: 46, w: 11, z: 1 },
  ],
  '008': [
    { src: 'https://picsum.photos/seed/mindscape-1/900/1200', x: 16, y: 50, w: 15, z: 2 },
    { src: 'https://picsum.photos/seed/mindscape-2/900/1200', x: 16, y: 68, w: 13, z: 3 },
    { src: 'https://picsum.photos/seed/mindscape-3/900/1200', x: 45, y: 57, w: 18, z: 5 },
    { src: 'https://picsum.photos/seed/mindscape-4/900/1200', x: 53, y: 75, w: 9, z: 4 },
    { src: 'https://picsum.photos/seed/mindscape-5/900/1200', x: 53, y: 75, w: 9, z: 4 },
  ],
  '009': [
    { src: 'https://picsum.photos/seed/fade-1/900/1200', x: 20, y: 49, w: 15, z: 2 },
    { src: 'https://picsum.photos/seed/fade-2/900/1200', x: 20, y: 67, w: 13, z: 3 },
    { src: 'https://picsum.photos/seed/fade-3/900/1200', x: 45, y: 58, w: 18, z: 5 },
    { src: 'https://picsum.photos/seed/fade-4/900/1200', x: 53, y: 76, w: 9, z: 4 },
    { src: 'https://picsum.photos/seed/fade-5/900/1200', x: 77, y: 53, w: 24, z: 1 },
  ],
  '010': [
    { src: 'https://picsum.photos/seed/microsoft-haven-1/900/1200', x: 14, y: 53, w: 12, z: 2 },
    { src: 'https://picsum.photos/seed/microsoft-haven-2/900/1200', x: 29, y: 64, w: 11, z: 4 },
    { src: 'https://picsum.photos/seed/microsoft-haven-3/900/1200', x: 49, y: 49, w: 25, z: 3 },
    { src: 'https://picsum.photos/seed/microsoft-haven-4/900/1200', x: 77, y: 58, w: 14, z: 5 },
    { src: 'https://picsum.photos/seed/microsoft-haven-5/900/1200', x: 88, y: 44, w: 10, z: 1 },
  ],
}

// 4. LISTA DE PROYECTOS PARA LA CUADRÍCULA
export const getGridProjects = (t) => [
   {
        id: 'g-01',
        category: 'web',
        title: 'TRANSPAPELADES',
        year: '2024',
        disciplines: t('web'),
        images: ['https://picsum.photos/seed/transpapelades-1/840/1080'],
      },
      {
        id: 'g-02',
        category: 'web, gameDev',
        title: 'ECHAR RAICES',
        year: '2024',
        disciplines: `${t('web')} / ${t('gameDev')}`,
        images: [
          'https://picsum.photos/seed/echar-raices-1/840/1080',
          'https://picsum.photos/seed/echar-raices-2/840/1080',
          'https://picsum.photos/seed/echar-raices-3/840/1080',
        ],
      },
      {
        id: 'g-03',
        category: 'uxui',
        title: 'ENTRELINEAS',
        year: '2024',
        disciplines: t('uxui'),
        images: ['https://picsum.photos/seed/entrelineas-1/840/1080', 'https://picsum.photos/seed/entrelineas-2/840/1080'],
      },
      {
        id: 'g-06',
        category: 'web, uxui',
        title: 'BAILANDO DESTINOS',
        year: '2024',
        disciplines: `${t('web')} / ${t('uxui')}`,
        images: ['https://picsum.photos/seed/bailando-destinos-1/840/1080'],
      },
      {
        id: 'g-05',
        category: 'web, gameDev, graphic',
        title: 'OMEGA TRAICION',
        year: '2024',
        disciplines: `${t('web')} / ${t('gameDev')} / ${t('graphic')}`,
        images: [
          'https://picsum.photos/seed/omega-traicion-1/840/1080',
          'https://picsum.photos/seed/omega-traicion-2/840/1080',
          'https://picsum.photos/seed/omega-traicion-3/840/1080',
        ],
      },
      {
        id: 'g-04',
        category: 'web, gameDev',
        title: 'Z-TAROT',
        year: '2024',
        disciplines: `${t('web')} / ${t('gameDev')}`,
        images: ['https://picsum.photos/seed/z-tarot-1/840/1080'],
      },
      {
        id: 'g-08',
        category: 'uxui',
        title: 'MINDSCAPE',
        year: '2024',
        disciplines: t('uxui'),
        images: ['https://picsum.photos/seed/mindscape-1/840/1080'],
      },
      {
        id: 'g-07',
        category: 'web',
        title: 'ERMES OLEA PORFOLIO',
        year: '2024',
        disciplines: t('web'),
        images: [
          'https://picsum.photos/seed/ermes-olea-porfolio-1/840/1080',
          'https://picsum.photos/seed/ermes-olea-porfolio-2/840/1080',
          'https://picsum.photos/seed/ermes-olea-porfolio-3/840/1080',
        ],
      },
      {
        id: 'g-09',
        category: 'gameDev, threed',
        title: 'FADE',
        year: '2024',
        disciplines: `${t('gameDev')} / ${t('threed')}`,
        images: [
          'https://picsum.photos/seed/fade-1/840/1080',
          'https://picsum.photos/seed/fade-2/840/1080',
        ],
      },
      {
        id: 'g-10',
        category: 'gameDev, web, threed',
        title: 'MICROSOFT HAVEN',
        year: '2024',
        disciplines: `${t('gameDev')} / ${t('web')} / ${t('threed')}`,
        images: [
          'https://picsum.photos/seed/microsoft-haven-1/840/1080',
          'https://picsum.photos/seed/microsoft-haven-2/840/1080',
        ],
      },
];