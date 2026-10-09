import { NextResponse } from "next/server";

/**
 * POST /api/subscribe
 * Body: { email: string, name?: string }
 *
 * Adds the subscriber to the Kit (ConvertKit) form configured via env vars.
 * Setup: create a free Kit account, make a form, then set KIT_API_SECRET
 * and KIT_FORM_ID in the Vercel project environment variables.
 */
export async function POST(req: Request) {
  let body: { email?: unknown; name?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const apiSecret = process.env.KIT_API_SECRET;
  const formId = process.env.KIT_FORM_ID;
  if (!apiSecret || !formId) {
    console.error("Lead magnet signup dropped: KIT_API_SECRET or KIT_FORM_ID is not set.");
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_secret: apiSecret,
      email,
      first_name: name || undefined,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Kit subscribe failed:", res.status, detail);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
