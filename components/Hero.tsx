"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface HeroProps {
  imageSrc?: string;
  title: ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  height?: "full" | "half";
  ctaVariant?: "rouge" | "bleu";
}

export default function Hero({
  imageSrc = "/photos/DSC_0836.jpg",
  title,
  subtitle,
  ctaLabel = "Découvrir",
  ctaHref = "/realisations",
  height = "full",
  ctaVariant = "rouge",
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        width: "100vw",
        height: height === "full" ? "100svh" : "max(55svh, 480px)",
        minHeight: height === "full" ? "600px" : "480px",
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark gradient overlay — bottom heavy like HdlM */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(0deg, rgba(var(--c-navy-rgb),0.85) 0%, rgba(var(--c-navy-rgb),0.15) 60%, rgba(var(--c-navy-rgb),0.05) 100%)",
        }}
      />

      {/* Content container — vertically centered bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          textAlign: "center",
          // Voir CookieBanner : évite que le bandeau fixe recouvre le CTA.
          paddingBottom: "calc(10vh + var(--cookie-banner-h, 0px))",
          // Réserve la hauteur exacte du header fixe. Critique sur les héros
          // "half" : 55vh de haut, le titre passait sous la navigation.
          paddingTop: "var(--header-h)",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        {/* Main title */}
        <h1
          style={{
            fontFamily: "var(--font-display-bricolage)",
            fontWeight: 700,
            // Un héros "half" ne fait que 55vh : il ne peut pas porter le même
            // corps que le héros plein du home. Dans les deux cas le plafond
            // dépend de la place restante (hauteur du bloc moins le header et
            // le bandeau cookies), jamais de la largeur seule.
            fontSize:
              height === "full"
                ? "clamp(2.2rem, min(9vw, calc((100svh - var(--header-h) - var(--cookie-banner-h, 0px)) * 0.125)), 9rem)"
                // 0.17 : calibré sur le pire cas, un titre de trois lignes
                // (/nos-clients) dans un héros de 480px avec bandeau affiché.
                : "clamp(1.7rem, min(6.5vw, calc((max(55svh, 480px) - var(--header-h) - var(--cookie-banner-h, 0px)) * 0.17)), 5.5rem)",
            lineHeight: "0.85em",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "0.02em",
            overflowWrap: "break-word",
            marginBottom: subtitle ? "0.4em" : "0.6em",
            animation: "fadeInUp 0.9s var(--e-basic) 0.1s both",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              maxWidth: "520px",
              lineHeight: "1.5em",
              marginBottom: "1.8em",
              animation: "fadeInUp 0.9s var(--e-basic) 0.35s both",
            }}
          >
            {subtitle}
          </p>
        )}

        <Link
          href={ctaHref}
          className={ctaVariant === "bleu" ? "btn-bleu" : "btn-rouge"}
          style={{ animation: "fadeInUp 0.9s var(--e-basic) 0.55s both" }}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
