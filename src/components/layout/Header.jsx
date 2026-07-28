import { useState } from 'react'
import CodedText from './CodedText'

const navItems = ['WORK', 'ABOUT', 'CONTACT', 'PLAYGROUND']

function SidePill({ label, position }) {
  return (
    <div className={`header__pill header__pill--${position}`} aria-hidden="true">
      <span className="header__pill-text">{label}</span>
    </div>
  )
}

function BrandBlock({ setTheme }) {
  return (
    <div className="header__brand">
        <img src="../../public/elementos/graffiti.svg" alt="Brand Logo" />
        <p>18:36 PM CEST</p>
        <div><a href="#">[ENG]</a><a href="#">[SPA]</a></div>
        <div>
          <a href="#" onClick={(e) => { e.preventDefault(); setTheme('dark'); }}>[BLA]</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setTheme('light'); }}>[WHI]</a>
        </div>
    </div>
  )
}

function MainNav({ isMenuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
      <button
        type="button"
        className="header__menu-toggle"
        onClick={onToggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
      >
        [{isMenuOpen ? 'CLOSE' : 'MENU'}]
      </button>

      <div className="header__nav-list" id="mobile-navigation">
        {navItems.map((item) => (
            <a key={item} className="header__nav-link" href="#" onClick={onCloseMenu}>
        <CodedText text={item} />
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
