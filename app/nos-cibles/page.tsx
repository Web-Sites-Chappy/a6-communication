import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Cibles — A6 Communication",
};

const targets = [
  { title: "Artisans du Bâtiment", img: "/photos/DSC_0802.jpg", desc: "Maçons, charpentiers, menuisiers, plombiers — tous ceux qui construisent et rénovent le patrimoine bâti ont besoin d'une communication qui valorise leur savoir-faire et leur ancrage local." },
  { title: "Architectes", img: "/photos/DSC_0836.jpg", desc: "Cabinets d'architecture, ordres régionaux, associations professionnelles — A6 accompagne les acteurs de l'acte de bâtir dans leur communication institutionnelle et événementielle." },
  { title: "Communes & Mairies", img: "/photos/DSC_0855.jpg", desc: "Particulièrement les communes de moins de 1 000 habitants, les intercommunalités et collectivités qui ont besoin d'une communication de proximité, efficace et abordable." },
  { title: "Patrimoine & Culture", img: "/photos/DSC_1019.jpg", desc: "Fondations du patrimoine, associations culturelles, institutions, musées et lieux de mémoire — partout où l'histoire et la culture méritent d'être racontées et valorisées." },
  { title: "Monde Associatif", img: "/photos/DSC_1091.jpg", desc: "Associations politiques, sportives, sociales — A6 met sa capacité à créer du lien et de la mobilisation au service du monde associatif sous toutes ses formes." },
  { title: "Domaines Viticoles", img: "/photos/DSC_0836.jpg", desc: "Vignerons, coopératives, syndicats d'appellation — la communication au service du terroir, de la filière et des hommes et femmes qui font vivre le vin de nos régions." },
];

export default function NosCiblesPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/DSC_1091.jpg"
        title={"Ceux pour\nqui nous\nœuvrons"}
        height="half"
        ctaLabel="Nos services"
        ctaHref="/nos-services"
      />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 20px", textAlign: "center" }}>
        <h2>Nos cibles</h2>
        <p style={{ marginTop: "24px", fontSize: "1rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "var(--c-navy)" }}>
          A6 travaille au cœur des secteurs qui font vivre les territoires — bâtisseurs, gardiens
          du patrimoine, vignerons, élus locaux. Des acteurs essentiels qui méritent une communication
          à la hauteur de leur engagement.
        </p>
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
              <div className="alt-row-img" style={{ width: "40%", height: "260px", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={target.img}
                  alt={target.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="alt-row-text" style={{ flex: 1 }}>
                <h3 style={{ color: "var(--c-rouge)", marginBottom: "16px" }}>{target.title}</h3>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "rgba(27,46,60,0.75)" }}>
                  {target.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <CTABanner title={"Vous vous\nreconnaissez ?"} ctaLabel="Contactez-nous" ctaHref="/contact" />
      </Reveal>
    </main>
  );
}
