import { Link } from 'react-router-dom'
import './Project.css'

export default function Jamestown() {
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
        <div className="proj-ph-eyebrow">02 · Live · B2C SaaS · Municipal Utility</div>
        <h1 className="proj-ph-title">Jamestown <em>BPU Fiber</em></h1>
        <p className="proj-ph-intro">The second launch on the open-access platform — same bones, different city, different voice. Built as a templated deployment so each municipality gets a product that feels local, not franchised.</p>

        <div className="proj-meta">
          <div className="proj-meta-cell"><label>Role</label><strong>AI Product Lead · Design Director</strong></div>
          <div className="proj-meta-cell"><label>Client</label><strong>Jamestown Board of Public Utilities, NY</strong></div>
          <div className="proj-meta-cell"><label>Year</label><strong>2024 — live</strong></div>
          <div className="proj-meta-cell"><label>Stack</label><strong>React · Stripe · shared CMS</strong></div>
          <div className="proj-meta-cell">
            <label>Link</label>
            <strong>
              <a href="https://www.jamestownbpufiber.com" target="_blank" rel="noopener noreferrer" style={{borderBottom:'1px solid var(--accent)',color:'var(--accent)'}}>
                jamestownbpufiber.com ↗
              </a>
            </strong>
          </div>
        </div>

        <div className="proj-banner">
          <img src="/jamestownfiber_banner.png" alt="Jamestown BPU Fiber banner" />
        </div>
      </header>

      <main className="proj-body">
        <section className="proj-section">
          <h2>From one-off to <em>platform</em></h2>
          <p>After Orangeburg, the real design challenge was: how do we make the next city ship in a week, not six weeks? Answer — a templated front-end with per-city theming tokens, content CMS, and a shared checkout infra. The PRD became a template too.</p>
        </section>

        <div className="proj-quote">"If the second deployment doesn't teach you something, you built a product. If it does, you built a platform."</div>

        <section className="proj-section">
          <h2>What <em>changed</em></h2>
          <p>Jamestown's population skews older and rural. We softened the color palette, dialed the tech jargon way down, and added an "ask a neighbor" social-proof module. The ISP comparison matrix got plain-English explainers in place of spec tables.</p>
        </section>

        <img className="proj-full-img" src="/jamestownfiber_banner.png" alt="Jamestown BPU Fiber product shot" />

        <div className="proj-stats">
          <div><div className="s-num"><em>7</em> days</div><div className="s-lbl">Deployment time for the second city on the platform</div></div>
          <div><div className="s-num"><em>50%</em></div><div className="s-lbl">Cost reduction vs. bespoke per-municipality build</div></div>
          <div><div className="s-num"><em>2</em></div><div className="s-lbl">Cities live · 5 more in the pipeline</div></div>
        </div>

        <div className="proj-cta">
          <h3>Next: <em>the seven-portal platform →</em></h3>
          <div className="proj-cta-btns">
            <Link to="/work/seven-portal" className="primary">Next project</Link>
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
