"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";

const sections: CardStackItem[] = [
  { id: "qui", title: "Qui sommes-nous", description: "Manuel & Eric, deux esprits complémentaires, six valeurs fondatrices.", imageSrc: "/photos/DSC_0836.webp", href: "/qui-sommes-nous" },
  { id: "services", title: "Nos services", description: "Communication digitale, identité visuelle, organisation d'événements.", imageSrc: "/photos/DSC_1019.webp", href: "/nos-services" },
  { id: "real", title: "Réalisations", description: "Congrès, forums, journées thématiques : des événements qui marquent.", imageSrc: "/photos/DSC_0855.webp", href: "/realisations" },
  { id: "cibles", title: "Nos clients", description: "Artisans, architectes, communes, culture et monde associatif.", imageSrc: "/photos/DSC_1091.webp", href: "/nos-clients" },
  { id: "blog", title: "Blog", description: "Coulisses, événements à venir et temps forts de l'agence.", imageSrc: "/photos/DSC_0802.webp", href: "/blog" },
];

/** Track viewport width to scale the fan on small screens. */
function useViewportWidth() {
  const [w, setW] = React.useState<number | null>(null);
  React.useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return w;
}

export default function SectionsCardStack() {
  const vw = useViewportWidth();

  // Responsive card sizing (defaults tuned for desktop editorial look).
  const isMobile = vw !== null && vw < 640;
  const isTablet = vw !== null && vw >= 640 && vw < 1024;

  const cardWidth = isMobile ? Math.min((vw ?? 360) - 48, 340) : isTablet ? 420 : 500;
  const cardHeight = isMobile ? 380 : isTablet ? 320 : 340;

  return (
    <div style={{ width: "94vw", maxWidth: "1320px", margin: "40px auto 60px" }}>
      <CardStack
        items={sections}
        initialIndex={0}
        maxVisible={5}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        overlap={isMobile ? 0.62 : 0.5}
        // 40° débordait du conteneur : les titres des cartes latérales
        // étaient rognés par les bords de la fenêtre.
        spreadDeg={isMobile ? 26 : 30}
        autoAdvance
        intervalMs={4000}
        pauseOnHover
        showDots
        renderCard={(item, { active }) => (
          <Link
            href={item.href ?? "#"}
            aria-label={item.title}
            className="block h-full w-full"
            style={{ pointerEvents: active ? "auto" : "none" }}
            draggable={false}
          >
            {/* image */}
            <div style={{ position: "absolute", inset: 0 }}>
              {item.imageSrc ? (
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  draggable={false}
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 500px"
                  style={{ objectFit: "cover" }}
                />
              ) : null}
            </div>

            {/* navy gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(0deg, rgba(var(--c-navy-rgb),0.88) 0%, rgba(var(--c-navy-rgb),0.15) 60%)",
              }}
            />

            {/* content */}
            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
                padding: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 200,
                  fontSize: "2.1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "white",
                  lineHeight: "0.95em",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </p>
              {item.description ? (
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: "1.5em",
                    marginBottom: "14px",
                    maxWidth: "34ch",
                  }}
                >
                  {item.description}
                </p>
              ) : null}
              <span
                style={{
                  display: "inline-block",
                  // Le Bleu Roi sur le dégradé navy tombait à ~2:1 : illisible.
                  // Le Vert Eau de la charte remonte à ~11:1.
                  color: "var(--c-fond)",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.95rem",
                  fontWeight: 200,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Découvrir →
              </span>
            </div>
          </Link>
        )}
      />
    </div>
  );
}
