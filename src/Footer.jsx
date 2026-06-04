import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span>QuietBuild <strong>Studio</strong></span>
          </Link>
          <p>Clean websites and simple web systems built to help small businesses look professional.</p>
        </div>
        <div>
          <h3>Pages</h3>
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Services</h3>
          <Link to="/services">Business Websites</Link>
          <Link to="/services">Landing Pages</Link>
          <Link to="/services">Client Portals</Link>
          <Link to="/services">Simple Dashboards</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <a href="mailto:hello@quietbuildstudio.com">hello@quietbuildstudio.com</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} QuietBuild Studio.</span>
        <span>Built with clarity and care.</span>
      </div>
    </footer>
  )
}

export default Footer
