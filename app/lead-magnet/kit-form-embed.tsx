"use client";

import { useEffect, useRef } from "react";

const KIT_UID = "0ef2658880";
const KIT_SRC = "https://emily-good-ai.kit.com/0ef2658880/index.js";

/**
 * Renders Emily's Kit-designed prompt-pack form (headline, fields, button
 * all configured in Kit). The script is injected once per mount.
 */
export default function KitFormEmbed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    if (host.querySelector(`script[data-uid="${KIT_UID}"]`)) return;
    const s = document.createElement("script");
    s.async = true;
    s.setAttribute("data-uid", KIT_UID);
    s.src = KIT_SRC;
    host.appendChild(s);
  }, []);

  return <div ref={ref} className="kit-form-embed" />;
}
