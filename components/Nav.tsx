"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Qui sommes-nous", href: "#about" },
  { label: "Nos valeurs", href: "#values" },
  { label: "Réalisations", href: "#projects" },
  { label: "Nos cibles", href: "#targets" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(28, 20, 16, 0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(196,82,42,0.2)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="A6 Communication"
          >
            <div
              className="w-9 h-9 flex items-center justify-center text-white text-sm font-bold tracking-widest2"
              style={{ backgroundColor: "var(--terra)" }}
            >
              A6
            </div>
            <span
              className="text-white text-sm tracking-widest2 uppercase hidden sm:block"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Communication
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 text-xs tracking-widest uppercase text-white transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: "var(--terra)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Nous contacter
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ backgroundColor: "var(--dark)" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-white text-3xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
