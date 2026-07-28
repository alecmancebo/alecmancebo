import { useState } from 'react'
import CodedText from '../effects/CodedText'
import { useLanguage } from '../effects/LanguageContext'

const navItems = ['WORK', 'ABOUT', 'CONTACT', 'PLAYGROUND']

function SidePill({ label, position }) {
  return (
    <div className={`header__pill header__pill--${position}`} aria-hidden="true">
      <span className="header__pill-text">{label}</span>
    </div>
  )
}

function BrandBlock({ setTheme }) {

  const { setLanguage } = useLanguage();

  return (
    <div className="header__brand">
        <img src="../../public/elementos/graffiti.svg" alt="Brand Logo" />
        <p>18:36 PM CEST</p>
        <div>
          <a href="#" onClick={(e) => { e.preventDefault(); setLanguage('en'); }}>
            <CodedText text="[ENG]" />
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); setLanguage('es'); }}>
            <CodedText text="[SPA]" />
          </a>
        </div>
        <div>
          <a href="#" onClick={(e) => { e.preventDefault(); setTheme('dark'); }}>
            <CodedText text="[BLA]" />
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); setTheme('light'); }}>
            <CodedText text="[WHI]" />
          </a>
        </div>
    </div>
  )
}

function MainNav({ isMenuOpen, onToggleMenu, onCloseMenu }) {

  const { t } = useLanguage()

  const navItems = [
    { key: 'work', label: t('work') },
    { key: 'about', label: t('about') },
    { key: 'contact', label: t('contact') },
    { key: 'playground', label: t('playground') }
  ];

  return (
    <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
      <button
        type="button"
        className="header__menu-toggle"
        onClick={onToggleMenu}
      >
        [{isMenuOpen ? t('close') : t('menu')}]
      </button>

      <div className="header__nav-list" id="mobile-navigation">
        {navItems.map((item) => (
          <a key={item.key} className="header__nav-link" href="#" onClick={onCloseMenu}>
            <CodedText text={item.label} />
          </a>
        ))}
      </div>
    </nav>
  )
}

function Header({ setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      {/*<SidePill label="SP" position="left" />*/}
      <BrandBlock setTheme={setTheme}/>
      <MainNav isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} />
      {/*<SidePill label="WH" position="right" />*/}
    </header>
  )
}

  

export default Header
