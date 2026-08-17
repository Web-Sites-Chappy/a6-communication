"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { MarqueeCard, type MarqueeCardData } from "./marquee-card";

interface MarqueeCardsProps {
  items: MarqueeCardData[];
  /** Approximate seconds for one card-width to cross the track — lower = faster. */
  secondsPerCard?: number;
  className?: string;
  ariaLabel?: string;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    // matchMedia n'existe pas cote serveur : la valeur initiale doit rester dans l'effet.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function MarqueeCards({
  items,
  secondsPerCard = 2.6,
  className,
  ariaLabel = "Galerie d'événements",
}: MarqueeCardsProps) {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  // Duplicated once so translating the track by exactly -50% loops seamlessly.
  const track = useMemo(() => [...items, ...items], [items]);
  const durationMs = Math.max(items.length, 1) * secondsPerCard * 1000;

  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  return (
    <section
      aria-label={ariaLabel}
      className={cn("relative mx-auto w-full max-w-6xl overflow-hidden", className)}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--c-fond)] to-transparent sm:w-20 lg:w-28"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--c-fond)] to-transparent sm:w-20 lg:w-28"
        aria-hidden="true"
      />

      <ul
        className={cn(
          "flex w-fit list-none gap-4 py-2 sm:gap-5 lg:gap-6",
          !reducedMotion && "a6-marquee-animate",
          reducedMotion && "overflow-x-auto",
        )}
        style={
          reducedMotion
            ? undefined
            : { animationDuration: `${durationMs}ms`, animationPlayState: paused ? "paused" : "running" }
        }
      >
        {(reducedMotion ? items : track).map((item, i) => (
          <MarqueeCard key={reducedMotion ? item.id : `${item.id}-c${Math.floor(i / items.length)}`} item={item} />
        ))}
      </ul>

      <style>{`
        .a6-marquee-animate {
          animation-name: a6-marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes a6-marquee-scroll {
          from { transform: translateX(0%); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
