const socialLinks = ['VIMEO', 'INSTAGRAM', 'DRIBBLE', 'LINKEDIN', 'BEHANCE']

function FooterMeta() {
  return (
    <div className="footer__meta">
      <p>/////</p>
      <p>PORTFOLIO 2024/2025</p>
      <p>MADRID, ESPAÑA.</p>
    </div>
  )
}

function FooterBio() {
  return (
    <div className="footer__bio">
      <p>Multidisciplinary designer</p>
      <p>based in Madrid, Spain.</p>
      <p className="footer__scroll-cta">[SCROLL TO EXPLORE]</p>
    </div>
  )
}

function FooterLinks() {
  return (
    <div className="footer__links">
      {socialLinks.map((label) => (
        <a key={label} className="footer__link" href="#">
          {label} --&gt;
        </a>
      ))}
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
