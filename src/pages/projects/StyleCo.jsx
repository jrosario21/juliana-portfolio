import { Link } from 'react-router-dom'
import './Project.css'

export default function StyleCo() {
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
        <div className="proj-ph-eyebrow">05 · Fashion · Macy's Private Brand</div>
        <h1 className="proj-ph-title">Style <em>&amp; Co.</em></h1>
        <p className="proj-ph-intro">Senior Manager of Design at Macy's Inc. — leading the Style &amp; Co. women's sweater and wovens category across multiple seasons. A $100M+ business built on knowing a customer the industry tends to overlook.</p>

        <div className="proj-meta">
          <div className="proj-meta-cell"><label>Role</label><strong>Senior Manager of Design</strong></div>
          <div className="proj-meta-cell"><label>Company</label><strong>Macy's Inc.</strong></div>
          <div className="proj-meta-cell"><label>Years</label><strong>2019 — 2023</strong></div>
          <div className="proj-meta-cell"><label>Category</label><strong>Women's sweaters · wovens · outerwear</strong></div>
        </div>

        <div className="proj-banner">
          <img src="/styleco_intro.png" alt="Style & Co intro" />
        </div>
      </header>

      <main className="proj-body">
        <section className="proj-section">
          <h2>Designing for the <em>real</em> closet</h2>
          <p>Style &amp; Co. customers shop with intention — they know their size, their shape, their price. My job wasn't to invent trends, it was to translate the season's language into pieces that felt new without making the closet they already trust feel outdated.</p>
        </section>

        <div className="proj-grid-2">
          <div>
            <img src="/styleco_fall_23_2.jpg" alt="Style & Co Fall 23" />
            <div className="proj-caption"><span>Fall '23</span><span>Category board</span></div>
          </div>
          <div>
            <img src="/styleco_spring_24_1.jpg" alt="Style & Co Spring 24" />
            <div className="proj-caption"><span>Spring '24</span><span>Development</span></div>
          </div>
        </div>

        <div className="proj-grid-2">
          <div>
            <img src="/styleco_fall_22_2.jpg" alt="Style & Co Fall 22" />
            <div className="proj-caption"><span>Fall '22</span><span>Line plan</span></div>
          </div>
          <div>
            <img src="/styleco_fall_21_1.jpg" alt="Style & Co Fall 21" />
            <div className="proj-caption"><span>Fall '21</span><span>Key items</span></div>
          </div>
        </div>

        <section className="proj-section">
          <h2>What I <em>did</em></h2>
          <div className="proj-pill-row">
            <span className="proj-pill">Seasonal concept + mood</span>
            <span className="proj-pill">Line planning</span>
            <span className="proj-pill">Technical spec + fit</span>
            <span className="proj-pill">Factory partnership</span>
            <span className="proj-pill">Retail merchandising</span>
            <span className="proj-pill">Marketing creative direction</span>
          </div>
          <p>I ran the category end-to-end — from the first trend board to the sell-through meeting. Four seasons a year, hundreds of SKUs, a team of designers and techs. The rigor I learned here — constant deadlines, real budgets, real customers — is the same rigor I bring to product now.</p>
        </section>

        <div className="proj-quote">"Fashion at scale teaches you that taste without timing is just a sketchbook."</div>

        <div className="proj-cta">
          <h3>Next: <em>JLo Collection at Kohl's →</em></h3>
          <div className="proj-cta-btns">
            <Link to="/work/kohls" className="primary">Next project</Link>
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
