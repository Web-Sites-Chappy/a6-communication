"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

interface SpotlightTitleProps {
  children: ReactNode;
  style?: CSSProperties;
  radius?: number; // spotlight circle radius, in px
}

export default function SpotlightTitle({ children, style, radius = 160 }: SpotlightTitleProps) {
  function handleMouseMove(e: MouseEvent<HTMLHeadingElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${x}%`);
    e.currentTarget.style.setProperty("--my", `${y}%`);
  }

  return (
    <h1
      className="title-spotlight"
      style={{ ...style, ["--spotlight-radius" as string]: `${radius}px` }}
      onMouseMove={handleMouseMove}
    >
      <span className="title-spotlight-base">{children}</span>
      <span className="title-spotlight-glow" aria-hidden="true">
        {children}
      </span>
    </h1>
  );
}
