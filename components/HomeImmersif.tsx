import Link from "next/link";
import SpotlightTitle from "@/components/SpotlightTitle";

const immersifSections = [
  {
    id: "hero",
    img: "/photos/DSC_0836.jpg",
    bgColor: null,
    align: "center" as const,
    eyebrow: "Agence de communication & événementiel",
    title: "L'Alchimie\nentre l'image\net son histoire",
    body: "Deux associés complémentaires au service d'une communication authentique et d'événements qui marquent les esprits.",
    cta: { label: "Nos réalisations", href: "/realisations", style: "rouge" as const },
  },
  {
    id: "agence",
    img: null,
    bgColor: "var(--c-navy)",
    align: "left" as const,
    eyebrow: "Qui sommes-nous",
    title: "Deux esprits.\nUne vision.",
    body: "Manuel, pas encore la trentaine et son incontournable esprit numérique. Eric, la cinquantaine passée et son indéfectible esprit poétique. Leur association n'appartient pas au hasard.",
    cta: { label: "Découvrir l'agence", href: "/qui-sommes-nous", style: "blanc" as const },
  },
  {
    id: "services",
    img: "/photos/DSC_1019.jpg",
    bgColor: null,
    align: "right" as const,
    eyebrow: "Nos services",
    title: "Communication.\nÉvénementiel.\nAlchimie.",
    body: "Stratégie digitale, identité visuelle, organisation d'événements — A6 prend en charge chaque étape pour des projets qui marquent.",
    cta: { label: "Nos services", href: "/nos-services", style: "rouge" as const },
  },
  {
    id: "realisations",
    img: "/photos/DSC_0802.jpg",
    bgColor: null,
    align: "left" as const,
    eyebrow: "Réalisations",
    title: "Des événements\nqui marquent\nles esprits.",
    body: "Congrès, forums, journées thématiques, assemblées — des projets menés de la scénographie à la logistique.",
    cta: { label: "Voir nos réalisations", href: "/realisations", style: "rouge" as const },
  },
  {
    id: "contact",
    img: null,
    bgColor: "var(--c-rouge)",
    align: "center" as const,
    eyebrow: null,
    title: "Parlons de\nvotre projet.",
    body: "Artisans, architectes, communes, domaines viticoles, monde associatif — A6 est à votre écoute.",
    cta: { label: "Nous contacter", href: "/contact", style: "blanc" as const },
  },
];

function alignStyle(align: "left" | "center" | "right") {
  if (align === "center") return { alignItems: "center", textAlign: "center" as const };
  if (align === "right") return { alignItems: "flex-end", textAlign: "right" as const };
  return { alignItems: "flex-start", textAlign: "left" as const };
}

export default function HomeImmersif() {
  return (
    <main>
      {immersifSections.map((section, i) => (
        <section
          key={section.id}
          style={{
            position: "relative",
            width: "100vw",
            minHeight: "100vh",
            display: "flex",
            alignItems: section.align === "center" ? "center" : "flex-end",
            overflow: "hidden",
          }}
        >
          {/* Background image */}
          {section.img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={section.img}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          )}

          {/* Solid bg */}
          {section.bgColor && (
            <div style={{ position: "absolute", inset: 0, backgroundColor: section.bgColor }} />
          )}

          {/* Overlay gradient */}
          {section.img && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  section.align === "right"
                    ? "linear-gradient(270deg, rgba(var(--c-navy-rgb),0.92) 0%, rgba(var(--c-navy-rgb),0.55) 50%, rgba(var(--c-navy-rgb),0.1) 100%)"
                    : "linear-gradient(0deg, rgba(var(--c-navy-rgb),0.9) 0%, rgba(var(--c-navy-rgb),0.5) 50%, rgba(var(--c-navy-rgb),0.15) 100%)",
              }}
            />
          )}

          {/* Section index */}
          <div
            style={{
              position: "absolute",
              top: "30px",
              left: "36px",
              fontFamily: "var(--font-display)",
              fontWeight: 200,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: section.bgColor === "var(--c-rouge)" ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)",
              zIndex: 2,
            }}
          >
            {String(i + 1).padStart(2, "0")} / {String(immersifSections.length).padStart(2, "0")}
          </div>

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              maxWidth: section.align === "center" ? "720px" : "600px",
              margin: section.align === "center" ? "0 auto" : section.align === "right" ? "0 6vw 0 auto" : "0 auto 0 6vw",
              padding: section.align === "center" ? "100px 5vw" : "100px 40px",
              display: "flex",
              flexDirection: "column",
              ...alignStyle(section.align),
            }}
          >
            {section.eyebrow && (
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 200,
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.25em",
                  color: section.bgColor === "var(--c-rouge)" ? "rgba(255,255,255,0.7)" : "var(--c-rouge)",
                  marginBottom: "24px",
                }}
              >
                {section.eyebrow}
              </p>
            )}

            {section.id === "hero" ? (
              <SpotlightTitle
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 200,
                  fontSize: "clamp(3.5rem, 8vw, 8rem)",
                  lineHeight: "0.88em",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  marginBottom: "28px",
                  whiteSpace: "pre-line",
                }}
              >
                {section.title}
              </SpotlightTitle>
            ) : (
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 200,
                  fontSize: "clamp(3.5rem, 8vw, 8rem)",
                  lineHeight: "0.88em",
                  textTransform: "uppercase",
                  color: "white",
                  letterSpacing: "0.02em",
                  marginBottom: "28px",
                  whiteSpace: "pre-line",
                }}
              >
                {section.title}
              </h1>
            )}

            <p
              style={{
                color: section.bgColor === "var(--c-rouge)" ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.65)",
                fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
                fontFamily: "var(--font-body)",
                lineHeight: "1.6em",
                maxWidth: "440px",
                marginBottom: "36px",
              }}
            >
              {section.body}
            </p>

            <Link
              href={section.cta.href}
              className={section.cta.style === "rouge" ? "btn-rouge" : "btn-blanc"}
            >
              {section.cta.label}
            </Link>
          </div>

          {/* Bottom arrow hint (all sections except last) */}
          {i < immersifSections.length - 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "28px",
                left: "50%",
                zIndex: 2,
                color: "rgba(255,255,255,0.3)",
                fontSize: "1.2rem",
                fontFamily: "var(--font-display)",
                fontWeight: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                letterSpacing: "0.2em",
                animation: "bounceY 2.2s ease-in-out infinite",
              }}
            >
              <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.3em" }}>scroll</span>
              <span>↓</span>
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
