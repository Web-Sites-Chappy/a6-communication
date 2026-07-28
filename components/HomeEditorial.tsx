import EventsMarquee from "@/components/EventsMarquee";
import CTABanner from "@/components/CTABanner";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import SectionsCardStack from "@/components/SectionsCardStack";
import A6EnBref from "@/components/A6EnBref";
import AccentHeading from "@/components/AccentHeading";

const heroImages = [
  "/photos/DSC_0836.jpg",
  "/photos/DSC_0802.jpg",
  "/photos/DSC_0855.jpg",
  "/photos/DSC_1019.jpg",
  "/photos/DSC_1091.jpg",
];

export default function HomeEditorial() {
  return (
    <main>
      <HeroSlider
        images={heroImages}
        video="/video/cerbere.mp4"
        poster="/video/cerbere-poster.jpg"
        title={
          <>
            L&apos;Alchimie<br />entre l&apos;
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>image</span>
            <br />et son <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>histoire</span>
          </>
        }
        subtitle="Agence de communication et d'événementiel au service des territoires, du patrimoine et des acteurs qui les font vivre."
        ctaLabel="Nos réalisations"
        ctaHref="/realisations"
        interval={5000}
      />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 20px", textAlign: "center" }}>
        <AccentHeading lead="A6" accent="Communication & Événementiel" />
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
      </Reveal>

      {/* Navigation hub — interactive fanned card stack */}
      <Reveal>
        <SectionsCardStack />
      </Reveal>

      {/* A6 en bref — the two associates + the interactive 6A */}
      <A6EnBref />

      <Reveal>
        <EventsMarquee />
      </Reveal>

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
          ctaLabel="Contacter"
          ctaHref="/contact"
        />
      </Reveal>
    </main>
  );
}
