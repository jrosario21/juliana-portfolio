import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  function close() { setMenuOpen(false) }

  return (
    <>
      <nav>
        <Link to="/" className="nav-logo" onClick={close}>
          <img src="/logo-monogram.png" alt="JR" onError={e => e.target.style.display='none'} />
          <span className="nav-logo-name">Juliana Rosario</span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/#story" className={location.pathname === '/' && location.hash === '#story' ? 'active' : ''}>Story</Link>
          </li>
          <li>
            <Link to="/#methodology" className={location.pathname === '/' && location.hash === '#methodology' ? 'active' : ''}>Approach</Link>
          </li>
          <li>
            <NavLink to="/work" className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink>
          </li>
          <li>
            <NavLink to="/fashion" className={({ isActive }) => isActive ? 'active' : ''}>Fashion</NavLink>
          </li>
          <li>
            <Link to="/#tools" className={location.pathname === '/' && location.hash === '#tools' ? 'active' : ''}>Skills</Link>
          </li>
          <li>
            <Link to="/#about" className={location.pathname === '/' && location.hash === '#about' ? 'active' : ''}>About</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <NavLink to="/ask" className={({ isActive }) => isActive ? 'nav-askme nav-askme-active' : 'nav-askme'} onClick={close}>
            ✦ Ask Me
          </NavLink>
          <a href="/JulianaRosario_Resume.pdf" download className="nav-resume">Resume ↓</a>
          <a href="mailto:julianamrosario@gmail.com" className="nav-cta">Let's Talk</a>
        </div>

        <button
          className={`nav-hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="nav-mobile-overlay" onClick={close}>
          <div className="nav-mobile-menu" onClick={e => e.stopPropagation()}>
            <Link to="/#story" onClick={close}>Story</Link>
            <Link to="/#methodology" onClick={close}>Approach</Link>
            <NavLink to="/work" onClick={close}>Work</NavLink>
            <NavLink to="/fashion" onClick={close}>Fashion</NavLink>
            <Link to="/#tools" onClick={close}>Skills</Link>
            <Link to="/#about" onClick={close}>About</Link>
            <div className="nav-mobile-actions">
              <NavLink to="/ask" className="nav-askme" onClick={close}>✦ Ask Me</NavLink>
              <a href="/JulianaRosario_Resume.pdf" download className="nav-resume" onClick={close}>Resume ↓</a>
              <a href="mailto:julianamrosario@gmail.com" className="nav-cta" onClick={close}>Let's Talk</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
