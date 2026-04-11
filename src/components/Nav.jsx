import { Link, NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const location = useLocation()

  return (
    <nav>
      <Link to="/" className="nav-logo">
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

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <NavLink to="/ask" className={({ isActive }) => isActive ? 'nav-askme nav-askme-active' : 'nav-askme'}>
          ✦ Ask Me
        </NavLink>
        <a href="/JulianaRosario_Resume.pdf" download className="nav-resume">Resume ↓</a>
        <a href="mailto:julianamrosario@gmail.com" className="nav-cta">Let's Talk</a>
      </div>
    </nav>
  )
}
