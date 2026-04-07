import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">AI Product Lead &nbsp;·&nbsp; Human-Centered Design &nbsp;·&nbsp; NY / NJ</p>
          <h1 className="hero-headline">
            Building products<br />
            for humans,<br />
            <em>empowered by AI.</em>
          </h1>
          <p className="hero-sub">
            I spent a decade designing clothes for millions of people. Then I fell in love with the invisible infrastructure that powers modern life. Now I build software the same way I built fashion — starting with the human wearing it.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="btn-primary">See My Work</Link>
            <a href="#methodology" className="btn-secondary">My Approach</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-pattern" />
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">40%</div>
              <div className="stat-label">Reduction in design-to-production time using AI prototyping</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years leading AI-assisted product development from scratch</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">B2B<br />&amp; B2C</div>
              <div className="stat-label">SaaS platforms launched for municipalities, ISPs &amp; subscribers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years designing products for scale — physical and digital</div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="section-dark">
        <div className="container">
          <div className="story-grid">
            <div className="story-left">
              <p className="section-eyebrow" style={{ color: 'var(--accent-lt)' }}>The Background</p>
              <h2 className="section-title" style={{ color: 'var(--bg)' }}>
                From runway<br />to runway&nbsp;<em style={{ color: 'var(--accent-lt)' }}>code.</em>
              </h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2013 – 2023</div>
                  <div className="timeline-content">
                    <h4>Fashion Designer → Senior Manager of Design</h4>
                    <p>Kohl's &amp; Macy's — Designing and leading product at scale. Celebrity collaborations (Jennifer Lopez), 40+ styles monthly, managing teams and global vendor relationships. Rose to Sr. Manager overseeing one of Macy's largest private brands.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2018</div>
                  <div className="timeline-content">
                    <h4>UX/UI Certification — PRATT Institute</h4>
                    <p>Recognizing that design is fundamentally about systems and human behavior — regardless of medium. Bridging physical design instincts to digital experiences.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2022</div>
                  <div className="timeline-content">
                    <h4>Digital Product Work</h4>
                    <p>UI design for financial monitoring systems. Cross-platform design consistency. Building the digital vocabulary and toolset.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2023 – Now</div>
                  <div className="timeline-content">
                    <h4>AI Product Lead</h4>
                    <p>EntryPoint Networks. Directing AI to design and ship complex SaaS platforms for municipalities and ISPs. Building a prototyping-first methodology that ships real, scalable software.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="story-right">
              <div className="story-card">
                <h3>The thing about fashion is — it's all product management.</h3>
                <p>Trend forecasting is market research. Collections are sprints. Vendor negotiations are stakeholder alignment. Managing 40 styles a month to hit a sales target is a product roadmap. I just didn't have the vocabulary for it yet.</p>
              </div>
              <div className="story-card">
                <h3>Why AI? Because it removes the bottleneck between thinking and making.</h3>
                <p>I've never been a developer, but I've always been a builder. Working with OpenAI, Claude, Grok, FigmaMake, and a constantly evolving stack of AI tools, I can prototype, validate, and ship products faster than traditional dev cycles allow. My job is to know what good looks like — write the rules, set the constraints, and make sure the AI gets there consistently.</p>
              </div>
              <div className="story-card">
                <h3>The physical-to-digital translation is a superpower, not a liability.</h3>
                <p>Physical products taught me that design decisions have real-world consequences — supply chains, human ergonomics, shelf life. That same stakes-driven thinking makes my digital products better: grounded in actual use, not just aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology">
        <div className="container">
          <div className="method-header">
            <div>
              <p className="section-eyebrow">The Approach</p>
              <h2 className="section-title">Prototyping-first.<br /><em>Human-always.</em></h2>
            </div>
            <p className="section-body">
              I replaced traditional Agile with a prototyping-first methodology built around AI-generated output with human oversight. Together with a multi-hat back-end developer, we build working models first, write detailed PRDs and AI governance rules to ensure consistency across multiple concurrent platforms, then validate with real stakeholders before scoping for production. The result: faster shipping, less rework, and software that actually scales.
            </p>
          </div>

          <div className="method-steps">
            <div className="method-step">
              <div className="step-number">01</div>
              <div className="step-title">Understand</div>
              <p className="step-desc">Deep-dive into stakeholder goals, user behavior, and compliance constraints. Translate ambiguity into clear product requirements before a single pixel moves.</p>
            </div>
            <div className="method-step">
              <div className="step-number">02</div>
              <div className="step-title">Prototype</div>
              <p className="step-desc">Use AI tools — FigmaMake, OpenAI, Claude, Grok — to build a working, interactive prototype, not a wireframe. Real flows, real interactions, real data. Validate before committing to dev.</p>
            </div>
            <div className="method-step">
              <div className="step-number">03</div>
              <div className="step-title">Document &amp; Govern</div>
              <p className="step-desc">Write detailed PRDs and AI governance rules — explicit constraints the AI must follow to maintain consistency across multiple concurrent platforms. Iterate with stakeholders on working models, not static mockups.</p>
            </div>
            <div className="method-step">
              <div className="step-number">04</div>
              <div className="step-title">Ship</div>
              <p className="step-desc">Hand off dev-ready designs with full documentation, flow maps, and edge cases accounted for. No interpretation needed. Less back-and-forth. Faster launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section-alt">
        <div className="container">
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-title">Products I've built<br />and the <em>thinking behind them.</em></h2>

          <div className="work-grid">
            <div className="work-card">
              <span className="work-card-tag">B2B SaaS · Network Infrastructure</span>
              <h3>Multi-Portal Open-Access Fiber Platform</h3>
              <p className="work-card-sub">EntryPoint Networks · 2023–Present</p>
              <p>Simultaneously leading design and launch of an interconnected suite of platforms for open-access city fiber networks — each with distinct user roles, data flows, and compliance requirements, all sharing a unified design system built with AI-governed rules for output consistency.</p>
              <div className="work-outcomes">
                <div className="outcome"><strong>Operator Portal</strong> — Network management tools for ISPs managing city infrastructure</div>
                <div className="outcome"><strong>Provider Portal</strong> — Service provider onboarding, provisioning, and billing management</div>
                <div className="outcome"><strong>Network Management Portal</strong> — City/municipality-facing operations and oversight dashboard</div>
              </div>
            </div>

            <div className="work-card">
              <span className="work-card-tag">B2C · Subscriber Experience</span>
              <h3>Subscriber Portals &amp; City Network Websites</h3>
              <p className="work-card-sub">EntryPoint Networks · 2023–Present</p>
              <p>Designed consumer-facing portals and branded city network websites for residents to discover, sign up for, and self-manage their fiber service — without a support call. Each deployment is city-branded and independently scalable, built on a shared component foundation.</p>
              <div className="work-outcomes">
                <div className="outcome">Self-provisioning flows integrated with Stripe, Clerk auth, and Supabase backend</div>
                <div className="outcome">City-branded public websites for subscriber acquisition and network transparency</div>
                <div className="outcome">Scalable design system enabling rapid multi-city deployment</div>
              </div>
            </div>

            <div className="work-card work-card-wide">
              <span className="work-card-tag">Fashion Design · Leadership · Scale</span>
              <h3>Senior Manager of Design — Kohl's &amp; Macy's</h3>
              <p className="work-card-sub">2013 – 2023 · 10 Years</p>
              <div className="work-card-wide-inner">
                <div>
                  <p>Managed design and product development for major department store brands at scale — including celebrity collaborations (Jennifer Lopez for Kohl's), 40+ styles launched monthly, and a senior management role overseeing a team of 6 at Macy's.</p>
                </div>
                <div>
                  <div className="work-outcomes">
                    <div className="outcome">20% category sales increase at Kohl's through trend-aligned collections</div>
                    <div className="outcome">50% yarn cost reduction at Macy's while improving product quality</div>
                    <div className="outcome">Global vendor management across Asia and domestic markets</div>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>The through-line: every product was a systems problem. How do you build something at scale, on time, within margin, that a real human will love? That's the question I've been answering for 12 years — first in fabric, now in software.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & SKILLS */}
      <section id="tools">
        <div className="container">
          <p className="section-eyebrow">Skills &amp; Tools</p>
          <h2 className="section-title">What I bring<br />to the <em>table.</em></h2>

          <div className="tools-layout">
            <div>
              <div className="tools-group">
                <div className="tools-group-label">AI Development &amp; Orchestration</div>
                <div className="tool-tags">
                  {['OpenAI / ChatGPT','Claude','Grok','FigmaMake','Lovable','Tempo Labs','Copilot'].map(t => (
                    <span key={t} className="tool-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="tools-group">
                <div className="tools-group-label">Design &amp; UX</div>
                <div className="tool-tags">
                  {['Figma','Adobe Creative Suite','Wix Studio','WordPress'].map(t => (
                    <span key={t} className="tool-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="tools-group">
                <div className="tools-group-label">Product &amp; Backend</div>
                <div className="tool-tags">
                  {['Supabase','Stripe','Clerk','Zapier','HubSpot'].map(t => (
                    <span key={t} className="tool-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="tools-group">
                <div className="tools-group-label">Process &amp; Collaboration</div>
                <div className="tool-tags">
                  {['Jira','Confluence','Office 365'].map(t => (
                    <span key={t} className="tool-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="competencies-grid">
              {[
                { title: 'AI-Orchestrated Product Development', desc: 'Directing AI tools to build functional prototypes, validate assumptions, and deliver dev-ready designs — without writing code.' },
                { title: 'Human-Centered Systems Thinking', desc: 'Translating complex stakeholder needs and technical constraints into products that real people can navigate without a manual.' },
                { title: 'B2B & B2C SaaS Strategy', desc: 'Experience on both sides — enterprise-facing platforms (municipalities, ISPs) and consumer-facing portals (subscriber self-service).' },
                { title: 'Cross-Functional Leadership', desc: 'Partnering with executives, city officials, developers, and marketers to align on product direction and get things shipped.' },
                { title: 'Process & Documentation Design', desc: 'Building the frameworks, flows, and scopes that let teams execute without constant hand-holding. Hundreds of product documents produced.' },
                { title: 'Fashion Design Leadership', desc: 'A decade leading design from Sr. Manager to creative director level — trend forecasting, celebrity collaborations, global vendor negotiations, and team leadership at scale.' },
              ].map(c => (
                <div key={c.title} className="comp-card">
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-about">
        <div className="container">
          <div className="about-inner">
            <img
              src="/juliana_image2.jpg"
              alt="Juliana Rosario"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
            <div className="about-text">
              <p className="section-eyebrow">About</p>
              <h2>I make products that work<br />for <em>actual humans.</em></h2>
              <p>I'm Juliana — a product lead, a recovering fashion designer, and a very caffeinated mom to a one-year-old boy with a girl on the way. My path has been unconventional, and I've stopped apologizing for that.</p>
              <p>I spent a decade in physical product design — fashion, retail, global manufacturing — before moving into digital product and AI-native development. That wasn't a career pivot. It was ten years of learning how to build things people actually want, at scale, under pressure, to a hard deadline. Fashion just happened to be the classroom.</p>
              <p>Today I lead product at EntryPoint Networks, designing and shipping seven interconnected portals for open-access city fiber networks. With a talented back-end developer, a sharp set of AI tools, and a process built around precise PRDs and agent-governed builds, we move from idea to production at a pace that makes traditional dev timelines look slow.</p>
              <p>Building complex infrastructure software while raising small children has clarified something I probably already knew: I have zero patience for products that don't respect people's time. Every flow I design is for someone who is distracted, tired, and doing three other things. That constraint keeps the work honest.</p>
              <p>Based in the New York / New Jersey area. Open to full-time and fractional opportunities in AI product leadership.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:julianamrosario@gmail.com" className="btn-primary">Get in Touch</a>
                <a href="/JulianaRosario_Resume.pdf" download className="btn-secondary">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: 'middle', marginRight: '0.4rem' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-contact">
        <div className="container">
          <p className="section-eyebrow" style={{ color: 'var(--accent-lt)' }}>Let's Work Together</p>
          <h2 className="section-title" style={{ color: 'var(--bg)', maxWidth: '520px', margin: '0 auto 1.25rem' }}>
            Ready to build something <em style={{ color: 'var(--accent-lt)' }}>worth using?</em>
          </h2>
          <p className="contact-sub">I'm open to full-time roles, fractional engagements, and conversations with teams who care about getting it right.</p>
          <div className="contact-links">
            <a href="mailto:julianamrosario@gmail.com" className="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/julianamannionrosario" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href="tel:7179912937" className="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.5z"/></svg>
              717-991-2937
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
