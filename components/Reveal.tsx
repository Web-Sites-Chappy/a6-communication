"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  style?: CSSProperties;
  className?: string;
  distance?: number;
  threshold?: number;
  duration?: number;
}

/** Content stays readable before hydration and when observers are unavailable. */
export default function Reveal({ children, delay = 0, direction = "up", style,
  className, distance = 24, threshold = 0.08, duration = 0.48 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || reduced.matches || !("IntersectionObserver" in window)) return;
    // One entrance per branch: nested reveals otherwise multiply opacity and delays.
    if (element.parentElement?.closest("[data-reveal]")) return;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const travel = mobile ? Math.min(distance, 12) : distance;
    const transform = direction === "none" ? "none" : direction === "scale"
      ? "scale(0.98)" : direction === "left" && !mobile ? `translateX(${-travel}px)`
      : direction === "right" && !mobile ? `translateX(${travel}px)`
      : `translateY(${direction === "down" ? -travel : travel}px)`;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      animation = element.animate([
        { opacity: 0.35, transform }, { opacity: 1, transform: "none" },
      ], { duration: Math.min(duration * 1000, mobile ? 320 : 480),
        delay: mobile ? 0 : Math.min(delay, 120), easing: "cubic-bezier(.22,1,.36,1)" });
    }, { rootMargin: "0px 0px 40px 0px", threshold: Math.min(threshold, 0.08) });
    const stop = () => { if (reduced.matches) { observer.disconnect(); animation?.cancel(); } };
    reduced.addEventListener("change", stop);
    observer.observe(element);
    return () => { observer.disconnect(); animation?.cancel(); reduced.removeEventListener("change", stop); };
  }, [delay, direction, distance, duration, threshold]);
  return <div ref={ref} data-reveal className={className} style={style}>{children}</div>;
}
