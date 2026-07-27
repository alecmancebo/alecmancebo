const navItems = ['WORK', 'ABOUT', 'CONTACT', 'PLAYGROUND']

function SidePill({ label }) {
  return (
    <div className="side-pill" aria-hidden="true">
      <span>{label}</span>
    </div>
  )
}

function BrandBlock() {
  return (
    <div className="brand-block">
      <span className="brand-mark">AR</span>
      <span className="brand-name">ALEC RODRIGUEZ MANCEBO</span>
    </div>
  )
}

function MainNav() {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      {navItems.map((item) => (
        <a key={item} href="#">
          {item}
        </a>
      ))}
    </nav>
  )
}

function Header() {
  return (
    <header className="site-header">
      <SidePill label="SP" />
      <BrandBlock />
      <MainNav />
      <SidePill label="WH" />
    </header>
  )
}

export default Header
