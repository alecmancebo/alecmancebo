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
      <p><TypewriterText text="/////" speed={20} delay={100} /></p>
      <p><TypewriterText text="PORTFOLIO 2024/2026" speed={20} delay={200} /></p>
      <p><TypewriterText text="MADRID, SPAIN." speed={20} delay={300} /></p>
    </div>
  )
}

export function FooterBio() {
  const { t } = useLanguage();
  return (
    <div className="footer__bio">
      <p>
        <TypewriterText text={t('bioLine1')} speed={15} delay={100} /><br></br>
        <TypewriterText text={t('bioLine2')} speed={15} delay={200} /><br></br>
        <TypewriterText text={t('bioLine3')} speed={15} delay={300} />
      </p>
      <p className="footer__bio-label">
        <TypewriterText text="BIO" speed={15} delay={400} />
      </p>
    </div>
  )
}

function FooterLinks() {
  const { t } = useLanguage();
  return (
    <div className="footer__links-container">
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
      <p className="footer__scroll-cta">
        <TypewriterText text={t('links')} speed={15} delay={500} />
      </p>
    </div>
  )
}

const footerReelImages = [
  '/trabajos/transpapelades-1.png',
  '/trabajos/Echar-raices 03.png',
  '/trabajos/Entrelineas 04.png',
  '/trabajos/E-porfolio-1.png',
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