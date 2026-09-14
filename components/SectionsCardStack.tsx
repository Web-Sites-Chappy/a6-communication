"use client";

import * as React from "react";
import Image from "@/components/SiteImage";
import { coverImageWidth } from "@/lib/imageSizing";
import Link from "next/link";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";

const sections: CardStackItem[] = [
  { id: "qui", title: "Qui sommes-nous ?", description: "Deux esprits complémentaires animés par 6 valeurs fondatrices.", imageSrc: "/photos/cardstack-qui-v2.webp", href: "/qui-sommes-nous" },
  { id: "services", title: "Nos services", description: "De la refonte de votre logo à l'organisation de votre événement.", imageSrc: "/photos/cardstack-services-v2.webp", href: "/nos-services" },
  { id: "real", title: "Réalisations", description: "Congrès, séminaires, inaugurations : des événements qui vous révèlent.", imageSrc: "/photos/cardstack-realisations-v2.webp", href: "/realisations" },
  { id: "cibles", title: "Nos clients", description: "Professionnels de l'acte et de l'art de bâtir, institutions, mairies, acteurs du monde associatif et culturel.", imageSrc: "/photos/nos-clients/institution-institut-de-france-v2.webp", href: "/nos-clients" },
  { id: "blog", title: "Blog", description: "Actualités, temps forts & coups de projecteur.", imageSrc: "/photos/cardstack-blog-v2.webp", href: "/blog" },
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

  // Responsive card sizing. Le défaut avant mesure (vw === null, pendant le
  // rendu serveur et le premier paint client) doit être la taille mobile :
  // partir du desktop (500px) provoquait un flash de carte surdimensionnée
  // sur mobile avant que l'effet de resize ne corrige la taille.
  const isMobile = vw === null || vw < 640;
  const isTablet = vw !== null && vw >= 640 && vw < 1024;

  const cardWidth = isMobile ? Math.min((vw ?? 360) - 48, 340) : isTablet ? 420 : 500;
  const cardHeight = isMobile ? 380 : isTablet ? 320 : 340;
  // Reserve the complete rotated fan, including perspective and shadow margins.
  const fanWidth = cardWidth * 2 + Math.hypot(cardWidth, cardHeight) * 1.15 + 64;
  const availableWidth = Math.min((vw ?? 360) * 0.94, 1320);
  const fanScale = Math.min(1, availableWidth / fanWidth);
  const bottomClearance = Math.ceil(cardWidth * 0.3);
  const fanHeight = Math.max(420, cardHeight + 90) + bottomClearance + 48;

  return (
    <>
    <div className="mobile-section-cards" aria-label="Découvrir l’agence">
      {sections.map((item) => (
        <Link key={item.id} href={item.href!} className="mobile-section-card">
          <Image src={item.imageSrc!} alt="" fill sizes={`${coverImageWidth(item.imageSrc!, 500, 380)}px`} style={{ objectFit: "cover" }} />
          <div className="mobile-section-card-copy">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>Découvrir →</span>
          </div>
        </Link>
      ))}
    </div>
    <div className="desktop-section-cards" style={{ width: "94vw", maxWidth: "1320px", height: fanHeight * fanScale, margin: "40px auto 60px", position: "relative", overflow: "visible" }}>
      <div style={{ position: "absolute", left: "50%", width: fanWidth, transform: `translateX(-50%) scale(${fanScale})`, transformOrigin: "top center" }}>
      <CardStack
        items={sections}
        initialIndex={0}
        maxVisible={5}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        bottomClearance={bottomClearance}
        overlap={isMobile ? 0.62 : 0.5}
        spreadDeg={isMobile ? 26 : 30}
        autoAdvance={!isMobile && vw !== null && vw >= 768}
        intervalMs={4000}
        pauseOnHover
        showDots
        renderCard={(item, { active }) => (
          <Link
            href={item.href ?? "#"}
            aria-label={item.title}
            className="block h-full w-full"
            tabIndex={active ? 0 : -1}
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
                  priority={active}
                  // Les 5 cartes défilent automatiquement (autoAdvance, 4s) : celle
                  // qui devient "active" en cours de chargement était en lazy et
                  // Chrome la mesurait comme LCP tardif (elementRenderDelay ~1s).
                  // Le jeu est fixe et minuscule (5 images), toutes chargées
                  // eagerly plutôt que de dépendre du lazy-loading natif.
                  loading="eager"
                  sizes={`${coverImageWidth(item.imageSrc, 500, 380)}px`}
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
    </div>
    </>
  );
}
