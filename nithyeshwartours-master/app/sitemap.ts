import type { MetadataRoute } from "next";
import { getAllPackageSlugs } from "@/lib/strapi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let slugs: string[] = [];
  try {
    slugs = await getAllPackageSlugs();
  } catch {
    // Strapi may not be running at build time; package pages will be absent
    slugs = [];
  }

  const base = "https://www.nithyeshwartours.com";

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/india`, priority: 0.9 },
    { url: `${base}/pilgrimage`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/services`, priority: 0.8 },
    { url: `${base}/inquiry`, priority: 0.8 },
    { url: `${base}/testimonials`, priority: 0.7 },
    { url: `${base}/travel-memories`, priority: 0.6 },
  ].map((p) => ({
    ...p,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));

  const packagePages = slugs.map((slug) => ({
    url: `${base}/packages/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...packagePages];
}
