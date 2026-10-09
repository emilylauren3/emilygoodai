"use client";

import { useCallback, useEffect, useState } from "react";
import KitFormEmbed from "./kit-form-embed";

export const SUBSCRIBED_KEY = "egai-prompt-pack-subscribed";
const POPUP_DELAY_MS = 4000;
export const OPEN_POPUP_EVENT = "open-prompt-pack-popup";

export function markPromptPackSubscribed() {
  try {
    localStorage.setItem(SUBSCRIBED_KEY, "1");
  } catch {
    /* storage unavailable — popup simply shows again */
  }
}

function hasSubscribed(): boolean {
  try {
    return localStorage.getItem(SUBSCRIBED_KEY) === "1";
  } catch {
    return false;
  }
}

/** Fire this to open the prompt-pack popup programmatically. */
export function openPromptPackPopup() {
  window.dispatchEvent(new CustomEvent(OPEN_POPUP_EVENT));
}

/**
 * Site-wide popup for the Website Planning Prompt Pack.
 * Shows once per visit after a short delay, and never again
 * once the visitor has subscribed.
 */
export default function KitPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hasSubscribed()) return;
    const timer = setTimeout(() => {
      if (!hasSubscribed()) setOpen(true);
    }, POPUP_DELAY_MS);
    const onOpen = () => {
      if (!hasSubscribed()) setOpen(true);
    };
    window.addEventListener(OPEN_POPUP_EVENT, onOpen);
    return () => {
      clearTimeout(timer);
      window.removeEventListener(OPEN_POPUP_EVENT, onOpen);
    };
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="kit-popup-overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Get the free Website Planning Prompt Pack">
      <div className="kit-popup" onClick={(e) => e.stopPropagation()}>
        <button className="kit-popup-close" onClick={close} aria-label="Close popup">
          ×
        </button>
        <p className="kicker">Free download</p>
        <h2>
          Plan your dream website with <em>7 free prompts.</em>
        </h2>
        <KitFormEmbed />
        <p className="lead-note">One email with your download. No spam, unsubscribe anytime.</p>
      </div>
    </div>
  );
}
