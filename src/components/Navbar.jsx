import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import siteData from '../data/siteData'

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label={`${siteData.studio.name} home`}>
          <img className="brand-logo" src={siteData.studio.logoPath} alt="" onError={event => event.currentTarget.remove()} />
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>{siteData.studio.name}</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <div id="nav-menu" className={`nav-menu ${open ? 'is-open' : ''}`}>
          <div className="nav-links">
            {siteData.navigation.map(link => (
              <NavLink key={link.path} to={link.path} end={link.path === '/'}>{link.label}</NavLink>
            ))}
          </div>
          <Link className="button button-small button-primary" to="/contact">Start a Project</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
