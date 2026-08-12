/**
 * Configuration de site — une seule source pour l'URL canonique.
 *
 * Le plan SEO impose une version canonique unique du domaine (§ 3.1). L'URL est
 * surchargeable par `NEXT_PUBLIC_SITE_URL` pour les préproductions, avec le
 * domaine de production en valeur par défaut. Toute barre finale est retirée
 * pour que les concaténations `${SITE_URL}/blog/...` restent propres.
 */
const RAW_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://a6agence.com";

export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, "");

export const SITE_NAME = "A6 Communication et Événementiel";
