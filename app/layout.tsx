import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "emilygoodai.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const socialImage = `${protocol}://${host}/og.png`;
  const title = "Emily Good AI | Websites, Apps & Business Systems";
  const description = "Emily Good builds websites, custom apps, Google Workspace setups, and a Jane-integrated clinic app for massage, physiotherapy, and chiropractic practices.";

  return {
    title,
    description,
    keywords: ["small business website design", "business app development", "Google Workspace setup", "Jane integrated clinic app", "massage clinic app", "physiotherapy clinic app", "chiropractic clinic app", "website and app management"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
