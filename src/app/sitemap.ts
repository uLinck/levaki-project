import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    { url: siteUrl, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/busca`, changeFrequency: "daily", priority: 0.5 },
    ...categories.map((category) => ({
      url: `${siteUrl}/categoria/${category.slug}`,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}
