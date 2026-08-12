import type { BlogBlock } from "@/lib/blog/types";
import { renderInline } from "@/components/blog/InlineText";

/**
 * Rend le corps d'un article. La hiérarchie reste stricte : le H1 est porté par
 * la page, les blocs n'émettent que du H2 puis du H3 — jamais de saut de niveau
 * (règle on-page du plan SEO).
 */
export default function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "h2":
            return (
              <h2
                key={i}
                id={block.id}
                style={{
                  fontFamily: "var(--font-display-bricolage), sans-serif",
                  fontWeight: 700,
                  textTransform: "none",
                  textAlign: "left",
                  fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                  lineHeight: "1.1em",
                  color: "var(--c-rouge-fg)",
                  margin: "48px 0 4px",
                  scrollMarginTop: "var(--header-h)",
                }}
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                style={{
                  fontFamily: "var(--font-display-bricolage), sans-serif",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
                  lineHeight: "1.2em",
                  color: "var(--c-navy)",
                  margin: "30px 0 2px",
                }}
              >
                {block.text}
              </h3>
            );

          case "ul":
            return (
              <ul
                key={i}
                style={{
                  margin: "14px 0 4px",
                  paddingLeft: "1.15em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  listStyle: "none",
                }}
              >
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      position: "relative",
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      lineHeight: "1.7em",
                      color: "var(--c-navy)",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-1.15em",
                        color: "var(--c-rouge-fg)",
                        fontWeight: 700,
                      }}
                    >
                      —
                    </span>
                    {renderInline(item)}
                  </li>
                ))}
              </ul>
            );

          case "note":
            return (
              <aside
                key={i}
                style={{
                  margin: "26px 0 6px",
                  padding: "20px 24px",
                  /* Filet en haut, comme les blocs 6A et les cartes du site — le
                     filet de couleur à gauche est proscrit au-delà de 1px. */
                  borderTop: "2px solid var(--c-btn-accent)",
                  backgroundColor: "rgba(var(--c-navy-rgb), 0.05)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.97rem",
                  lineHeight: "1.65em",
                  color: "var(--c-navy)",
                }}
              >
                {renderInline(block.text)}
              </aside>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                /* Pas de filet : c'est le DM Serif italique — l'accent de la
                   maison — qui détache la citation, comme dans les titres. */
                style={{ margin: "34px 0 10px" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display-dmserif), serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1.2rem, 2.4vw, 1.5rem)",
                    lineHeight: "1.4em",
                    color: "var(--c-navy)",
                  }}
                >
                  {block.text}
                </p>
                {block.cite ? (
                  <cite
                    style={{
                      display: "block",
                      marginTop: "10px",
                      fontStyle: "normal",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      letterSpacing: "0.04em",
                      color: "rgba(var(--c-navy-rgb), 0.7)",
                    }}
                  >
                    {block.cite}
                  </cite>
                ) : null}
              </blockquote>
            );

          case "p":
          default:
            return (
              <p
                key={i}
                style={{
                  marginTop: "16px",
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: "1.75em",
                  color: "var(--c-navy)",
                }}
              >
                {renderInline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}
