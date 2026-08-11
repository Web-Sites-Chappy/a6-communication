"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

/* ─────────────────────────────────────────────
   Logos — les entrées avec src: null affichent
   un placeholder SVG jusqu'à réception des
   fichiers réels du client (TODO_LOGO).
───────────────────────────────────────────── */
interface LogoItem {
  id: string;
  name: string;
  src: string | null;
  width: number;
  height: number;
  /** Hauteur d'affichage cible en px, ajustée par logo. */
  displayHeight: number;
}

const logos: LogoItem[] = [
  /* ── Logos reçus ── */
  {
    id: "ordre-architectes",
    name: "Ordre des Architectes Occitanie",
    src: "/logos/ordre-architectes.svg",
    width: 247,
    height: 48,
    displayHeight: 44,
  },
  {
    id: "groupe-seuil",
    name: "Groupe Seuil",
    src: "/logos/groupe-seuil.png",
    width: 620,
    height: 891,
    displayHeight: 72,
  },
  {
    id: "archipreneurs",
    name: "Archipreneurs",
    src: "/logos/archipreneurs.png",
    width: 425,
    height: 438,
    displayHeight: 64,
  },
  /* ── Placeholders TODO_LOGO ── */
  {
    id: "placeholder-collectivite",
    name: "Collectivité territoriale",
    src: null,
    width: 120,
    height: 48,
    displayHeight: 44,
  },
  {
    id: "placeholder-patrimoine",
    name: "Fondation du Patrimoine",
    src: null,
    width: 160,
    height: 48,
    displayHeight: 44,
  },
  {
    id: "placeholder-vigneron",
    name: "Domaine viticole",
    src: null,
    width: 100,
    height: 100,
    displayHeight: 56,
  },
  {
    id: "placeholder-association",
    name: "Association culturelle",
    src: null,
    width: 140,
    height: 48,
    displayHeight: 44,
  },
  {
    id: "placeholder-artisan",
    name: "Artisan du Bâtiment",
    src: null,
    width: 120,
    height: 48,
    displayHeight: 44,
  },
];

/* ── Placeholder SVG inline ── */
function PlaceholderLogo({
  name,
  displayHeight,
}: {
  name: string;
  displayHeight: number;
}) {
  const initials = name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  const w = Math.round(displayHeight * 2.8);
  const h = displayHeight;

  return (
    <svg
      role="img"
      aria-label={name}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      style={{ display: "block", flexShrink: 0 }}
    >
      <rect
        x={1}
        y={1}
        width={w - 2}
        height={h - 2}
        rx={6}
        ry={6}
        fill="rgba(0,61,222,0.04)"
        stroke="rgba(0,61,222,0.18)"
        strokeWidth={1.5}
        strokeDasharray="6 4"
      />
      <text
        x="50%"
        y="42%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-display-bricolage), Arial, sans-serif"
        fontWeight="600"
        fontSize={h * 0.34}
        fill="rgba(0,61,222,0.30)"
        letterSpacing="0.08em"
      >
        {initials}
      </text>
      <text
        x="50%"
        y="78%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-body-work), Arial, sans-serif"
        fontWeight="400"
        fontSize={h * 0.16}
        fill="rgba(0,61,222,0.25)"
        letterSpacing="0.04em"
      >
        {name}
      </text>
    </svg>
  );
}

/* ── LogoMark ── */
function LogoMark({ logo }: { logo: LogoItem }) {
  if (!logo.src) {
    return <PlaceholderLogo name={logo.name} displayHeight={logo.displayHeight} />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.src}
      alt={logo.name}
      width={logo.width}
      height={logo.height}
      loading="lazy"
      style={{
        height: `${logo.displayHeight}px`,
        width: "auto",
        objectFit: "contain",
        display: "block",
        flexShrink: 0,
        filter: "grayscale(1) opacity(0.55)",
        transition: "filter 0.35s ease",
      }}
    />
  );
}

/* ── Ticker (défilement continu) ── */
const GAP = 80; // px entre items
const SPEED = 38; // px / seconde

function Ticker({ items }: { items: LogoItem[] }) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    let next = x.get() - (SPEED * delta) / 1000;
    if (Math.abs(next) >= half) next = 0;
    x.set(next);
  });

  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
      }}
    >
      <motion.div
        ref={trackRef}
        style={{
          x,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: `${GAP}px`,
          width: "max-content",
          willChange: "transform",
          paddingLeft: `${GAP}px`,
        }}
      >
        {doubled.map((logo, i) => (
          <div
            key={`${logo.id}-${i}`}
            style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          >
            <LogoMark logo={logo} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Section ── */
export default function LogosMarquee() {
  return (
    <section
      aria-label="Ils nous font confiance"
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "clamp(44px, 5vw, 72px) 0",
        borderTop: "1px solid rgba(0,61,222,0.08)",
        borderBottom: "1px solid rgba(0,61,222,0.08)",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontFamily: "var(--font-display-bricolage), sans-serif",
          fontWeight: 200,
          fontSize: "0.72rem",
          textTransform: "uppercase",
          letterSpacing: "0.32em",
          color: "var(--c-rouge)",
          marginBottom: "clamp(24px, 3vw, 40px)",
        }}
      >
        Ils nous font confiance
      </p>

      <Ticker items={logos} />
    </section>
  );
}
