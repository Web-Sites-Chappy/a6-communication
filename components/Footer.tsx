// Server component — no "use client" needed
import Link from "next/link";

const footerNav = [
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Nos services", href: "/nos-services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Nos cibles", href: "/nos-cibles" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="footer-inner"
      style={{
        backgroundColor: "var(--c-navy)",
        color: "white",
        display: "flex",
        gap: "20px",
        padding: "60px clamp(24px, 6vw, 100px)",
        alignItems: "flex-start",
        flexWrap: "wrap",
        marginTop: "0",
      }}
    >
      {/* Logo block */}
      <div style={{ width: "100%", maxWidth: "220px" }}>
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              backgroundColor: "var(--c-rouge)",
              color: "var(--c-on-accent)",
              fontFamily: "var(--font-display)",
              fontSize: "1.8rem",
              fontWeight: 200,
              letterSpacing: "0.05em",
              marginBottom: "12px",
            }}
          >
            A6
          </div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              fontWeight: 200,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "white",
              lineHeight: "1.1em",
            }}
          >
            Communication
            <br />
            &amp; Événementiel
          </p>
        </div>
        <p style={{ fontSize: "0.8rem", opacity: 0.6, fontFamily: "var(--font-body)", lineHeight: "1.5em" }}>
          Alchimie · Audace · Acceptation
          <br />
          Agilité · Authenticité · Assurance
        </p>
      </div>

      {/* Nav block */}
      <div style={{ width: "100%", maxWidth: "200px" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 200,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "14px",
            color: "var(--c-rouge)",
          }}
        >
          Navigation
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {footerNav.map((link) => (
            <li key={link.href} style={{ marginBottom: "6px" }}>
              <Link href={link.href} className="footer-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact block */}
      <div style={{ width: "100%", maxWidth: "240px" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 200,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "14px",
            color: "var(--c-rouge)",
          }}
        >
          Contact
        </p>
        <p style={{ fontSize: "0.85rem", opacity: 0.7, fontFamily: "var(--font-body)", lineHeight: "1.7em" }}>
          Région Occitanie, France
          <br />
          <a href="mailto:contact@a6communication.fr" style={{ color: "rgba(255,255,255,0.7)" }}>
            contact@a6communication.fr
          </a>
        </p>
      </div>

      {/* Mention */}
      <p
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          fontSize: "0.7rem",
          opacity: 0.4,
          marginTop: "30px",
          fontFamily: "var(--font-body)",
        }}
      >
        © {new Date().getFullYear()} A6 Communication &amp; Événementiel — Tous droits réservés
      </p>
    </footer>
  );
}
