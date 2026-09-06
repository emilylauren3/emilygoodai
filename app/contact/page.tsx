import { SiteFooter, SiteHeader } from "../site-chrome";
import ProjectInquiryForm from "./project-inquiry-form";
import { pageMetadata } from "../seo";

export function generateMetadata() {
  return pageMetadata("/contact", "Start a Website or App Project | Emily Good AI", "Tell Emily Good AI about your business, website, custom app, Google Workspace, or launch project and receive a tailored recommendation and quote.");
}

export default function ContactPage() {
  return <main><SiteHeader /><section className="inquiry inquiry-first"><div className="inquiry-intro"><p className="kicker">Project questionnaire</p><h1>Tell me a little<br/><em>about your project.</em></h1><p>Share what you know so far. Your answers will help me prepare thoughtful recommendations before we connect.</p><a className="button inquiry-alt" href="mailto:hello@emilygoodai.com">Ask Me Something Else <span>↗</span></a></div><ProjectInquiryForm /></section><SiteFooter /></main>;
}
