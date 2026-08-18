export interface ServiceDeliverable {
  title: string;
  description: string;
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
    heroImage: "/photos/DSC_1019.webp",
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
    cta: { sentence: "nous construisions…", buttonLabel: "votre stratégie" },
    carouselImage: "/photos/services-test/strategie-digitale-1.webp"
  },
  {
    slug: "identite-visuelle",
    title: "Identité visuelle",
    category: "Communication",
    categorySlug: "communication",
    shortDescription: "Création ou refonte de logo, charte graphique, supports de communication print et web.",
    fullDescription: "Votre identité visuelle est la première empreinte de votre marque. Nous concevons des univers graphiques forts, cohérents et pérennes qui expriment votre singularité, valorisent votre message et renforcent votre notoriété sur tous vos supports physiques et numériques.",
    heroImage: "/photos/DSC_0855.webp",
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
    cta: { sentence: "nous façonnions…", buttonLabel: "votre image" },
    carouselImage: "/photos/services-test/identite-visuelle-1.webp"
  },
  {
    slug: "production-de-contenus",
    title: "Production de contenus",
    category: "Communication",
    categorySlug: "communication",
    shortDescription: "Rédaction, photographie, vidéo : des contenus qui racontent votre histoire.",
    fullDescription: "Le contenu est le cœur battant de toute stratégie de communication efficace. A6 crée des récits authentiques et captivants. Qu'il s'agisse de mots, d'images fixes ou en mouvement, nos productions mettent en lumière votre savoir-faire et engagent vos publics.",
    heroImage: "/photos/DSC_1091.webp",
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
    cta: { sentence: "nous racontions…", buttonLabel: "votre histoire" },
    carouselImage: "/photos/services-test/production-de-contenus-1.webp"
  },
  {
    slug: "impressions-signaletique",
    title: "Impressions / Signalétique",
    category: "Communication",
    categorySlug: "communication",
    shortDescription: "Supports imprimés, panneaux, habillage de sites et signalétique événementielle.",
    fullDescription: "Du papier aux grands formats d'exposition, nous donnons une réalité matérielle à votre image de marque. A6 supervise la fabrication de l'ensemble de vos supports imprimés et de votre signalétique pour assurer une présence physique impeccable et impactante.",
    heroImage: "/photos/DSC_0802.webp",
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
    cta: { sentence: "nous revêtions…", buttonLabel: "vos supports" },
    carouselImage: "/photos/services-test/impressions-signaletique-1.webp"
  },
  {
    slug: "conception-et-scenographie",
    title: "Conception & scénographie",
    category: "Événementiel",
    categorySlug: "evenementiel",
    shortDescription: "Création du concept, du programme et de l'identité visuelle de l'événement.",
    fullDescription: "Un événement marquant s'appuie sur une narration forte et un univers visuel immersif. Nous concevons l'architecture globale de votre rassemblement : de l'idée créative originale à l'aménagement des espaces scéniques, en passant par le rythme de vos temps forts.",
    heroImage: "/photos/DSC_0836.webp",
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
    cta: { sentence: "nous concevions…", buttonLabel: "votre événement" },
    carouselImage: "/photos/services-test/conception-et-scenographie-1.webp"
  },
  {
    slug: "logistique",
    title: "Logistique",
    category: "Événementiel",
    categorySlug: "evenementiel",
    shortDescription: "Gestion des prestataires, des espaces, de la technique, de l'accueil et des autorisations administratives.",
    fullDescription: "Une organisation sans faille pour garantir le succès de votre événement et votre tranquillité. A6 orchestre l'ensemble de la chaîne opérationnelle : repérage des lieux, coordination des équipes techniques, traiteurs, sécurité, accueil du public et gestion des autorisations administratives.",
    heroImage: "/photos/DSC_1019.webp",
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
    cta: { sentence: "nous orchestrions…", buttonLabel: "votre événement" },
    carouselImage: "/photos/services-test/logistique-1.webp"
  },
  {
    slug: "animation",
    title: "Animation",
    category: "Événementiel",
    categorySlug: "evenementiel",
    shortDescription: "Modération, animation de tables rondes, intervenants, moments conviviaux.",
    fullDescription: "L'animation est le moteur de l'engagement de votre audience. Nous rythmons vos interventions, animons vos tables rondes avec clarté et bienveillance, et concevons des moments d'échange et de convivialité qui favorisent le réseautage et la cohésion.",
    heroImage: "/photos/DSC_0855.webp",
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
    cta: { sentence: "nous animions…", buttonLabel: "vos rendez-vous" },
    carouselImage: "/photos/services-test/animation-1.webp"
  },
  {
    slug: "relations-presse",
    title: "Relations presse",
    category: "Événementiel",
    categorySlug: "evenementiel",
    shortDescription: "Relations presse, communiqués et dossiers de presse, médiatisation avant, pendant et après l'événement.",
    fullDescription: "Une couverture médiatique ciblée et impactante pour amplifier votre visibilité. A6 élabore vos stratégies de relations presse, dossiers de presse, communiqués et accueil des journalistes pour des retombées régionales et nationales à la hauteur de vos ambitions.",
    heroImage: "/photos/DSC_1091.webp",
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
    cta: { sentence: "nous donnions de l’écho à…", buttonLabel: "votre voix" },
    carouselImage: "/photos/services-test/relations-presse-1.webp"
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: "Communication" | "Événementiel"): ServiceItem[] {
  return servicesData.filter((service) => service.category === category);
}
