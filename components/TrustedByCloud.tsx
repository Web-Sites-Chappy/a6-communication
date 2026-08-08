"use client";

import Link from "next/link";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";
import AccentHeading from "@/components/AccentHeading";

interface PartnerLogo {
  id: string;
  name: string;
  href?: string;
  featured?: boolean;
}

const partners: PartnerLogo[] = [
  { id: "communes", name: "Communes & Mairies" },
  { id: "architectes", name: "Cabinets d'Architecture" },
  { id: "patrimoine", name: "Fondations du Patrimoine" },
  { id: "viticole", name: "Domaines Viticoles" },
  { id: "associatif", name: "Monde Associatif" },
  { id: "artisans", name: "Artisans du Bâtiment" },
  { id: "culture", name: "Institutions Culturelles" },
  { id: "collectivites", name: "Collectivités Territoriales", featured: true },
];

function LogoMark({ partner }: { partner: PartnerLogo }) {
  const content = (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "16px",
        padding: "8px 16px",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontWeight: partner.featured ? 400 : 200,
          fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: partner.featured ? "var(--c-rouge)" : "var(--c-navy)",
          whiteSpace: "nowrap",
          transition: "color 0.25s ease, opacity 0.25s ease",
        }}
        className="hover:text-[var(--c-rouge)]"
      >
        {partner.name}
      </span>
      <span
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "rgba(17, 34, 80, 0.25)",
          display: "inline-block",
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
    </div>
  );

  const wrapperStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "max-content",
  } as const;

  return partner.href ? (
    <Link
      href={partner.href}
      aria-label={partner.name}
      className="trusted-by-logo group"
      style={wrapperStyle}
    >
      {content}
    </Link>
  ) : (
    <div aria-label={partner.name} className="trusted-by-logo group" style={wrapperStyle}>
      {content}
    </div>
  );
}

interface TrustedByCloudProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  className?: string;
}

export default function TrustedByCloud({
  eyebrow,
  heading = "Nous avons créé l'évidence ensemble...",
  subheading,
  className,
}: TrustedByCloudProps) {
  return (
    <section
      className={cn(className)}
      style={{
        width: "100%",
        backgroundColor: "#D2E6DC",
        padding: "clamp(50px, 6vw, 80px) 0",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "92%", maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(0px, 2vw, 20px)" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(30px, 4vw, 44px)" }}>
          {eyebrow ? (
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 200,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                color: "var(--c-rouge)",
                marginBottom: "12px",
              }}
            >
              {eyebrow}
            </p>
          ) : null}
          <AccentHeading
            lead="Nous avons créé"
            accent="l'évidence ensemble..."
            style={{
              color: "var(--c-rouge-fg)",
              fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)",
              lineHeight: "1.15em",
              textAlign: "center",
              maxWidth: "750px",
              margin: "0 auto",
            }}
          />
          {subheading ? (
            <p
              style={{
                marginTop: "16px",
                fontSize: "0.95rem",
                lineHeight: "1.6em",
                fontFamily: "var(--font-body), sans-serif",
                color: "rgba(17, 34, 80, 0.65)",
                maxWidth: "480px",
                margin: "16px auto 0",
              }}
            >
              {subheading}
            </p>
          ) : null}
        </div>

        <InfiniteSlider
          gap={16}
          duration={32}
          durationOnHover={70}
          reverse
          className="trusted-by-slider py-2"
        >
          {partners.map((partner) => (
            <LogoMark key={partner.id} partner={partner} />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
