import type { MetadataRoute } from "next";
import { servicesData } from "@/lib/servicesData";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteConfig";

/**
 * sitemap.xml dynamique — exigé par le plan SEO § 3.1 pour la soumission à
 * Google Search Console. Il se régénère à partir des données : ajouter un
 * article ou un service suffit à l'y faire apparaître.
 */
const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/nos-services", priority: 0.9 },
  // /realisations volontairement absente : les projets qui y figuraient
  // etaient fabriques (voir Auditorias/FULL-AUDIT-REPORT.md, critique #4).
  // A reajouter une fois les 4 references reelles du client autorisees.
  { path: "/nos-clients", priority: 0.7 },
  { path: "/qui-sommes-nous", priority: 0.7 },
  { path: "/blog", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/mentions-legales", priority: 0.2 },
  { path: "/politique-de-confidentialite", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...servicesData.map((service) => ({
      url: `${SITE_URL}/nos-services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
