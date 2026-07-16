"use client";

import * as React from "react";
import Link from "next/link";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";

const sections: CardStackItem[] = [
  { id: "qui", title: "Qui sommes-nous", description: "Manuel & Eric — deux esprits complémentaires, six valeurs fondatrices.", imageSrc: "/photos/DSC_0836.jpg", href: "/qui-sommes-nous" },
  { id: "services", title: "Nos services", description: "Communication digitale, identité visuelle, organisation d'événements.", imageSrc: "/photos/DSC_1019.jpg", href: "/nos-services" },
  { id: "real", title: "Réalisations", description: "Congrès, forums, journées thématiques — des événements qui marquent.", imageSrc: "/photos/DSC_0855.jpg", href: "/realisations" },
  { id: "cibles", title: "Nos cibles", description: "Artisans, architectes, communes, culture et monde associatif.", imageSrc: "/photos/DSC_1091.jpg", href: "/nos-cibles" },
  { id: "actualites", title: "Actualités", description: "Coulisses, événements à venir et temps forts de l'agence.", imageSrc: "/photos/DSC_0802.jpg", href: "/actualites" },
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
    <div style={{ width: "94vw", maxWidth: "1100px", margin: "40px auto 60px" }}>
      <CardStack
        items={sections}
        initialIndex={0}
        maxVisible={5}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        overlap={isMobile ? 0.62 : 0.5}
        spreadDeg={isMobile ? 26 : 40}
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageSrc}
                alt={item.title}
                draggable={false}
                style={{ height: "100%", width: "100%", objectFit: "cover", display: "block" }}
              />
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
                  color: "var(--c-rouge)",
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
