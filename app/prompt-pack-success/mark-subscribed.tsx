"use client";

import { useEffect } from "react";
import { markPromptPackSubscribed } from "../lead-magnet/kit-popup";

/** Records the subscription so the popup never shows again for this visitor. */
export default function MarkSubscribed() {
  useEffect(() => {
    markPromptPackSubscribed();
  }, []);
  return null;
}
