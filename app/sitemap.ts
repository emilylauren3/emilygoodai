import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://emilygoodai.com",
      lastModified: new Date("2026-08-30"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
