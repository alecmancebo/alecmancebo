import { createContext, useContext, useState } from 'react';
import { siteContent } from '../../content/siteContent';

const translations = siteContent.translations;
const aboutContent = siteContent.aboutContent;

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  const t = (key) => aboutContent[language][key] ?? translations[language][key] ?? key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);