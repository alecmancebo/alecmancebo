import { useState } from 'react'
import CodedText from '../effects/CodedText'
import { useLanguage } from '../effects/LanguageContext'
import RealTimeClock from '../effects/RealTimeClock';


function SidePill({ label, position }) {
  return (
    <div className={`header__pill header__pill--${position}`} aria-hidden="true">
      <span className="header__pill-text">{label}</span>
    </div>
  )
}

function BrandBlock({ setTheme, setCurrentPage }) {
  const { setLanguage } = useLanguage();

  return (
    <div className="header__brand">
        {/* Al hacer clic en el logo, previene la recarga y cambia el estado a 'home' */}
        <a href="/" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>
          <img src="../../public/elementos/graffiti.svg" alt="Brand Logo" />
        </a>
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

function MainNav({ isMenuOpen, onToggleMenu, onCloseMenu, setCurrentPage }) {
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
              setCurrentPage(item.view);
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

function Header({ setTheme, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      {/* Pasamos setCurrentPage a los componentes hijos que lo necesitan */}
      <BrandBlock setTheme={setTheme} setCurrentPage={setCurrentPage} />
      <MainNav isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} setCurrentPage={setCurrentPage} />
    </header>
  )
}

export default Header