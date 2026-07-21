import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations — A6 Communication",
};

const projects = [
  { title: "Congrès de l'Ordre des Architectes d'Occitanie", dates: "Octobre 2025", category: "Événementiel", img: "/photos/DSC_0802.jpg", desc: "Organisation et communication complète du congrès annuel de l'Ordre des Architectes d'Occitanie, rassemblant plus de 300 professionnels." },
  { title: "Forum Artisans du Bâtiment", dates: "Juin 2025", category: "Événementiel", img: "/photos/DSC_0836.jpg", desc: "Conception et mise en œuvre d'un forum dédié aux artisans du bâtiment — communication digitale, logistique et animation de journée." },
  { title: "Journées du Patrimoine — Occitanie", dates: "Septembre 2024", category: "Communication", img: "/photos/DSC_0855.jpg", desc: "Stratégie de communication et production de contenus pour les Journées Européennes du Patrimoine en région Occitanie." },
  { title: "Assemblée Domaines Viticoles Sud", dates: "Novembre 2024", category: "Événementiel", img: "/photos/DSC_1019.jpg", desc: "Organisation de l'assemblée générale annuelle d'un syndicat de vignerons, incluant communication interne et relations presse." },
  { title: "Colloque Associations Culturelles", dates: "Mars 2024", category: "Communication", img: "/photos/DSC_1091.jpg", desc: "Accompagnement en communication pour une fédération d'associations culturelles de la région — identité visuelle et plan de communication annuel." },
];

export default function RealisationsPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/DSC_0855.jpg"
        title={"Nos\nréalisations"}
        height="half"
        ctaLabel="Nous contacter"
        ctaHref="/contact"
      />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 20px", textAlign: "center" }}>
        <h2>Événements qui marquent</h2>
      </Reveal>

      <div style={{ width: "90vw", maxWidth: "1000px", margin: "0 auto", paddingBottom: "80px" }}>
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0} direction={i % 2 === 0 ? "left" : "right"}>
            <div
              className="alt-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                marginBottom: "60px",
                borderBottom: "1px solid rgba(27,46,60,0.1)",
                paddingBottom: "60px",
              }}
            >
              <div className="alt-row-img" style={{ width: "45%", height: "320px", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="alt-row-text" style={{ flex: 1, padding: "20px" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 200, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--c-navy)", marginBottom: "8px" }}>
                  {project.dates}
                </p>
                <h3 style={{ color: "var(--c-rouge-fg)", marginBottom: "16px", lineHeight: "0.9em" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.6em", fontFamily: "var(--font-body)", color: "rgba(27,46,60,0.75)", marginBottom: "20px" }}>
                  {project.desc}
                </p>
                <span style={{ display: "inline-block", backgroundColor: "var(--c-btn-accent)", borderRadius: "4px", padding: "6px 14px 7px", color: "var(--c-on-accent)", fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 200, fontSize: "0.95rem", letterSpacing: "0.08em" }}>
                  {project.category}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <CTABanner title={"Votre projet,\nnos idées"} ctaLabel="Nous contacter" ctaHref="/contact" />
      </Reveal>
    </main>
  );
}
