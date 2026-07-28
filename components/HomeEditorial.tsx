import EventsCarousel from "@/components/EventsCarousel";
import CTABanner from "@/components/CTABanner";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import SectionsCardStack from "@/components/SectionsCardStack";
import A6EnBref from "@/components/A6EnBref";

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
            L&apos;Alchimie{"\n"}entre l&apos;
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>image</span>
            {"\n"}et son <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>histoire</span>
          </>
        }
        subtitle="Agence de communication et d'événementiel au service des territoires, du patrimoine et des acteurs qui les font vivre."
        ctaLabel="Nos réalisations"
        ctaHref="/realisations"
        interval={5000}
      />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 20px", textAlign: "center" }}>
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
      </Reveal>

      {/* Navigation hub — interactive fanned card stack */}
      <Reveal>
        <SectionsCardStack />
      </Reveal>

      {/* A6 en bref — the two associates + the interactive 6A */}
      <A6EnBref />

      <Reveal>
        <EventsCarousel />
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
          titleStyle={{ textTransform: "none" }}
          compact
          ctaLabel="Contacter"
          ctaHref="/contact"
        />
      </Reveal>
    </main>
  );
}
