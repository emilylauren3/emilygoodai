import type { Metadata } from "next";
import { headers } from "next/headers";

export async function pageMetadata(path: string, title: string, description: string): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "emilygoodai.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;
  const canonical = `https://emilygoodai.com${path}`;
  const socialImage = `${origin}/og.png`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, siteName: "Emily Good AI", type: "website", images: [{ url: socialImage, width: 1200, height: 630, alt: "Emily Good AI websites, apps, and business systems" }] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}
