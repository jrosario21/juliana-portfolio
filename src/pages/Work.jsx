import './Work.css'

const platforms = [
  {
    icon: '🏙️',
    who: 'City / Network Operator',
    name: 'Operator Portal',
    desc: 'Deployed per city network — each operator gets their own instance. Gives city operators visibility and control over their specific infrastructure: subscriber activity, network health, and ISP performance on their system.',
    internal: false,
  },
  {
    icon: '📡',
    who: 'ISP / Service Provider',
    name: 'Provider Portal',
    desc: 'For the Internet Service Providers operating on the open-access network. ISPs manage their service tiers, subscriber accounts, and billing independently — competing within the city\'s infrastructure on equal footing.',
    internal: false,
  },
  {
    icon: '🖥️',
    who: 'Internal · EntryPoint Team',
    name: 'Management Portal',
    desc: 'The internal CRM and operations hub — the entry point for servicing the full platform across all city deployments. Customer records, support workflows, and cross-network administration live here.',
    internal: true,
  },
  {
    icon: '🔧',
    who: 'Internal · Field Technician',
    name: 'Install Portal',
    desc: 'Built for technicians in the field. The install portal walks through device provisioning step by step — connecting hardware to the network during a subscriber install and confirming the connection is live before the tech leaves the door.',
    internal: true,
  },
  {
    icon: '🤝',
    who: 'Internal · Installation Partners',
    name: 'Partner Portal',
    desc: 'For the installation companies and contractors who bring the network to residents\' homes. Job assignments, site documentation, scheduling coordination, and network access credentials — all in one place for the teams in the field.',
    internal: true,
  },
]

const methodSteps = [
  {
    num: '01',
    title: 'Define the Goal & MVP',
    desc: 'What is this product trying to do? What is the minimum it needs to do well? Every engagement starts here — not with a wireframe, but with a crisp definition of success and scope.',
  },
  {
    num: '02',
    title: 'Map the User Path',
    desc: 'Define the desired journey in plain language — every decision point, every state, every edge case. This becomes the specification that AI agents reason against. Ambiguity here causes problems downstream.',
  },
  {
    num: '03',
    title: 'AI Refinement & PRD',
    desc: 'Run the specification through AI to surface gaps, contradictions, and overlooked states. Review carefully — AI adds fluff. Edit ruthlessly. The output is a PRD precise enough for an agent to build from without inventing decisions.',
  },
  {
    num: '04',
    title: 'Agent-Governed Build',
    desc: 'Agents build against the PRD under a defined ruleset — covering visual language, component structure, interaction patterns, and brand constraints. Consistency across seven portals isn\'t enforced manually; it\'s enforced by the rules.',
  },
]

export default function Work() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <div>
            <p className="page-eyebrow">Product Work &nbsp;·&nbsp; EntryPoint Networks &nbsp;·&nbsp; 2023 – Present</p>
            <h1 className="page-title">Software built for<br />cities, <em>at scale.</em></h1>
          </div>
          <p className="page-intro">Seven interconnected portals for open-access city fiber networks — spanning customer acquisition, ISP management, network operations, and field installation. Designed and shipped as a two-person team using a prototyping-first, AI-empowered methodology. What you see here is the public-facing layer of a much larger system.</p>
        </div>
      </div>

      {/* NDA NOTE */}
      <div className="nda-strip">
        <p><strong>A note on what's shown here:</strong> The full platform — Operator, Provider, Management, Install, and Partner Portals — is proprietary and under NDA. What I can share are the public-facing city network websites, which are live, fully functional, and connected to the same underlying infrastructure. Each one is the customer-facing surface of a complete open-access fiber deployment: sign-up, ISP selection, install scheduling, and ongoing account management all live here.</p>
      </div>

      {/* PLATFORM OVERVIEW */}
      <section>
        <div className="container">
          <p className="section-eyebrow">The Full Platform</p>
          <h2 className="section-title">Seven portals.<br />One <em>connected system.</em></h2>
          <p className="section-body">Each portal serves a distinct user within the same open-access fiber infrastructure — from city residents signing up for service to field technicians provisioning hardware. Designing across all seven simultaneously, with consistent logic and shared components, is the core of the work.</p>

          <div className="platform-grid">
            {/* Featured full-width card */}
            <div className="platform-card platform-featured">
              <div className="platform-featured-inner">
                <span className="platform-icon">🌐</span>
                <span className="platform-who" style={{ color: 'var(--accent-lt)' }}>Customer-Facing · Live &amp; Linkable ↓</span>
              </div>
              <div className="platform-name" style={{ color: 'var(--bg)', fontSize: '1.1rem' }}>Network Website &amp; Subscriber Portal</div>
              <div className="platform-desc" style={{ color: 'rgba(250,248,245,0.6)', marginTop: '0.4rem' }}>
                The all-encompassing public platform for each city deployment. Residents can sign up for service, choose their ISP from the available providers on that network, switch ISPs freely at any time, schedule an install, and add services like VoIP and TV — all within one city-branded experience. The subscriber portal is fully integrated: account management, billing, and service changes happen here, not in a separate app.
              </div>
            </div>

            {/* Regular cards */}
            {platforms.map(p => (
              <div key={p.name} className={`platform-card${p.internal ? ' internal' : ''}`}>
                <div className="platform-icon">{p.icon}</div>
                <div className="platform-who">{p.who}</div>
                <div className="platform-name">{p.name}</div>
                <div className="platform-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="how-i-work">
        <div className="container">
          <div className="how-grid">
            <div>
              <p className="section-eyebrow">The Approach</p>
              <h2 className="section-title">Design is now<br /><em>requirements fluency.</em></h2>
              <p className="section-body">The most valuable design skill in an AI-first world isn't knowing how to use Figma faster. It's knowing how to define what needs to be built with enough precision that an agent can execute it — and enough judgment to recognize when it hasn't.</p>
              <p style={{ fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.85, marginTop: '1.25rem' }}>The traditional design process — research, wireframe, prototype, handoff — assumed humans were doing the building. That assumption no longer holds. What matters now is the quality of your thinking upstream: how clearly you can articulate a goal, map a user path, and encode your design intent into rules an agent will follow.</p>
            </div>
            <div className="how-cards">
              {[
                { label: 'The PRD is the design artifact', body: 'A well-written product requirements document — precise about user paths, edge cases, and constraints — does what a wireframe used to do, but better. It\'s legible to engineers, agents, and stakeholders simultaneously.' },
                { label: 'Governance rules are the design system', body: 'Visual consistency across seven portals isn\'t maintained by a Figma component library. It\'s maintained by a defined set of rules — structure, hierarchy, interaction patterns, brand constraints — that every agent build is reviewed against.' },
                { label: 'Review is the new design skill', body: 'AI builds fast and adds fluff. Knowing what to cut, what to push back on, and what a good output actually looks like — that judgment is the craft. It compounds with experience the same way design taste always has.' },
              ].map(card => (
                <div key={card.label} className="how-card">
                  <div className="how-card-label">{card.label}</div>
                  <p className="how-card-body">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY CALLOUT */}
      <section className="methodology-dark">
        <div className="container">
          <div className="method-intro">
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-lt)', marginBottom: '1rem' }}>How It Gets Built</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,3vw,2.6rem)', fontWeight: 700, color: 'var(--bg)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                An AI-governed<br /><em style={{ color: 'var(--accent-lt)' }}>product pipeline.</em>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(250,248,245,0.6)', lineHeight: 1.85, marginBottom: '1.5rem' }}>This isn't "using AI to go faster." It's a structured methodology where requirements flow into governed PRDs, and agents with defined rules handle the build — maintaining visual consistency, design logic, and scope without manual Figma handoffs. The PRD is the design artifact. The governance rules are the design system.</p>
              <p style={{ fontSize: '1rem', color: 'rgba(250,248,245,0.6)', lineHeight: 1.85 }}>A seven-portal platform, shipped by two people, live in multiple cities. This is what that looks like in practice.</p>
            </div>
            <div className="method-steps-grid">
              {methodSteps.map(s => (
                <div key={s.num} className="method-step-card">
                  <div className="step-num">{s.num}</div>
                  <div className="step-title-dark">{s.title}</div>
                  <div className="step-desc-dark">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
