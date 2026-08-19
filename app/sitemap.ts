import type { MetadataRoute } from "next";
import { servicesData } from "@/lib/servicesData";
import { clientSegments } from "@/lib/nosClientsData";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteConfig";

/**
 * sitemap.xml dynamique — exigé par le plan SEO § 3.1 pour la soumission à
 * Google Search Console. Il se régénère à partir des données : ajouter un
 * article ou un service suffit à l'y faire apparaître.
 *
 * `lastModified` est fixé à la main par route (dernière date de changement
 * réel du contenu), pas recalculé à chaque build : un `lastmod` qui bouge
 * sans changement de contenu est un signal de fraîcheur trompeur pour les
 * moteurs (voir Auditorias/FULL-AUDIT-REPORT.md §A). Mettre à jour la date
 * d'une route quand son contenu change réellement.
 */
const STATIC_ROUTES: { path: string; priority: number; lastModified: string }[] = [
  { path: "/", priority: 1, lastModified: "2026-08-18" },
  { path: "/nos-services", priority: 0.9, lastModified: "2026-08-18" },
  { path: "/realisations", priority: 0.7, lastModified: "2026-08-19" },
  { path: "/nos-clients", priority: 0.7, lastModified: "2026-08-19" },
  { path: "/qui-sommes-nous", priority: 0.7, lastModified: "2026-08-18" },
  { path: "/blog", priority: 0.7, lastModified: "2026-08-18" },
  { path: "/contact", priority: 0.8, lastModified: "2026-08-18" },
  { path: "/mentions-legales", priority: 0.2, lastModified: "2026-08-14" },
  { path: "/politique-de-confidentialite", priority: 0.2, lastModified: "2026-08-14" },
];

const SERVICES_LAST_MODIFIED = "2026-08-18";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: new Date(route.lastModified),
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...servicesData.map((service) => ({
      url: `${SITE_URL}/nos-services/${service.slug}`,
      lastModified: new Date(SERVICES_LAST_MODIFIED),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...clientSegments.map((segment) => ({
      url: `${SITE_URL}/nos-clients/${segment.slug}`,
      lastModified: new Date("2026-08-19"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
