import CodedText from '../effects/CodedText';
import { useLanguage } from '../effects/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about-view">
      
      <div className="about__header-area">
        <h4 className="about__section-title">
          <CodedText text={t('aboutCopyright')} />
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
          <h4 className="about__section-title"><CodedText text={t('aboutTitleStack')} /></h4>
          <ul className="about__list">
            {t('aboutListStack').map((item, i) => <li key={`stack-${i}`}>{item}</li>)}
          </ul>

          <h4 className="about__section-title"><CodedText text={t('aboutTitleSoftware')} /></h4>
          <ul className="about__list">
            {t('aboutListSoftware').map((item, i) => <li key={`software-${i}`}>{item}</li>)}
          </ul>
        </div>

        {/* COLUMNA 3 */}
        <div className="about__col">
          <h4 className="about__section-title"><CodedText text={t('aboutTitleStudies')} /></h4>
          <ul className="about__list">
            {t('aboutListStudies').map((item, i) => <li key={`studies-${i}`}>{item}</li>)}
          </ul>

          <h4 className="about__section-title"><CodedText text={t('aboutTitleInterests')} /></h4>
          <ul className="about__list">
            {t('aboutListInterests').map((item, i) => <li key={`interests-${i}`}>{item}</li>)}
          </ul>
        </div>

        {/* COLUMNA 4 */}
        <div className="about__col">
          <h4 className="about__section-title"><CodedText text={t('aboutTitleDesign')} /></h4>
          <ul className="about__list">
            {t('aboutListCredits').map((item, i) => <li key={`design-${i}`}>{item}</li>)}
          </ul>


          <h4 className="about__section-title"><CodedText text={t('aboutTitleFonts')} /></h4>
          <ul className="about__list">
            {t('aboutListFonts').map((item, i) => <li key={`fonts-${i}`}>{item}</li>)}
          </ul>

            <ul className="about__list">
            <p>Alec Rodríguez Mancebo</p>
          </ul>
        </div>

      </div>
    </section>
  );
}