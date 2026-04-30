import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://coxwell-website.vercel.app";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/applications`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
