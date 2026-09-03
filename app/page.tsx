"use client";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://emilygoodai.com/#business",
      name: "Emily Good AI",
      url: "https://emilygoodai.com",
      email: "hello@emilygoodai.com",
      description: "Business launch services, website design, custom apps, Google Workspace setup, and a Jane-integrated clinic app.",
      areaServed: "Canada",
      priceRange: "$$$",
      knowsAbout: ["Small business websites", "Business apps", "Google Workspace", "Jane App integrations", "Clinic software"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does a small business website cost?", acceptedAnswer: { "@type": "Answer", text: "Emily Good AI landing pages start at CAD $2,500. Custom multi-page business websites start at CAD $3,500." } },
        { "@type": "Question", name: "Can I add the clinic app to my existing website?", acceptedAnswer: { "@type": "Answer", text: "Yes. Clinics can purchase the Jane-integrated app without replacing their current website." } },
        { "@type": "Question", name: "Does the clinic app replace Jane?", acceptedAnswer: { "@type": "Answer", text: "No. The clinic app integrates with Jane and gives patients a branded place to view appointments, chat, and receive home care." } },
        { "@type": "Question", name: "Do you provide website and app maintenance?", acceptedAnswer: { "@type": "Answer", text: "Yes. Monthly care plans cover updates, maintenance, and support for websites and apps." } },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Emily Good AI home"><span className="brand-mark"><b>EG</b></span><span>Emily Good <i>AI</i></span></a>
        <div className="nav-links"><a href="#services">Services</a><a href="#app">Clinic app</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a></div>
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

      <section className="pricing" id="pricing">
        <div className="pricing-head">
          <div><p className="kicker">Suggested investment</p><h2>Clear starting points.<br/><em>Room to scale.</em></h2></div>
          <p>These prices fit focused small-business projects. I confirm the final investment after we define the pages, features, integrations, and support your project needs.</p>
        </div>
        <div className="pricing-grid">
          <article className="price-card">
            <div className="price-top"><span>01</span><p>Landing page</p></div>
            <h3>Focused Landing Page</h3><p className="price-note">For one offer, campaign, or new business that needs a clear path to contact or book.</p>
            <p className="price"><small>Starting at</small><b>$2,500</b><i>CAD</i></p>
            <ul><li>One custom page</li><li>Mobile and desktop design</li><li>On-page SEO setup</li><li>Contact or booking path</li></ul>
            <a className="price-link" href="mailto:hello@emilygoodai.com?subject=Landing%20page%20inquiry">Discuss your landing page <span>↗</span></a>
          </article>
          <article className="price-card preferred">
            <div className="price-flag">Most requested</div>
            <div className="price-top"><span>02</span><p>Website</p></div>
            <h3>Business Website</h3><p className="price-note">For businesses that need a credible site with a clear path to contact or book.</p>
            <p className="price"><small>Starting at</small><b>$3,500</b><i>CAD</i></p>
            <ul><li>Custom responsive design</li><li>Core service pages</li><li>On-page SEO setup</li><li>Contact or booking path</li></ul>
            <a className="price-link" href="mailto:hello@emilygoodai.com?subject=Business%20website%20inquiry">Discuss your website <span>↗</span></a>
          </article>
          <article className="price-card">
            <div className="price-top"><span>03</span><p>Launch</p></div>
            <h3>Business Launch</h3><p className="price-note">For a new business that needs its public presence and internal tools built together.</p>
            <p className="price"><small>Starting at</small><b>$6,500</b><i>CAD</i></p>
            <ul><li>Launch planning</li><li>Custom business website</li><li>Google Workspace setup</li><li>Connected client systems</li></ul>
            <a className="price-link" href="mailto:hello@emilygoodai.com?subject=Business%20launch%20inquiry">Plan your launch <span>↗</span></a>
          </article>
          <article className="price-card app-price">
            <div className="price-top"><span>04</span><p>Clinic app</p></div>
            <h3>Branded Clinic App</h3><p className="price-note">For massage, physiotherapy, and chiropractic clinics that use Jane.</p>
            <p className="price"><small>Setup from</small><b>$4,500</b><i>CAD</i></p>
            <p className="monthly">plus management from <strong>$399/month</strong></p>
            <ul><li>Clinic branding</li><li>Jane integration</li><li>Patient and team access</li><li>Chat and home care tools</li></ul>
            <a className="price-link" href="mailto:hello@emilygoodai.com?subject=Clinic%20app%20inquiry">Discuss your clinic <span>↗</span></a>
          </article>
        </div>
        <div className="add-ons">
          <p><span>Google Workspace setup</span><strong>from $750 CAD</strong></p>
          <p><span>Website care</span><strong>from $225/month</strong></p>
          <p><span>Custom business apps</span><strong>from $9,000 CAD</strong></p>
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

      <section className="faq" id="faq">
        <div className="faq-title"><p className="kicker">Common questions</p><h2>Before we<br/><em>start.</em></h2></div>
        <div className="faq-list">
          <details><summary>How much does a small business website cost?<span>+</span></summary><p>A focused landing page starts at $2,500 CAD. Custom multi-page business websites start at $3,500. Larger sites receive a scope-based quote.</p></details>
          <details><summary>Can I add the clinic app to my existing website?<span>+</span></summary><p>Yes. You can purchase the clinic app without replacing your current website. I match the app to your clinic branding and connect it with Jane.</p></details>
          <details><summary>Does the clinic app replace Jane?<span>+</span></summary><p>No. Jane continues to manage the clinic workflow it handles now. Your app gives patients a branded place to view appointments, chat, and receive home care.</p></details>
          <details><summary>Do you provide monthly website and app support?<span>+</span></summary><p>Yes. Monthly plans can cover updates, maintenance, and support. The fee depends on the website, app, and response time you need.</p></details>
          <details><summary>Can you build a custom app outside healthcare?<span>+</span></summary><p>Yes. I scope custom apps around the people, tasks, and data involved in your business. Custom app projects start at $9,000 CAD and increase with the scope.</p></details>
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
