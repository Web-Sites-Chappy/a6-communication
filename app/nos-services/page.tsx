import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import type { Metadata } from "next";
import { getServicesByCategory } from "@/lib/servicesData";
import { SITE_URL } from "@/lib/siteConfig";
import { FeaturesSectionWithHoverEffects, FeatureItem } from "@/components/ui/feature-section-with-hover-effects";

export const metadata: Metadata = {
  title: "Nos Services | A6 Communication",
  description: "Découvrez l'ensemble de nos expertises en Communication (stratégie digitale, identité visuelle, contenu, print) et Événementiel (conception, logistique, animation, promotion).",
  alternates: { canonical: `${SITE_URL}/nos-services` },
};


export default function NosServicesPage() {
  const communicationServices = getServicesByCategory("Communication");
  const evenementielServices = getServicesByCategory("Événementiel");

  const commFeatures: FeatureItem[] = communicationServices.map((service) => ({
    title: service.title,
    description: service.shortDescription,
    href: `/nos-services/${service.slug}`,
    image: service.carouselImage,
  }));

  const evenFeatures: FeatureItem[] = evenementielServices.map((service) => ({
    title: service.title,
    description: service.shortDescription,
    href: `/nos-services/${service.slug}`,
    image: service.carouselImage,
  }));

  return (
    <main>
      <Hero
        imageSrc="/photos/cardstack-services-v2.webp"
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
      />

      {/* Section Communication */}
      <div id="communication" className="py-12">
        <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "40px 0 20px", textAlign: "center" }} className="communication-section">
          <AccentHeading lead="Communication" />
          <p style={{ marginTop: "24px", fontSize: "1.05rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "var(--c-navy)" }}>
            A6 accompagne votre structure vers une communication authentique et percutante.
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
            A6 assure votre événement clé en main, de la scénographie à la logistique.
          </p>
        </Reveal>

        <Reveal>
          <FeaturesSectionWithHoverEffects features={evenFeatures} />
        </Reveal>
      </div>

      <Reveal>
        <CTASection sentence="si nous étions au service de…" buttonLabel="Votre projet" />
      </Reveal>
    </main>
  );
}

