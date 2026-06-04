import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/work', 'Work'],
  ['/services', 'Services'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="QuietBuild Studio home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>QuietBuild <strong>Studio</strong></span>
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
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
            ))}
          </div>
          <Link className="button button-small button-primary" to="/contact">Start a Project</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
