import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Nos Clients | A6 Communication",
  alternates: { canonical: `${SITE_URL}/nos-clients` },
};

const targets = [
  { title: "Professionnels de l'Acte et Art de Bâtir", img: "/photos/DSC_0836.webp", desc: "Cabinets d'architecture, ordres régionaux, associations professionnelles : A6 accompagne les acteurs de l'acte de bâtir dans leur communication institutionnelle et événementielle." },
  { title: "Institution", img: "/photos/DSC_1019.webp", desc: "Fondations du patrimoine, associations culturelles, institutions, musées et lieux de mémoire : partout où l'histoire et la culture méritent d'être racontées et valorisées." },
  { title: "Mairies et collectivités", img: "/photos/DSC_0855.webp", desc: "Particulièrement les communes de moins de 1 000 habitants, les intercommunalités et collectivités qui ont besoin d'une communication de proximité, efficace et abordable." },
  { title: "Monde culturel et associatif", img: "/photos/services-test/associatif-1.webp", desc: "Associations politiques, sportives, sociales : A6 met sa capacité à créer du lien et de la mobilisation au service du monde associatif sous toutes ses formes." },
];

export default function NosClientsPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/DSC_1091.webp"
        title={
          <>
            Ceux pour
            <br />
            qui nous
            <br />
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
              œuvrons
            </span>
          </>
        }
        height="half"
        ctaLabel="Nos services"
        ctaHref="/nos-services"
      />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 20px", textAlign: "center" }}>
        <AccentHeading lead="Nos" accent="clients" />
        <div style={{ marginTop: "24px", fontSize: "1.05rem", lineHeight: "1.8em", fontFamily: "var(--font-body)", color: "var(--c-navy)", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ margin: 0 }}>
            A6 œuvre au cœur des secteurs qui façonnent, préservent et font rayonner les territoires : bâtisseurs, gardiens du patrimoine, artisans et élus locaux.
          </p>
          <p style={{ margin: 0 }}>
            Des femmes et des hommes engagés, porteurs de savoir-faire, d’histoires et de projets essentiels, qui méritent une communication et des événements fidèles à leurs valeurs, à la hauteur de leur engagement indispensable à la préservation et au rayonnement de nos territoires.
          </p>
        </div>
      </Reveal>

      <div style={{ width: "90vw", maxWidth: "1000px", margin: "0 auto", paddingBottom: "80px" }}>
        {targets.map((target, i) => (
          <Reveal key={target.title} delay={0} direction={i % 2 === 0 ? "left" : "right"}>
            <div
              className="alt-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                marginBottom: "50px",
                paddingBottom: "50px",
                borderBottom: "1px solid rgba(27,46,60,0.1)",
              }}
            >
              <div className="alt-row-img" style={{ position: "relative", width: "40%", height: "260px", flexShrink: 0 }}>
                <Image
                  src={target.img}
                  alt={target.title}
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="alt-row-text" style={{ flex: 1 }}>
                <h3 style={{ color: "var(--c-rouge-fg)", marginBottom: "16px" }}>{target.title}</h3>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "rgba(27,46,60,0.75)" }}>
                  {target.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <CTASection sentence="c’était vous ?" buttonLabel="Contactez-nous" />
      </Reveal>
    </main>
  );
}
