/**
 * Logos clients — lot livré en version blanche sur transparent, donc destiné à
 * un fond sombre (bande Bleu Nuit du titre « … en bref… »).
 *
 * `displayEm` est une hauteur en em, relative à la taille du titre qui porte la
 * bande : elle égalise le poids optique entre les logos très larges (Ordre des
 * Architectes, OMA) et les logos portrait (pastille + typo empilées).
 */
export interface ClientLogo {
  id: string;
  /** Nom du client — sert d'attribut alt. */
  name: string;
  src: string;
  /** Dimensions intrinsèques du fichier, pour réserver la place (pas de CLS). */
  width: number;
  height: number;
  /** Hauteur d'affichage en em. */
  displayEm: number;
}

export const clientLogos: ClientLogo[] = [
  {
    id: "ordre-architectes",
    name: "Ordre des Architectes Occitanie",
    src: "/logos/ordre-architectes-blanc.webp",
    width: 1400,
    height: 214,
    displayEm: 0.34,
  },
  {
    id: "eva-beaute",
    name: "EVA Beauté",
    src: "/logos/eva-beaute.webp",
    width: 780,
    height: 320,
    displayEm: 0.52,
  },
  {
    id: "portassau",
    name: "Portassau — Peinture, Mur, Sol, Façade",
    src: "/logos/portassau.webp",
    width: 665,
    height: 320,
    displayEm: 0.6,
  },
  {
    id: "oma",
    name: "OMA — Octavio Mestre Arquitectos",
    src: "/logos/oma-octavio-mestre.webp",
    width: 1400,
    height: 186,
    displayEm: 0.34,
  },
  {
    id: "compagnons-tour-de-france",
    name: "Compagnons du Tour de France — Fédération Compagnonnique",
    src: "/logos/compagnons-tour-de-france.webp",
    width: 1245,
    height: 320,
    displayEm: 0.46,
  },
  {
    id: "le-petit-tarbais",
    name: "Le Petit Tarbais",
    src: "/logos/le-petit-tarbais.webp",
    width: 483,
    height: 320,
    displayEm: 0.72,
  },
  {
    id: "magos-foundation",
    name: "Magos Foundation",
    src: "/logos/magos-foundation.webp",
    width: 863,
    height: 320,
    displayEm: 0.5,
  },
];
