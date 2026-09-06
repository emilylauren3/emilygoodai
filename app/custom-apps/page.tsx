import { ProjectCta, SiteFooter, SiteHeader } from "../site-chrome";
import { pageMetadata } from "../seo";

export function generateMetadata() {
  return pageMetadata("/custom-apps", "Custom Web App Development for Businesses | Emily Good AI", "Custom web apps for businesses in any industry, designed around your users, workflows, integrations, and plans for growth. Projects start at $9,000 CAD.");
}

export default function CustomAppsPage() {
  return <main><SiteHeader />
    <header className="page-hero"><p className="eyebrow"><span /> Custom apps for every industry</p><h1>Your vision,<br/><em>built into an app.</em></h1><p className="lede">Custom software shaped around your business, your users, and the way your team works.</p></header>
    <section className="custom-apps page-apps"><div className="custom-apps-intro"><p className="kicker light">Built around your business</p><h2>From idea to<br/><em>working product.</em></h2><p className="custom-apps-lede">I design and build apps around your goals, your users, and the way your team works. For most projects, a web app offers the strongest path to market, with a faster launch and access from any device.</p><div className="custom-apps-investment"><span>Projects start at</span><b>$9,000</b><small>CAD</small></div><a className="button app-button" href="/contact">Discuss your app <span>↗</span></a></div><div className="custom-apps-grid"><article><span>01</span><h3>Your idea</h3><p>Bring a clear concept or an early-stage vision. I shape it into a focused product people can use.</p></article><article><span>02</span><h3>Your users</h3><p>Give clients, staff, or partners the right tools and information through role-based experiences.</p></article><article><span>03</span><h3>Your systems</h3><p>Connect the services your business already relies on, with integrations scoped to the project.</p></article><article><span>04</span><h3>Web app first</h3><p>Launch faster with one app that works across devices, with no app-store download required.</p></article></div></section>
    <ProjectCta /><SiteFooter />
  </main>;
}
