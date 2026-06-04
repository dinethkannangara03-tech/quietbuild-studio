import { Link } from 'react-router-dom'
import siteData from '../data/siteData'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <img className="brand-logo" src={siteData.studio.logoPath} alt="" onError={event => event.currentTarget.remove()} />
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span>{siteData.studio.name}</span>
          </Link>
          <p>{siteData.footer.description}</p>
        </div>
        <div>
          <h3>Pages</h3>
          {siteData.navigation.filter(link => link.path !== '/').map(link => <Link to={link.path} key={link.path}>{link.label}</Link>)}
        </div>
        <div>
          <h3>Services</h3>
          {siteData.services.slice(0, 4).map(service => <Link to="/services" key={service.title}>{service.title}</Link>)}
        </div>
        <div>
          <h3>Connect</h3>
          <a href={`mailto:${siteData.studio.email}`}>{siteData.studio.email}</a>
          <a href={siteData.studio.githubLink} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteData.footer.copyright}</span>
        <span>{siteData.footer.closingText}</span>
      </div>
    </footer>
  )
}

export default Footer
