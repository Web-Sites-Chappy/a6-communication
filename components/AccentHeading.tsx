import type { CSSProperties, ReactNode } from "react";

interface AccentHeadingProps {
  lead: ReactNode;
  accent: ReactNode;
  as?: "h2" | "h3";
  style?: CSSProperties;
}

/**
 * Règle de style pour les sous-titres de section : le début en Bricolage
 * Grotesque bold, le mot d'accent en DM Serif Display italique (même
 * logique que le titre du hero — voir HomeEditorial.tsx).
 */
export default function AccentHeading({ lead, accent, as: Tag = "h2", style }: AccentHeadingProps) {
  return (
    <Tag style={{ textTransform: "none", ...style }}>
      <span style={{ fontFamily: "var(--font-display-bricolage)", fontWeight: 700 }}>{lead}</span>{" "}
      <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
        {accent}
      </span>
    </Tag>
  );
}
