import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-06");
  return [
    { url: "https://emilygoodai.com", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://emilygoodai.com/custom-apps", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://emilygoodai.com/pricing", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://emilygoodai.com/contact", lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
