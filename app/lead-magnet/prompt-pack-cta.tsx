"use client";

import { openPromptPackPopup } from "./kit-popup";

/** Button that opens the prompt-pack popup. Use wherever the inline form lived. */
export default function PromptPackCta({ label = "Send me the prompts" }: { label?: string }) {
  return (
    <button className="button primary" type="button" onClick={openPromptPackPopup}>
      {label} <span>↗</span>
    </button>
  );
}
