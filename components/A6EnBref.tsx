import Reveal from "@/components/Reveal";
import { RollingList, type RollingListItem } from "@/components/ui/rolling-list";

const sixA: RollingListItem[] = [
  {
    id: "alchimie",
    title: "Alchimie",
    label: "01",
    imageSrc: "/photos/DSC_0855.jpg",
    imageAlt: "Alchimie",
    description:
      "Les regards ont un langage que les mots ne peuvent pas capturer et quand ces mots quittent le silence par une réelle connexion, ils coulent naturellement vers une Alchimie intellectuelle, émotionnelle et créatrice qui va bien au-delà des apparences.",
  },
  {
    id: "audace",
    title: "Audace",
    label: "02",
    imageSrc: "/photos/DSC_1019.jpg",
    imageAlt: "Audace",
    description:
      "Le courage est de croire en ce qui n’est pas encore visible mais aussi celui d’examiner la vérité sans se fier aux idées reçues. Ainsi l’Audace propulse à l’évidence d’être soi-même, dans ses doutes, ses décisions, sa sensibilité, et permet de sortir de sa zone de confort.",
  },
  {
    id: "acceptation",
    title: "Acceptation",
    label: "03",
    imageSrc: "/photos/DSC_0802.jpg",
    imageAlt: "Acceptation",
    description:
      "L’Acceptation ne se commande pas, elle ne se force pas, elle fait simplement partie du chemin qu’il faut emprunter pour avancer. Conscientiser et accueillir qu’on est dans la résistance libère, allège, nous remet en contact avec nos ressources et notre pouvoir d’action — et permet de lâcher prise pour créer.",
  },
  {
    id: "agilite",
    title: "Agilité",
    label: "04",
    imageSrc: "/photos/DSC_1091.jpg",
    imageAlt: "Agilité",
    description:
      "Perçue comme un accélérateur d’innovation, l’Agilité est une évidence de nos jours et doit être un facteur proactif, collaboratif et fondamentalement numérique. L’entreprise mène sa transition culturelle en s’appuyant sur un socle technologique capable de faciliter cette gestion du changement.",
  },
  {
    id: "authenticite",
    title: "Authenticité",
    label: "05",
    imageSrc: "/photos/DSC_0836.jpg",
    imageAlt: "Authenticité",
    description:
      "Communiquer avec honnêteté et ouverture pour accepter sa vulnérabilité procure une transparence constructive, en accord avec son identité et ses valeurs. Cette authenticité génère l’efficacité et l’éthique, et crée des relations humaines et durables.",
  },
  {
    id: "assurance",
    title: "Assurance",
    label: "06",
    imageSrc: "/photos/DSC_0855.jpg",
    imageAlt: "Assurance",
    description:
      "Au service de l’humain avant tout, l’Assurance rapproche la théorie de la pratique. En gardant un œil dans le réel et un autre dans le numérique, elle effectue une veille constante et évite de sacraliser l’innovation pour l’innovation. Un outil digital n’est qu’un outil : ce qui compte, c’est l’usage.",
  },
];

export default function A6EnBref() {
  return (
    <section style={{ padding: "40px 0 20px" }}>
      <Reveal
        style={{
          width: "var(--w-max)",
          maxWidth: "var(--w-limit-text)",
          margin: "0 auto",
          padding: "0 0 30px",
          textAlign: "center",
        }}
      >
        <h2>A6 en bref…</h2>
        <p
          style={{
            marginTop: "24px",
            fontSize: "1rem",
            lineHeight: "1.7em",
            fontFamily: "var(--font-body)",
            color: "var(--c-navy)",
            maxWidth: "640px",
            margin: "24px auto 0",
          }}
        >
          A6 Communication &amp; Événementiel se targue d’être dirigée par deux associés
          complémentaires et atypiques. Manuel, pas encore la trentaine et son incontournable
          esprit numérique, et Eric, la cinquantaine passée et son indéfectible esprit poétique.
        </p>
        <p
          style={{
            marginTop: "18px",
            fontSize: "1rem",
            lineHeight: "1.7em",
            fontFamily: "var(--font-body)",
            color: "rgba(var(--c-navy-rgb), 0.72)",
            maxWidth: "640px",
            margin: "18px auto 0",
          }}
        >
          Leurs parcours respectifs et leur association n’appartiennent pas au hasard, mais bien à
          ce goût et cette volonté mutuels de participer à cette incontestable mutation, tant dans
          la communication que dans l’événementiel, où l’image et son histoire s’identifient dans
          les&nbsp;6&nbsp;A.
        </p>
      </Reveal>

      <Reveal
        style={{
          width: "var(--w-max)",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "10px 0 40px",
        }}
      >
        <RollingList items={sixA} />
      </Reveal>
    </section>
  );
}
