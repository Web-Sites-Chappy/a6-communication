"use client";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 lg:px-10"
      style={{
        backgroundColor: "#130E0A",
        borderTop: "1px solid rgba(196,82,42,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "var(--terra)" }}
            >
              A6
            </div>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "rgba(237,224,196,0.5)", fontFamily: "var(--font-dm-sans)" }}
            >
              Communication &amp; Événementiel
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Qui sommes-nous", "Nos valeurs", "Réalisations", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: "rgba(237,224,196,0.4)", fontFamily: "var(--font-dm-sans)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--terra)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(237,224,196,0.4)"; }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="text-xs"
            style={{ color: "rgba(237,224,196,0.25)", fontFamily: "var(--font-dm-sans)" }}
          >
            © {new Date().getFullYear()} A6 Communication
          </p>
        </div>
      </div>
    </footer>
  );
}
