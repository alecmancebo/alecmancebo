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

function BrandBlock({ setTheme, onNavigatePage }) {
  const { setLanguage } = useLanguage();

  const handleLogoClick = () => {
    onNavigatePage('home')
  }

  return (
    <div className="header__brand">
        <button type="button" className="header__brand-logo" onClick={handleLogoClick} aria-label="Go to home">
          <img src="/elementos/graffiti.svg" alt="Brand Logo" />
        </button>
        <RealTimeClock />
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

function MainNav({ isMenuOpen, onToggleMenu, onCloseMenu, onNavigatePage }) {
  const { t } = useLanguage()

  // Se ha añadido la propiedad 'view' para definir qué estado activar al clicar
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
    </nav>
  )
}

function Header({ setTheme, onNavigatePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      {/* Pasamos onNavigatePage a los componentes hijos que lo necesitan */}
      <BrandBlock setTheme={setTheme} onNavigatePage={onNavigatePage} />
      <MainNav isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} onNavigatePage={onNavigatePage} />
    </header>
  )
}

export default Header