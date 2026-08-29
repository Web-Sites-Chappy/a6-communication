import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import LogosMarquee from "@/components/LogosMarquee";
import type { Metadata } from "next";
import { clientSegments } from "@/lib/nosClientsData";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Nos Clients | A6 Communication",
  alternates: { canonical: `${SITE_URL}/nos-clients` },
};

export default function NosClientsPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/nos-clients/hero-toulouse-capitole-v2.webp"
        title={
          <>
            Ceux pour
            <br />
            qui nous
            <br />
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
              œuvrons
            </span>
          </>
        }
        height="half"
        ctaLabel="Nos services"
        ctaHref="/nos-services"
      />

      <LogosMarquee />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 20px", textAlign: "center" }}>
        <AccentHeading lead="Nos" accent="clients" />
        <div style={{ marginTop: "24px", fontSize: "1.05rem", lineHeight: "1.8em", fontFamily: "var(--font-body)", color: "var(--c-navy)", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ margin: 0 }}>
            A6 œuvre au cœur des secteurs qui façonnent, préservent et font rayonner les territoires : bâtisseurs, gardiens du patrimoine, artisans et élus locaux.
          </p>
          <p style={{ margin: 0 }}>
            Des femmes et des hommes engagés, porteurs de savoir-faire, qui méritent une communication et des événements à la hauteur de leurs valeurs, de leur engagement indispensable à la préservation et au rayonnement de nos territoires.
          </p>
        </div>
      </Reveal>

      <div style={{ width: "90vw", maxWidth: "1000px", margin: "0 auto", paddingBottom: "80px" }}>
        {clientSegments.map((segment, i) => (
          <Reveal key={segment.slug} delay={0} direction={i % 2 === 0 ? "left" : "right"}>
            <div
              className="alt-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                marginBottom: "50px",
                paddingBottom: "50px",
                borderBottom: "1px solid rgba(var(--c-navy-rgb),0.1)",
              }}
            >
              <div className="alt-row-img" style={{ position: "relative", width: "40%", height: "260px", flexShrink: 0 }}>
                <Image
                  src={segment.img}
                  alt={segment.imgAlt}
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="alt-row-text" style={{ flex: 1 }}>
                <h3 style={{ color: "var(--c-rouge-fg)", marginBottom: "16px" }}>{segment.title}</h3>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "rgba(var(--c-navy-rgb),0.75)" }}>
                  {segment.desc}
                </p>
                <Link
                  href={`/nos-clients/${segment.slug}`}
                  className="article-related-link"
                  style={{ display: "inline-block", marginTop: "12px", fontSize: "0.85rem" }}
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <CTASection sentence="c’était vous ?" buttonLabel="Contactez-nous" />
      </Reveal>
    </main>
  );
}
