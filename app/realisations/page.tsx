import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Réalisations | A6 Communication",
  alternates: { canonical: `${SITE_URL}/realisations` },
};

interface Realisation {
  title: string;
  service: { label: string; href: string };
  meta: string;
  img: string;
  imgAlt: string;
  /** Position de recadrage de l'image dans son cadre 40% / 320px. Par défaut "center". */
  imgPosition?: string;
  paragraphs: string[];
  link?: { label: string; href: string };
}

const realisations: Realisation[] = [
  {
    title: "Conférence de Clément Gaillard et promotion de son livre « Habiter un climat »",
    service: { label: "Conception & scénographie", href: "/nos-services/conception-et-scenographie" },
    meta: "CROA Occitanie · Montpellier",
    img: "/photos/realisations/clement-gaillard-conference-dedicace.webp",
    imgAlt: "Clément Gaillard dédicace son livre « Habiter un climat » lors de sa conférence au CROA Occitanie à Montpellier",
    paragraphs: [
      "Un essai qui interroge notre manière d’habiter le climat, un architecte-urbaniste venu en discuter en personne : à l’occasion de la parution de son ouvrage « Habiter un climat », notre agence a accompagné l’organisation d’une conférence de Clément Gaillard dans les locaux du CROA Occitanie à Montpellier.",
      "Cette rencontre a permis d’explorer une question centrale pour l’architecture contemporaine : comment renouer avec le climat et concevoir des manières d’habiter plus résilientes ?",
      "À travers une approche historique, engagée et nourrie d’exemples venus du monde entier, Clément Gaillard a invité les participants à repenser les pratiques architecturales et urbaines en s’appuyant sur des savoir-faire capables de mieux composer avec les milieux.",
      "Notre mission : contribuer à créer un temps d’échange inspirant, accessible et fédérateur, autour des grands enjeux climatiques qui transforment aujourd’hui nos territoires et nos façons d’habiter.",
    ],
  },
  {
    title: "Animation de la table ronde des Compagnons du Devoir",
    service: { label: "Animation", href: "/nos-services/animation" },
    meta: "Compagnons du Devoir · 80 ans de la fusion",
    img: "/photos/realisations/compagnons-du-devoir-table-ronde.webp",
    imgAlt: "Table ronde animée par A6 pour les 80 ans de la fusion des Compagnons Charpentiers des Devoirs du Tour de France",
    paragraphs: [
      "Passé, présent et avenir d’un métier ancestral, débattus devant un public de charpentiers, d’artisans et de compagnons : pour les 80 ans de la fusion des Compagnons Charpentiers des Devoirs du Tour de France, le directeur général d’A6 a eu l’honneur d’animer la table ronde « Le métier de charpentier, son passé, son avenir… » aux côtés de François Calame, président des Charpentiers sans frontières, Guillaume Niel, directeur associé chez Terrel, et Julien Fournier, dirigeant de Wood&Co.",
      "Un travail d’animation pensé pour rendre les discussions vivantes, accessibles et engageantes, tout en valorisant les expertises, les parcours et les savoir-faire portés par les Compagnons du Devoir.",
      "Une expérience où prise de parole, écoute et spontanéité étaient au cœur de notre accompagnement.",
    ],
  },
  {
    title: "Diffusion du film « Penser l’incertitude » à Barcelone",
    service: { label: "Logistique", href: "/nos-services/logistique" },
    meta: "CROA Occitanie · Barcelone",
    img: "/photos/realisations/penser-incertitude-affiche.webp",
    imgAlt: "Affiche du film « Penser l’incertitude » de Christian Barani, Albums 2023 des Jeunes Architectes et Paysagistes",
    imgPosition: "top",
    paragraphs: [
      "Une salle de projection, deux délégations d’architectes et une question commune : comment penser l’incertitude qui traverse aujourd’hui la profession ? Pour cette rencontre organisée à Barcelone, notre agence a accompagné le CROA Occitanie dans la conception et l’organisation d’un événement placé sous le signe de l’architecture, du dialogue et de la coopération transfrontalière.",
      "Au programme : des temps d’échanges entre architectes français et catalans, ainsi que la projection du film « Penser l’incertitude », consacré à une nouvelle génération de professionnels engagés face aux grands enjeux contemporains de l’architecture.",
      "De la préparation à la coordination de cette rencontre, notre mission a été de créer un moment convivial, inspirant et fédérateur, favorisant les échanges professionnels et renforçant les liens entre l’Occitanie et la Catalogne, à l’occasion de Barcelone, Capitale mondiale de l’Architecture 2026.",
    ],
  },
  {
    title: "Inauguration de la Fondation Magos à Málaga",
    service: { label: "Conception & scénographie", href: "/nos-services/conception-et-scenographie" },
    meta: "Fondation Magos · Málaga, 15-16 novembre 2024",
    img: "/photos/realisations/fondation-magos-malaga.webp",
    imgAlt: "Affiche de l’inauguration de la Fondation Magos à Málaga, les 15 et 16 novembre 2024",
    paragraphs: [
      "Des royaumes anciens, une spiritualité partagée entre trois textes fondateurs, une exposition pensée pour résonner bien au-delà de Málaga : les 15 et 16 novembre 2024, A6 a accompagné l’inauguration de la Fondation Magos, portée par l’exposition « Tesoro de los Magos » consacrée aux royaumes et à la spiritualité anciens, en partenariat avec le Centre UNESCO d’Andalousie, la Nobel Women’s Initiative et la Diputación de Málaga.",
      "Notre mission a consisté à accompagner l’organisation de cet événement d’ouverture, entre mise en récit patrimoniale et rayonnement international.",
    ],
    link: { label: "Voir la publication", href: "https://www.facebook.com/reel/895377812443350" },
  },
];

export default function RealisationsPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/realisations/musee-visiteurs-hero.webp"
        title={
          <>
            Nos
            <br />
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
              réalisations
            </span>
          </>
        }
        height="half"
        ctaLabel="Nous contacter"
        ctaHref="/contact"
      />

      <Reveal style={{ width: "var(--w-max)", maxWidth: "var(--w-limit-text)", margin: "0 auto", padding: "60px 0 20px", textAlign: "center" }}>
        <AccentHeading lead="Événements qui" accent="marquent" />
      </Reveal>

      <div style={{ width: "90vw", maxWidth: "1000px", margin: "50px auto 0", paddingBottom: "80px" }}>
        {realisations.map((item, i) => (
          <Reveal key={item.title} delay={0} direction={i % 2 === 0 ? "left" : "right"}>
            <div
              className="alt-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                marginBottom: "50px",
                paddingBottom: "50px",
                borderBottom: i < realisations.length - 1 ? "1px solid rgba(var(--c-navy-rgb),0.1)" : "none",
              }}
            >
              <div className="alt-row-img" style={{ position: "relative", width: "40%", height: "320px", flexShrink: 0 }}>
                <Image
                  src={item.img}
                  alt={item.imgAlt}
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  style={{ objectFit: "cover", objectPosition: item.imgPosition ?? "center" }}
                />
              </div>
              <div className="alt-row-text" style={{ flex: 1 }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <Link
                    href={item.service.href}
                    style={{
                      backgroundColor: "var(--c-btn-accent)",
                      borderRadius: "4px",
                      padding: "4px 11px 5px",
                      color: "var(--c-on-accent)",
                      fontFamily: "var(--font-display)",
                      textTransform: "uppercase",
                      fontWeight: 400,
                      fontSize: "0.78rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.service.label}
                  </Link>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(var(--c-navy-rgb),0.75)" }}>
                    {item.meta}
                  </span>
                </div>
                <h3 style={{ color: "var(--c-rouge-fg)", marginBottom: "16px" }}>{item.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {item.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      style={{ fontSize: "0.9rem", lineHeight: "1.7em", fontFamily: "var(--font-body)", color: "rgba(var(--c-navy-rgb),0.75)", margin: 0 }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{
                      display: "inline-block",
                      marginTop: "18px",
                      fontFamily: "var(--font-display)",
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      letterSpacing: "0.14em",
                      color: "var(--c-rouge-fg)",
                    }}
                  >
                    {item.link.label} →
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <CTASection sentence="votre idée devenait…" buttonLabel="une réalisation" />
      </Reveal>
    </main>
  );
}
