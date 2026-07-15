import EventsCarousel from "@/components/EventsCarousel";
import CTABanner from "@/components/CTABanner";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const heroImages = [
  "/photos/DSC_0836.jpg",
  "/photos/DSC_0802.jpg",
  "/photos/DSC_0855.jpg",
  "/photos/DSC_1019.jpg",
  "/photos/DSC_1091.jpg",
];

const sections = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous", desc: "Manuel & Eric — deux esprits complémentaires, six valeurs fondatrices.", img: "/photos/DSC_0836.jpg" },
  { href: "/nos-services",    label: "Nos services",    desc: "Communication digitale, identité visuelle, organisation d'événements.",  img: "/photos/DSC_1019.jpg" },
  { href: "/realisations",    label: "Réalisations",    desc: "Congrès, forums, journées thématiques — des événements qui marquent.",    img: "/photos/DSC_0855.jpg" },
  { href: "/nos-cibles",      label: "Nos cibles",      desc: "Artisans, architectes, communes, culture et monde associatif.",           img: "/photos/DSC_1091.jpg" },
];

export default function HomeEditorial() {
  return (
    <main>
      <HeroSlider
        images={heroImages}
        title={"L'Alchimie\nentre l'image\net son histoire"}
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

      {/* Navigation hub */}
      <div
        className="hub-card-grid"
        style={{
          width: "90vw",
          maxWidth: "1100px",
          margin: "50px auto 70px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
          gap: "2px",
        }}
      >
        {sections.map((s, i) => (
          <Reveal key={s.href} delay={i * 80} direction="up" style={{ height: "320px" }}>
            <Link
              href={s.href}
              className="hub-card"
              style={{ height: "320px", textDecoration: "none" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.img}
                alt={s.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                className="hub-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(0deg, rgba(var(--c-navy-rgb),0.85) 0%, rgba(var(--c-navy-rgb),0.15) 60%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "24px",
                }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "1.9rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "white", lineHeight: "0.95em", marginBottom: "10px" }}>
                  {s.label}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)", lineHeight: "1.5em", marginBottom: "14px" }}>
                  {s.desc}
                </p>
                <span className="hub-cta" style={{ display: "inline-block", color: "var(--c-rouge)", fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 200, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Découvrir →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <EventsCarousel />
      </Reveal>

      <Reveal>
        <CTABanner
          title={"Parlons de\nvotre projet"}
          ctaLabel="Nous contacter"
          ctaHref="/contact"
        />
      </Reveal>
    </main>
  );
}
