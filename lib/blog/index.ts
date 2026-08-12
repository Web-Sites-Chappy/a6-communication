import type { BlogPost } from "@/lib/blog/types";
import { postsEvenementiel } from "@/lib/blog/posts-evenementiel";
import { postsInstitutionnel } from "@/lib/blog/posts-institutionnel";
import { postsMarque } from "@/lib/blog/posts-marque";
import { postsMethode } from "@/lib/blog/posts-methode";

export type { BlogPost, BlogBlock, BlogCategory } from "@/lib/blog/types";

/**
 * Tous les articles, du plus récent au plus ancien.
 *
 * Les articles sont répartis par cluster de mots-clés dans des modules séparés
 * (voir KEYWORD-MAP) ; ce module les agrège et expose les accès utilisés par la
 * page liste, la page article, le sitemap et les liens connexes.
 */
export const blogPosts: BlogPost[] = [
  ...postsEvenementiel,
  ...postsInstitutionnel,
  ...postsMarque,
  ...postsMethode,
].sort((a, b) => b.date.localeCompare(a.date));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

/**
 * Articles proches, pour le bloc de fin de page : même catégorie d'abord,
 * complété par les plus récents si la catégorie ne suffit pas.
 */
export function getRelatedPosts(current: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = blogPosts.filter(
    (post) => post.slug !== current.slug && post.category === current.category
  );

  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const others = blogPosts.filter(
    (post) => post.slug !== current.slug && post.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}
