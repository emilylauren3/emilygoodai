import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <Link className="brand" href="/" aria-label="Emily Good AI home"><span className="brand-signature"><span className="signature-script" aria-hidden="true" /><span className="signature-ai">AI</span></span></Link>
      <div className="nav-links"><a href="/pricing">Services + Pricing</a><a href="/custom-apps">Custom apps</a><a href="/contact">Contact</a></div>
      <a className="nav-cta" href="/contact">Start a project <span>↗</span></a>
      <details className="mobile-menu"><summary>Menu</summary><div><a href="/pricing">Services + Pricing</a><a href="/custom-apps">Custom apps</a><a href="/contact">Contact</a></div></details>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/" aria-label="Emily Good AI home"><span className="brand-signature"><span className="signature-script" aria-hidden="true" /><span className="signature-ai">AI</span></span></Link>
      <nav className="social-links" aria-label="Emily Good AI social profiles">
        <a href="https://www.instagram.com/emilygoodai/" target="_blank" rel="noreferrer" aria-label="Emily Good AI on Instagram"><Image src="/instagram.svg" width={17} height={17} alt=""/><span>@emilygoodai</span></a>
        <a href="https://www.youtube.com/@EmilyGoodai" target="_blank" rel="noreferrer" aria-label="Emily Good AI on YouTube"><Image src="/youtube.svg" width={17} height={17} alt=""/><span>@EmilyGoodai</span></a>
        <a href="https://www.tiktok.com/@emily.good.ai" target="_blank" rel="noreferrer" aria-label="Emily Good AI on TikTok"><Image src="/tiktok.svg" width={17} height={17} alt=""/><span>@emily.good.ai</span></a>
      </nav>
      <div><span>© 2026 Emily Good AI</span><a href="mailto:hello@emilygoodai.com">hello@emilygoodai.com</a></div>
    </footer>
  );
}

export function ProjectCta() {
  return (
    <section className="contact">
      <p className="kicker light">Ready when you are</p>
      <h2>Let&apos;s build what your<br/><em>business needs next.</em></h2>
      <p>Tell me where your business is now and where you want it to go. I&apos;ll recommend the clearest place to start.</p>
      <a className="button contact-button" href="/contact">Start your project <span>↗</span></a>
      <div className="contact-orbit one"/><div className="contact-orbit two"/>
    </section>
  );
}
