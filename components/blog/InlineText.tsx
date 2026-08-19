import Link from "next/link";
import type { ReactNode } from "react";

/** Capture `[ancre](/url)` (interne) ou `[ancre](https://...)` (source externe). */
const LINK_RE = /\[([^\]]+)\]\(((?:\/|https?:\/\/)[^)\s]*)\)/g;

const linkStyle = {
  color: "var(--c-rouge-fg)",
  textDecoration: "underline",
  textDecorationThickness: "1px",
  textUnderlineOffset: "0.18em",
} as const;

/**
 * Rend un texte d'article en linéarisant la syntaxe `[ancre](/url)`.
 *
 * Volontairement minimal : ce n'est pas un parseur Markdown, seulement de quoi
 * poser des ancres internes sémantiques et des sources externes citées dans le
 * corps des articles sans mettre de HTML brut dans les données (pas de
 * `dangerouslySetInnerHTML`).
 */
export function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of text.matchAll(LINK_RE)) {
    const start = match.index ?? 0;
    const href = match[2];
    const isExternal = href.startsWith("http");

    if (start > cursor) out.push(text.slice(cursor, start));

    out.push(
      isExternal ? (
        <a key={`l${key++}`} href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          {match[1]}
        </a>
      ) : (
        <Link key={`l${key++}`} href={href} style={linkStyle}>
          {match[1]}
        </Link>
      )
    );

    cursor = start + match[0].length;
  }

  if (cursor < text.length) out.push(text.slice(cursor));

  return out;
}
