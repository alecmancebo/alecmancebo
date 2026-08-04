import CodedText from '../effects/CodedText';
import { useLanguage } from '../effects/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about-view">
      
      <div className="about__header-area">
        <h4 className="about__section-title">
          {t('aboutCopyright')}
        </h4>
        <p className="about__bio-text">{t('aboutBio')}</p>
      </div>

      <div className="about__content-grid">
        
        {/* COLUMNA 1 */}
        <div className="about__col">
          <button className="about__btn-outline">
            <CodedText text={t('aboutEula')} />
          </button>
          
          <div className="about__media">
            <img src="https://picsum.photos/seed/ermes-profile/600/450" alt="Ermes Olea" loading="lazy" />
          </div>
          
          <a href="#" className="about__link">
            <CodedText text={t('aboutPdf')} />
          </a>
        </div>

        {/* COLUMNA 2 */}
        <div className="about__col">
          <h4 className="about__section-title">{t('aboutTitleStack')}</h4>
          <ul className="about__list">
            {t('aboutListStack').map((item, i) => <li key={`stack-${i}`}>{item}</li>)}
          </ul>

          <h4 className="about__section-title">{t('aboutTitleUxuiWeb')}</h4>
          <ul className="about__list">
            {t('aboutListUxuiWeb').map((item, i) => <li key={`uxui-web-${i}`}>{item}</li>)}
          </ul>

          <h4 className="about__section-title">{t('aboutTitleVisualDesign')}</h4>
          <ul className="about__list">
            {t('aboutListVisualDesign').map((item, i) => <li key={`visual-design-${i}`}>{item}</li>)}
          </ul>
        </div>

        <div className="about__col">
          <h4 className="about__section-title">{t('aboutTitleMotion3d')}</h4>
          <ul className="about__list">
            {t('aboutListMotion3d').map((item, i) => <li key={`motion-3d-${i}`}>{item}</li>)}
          </ul>

          <h4 className="about__section-title">{t('aboutTitleAiWorkflow')}</h4>
          <ul className="about__list">
            {t('aboutListAiWorkflow').map((item, i) => <li key={`ai-workflow-${i}`}>{item}</li>)}
          </ul>
        </div>

        <div className="about__col">
          <h4 className="about__section-title">{t('aboutTitleStudies')}</h4>
          <ul className="about__list">
            {t('aboutListStudies').map((item, i) => <li key={`studies-${i}`}>{item}</li>)}
          </ul>

          <h4 className="about__section-title">{t('aboutTitleDesign')}</h4>
          <ul className="about__list">
            {t('aboutListCredits').map((item, i) => <li key={`design-${i}`}>{item}</li>)}
          </ul>
        </div>

      </div>
    </section>
  );
}