import { SiteFooter, SiteHeader } from "../site-chrome";
import { pageMetadata } from "../seo";
import { promptSteps } from "../lead-magnet/prompts";

export function generateMetadata() {
  return pageMetadata(
    "/free-website-prompts",
    "Free Website Planning Prompt Pack | Emily Good AI",
    "Seven free copy-paste prompts that take you from a blank page to a planned website: your offer in one line, your pages mapped, your homepage drafted."
  );
}

export default function FreePromptsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow"><span /> Free download</p>
        <h1>The Website Planning<br /><em>Prompt Pack.</em></h1>
        <p className="lede">
          Seven copy-paste prompts that take you from a blank page to a planned website.
          Your offer in one line, your pages mapped, your homepage drafted. Built for
          beginners, used with real clients.
        </p>
      </section>
      <section className="landing-body">
        <div className="landing-intro">
          <p className="kicker">What is inside</p>
          <ol className="landing-list">
            {promptSteps.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.why}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="landing-form-wrap">
          <h2>Get the full pack, <em>free.</em></h2>
          <p>Enter your email in the popup and your download starts instantly. One email, no spam, unsubscribe anytime.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
