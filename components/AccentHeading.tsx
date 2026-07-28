import type { CSSProperties, ReactNode } from "react";

interface AccentHeadingProps {
  lead: ReactNode;
  /** Mot(s) d'accent en italique. Omis pour un titre d'un seul bloc (tout en Bricolage bold). */
  accent?: ReactNode;
  as?: "h2" | "h3";
  id?: string;
  style?: CSSProperties;
}

/**
 * Règle de style pour les sous-titres de section : le début en Bricolage
 * Grotesque bold, le mot d'accent en DM Serif Display italique (même
 * logique que le titre du hero — voir HomeEditorial.tsx).
 */
export default function AccentHeading({ lead, accent, as: Tag = "h2", id, style }: AccentHeadingProps) {
  return (
    <Tag id={id} style={{ textTransform: "none", ...style }}>
      <span style={{ fontFamily: "var(--font-display-bricolage)", fontWeight: 700 }}>{lead}</span>
      {accent ? (
        <>
          {" "}
          <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
            {accent}
          </span>
        </>
      ) : null}
    </Tag>
  );
}
