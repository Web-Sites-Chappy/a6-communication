export interface ClientSegmentCaseStudy {
  title: string;
  description: string;
}

export interface ClientSegmentFaqItem {
  question: string;
  answer: string;
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
  faq: ClientSegmentFaqItem[];
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
    imgAlt: "Un artisan taille un bloc de pierre au maillet et au ciseau",
    desc: "Architectes, PME, PMI, Artisans : A6 accompagne les acteurs de l'acte de bâtir dans leur communication et leurs événements.",
    intro: [
      "Un ordre professionnel ou une fédération ne parle jamais en son seul nom : chaque prise de parole engage ses membres, ses tutelles et parfois des confrères qui attendent l'erreur. La communication institutionnelle demande une rigueur différente de la communication commerciale, une rigueur que nous pratiquons avec les acteurs de l'Acte et Art de Bâtir depuis notre activité antérieure documentée.",
      "Cabinets d'architecture, ordres régionaux, associations professionnelles du bâtiment : nous connaissons les contraintes propres à ce secteur, de la neutralité éditoriale à la nécessité de tenir un discours cohérent sur plusieurs mandatures.",
      "Notre positionnement s'appuie sur une double compétence rare : l'esprit numérique de Manuel Dalla Zanna pour la structuration digitale du message, et l'esprit poétique d'Eric Gibaja pour la mise en récit et la scénographie des temps forts. Les deux registres sont nécessaires pour qu'une institution reste crédible sans devenir froide.",
    ],
    caseStudy: {
      title: "Ordre des Architectes Occitanie",
      description:
        "Une conférence de Clément Gaillard à Montpellier autour de son ouvrage « Habiter un climat », et un événement de coopération transfrontalière à Barcelone autour du film « Penser l'incertitude », s'ajoutent aux Rendez-vous de l'Architecture 2025, réunion régionale de plusieurs centaines de professionnels de l'ordre.",
    },
    faq: [
      {
        question: "Travaillez-vous uniquement avec les ordres d'architectes ?",
        answer:
          "Non. Notre référence documentée est l'Ordre des Architectes Occitanie, mais la méthode s'applique à tout ordre professionnel ou fédération du secteur du bâtiment : neutralité éditoriale, discours cohérent devant des publics contradictoires, et respect des contraintes propres à une profession réglementée.",
      },
      {
        question: "Comment se déroule une première prise de contact ?",
        answer:
          "Un premier échange sert à cadrer le besoin réel (communication continue, événement ponctuel, ou les deux) et le budget disponible, avant toute proposition. Aucune offre standardisée : le cadrage précède toujours la méthode.",
      },
      {
        question: "Intervenez-vous en dehors de l'Occitanie ?",
        answer:
          "Oui, notre coopération avec le CROA Occitanie autour du film « Penser l'incertitude » s'est tenue à Barcelone. La zone de service principale reste l'Occitanie, mais un projet institutionnel ponctuel ailleurs reste possible selon le format.",
      },
    ],
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
    img: "/photos/nos-clients/institution-institut-de-france.webp",
    imgAlt: "L'Institut de France vu depuis le Pont des Arts, à Paris",
    desc: "Fondations du patrimoine, associations culturelles, institutions, musées et lieux de mémoire : partout où l'histoire et la culture méritent d'être racontées et valorisées.",
    intro: [
      "Un site patrimonial, un musée ou un lieu de mémoire n'est jamais un simple décor : c'est le sujet de l'événement, et il impose ses propres contraintes de conservation, d'occupation et de circulation. Une scénographie mal pensée peut réussir l'événement et abîmer le patrimoine — l'équilibre entre les deux est au cœur de notre pratique événementielle.",
      "Nous accompagnons fondations, associations culturelles, institutions et lieux de mémoire dans des projets qui donnent à voir leur histoire sans jamais la dénaturer, en coordination avec les interlocuteurs multiples qu'implique un immeuble ou un site protégé.",
      "Le rayonnement international n'est pas incompatible avec le respect du lieu : notre accompagnement de la Fondation Magos a associé une institution espagnole, un partenaire onusien (Nobel Women's Initiative) et une collectivité locale (Diputación de Málaga) autour d'une même mise en récit patrimoniale.",
    ],
    caseStudy: {
      title: "Fondation Magos",
      description:
        "Inauguration à Málaga (15-16 novembre 2024) de l'exposition « Tesoro de los Magos », consacrée aux royaumes et à la spiritualité anciens, en partenariat avec le Centre UNESCO d'Andalousie, la Nobel Women's Initiative et la Diputación de Málaga.",
    },
    faq: [
      {
        question: "Accompagnez-vous des sites classés monuments historiques ?",
        answer:
          "Oui, c'est notre terrain de prédilection. Chaque projet démarre par une cartographie des interlocuteurs concernés (propriétaire ou affectataire, services de l'État chargés du patrimoine, commune, commission de sécurité) avant la première esquisse de scénographie.",
      },
      {
        question: "Comment se déroule une première prise de contact ?",
        answer:
          "Un premier échange sert à comprendre le lieu, ses contraintes de conservation et l'ambition réelle du projet, avant de proposer un format et un budget adaptés — jamais une scénographie standard plaquée sur un site patrimonial.",
      },
      {
        question: "Travaillez-vous à l'international ?",
        answer:
          "Oui, notre accompagnement de la Fondation Magos à Málaga (novembre 2024) en est la preuve documentée, en partenariat avec le Centre UNESCO d'Andalousie et la Nobel Women's Initiative.",
      },
    ],
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
      "Nous n'avons pas encore de référence collectivité publiable sur ce site — nos cas documentés à ce jour concernent l'institutionnel, le culturel et l'associatif. Nous préférons le dire plutôt que de présenter une preuve qui n'existe pas : la méthode reste la même, elle n'a simplement pas encore de vitrine ici.",
    ],
    faq: [
      {
        question: "Quel budget prévoir pour une petite commune ?",
        answer:
          "Il n'existe pas de tarif unique : le budget se cadre après un premier échange sur le format réel (bulletin municipal, inauguration, réunion publique) et les moyens de la collectivité. Notre approche est justement pensée pour rester abordable à l'échelle d'une commune de moins de 1 000 habitants.",
      },
      {
        question: "Connaissez-vous les règles de la commande publique ?",
        answer:
          "Oui, la sélection d'un prestataire par une collectivité obéit à des règles de mise en concurrence encadrées par le code de la commande publique, avec des critères annoncés et pondérés. Nous répondons à ce cadre plutôt que de le découvrir en cours de mission.",
      },
      {
        question: "Intervenez-vous aussi pour les intercommunalités ?",
        answer:
          "Oui, l'accompagnement s'adapte à l'échelle : commune isolée, intercommunalité, ou collectivité territoriale plus large, avec le même principe de communication sobre et accessible à toute la population.",
      },
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
    imgAlt: "Groupe de membres échangeant lors d'un événement associatif",
    desc: "Associations culturelles, politiques, sociales et sportives : A6 met sa capacité à créer du lien et de la mobilisation au service du monde culturel et associatif sous toutes ses formes.",
    intro: [
      "Une association ne dispose ni du budget d'une entreprise ni de la neutralité obligée d'une collectivité : elle porte une cause, un métier ou une tradition avec des moyens réels, souvent bénévoles, qu'il faut respecter plutôt que contourner par des recommandations hors de portée.",
      "Nous accompagnons des associations politiques, sportives, sociales et des compagnonnages traditionnels dans des projets calibrés à leurs moyens véritables, en valorisant ce qui fait leur force : des parcours et des savoir-faire humains qu'aucune grande agence généraliste ne peut raconter de l'intérieur.",
      "Animer une table ronde de compagnonnage ou une assemblée associative demande la même exigence qu'un événement institutionnel : préparer les intervenants, tenir le temps imparti, et rendre vivantes des expertises souvent transmises oralement plutôt qu'écrites.",
    ],
    caseStudy: {
      title: "Compagnons Charpentiers des Devoirs du Tour de France",
      description:
        "Pour les 80 ans de la fusion des Compagnons Charpentiers des Devoirs du Tour de France, notre directeur général a animé la table ronde « Le métier de charpentier, son passé, son avenir… » aux côtés de François Calame (Charpentiers sans frontières), Guillaume Niel (Terrel) et Julien Fournier (Wood&Co).",
    },
    faq: [
      {
        question: "Adaptez-vous vos tarifs aux moyens associatifs ?",
        answer:
          "Oui, c'est le principe même de notre approche pour ce secteur : un projet calibré aux moyens réels de l'association, souvent portés par des bénévoles, plutôt qu'une recommandation hors de portée copiée sur un client corporate.",
      },
      {
        question: "Travaillez-vous avec des compagnonnages traditionnels ?",
        answer:
          "Oui, notre animation de la table ronde des Compagnons Charpentiers des Devoirs du Tour de France pour leurs 80 ans en est la preuve documentée, aux côtés d'intervenants reconnus du métier de charpentier.",
      },
      {
        question: "Comment se déroule une première prise de contact ?",
        answer:
          "Un premier échange sert à comprendre la cause ou le métier porté par l'association, son mode de fonctionnement (bénévole ou salarié) et le format d'événement ou de communication envisagé, avant toute proposition chiffrée.",
      },
    ],
    relatedServiceSlugs: ["animation", "logistique", "strategie-digitale"],
    cta: { sentence: "nous donnions du poids à…", buttonLabel: "votre association" },
  },
];

export function getClientSegmentBySlug(slug: string): ClientSegment | undefined {
  return clientSegments.find((segment) => segment.slug === slug);
}
