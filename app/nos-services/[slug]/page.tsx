import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { servicesData, getServiceBySlug } from "@/lib/servicesData";
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

  return (
    <main>
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
              color: "rgba(27,46,60,0.8)",
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

