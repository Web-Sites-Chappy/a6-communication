"use client";

import { useState } from "react";
import Link from "next/link";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

interface PartnerLogo {
  id: string;
  name: string;
  logo: string;
  href?: string;
  width?: number;
  featured?: boolean;
}

/**
 * Placeholder roster — swap `logo` for real client wordmarks/SVGs under
 * /public/logos/ once available. Falls back to a styled text wordmark
 * when the image is missing, so the section stays presentable either way.
 */
const partners: PartnerLogo[] = [
  { id: "communes", name: "Communes & Mairies", logo: "/logos/communes.svg", width: 140 },
  { id: "architectes", name: "Cabinets d'Architecture", logo: "/logos/architectes.svg", width: 160 },
  { id: "patrimoine", name: "Fondations du Patrimoine", logo: "/logos/patrimoine.svg", width: 160 },
  { id: "viticole", name: "Domaines Viticoles", logo: "/logos/viticole.svg", width: 150 },
  { id: "associatif", name: "Monde Associatif", logo: "/logos/associatif.svg", width: 150 },
  { id: "artisans", name: "Artisans du Bâtiment", logo: "/logos/artisans.svg", width: 150 },
  { id: "culture", name: "Institutions Culturelles", logo: "/logos/culture.svg", width: 160 },
  { id: "collectivites", name: "Collectivités Territoriales", logo: "/logos/collectivites.svg", width: 170, featured: true },
];

function LogoMark({ partner }: { partner: PartnerLogo }) {
  const [imgFailed, setImgFailed] = useState(false);

  // The <img> can finish (and fail) loading before React hydrates and attaches
  // onError, so the error event fires and is missed. Catch that race on mount.
  const checkAlreadyFailed = (img: HTMLImageElement | null) => {
    if (img && img.complete && img.naturalWidth === 0) setImgFailed(true);
  };

  const content = imgFailed ? (
    <span
      style={{
        fontFamily: "var(--font-display), sans-serif",
        fontWeight: 200,
        fontSize: "1.05rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "rgba(17, 34, 80, 0.55)",
        whiteSpace: "nowrap",
      }}
    >
      {partner.name}
    </span>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={checkAlreadyFailed}
      src={partner.logo}
      alt={partner.name}
      onError={() => setImgFailed(true)}
      style={{ maxHeight: "100%", width: "100%", objectFit: "contain", display: "block" }}
    />
  );

  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "48px",
    width: partner.width ? `${partner.width}px` : "140px",
    flexShrink: 0,
    filter: "grayscale(1) opacity(0.55)",
    transition: "filter 0.3s var(--e-basic), opacity 0.3s var(--e-basic)",
  } as const;

  return partner.href ? (
    <Link
      href={partner.href}
      aria-label={partner.name}
      className="trusted-by-logo"
      style={wrapperStyle}
    >
      {content}
    </Link>
  ) : (
    <div aria-label={partner.name} className="trusted-by-logo" style={wrapperStyle}>
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
  eyebrow = "Ils nous font confiance",
  heading = "Des entreprises qui avancent avec nous",
  subheading,
  className,
}: TrustedByCloudProps) {
  return (
    <section
      className={cn(className)}
      style={{
        width: "100%",
        backgroundColor: "#F6F6F6",
        padding: "clamp(64px, 8vw, 96px) 0",
      }}
    >
      <div style={{ width: "92%", maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(0px, 2vw, 20px)" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 56px)" }}>
          <p
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 200,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              color: "#003DDE",
              marginBottom: "16px",
            }}
          >
            {eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display-bricolage), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3.4vw, 2.5rem)",
              lineHeight: "1.15em",
              textTransform: "none",
              color: "#112250",
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            {heading}
          </h2>
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
          gap={48}
          duration={38}
          durationOnHover={75}
          reverse
          className="trusted-by-slider"
        >
          {partners.map((partner) => (
            <LogoMark key={partner.id} partner={partner} />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
