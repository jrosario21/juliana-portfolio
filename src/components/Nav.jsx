import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  function close() { setMenuOpen(false) }

  useEffect(() => {
    if (!menuOpen) return
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <nav className="v2-nav" aria-label="Main">
        <div className="v2-nav-left">
          <Link to="/" onClick={close} aria-label="Juliana Rosario — home">
            <img src="/logo-monogram.png" alt="" className="v2-nav-logo" onError={e => e.target.style.display='none'} />
          </Link>
        </div>

        <div className="v2-nav-mid">
          <Link to="/#work" className={location.hash === '#work' ? 'active' : ''}>Work</Link>
          <Link to="/#approach" className={location.hash === '#approach' ? 'active' : ''}>Approach</Link>
          <Link to="/#about" className={location.hash === '#about' ? 'active' : ''}>About</Link>
          <Link to="/#contact" className={location.hash === '#contact' ? 'active' : ''}>Contact</Link>
        </div>

        <div className="v2-nav-right">
          <a href="/JulianaRosario_Resume.pdf" download className="v2-nav-resume" aria-label="Download résumé (PDF)">Resume <span aria-hidden="true">↓</span></a>
        </div>

        <button
          className={`v2-nav-hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
      </nav>

      {menuOpen && (
        <div className="v2-nav-overlay" onClick={close}>
          <nav id="mobile-menu" className="v2-nav-mobile" aria-label="Mobile" onClick={e => e.stopPropagation()}>
            <Link to="/#work" onClick={close}>Work</Link>
            <Link to="/#approach" onClick={close}>Approach</Link>
            <Link to="/#about" onClick={close}>About</Link>
            <Link to="/#contact" onClick={close}>Contact</Link>
            <div className="v2-nav-mobile-actions">
              <a href="/JulianaRosario_Resume.pdf" download onClick={close} aria-label="Download résumé (PDF)">Resume <span aria-hidden="true">↓</span></a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
