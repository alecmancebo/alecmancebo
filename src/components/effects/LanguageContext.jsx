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