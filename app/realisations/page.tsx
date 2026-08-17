import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Réalisations | A6 Communication",
  alternates: { canonical: `${SITE_URL}/realisations` },
};

// Les 5 projets qui figuraient ici etaient fabriques (PRODUCT.md du repo les
// qualifie de "confirmed placeholder"), et l'un contredisait un evenement reel
// deja documente (Clientes/A6/Blog/01-rendez-vous-architecture-2025-toulouse.md).
// Page en attente des 4 references reelles du client, autorisation de citation
// requise (SEO-LAUNCH-PLAN.md §7) — voir Auditorias/FULL-AUDIT-REPORT.md, critique #4.

export default function RealisationsPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/DSC_0855.jpg"
        title={
          <>
            Nos
            <br />
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
              réalisations
            </span>
          </>
        }
        height="half"
        ctaLabel="Nous contacter"
        ctaHref="/contact"
      />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 20px", textAlign: "center" }}>
        <AccentHeading lead="Événements qui" accent="marquent" />
      </Reveal>

      <div style={{ width: "90vw", maxWidth: "1000px", margin: "0 auto", paddingBottom: "80px" }}>
        <Reveal style={{ textAlign: "center", padding: "20px 0 40px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: "1.7em",
              color: "rgba(var(--c-navy-rgb),0.75)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Cette page est en cours de mise à jour : nous y présenterons bientôt les projets
            menés avec l&apos;Ordre des Architectes Occitanie, la Fondation Magos, les Compagnons
            du Tour de France et le monde associatif.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <CTASection sentence="votre idée devenait…" buttonLabel="une réalisation" />
      </Reveal>
    </main>
  );
}
