import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités — A6 Communication",
  description:
    "Coulisses de l'agence, événements à venir et temps forts d'A6 Communication.",
};

const articles = [
  {
    title: "A6 Communication accompagne le prochain Congrès des Architectes",
    date: "Juillet 2026",
    category: "Événementiel",
    img: "/photos/DSC_0802.jpg",
    excerpt:
      "Nous préparons l'édition 2026 du congrès régional : scénographie, communication digitale et logistique d'un événement qui réunira plus de 300 professionnels.",
  },
  {
    title: "Nouvelle identité visuelle pour un domaine viticole du Sud",
    date: "Juin 2026",
    category: "Identité visuelle",
    img: "/photos/DSC_1019.jpg",
    excerpt:
      "De la charte graphique aux étiquettes, retour sur un projet de refonte complète mené main dans la main avec les vignerons.",
  },
  {
    title: "Les coulisses des Journées du Patrimoine en Occitanie",
    date: "Mai 2026",
    category: "Communication",
    img: "/photos/DSC_0855.jpg",
    excerpt:
      "Comment nous avons imaginé la stratégie de contenus et l'animation des réseaux sociaux pour faire rayonner le patrimoine régional.",
  },
  {
    title: "Forum Artisans du Bâtiment : les inscriptions sont ouvertes",
    date: "Avril 2026",
    category: "Événementiel",
    img: "/photos/DSC_0836.jpg",
    excerpt:
      "Rendez-vous incontournable des professionnels du bâtiment, le forum revient avec un format repensé et de nouveaux temps d'échange.",
  },
  {
    title: "A6 s'engage auprès du monde associatif culturel",
    date: "Mars 2026",
    category: "Communication",
    img: "/photos/DSC_1091.jpg",
    excerpt:
      "Un accompagnement au long cours pour aider les associations culturelles à structurer et diffuser leur message.",
  },
];

export default function ActualitesPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/DSC_0802.jpg"
        title={"Nos\nactualités"}
        height="half"
        ctaLabel="Nous contacter"
        ctaHref="/contact"
      />

      <Reveal
        style={{
          width: "var(--w-max)",
          maxWidth: "var(--w-limit-text)",
          margin: "0 auto",
          padding: "60px 0 20px",
          textAlign: "center",
        }}
      >
        <h2>Coulisses & temps forts</h2>
        <p
          style={{
            marginTop: "24px",
            fontSize: "1rem",
            lineHeight: "1.6em",
            color: "var(--c-navy)",
            fontFamily: "var(--font-body)",
            maxWidth: "600px",
            margin: "24px auto 0",
          }}
        >
          Événements à venir, projets en cours et regards sur le travail de
          l&apos;agence — suivez la vie d&apos;A6 Communication.
        </p>
      </Reveal>

      <div
        className="actu-grid"
        style={{
          width: "90vw",
          maxWidth: "1100px",
          margin: "50px auto 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "40px",
        }}
      >
        {articles.map((article, i) => (
          <Reveal key={article.title} delay={i * 80} direction="up">
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "rgba(var(--c-navy-rgb),0.03)",
                borderBottom: "3px solid var(--c-rouge)",
              }}
            >
              <div style={{ width: "100%", height: "220px", flexShrink: 0, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.img}
                  alt={article.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "var(--c-rouge)",
                      borderRadius: "4px",
                      padding: "4px 11px 5px",
                      color: "white",
                      fontFamily: "var(--font-display)",
                      textTransform: "uppercase",
                      fontWeight: 200,
                      fontSize: "0.8rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {article.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      color: "rgba(var(--c-navy-rgb),0.6)",
                    }}
                  >
                    {article.date}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
                    lineHeight: "0.95em",
                    color: "var(--c-rouge)",
                    marginBottom: "14px",
                  }}
                >
                  {article.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.6em",
                    fontFamily: "var(--font-body)",
                    color: "rgba(var(--c-navy-rgb),0.75)",
                  }}
                >
                  {article.excerpt}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <CTABanner
          title={"Une actualité\nà partager ?"}
          ctaLabel="Nous contacter"
          ctaHref="/contact"
        />
      </Reveal>
    </main>
  );
}
