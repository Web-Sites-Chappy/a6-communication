import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import Breadcrumb from "@/components/Breadcrumb";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { clientSegments, getClientSegmentBySlug } from "@/lib/nosClientsData";
import { servicesData } from "@/lib/servicesData";
import { SITE_URL } from "@/lib/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return clientSegments.map((segment) => ({ slug: segment.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const segment = getClientSegmentBySlug(slug);

  if (!segment) {
    return { title: "Page non trouvée | A6 Communication" };
  }

  return {
    title: segment.metaTitle,
    description: segment.metaDescription,
    alternates: { canonical: `${SITE_URL}/nos-clients/${segment.slug}` },
  };
}

export default async function ClientSegmentPage({ params }: PageProps) {
  const { slug } = await params;
  const segment = getClientSegmentBySlug(slug);

  if (!segment) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) => segment.relatedServiceSlugs.includes(s.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Communication et événementiel — ${segment.title}`,
    description: segment.metaDescription,
    areaServed: "Occitanie, France",
    url: `${SITE_URL}/nos-clients/${segment.slug}`,
    provider: {
      "@type": "Organization",
      name: "A6 Communication et Événementiel",
      url: SITE_URL,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: segment.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero
        imageSrc={segment.img}
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
              Nos clients
            </span>
            {segment.title}
          </>
        }
        height="half"
        ctaLabel="Discuter de votre projet"
        ctaHref={`/contact?service=${encodeURIComponent(segment.title)}`}
      />

      <section style={{ width: "90vw", maxWidth: "900px", margin: "0 auto", padding: "70px 0 40px" }}>
        <Breadcrumb
          items={[
            { label: "Nos clients", href: "/nos-clients" },
            { label: segment.title, href: `/nos-clients/${segment.slug}` },
          ]}
          style={{ marginBottom: "30px" }}
        />
        <Reveal delay={40} style={{ textAlign: "center", margin: "24px 0 40px" }}>
          <AccentHeading lead="Une méthode," accent="pas une offre générique" style={{ color: "var(--c-rouge-fg)" }} />
        </Reveal>
        <Reveal delay={80}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {segment.intro.map((paragraph, i) => (
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

      {segment.caseStudy && (
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
              <h2 style={{ color: "var(--c-rouge-fg)", marginBottom: "6px" }}>{segment.caseStudy.title}</h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: "1.75em",
                  color: "rgba(var(--c-navy-rgb),0.82)",
                  margin: 0,
                }}
              >
                {segment.caseStudy.description}
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

      <section style={{ width: "90vw", maxWidth: "800px", margin: "0 auto", padding: "60px 0" }}>
        <Reveal>
          <h2
            style={{
              fontFamily: "var(--font-display-bricolage), sans-serif",
              fontWeight: 700,
              textTransform: "none",
              textAlign: "left",
              fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
              lineHeight: "1.1em",
              color: "var(--c-rouge-fg)",
              marginBottom: "10px",
            }}
          >
            Questions fréquentes
          </h2>
          {segment.faq.map((item) => (
            <div key={item.question} style={{ marginTop: "26px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display-bricolage), sans-serif",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                  lineHeight: "1.3em",
                  color: "var(--c-navy)",
                }}
              >
                {item.question}
              </h3>
              <p
                style={{
                  marginTop: "10px",
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: "1.75em",
                  color: "rgba(var(--c-navy-rgb), 0.86)",
                }}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <Reveal>
        <CTASection
          sentence={segment.cta.sentence}
          buttonLabel={segment.cta.buttonLabel}
          href={`/contact?service=${encodeURIComponent(segment.title)}`}
        />
      </Reveal>
    </main>
  );
}
