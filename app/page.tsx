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
          <p className="eyebrow"><span /> Websites, apps, and business systems</p>
          <h1>Your business,<br/><em>built with intention.</em></h1>
          <p className="lede">I turn your business idea into a working digital presence. You get a clear website, useful technology, and one person who understands how each piece connects.</p>
          <div className="hero-actions"><a className="button primary" href="#contact">Work with Emily <span>↗</span></a><a className="text-link" href="#services">View services <span>↓</span></a></div>
        </div>
        <div className="hero-system" aria-label="A connected digital business system">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="system-card card-site"><small>01</small><strong>WEBSITE</strong><span>Explain your offer</span></div>
          <div className="system-card card-app"><small>02</small><strong>APP</strong><span>Support your workflow</span></div>
          <div className="system-card card-suite"><small>03</small><strong>WORKSPACE</strong><span>Keep your team organized</span></div>
          <div className="system-core"><span>EG</span><small>AI</small></div><p className="system-note">Designed around<br/>your business.</p>
        </div>
      </section>
      <div className="proof-strip"><span>STRATEGY</span><i>✦</i><span>DESIGN</span><i>✦</i><span>BUILD</span><i>✦</i><span>MANAGE</span></div>

      <section className="services" id="services">
        <div className="section-intro">
          <p className="kicker">What we build</p>
          <h2>Build the parts your business <em>needs now.</em></h2>
          <p>Start with a full launch or hire me for one focused project. I shape the work around your clients, your team, and the tools you already use.</p>
        </div>
        <div className="service-grid">
          <article className="service featured"><span className="num">01</span><div className="service-icon">✦</div><h3>Business Launch</h3><p>I plan and build the digital pieces you need to open your business, from your public presence to your internal setup.</p><ul><li>Launch plan</li><li>Website and app</li><li>Business setup</li></ul><a href="#contact">Plan your launch <span>↗</span></a></article>
          <article className="service"><span className="num">02</span><div className="service-icon">⌘</div><h3>Website Creation</h3><p>I design a site that explains your offer, answers client questions, and gives people a clear way to contact or book you.</p><ul><li>Custom design</li><li>Mobile build</li><li>Launch support</li></ul><a href="#contact">Build your site <span>↗</span></a></article>
          <article className="service"><span className="num">03</span><div className="service-icon">◇</div><h3>Google Workspace</h3><p>I set up branded email, shared drives, calendars, and team access so your staff can find what they need.</p><ul><li>Branded email</li><li>Drive structure</li><li>Team access</li></ul><a href="#contact">Set up your workspace <span>↗</span></a></article>
          <article className="service"><span className="num">04</span><div className="service-icon">◎</div><h3>App Creation</h3><p>I build client and team apps around the tasks your business handles each day, then match the experience to your brand.</p><ul><li>Custom workflows</li><li>Client access</li><li>Team tools</li></ul><a href="#contact">Discuss your app <span>↗</span></a></article>
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
          <p className="app-lede">Give massage, physiotherapy, and chiropractic patients one branded app for appointments, messages, and home care. The app connects with Jane and includes separate tools for patients and clinic teams.</p>
          <div className="feature-list">
            <div><span>01</span><p><b>Upcoming appointments</b>Patients see their next Jane bookings inside the app.</p></div>
            <div><span>02</span><p><b>Clinic and practitioner chat</b>Patients message the clinic or speak with their practitioner.</p></div>
            <div><span>03</span><p><b>Home care assignments</b>Practitioners assign care and reuse templates with their patients.</p></div>
            <div><span>04</span><p><b>Team and client access</b>Each user sees the tools and information that apply to their role.</p></div>
          </div>
          <a className="button app-button" href="#contact">See if it fits your clinic <span>↗</span></a>
        </div>
      </section>

      <section className="options">
        <div><p className="kicker">Ways to work together</p><h2>Choose the scope<br/><em>that fits.</em></h2></div>
        <div className="option-list">
          <article><span>01</span><h3>Complete Business Build</h3><p>Launch your website, app, and Google Workspace under one plan.</p></article>
          <article><span>02</span><h3>Standalone App</h3><p>Add the clinic app to your current business without rebuilding your website.</p></article>
          <article><span>03</span><h3>Ongoing Management</h3><p>Add monthly website and app updates, maintenance, and support after launch.</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="kicker light">Start a project</p><h2>Tell me what you<br/><em>want to build.</em></h2><p>Share your business, your current setup, and the result you need. I&apos;ll reply with the best place to start.</p>
        <a className="button contact-button" href="mailto:hello@emilygoodai.com?subject=Emily%20Good%20AI%20project%20inquiry">Email Emily <span>↗</span></a>
        <div className="contact-orbit one"/><div className="contact-orbit two"/>
      </section>
      <footer><a className="brand" href="#top"><span className="brand-mark"><b>EG</b></span><span>Emily Good <i>AI</i></span></a><p>Websites, apps, and business systems.</p><div><span>© 2026 Emily Good AI</span><a href="mailto:hello@emilygoodai.com">hello@emilygoodai.com</a></div></footer>
    </main>
  );
}
