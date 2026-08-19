import CodedText from '../effects/CodedText';
import TypewriterText from '../effects/TypewriterText';
import { useLanguage } from '../effects/LanguageContext';

export default function Playground({ setCurrentPage }) {
  const { language } = useLanguage();
  
  const content = {
    en: {
      title: "UNDER CONSTRUCTION",
      message: "This section is currently being developed. Check back soon for new interactive experiments and code.",
      back: "<-- BACK TO HOME"
    },
    es: {
      title: "EN CONSTRUCCIÓN",
      message: "Esta sección está siendo desarrollada. Vuelve pronto para ver nuevos experimentos interactivos y código.",
      back: "<-- VOLVER AL INICIO"
    }
  };

  const t = content[language] || content['en'];

  return (
    <section className="playground-view">
      <div className="playground__content">
        <h2 className="playground__title">
          [ <TypewriterText text={t.title} /> ]
        </h2>
        <p className="playground__message">
          <TypewriterText text={t.message} />
        </p>
        <button 
          className="playground__back-btn"
          onClick={() => setCurrentPage('home')}
        >
          <CodedText text={t.back} />
        </button>
      </div>
    </section>
  );
}