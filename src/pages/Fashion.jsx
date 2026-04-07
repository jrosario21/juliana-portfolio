import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import './Fashion.css'

const macysImages = [
  { src: '/styleco_spring_24_1.jpg', alt: 'Style & Co. Spring 2024 Collection Board', label: 'Spring 2024 — Collection Board', meta: 'Style & Co. · Macy\'s', wide: true },
  { src: '/styleco_fall_23_2.jpg', alt: 'Style & Co. Fall Holiday 2023 Collection Board', label: 'Fall Holiday 2023', meta: 'Collection Board' },
  { src: '/styleco_fall_22_2.jpg', alt: 'Style & Co. Fall Holiday 2022 Collection Board', label: 'Fall Holiday 2022', meta: 'Collection Board' },
  { src: '/styleco_fall_21_1.jpg', alt: 'Style & Co. Fall Holiday 2021 Collection Board', label: 'Fall Holiday 2021', meta: 'Collection Board' },
]

const kohlsBoards = [
  { src: '/jlo_spring16_board.png', alt: 'Jennifer Lopez Spring 2016 Collection Board', label: 'Spring 2016', meta: 'Jennifer Lopez · Kohl\'s' },
  { src: '/jlo_wovensweater_board.png', alt: 'Jennifer Lopez Woven and Sweater Collection Board', label: 'Woven & Sweater Collections', meta: 'Jennifer Lopez · Kohl\'s' },
  { src: '/vera_fall19_board.png', alt: 'Simply Vera Vera Wang Fall 2019 Collection Board', label: 'Fall 2019', meta: 'Simply Vera Vera Wang · Kohl\'s' },
  { src: '/danabuchman_fall18_board.png', alt: 'Dana Buchman Fall 2018 Collection Board', label: 'Fall 2018', meta: 'Dana Buchman · Kohl\'s' },
]

const translations = [
  { from: 'Trend Forecasting', to: 'Market Research', desc: 'Reading what people want before they know they want it — the same instinct, applied to user needs.' },
  { from: 'Seasonal Collection', to: 'Product Sprint', desc: 'Designing 40+ styles per season to a deadline is a product roadmap with a hard ship date.' },
  { from: 'Vendor Negotiation', to: 'Stakeholder Alignment', desc: 'Managing global production partners across time zones and languages. Diplomacy is diplomacy.' },
  { from: 'Fit Session', to: 'User Testing', desc: 'Putting the product on a real person and asking: does this work? Where does it fail? What needs to change?' },
]

export default function Fashion() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (src, alt) => setLightbox({ src, alt })
  const closeLightbox = () => setLightbox(null)

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <div>
            <p className="page-eyebrow">Fashion Design &nbsp;·&nbsp; 2013 – 2023</p>
            <h1 className="page-title">Where the eye<br />was <em>trained.</em></h1>
          </div>
          <p className="page-intro">Ten years designing apparel at scale for some of the country's most recognized retail brands. The collections, the collaborations, the production systems — this is the design foundation that every digital product I build stands on.</p>
        </div>
      </div>

      {/* BRIDGE QUOTE */}
      <div className="bridge-strip">
        <p>"Fashion taught me that design isn't about what looks good on a hanger — it's about what works for the person wearing it. That's the same question I ask about every screen I design."</p>
      </div>

      {/* MACY'S */}
      <section id="macys">
        <div className="container">
          <div className="brand-header">
            <div className="brand-title">Macy's — Style &amp; Co.</div>
            <div className="brand-meta">Senior Manager of Design &nbsp;·&nbsp; 2019 – 2023 &nbsp;·&nbsp; Private Label Knitwear &amp; Sweaters</div>
          </div>

          {/* Spring 24 — full width */}
          <div className="img-block" style={{ marginBottom: '2rem' }}>
            <img
              src="/styleco_spring_24_1.jpg"
              alt="Style &amp; Co. Spring 2024 Collection Board"
              style={{ width: '100%', height: 'auto', display: 'block', cursor: 'zoom-in' }}
              onClick={() => openLightbox('/styleco_spring_24_1.jpg', 'Style & Co. Spring 2024 Collection Board')}
            />
            <div className="img-caption-row">
              <span className="img-label">Spring 2024 — Collection Board</span>
              <span className="img-meta">Style &amp; Co. · Macy's</span>
            </div>
          </div>

          {/* Fall 23/22/21 row */}
          <div className="three-col-row">
            {[
              { src: '/styleco_fall_23_2.jpg', alt: 'Style & Co. Fall Holiday 2023', label: 'Fall Holiday 2023' },
              { src: '/styleco_fall_22_2.jpg', alt: 'Style & Co. Fall Holiday 2022', label: 'Fall Holiday 2022' },
              { src: '/styleco_fall_21_1.jpg', alt: 'Style & Co. Fall Holiday 2021', label: 'Fall Holiday 2021' },
            ].map(img => (
              <div key={img.src}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: 'auto', display: 'block', cursor: 'zoom-in' }}
                  onClick={() => openLightbox(img.src, img.alt)}
                />
                <div className="img-caption-col">
                  <div className="img-label-sm">{img.label}</div>
                  <div className="img-meta-sm">Collection Board</div>
                </div>
              </div>
            ))}
          </div>

          <div className="brand-description">
            <div className="brand-stat">
              <div className="brand-stat-number">40+</div>
              <div className="brand-stat-label">Styles per collection, multiple seasons annually</div>
            </div>
            <div className="brand-stat">
              <div className="brand-stat-number">50%</div>
              <div className="brand-stat-label">Yarn cost reduction through strategic vendor renegotiation</div>
            </div>
            <div className="brand-stat">
              <div className="brand-stat-number">6</div>
              <div className="brand-stat-label">Designers and coordinators managed as Senior Manager</div>
            </div>
          </div>
        </div>
      </section>

      {/* KOHL'S */}
      <section id="kohls" className="section-kohls">
        <div className="container">
          <div className="brand-header">
            <div className="brand-title">Kohl's</div>
            <div className="brand-meta">Designer &nbsp;·&nbsp; 2013 – 2019 &nbsp;·&nbsp; Simply Vera · Dana Buchman · Jennifer Lopez</div>
          </div>

          <p className="click-hint">Click any board to examine in detail</p>

          {kohlsBoards.map((board, i) => (
            <div
              key={board.src}
              className="img-block"
              style={{ marginBottom: i === kohlsBoards.length - 1 ? '4rem' : '2.5rem' }}
            >
              <img
                src={board.src}
                alt={board.alt}
                style={{ width: '100%', height: 'auto', display: 'block', cursor: 'zoom-in' }}
                onClick={() => openLightbox(board.src, board.alt)}
              />
              <div className="img-caption-row">
                <span className="img-label">{board.label}</span>
                <span className="img-meta">{board.meta}</span>
              </div>
            </div>
          ))}

          <div className="brand-description">
            <div className="brand-stat">
              <div className="brand-stat-number">20%</div>
              <div className="brand-stat-label">Category sales increase through trend-aligned collection direction</div>
            </div>
            <div className="brand-stat">
              <div className="brand-stat-number">3</div>
              <div className="brand-stat-label">Major brands designed across — Simply Vera, Dana Buchman, Jennifer Lopez</div>
            </div>
            <div className="brand-stat">
              <div className="brand-stat-number">6 yrs</div>
              <div className="brand-stat-label">Building systems for designing at volume in a global production environment</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS TRANSLATION */}
      <section id="translation" className="section-dark-fashion">
        <div className="container">
          <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-lt)', marginBottom: '1rem' }}>The Translation</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--bg)', lineHeight: 1.2, marginBottom: '3rem' }}>
            How fashion became <em style={{ color: 'var(--accent-lt)', fontStyle: 'italic' }}>product thinking.</em>
          </h2>
          <div className="translation-grid">
            {translations.map(t => (
              <div key={t.from} className="translation-card">
                <div className="translation-from">{t.from}</div>
                <div className="translation-arrow">↓</div>
                <div className="translation-to">{t.to}</div>
                <div className="translation-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}
    </>
  )
}
