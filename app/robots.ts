import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://emilygoodai.com/sitemap.xml",
    host: "https://emilygoodai.com",
  };
}
