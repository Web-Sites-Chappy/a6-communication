"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Animate committed content without delaying navigation or resetting page state.
    const animation = container.current?.animate(
      [{ opacity: 0.65 }, { opacity: 1 }],
      { duration: 220, easing: "ease-out" },
    );
    return () => animation?.cancel();
  }, [pathname]);

  return <div ref={container}>{children}</div>;
}
