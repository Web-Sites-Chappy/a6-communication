export interface ClientSegmentCaseStudy {
  title: string;
  description: string;
}

export interface ClientSegment {
  slug: string;
  title: string;
  /** Mot-clé principal visé, issu du KEYWORD-MAP. */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  img: string;
  imgAlt: string;
  /** Résumé court affiché sur la carte de /nos-clients. */
  desc: string;
  /** Paragraphes développés, affichés sur la page dédiée /nos-clients/[slug]. */
  intro: string[];
  /** Cas réel documenté pour ce segment. Omis plutôt qu'inventé quand nous n'en avons pas encore un. */
  caseStudy?: ClientSegmentCaseStudy;
  relatedServiceSlugs: string[];
  cta: { sentence: string; buttonLabel: string };
}

export const clientSegments: ClientSegment[] = [
  {
    slug: "institutionnel",
    title: "Professionnels de l'Acte et Art de Bâtir",
    keyword: "agence communication institutionnelle",
    metaTitle: "Agence communication institutionnelle | A6",
    metaDescription:
      "A6 accompagne cabinets d'architecture, ordres régionaux et associations professionnelles dans leur communication et leurs événements institutionnels.",
    img: "/photos/nos-clients/professionnels-batir.webp",
    imgAlt: "Deux professionnels du bâtiment échangent autour d'un plan architectural",
    desc: "Cabinets d'architecture, ordres régionaux, associations professionnelles : A6 accompagne les acteurs de l'acte de bâtir dans leur communication institutionnelle et événementielle.",
    intro: [
      "Un ordre professionnel ou une fédération ne parle jamais en son seul nom : chaque prise de parole engage ses membres, ses tutelles et parfois des confrères qui attendent l'erreur. La communication institutionnelle demande une rigueur différente de la communication commerciale, une rigueur que nous pratiquons avec les acteurs de l'Acte et Art de Bâtir depuis notre activité antérieure documentée.",
      "Cabinets d'architecture, ordres régionaux, associations professionnelles du bâtiment : nous connaissons les contraintes propres à ce secteur, de la neutralité éditoriale à la nécessité de tenir un discours cohérent sur plusieurs mandatures.",
    ],
    caseStudy: {
      title: "Ordre des Architectes Occitanie",
      description:
        "Une conférence de Clément Gaillard à Montpellier autour de son ouvrage « Habiter un climat », et un événement de coopération transfrontalière à Barcelone autour du film « Penser l'incertitude », s'ajoutent aux Rendez-vous de l'Architecture 2025, réunion régionale de plusieurs centaines de professionnels de l'ordre.",
    },
    relatedServiceSlugs: ["conception-et-scenographie", "relations-presse", "identite-visuelle"],
    cta: { sentence: "nous portions la voix de…", buttonLabel: "votre institution" },
  },
  {
    slug: "culturel",
    title: "Institution",
    keyword: "agence événementiel culturel",
    metaTitle: "Agence événementiel culturel patrimoine | A6",
    metaDescription:
      "A6 accompagne fondations du patrimoine, associations culturelles, musées et lieux de mémoire dans des événements qui font vivre un lieu sans le trahir.",
    img: "/photos/nos-clients/institution-carcassonne.webp",
    imgAlt: "Le château comtal de la cité de Carcassonne, en Occitanie",
    desc: "Fondations du patrimoine, associations culturelles, institutions, musées et lieux de mémoire : partout où l'histoire et la culture méritent d'être racontées et valorisées.",
    intro: [
      "Un site patrimonial, un musée ou un lieu de mémoire n'est jamais un simple décor : c'est le sujet de l'événement, et il impose ses propres contraintes de conservation, d'occupation et de circulation. Une scénographie mal pensée peut réussir l'événement et abîmer le patrimoine — l'équilibre entre les deux est au cœur de notre pratique événementielle.",
      "Nous accompagnons fondations, associations culturelles, institutions et lieux de mémoire dans des projets qui donnent à voir leur histoire sans jamais la dénaturer, en coordination avec les interlocuteurs multiples qu'implique un immeuble ou un site protégé.",
    ],
    caseStudy: {
      title: "Fondation Magos",
      description:
        "Inauguration à Málaga (15-16 novembre 2024) de l'exposition « Tesoro de los Magos », consacrée aux royaumes et à la spiritualité anciens, en partenariat avec le Centre UNESCO d'Andalousie, la Nobel Women's Initiative et la Diputación de Málaga.",
    },
    relatedServiceSlugs: ["conception-et-scenographie", "production-de-contenus", "relations-presse"],
    cta: { sentence: "nous faisions rayonner…", buttonLabel: "votre patrimoine" },
  },
  {
    slug: "collectivites",
    title: "Mairies et collectivités",
    keyword: "agence communication publique",
    metaTitle: "Agence communication publique collectivités | A6",
    metaDescription:
      "A6 accompagne les mairies, intercommunalités et collectivités territoriales dans une communication de proximité, efficace et adaptée à leur budget.",
    img: "/photos/nos-clients/mairies-collectivites.webp",
    imgAlt: "Façade d'une mairie de village française",
    desc: "Particulièrement les communes de moins de 1 000 habitants, les intercommunalités et collectivités qui ont besoin d'une communication de proximité, efficace et abordable.",
    intro: [
      "Les communes de moins de 1 000 habitants et les intercommunalités n'ont ni le budget ni les besoins d'une grande métropole, mais elles ont les mêmes obligations de clarté envers leurs administrés : un bulletin municipal lisible, une inauguration bien préparée, une réunion publique qui informe plutôt qu'elle ne noie l'auditoire d'un jargon technique.",
      "Nous concevons une communication de proximité pensée pour ce format : des supports sobres et accessibles à toute la population, un accompagnement événementiel dimensionné au budget réel d'une collectivité, et une attention particulière aux règles de la commande publique qui encadrent la sélection d'un prestataire.",
    ],
    relatedServiceSlugs: ["impressions-signaletique", "strategie-digitale", "logistique"],
    cta: { sentence: "nous informions…", buttonLabel: "vos administrés" },
  },
  {
    slug: "associations",
    title: "Monde culturel et associatif",
    keyword: "agence communication associations",
    metaTitle: "Agence communication associations | A6",
    metaDescription:
      "A6 accompagne associations politiques, sportives, sociales et compagnonnages dans une communication et des événements à la hauteur de leurs moyens réels.",
    img: "/photos/nos-clients/monde-associatif.webp",
    imgAlt: "Mains jointes en signe d'unité, symbole du monde associatif",
    desc: "Associations politiques, sportives, sociales : A6 met sa capacité à créer du lien et de la mobilisation au service du monde associatif sous toutes ses formes.",
    intro: [
      "Une association ne dispose ni du budget d'une entreprise ni de la neutralité obligée d'une collectivité : elle porte une cause, un métier ou une tradition avec des moyens réels, souvent bénévoles, qu'il faut respecter plutôt que contourner par des recommandations hors de portée.",
      "Nous accompagnons des associations politiques, sportives, sociales et des compagnonnages traditionnels dans des projets calibrés à leurs moyens véritables, en valorisant ce qui fait leur force : des parcours et des savoir-faire humains qu'aucune grande agence généraliste ne peut raconter de l'intérieur.",
    ],
    caseStudy: {
      title: "Compagnons Charpentiers des Devoirs du Tour de France",
      description:
        "Pour les 80 ans de la fusion des Compagnons Charpentiers des Devoirs du Tour de France, notre directeur général a animé la table ronde « Le métier de charpentier, son passé, son avenir… » aux côtés de François Calame (Charpentiers sans frontières), Guillaume Niel (Terrel) et Julien Fournier (Wood&Co).",
    },
    relatedServiceSlugs: ["animation", "logistique", "strategie-digitale"],
    cta: { sentence: "nous donnions du poids à…", buttonLabel: "votre association" },
  },
];

export function getClientSegmentBySlug(slug: string): ClientSegment | undefined {
  return clientSegments.find((segment) => segment.slug === slug);
}
