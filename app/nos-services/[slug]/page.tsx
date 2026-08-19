import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import Breadcrumb from "@/components/Breadcrumb";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { servicesData, getServiceBySlug } from "@/lib/servicesData";
import { getPostBySlug } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteConfig";
import { FeaturesSectionWithHoverEffects, FeatureItem } from "@/components/ui/feature-section-with-hover-effects";
import {
  IconRouteAltLeft,
  IconAdjustmentsBolt,
  IconTerminal2,
  IconCloud,
  IconEaseInOut,
  IconCurrencyDollar,
  IconHeart,
  IconHelp,
  IconSparkles,
  IconCircleCheck,
  IconBox,
  IconBulb,
} from "@tabler/icons-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service non trouvé | A6 Communication",
    };
  }

  return {
    title: `${service.title} | ${service.category} | A6 Communication`,
    description: service.shortDescription,
    alternates: { canonical: `${SITE_URL}/nos-services/${service.slug}` },
  };
}

function getServiceIcon(slug: string) {
  switch (slug) {
    case "strategie-digitale":
      return <IconRouteAltLeft className="w-7 h-7" />;
    case "identite-visuelle":
      return <IconAdjustmentsBolt className="w-7 h-7" />;
    case "production-de-contenus":
      return <IconTerminal2 className="w-7 h-7" />;
    case "impressions-signaletique":
      return <IconCloud className="w-7 h-7" />;
    case "conception-et-scenographie":
      return <IconEaseInOut className="w-7 h-7" />;
    case "logistique":
      return <IconCurrencyDollar className="w-7 h-7" />;
    case "animation":
      return <IconHeart className="w-7 h-7" />;
    case "relations-presse":
      return <IconHelp className="w-7 h-7" />;
    default:
      return <IconTerminal2 className="w-7 h-7" />;
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    if (slug === "communication-evenementielle") {
      redirect("/nos-services/relations-presse");
    }
    notFound();
  }

  // Get other services in the same category for navigation
  const relatedServices = servicesData.filter((s) => s.slug !== service.slug);

  const relatedArticles = service.relatedArticleSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  const deliverableIcons = [
    <IconSparkles key="1" className="w-7 h-7" />,
    <IconCircleCheck key="2" className="w-7 h-7" />,
    <IconBox key="3" className="w-7 h-7" />,
    <IconBulb key="4" className="w-7 h-7" />,
  ];

  const deliverableFeatures: FeatureItem[] = service.deliverables.map((item, idx) => ({
    title: item.title,
    description: item.description,
    icon: deliverableIcons[idx % deliverableIcons.length],
  }));

  const relatedFeatures: FeatureItem[] = relatedServices.map((rel) => ({
    title: rel.title,
    description: rel.shortDescription,
    href: `/nos-services/${rel.slug}`,
    icon: getServiceIcon(rel.slug),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    serviceType: service.category,
    areaServed: "Occitanie, France",
    url: `${SITE_URL}/nos-services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "A6 Communication et Événementiel",
      url: SITE_URL,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        imageSrc={service.heroImage}
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
              Pôle {service.category}
            </span>
            {service.title}
          </>
        }
        height="half"
        ctaLabel="Discuter de votre projet"
        ctaHref={`/contact?service=${encodeURIComponent(service.title)}`}
      />

      {/* Main explanation section */}
      <section
        style={{
          width: "90vw",
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "70px 0 50px",
        }}
      >
        <Breadcrumb
          items={[
            { label: "Nos services", href: "/nos-services" },
            { label: service.title, href: `/nos-services/${service.slug}` },
          ]}
          style={{ marginBottom: "30px" }}
        />
        <Reveal style={{ textAlign: "center", marginBottom: "50px", maxWidth: "900px", margin: "0 auto 50px" }}>
          <AccentHeading lead={`Pôle ${service.category}`} accent={service.title} style={{ color: service.color }} />
          <p
            style={{
              marginTop: "24px",
              marginBottom: "16px",
              fontSize: "1.15rem",
              lineHeight: "1.8em",
              fontFamily: "var(--font-body)",
              color: "var(--c-navy)",
              fontWeight: 500,
            }}
          >
            {service.shortDescription}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "1rem",
              lineHeight: "1.7em",
              fontFamily: "var(--font-body)",
              color: "rgba(var(--c-navy-rgb),0.8)",
            }}
          >
            {service.fullDescription}
          </p>
        </Reveal>

        {/* Deliverables / Key competencies */}
        <Reveal delay={100}>
          <div
            style={{
              borderTop: `2px solid ${service.color}`,
              paddingTop: "40px",
              marginTop: "40px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.2rem",
                fontWeight: 200,
                textTransform: "uppercase",
                color: "var(--c-navy)",
                letterSpacing: "0.04em",
                marginTop: 0,
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              Nos expertises &amp; Livrables
            </h2>

            <FeaturesSectionWithHoverEffects features={deliverableFeatures} />
          </div>
        </Reveal>

        {/* Notre méthode — contenu unique par service, au-delà des livrables */}
        <Reveal delay={150} style={{ marginTop: "60px", maxWidth: "820px", margin: "60px auto 0" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 200,
              textTransform: "uppercase",
              color: "var(--c-navy)",
              letterSpacing: "0.04em",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Notre méthode
          </h2>
          {service.approach.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontSize: "1rem",
                lineHeight: "1.75em",
                fontFamily: "var(--font-body)",
                color: "rgba(var(--c-navy-rgb),0.82)",
                marginBottom: i < service.approach.length - 1 ? "16px" : 0,
              }}
            >
              {paragraph}
            </p>
          ))}

          {relatedArticles.length > 0 && (
            <div style={{ marginTop: "30px", paddingTop: "24px", borderTop: "1px solid rgba(var(--c-navy-rgb),0.12)" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: service.color,
                  marginBottom: "10px",
                }}
              >
                Pour aller plus loin
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {relatedArticles.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="article-related-link">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>
      </section>

      <section style={{ width: "90vw", maxWidth: "800px", margin: "0 auto", padding: "0 0 60px" }}>
        <Reveal>
          <h2
            style={{
              fontFamily: "var(--font-display-bricolage), sans-serif",
              fontWeight: 700,
              textTransform: "none",
              textAlign: "left",
              fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
              lineHeight: "1.1em",
              color: service.color,
              marginBottom: "10px",
            }}
          >
            Questions fréquentes
          </h2>
          {service.faq.map((item) => (
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

      {/* Cross links to other services */}
      <section
        style={{
          backgroundColor: "var(--c-fond)",
          padding: "60px 0",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            width: "90vw",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <Reveal style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 200,
                textTransform: "uppercase",
                color: "var(--c-navy)",
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              Découvrez nos autres expertises
            </h3>
          </Reveal>

          <FeaturesSectionWithHoverEffects features={relatedFeatures} />
        </div>
      </section>

      {/* CTA Section */}
      <Reveal>
        <CTASection
          sentence={service.cta.sentence}
          buttonLabel={service.cta.buttonLabel}
          href={`/contact?service=${encodeURIComponent(service.title)}`}
        />
      </Reveal>
    </main>
  );
}

