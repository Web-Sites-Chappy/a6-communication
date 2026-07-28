import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

interface CTABannerProps {
  title: ReactNode;
  titleStyle?: CSSProperties;
  ctaLabel: string;
  ctaHref: string;
  /** Rapproche le bouton CTA du titre au lieu de les répartir sur toute la largeur. */
  compact?: boolean;
  /** "blanc" (défaut) : blanc au repos, bleu au survol. "bleu" : l'inverse. */
  ctaVariant?: "blanc" | "bleu";
}

export default function CTABanner({ title, titleStyle, ctaLabel, ctaHref, compact, ctaVariant = "blanc" }: CTABannerProps) {
  return (
    <div style={{ backgroundColor: "var(--c-btn-accent)", padding: "50px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: compact ? "center" : "space-evenly",
          alignItems: "center",
          gap: compact ? "36px" : "20px",
          width: "90%",
          maxWidth: "820px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 200,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: "0.9em",
            color: "var(--c-on-accent)",
            textTransform: "uppercase",
            textAlign: "left",
            flex: compact ? "0 1 auto" : 1,
            minWidth: "200px",
            ...titleStyle,
          }}
        >
          {title}
        </h2>
        <Link href={ctaHref} className={ctaVariant === "bleu" ? "btn-bleu" : "btn-blanc"} style={{ whiteSpace: "nowrap" }}>
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
