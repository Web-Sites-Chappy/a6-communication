// Server component — no "use client" needed
import Link from "next/link";
import CookieSettingsLink from "@/components/CookieSettingsLink";

const legalNav = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
];

const footerNav = [
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Nos services", href: "/nos-services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Nos clients", href: "/nos-clients" },
  { label: "Blog", href: "/blog" },
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
              width: "76px",
              height: "76px",
              marginBottom: "12px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-a6.svg"
              alt="Logo A6 Communication et Événementiel"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
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
            color: "var(--c-btn-accent)",
          }}
        >
          Navigation
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {footerNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="footer-link"
                // Cible tactile >=44px : le texte seul ne faisait que 22px de haut.
                style={{ display: "block", padding: "11px 0" }}
              >
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
            color: "var(--c-btn-accent)",
          }}
        >
          Contact
        </p>
        <p style={{ fontSize: "0.85rem", opacity: 0.7, fontFamily: "var(--font-body)", lineHeight: "1.7em" }}>
          Région Occitanie, France
          <br />
          <a href="tel:+33782136190" style={{ color: "rgba(255,255,255,0.7)" }}>
            07 82 13 61 90
          </a>
          {" · "}
          <a href="tel:+33610188747" style={{ color: "rgba(255,255,255,0.7)" }}>
            06 10 18 87 47
          </a>
          <br />
          <a href="mailto:contact@a6agence.com" style={{ color: "rgba(255,255,255,0.7)" }}>
            contact@a6agence.com
          </a>
        </p>
        <Link href="/contact" className="btn-rouge" style={{ display: "inline-block", marginTop: "16px", fontSize: "0.85rem" }}>
          Nous contacter
        </Link>
      </div>

      {/* Mention */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          marginTop: "30px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          {legalNav.map((link) => (
            <Link key={link.href} href={link.href} className="footer-link" style={{ fontSize: "0.7rem", opacity: 0.55 }}>
              {link.label}
            </Link>
          ))}
          <span style={{ fontSize: "0.7rem", opacity: 0.55 }}>
            <CookieSettingsLink />
          </span>
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.7rem",
            opacity: 0.55,
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          {`© ${new Date().getFullYear()} `}A6 Communication &amp; Événementiel · Tous droits réservés
          {" · "}
          Site réalisé par{" "}
          <a href="https://chappygo.com" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "underline" }}>
            Chappygo
          </a>
        </p>
      </div>
    </footer>
  );
}
