import ServicesCarousel from "@/components/ServicesCarousel";
import CTASection from "@/components/CTASection";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import SectionsCardStack from "@/components/SectionsCardStack";
import A6EnBref from "@/components/A6EnBref";
import AccentHeading from "@/components/AccentHeading";
import LogosMarquee from "@/components/LogosMarquee";

const heroImages = [
  "/photos/DSC_0836.webp",
  "/photos/DSC_0802.webp",
  "/photos/DSC_0855.webp",
  "/photos/DSC_1019.webp",
  "/photos/DSC_1091.webp",
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
            L&apos;ALCHIMIE,<br />ENTRE L&apos;
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400, textTransform: "uppercase", color: "var(--c-fond)" }}>IMAGE</span>
            <br />ET SON <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400, textTransform: "uppercase", color: "var(--c-fond)" }}>HISTOIRE</span>
          </>
        }
        subtitle="Agence de Communication et d'Événementiel au service des professionnels de l’Acte et Art de Bâtir, Institutions, Collectivités, Mairies, monde de la Culture et Associatif qui font vivre nos Territoires, notre Patrimoine."
        ctaLabel="Nos réalisations"
        ctaHref="/realisations"
        interval={5000}
      />

      {/* Bande de logos clients — pleine largeur, juste après le héros */}
      <LogosMarquee />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 20px", textAlign: "center" }}>
        <AccentHeading
          lead={
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src="/logo-a6-bleu.svg"
              alt="A6"
              style={{
                height: "1.6em",
                width: "auto",
                display: "inline-block",
                verticalAlign: "-0.42em",
                marginRight: "0.08em",
              }}
            />
          }
          accent="Communication & Événementiel"
        />
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
          Deux associés complémentaires, l&apos;un à l&apos;esprit numérique, l&apos;autre à l&apos;esprit poétique,
          au service d&apos;une communication authentique et d&apos;événements qui marquent les esprits.
        </p>
      </Reveal>

      {/* Navigation hub — interactive fanned card stack */}
      <Reveal>
        <SectionsCardStack />
      </Reveal>

      {/* A6 en bref — the two associates + the 6A grid */}
      <A6EnBref />

      <Reveal>
        <ServicesCarousel />
      </Reveal>

      <Reveal>
        <CTASection sentence="nous osions…" buttonLabel="commencer" href="/contact" />
      </Reveal>
    </main>
  );
}
