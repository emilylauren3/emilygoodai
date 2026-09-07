import type { Metadata } from "next";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "emilygoodai.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const socialImage = `${protocol}://${host}/og.png`;
  const title = "Emily Good AI | Websites, Apps & Business Systems";
  const description = "Emily Good builds websites, custom web apps for businesses in every industry, Google Workspace setups, and complete business launch systems.";

  return {
    title,
    description,
    keywords: ["small business website design", "custom web app development", "business app development", "Google Workspace setup", "business launch services", "website and app management"],
    alternates: { canonical: "https://emilygoodai.com" },
    robots: { index: true, follow: true },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, images: [socialImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
