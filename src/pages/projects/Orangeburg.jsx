import { Link } from 'react-router-dom'
import './Project.css'

export default function Orangeburg() {
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
        <div className="proj-ph-eyebrow">01 · Live · B2C SaaS · Fiber ISP</div>
        <h1 className="proj-ph-title">Orangeburg <em>Fiber</em></h1>
        <p className="proj-ph-intro">A municipal fiber network needed a customer-facing portal that could sign up residents, take payments, and explain a genuinely new category of utility — built end-to-end with an AI-governed workflow in weeks, not quarters.</p>

        <div className="proj-meta">
          <div className="proj-meta-cell"><label>Role</label><strong>AI Product Lead · Design Director</strong></div>
          <div className="proj-meta-cell"><label>Client</label><strong>EntryPoint Networks · City of Orangeburg, SC</strong></div>
          <div className="proj-meta-cell"><label>Year</label><strong>2024 — live</strong></div>
          <div className="proj-meta-cell"><label>Stack</label><strong>React · Stripe · custom CMS</strong></div>
          <div className="proj-meta-cell">
            <label>Link</label>
            <strong>
              <a href="https://www.orangeburgfiber.net" target="_blank" rel="noopener noreferrer" style={{borderBottom:'1px solid var(--accent)',color:'var(--accent)'}}>
                orangeburgfiber.net ↗
              </a>
            </strong>
          </div>
        </div>

        <div className="proj-banner">
          <img src="/orangeburg_fiber_banner.png" alt="Orangeburg Fiber banner" />
        </div>
      </header>

      <main className="proj-body">
        <section className="proj-section">
          <h2>The <em>challenge</em></h2>
          <p>Open-access fiber is a category most residents have never heard of. The city owns the pipes, you choose your ISP. We had to explain that, qualify an address, sell a plan, and collect payment — without making any of it feel like bureaucracy.</p>
          <p>The constraint: a small internal team, a hard launch date tied to infrastructure buildout, and a customer base that ranges from retirees to gamers.</p>
        </section>

        <section className="proj-section">
          <h2>The <em>approach</em></h2>
          <p>I ran the project on the AI-governed five-step methodology our team developed as the tooling matured: Define the user → Map the flow → Write the PRD as the spec of record → Agent-build with human review gates → Ship, measure, iterate. My job was to hold the line on UX, accessibility, tone of voice, and ultimately the brand and design direction.</p>
          <div className="proj-pill-row">
            <span className="proj-pill">Address-based eligibility</span>
            <span className="proj-pill">ISP comparison</span>
            <span className="proj-pill">Self-serve checkout</span>
            <span className="proj-pill">Account dashboard</span>
            <span className="proj-pill">Support handoff</span>
          </div>
        </section>

        <img className="proj-full-img" src="/orangeburg_fiber_banner.png" alt="Orangeburg Fiber product shot" />

        <div className="proj-stats">
          <div><div className="s-num"><em>6</em> wks</div><div className="s-lbl">From kickoff to first paying customer</div></div>
          <div><div className="s-num"><em>40%</em></div><div className="s-lbl">Engineering time saved vs. a traditional build</div></div>
          <div><div className="s-num"><em>1</em></div><div className="s-lbl">Product lead + agent stack replaced a 4-person squad</div></div>
        </div>

        <section className="proj-section">
          <h2>What I <em>shipped</em></h2>
          <p>End-to-end: information architecture, brand voice, UI system, sign-up flow, checkout, account portal, and the marketing site that wraps all of it. Every screen was prototyped in code first, never static mocks — the PRD was the contract, the prototype was the artifact.</p>
        </section>

        <div className="proj-cta">
          <h3>Next: <em>Jamestown BPU Fiber →</em></h3>
          <div className="proj-cta-btns">
            <Link to="/work/jamestown" className="primary">Next project</Link>
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
