"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: "var(--dark)" }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(196,82,42,0.18) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(43,95,112,0.15) 0%, transparent 50%)",
        }}
      />

      {/* Decorative large A6 letters */}
      <div
        className="absolute top-0 right-0 text-[28vw] font-bold leading-none select-none pointer-events-none z-0 opacity-[0.03]"
        style={{
          fontFamily: "var(--font-cormorant)",
          color: "var(--sand)",
          lineHeight: 1,
        }}
      >
        A6
      </div>

      {/* Grid lines decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${(i + 1) * 20}%`,
              backgroundColor: "var(--sand)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-40">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-widest uppercase mb-8"
          style={{
            color: "var(--terra)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          Agence de Communication &amp; Événementiel
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-white leading-none mb-8"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
          }}
        >
          L&apos;Alchimie
          <br />
          <em style={{ color: "var(--terra)" }}>entre l&apos;image</em>
          <br />
          et son histoire
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-md text-base leading-relaxed mb-12"
          style={{
            color: "rgba(237,224,196,0.7)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          Deux associés complémentaires — l&apos;esprit numérique et l&apos;esprit poétique —
          au service d&apos;une communication authentique et d&apos;événements qui marquent.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-8 py-4 text-white text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: "var(--terra)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Nos réalisations
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              border: "1px solid rgba(237,224,196,0.3)",
              color: "var(--sand)",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--terra)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--terra)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(237,224,196,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--sand)";
            }}
          >
            Qui sommes-nous
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{ backgroundColor: "var(--terra)", opacity: 0.5 }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-10 flex flex-col items-center gap-2 hidden lg:flex"
      >
        <span
          className="text-xs tracking-widest uppercase rotate-90"
          style={{ color: "rgba(237,224,196,0.4)", fontFamily: "var(--font-dm-sans)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12"
          style={{ backgroundColor: "var(--terra)", opacity: 0.6 }}
        />
      </motion.div>
    </section>
  );
}
