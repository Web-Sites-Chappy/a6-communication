import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services | A6 Communication",
};

const communication = [
  ["Stratégie digitale",     "Audit, plan de communication, présence sur les réseaux sociaux adaptée à vos cibles."],
  ["Identité visuelle",      "Création ou refonte de logo, charte graphique, supports de communication print et web."],
  ["Production de contenus", "Rédaction, photographie, vidéo : des contenus qui racontent votre histoire."],
  ["Impressions/Signalétique", "Supports imprimés, panneaux, habillage de sites et signalétique événementielle."],
];

const evenementiel = [
  ["Conception & scénographie",    "Création du concept, du programme et de l'identité visuelle de l'événement."],
  ["Logistique",                   "Gestion des prestataires, des espaces, de la technique et de l'accueil."],
  ["Animation",                    "Modération, animation de tables rondes, intervenants, moments conviviaux."],
  ["Communication événementielle", "Promotion avant, pendant et après : digitale, presse et institutionnelle."],
];

export default function NosServicesPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/DSC_1019.jpg"
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

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 40px", textAlign: "center" }} className="communication-section">
        <AccentHeading lead="Communication" />
        <p style={{ marginTop: "24px", fontSize: "1rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "var(--c-navy)" }}>
          Stratégie de communication digitale et print, identité visuelle, production de contenus,
          impressions et signalétique, community management : A6 accompagne les structures dans leur mutation
          vers une communication authentique et efficace.
        </p>
      </Reveal>

      <div
        style={{
          width: "90vw",
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "30px",
          marginBottom: "60px",
        }}
      >
        {communication.map(([service, desc], i) => (
          <Reveal key={service} delay={i * 80}>
            <div style={{ borderTop: "2px solid var(--c-rouge-fg)", paddingTop: "20px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "2rem", textTransform: "uppercase", color: "var(--c-rouge-fg)", lineHeight: "0.9em", marginBottom: "12px" }}>
                {service}
              </h3>
              <p style={{ fontSize: "0.85rem", lineHeight: "1.6em", fontFamily: "var(--font-body)", color: "rgba(27,46,60,0.75)" }}>
                {desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div id="evenementiel" style={{ backgroundColor: "var(--c-fond)", padding: "60px 0" }}>
        <div style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <AccentHeading lead="Événementiel" style={{ color: "var(--c-rouge)" }} />
            <p style={{ marginTop: "24px", fontSize: "1rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "rgba(var(--c-navy-rgb), 0.75)" }}>
              Conception, organisation et coordination d&apos;événements : congrès, forums, journées
              thématiques, assemblées générales, célébrations institutionnelles. A6 prend en charge
              chaque étape, de la scénographie à la logistique, pour des événements qui marquent.
            </p>
          </Reveal>

          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              gap: "24px",
              marginTop: "40px",
              textAlign: "left",
              overflowX: "auto",
              paddingBottom: "8px",
            }}
          >
            {evenementiel.map(([service, desc], i) => (
              <Reveal key={service} delay={i * 80} style={{ flex: "1 1 0", minWidth: "220px" }}>
                <div style={{ borderTop: "2px solid var(--c-rouge)", paddingTop: "20px" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "2rem", textTransform: "uppercase", color: "var(--c-rouge)", lineHeight: "0.9em", marginBottom: "12px" }}>
                    {service}
                  </h3>
                  <p style={{ fontSize: "0.85rem", lineHeight: "1.6em", fontFamily: "var(--font-body)", color: "rgba(var(--c-navy-rgb), 0.7)" }}>
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal>
        <CTABanner
          title={
            <>
              <span style={{ fontFamily: "var(--font-display-bricolage)", fontWeight: 700 }}>A6</span>{" "}
              <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
                j&apos;osais...
              </span>
            </>
          }
          titleStyle={{ textTransform: "none", fontSize: "clamp(2.4rem, 6vw, 4.2rem)" }}
          compact
          ctaVariant="bleu"
          ctaLabel="Commencer"
          ctaHref="/contact"
        />
      </Reveal>
    </main>
  );
}
