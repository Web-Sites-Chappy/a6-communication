export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceCTA {
  /** Le texte qui suit "A6" dans le CTA, ex. "nous construisions…" — voir CTASection. */
  sentence: string;
  buttonLabel: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  category: "Communication" | "Événementiel";
  categorySlug: "communication" | "evenementiel";
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  color: string;
  deliverables: ServiceDeliverable[];
  /** Paragraphes détaillant notre méthode pour ce service — affichés sous les livrables. */
  approach: string[];
  /** Slugs d'articles de blog en lien direct avec ce service (maillage services → blog). */
  relatedArticleSlugs: string[];
  faq: ServiceFaqItem[];
  cta: ServiceCTA;
  /** Image dédiée au carousel de services (bas de page) — jamais partagée entre deux services. */
  carouselImage: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "strategie-digitale",
    title: "Stratégie digitale",
    category: "Communication",
    categorySlug: "communication",
    shortDescription: "Audit, plan de communication, présence sur les réseaux sociaux adaptée à vos cibles.",
    fullDescription: "Une stratégie digitale réussie repose sur une compréhension fine de vos enjeux, de vos publics et de votre écosystème. A6 Communication vous accompagne dans la formalisation d'un plan d'action numérique structuré, orienté résultats et parfaitement aligné avec l'identité de votre organisation.",
    heroImage: "/photos/services/strategie-digitale-hero-v2.webp",
    color: "var(--c-rouge-fg)",
    deliverables: [
      {
        title: "Audit d'écosystème",
        description: "Analyse approfondie de votre présence en ligne existante, évaluation de vos canaux actuels et benchmark concurrentiel."
      },
      {
        title: "Plan de communication digital",
        description: "Feuille de route stratégique complète : définition des objectifs, des canaux prioritaires, de la ligne éditoriale et du planning de déploiement."
      },
      {
        title: "Community Management & Réseaux sociaux",
        description: "Animation sur mesure de vos communautés sur LinkedIn, Instagram, Facebook et X avec des formats adaptés à chaque cible."
      },
      {
        title: "Mesure de performance & KPIs",
        description: "Mise en place d'indicateurs clés, tableaux de bord de suivi et recommandations d'optimisation en continu."
      }
    ],
    approach: [
      "Nous commençons toujours par regarder ce qui existe déjà : vos canaux actuels, votre concurrence directe et la façon dont vos publics parlent réellement de vous en ligne. Cet audit d'écosystème sert de socle à tout ce qui suit, plutôt que de partir d'une page blanche ou d'un modèle générique.",
      "Le plan de communication qui en résulte fixe des priorités claires plutôt qu'une présence tous azimuts : quels canaux, avec quelle fréquence, pour quels objectifs mesurables. L'animation des réseaux sociaux et le suivi des KPIs s'inscrivent ensuite dans cette feuille de route, avec des ajustements réguliers plutôt qu'un plan figé pour l'année.",
    ],
    relatedArticleSlugs: ["agence-communication-digitale-montpellier", "choisir-agence-communication"],
    faq: [
      {
        question: "Faut-il déjà avoir une présence en ligne pour commencer ?",
        answer:
          "Non. L'audit d'écosystème part de ce qui existe, même une présence minimale ou inexistante, et sert justement à établir un point de départ objectif plutôt que de supposer un niveau de maturité digitale.",
      },
      {
        question: "Gérez-vous l'animation au quotidien ou seulement la stratégie ?",
        answer:
          "Les deux si besoin : le plan de communication digital fixe le cap, et l'animation des réseaux sociaux peut être assurée en continu par nos équipes ou transmise aux vôtres selon votre organisation interne.",
      },
    ],
    cta: { sentence: "nous construisions…", buttonLabel: "votre stratégie" },
    carouselImage: "/photos/services/strategie-digitale-1-v2.webp"
  },
  {
    slug: "identite-visuelle",
    title: "Identité visuelle",
    category: "Communication",
    categorySlug: "communication",
    shortDescription: "Création ou refonte de logo, charte graphique, supports de communication print et web.",
    fullDescription: "Votre identité visuelle est la première empreinte de votre marque. Nous concevons des univers graphiques forts, cohérents et pérennes qui expriment votre singularité, valorisent votre message et renforcent votre notoriété sur tous vos supports physiques et numériques.",
    heroImage: "/photos/services/identite-visuelle-hero-v2.webp",
    color: "var(--c-rouge-fg)",
    deliverables: [
      {
        title: "Création & Refonte de Logo",
        description: "Conception graphique originale reflétant les valeurs et l'ambition de votre structure, déclinable sous tous formats."
      },
      {
        title: "Charte graphique complète",
        description: "Guide des normes visuelles : typographies, palettes chromatiques, règles de composition, déclinaisons autorisées et interdites."
      },
      {
        title: "Papeterie & Supports institutionnels",
        description: "Design de vos cartes de visite, papiers en-tête, plaquettes de présentation, chemises à rabats et brochures d'information."
      },
      {
        title: "Templates & Déclinaisons Web",
        description: "Gabarits personnalisés pour vos présentations (PowerPoint/Keynote), newsletters, et visuels pour réseaux sociaux."
      }
    ],
    approach: [
      "Une identité visuelle qui tient dans le temps se construit à partir de ce que votre structure est réellement, pas d'une tendance graphique du moment. Nous prenons le temps de comprendre votre histoire, vos valeurs et votre positionnement avant la première esquisse de logo.",
      "La charte graphique qui suit n'est pas un document décoratif : elle fixe des règles précises (typographies, palette, usages autorisés et interdits) pour que votre image reste cohérente que ce soit vous, un imprimeur ou un partenaire qui l'applique, sur un support papier comme sur un écran.",
    ],
    relatedArticleSlugs: ["creation-identite-marque-etapes", "identite-visuelle-agence-attendre", "charte-graphique-utile"],
    faq: [
      {
        question: "Créez-vous un logo, ou aussi toute l'identité qui va avec ?",
        answer:
          "Les deux : le logo n'est que le point de départ. La charte graphique complète (typographies, palette, règles de composition) est ce qui garantit que l'identité reste cohérente sur tous vos supports, bien après notre intervention.",
      },
      {
        question: "Que se passe-t-il si nous avons déjà un logo mais pas de charte ?",
        answer:
          "C'est une situation fréquente : nous pouvons formaliser une charte graphique à partir d'un logo existant, sans forcément le refondre, si son socle reste solide.",
      },
    ],
    cta: { sentence: "nous façonnions…", buttonLabel: "votre image" },
    carouselImage: "/photos/services/identite-visuelle-1-v2.webp"
  },
  {
    slug: "production-de-contenus",
    title: "Production de contenus",
    category: "Communication",
    categorySlug: "communication",
    shortDescription: "Rédaction, photographie, vidéo : des contenus qui racontent votre histoire.",
    fullDescription: "Le contenu est le cœur battant de toute stratégie de communication efficace. A6 crée des récits authentiques et captivants. Qu'il s'agisse de mots, d'images fixes ou en mouvement, nos productions mettent en lumière votre savoir-faire et engagent vos publics.",
    heroImage: "/photos/services/production-de-contenus-hero-v2.webp",
    color: "var(--c-rouge-fg)",
    deliverables: [
      {
        title: "Rédaction éditoriale & Storytelling",
        description: "Conception et rédaction d'articles de fond, dossiers thématiques, interviews d'experts et contenus optimisés pour le web."
      },
      {
        title: "Reportages photographiques",
        description: "Prises de vues professionnelles sur le terrain : portraits d'équipe, reportages métiers, infrastructures, villages, lieux et aménagement du territoire adaptés au public de l'architecture."
      },
      {
        title: "Production vidéo & Motion Design",
        description: "Réalisation de capsules vidéo promotionnelles, interviews croisées, teasers et animations graphiques pédagogiques."
      },
      {
        title: "Rapports & Publications de marque",
        description: "Rédaction, mise en page et suivi de réalisation de vos rapports d'activité, livres blancs et journaux internes."
      }
    ],
    approach: [
      "Un bon contenu institutionnel ne cherche pas à impressionner, il cherche à être compris et retenu. Nos rédactions partent toujours d'un entretien réel avec les personnes concernées, jamais d'un remplissage générique autour d'un mot-clé.",
      "Côté image, qu'il s'agisse d'un reportage photo sur un chantier, d'un portrait d'équipe ou d'une captation vidéo d'événement, nous privilégions le terrain réel à la banque d'images : vos publics reconnaissent la différence, et c'est elle qui construit la confiance.",
    ],
    relatedArticleSlugs: ["captation-video-evenement"],
    faq: [
      {
        question: "Faut-il fournir nos propres photos ou pouvez-vous les réaliser ?",
        answer:
          "Nous réalisons nos propres reportages photographiques sur le terrain plutôt que de nous appuyer sur une banque d'images : portraits d'équipe, chantiers, lieux, aménagement du territoire adaptés au public de l'architecture et du bâtiment.",
      },
      {
        question: "Produisez-vous aussi de la vidéo, ou seulement de l'écrit ?",
        answer:
          "Les trois formats (rédaction, photo, vidéo) sont couverts par ce service, du reportage métier à la captation d'événement, avec la possibilité de ne mobiliser qu'un seul format si c'est votre besoin réel.",
      },
    ],
    cta: { sentence: "nous racontions…", buttonLabel: "votre histoire" },
    carouselImage: "/photos/services/production-de-contenus-1-v2.webp"
  },
  {
    slug: "impressions-signaletique",
    title: "Impressions / Signalétique",
    category: "Communication",
    categorySlug: "communication",
    shortDescription: "Supports imprimés, panneaux, habillage de sites et signalétique événementielle.",
    fullDescription: "Du papier aux grands formats d'exposition, nous donnons une réalité matérielle à votre image de marque. A6 supervise la fabrication de l'ensemble de vos supports imprimés et de votre signalétique pour assurer une présence physique impeccable et impactante.",
    heroImage: "/photos/services/impressions-signaletique-hero-v2.webp",
    color: "var(--c-rouge-fg)",
    deliverables: [
      {
        title: "Impression Print Tous Formats",
        description: "Dépliants, affiches, catalogues, programmes et textiles avec sélection rigoureuse des papiers, tissus et fabrication européenne."
      },
      {
        title: "Signalétique événementielle mobile",
        description: "Kakémonos, roll-ups, totems, bannières extérieures, comptoirs d'accueil et structures autoportantes."
      },
      {
        title: "Habillage extérieur / intérieur",
        description: "Véhicules, vitrines, marquages vitrophanies, plaques professionnelles, panneaux directionnels et décoration murale thématique."
      },
      {
        title: "Gestion de fabrication & Contrôle",
        description: "Pilotage complet auprès de nos imprimeurs partenaires, suivi des BÁT et livraison directement sur vos lieux d'action."
      }
    ],
    approach: [
      "La signalétique d'un événement se pense avant l'impression, pas après : flux de circulation, points de repère, distance de lecture. Une bannière posée au mauvais endroit ou dans une taille de police illisible à 3 mètres ne sert à rien, quelle que soit la qualité du visuel.",
      "Nous pilotons la fabrication de bout en bout auprès de nos imprimeurs partenaires : choix des papiers et tissus, validation des BAT, livraison directement sur le lieu de votre événement ou de votre structure, pour que la partie matérielle de votre image ne repose pas sur vos épaules.",
    ],
    relatedArticleSlugs: ["signaletique-evenementielle-regles"],
    faq: [
      {
        question: "Gérez-vous la fabrication ou seulement le design des supports ?",
        answer:
          "Nous pilotons l'ensemble, de la conception graphique à la livraison, en passant par le choix des papiers et tissus et le suivi des BAT auprès de nos imprimeurs partenaires.",
      },
      {
        question: "Pouvez-vous intervenir sur un site patrimonial où l'affichage est contraint ?",
        answer:
          "Oui, un bâtiment classé interdit en général toute fixation murale : nous travaillons alors sur pied (totems lestés, chevalets, potences autoportantes), en repérant la contrainte avant la fabrication plutôt qu'à la livraison.",
      },
    ],
    cta: { sentence: "nous revêtions…", buttonLabel: "vos supports" },
    carouselImage: "/photos/services/impressions-signaletique-1-v2.webp"
  },
  {
    slug: "conception-et-scenographie",
    title: "Conception & scénographie",
    category: "Événementiel",
    categorySlug: "evenementiel",
    shortDescription: "Création du concept, du programme et de l'identité visuelle de l'événement.",
    fullDescription: "Un événement marquant s'appuie sur une narration forte et un univers visuel immersif. Nous concevons l'architecture globale de votre rassemblement : de l'idée créative originale à l'aménagement des espaces scéniques, en passant par le rythme de vos temps forts.",
    heroImage: "/photos/services/conception-et-scenographie-hero-v2.webp",
    color: "var(--c-rouge)",
    deliverables: [
      {
        title: "Concept créatif & Thématique",
        description: "Élaboration du fil conducteur, du ton de l'événement et de sa promesse auprès de vos invités."
      },
      {
        title: "Programmation & Articulation des temps forts",
        description: "Construction du déroulé heure par heure, alternance entre conférences, ateliers de réflexion et moments de convivialité."
      },
      {
        title: "Scénographie & Design d'espace",
        description: "Mise en scène des plateaux, design des scènes, ambiances lumineuses et intégration des éléments de marque."
      },
      {
        title: "Charte graphique événementielle",
        description: "Création du logo de l'événement, habillage vidéo des écrans de scène et déclinaison sur tous les supports."
      }
    ],
    approach: [
      "Un congrès de fédération, une inauguration patrimoniale ou une assemblée générale n'obéissent pas aux mêmes codes : la scénographie que nous concevons part toujours du public réel de l'événement et de ce qu'il attend, pas d'un modèle de plateau standard.",
      "Le déroulé heure par heure vient ensuite fixer l'alternance entre temps institutionnels, ateliers et moments de convivialité, en gardant à l'esprit qu'un rythme trop dense fatigue une salle aussi sûrement qu'un rythme trop lâche la perd.",
    ],
    relatedArticleSlugs: ["organiser-congres-federation", "evenementiel-culturel-patrimoine"],
    faq: [
      {
        question: "Intervenez-vous sur des lieux patrimoniaux ou classés ?",
        answer:
          "Oui, c'est un terrain que nous connaissons bien : la scénographie y doit composer avec des contraintes de conservation et de circulation qu'un lieu neutre n'impose pas, sans jamais sacrifier l'une à l'autre.",
      },
      {
        question: "À partir de quand faut-il vous solliciter pour un congrès ou une inauguration ?",
        answer:
          "Le plus tôt possible : le concept créatif et le déroulé heure par heure conditionnent ensuite la logistique et la signalétique, un cadrage tardif réduit toujours les options disponibles.",
      },
    ],
    cta: { sentence: "nous concevions…", buttonLabel: "votre événement" },
    carouselImage: "/photos/services/conception-et-scenographie-1-v2.webp"
  },
  {
    slug: "logistique",
    title: "Logistique",
    category: "Événementiel",
    categorySlug: "evenementiel",
    shortDescription: "Gestion des prestataires, des espaces, de la technique, de l'accueil et des autorisations administratives.",
    fullDescription: "Une organisation sans faille pour garantir le succès de votre événement et votre tranquillité. A6 orchestre l'ensemble de la chaîne opérationnelle : repérage des lieux, coordination des équipes techniques, traiteurs, sécurité, accueil du public et gestion des autorisations administratives.",
    heroImage: "/photos/services/logistique-hero-v2.webp",
    color: "var(--c-rouge)",
    deliverables: [
      {
        title: "Gestion des espaces",
        description: "Recherche du lieu idéal, négociations tarifaires, aménagement technique et gestion des accès."
      },
      {
        title: "Coordination des prestataires & Autorisations",
        description: "Pilotage complet des traiteurs, équipes audiovisuelles, techniciens son/lumière, agents de sécurité, accueil et gestion des autorisations administratives."
      },
      {
        title: "Régie Générale & Pilotage Jour J",
        description: "Présence d'un régisseur dédié le jour de l'événement pour veiller au respect du timing et gérer les imprévus."
      },
      {
        title: "Gestion des invités & Emargement",
        description: "Accueil physique, remise des badges, orientation des flux et gestion des vestiaires."
      }
    ],
    approach: [
      "La logistique est la partie invisible d'un événement réussi : quand tout se passe bien, personne n'y pense. Nous repérons les lieux en amont, négocions les conditions techniques et anticipons les autorisations administratives plutôt que de les découvrir la semaine précédente.",
      "Le jour J, un régisseur dédié suit le déroulé en temps réel et absorbe les imprévus (retard d'un intervenant, changement de salle, problème technique) sans que vos équipes ou vos invités n'aient à s'en préoccuper.",
    ],
    relatedArticleSlugs: ["budget-evenement-corporate", "organiser-congres-federation"],
    faq: [
      {
        question: "Gérez-vous aussi les autorisations administratives ?",
        answer:
          "Oui, la coordination des autorisations (occupation du domaine public, sécurité, débits de boissons temporaires selon la programmation) fait partie du pilotage, pas une démarche annexe laissée à votre charge.",
      },
      {
        question: "Y a-t-il quelqu'un sur place le jour de l'événement ?",
        answer:
          "Oui, un régisseur dédié suit le déroulé en temps réel pour absorber les imprévus, plutôt qu'un simple point de contact joignable par téléphone.",
      },
    ],
    cta: { sentence: "nous orchestrions…", buttonLabel: "votre événement" },
    carouselImage: "/photos/services/logistique-1-v2.webp"
  },
  {
    slug: "animation",
    title: "Animation",
    category: "Événementiel",
    categorySlug: "evenementiel",
    shortDescription: "Modération, animation de tables rondes, intervenants, moments conviviaux.",
    fullDescription: "L'animation est le moteur de l'engagement de votre audience. Nous rythmons vos interventions, animons vos tables rondes avec clarté et bienveillance, et concevons des moments d'échange et de convivialité qui favorisent le réseautage et la cohésion.",
    heroImage: "/photos/services/animation-hero-v2.webp",
    color: "var(--c-rouge)",
    deliverables: [
      {
        title: "Modération & Animation de scènes",
        description: "Prise de parole fluide pour introduire les temps forts, présenter les intervenants et tenir le fil du programme."
      },
      {
        title: "Conduite de tables rondes",
        description: "Préparation des trames d'interrogation, relance des débats, synthèse des arguments et gestion du temps."
      },
      {
        title: "Recherche & Briefing d'intervenants",
        description: "Identification de grands témoins ou conférenciers spécialisés, accompagnement dans la préparation de leurs prises de parole."
      },
      {
        title: "Ateliers interactifs & Networking",
        description: "Mise en place de mécaniques d'interaction avec la salle (Q&R, sondages en direct) et séquences conviviales."
      }
    ],
    approach: [
      "Animer une table ronde institutionnelle demande un équilibre précis : relancer le débat sans monopoliser la parole, respecter le temps imparti sans couper une réponse en plein élan. Nous préparons chaque trame d'interrogation avec les intervenants en amont, jamais dans l'improvisation totale.",
      "Le briefing des grands témoins ou conférenciers spécialisés fait partie du même travail : s'assurer que leur intervention réponde à ce que le public est venu chercher, et non à ce qu'il serait commode de dire.",
    ],
    relatedArticleSlugs: ["organiser-congres-federation"],
    faq: [
      {
        question: "Fournissez-vous aussi les intervenants ou seulement l'animation ?",
        answer:
          "Nous pouvons faire les deux : identifier et briefer des grands témoins ou conférenciers spécialisés en amont, puis assurer l'animation le jour même, ou simplement animer des intervenants que vous avez déjà choisis.",
      },
      {
        question: "Préparez-vous les questions à l'avance avec les intervenants ?",
        answer:
          "Oui, toujours : la trame d'interrogation d'une table ronde se construit avec les intervenants en amont, jamais dans l'improvisation totale devant le public.",
      },
    ],
    cta: { sentence: "nous animions…", buttonLabel: "vos rendez-vous" },
    carouselImage: "/photos/services/animation-1-v2.webp"
  },
  {
    slug: "relations-presse",
    title: "Relations presse",
    category: "Événementiel",
    categorySlug: "evenementiel",
    shortDescription: "Relations presse, communiqués et dossiers de presse, médiatisation avant, pendant et après l'événement.",
    fullDescription: "Une couverture médiatique ciblée et impactante pour amplifier votre visibilité. A6 élabore vos stratégies de relations presse, dossiers de presse, communiqués et accueil des journalistes pour des retombées régionales et nationales à la hauteur de vos ambitions.",
    heroImage: "/photos/services/relations-presse-hero-v2.webp",
    color: "var(--c-rouge)",
    deliverables: [
      {
        title: "Relations Presse & Communiqués",
        description: "Conception, rédaction et diffusion des communiqués de presse auprès des médias régionaux et spécialisés."
      },
      {
        title: "Dossiers de presse & Media kit",
        description: "Réalisation de dossiers de presse complets et kits médias pour la valorisation de vos événements et projets."
      },
      {
        title: "Accueil & Coordination des journalistes",
        description: "Organisation des conférences de presse, accueil sur le terrain et accompagnement pour les interviews."
      },
      {
        title: "Revue de presse & Bilan média",
        description: "Suivi des retombées médiatiques, création de la revue de presse et bilan d'impact quantitatif et qualitatif."
      }
    ],
    approach: [
      "Une bonne relation presse ne se limite pas à l'envoi d'un communiqué : elle suppose de connaître les journalistes régionaux et spécialisés qui couvrent réellement votre secteur, et de leur apporter une information utile plutôt qu'une sollicitation de plus.",
      "Après l'événement, la revue de presse et le bilan média servent à mesurer ce qui a réellement porté, pour ajuster la stratégie de la prochaine prise de parole plutôt que de reconduire la même approche par habitude.",
    ],
    relatedArticleSlugs: [],
    faq: [
      {
        question: "Rédigez-vous les communiqués ou seulement la diffusion ?",
        answer:
          "Les deux : la conception et la rédaction des communiqués de presse font partie du service, pas seulement leur envoi à une liste de contacts médias.",
      },
      {
        question: "Faites-vous le bilan des retombées après l'événement ?",
        answer:
          "Oui, la revue de presse et le bilan média mesurent ce qui a réellement porté, pour ajuster la prochaine prise de parole plutôt que reconduire la même approche par habitude.",
      },
    ],
    cta: { sentence: "nous donnions de l’écho à…", buttonLabel: "votre voix" },
    carouselImage: "/photos/services/relations-presse-1-v2.webp"
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: "Communication" | "Événementiel"): ServiceItem[] {
  return servicesData.filter((service) => service.category === category);
}
