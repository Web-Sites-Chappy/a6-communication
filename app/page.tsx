import Hero from "@/components/Hero";
import EventsCarousel from "@/components/EventsCarousel";
import SmallCarousel from "@/components/SmallCarousel";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <main>
      {/* Hero — full viewport */}
      <Hero
        imageSrc="/photos/DSC_0836.jpg"
        title={"L'Alchimie\nentre l'image\net son histoire"}
        subtitle="Agence de communication et d'événementiel au service des territoires, du patrimoine et des acteurs qui les font vivre."
        ctaLabel="Nos réalisations"
        ctaHref="/realisations"
      />

      {/* Intro text block — like HdlM centered text sections */}
      <div
        style={{
          width: "var(--w-max)",
          maxWidth: "var(--w-limit-text)",
          margin: "0 auto",
          padding: "60px 0 20px",
          textAlign: "center",
        }}
      >
        <h2>A6 Communication</h2>
        <p
          style={{
            marginTop: "24px",
            fontSize: "1rem",
            lineHeight: "1.6em",
            color: "var(--c-navy)",
            fontFamily: "var(--font-body)",
            maxWidth: "600px",
            margin: "24px auto 0",
          }}
        >
          Deux associés complémentaires — l&apos;esprit numérique et l&apos;esprit poétique —
          au service d&apos;une communication authentique et d&apos;événements qui marquent les esprits.
        </p>
      </div>

      {/* Main events carousel — image left + text right */}
      <EventsCarousel />

      {/* CTA Banner — terra cotta block */}
      <CTABanner
        title={"Parlons de\nvotre projet"}
        ctaLabel="Nous contacter"
        ctaHref="/contact"
      />

      {/* Small carousel of targets */}
      <SmallCarousel title={"Nos\ncibles"} />

      {/* Values text block */}
      <div
        style={{
          width: "var(--w-max)",
          maxWidth: "var(--w-limit-text)",
          margin: "0 auto",
          padding: "40px 0 80px",
          textAlign: "center",
        }}
      >
        <h2>Nos 6 valeurs</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          {[
            ["Alchimie", "Les regards ont un langage que les mots ne peuvent capturer."],
            ["Audace", "Le courage de croire en ce qui n'est pas encore visible."],
            ["Acceptation", "Elle ne se commande pas, elle fait partie du chemin."],
            ["Agilité", "Un accélérateur d'innovation, proactif et numérique."],
            ["Authenticité", "Communiquer avec honnêteté pour créer des relations durables."],
            ["Assurance", "Au service de l'humain, rapprocher théorie et pratique."],
          ].map(([name, text]) => (
            <div
              key={name}
              style={{
                width: "calc(33% - 20px)",
                minWidth: "200px",
                textAlign: "left",
                borderTop: "2px solid var(--c-rouge)",
                paddingTop: "16px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  textTransform: "uppercase",
                  fontWeight: 200,
                  fontSize: "2rem",
                  lineHeight: "0.9em",
                  color: "var(--c-rouge)",
                  marginBottom: "10px",
                }}
              >
                {name}
              </h3>
              <p style={{ fontSize: "0.85rem", lineHeight: "1.5em", color: "rgba(27,46,60,0.7)", fontFamily: "var(--font-body)" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
