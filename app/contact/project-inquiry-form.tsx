"use client";

import type { FormEvent } from "react";

export default function ProjectInquiryForm() {
  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const services = data.getAll("services").join(", ") || "Not selected";
    const body = [
      "Hi Emily,",
      "",
      "I'd like to discuss a project.",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Business: ${data.get("business")}`,
      `Current website: ${data.get("website") || "None"}`,
      `Business type: ${data.get("businessType")}`,
      `Project scope: ${data.get("scope")}`,
      `Services of interest: ${services}`,
      `Number of website pages: ${data.get("pages") || "Not sure / not applicable"}`,
      `Features needed: ${data.get("features") || "Not sure yet"}`,
      `Style preference: ${data.get("style") || "Open to recommendations"}`,
      `Examples or inspiration: ${data.get("inspiration") || "None provided"}`,
      `Target timeline: ${data.get("timeline")}`,
      `Estimated budget: ${data.get("budget")}`,
      "",
      "Additional details:",
      `${data.get("details") || "None provided"}`,
    ].join("\n");

    window.location.href = `mailto:hello@emilygoodai.com?subject=${encodeURIComponent(`Project inquiry — ${data.get("business")}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="inquiry-form" onSubmit={openEmail}>
      <div className="form-grid">
        <label><span>Your name</span><input name="name" required autoComplete="name" /></label>
        <label><span>Email address</span><input name="email" type="email" required autoComplete="email" /></label>
        <label><span>Business name</span><input name="business" required autoComplete="organization" /></label>
        <label><span>Current website</span><input name="website" type="url" inputMode="url" placeholder="https://" /></label>
        <label><span>Business type</span><input name="businessType" required placeholder="e.g. wellness, retail, professional services" /></label>
        <label><span>Project scope</span><select name="scope" required defaultValue=""><option value="" disabled>Select one</option><option>New business launch</option><option>New standalone project</option><option>Refresh or rebuild</option><option>Add features to an existing system</option><option>Not sure yet</option></select></label>
      </div>
      <fieldset><legend>What are you interested in?</legend><div className="check-grid"><label><input type="checkbox" name="services" value="Landing page"/> Landing page</label><label><input type="checkbox" name="services" value="Business website"/> Business website</label><label><input type="checkbox" name="services" value="Custom app"/> Custom app</label><label><input type="checkbox" name="services" value="Google Workspace"/> Google Workspace</label><label><input type="checkbox" name="services" value="Complete business launch"/> Complete business launch</label><label><input type="checkbox" name="services" value="Ongoing management"/> Ongoing management</label></div></fieldset>
      <div className="form-grid">
        <label><span>Approximate number of pages</span><input name="pages" placeholder="e.g. 5–7 or not sure" /></label>
        <label><span>Target timeline</span><select name="timeline" required defaultValue=""><option value="" disabled>Select one</option><option>As soon as possible</option><option>Within 1–2 months</option><option>Within 3–6 months</option><option>Flexible</option></select></label>
        <label><span>Estimated budget</span><select name="budget" required defaultValue=""><option value="" disabled>Select one</option><option>$2,500–$4,999 CAD</option><option>$5,000–$8,999 CAD</option><option>$9,000–$14,999 CAD</option><option>$15,000+ CAD</option><option>I need guidance</option></select></label>
        <label><span>Style preference</span><input name="style" placeholder="e.g. minimal, bold, editorial, warm" /></label>
      </div>
      <label><span>Features or functionality</span><textarea name="features" rows={4} placeholder="Booking, payments, client portal, team access, integrations, automations…" /></label>
      <label><span>Examples or inspiration</span><textarea name="inspiration" rows={3} placeholder="Share website links, brands, colours, or visual references you like." /></label>
      <label><span>Anything else I should know?</span><textarea name="details" rows={4} placeholder="Tell me about your current setup, audience, goals, or challenges." /></label>
      <button className="button primary" type="submit">Send Project Details <span>↗</span></button>
      <p className="form-note">This opens your email app with your answers ready to send. Your information is not stored on this website.</p>
    </form>
  );
}
