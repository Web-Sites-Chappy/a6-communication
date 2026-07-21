import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous — A6 Communication",
};

const values = [
  { name: "Alchimie",     text: "Les regards ont un langage que les mots ne peuvent pas capturer et quand ces mots quittent le silence par une réelle connexion, ils coulent naturellement vers une Alchimie intellectuelle, émotionnelle et créatrice qui va bien au-delà des apparences." },
  { name: "Audace",       text: "Le courage est de croire en ce qui n'est pas encore visible mais aussi celui d'examiner la vérité sans se fier aux idées reçues et ainsi l'Audace propulse à l'évidence d'être soi-même, dans ses doutes, ses décisions, sa sensibilité." },
  { name: "Acceptation",  text: "L'Acceptation ne se commande pas, elle ne se force pas, elle fait simplement partie du chemin qu'il faut emprunter pour avancer. Conscientiser et accueillir qu'on est dans la résistance libère, allège et nous remet en contact avec nos ressources." },
  { name: "Agilité",      text: "Perçue comme un accélérateur d'innovation, l'Agilité est une évidence de nos jours et doit être un facteur proactif, collaboratif et fondamentalement numérique. L'entreprise doit mener sa transition culturelle et s'appuyer sur un socle technologique capable." },
  { name: "Authenticité", text: "Communiquer avec honnêteté et ouverture pour accepter sa vulnérabilité procure une transparence constructive en accord avec son identité et ses valeurs. Cette authenticité génère l'efficacité et l'éthique et crée des relations humaines et durables." },
  { name: "Assurance",    text: "Au service de l'humain avant tout, l'Assurance se positionne dans l'évidence de rapprocher la théorie de la pratique. En gardant un œil dans le réel et un autre dans le numérique — un outil digital n'est qu'un outil, ce qui compte c'est l'usage." },
];

const team = [
  { name: "Manuel", role: "L'esprit numérique", desc: "Pas encore la trentaine, Manuel incarne l'incontournable maîtrise des outils digitaux, des réseaux sociaux et des nouvelles formes de communication. Sa vision agile et sa créativité numérique propulsent A6 dans les usages de demain.", img: "/photos/DSC_1091.jpg" },
  { name: "Eric",   role: "L'esprit poétique",  desc: "La cinquantaine passée, Eric apporte son indéfectible sens du récit, de l'image et de ce qui fait vibrer un événement. Son expérience et sa sensibilité créent le socle sur lequel se construisent les projets les plus ambitieux.", img: "/photos/DSC_0836.jpg" },
];

export default function QuiSommesNousPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/DSC_0802.jpg"
        title={"Qui\nsommes-nous"}
        height="half"
        ctaLabel="Nos réalisations"
        ctaHref="/realisations"
      />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 40px", textAlign: "center" }}>
        <h2 id="equipe">Deux esprits,{"\n"}une vision</h2>
        <p style={{ marginTop: "24px", fontSize: "1rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "var(--c-navy)" }}>
          A6 Communication &amp; Événementiel se targue d&apos;être dirigée par deux associés
          complémentaires et atypiques. Manuel, pas encore la trentaine et son incontournable
          esprit numérique, et Eric, la cinquantaine passée et son indéfectible esprit poétique.
          Leur association n&apos;appartient pas au hasard mais bien à ce goût et volonté mutuels
          de participer à cette incontestable mutation dans le domaine de la communication et de
          l&apos;événementiel.
        </p>
      </Reveal>

      <div
        style={{
          width: "90vw",
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "60px",
        }}
      >
        {team.map((person, i) => (
          <Reveal key={person.name} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}
            style={{ flex: 1, minWidth: "min(280px, 100%)", maxWidth: "400px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={person.img}
              alt={person.name}
              style={{ width: "100%", height: "280px", objectFit: "cover", objectPosition: "top", display: "block", marginBottom: "20px" }}
            />
            <h3 style={{ color: "var(--c-rouge-fg)", marginBottom: "4px" }}>{person.name}</h3>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 200, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--c-navy)", marginBottom: "12px" }}>
              {person.role}
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6em", fontFamily: "var(--font-body)", color: "rgba(27,46,60,0.75)" }}>
              {person.desc}
            </p>
          </Reveal>
        ))}
      </div>

      <div style={{ backgroundColor: "var(--c-navy)", padding: "60px 0" }}>
        <div style={{ width: "var(--w-max)", maxWidth: "900px", margin: "0 auto" }}>
          <Reveal>
            <h2 id="valeurs" style={{ color: "var(--c-rouge)", marginBottom: "50px" }}>
              Les 6 valeurs
            </h2>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "40px",
            }}
          >
            {values.map((v, i) => (
              <Reveal key={v.name} delay={i * 70}>
                <div style={{ width: "40px", height: "2px", backgroundColor: "var(--c-rouge)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "2.5rem", textTransform: "uppercase", color: "var(--c-rouge)", lineHeight: "0.9em", marginBottom: "12px" }}>
                  {v.name}
                </h3>
                <p style={{ fontSize: "0.85rem", lineHeight: "1.6em", color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}>
                  {v.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal>
        <CTABanner title={"Parlons de\nvotre projet"} ctaLabel="Contact" ctaHref="/contact" />
      </Reveal>
    </main>
  );
}
