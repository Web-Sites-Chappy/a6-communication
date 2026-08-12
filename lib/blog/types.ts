/**
 * Modèle de contenu du blog.
 *
 * Chaque article est un objet de données pur : la page `/blog/[slug]` le rend,
 * `generateStaticParams` le prérend, et `app/sitemap.ts` le déclare. Les blocs
 * sont volontairement pauvres (pas de HTML brut dans les données) pour que le
 * rendu reste maîtrisé et que le texte soit relisible par un non-développeur.
 *
 * Les liens internes s'écrivent en syntaxe légère `[ancre](/url)` dans le texte
 * des paragraphes et des listes — voir `renderInline` dans
 * components/blog/InlineText.tsx. Aucune ancre « cliquez ici » : la règle
 * on-page du plan SEO impose des ancres sémantiques.
 */

/** Un bloc de corps d'article. */
export type BlogBlock =
  /** Paragraphe. Accepte la syntaxe `[ancre](/url)`. */
  | { kind: "p"; text: string }
  /** Sous-titre de section. Son `id` sert d'ancre et de sommaire. */
  | { kind: "h2"; text: string; id: string }
  | { kind: "h3"; text: string }
  /** Liste à puces. Chaque item accepte `[ancre](/url)`. */
  | { kind: "ul"; items: string[] }
  /** Encadré de mise en avant (chiffre, principe, mise en garde). */
  | { kind: "note"; text: string }
  /** Citation détachée. */
  | { kind: "quote"; text: string; cite?: string };

/** Question/réponse — alimente aussi le schema FAQPage. */
export interface BlogFaqItem {
  question: string;
  answer: string;
}

/** Lien interne contextuel affiché en fin d'article. */
export interface BlogRelatedLink {
  label: string;
  href: string;
}

export type BlogCategory =
  | "Événementiel"
  | "Institutionnel"
  | "Identité de marque"
  | "Méthode"
  | "Digital";

export interface BlogPost {
  /** Slug ≤ 60 caractères, sans mots vides, tirets. */
  slug: string;
  /** H1 de la page — un seul par article. */
  title: string;
  /** Meta title ≤ 60 caractères, format `[Keyword] | A6`. */
  metaTitle: string;
  /** Meta description 120-155 caractères. */
  metaDescription: string;
  /** Mot-clé principal visé, issu du KEYWORD-MAP. */
  keyword: string;
  category: BlogCategory;
  /** Date ISO — sert à `datePublished` et au tri. */
  date: string;
  /** Libellé affiché (français). */
  dateLabel: string;
  /** Durée de lecture estimée, en minutes. */
  readingMinutes: number;
  img: string;
  /** Alt descriptif de l'image de couverture — jamais vide. */
  imgAlt: string;
  /** Chapeau : résumé autonome, réutilisé en excerpt de carte. */
  excerpt: string;
  body: BlogBlock[];
  faq?: BlogFaqItem[];
  related?: BlogRelatedLink[];
}
