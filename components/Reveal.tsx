"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  style?: CSSProperties;
  className?: string;
  /** How far in px the element travels before settling. Default 40. */
  distance?: number;
  /** Fraction of element visible before triggering [0-1]. Default 0.08. */
  threshold?: number;
  /** Override animation duration in seconds. Default 0.7. */
  duration?: number;
}

const EASING = [0.22, 1, 0.36, 1] as const; // smooth decelerate

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  style,
  className,
  distance = 44,
  threshold = 0.08,
  duration = 0.72,
}: RevealProps) {
  const hidden: Variants["hidden"] = {
    opacity: 0,
    ...(direction === "up"    && { y: distance }),
    ...(direction === "down"  && { y: -distance }),
    ...(direction === "left"  && { x: -distance }),
    ...(direction === "right" && { x: distance }),
    ...(direction === "scale" && { scale: 0.92 }),
  };

  const visible: Variants["visible"] = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration,
      delay: delay / 1000,
      ease: EASING,
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px", amount: threshold }}
      variants={{ hidden, visible }}
    >
      {children}
    </motion.div>
  );
}
