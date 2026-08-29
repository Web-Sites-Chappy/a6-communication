import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Qui sommes-nous | A6 Communication",
  alternates: { canonical: `${SITE_URL}/qui-sommes-nous` },
};

const values = [
  { name: "Alchimie", text: "Les regards ont un langage que les mots ne peuvent pas capturer et quand ces mots quittent le silence par une réelle connexion, ils coulent naturellement vers une Alchimie intellectuelle, émotionnelle et créatrice qui va bien au-delà des apparences." },
  { name: "Audace", text: "Le courage est de croire en ce qui n'est pas encore visible mais aussi celui d'examiner la vérité sans se fier aux idées reçues et ainsi l'Audace propulse à l'évidence d'être soi-même, dans ses doutes, ses décisions, sa sensibilité." },
  { name: "Acceptation", text: "L'Acceptation ne se commande pas, elle ne se force pas, elle fait simplement partie du chemin qu'il faut emprunter pour avancer. Conscientiser et accueillir qu'on est dans la résistance libère, allège et nous remet en contact avec nos ressources." },
  { name: "Agilité", text: "Perçue comme un accélérateur d'innovation, l'Agilité est une évidence de nos jours et doit être un facteur proactif, collaboratif et fondamentalement numérique. L'entreprise doit mener sa transition culturelle et s'appuyer sur un socle technologique capable." },
  { name: "Authenticité", text: "Communiquer avec honnêteté et ouverture pour accepter sa vulnérabilité procure une transparence constructive en accord avec son identité et ses valeurs. Cette authenticité génère l'efficacité et l'éthique et crée des relations humaines et durables." },
  { name: "Assurance", text: "Au service de l'humain avant tout, l'Assurance se positionne dans l'évidence de rapprocher la théorie de la pratique. En gardant un œil dans le réel et un autre dans le numérique : un outil digital n'est qu'un outil, ce qui compte c'est l'usage." },
];

const team = [
  {
    name: "Manuel",
    fullName: "Manuel Dalla Zanna",
    role: "Président",
    subtitle: "L'esprit numérique",
    img: "/photos/manuel-v2.webp",
  },
  {
    name: "Eric",
    fullName: "Eric Gibaja",
    role: "Directeur général",
    subtitle: "L'esprit poétique",
    img: "/photos/eric-v2.webp",
  },
];

// Le nom complet reste utilisé dans le schema.org Person (SEO) même si l'affichage
// à l'écran ne montre que le prénom.
const teamJsonLd = team.map((person) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.fullName,
  jobTitle: person.role,
  worksFor: { "@type": "Organization", name: "A6 Communication et Événementiel" },
}));

export default function QuiSommesNousPage() {
  return (
    <main>
      {teamJsonLd.map((person) => (
        <script
          key={person.jobTitle}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      ))}
      <Hero
        imageSrc="/photos/manuel-eric-hero-v2.webp"
        title={
          <>
            Qui<br />
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
              sommes-nous
            </span>
          </>
        }
        height="half"
      />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 40px", textAlign: "center" }}>
        <AccentHeading id="equipe" lead="Deux esprits," accent="une vision" />
        <div
          style={{
            marginTop: "28px",
            fontSize: "1.05rem",
            lineHeight: "1.8em",
            fontFamily: "var(--font-body)",
            color: "var(--c-navy)",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0 }}>
            A6 Communication &amp; Événementiel est portée par deux associés aux personnalités singulières, unis par une complémentarité aussi évidente qu’inattendue.
          </p>
          <p style={{ margin: 0 }}>
            Manuel, animé par un esprit résolument numérique, imagine de nouvelles passerelles entre la technologie, les idées et les usages. Éric, profondément attaché à la poésie des mots, des images et des émotions, insuffle une dimension sensible à chaque projet.
          </p>
          <p style={{ margin: 0 }}>
            Leur rencontre ne doit rien au hasard. Elle est née d’une même envie : faire dialoguer l’innovation et la créativité, la précision et l’émotion. Une vision commune qui les a naturellement conduits à réunir leurs deux entreprises et leurs savoir-faire au sein d’une seule identité : A6 Communication &amp; Événementiel.
          </p>
          <p style={{ margin: 0 }}>
            Une nouvelle aventure commune, pensée pour prendre pleinement part à la profonde métamorphose que connaît aujourd’hui le monde de la communication et de l’événementiel.
          </p>
        </div>
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
            <div style={{ position: "relative", width: "100%", height: "360px", marginBottom: "20px" }}>
              <Image
                src={person.img}
                alt={person.name}
                fill
                sizes="(max-width: 640px) 90vw, 400px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <h3
              style={{
                color: "var(--c-rouge-fg)",
                fontFamily: "var(--font-display-bricolage), sans-serif",
                fontWeight: 700,
                fontSize: "1.75rem",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                marginBottom: "2px",
              }}
            >
              {person.name}
            </h3>
            <p
              style={{
                color: "var(--c-navy)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                opacity: 0.65,
                marginTop: "0",
                marginBottom: "6px",
              }}
            >
              {person.role}
            </p>
            <p
              style={{
                color: "var(--c-navy)",
                fontFamily: "var(--font-display-dmserif), serif",
                fontStyle: "italic",
                fontSize: "1.15rem",
                marginTop: "0",
                marginBottom: "0",
              }}
            >
              {person.subtitle}
            </p>
          </Reveal>
        ))}
      </div>

      <div style={{ backgroundColor: "var(--c-fond)", padding: "60px 0" }}>
        <div style={{ width: "var(--w-max)", maxWidth: "900px", margin: "0 auto" }}>
          <Reveal>
            <AccentHeading
              id="valeurs"
              lead="Nos 6"
              accent="engagements"
              style={{ color: "var(--c-rouge)", marginBottom: "50px" }}
            />
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
                <p style={{ fontSize: "0.85rem", lineHeight: "1.6em", color: "rgba(var(--c-navy-rgb), 0.75)", fontFamily: "var(--font-body)" }}>
                  {v.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal>
        <CTASection sentence="nous prenions le temps de…" buttonLabel="nous rencontrer" />
      </Reveal>
    </main>
  );
}
