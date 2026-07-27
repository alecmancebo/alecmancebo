const socialLinks = ['VIMEO', 'INSTAGRAM', 'DRIBBLE', 'LINKEDIN', 'BEHANCE']

function FooterMeta() {
  return (
    <div className="footer-left">
      <p>/////</p>
      <p>PORTFOLIO 2024/2025</p>
      <p>MADRID, ESPANA.</p>
    </div>
  )
}

function FooterBio() {
  return (
    <div className="footer-center">
      <p>Multidisciplinary designer</p>
      <p>based in Madrid, Spain.</p>
      <p className="scroll-cta">[SCROLL TO EXPLORE]</p>
    </div>
  )
}

function FooterLinks() {
  return (
    <div className="footer-right">
      {socialLinks.map((label) => (
        <a key={label} href="#">
          {label} --&gt;
        </a>
      ))}
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <FooterMeta />
      <FooterBio />
      <FooterLinks />
    </footer>
  )
}

export default Footer
