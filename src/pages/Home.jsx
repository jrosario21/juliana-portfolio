import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const TAGLINES = [
  `I used to design what people wore. Now I design what they use. Different medium, same question: <em>does this actually fit the person it's made for?</em>`,
  `Ten years of apparel at scale taught me one thing — design only matters if it works on a <em>real body, on a real day.</em> Now I bring that same discipline to AI-native product work.`,
  `I make products for the person who is tired, distracted, and already doing three other things. Fashion was the <em>classroom.</em> Software is the practice.`,
  `Former fashion designer, current AI product lead. Same job description — <em>build things people actually want, at scale, under pressure, to a hard deadline.</em> Only the medium changed.`
]

const WORK_ITEMS = [
  { num: '01', plain: 'Orangeburg ', serif: 'Fiber',      href: '/work/orangeburg',    img: '/orangeburg_fiber_banner.png',  color: '#E63946', label: 'Orangeburg Fiber',             meta: ['ENTRYPOINT', 'CITY NETWORK · LIVE', '2024'] },
  { num: '02', plain: 'Jamestown ', serif: 'BPU Fiber',   href: '/work/jamestown',     img: '/jamestownfiber_banner.png',    color: '#CDEAE1', label: 'Jamestown BPU Fiber',          meta: ['ENTRYPOINT', 'CITY NETWORK · LIVE', '2024'] },
  { num: '03', plain: 'Seven-Portal ', serif: 'Platform', href: '/work/seven-portal',  img: '/EntpntWebImage_banner2.png',   color: '#FFD2B8', label: 'Seven-Portal Platform',        meta: ['ENTRYPOINT', 'B2B + B2C · UNDER NDA', '2023–'] },
  { num: '04', plain: 'Ele', serif: 'ments',              href: '/work/elements',      img: '/elements_Banner.png',          color: '#F7E9B0', label: 'Elements — Design Libraries',  meta: ['CONTRACT', 'DESIGN SYSTEM · iOS + ANDROID', '2023'] },
  { num: '05', plain: 'Style ', serif: '& Co.',           href: '/work/styleco',       img: '/styleco_spring_24_1.jpg',      color: '#F4A7B9', label: "Style & Co. · Macy's",          meta: ["MACY'S", 'SR. MANAGER OF DESIGN', '2019–23'] },
  { num: '06', plain: "Kohl's ", serif: '— JLo · Vera · Dana Buchman', href: '/work/kohls', img: '/jlo_spring16_board.png', color: '#0F0F10', label: "Kohl's · JLo · Vera · Dana Buchman", meta: ["KOHL'S", 'PRIVATE & EXCLUSIVE BRANDS', '2015–19'] },
]

const APPROACH = [
  { num: '01', title: 'Define the goal & MVP',                            src: 'Crisp success + scope' },
  { num: '02', title: 'Map the user path in plain language',              src: 'Every decision + edge case' },
  { num: '03', title: 'AI refinement & PRD',                             src: 'Edit ruthlessly' },
  { num: '04', title: 'Agent-governed build under a defined ruleset',    src: 'Consistency by rule, not by hand' },
  { num: '05', title: 'Review is the new design skill',                  src: 'Judgment > speed' },
]

export default function Home() {
  const [taglineIdx, setTaglineIdx] = useState(0)
  const [preview, setPreview] = useState({ show: false, img: '', color: '', label: '', x: 0, y: 0 })
  const canvasRef = useRef(null)
  const heroRef = useRef(null)
  const scrapsRef = useRef([])

  // ── Watercolor canvas effect ──
  useEffect(() => {
    const canvas = canvasRef.current
    const hero = heroRef.current
    if (!canvas || !hero) return
    const ctx = canvas.getContext('2d')
    let W = 0, H = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const blobs = []

    function resize() {
      const r = hero.getBoundingClientRect()
      W = r.width; H = r.height
      canvas.width = W * dpr; canvas.height = H * dpr
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let lastX = null, lastY = null, lastT = 0

    function onMove(e) {
      const r = hero.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      const now = performance.now()
      if (lastX !== null) {
        const dx = x - lastX, dy = y - lastY
        const dist = Math.hypot(dx, dy)
        if (dist > 6 && now - lastT > 16) {
          const steps = Math.min(4, Math.max(1, Math.floor(dist / 18)))
          for (let i = 0; i < steps; i++) {
            const t = i / steps
            blobs.push({
              x: lastX + dx * t + (Math.random() - .5) * 10,
              y: lastY + dy * t + (Math.random() - .5) * 10,
              r: 60 + Math.random() * 80,
              born: now,
              life: 2200 + Math.random() * 1400,
              hueShift: (Math.random() - .5) * 8,
            })
          }
          lastT = now
        }
      }
      lastX = x; lastY = y
    }
    function onLeave() { lastX = null; lastY = null }

    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerleave', onLeave)

    let raf
    function draw() {
      const now = performance.now()
      ctx.clearRect(0, 0, W, H)
      for (let i = blobs.length - 1; i >= 0; i--) {
        const b = blobs[i]
        const age = (now - b.born) / b.life
        if (age >= 1) { blobs.splice(i, 1); continue }
        const alpha = Math.sin(age * Math.PI) * 0.45
        const r = b.r * (0.6 + age * 0.9)
        const g = ctx.createRadialGradient(b.x, b.y, r * 0.1, b.x, b.y, r)
        g.addColorStop(0, `hsla(${354 + b.hueShift},72%,55%,${alpha * 0.55})`)
        g.addColorStop(0.5, `hsla(${348 + b.hueShift},65%,50%,${alpha * 0.25})`)
        g.addColorStop(1, `hsla(${344 + b.hueShift},60%,45%,0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        for (let s = 0; s <= 24; s++) {
          const a = (s / 24) * Math.PI * 2
          const wobble = 1 + Math.sin(a * 3 + b.born * 0.002) * 0.08 + Math.sin(a * 5 + b.born * 0.003) * 0.05
          const px = b.x + Math.cos(a) * r * wobble
          const py = b.y + Math.sin(a) * r * wobble
          s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.closePath(); ctx.fill()
        if (age < 0.4) {
          ctx.fillStyle = `hsla(356,78%,50%,${alpha * 0.2})`
          ctx.beginPath()
          ctx.arc(b.x + Math.sin(b.born) * r * 0.2, b.y + Math.cos(b.born) * r * 0.2, r * 0.25, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  // ── Parallax on collage scraps ──
  useEffect(() => {
    const scraps = scrapsRef.current.filter(Boolean)
    const about = document.querySelector('.v2-about')
    if (!about || !scraps.length) return
    function onScroll() {
      const r = about.getBoundingClientRect()
      if (r.bottom < 0 || r.top > window.innerHeight) return
      const progress = (window.innerHeight - r.top) / (window.innerHeight + r.height)
      scraps.forEach((s, i) => {
        if (!s) return
        const amt = (progress - .5) * 20 * (i % 2 === 0 ? 1 : -1)
        s.style.setProperty('--ty', amt + 'px')
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleWorkEnter(e, item) {
    setPreview({ show: true, img: item.img, color: item.color, label: item.label, x: e.clientX, y: e.clientY })
  }
  function handleWorkMove(e) {
    setPreview(p => ({ ...p, x: e.clientX, y: e.clientY }))
  }
  function handleWorkLeave() {
    setPreview(p => ({ ...p, show: false }))
  }

  return (
    <main className="v2-home">

      {/* ── HERO ── */}
      <header className="v2-hero" id="top" ref={heroRef}>
        <div className="v2-wash" />
        <canvas className="v2-canvas" ref={canvasRef} />
        <div className="v2-hero-grid" />

        <div className="v2-hero-top">
          <div className="v2-kicker">
            <span className="v2-kicker-idx">N° 001</span>
            <span>Portfolio</span>
            <span>MMXXVI</span>
          </div>
          <p
            className="v2-tagline"
            dangerouslySetInnerHTML={{ __html: TAGLINES[taglineIdx] }}
          />
          <div className="v2-badge-wrap">
            <span className="v2-hero-badge">● Open to what's next</span>
            <button
              className="v2-cycle-btn"
              onClick={() => setTaglineIdx(i => (i + 1) % TAGLINES.length)}
              title="Try a different intro"
            >↻ cycle intro</button>
          </div>
        </div>

        <h1 className="v2-hero-name" aria-label="Juliana Rosario">
          <span className="v2-name-row">
            <span>JULIA</span><span className="v2-name-serif">na</span>
          </span>
          <span className="v2-name-row">
            <span className="v2-name-outline">ROSARI</span><span className="v2-name-serif">o</span>
          </span>
        </h1>

        <div className="v2-hero-foot">
          <div className="v2-foot-cell">
            <label>Currently</label>
            <strong>AI Product Lead, <em>EntryPoint Networks</em></strong>
          </div>
          <div className="v2-foot-cell">
            <label>Previously</label>
            <strong>Sr. Manager of Design · Macy's &amp; Kohl's · 10 yrs</strong>
          </div>
          <div className="v2-foot-cell">
            <label>Focus</label>
            <strong>AI-governed product pipelines, B2B &amp; B2C SaaS, human-centered design</strong>
          </div>
        </div>
      </header>

      {/* ── MARQUEE ── */}
      <div className="v2-marquee">
        <div className="v2-marquee-track" aria-hidden="true">
          {[
            'AI PRODUCT DEVELOPMENT','HUMAN-CENTERED DESIGN','B2B & B2C SAAS',
            'PROTOTYPING-FIRST','DESIGN SYSTEMS AT SCALE','FASHION → PRODUCT',
            'AI PRODUCT DEVELOPMENT','HUMAN-CENTERED DESIGN','B2B & B2C SAAS',
            'PROTOTYPING-FIRST','DESIGN SYSTEMS AT SCALE','FASHION → PRODUCT',
          ].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* ── SELECTED WORK ── */}
      <section className="v2-section" id="work">
        <div className="v2-section-head">
          <span className="v2-eyebrow">§ 02 — Selected Work</span>
          <h2>Products I've <em>built</em>,<br />physical and digital.</h2>
          <span className="v2-count">06 selected · 2013–present</span>
        </div>

        <div className="v2-work-list">
          {WORK_ITEMS.map(item => (
            <Link
              key={item.num}
              to={item.href}
              className="v2-work-row"
              onMouseEnter={e => handleWorkEnter(e, item)}
              onMouseMove={handleWorkMove}
              onMouseLeave={handleWorkLeave}
            >
              <span className="v2-work-num">{item.num}</span>
              <h3 className="v2-work-title">
                <span>{item.plain}</span><em>{item.serif}</em>
              </h3>
              <span className="v2-work-meta">
                {item.meta.map((m, i) => <span key={i}>{m}</span>)}
              </span>
              <span className="v2-work-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Work hover preview */}
      <div
        className={`v2-work-preview${preview.show ? ' show' : ''}`}
        style={{ left: preview.x, top: preview.y }}
        aria-hidden="true"
      >
        {preview.img
          ? <img src={preview.img} alt="" />
          : <div className="v2-preview-ph" style={{ background: preview.color }}>{preview.label}</div>
        }
      </div>

      {/* ── APPROACH ── */}
      <section className="v2-strip" id="approach">
        <div className="v2-strip-inner">
          <h2>The <em>approach.</em></h2>
          <p className="v2-strip-sub">
            Design is now requirements fluency. The most valuable skill in an AI-first world isn't Figma speed — it's knowing how to define what needs to be built with enough precision that an agent can execute it, and enough judgment to recognize when it hasn't.
          </p>
          <div className="v2-thought-list">
            {APPROACH.map(a => (
              <div key={a.num} className="v2-thought">
                <span className="v2-thought-y">{a.num}</span>
                <span className="v2-thought-t">{a.title}</span>
                <span className="v2-thought-src">{a.src}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT COLLAGE ── */}
      <section className="v2-about" id="about">
        <div className="v2-about-grid">

          <div className="v2-about-center">
            <div className="v2-about-role">Hello — I'm <em>Juliana</em></div>
            <h3 className="v2-signature">Juliana Rosario</h3>
            <p className="v2-about-p1">
              Product lead, former fashion designer, and a mom of two — based in NY/NJ, on a path that never really changed direction, just medium.
            </p>
            <p className="v2-about-p2">
              A decade in physical product — fashion, retail, global manufacturing. Then digital. Then AI. Never a pivot, just a natural progression: building things people actually want, under pressure, at scale. The industry changed. The instincts didn't.
            </p>
            <p className="v2-about-p3">
              Off the clock, life is loud in the best way: two kids, an opinionated mini poodle named Domino, and music playing most of the time. I dance because it's fun, not because anyone's watching, and I travel whenever I can. I'm endlessly curious about why people make the choices they make — the same question that drives my design work, just without a deadline attached. I organize obsessively, mostly because it clears space to think. And I believe personal style, in a closet or in a product, is authorship, not aesthetics: what you put into the world says something. I like mine to mean something.
            </p>
          </div>

          <div className="v2-about-side">
            {/* ── TIMELINE CARD ── */}
            <div className="v2-scrap v2-sc-timeline" ref={el => scrapsRef.current[1] = el}>
              <div className="v2-timeline-title">One thread runs through it.</div>
              <div className="v2-timeline-list">
                <div className="v2-tl-row">
                  <span className="v2-tl-dot" />
                  <div>
                    <span className="v2-tl-year">2013–2023</span>
                    <span className="v2-tl-label">Fashion Designer → Sr. Manager of Design · Kohl's &amp; Macy's</span>
                  </div>
                </div>
                <div className="v2-tl-row">
                  <span className="v2-tl-dot" />
                  <div>
                    <span className="v2-tl-year">2018</span>
                    <span className="v2-tl-label">UX/UI Certification · Pratt Institute</span>
                  </div>
                </div>
                <div className="v2-tl-row">
                  <span className="v2-tl-dot" />
                  <div>
                    <span className="v2-tl-year">2022</span>
                    <span className="v2-tl-label">Digital Product Work · Financial systems UI</span>
                  </div>
                </div>
                <div className="v2-tl-row">
                  <span className="v2-tl-dot v2-tl-dot-accent" />
                  <div>
                    <span className="v2-tl-year">2023–Now</span>
                    <span className="v2-tl-label">AI Product Lead · EntryPoint Networks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="v2-scrap v2-sc-polaroid" ref={el => scrapsRef.current[0] = el}>
              <div className="v2-polaroid-img">
                <img src="/juliana_image2.jpg" alt="Juliana Rosario" />
              </div>
              <div className="v2-polaroid-cap">Juliana — NY/NJ</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="v2-contact" id="contact">
        <div className="v2-contact-wash" />
        <div className="v2-contact-inner">
          <p className="v2-contact-eyebrow">§ 05 — Let's work together</p>
          <h2>Build something<br /><em>worth using.</em></h2>
          <p className="v2-contact-sub">
            Open to full-time roles, fractional engagements, and conversations with teams who care about getting it right.
          </p>
          <div className="v2-contact-links">
            <a className="v2-contact-primary" href="mailto:julianamrosario@gmail.com">julianamrosario@gmail.com →</a>
            <a href="https://www.linkedin.com/in/julianamannionrosario" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://www.instagram.com/byjuliemango" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="/JulianaRosario_Resume.pdf" download>Resume ↓</a>
          </div>
        </div>
        <div className="v2-footer">
          <div>© 2026 Juliana Rosario</div>
          <div>Built with care in the NY/NJ area</div>
          <div className="v2-footer-r">v4.0 · Updated Apr 2026</div>
        </div>
      </section>

    </main>
  )
}
