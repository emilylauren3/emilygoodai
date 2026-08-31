"use client";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Emily Good AI home"><span className="brand-mark"><b>EG</b></span><span>Emily Good <i>AI</i></span></a>
        <div className="nav-links"><a href="#services">Services</a><a href="#app">Clinic app</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="#contact">Start a project <span>↗</span></a>
      </nav>
      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Digital systems for ambitious businesses</p>
          <h1>Your business,<br/><em>beautifully built.</em></h1>
          <p className="lede">From first idea to fully connected digital presence—branding-ready websites, business apps, and the systems that make it all run.</p>
          <div className="hero-actions"><a className="button primary" href="#contact">Build with Emily <span>↗</span></a><a className="text-link" href="#services">Explore services <span>↓</span></a></div>
        </div>
        <div className="hero-system" aria-label="A connected digital business system">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="system-card card-site"><small>01</small><strong>WEBSITE</strong><span>Designed to convert</span></div>
          <div className="system-card card-app"><small>02</small><strong>APP</strong><span>Built for your workflow</span></div>
          <div className="system-card card-suite"><small>03</small><strong>SUITE</strong><span>Everything connected</span></div>
          <div className="system-core"><span>EG</span><small>AI</small></div><p className="system-note">One vision.<br/>Every touchpoint.</p>
        </div>
      </section>
      <div className="proof-strip"><span>STRATEGY</span><i>✦</i><span>DESIGN</span><i>✦</i><span>BUILD</span><i>✦</i><span>MANAGE</span></div>

      <section className="services" id="services">
        <div className="section-intro">
          <p className="kicker">What we build</p>
          <h2>Everything your business needs to <em>show up brilliantly.</em></h2>
          <p>Whether you are starting from zero or upgrading one piece, every solution is thoughtfully designed around how your business actually works.</p>
        </div>
        <div className="service-grid">
          <article className="service featured"><span className="num">01</span><div className="service-icon">✦</div><h3>Business Launch</h3><p>Your digital foundation, handled. We bring your vision into focus and build the pieces you need to open with confidence.</p><ul><li>Launch strategy</li><li>Digital presence</li><li>Connected setup</li></ul><a href="#contact">Plan your launch <span>↗</span></a></article>
          <article className="service"><span className="num">02</span><div className="service-icon">⌘</div><h3>Website Creation</h3><p>A polished, purposeful website built to earn trust, explain your offer, and turn the right visitors into clients.</p><ul><li>Custom design</li><li>Mobile-first build</li><li>Launch support</li></ul><a href="#contact">Build your site <span>↗</span></a></article>
          <article className="service"><span className="num">03</span><div className="service-icon">◇</div><h3>Google Workspace</h3><p>Professional email, shared files, calendars, and everyday tools set up so your team can work smoothly from day one.</p><ul><li>Branded email</li><li>Drive organization</li><li>Team setup</li></ul><a href="#contact">Get connected <span>↗</span></a></article>
          <article className="service"><span className="num">04</span><div className="service-icon">◎</div><h3>App Creation</h3><p>A tailored client or team app that puts your workflow, communication, and brand in one intuitive experience.</p><ul><li>Custom workflows</li><li>Client experiences</li><li>Ongoing support</li></ul><a href="#contact">Explore an app <span>↗</span></a></article>
        </div>
      </section>

      <section className="app-section" id="app">
        <div className="app-visual">
          <div className="app-stamp">JANE<br/><span>INTEGRATED</span></div>
          <div className="phone phone-back"><div className="phone-top"/><p className="phone-label">Home care</p><div className="exercise"><b>Neck mobility</b><span>3 exercises · 12 min</span></div><div className="exercise"><b>Shoulder reset</b><span>2 exercises · 8 min</span></div></div>
          <div className="phone phone-front"><div className="phone-top"/><p className="hello">Good morning, Alex</p><small>Your next appointment</small><div className="appointment"><b>Massage Therapy</b><span>Tomorrow · 10:30 AM</span><i>View appointment →</i></div><p className="mini-title">Your care team</p><div className="care-row"><span>JC</span><b>Jordan Chen<br/><small>Registered Massage Therapist</small></b></div></div>
          <div className="chat-bubble"><b>Message from Jordan</b><span>How is the new stretch feeling?</span></div>
        </div>
        <div className="app-copy">
          <p className="kicker light">Featured solution</p>
          <h2>Better care,<br/><em>beyond the clinic.</em></h2>
          <p className="app-lede">A beautifully branded client app for massage, physiotherapy, and chiropractic clinics—connected with Jane and built to keep care moving between appointments.</p>
          <div className="feature-list">
            <div><span>01</span><p><b>Appointments at a glance</b>Patients can see their upcoming bookings in one convenient place.</p></div>
            <div><span>02</span><p><b>Secure, direct chat</b>Easy communication between the clinic, practitioner, and patient.</p></div>
            <div><span>03</span><p><b>Home care that gets done</b>Assign exercises and share reusable practitioner templates.</p></div>
            <div><span>04</span><p><b>One app, two experiences</b>Purpose-built functionality for both your team and your clients.</p></div>
          </div>
          <a className="button app-button" href="#contact">See if it fits your clinic <span>↗</span></a>
        </div>
      </section>

      <section className="options">
        <div><p className="kicker">Flexible by design</p><h2>Start where<br/><em>you are.</em></h2></div>
        <div className="option-list">
          <article><span>01</span><h3>Complete Business Build</h3><p>Launch with a cohesive website, app, and digital workspace designed to work together.</p></article>
          <article><span>02</span><h3>Standalone App</h3><p>Already have a website? Add the clinic app to your current business without rebuilding everything else.</p></article>
          <article><span>03</span><h3>Ongoing Management</h3><p>Bundle your build with monthly website and app care, updates, and hands-on support.</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="kicker light">Your next chapter</p><h2>Let&apos;s build what<br/><em>your business needs next.</em></h2><p>Tell me where you are now and where you want to go. I&apos;ll help you find the clearest path forward.</p>
        <a className="button contact-button" href="mailto:hello@emilygoodai.com">Start the conversation <span>↗</span></a>
        <div className="contact-orbit one"/><div className="contact-orbit two"/>
      </section>
      <footer><a className="brand" href="#top"><span className="brand-mark"><b>EG</b></span><span>Emily Good <i>AI</i></span></a><p>Thoughtful technology. Beautifully built.</p><div><span>© 2026 Emily Good AI</span><a href="mailto:hello@emilygoodai.com">hello@emilygoodai.com</a></div></footer>
    </main>
  );
}
