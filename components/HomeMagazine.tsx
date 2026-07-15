import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";

const featured = [
  { title: "Congrès de l'Ordre des Architectes d'Occitanie", dates: "Octobre 2025", category: "Événementiel", img: "/photos/DSC_0802.jpg", desc: "Organisation et communication complète du congrès annuel, rassemblant plus de 300 professionnels." },
  { title: "Forum Artisans du Bâtiment", dates: "Juin 2025", category: "Communication", img: "/photos/DSC_1019.jpg", desc: "Conception et mise en œuvre d'un forum dédié aux artisans — communication digitale, logistique et animation." },
];

const services = [
  ["01", "Stratégie digitale", "Audit, plan de communication, réseaux sociaux."],
  ["02", "Identité visuelle", "Logo, charte graphique, supports print et web."],
  ["03", "Production de contenus", "Rédaction, photographie, vidéo."],
  ["04", "Événementiel", "Congrès, forums, assemblées, journées thématiques."],
  ["05", "Relations presse", "Communiqués, dossiers de presse, médias régionaux."],
  ["06", "Communication événementielle", "Promotion avant, pendant et après l'événement."],
];

export default function HomeMagazine() {
  return (
    <main>
      <section
        className="mag-hero"
        style={{
          width: "100vw",
          height: "100vh",
          minHeight: "600px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div
          className="mag-hero-text"
          style={{
            width: "55%",
            backgroundColor: "var(--c-navy)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "8vh 6vw 10vh",
            flexShrink: 0,
            animation: "fadeInLeft 1s var(--e-basic) 0.1s both",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 200,
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "var(--c-rouge)",
              marginBottom: "28px",
              animation: "fadeInUp 0.8s var(--e-basic) 0.4s both",
            }}
          >
            Agence de communication &amp; événementiel
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 200,
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              lineHeight: "0.88em",
              textTransform: "uppercase",
              color: "white",
              letterSpacing: "0.02em",
              marginBottom: "32px",
              animation: "fadeInUp 0.9s var(--e-basic) 0.55s both",
            }}
          >
            L&apos;Alchimie
            <br />
            entre l&apos;image
            <br />
            et son histoire
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.95rem",
              fontFamily: "var(--font-body)",
              lineHeight: "1.6em",
              maxWidth: "400px",
              marginBottom: "36px",
              animation: "fadeInUp 0.9s var(--e-basic) 0.75s both",
            }}
          >
            Deux associés complémentaires au service d&apos;une communication authentique
            et d&apos;événements qui marquent les esprits.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", animation: "fadeInUp 0.9s var(--e-basic) 0.9s both" }}>
            <Link href="/realisations" className="btn-rouge">Nos réalisations</Link>
            <Link href="/contact" className="btn-blanc">Contact</Link>
          </div>
        </div>

        <div className="mag-hero-img" style={{ flex: 1, position: "relative", animation: "fadeInRight 1s var(--e-basic) 0.1s both" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/DSC_0836.jpg"
            alt="A6 Communication"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
          {/* Subtle left fade */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(var(--c-navy-rgb),0.4) 0%, transparent 40%)",
            }}
          />
        </div>
      </section>

      {/* Chapeau section */}
      <Reveal
        className="mag-chapeau"
        style={{
          width: "90vw",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "60px 0 0",
          display: "flex",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: "12px 40px",
          borderBottom: "2px solid var(--c-rouge)",
          paddingBottom: "24px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 200,
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--c-rouge)",
            flexShrink: 0,
          }}
        >
          Réalisations
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "rgba(var(--c-navy-rgb),0.5)",
            lineHeight: "1.5em",
          }}
        >
          Événements marquants, communications impactantes — notre travail en images.
        </p>
        <Link
          href="/realisations"
          style={{
            marginLeft: "auto",
            flexShrink: 0,
            fontFamily: "var(--font-display)",
            fontSize: "0.85rem",
            fontWeight: 200,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--c-rouge)",
            whiteSpace: "nowrap",
          }}
        >
          Voir tout →
        </Link>
      </Reveal>

      {/* Featured 2-column */}
      <div
        className="grid-2col"
        style={{
          width: "90vw",
          maxWidth: "900px",
          margin: "2px auto 70px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2px",
        }}
      >
        {featured.map((item, i) => (
          <Reveal key={item.title} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"} style={{ height: "420px" }}>
          <Link
            href="/realisations"
            className="hub-card"
            style={{ height: "420px", textDecoration: "none" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.img}
              alt={item.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              className="hub-overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(0deg, rgba(var(--c-navy-rgb),0.9) 0%, rgba(var(--c-navy-rgb),0.1) 55%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "28px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "var(--c-rouge)",
                  borderRadius: "3px",
                  padding: "4px 10px 5px",
                  color: "white",
                  fontFamily: "var(--font-display)",
                  textTransform: "uppercase",
                  fontWeight: 200,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  marginBottom: "12px",
                  alignSelf: "flex-start",
                }}
              >
                {item.category}
              </span>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 200, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>
                {item.dates}
              </p>
              <h3 style={{ color: "white", fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: "0.9em", textTransform: "uppercase", marginBottom: "12px" }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", lineHeight: "1.5em" }}>
                {item.desc}
              </p>
            </div>
          </Link>
          </Reveal>
        ))}
      </div>

      {/* Services — numbered list */}
      <div style={{ backgroundColor: "var(--c-navy)", padding: "70px 0" }}>
        <div style={{ width: "90vw", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "40px", marginBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "20px" }}>
            <h2 style={{ color: "var(--c-rouge)", margin: 0, textAlign: "left" }}>Nos services</h2>
            <Link
              href="/nos-services"
              style={{ marginLeft: "auto", flexShrink: 0, fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 200, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)" }}
            >
              En savoir plus →
            </Link>
          </div>

          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            {services.map(([num, name, desc], i) => (
              <Reveal key={num} delay={i * 60} direction="up">
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    padding: "24px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "1.8rem", color: "var(--c-rouge)", lineHeight: 1, flexShrink: 0, width: "40px" }}>
                    {num}
                  </span>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "1.3rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "white", lineHeight: 1, marginBottom: "6px" }}>
                      {name}
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", lineHeight: "1.5em" }}>
                      {desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <CTABanner title={"Parlons de\nvotre projet"} ctaLabel="Nous contacter" ctaHref="/contact" />
    </main>
  );
}
