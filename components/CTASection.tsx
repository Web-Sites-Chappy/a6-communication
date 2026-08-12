import type { ReactNode } from "react";
import CTABanner from "@/components/CTABanner";

interface CTASectionProps {
  /** Le texte qui suit le logo "A6" — rendu en italique DM Serif, comme sur le CTA du Home. */
  sentence: ReactNode;
  buttonLabel: string;
  href?: string;
}

/**
 * Système CTA unique du site : logo A6 + phrase en italique + bouton, sur fond
 * orange. Toutes les sections CTA doivent passer par ce composant plutôt que
 * composer CTABanner à la main, pour garantir la cohérence visuelle demandée
 * par le PRD (typo, tailles, couleurs, proportions identiques partout).
 */
export default function CTASection({ sentence, buttonLabel, href = "/contact" }: CTASectionProps) {
  return (
    <CTABanner
      title={
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-a6-navy.svg"
            alt="A6"
            style={{
              height: "1.6em",
              width: "auto",
              display: "inline-block",
              verticalAlign: "-0.42em",
              marginRight: "0.08em",
            }}
          />{" "}
          <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
            {sentence}
          </span>
        </>
      }
      titleStyle={{ textTransform: "none", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
      compact
      ctaVariant="bleu"
      ctaLabel={buttonLabel}
      ctaHref={href}
    />
  );
}
