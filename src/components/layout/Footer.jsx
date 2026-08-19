import { useEffect, useState } from 'react'
import CodedText from '../effects/CodedText'
import TypewriterText from '../effects/TypewriterText'
import { useLanguage } from '../effects/LanguageContext'

const socialLinks = [
  { label: 'VIMEO', url: 'https://vimeo.com/alecrmancebo' },
  { label: 'INSTAGRAM', url: 'https://www.instagram.com/alekxty/' },
  { label: 'DRIBBBLE', url: 'https://dribbble.com/alecrmancebo' }, 
  { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/alec-mancebo/' },
  { label: 'BEHANCE', url: 'https://www.behance.net/alecrodrgu' },
  { label: 'GITHUB', url: 'https://github.com/alecmancebo' },
];

function FooterMeta() {
  return (
    <div className="footer__meta">
      <p><TypewriterText text="/////" /></p>
      <p><TypewriterText text="PORTFOLIO 2024/2026" /></p>
      <p><TypewriterText text="MADRID, SPAIN." /></p>
    </div>
  )
}

export function FooterBio() {
  const { t } = useLanguage();
  return (
    <div className="footer__bio">
      <p>
        <TypewriterText text={t('bioLine1')} /><br></br>
        <TypewriterText text={t('bioLine2')} /><br></br>
        <TypewriterText text={t('bioLine3')} />
      </p>
      <p className="footer__bio-label">
        <TypewriterText text="BIO" />
      </p>
    </div>
  )
}

function FooterLinks() {
  const { t } = useLanguage();
  const [areLinksOpen, setAreLinksOpen] = useState(false)

  return (
    <div className={`footer__links-container ${areLinksOpen ? 'footer__links-container--open' : ''}`}>
      <div className="footer__links">
        {socialLinks.map((link, index) => (
        <a 
          key={link.label} 
          className="footer__link" 
          href={link.url}
          target="_blank" 
          rel="noopener noreferrer"
        >
            <CodedText text={link.label} delay={100 + (index * 100)} /> --&gt;
        </a>
        ))}
      </div>
      <button
        type="button"
        className="footer__scroll-cta footer__links-toggle"
        aria-expanded={areLinksOpen}
        onClick={() => setAreLinksOpen((previousState) => !previousState)}
      >
        <TypewriterText text={t('links')} />
      </button>
    </div>
  )
}

export const footerReelImages = [
  '/trabajos/transpapelades-1.png',
  '/trabajos/Echar-raices 03.png',
  '/trabajos/Entrelineas 04.png',
  '/trabajos/E-porfolio.png',
  '/trabajos/Fade04.png',
  '/trabajos/Huddle 01.png',
]

function FooterReelSlot() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((previousIndex) => (previousIndex + 1) % footerReelImages.length)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="footer__reel" aria-label="Videoreel slot">
      <div className="footer__reel-slot">
        <img
          src={footerReelImages[currentImageIndex]}
          alt="Work preview"
        />
      </div>
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