"use client";

import Link from "next/link";

interface HeroProps {
  imageSrc?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  height?: "full" | "half";
}

export default function Hero({
  imageSrc = "/photos/DSC_0836.jpg",
  title,
  subtitle,
  ctaLabel = "Découvrir",
  ctaHref = "/realisations",
  height = "full",
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        width: "100vw",
        height: height === "full" ? "100vh" : "55vh",
        minHeight: height === "full" ? "600px" : "320px",
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
          background: "linear-gradient(0deg, rgba(27,46,60,0.85) 0%, rgba(27,46,60,0.15) 60%, rgba(27,46,60,0.05) 100%)",
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
          paddingBottom: "10vh",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        {/* Main title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 200,
            fontSize: "clamp(4rem, 10vw, 9rem)",
            lineHeight: "0.85em",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "0.02em",
            marginBottom: subtitle ? "0.4em" : "0.6em",
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
            }}
          >
            {subtitle}
          </p>
        )}

        {/* CTA */}
        <Link href={ctaHref} className="btn-rouge">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
