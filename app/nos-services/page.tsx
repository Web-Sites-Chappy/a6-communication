import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import type { Metadata } from "next";
import { getServicesByCategory } from "@/lib/servicesData";
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
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Nos Services | A6 Communication",
  description: "Découvrez l'ensemble de nos expertises en Communication (stratégie digitale, identité visuelle, contenu, print) et Événementiel (conception, logistique, animation, promotion).",
  alternates: { canonical: `${SITE_URL}/nos-services` },
};

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

export default function NosServicesPage() {
  const communicationServices = getServicesByCategory("Communication");
  const evenementielServices = getServicesByCategory("Événementiel");

  const commFeatures: FeatureItem[] = communicationServices.map((service) => ({
    title: service.title,
    description: service.shortDescription,
    href: `/nos-services/${service.slug}`,
    icon: getServiceIcon(service.slug),
  }));

  const evenFeatures: FeatureItem[] = evenementielServices.map((service) => ({
    title: service.title,
    description: service.shortDescription,
    href: `/nos-services/${service.slug}`,
    icon: getServiceIcon(service.slug),
  }));

  return (
    <main>
      <Hero
        imageSrc="/photos/DSC_1019.webp"
        title={
          <>
            Nos
            <br />
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
              services
            </span>
          </>
        }
        height="half"
        ctaLabel="Voir nos réalisations"
        ctaHref="/realisations"
      />

      {/* Section Communication */}
      <div id="communication" className="py-12">
        <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "40px 0 20px", textAlign: "center" }} className="communication-section">
          <AccentHeading lead="Communication" />
          <p style={{ marginTop: "24px", fontSize: "1.05rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "var(--c-navy)" }}>
            Stratégie de communication digitale et print, identité visuelle, production de contenus,
            impressions et signalétique, community management : A6 accompagne les structures dans leur mutation
            vers une communication authentique et efficace.
          </p>
        </Reveal>

        <Reveal>
          <FeaturesSectionWithHoverEffects features={commFeatures} />
        </Reveal>
      </div>

      {/* Section Événementiel — même structure que la section Communication ci-dessus
          (pas de conteneur intermédiaire) pour garder une grille de cartes identique. */}
      <div id="evenementiel" className="py-12" style={{ backgroundColor: "var(--c-fond)" }}>
        <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "40px 0 20px", textAlign: "center" }}>
          <AccentHeading lead="Événementiel" style={{ color: "var(--c-rouge)" }} />
          <p style={{ marginTop: "24px", fontSize: "1.05rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "rgba(var(--c-navy-rgb), 0.75)" }}>
            Conception, organisation et coordination d&apos;événements : congrès, forums, journées
            thématiques, assemblées générales, célébrations institutionnelles. A6 prend en charge
            chaque étape, de la scénographie à la logistique, pour des événements qui marquent.
          </p>
        </Reveal>

        <Reveal>
          <FeaturesSectionWithHoverEffects features={evenFeatures} />
        </Reveal>
      </div>

      <Reveal>
        <CTASection sentence="nous imaginions ensemble…" buttonLabel="votre projet" />
      </Reveal>
    </main>
  );
}

