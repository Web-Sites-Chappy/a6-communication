import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";

/**
 * robots.txt — plan SEO § 3.1 et § 5.
 *
 * Choix assumé : les crawlers d'IA génératives (GPTBot, ClaudeBot, PerplexityBot,
 * Google-Extended) sont autorisés. L'objectif d'A6 est la citabilité dans les
 * réponses d'IA, pas la protection du contenu. Seule l'API interne est exclue.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"],
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
