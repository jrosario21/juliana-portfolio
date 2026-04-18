import { Link } from 'react-router-dom'
import './Project.css'

export default function Elements() {
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
        <div className="proj-ph-eyebrow">04 · Contract · Design System · iOS + Android</div>
        <h1 className="proj-ph-title">Elements <em>Design Libraries</em></h1>
        <p className="proj-ph-intro">My first step into product. A contract role maintaining and extending the Elements design system across iOS and Android — pattern upkeep, component additions, and keeping the two platform libraries in lockstep.</p>

        <div className="proj-meta">
          <div className="proj-meta-cell"><label>Role</label><strong>Design System Contractor</strong></div>
          <div className="proj-meta-cell"><label>Scope</label><strong>iOS · Android · Marketing assets</strong></div>
          <div className="proj-meta-cell"><label>Year</label><strong>2023</strong></div>
          <div className="proj-meta-cell"><label>Work</label><strong>Component maintenance · net-new patterns · platform parity</strong></div>
        </div>

        <div className="proj-banner">
          <img src="/elements_Banner.png" alt="Elements system banner" />
        </div>
      </header>

      <main className="proj-body">
        <section className="proj-section">
          <h2>The <em>transition project</em></h2>
          <p>After a decade in fashion design, I took this contract to get hands-on with how real product teams ship — component reviews, ticket-driven work, design tokens, platform-specific specs. The scope was deliberately narrow: maintain and grow an existing system, don't rebuild it. It was exactly the right first step.</p>
          <p>What I owned day-to-day: updating patterns as the iOS and Android guidelines evolved, adding net-new components to both libraries, auditing for parity, and partnering with engineering on spec handoff.</p>
        </section>

        <div className="proj-grid-3">
          <div>
            <img src="/elements_iOS.png" alt="iOS" />
            <div className="proj-caption"><span>iOS</span><span>Native patterns</span></div>
          </div>
          <div>
            <img src="/elements_Android.png" alt="Android" />
            <div className="proj-caption"><span>Android</span><span>Material-adapted</span></div>
          </div>
          <div>
            <img src="/elements_Marketing.png" alt="Marketing" />
            <div className="proj-caption"><span>Marketing</span><span>Editorial voice</span></div>
          </div>
        </div>

        <section className="proj-section">
          <h2>What I <em>touched</em></h2>
          <div className="proj-pill-row">
            <span className="proj-pill">Component maintenance</span>
            <span className="proj-pill">Platform parity (iOS ↔ Android)</span>
            <span className="proj-pill">Token updates</span>
            <span className="proj-pill">Spec handoff</span>
            <span className="proj-pill">Marketing asset support</span>
          </div>
        </section>

        <div className="proj-quote">"Small, structured work — but the right first rung. Every PR reviewed, every spec checked, every platform difference reconciled."</div>

        <div className="proj-cta">
          <h3>Next: <em>Style &amp; Co. →</em></h3>
          <div className="proj-cta-btns">
            <Link to="/work/styleco" className="primary">Next project</Link>
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
