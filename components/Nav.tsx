"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
  {
    label: "Qui sommes-nous",
    href: "/qui-sommes-nous",
    sub: [
      { label: "Manuel & Eric", href: "/qui-sommes-nous#equipe" },
      { label: "Nos 6 valeurs", href: "/qui-sommes-nous#valeurs" },
    ],
  },
  {
    label: "Nos services",
    href: "/nos-services",
    sub: [
      { label: "Communication", href: "/nos-services#communication" },
      { label: "Événementiel", href: "/nos-services#evenementiel" },
    ],
  },
  {
    label: "Réalisations",
    href: "/realisations",
    sub: [],
  },
  {
    label: "Nos cibles",
    href: "/nos-cibles",
    sub: [],
  },
];

export default function Nav() {
  const [shy, setShy] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setShy(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Gradient support layer — fades from navy to transparent */}
      <div
        id="nav-gradient"
        className="fixed top-0 left-0 w-full z-40 pointer-events-none transition-all"
        style={{
          height: shy ? "80px" : "120px",
          background: "linear-gradient(180deg, rgba(27,46,60,1) 0%, rgba(27,46,60,0) 100%)",
          transition: "height var(--e-basic)",
        }}
      />

      {/* Nav bar */}
      <header
        className="fixed top-0 left-0 z-50 flex justify-between items-center"
        style={{
          width: shy ? "calc(100vw - 75px)" : "calc(100vw - 90px)",
          padding: shy ? "15px 30px" : "30px",
          transition: "all var(--e-basic)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div
            className="flex items-center justify-center text-white font-bold"
            style={{
              width: shy ? "36px" : "48px",
              height: shy ? "36px" : "48px",
              backgroundColor: "var(--c-rouge)",
              fontFamily: "var(--font-display)",
              fontSize: shy ? "1.2rem" : "1.5rem",
              fontWeight: 300,
              letterSpacing: "0.05em",
              transition: "all var(--e-basic)",
            }}
          >
            A6
          </div>
          <span
            className="text-white uppercase hidden md:block"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: shy ? "1rem" : "1.2rem",
              fontWeight: 200,
              letterSpacing: "0.15em",
              transition: "font-size var(--e-basic)",
            }}
          >
            Communication
          </span>
        </Link>

        {/* Desktop links */}
        <ul
          ref={dropdownRef}
          className="hidden lg:flex items-center"
          style={{ gap: "0", listStyle: "none", padding: 0 }}
        >
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="relative"
              style={{ display: "flex", alignItems: "center" }}
              onMouseEnter={() => link.sub.length > 0 && setOpenDropdown(link.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="text-white transition-opacity duration-200 hover:opacity-60"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  padding: "4px 0",
                  marginRight: "15px",
                }}
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
                        className="block text-center text-white transition-colors duration-200"
                        style={{
                          padding: "8px 15px",
                          backgroundColor: "var(--c-navy)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8rem",
                          boxShadow: "0px 3px 3px rgba(0,0,0,0.2)",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--c-rouge)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--c-navy)")
                        }
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* CTA */}
          <li>
            <Link
              href="/contact"
              className="text-white transition-colors duration-300"
              style={{
                backgroundColor: "var(--c-rouge)",
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
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--c-navy)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--c-rouge)")
              }
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(true)}
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
        style={{
          width: "90vw",
          height: "100vh",
          top: 0,
          left: mobileOpen ? 0 : "-100vw",
          backgroundColor: "var(--c-navy)",
          color: "white",
          textAlign: "center",
          padding: "90px 5vw",
          transition: "left 0.4s cubic-bezier(0.035, 0.625, 0.000, 1.000)",
        }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="text-white absolute top-5 right-5"
          style={{
            backgroundColor: "var(--c-rouge)",
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
                  color: "var(--c-rouge)",
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
                color: "var(--c-rouge)",
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
