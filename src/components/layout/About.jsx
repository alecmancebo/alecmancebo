import CodedText from '../effects/CodedText';
import TypewriterText from '../effects/TypewriterText';
import { useLanguage } from '../effects/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about-view">
      
      <div className="about__header-area">
        <h4 className="about__section-title">
          <TypewriterText text={t('aboutCopyright')} />
        </h4>
        <p className="about__bio-text"><TypewriterText text={t('aboutBio')} /></p>
      </div>

      <div className="about__content-grid">
        
        {/* COLUMNA 1 */}
        <div className="about__col">
          <a
            className="about__btn-outline"
            href="/trabajos/CV%20-%20ALEC%20RODRIGUEZ%20MANCEBO.pdf"
            download="CV - ALEC RODRIGUEZ MANCEBO.pdf"
            aria-label="Descargar CV"
          >
            <CodedText text={t('aboutCV')} />
          </a>
          
          <div className="about__media">
            <img src="/elementos/ALEC.png" alt="ALEC" loading="lazy" />
          </div>
          
        </div>

        {/* COLUMNA 2 */}
        <div className="about__col">
          <h4 className="about__section-title"><TypewriterText text={t('aboutTitleStack')} /></h4>
          <ul className="about__list">
            {t('aboutListStack').map((item, i) => <li key={`stack-${i}`}><TypewriterText text={item} /></li>)}
          </ul>

          <h4 className="about__section-title"><TypewriterText text={t('aboutTitleUxuiWeb')} /></h4>
          <ul className="about__list">
            {t('aboutListUxuiWeb').map((item, i) => <li key={`uxui-web-${i}`}><TypewriterText text={item} /></li>)}
          </ul>

          <h4 className="about__section-title"><TypewriterText text={t('aboutTitleVisualDesign')} /></h4>
          <ul className="about__list">
            {t('aboutListVisualDesign').map((item, i) => <li key={`visual-design-${i}`}><TypewriterText text={item} /></li>)}
          </ul>
        </div>

        <div className="about__col">
          <h4 className="about__section-title"><TypewriterText text={t('aboutTitleMotion3d')} /></h4>
          <ul className="about__list">
            {t('aboutListMotion3d').map((item, i) => <li key={`motion-3d-${i}`}><TypewriterText text={item} /></li>)}
          </ul>

          <h4 className="about__section-title"><TypewriterText text={t('aboutTitleAiWorkflow')} /></h4>
          <ul className="about__list">
            {t('aboutListAiWorkflow').map((item, i) => <li key={`ai-workflow-${i}`}><TypewriterText text={item} /></li>)}
          </ul>
        </div>

        <div className="about__col">
          <h4 className="about__section-title"><TypewriterText text={t('aboutTitleStudies')} /></h4>
          <ul className="about__list">
            {t('aboutListStudies').map((item, i) => <li key={`studies-${i}`}><TypewriterText text={item} /></li>)}
          </ul>

          <h4 className="about__section-title"><TypewriterText text={t('aboutTitleDesign')} /></h4>
          <ul className="about__list">
            {t('aboutListCredits').map((item, i) => <li key={`design-${i}`}><TypewriterText text={item} /></li>)}
          </ul>
        </div>

      </div>
    </section>
  );
}