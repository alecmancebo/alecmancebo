import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    work: 'WORK',
    about: 'ABOUT',
    contact: 'CONTACT',
    playground: 'PLAYGROUND',
    menu: 'MENU',
    close: 'CLOSE',
    indexView: '[INDEX VIEW]',
    gridView: '[GRID VIEW]',
    filter: 'FILTER',
    all: 'ALL',
    web: 'WEB',
    gameDev: 'GAME-DEV',
    uxui: 'UX/UI',
    threed: '3D',
    graphic: 'GRAPHIC',
    bioLine1: 'MULTIDISCIPLINARY DESIGNER',
    bioLine2: 'AND VISUAL ARTIST BASED',
    bioLine3: 'IN MADRID, SPAIN.',
    links: 'LINKS',
    // --- TEXTOS PÁGINA ABOUT ---
    aboutCopyright: 'E.O. ©2026',
    aboutBio: 'My multidisciplinary background allows me to create complex designs with a holistic perspective, connecting different areas and tools. My work ranges from motion graphics to ux/ui, video editing, photography and 3d modelling.',
    aboutEula: 'READ CV',
    aboutPdf: 'PORTFOLIO PDF -->',
    aboutTitleStack: 'STACK',
    aboutTitleSoftware: 'SOFTWARE',
    aboutTitleStudies: 'STUDIES',
    aboutTitleInterests: 'SOFT SKILLS',
    aboutTitleDesign: 'DESIGN',
    aboutTitleDev: 'DEVELOPMENT',
    aboutTitleFonts: 'FONT IN USE',
    aboutListStack: ['HTML & CSS', 'JavaScript', 'React & Next.js', 'Node.js & Express', 'MongoDB'],
    aboutListSoftware: ['Figma', 'Framer', 'Adobe (Photoshop, Illustrator, Indesign, After Effects, Premiere)', 'Affinity', 'Unity', 'Blender'],
    aboutListStudies: ['Fullstack Web Development', 'UX/UI Design', 'Integral Design'],
    aboutListInterests: ['Game Development', 'Pixel Art', 'Music & DIY', 'Classic Literature'],
    aboutListCredits: ['Ermes Olea'],
    aboutListFonts: ['Inter', 'Archivo', 'Roboto Mono']
  },

  es: {
    work: 'TRABAJO',
    about: 'PERFIL',
    contact: 'CONTACTO',
    playground: 'PLAYGROUND',
    menu: 'MENÚ',
    close: 'CERRAR',
    indexView: '[VISTA ÍNDICE]',
    gridView: '[VISTA CUADRÍCULA]',
    filter: 'FILTRAR',
    all: 'TODO',
    web: 'WEB',
    gameDev: 'GAME-DEV',
    uxui: 'UX/UI',
    threed: '3D',
    graphic: 'GRÁFICO',
    bioLine1: 'DISEÑADOR MULTIDISCIPLINAR',
    bioLine2: 'Y ARTISTA VISUAL BASADO',
    bioLine3: 'EN MADRID, ESPAÑA.',
    links: 'ENLACES',
    // --- TEXTOS PÁGINA ABOUT ---
    aboutCopyright: 'E.O. ©2026',
    aboutBio: 'Mi formación multidisciplinar me permite crear diseños complejos con una perspectiva holística, conectando diferentes áreas y herramientas. Mi trabajo varía desde motion graphic hasta ux/ui, fotografía, edición de video y modelización 3D.',
    aboutEula: 'LEER CV',
    aboutPdf: 'PORTFOLIO PDF -->',
    aboutTitleStack: 'STACK',
    aboutTitleSoftware: 'SOFTWARE',
    aboutTitleStudies: 'ESTUDIOS',
    aboutTitleInterests: 'SOFT SKILLS',
    aboutTitleDesign: 'DISEÑO',
    aboutTitleDev: 'DESARROLLO',
    aboutTitleFonts: 'TIPOGRAFÍAS',
    aboutListStack: ['HTML & CSS', 'JavaScript', 'React & Next.js', 'Node.js & Express', 'MongoDB'],
    aboutListSoftware: ['Figma', 'Framer', 'Paquete Adobe (Photoshop, Illustrator, Indesign, After Effects, Premiere)', 'Affinity', 'Unity', 'Blender'],
    aboutListStudies: ['Desarrollo Web Fullstack', 'Diseño UX/UI', 'Diseño Integral'],
    aboutListInterests: ['Desarrollo de Videojuegos', 'Pixel Art', 'Música y DIY', 'Literatura Clásica'],
    aboutListCredits: ['Ermes Olea'],
    aboutListFonts: ['Inter', 'Archivo', 'Roboto Mono']
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);