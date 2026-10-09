"use client";

import { useState, type FormEvent } from "react";
import PromptGuide from "./prompt-guide";

type Status = "idle" | "sending" | "done" | "error";

export default function PromptPackForm({ revealGuide = false }: { revealGuide?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const data = new FormData(event.currentTarget);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          name: data.get("name"),
          tag: "prompt-pack",
        }),
      });
      if (!res.ok) throw new Error(`subscribe failed: ${res.status}`);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    if (revealGuide) return <PromptGuide />;
    return (
      <div className="lead-success">
        <p className="lead-success-title">You are in. Check your inbox.</p>
        <p>
          Your prompt pack is on its way. Want it right now?{" "}
          <a href="/free-website-prompts">Read it here <span>→</span></a>
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <label className="lead-field">
        <span className="visually-hidden">Your name</span>
        <input name="name" placeholder="Your name" autoComplete="name" required />
      </label>
      <label className="lead-field">
        <span className="visually-hidden">Email address</span>
        <input name="email" type="email" placeholder="Email address" autoComplete="email" required />
      </label>
      <button className="button primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send me the prompts"} <span>↗</span>
      </button>
      {status === "error" && (
        <p className="lead-error">
          Something went wrong. Please try again, or email hello@emilygoodai.com directly.
        </p>
      )}
    </form>
  );
}
