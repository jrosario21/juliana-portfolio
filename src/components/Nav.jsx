import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  function close() { setMenuOpen(false) }

  return (
    <>
      <nav className="v2-nav">
        <div className="v2-nav-left">
          <Link to="/" onClick={close}>
            <img src="/logo-monogram.png" alt="Juliana Rosario" className="v2-nav-logo" onError={e => e.target.style.display='none'} />
          </Link>
        </div>

        <div className="v2-nav-mid">
          <Link to="/#work" className={location.hash === '#work' ? 'active' : ''}>Work</Link>
          <Link to="/#writing" className={location.hash === '#writing' ? 'active' : ''}>Writing</Link>
          <Link to="/#about" className={location.hash === '#about' ? 'active' : ''}>About</Link>
          <Link to="/#contact" className={location.hash === '#contact' ? 'active' : ''}>Contact</Link>
        </div>

        <div className="v2-nav-right">
          <a href="/JulianaRosario_Resume.pdf" download className="v2-nav-resume">Resume ↓</a>
        </div>

        <button
          className={`v2-nav-hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="v2-nav-overlay" onClick={close}>
          <div className="v2-nav-mobile" onClick={e => e.stopPropagation()}>
            <Link to="/#work" onClick={close}>Work</Link>
            <Link to="/#writing" onClick={close}>Writing</Link>
            <Link to="/#about" onClick={close}>About</Link>
            <Link to="/#contact" onClick={close}>Contact</Link>
            <div className="v2-nav-mobile-actions">
              <a href="/JulianaRosario_Resume.pdf" download onClick={close}>Resume ↓</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
