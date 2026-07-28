import CodedText from '../effects/CodedText'
import { useLanguage } from '../effects/LanguageContext'


const socialLinks = ['VIMEO', 'INSTAGRAM', 'DRIBBLE', 'LINKEDIN', 'BEHANCE', "GITHUB", 'EMAIL'];

function FooterMeta() {
  return (
    <div className="footer__meta">
      <p>/////</p>
      <p>PORTFOLIO 2024/2026</p>
      <p>MADRID, SPAIN.</p>
    </div>
  )
}

function FooterBio() {
  const { t } = useLanguage();
  return (
    <div className="footer__bio">
      <p>
        {t('bioLine1')}<br></br>
        {t('bioLine2')}<br></br>
        {t('bioLine3')}
      </p>
      <p className="footer__scroll-cta">BIO</p>
    </div>
  )
}

function FooterLinks() {
  const { t } = useLanguage();
  return (
    <div className="footer__links-container">
      <div className="footer__links">
        {socialLinks.map((label) => (
        <a key={label} className="footer__link" href="#">
            <CodedText text={label} /> --&gt;
        </a>
        ))}
      </div>
      <p className="footer__scroll-cta">{t('links')}</p>
    </div>
  )
}

function FooterReelSlot() {
  return (
    <div className="footer__reel" aria-label="Videoreel slot">
      <div className="footer__reel-slot"></div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <FooterMeta />
      <FooterBio />
      <FooterLinks />
      <FooterReelSlot />
    </footer>
  )
}

export default Footer
