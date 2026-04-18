import { Link } from 'react-router-dom'
import './Project.css'

export default function JLo() {
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
        <div className="proj-ph-eyebrow">06 · Fashion · Kohl's Private &amp; Exclusive Brands</div>
        <h1 className="proj-ph-title">Four years at <em>Kohl's</em></h1>
        <p className="proj-ph-intro">Designer across Kohl's private and exclusive brand portfolio — sweaters and wovens for multiple seasonal deliveries a year, moving between customer profiles and price tiers. The Jennifer Lopez Collection was a highlight, but the real story is the range.</p>

        <div className="proj-meta">
          <div className="proj-meta-cell"><label>Role</label><strong>Designer · Sweaters &amp; Wovens</strong></div>
          <div className="proj-meta-cell"><label>Company</label><strong>Kohl's</strong></div>
          <div className="proj-meta-cell"><label>Years</label><strong>2015 — 2019</strong></div>
          <div className="proj-meta-cell"><label>Brands</label><strong>Jennifer Lopez Collection · Simply Vera Vera Wang · Dana Buchman</strong></div>
        </div>

        <div className="proj-banner">
          <img src="/jlo_spring16_intro.jpg" alt="JLo Spring 16" />
        </div>
      </header>

      <main className="proj-body">

        {/* JLo Spring 16 */}
        <section className="proj-section">
          <h2>JLo · <em>Spring '16</em></h2>
          <p>The first season I owned end-to-end. Mediterranean palette, lace and eyelet, the kind of daywear that wanted to become eveningwear by 7pm.</p>
        </section>
        <img className="proj-full-img" src="/jlo_spring16_board.png" alt="JLo Spring 16 concept board" />
        <div className="proj-grid-3">
          <div>
            <img src="/jlo_spring16_mood.jpg" alt="" />
            <div className="proj-caption"><span>Mood</span><span>Spring '16</span></div>
          </div>
          <div>
            <img src="/jlo_spring16_1.jpg" alt="" />
            <div className="proj-caption"><span>Development</span><span>Spring '16</span></div>
          </div>
          <div>
            <img src="/jlo_spring16_2.jpg" alt="" />
            <div className="proj-caption"><span>Development</span><span>Spring '16</span></div>
          </div>
        </div>
        <div className="proj-grid-2">
          <div>
            <img src="/jlo_spring16_flats.jpg" alt="" />
            <div className="proj-caption"><span>Technical flats</span><span>Spring '16</span></div>
          </div>
          <div>
            <img src="/jlo_spring16_marketing1.jpg" alt="" />
            <div className="proj-caption"><span>Marketing</span><span>Spring '16</span></div>
          </div>
        </div>

        {/* JLo Sweaters */}
        <section className="proj-section">
          <h2>JLo · <em>sweater program</em></h2>
          <p>The heart of the business. Every season's sweater story — cables, fair isles, statement knits — had to photograph well on JLo, hang well on a 5'4" fit model, and hit a price that made sense at Kohl's.</p>
        </section>
        <div className="proj-grid-2">
          <div>
            <img src="/jlo_wovensweater_board.png" alt="" />
            <div className="proj-caption"><span>Concept board</span><span>Sweaters</span></div>
          </div>
          <div>
            <img src="/jlo_sweater_intro.jpg" alt="" />
            <div className="proj-caption"><span>Campaign</span><span>Sweaters</span></div>
          </div>
        </div>
        <div className="proj-grid-2">
          <div>
            <img src="/jlo_sweater_flats.jpg" alt="" />
            <div className="proj-caption"><span>Flats</span><span>Knit specs</span></div>
          </div>
          <div>
            <img src="/jlo_sweaters_marketing1.jpg" alt="" />
            <div className="proj-caption"><span>In-store</span><span>Marketing</span></div>
          </div>
        </div>

        {/* Vera Wang */}
        <section className="proj-section">
          <h2>Simply Vera · <em>Vera Wang · Fall '19</em></h2>
          <p>Moodier palette, sharper tailoring, a customer who wanted designer DNA without the designer price. My last project before leaving Kohl's for Macy's.</p>
        </section>
        <img className="proj-full-img" src="/vera_fall19_board.png" alt="Vera Fall 19 board" />
        <div className="proj-grid-3">
          <div>
            <img src="/vera_fall19_mood1.jpg" alt="" />
            <div className="proj-caption"><span>Mood</span><span>Vera F'19</span></div>
          </div>
          <div>
            <img src="/vera_fall19_flats1.jpg" alt="" />
            <div className="proj-caption"><span>Flats</span><span>Vera F'19</span></div>
          </div>
          <div>
            <img src="/vera_fall19_marketing.jpg" alt="" />
            <div className="proj-caption"><span>Marketing</span><span>Vera F'19</span></div>
          </div>
        </div>

        {/* Dana Buchman */}
        <section className="proj-section">
          <h2>Dana Buchman · <em>Fall '18</em></h2>
          <p>The career-dresser's brand at Kohl's. Architectural, grown-up, quietly confident — the opposite end of the dial from JLo, same customer's closet.</p>
        </section>
        <img className="proj-full-img" src="/danabuchman_fall18_board.png" alt="Dana Buchman Fall 18 board" />
        <div className="proj-grid-3">
          <div>
            <img src="/danabuchman_fall18_mood.jpg" alt="" />
            <div className="proj-caption"><span>Mood</span><span>DB F'18</span></div>
          </div>
          <div>
            <img src="/danabuchman_fall18_flats1.jpg" alt="" />
            <div className="proj-caption"><span>Flats</span><span>DB F'18</span></div>
          </div>
          <div>
            <img src="/danabuchman_fall18_marketing.jpg" alt="" />
            <div className="proj-caption"><span>Marketing</span><span>DB F'18</span></div>
          </div>
        </div>

        <div className="proj-quote">"Four seasons a year, three brands, one customer — that's where I learned speed and taste are the same skill."</div>

        <div className="proj-cta">
          <h3>Want to talk? <em>Let's make something.</em></h3>
          <div className="proj-cta-btns">
            <a href="mailto:julianamrosario@gmail.com" className="primary">Email me</a>
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
