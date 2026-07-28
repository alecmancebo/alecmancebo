import CodedText from './CodedText'

const socialLinks = ['VIMEO', 'INSTAGRAM', 'DRIBBLE', 'LINKEDIN', 'BEHANCE', "GITHUB", 'EMAIL'];

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
      <p>MULTIDISCIPLINARY DESIGNER<br></br>AND VISUAL ARTIST BASED <br></br>IN MADRID, SPAIN.</p>
      <p className="footer__scroll-cta">BIO</p>
    </div>
  )
}

function FooterLinks() {
  return (
    <div className="footer__links-container">
      <div className="footer__links">
        {socialLinks.map((label) => (
        <a key={label} className="footer__link" href="#">
            <CodedText text={label} /> --&gt;
        </a>
        ))}
      </div>
      <p className="footer__scroll-cta">LINKS</p>
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
