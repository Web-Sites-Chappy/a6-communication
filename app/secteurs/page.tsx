import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import type { Metadata } from "next";
import { secteursData } from "@/lib/secteursData";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Nos secteurs | A6 Communication",
  description:
    "A6 accompagne quatre secteurs aux besoins distincts : institutionnel, collectivités, culturel & patrimoine, et monde associatif.",
  alternates: { canonical: `${SITE_URL}/secteurs` },
};

export default function SecteursPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/nos-clients/hero-toulouse-capitole.webp"
        title={
          <>
            Quatre secteurs,
            <br />
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
              une méthode
            </span>
          </>
        }
        height="half"
        ctaLabel="Nos services"
        ctaHref="/nos-services"
      />

      <Reveal
        style={{
          width: "var(--w-max)",
          maxWidth: "var(--w-limit-text)",
          margin: "0 auto",
          padding: "60px 0 20px",
          textAlign: "center",
        }}
      >
        <AccentHeading lead="Nos" accent="secteurs" />
        <p
          style={{
            marginTop: "24px",
            fontSize: "1.05rem",
            lineHeight: "1.8em",
            fontFamily: "var(--font-body)",
            color: "var(--c-navy)",
            maxWidth: "640px",
            margin: "24px auto 0",
          }}
        >
          Institutionnel, collectivités, culturel et associatif : quatre mondes aux contraintes différentes, que
          nous accompagnons chacun avec la méthode qui lui correspond, pas une offre générique déclinée quatre fois.
        </p>
      </Reveal>

      <div
        style={{
          width: "90vw",
          maxWidth: "1000px",
          margin: "20px auto 0",
          paddingBottom: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(440px, 100%), 1fr))",
          gap: "30px",
        }}
      >
        {secteursData.map((secteur, i) => (
          <Reveal key={secteur.slug} delay={i * 80}>
            <Link
              href={`/secteurs/${secteur.slug}`}
              className="hub-card"
              style={{ display: "block", height: "100%" }}
            >
              <div style={{ position: "relative", width: "100%", height: "220px" }}>
                <Image
                  src={secteur.heroImage}
                  alt={secteur.heroImageAlt}
                  fill
                  sizes="(max-width: 640px) 90vw, 440px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ color: "var(--c-rouge-fg)", marginBottom: "8px" }}>{secteur.title}</h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.6em",
                    fontFamily: "var(--font-body)",
                    color: "rgba(var(--c-navy-rgb),0.75)",
                    margin: 0,
                  }}
                >
                  {secteur.intro[0]}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <CTASection sentence="c'était votre secteur ?" buttonLabel="Contactez-nous" />
      </Reveal>
    </main>
  );
}
