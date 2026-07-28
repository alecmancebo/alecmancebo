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
    editorial: 'EDITORIAL',
    branding: 'BRANDING',
    digital: 'DIGITAL',
    bioLine1: 'MULTIDISCIPLINARY DESIGNER',
    bioLine2: 'AND VISUAL ARTIST BASED',
    bioLine3: 'IN MADRID, SPAIN.',
    links: 'LINKS'
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
    editorial: 'EDITORIAL',
    branding: 'BRANDING',
    digital: 'DIGITAL',
    bioLine1: 'DISEÑADOR MULTIDISCIPLINAR',
    bioLine2: 'Y ARTISTA VISUAL BASADO',
    bioLine3: 'EN MADRID, ESPAÑA.',
    links: 'ENLACES'
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  // Función helper que devuelve la traducción correcta según el idioma actual
  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personalizado para usar el contexto fácilmente
export const useLanguage = () => useContext(LanguageContext);