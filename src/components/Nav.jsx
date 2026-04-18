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
          <NavLink to="/work" className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink>
          <NavLink to="/fashion" className={({ isActive }) => isActive ? 'active' : ''}>Fashion</NavLink>
          <Link to="/#about" className={location.hash === '#about' ? 'active' : ''}>About</Link>
          <Link to="/#contact" className={location.hash === '#contact' ? 'active' : ''}>Contact</Link>
        </div>

        <div className="v2-nav-right">
          <NavLink to="/ask" className={({ isActive }) => isActive ? 'v2-nav-askme active' : 'v2-nav-askme'} onClick={close}>
            ✦ Ask Me
          </NavLink>
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
            <NavLink to="/work" onClick={close}>Work</NavLink>
            <NavLink to="/fashion" onClick={close}>Fashion</NavLink>
            <Link to="/#about" onClick={close}>About</Link>
            <Link to="/#contact" onClick={close}>Contact</Link>
            <div className="v2-nav-mobile-actions">
              <NavLink to="/ask" className="v2-nav-askme" onClick={close}>✦ Ask Me</NavLink>
              <a href="/JulianaRosario_Resume.pdf" download onClick={close}>Resume ↓</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
