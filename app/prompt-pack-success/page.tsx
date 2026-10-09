import { SiteFooter, SiteHeader } from "../site-chrome";
import { pageMetadata } from "../seo";
import MarkSubscribed from "./mark-subscribed";

export function generateMetadata() {
  return pageMetadata(
    "/prompt-pack-success",
    "Your Prompt Pack Is Ready | Emily Good AI",
    "Your Website Planning Prompt Pack is ready to download."
  );
}

export default function PromptPackSuccessPage() {
  return (
    <main>
      <MarkSubscribed />
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow"><span /> You are in</p>
        <h1>Your prompt pack<br /><em>is ready.</em></h1>
        <p className="lede">
          Download it now and work through the seven prompts in order.
          A backup copy is on its way to your inbox too.
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          <a className="button primary" href="/downloads/Website-Planning-Prompt-Pack.pdf" download>
            Download the Prompt Pack <span>↓</span>
          </a>
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
