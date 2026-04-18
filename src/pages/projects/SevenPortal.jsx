import { Link } from 'react-router-dom'
import './Project.css'

export default function SevenPortal() {
  return (
    <>
      <nav className="proj-nav">
        <Link to="/" className="proj-back-link">← All work</Link>
        <Link to="/">
          <img src="/logo-monogram.png" alt="JR" className="proj-nav-logo" onError={e => e.target.style.display='none'} />
        </Link>
        <div className="proj-nav-right">
          <a href="mailto:julianamrosario@gmail.com">julianamrosario@gmail.com</a>
        </div>
      </nav>

      <header className="proj-ph">
        <div className="proj-ph-eyebrow">03 · Under NDA · B2B Platform</div>
        <h1 className="proj-ph-title">Seven <em>Portals,</em> One Platform</h1>
        <p className="proj-ph-intro">Seven distinct user types, one shared infrastructure. A portal architecture for a national fiber operator — the admin brain behind the customer-facing sites.</p>

        <div className="proj-meta">
          <div className="proj-meta-cell"><label>Role</label><strong>AI Product Lead · Platform Architect</strong></div>
          <div className="proj-meta-cell"><label>Client</label><strong>EntryPoint Networks</strong></div>
          <div className="proj-meta-cell"><label>Year</label><strong>2024 — 2025</strong></div>
          <div className="proj-meta-cell"><label>Surfaces</label><strong>Resident · ISP · City · Ops · Installer · Finance · Super-admin</strong></div>
        </div>

        <div className="proj-banner">
          <img src="/EntpntWebImage_banner2.png" alt="EntryPoint Platform" />
        </div>
      </header>

      <main className="proj-body">
        <div className="proj-nda">
          <strong>NDA note —</strong> product visuals are withheld. I'm happy to walk through the system architecture, flow diagrams, and decisions live. Ask me for a walkthrough and I'll share the case study deck.
        </div>

        <section className="proj-section">
          <h2>The <em>shape of the problem</em></h2>
          <p>An open-access fiber network has a weird org chart: the city owns the pipes, ISPs rent capacity, residents pick an ISP, installers show up at houses, finance reconciles it all, ops watches for faults. Seven audiences, seven mental models, one database.</p>
          <p>Most B2B platforms fail here by building seven apps. We built one — with role-aware views, a shared design system, and per-role dashboards that only show the data and actions that role cares about.</p>
        </section>

        <section className="proj-section">
          <h2>What I <em>owned</em></h2>
          <div className="proj-pill-row">
            <span className="proj-pill">Information architecture across 7 roles</span>
            <span className="proj-pill">Design system & component library</span>
            <span className="proj-pill">PRDs per portal</span>
            <span className="proj-pill">Agent-led build orchestration</span>
            <span className="proj-pill">Stakeholder review rituals</span>
          </div>
          <p>Each portal shipped behind a feature flag, so we could onboard role by role without breaking the others. The real work wasn't screens — it was the shared primitive library that let seven portals feel like one product.</p>
        </section>

        <div className="proj-stats">
          <div><div className="s-num"><em>7</em></div><div className="s-lbl">Role-specific portals on one codebase</div></div>
          <div><div className="s-num"><em>20%</em></div><div className="s-lbl">Engineering cycles saved on the second through seventh portals</div></div>
          <div><div className="s-num"><em>1</em></div><div className="s-lbl">Shared design system · zero per-portal forks</div></div>
        </div>

        <div className="proj-cta">
          <h3>Want the full case study? <em>Ask me.</em></h3>
          <div className="proj-cta-btns">
            <a href="mailto:julianamrosario@gmail.com?subject=Seven-Portal%20walkthrough" className="primary">Request walkthrough</a>
            <Link to="/">All work</Link>
          </div>
        </div>
      </main>

      <footer className="proj-footer">
        <div>© 2025 Juliana Rosario</div>
        <div className="proj-footer-r">Made in NY/NJ · Fashion → AI</div>
      </footer>
    </>
  )
}
