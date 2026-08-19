import { useState } from 'react'
import CodedText from '../effects/CodedText'
import { useLanguage } from '../effects/LanguageContext'
import RealTimeClock from '../effects/realTimeClock';


function SidePill({ label, position }) {
  return (
    <div className={`header__pill header__pill--${position}`} aria-hidden="true">
      <span className="header__pill-text">{label}</span>
    </div>
  )
}

function BrandBlock({ onNavigatePage }) {
  const handleLogoClick = () => {
    onNavigatePage('home')
  }

  return (
    <div className="header__brand">
      <button type="button" className="header__brand-logo" onClick={handleLogoClick} aria-label="Go to home">
        <img src="/elementos/graffiti.svg" alt="Brand Logo" />
      </button>
    </div>
  )
}

function MainNav({ isMenuOpen, onToggleMenu, onCloseMenu, onNavigatePage, setTheme }) {
  const { t, setLanguage } = useLanguage()

  const navItems = [
    { key: 'work', label: t('work'), path: '/', view: 'home' },
    { key: 'about', label: t('about'), path: '/about', view: 'about' },
    { key: 'playground', label: t('playground'), path: '/playground', view: 'playground' }
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
        <div className="header__nav-group">
          {navItems.map((item) => (
            <a
              key={item.key}
              className="header__nav-link"
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                onNavigatePage(item.view);
                onCloseMenu();
              }}
            >
              <CodedText text={item.label} />
            </a>
          ))}
        </div>

        <div className="header__nav-meta">
          <div className="header__nav-time">
            <RealTimeClock />
          </div>

          <div className="header__nav-language">
            <a href="#" onClick={(e) => { e.preventDefault(); setLanguage('en'); }}>
              <CodedText text="[ENG]" />
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setLanguage('es'); }}>
              <CodedText text="[SPA]" />
            </a>
          </div>

          <div className="header__nav-theme">
            <a href="#" onClick={(e) => { e.preventDefault(); setTheme('dark'); }}>
              <CodedText text="[BLA]" />
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setTheme('light'); }}>
              <CodedText text="[WHI]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Header({ setTheme, onNavigatePage, isMenuOpen, setIsMenuOpen }) {
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <BrandBlock onNavigatePage={onNavigatePage} />
      <MainNav
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
        onNavigatePage={onNavigatePage}
        setTheme={setTheme}
      />
    </header>
  )
}

export default Header