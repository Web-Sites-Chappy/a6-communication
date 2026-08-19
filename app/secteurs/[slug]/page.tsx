import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { secteursData, getSecteurBySlug } from "@/lib/secteursData";
import { servicesData } from "@/lib/servicesData";
import { SITE_URL } from "@/lib/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return secteursData.map((secteur) => ({ slug: secteur.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const secteur = getSecteurBySlug(slug);

  if (!secteur) {
    return { title: "Secteur non trouvé | A6 Communication" };
  }

  return {
    title: secteur.metaTitle,
    description: secteur.metaDescription,
    alternates: { canonical: `${SITE_URL}/secteurs/${secteur.slug}` },
  };
}

export default async function SecteurDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const secteur = getSecteurBySlug(slug);

  if (!secteur) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) => secteur.relatedServiceSlugs.includes(s.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Communication et événementiel — ${secteur.title}`,
    description: secteur.metaDescription,
    areaServed: "Occitanie, France",
    url: `${SITE_URL}/secteurs/${secteur.slug}`,
    provider: {
      "@type": "Organization",
      name: "A6 Communication et Événementiel",
      url: SITE_URL,
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        imageSrc={secteur.heroImage}
        title={
          <>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.4em",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                display: "block",
                marginBottom: "12px",
                opacity: 0.85,
                fontWeight: 500,
              }}
            >
              Secteur
            </span>
            {secteur.title}
          </>
        }
        height="half"
        ctaLabel="Discuter de votre projet"
        ctaHref={`/contact?service=${encodeURIComponent(secteur.title)}`}
      />

      <section style={{ width: "90vw", maxWidth: "900px", margin: "0 auto", padding: "70px 0 40px" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "40px" }}>
          <AccentHeading lead="Un secteur," accent="une méthode" style={{ color: "var(--c-rouge-fg)" }} />
        </Reveal>
        <Reveal delay={80}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {secteur.intro.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8em",
                  fontFamily: "var(--font-body)",
                  color: "var(--c-navy)",
                  margin: 0,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {secteur.caseStudy && (
        <section style={{ backgroundColor: "var(--c-fond)", padding: "60px 0" }}>
          <div style={{ width: "90vw", maxWidth: "900px", margin: "0 auto" }}>
            <Reveal>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--c-rouge-fg)",
                  marginBottom: "10px",
                }}
              >
                Notre expérience sur ce secteur
              </p>
              <h2 style={{ color: "var(--c-rouge-fg)", marginBottom: "6px" }}>{secteur.caseStudy.title}</h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "rgba(var(--c-navy-rgb),0.65)",
                  marginBottom: "16px",
                }}
              >
                {secteur.caseStudy.date}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: "1.75em",
                  color: "rgba(var(--c-navy-rgb),0.82)",
                  margin: 0,
                }}
              >
                {secteur.caseStudy.description}
              </p>
              <Link href="/realisations" className="article-related-link" style={{ display: "inline-block", marginTop: "18px" }}>
                Voir nos réalisations →
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section style={{ padding: "60px 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ width: "90vw", maxWidth: "900px", margin: "0 auto" }}>
            <Reveal style={{ textAlign: "center", marginBottom: "30px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.6rem",
                  fontWeight: 200,
                  textTransform: "uppercase",
                  color: "var(--c-navy)",
                  letterSpacing: "0.05em",
                  margin: 0,
                }}
              >
                Les services associés
              </h3>
            </Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/nos-services/${service.slug}`}
                  className="btn-blanc"
                  style={{ fontSize: "0.85rem" }}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Reveal>
        <CTASection
          sentence={secteur.cta.sentence}
          buttonLabel={secteur.cta.buttonLabel}
          href={`/contact?service=${encodeURIComponent(secteur.title)}`}
        />
      </Reveal>
    </main>
  );
}
