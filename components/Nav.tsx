"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Qui sommes-nous",
    href: "/qui-sommes-nous",
    sub: [],
  },
  {
    label: "Nos services",
    href: "/nos-services",
    sub: [
      { label: "Stratégie digitale", href: "/nos-services/strategie-digitale" },
      { label: "Identité visuelle", href: "/nos-services/identite-visuelle" },
      { label: "Production de contenus", href: "/nos-services/production-de-contenus" },
      { label: "Impressions & Signalétique", href: "/nos-services/impressions-signaletique" },
      { label: "Conception & scénographie", href: "/nos-services/conception-et-scenographie" },
      { label: "Logistique", href: "/nos-services/logistique" },
      { label: "Animation", href: "/nos-services/animation" },
      { label: "Relations presse", href: "/nos-services/relations-presse" },
    ],
  },
  {
    label: "Nos clients",
    href: "/nos-clients",
    sub: [],
  },
  {
    label: "Blog",
    href: "/blog",
    sub: [],
  },
];

export default function Nav() {
  const [shy, setShy] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShy(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Gradient support layer — fades from navy to transparent, only on hero top */}
      <div
        id="nav-gradient"
        className="fixed top-0 left-0 w-full z-40 pointer-events-none"
        style={{
          /* Le voile s'efface en opacité, pas en hauteur : animer `height` à
             chaque passage de seuil de scroll force un recalcul de layout, et
             le fondu rend mieux qu'un écrasement du dégradé vers le haut.
             La couche reste inoffensive une fois invisible (pointer-events-none). */
          height: "140px",
          opacity: shy ? 0 : 1,
          background: "linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 100%)",
          transition: "opacity var(--e-basic)",
        }}
      />

      {/* Nav bar */}
      <header
        className="fixed top-0 left-0 z-50 flex justify-between items-center"
        style={{
          width: "100%",
          padding: shy ? "12px 30px" : "28px 30px",
          backgroundColor: shy ? "rgba(var(--c-navy-rgb),0.97)" : "transparent",
          backdropFilter: shy ? "blur(8px)" : "none",
          boxShadow: shy ? "0 2px 20px rgba(0,0,0,0.35)" : "none",
          transition: "all var(--e-basic)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div
            className="flex-shrink-0"
            style={{
              height: shy ? "50px" : "58px",
              width: "auto",
              aspectRatio: "632 / 580",
              transition: "all var(--e-basic)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-a6.svg"
              alt="A6"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <span
            className="text-white uppercase hidden md:block"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: shy ? "0.75rem" : "0.85rem",
              fontWeight: 200,
              letterSpacing: "0.15em",
              lineHeight: "1.15em",
              whiteSpace: "nowrap",
              transition: "font-size var(--e-basic)",
              textShadow: shy ? "none" : "0 1px 6px rgba(0,0,0,0.6)",
            }}
          >
            Communication<br />&amp; Événementiel
          </span>
        </Link>

        {/* Desktop links */}
        <ul
          className="hidden lg:flex items-center"
          style={{ gap: "0", listStyle: "none", padding: 0 }}
        >
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
            <li
              key={link.href}
              className="relative"
              style={{ display: "flex", alignItems: "center" }}
              onMouseEnter={() => link.sub.length > 0 && setOpenDropdown(link.href)}
              onMouseLeave={() => setOpenDropdown(null)}
              onFocus={() => link.sub.length > 0 && setOpenDropdown(link.href)}
              onBlur={(e) => {
                // Ferme seulement quand le focus quitte tout le <li> (lien + sous-menu),
                // pas à chaque Tab entre le lien et son premier enfant.
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setOpenDropdown(null);
                }
              }}
              onKeyDown={(e) => { if (e.key === "Escape") setOpenDropdown(null); }}
            >
              <Link
                href={link.href}
                className={`nav-link${isActive ? " nav-link-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                aria-haspopup={link.sub.length > 0 ? "true" : undefined}
                aria-expanded={link.sub.length > 0 ? openDropdown === link.href : undefined}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: "0.02em",
                  padding: "4px 0",
                  marginRight: "15px",
                  color: "white",
                  transition: "opacity 0.2s",
                  textShadow: shy ? "none" : "0 1px 6px rgba(0,0,0,0.65)",
                }}
                onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.opacity = "0.6"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                {link.label}
              </Link>
              {/* Separator */}
              {i < navLinks.length - 1 && (
                <span
                  style={{
                    display: "inline-block",
                    width: "1px",
                    height: "14px",
                    backgroundColor: "rgba(255,255,255,0.4)",
                    marginRight: "15px",
                  }}
                />
              )}
              {/* Dropdown */}
              {link.sub.length > 0 && openDropdown === link.href && (
                <ul
                  className="absolute"
                  style={{
                    top: "22px",
                    left: 0,
                    width: "220px",
                    listStyle: "none",
                    padding: 0,
                    zIndex: 99999,
                  }}
                >
                  {link.sub.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="block text-center transition-colors duration-200"
                        style={{
                          padding: "11px 15px",
                          backgroundColor: "var(--c-navy)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8rem",
                          color: "white",
                          boxShadow: "0px 3px 3px rgba(0,0,0,0.2)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--c-btn-accent)";
                          (e.currentTarget as HTMLAnchorElement).style.color = "var(--c-on-accent)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--c-navy)";
                          (e.currentTarget as HTMLAnchorElement).style.color = "white";
                        }}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
          })}

          {/* CTA */}
          <li>
            <Link
              href="/contact"
              className="transition-colors duration-300"
              style={{
                backgroundColor: "var(--c-btn-accent)",
                color: "var(--c-on-accent)",
                borderRadius: "4px",
                padding: "9px 20px 10px",
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 200,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                boxShadow: "0px 4px 17px 0px rgba(0,0,0,0.4)",
                display: "inline-block",
                marginLeft: "20px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--c-navy)";
                (e.currentTarget as HTMLAnchorElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--c-btn-accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--c-on-accent)";
              }}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          style={{
            backgroundColor: "var(--c-navy)",
            borderRadius: "4px",
            border: "none",
            padding: "9px 20px 10px",
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 200,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            boxShadow: "0px 4px 17px 0px rgba(0,0,0,0.4)",
            cursor: "pointer",
          }}
        >
          Menu
        </button>
      </header>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className="fixed z-[999] overflow-y-auto"
        aria-hidden={!mobileOpen}
        // Sans inert, ce panneau reste dans l'ordre de tabulation même hors écran
        // (translateX(-100%) ne retire rien de l'arbre d'accessibilité) : un clavier
        // continuerait à tomber sur ses liens invisibles, y compris sur desktop.
        inert={!mobileOpen}
        style={{
          width: "90vw",
          height: "100vh",
          top: 0,
          left: 0,
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          backgroundColor: "var(--c-navy)",
          color: "white",
          textAlign: "center",
          padding: "90px 5vw",
          transition: "transform 0.4s cubic-bezier(0.035, 0.625, 0.000, 1.000)",
        }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5"
          style={{
            backgroundColor: "var(--c-btn-accent)",
            color: "var(--c-on-accent)",
            borderRadius: "4px",
            border: "none",
            padding: "9px 20px 10px",
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 200,
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "0px 4px 17px 0px rgba(0,0,0,0.4)",
          }}
        >
          Fermer
        </button>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "3em", lineHeight: "1.1em" }}>
          {navLinks.map((link) => (
            <li key={link.href} style={{ marginBottom: "0.3em" }}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  textTransform: "uppercase",
                  fontWeight: 200,
                  /* Vert Eau et non Bleu Roi : sur le Bleu Nuit du panneau, le
                     Bleu Roi ne donne que 1,99:1 (illisible). Le Vert Eau est
                     la couleur de premier plan de la charte sur fond sombre —
                     même logique que la variante logo-a6.svg — et monte à ~11:1. */
                  color: "var(--c-fond)",
                  letterSpacing: "0.05em",
                }}
              >
                {link.label}
              </Link>
              {link.sub.length > 0 && (
                <ul style={{ listStyle: "none", padding: 0, fontSize: "0.45em", marginTop: "0.3em" }}>
                  {link.sub.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          color: "white",
                        }}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li style={{ marginTop: "1em" }}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                textTransform: "uppercase",
                fontWeight: 200,
                color: "var(--c-fond)",
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
