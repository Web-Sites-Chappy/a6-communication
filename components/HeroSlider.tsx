"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface HeroSliderProps {
  images: string[];
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  interval?: number; // ms between slides
}

export default function HeroSlider({
  images,
  title,
  subtitle,
  ctaLabel = "Découvrir",
  ctaHref = "/realisations",
  interval = 5000,
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        minHeight: "600px",
      }}
    >
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          {/* Ken Burns zoom */}
          <motion.img
            src={images[current]}
            alt=""
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: interval / 1000 + 1.4, ease: "linear" }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, rgba(27,46,60,0.88) 0%, rgba(27,46,60,0.18) 55%, rgba(27,46,60,0.06) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          textAlign: "center",
          paddingBottom: "10vh",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(4rem, 10vw, 9rem)",
            lineHeight: "0.85em",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "0.02em",
            marginBottom: subtitle ? "0.4em" : "0.6em",
            textShadow: "0 2px 8px rgba(0,0,0,0.6), 0 4px 32px rgba(0,0,0,0.5)",
            animation: "fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              maxWidth: "520px",
              lineHeight: "1.6em",
              marginBottom: "1.8em",
              animation: "fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both",
            }}
          >
            {subtitle}
          </p>
        )}

        <Link
          href={ctaHref}
          className="btn-rouge"
          style={{ animation: "fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s both" }}
        >
          {ctaLabel}
        </Link>

        {/* Dot indicators */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "32px",
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: i === current ? "white" : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.4s cubic-bezier(0.22,1,0.36,1), background-color 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
