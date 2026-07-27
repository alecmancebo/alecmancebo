import { useState } from 'react'

const navItems = ['WORK', 'ABOUT', 'CONTACT', 'PLAYGROUND']

function SidePill({ label, position }) {
  return (
    <div className={`header__pill header__pill--${position}`} aria-hidden="true">
      <span className="header__pill-text">{label}</span>
    </div>
  )
}

function BrandBlock() {
  return (
    <div className="header__brand">
      <span className="header__brand-mark">AR</span>
      <span className="header__brand-name">ALEC RODRIGUEZ MANCEBO</span>
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
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <SidePill label="SP" position="left" />
      <BrandBlock />
      <MainNav isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} />
      <SidePill label="WH" position="right" />
    </header>
  )
}

export default Header
