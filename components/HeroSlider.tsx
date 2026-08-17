"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroSliderProps {
  images: string[];
  title: ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  interval?: number; // ms between slides
  video?: string; // optional background video src (overrides image slider)
  poster?: string; // poster shown while video loads / fallback
}

export default function HeroSlider({
  images,
  title,
  subtitle,
  ctaLabel = "Découvrir",
  ctaHref = "/realisations",
  interval = 5000,
  video,
  poster,
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const fadeOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (video) return; // no slideshow when a background video is used
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, video]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        minHeight: "600px",
      }}
    >
      {/* Background: video (if provided) or image slideshow */}
      {video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
            display: "block",
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
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
            {/* Ken Burns zoom — le scale s'applique au wrapper, pas à l'image :
                next/image + fill a besoin d'un parent positionné à taille fixe. */}
            <motion.div
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: interval / 1000 + 1.4, ease: "linear" }}
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src={images[current]}
                alt=""
                fill
                priority={current === 0}
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(0deg, rgba(var(--c-navy-rgb),1) 0%, rgba(var(--c-navy-rgb),0.21) 55%, rgba(var(--c-navy-rgb),0.07) 100%)",
          zIndex: 1,
        }}
      />

      {/* Scroll-linked fade to dark — the video sinks into black as you scroll past the hero */}
      {video && (
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "var(--c-navy)",
            zIndex: 1,
            opacity: fadeOverlayOpacity,
            pointerEvents: "none",
          }}
        />
      )}

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
          // Dégage la hauteur du bandeau cookies quand il est affiché, sinon il
          // recouvre le CTA à la première visite.
          paddingBottom: "calc(10vh + var(--cookie-banner-h, 0px))",
          // Réserve la hauteur exacte du header fixe.
          paddingTop: "var(--header-h)",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display-bricolage)",
            fontWeight: 700,
            // Le corps est plafonné par la place réellement disponible : la
            // fenêtre moins le header et moins le bandeau cookies. Un plafond
            // en vw seul faisait remonter le titre sous la navigation dès que
            // la fenêtre était basse ou le bandeau affiché.
            fontSize:
              "clamp(2.2rem, min(9vw, calc((100svh - var(--header-h) - var(--cookie-banner-h, 0px)) * 0.125)), 9rem)",
            lineHeight: "0.85em",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            color: "white",
            overflowWrap: "break-word",
            marginBottom: subtitle ? "0.4em" : "0.6em",
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
              maxWidth: "620px",
              lineHeight: "1.55em",
              marginBottom: "1.3em",
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
        {!video && (
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
              aria-current={i === current ? "true" : undefined}
              style={{
                position: "relative",
                // Largeur fixe : la pastille active grandit via un scaleX interne,
                // pas via `width` (qui forçait un recalcul de layout à chaque tick).
                // Hauteur du bouton = 24px (cible tactile), plus haute que la
                // pastille visible de 8px, centrée dedans via le span.
                width: "28px",
                height: "24px",
                border: "none",
                background: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  width: "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: i === current ? "white" : "rgba(255,255,255,0.4)",
                  transform: `translateY(-50%) ${i === current ? "scaleX(3.5)" : "scaleX(1)"}`,
                  transformOrigin: "left center",
                  transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), background-color 0.3s",
                }}
              />
            </button>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
