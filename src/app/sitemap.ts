import { MetadataRoute } from "next";
import { demos } from "@/content/demos";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { uz: base, ru: `${base}/ru` } },
    },
    {
      url: `${base}/demos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { uz: `${base}/demos`, ru: `${base}/ru/demos` } },
    },
    {
      url: `${base}/ru`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/ru/demos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const demoPages: MetadataRoute.Sitemap = demos.flatMap((demo) => [
    {
      url: `${base}/demos/${demo.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          uz: `${base}/demos/${demo.slug}`,
          ru: `${base}/ru/demos/${demo.slug}`,
        },
      },
    },
    {
      url: `${base}/ru/demos/${demo.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]);

  return [...staticPages, ...demoPages];
}
