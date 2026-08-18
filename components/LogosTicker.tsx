"use client";

import { Fragment, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { clientLogos, type ClientLogo } from "@/lib/clientLogos";

interface LogosTickerProps {
  logos?: ClientLogo[];
  /** Vitesse de défilement, en px/seconde. */
  speed?: number;
  /** Espace entre deux logos, en em. */
  gapEm?: number;
  /**
   * Taille de référence des em : c'est elle qui règle la hauteur des logos,
   * `displayEm` de chaque logo étant relatif à cette valeur.
   */
  fontSize?: string;
}

/**
 * Ruban de logos à défilement continu, façon « logos3 » : pas de pagination ni
 * de snap, juste une piste qui avance en boucle, adoucie aux deux bords par un
 * masque en dégradé. Le fond reste transparent — c'est la section hôte qui pose
 * le Bleu Nuit, indispensable puisque les logos du lot sont livrés en blanc sur
 * transparent, et le masque les fond alors dans ce fond sombre.
 *
 * La piste est doublée et l'espacement est porté par la marge droite de chaque
 * item (et non par un `gap` flex) pour que la période de la boucle vaille
 * exactement la moitié de `scrollWidth` — sans quoi le raccord saute d'un
 * demi-espace à chaque tour.
 */
export default function LogosTicker({
  logos = clientLogos,
  speed = 46,
  gapEm = 0.85,
  fontSize = "clamp(3rem, 6vw, 4.6rem)",
}: LogosTickerProps) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (paused || reduceMotion) return;
    const track = trackRef.current;
    if (!track) return;

    const period = track.scrollWidth / 2;
    if (!period) return;

    let next = x.get() - (speed * delta) / 1000;
    if (next <= -period) next += period;
    x.set(next);
  });

  const doubled = [...logos, ...logos];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        width: "100%",
        fontSize,
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <motion.div
        ref={trackRef}
        style={{
          x,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {doubled.map((logo, i) => {
          /* La seconde moitié n'est qu'un clone visuel pour boucler : on la
             masque aux lecteurs d'écran, sinon chaque client est annoncé deux
             fois. La première moitié porte le nom réel en alt. Les clones ne
             sont jamais liens, cliquables ou non : un doublon décoratif n'a
             rien à faire dans l'ordre de tabulation. */
          const isClone = i >= logos.length;

          const img = (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo.src}
              alt={isClone ? "" : logo.name}
              aria-hidden={isClone || undefined}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              style={{
                height: `${logo.displayEm}em`,
                width: "auto",
                marginRight: `${gapEm}em`,
                objectFit: "contain",
                display: "block",
                flexShrink: 0,
              }}
            />
          );

          if (logo.url && !isClone) {
            return (
              <a
                key={`${logo.id}-${i}`}
                href={logo.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={logo.name}
                style={{ display: "block", flexShrink: 0 }}
              >
                {img}
              </a>
            );
          }

          return <Fragment key={`${logo.id}-${i}`}>{img}</Fragment>;
        })}
      </motion.div>
    </div>
  );
}
