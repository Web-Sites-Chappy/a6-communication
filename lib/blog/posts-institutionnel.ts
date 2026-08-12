import type { BlogPost } from "@/lib/blog/types";

/**
 * Cluster institutionnel / public / culturel / associatif — le différenciateur
 * SEO d’A6 selon le SERP-LANDSCAPE : segments quasi vides en concurrence
 * (« agence communication publique » KD 7, « agence événementiel culturel »
 * KD 42, « agence communication institutionnelle » KD 45) et alignés sur les
 * références réelles de l’agence.
 */
export const postsInstitutionnel: BlogPost[] = [
  {
    slug: "communication-institutionnelle-enjeux",
    title: "Communication institutionnelle : définition, enjeux et ce qui la distingue",
    metaTitle: "Communication institutionnelle | A6",
    metaDescription:
      "Ce qu’est la communication institutionnelle, en quoi elle diffère du commercial, et les cinq contraintes qui structurent réellement le travail.",
    keyword: "communication institutionnelle",
    category: "Institutionnel",
    date: "2026-08-04",
    dateLabel: "Août 2026",
    readingMinutes: 8,
    img: "/photos/DSC_0855.webp",
    imgAlt:
      "Prise de parole institutionnelle lors d’un événement professionnel en Occitanie",
    excerpt:
      "La communication institutionnelle ne vend rien : elle établit une légitimité. Cette différence d’objectif change tout — le ton, le rythme, les preuves acceptables et la définition même de la réussite.",
    body: [
      {
        kind: "p",
        text: "La communication institutionnelle est l’ensemble des actions par lesquelles une organisation parle en son nom propre — de ce qu’elle est, de ce qu’elle défend et de la légitimité sur laquelle elle s’appuie — et non de ce qu’elle vend. Elle concerne les ordres professionnels, les fédérations, les collectivités, les établissements publics, les fondations et les associations, mais aussi toute entreprise qui s’adresse à ses parties prenantes plutôt qu’à ses clients.",
      },
      {
        kind: "h2",
        text: "La différence de fond avec la communication commerciale",
        id: "difference-commerciale",
      },
      {
        kind: "p",
        text: "La communication commerciale cherche une décision d’achat : elle peut être insistante, éphémère, segmentée, et elle se mesure en conversions. La communication institutionnelle cherche une reconnaissance : elle doit être tenable dans le temps, cohérente devant des publics contradictoires, et elle se mesure en légitimité perçue. Une campagne institutionnelle brillante mais que l’organisation ne peut pas assumer trois ans plus tard est un échec, même si elle a bien fonctionné.",
      },
      {
        kind: "p",
        text: "Cette différence a une traduction très concrète : en institutionnel, on écarte des idées non parce qu’elles sont mauvaises mais parce qu’elles engagent au-delà de ce que l’organisation peut tenir.",
      },
      {
        kind: "h2",
        text: "Contrainte 1 — Plusieurs publics, un seul discours",
        id: "publics-multiples",
      },
      {
        kind: "p",
        text: "Une institution parle simultanément à ses membres, à ses financeurs, à ses partenaires, aux pouvoirs publics, à la presse et au grand public. Ces publics ont des attentes divergentes et lisent les mêmes messages. On ne peut donc pas segmenter le discours comme on segmente une cible commerciale : il faut un socle unique, décliné en profondeur variable mais jamais en contenu contradictoire.",
      },
      {
        kind: "ul",
        items: [
          "Un socle de messages assumable devant n’importe lequel des publics.",
          "Des déclinaisons qui varient en niveau de détail, pas en position.",
          "Un test simple : ce message tient-il s’il est lu par le public auquel il n’était pas destiné ?",
        ],
      },
      {
        kind: "h2",
        text: "Contrainte 2 — La parole engage une collectivité",
        id: "parole-collective",
      },
      {
        kind: "p",
        text: "Quand un président d’ordre professionnel s’exprime, il engage une profession entière, y compris ses membres qui ne partagent pas son avis. Cela impose un travail de cadrage en amont qui n’existe pas dans le privé : vérifier ce qui relève d’une position votée, ce qui relève d’une opinion personnelle, et ce qui n’a pas été tranché. Un support de communication qui affirme une position non validée met l’institution en difficulté interne.",
      },
      {
        kind: "h2",
        text: "Contrainte 3 — Le circuit de validation est long, et c’est normal",
        id: "validation",
      },
      {
        kind: "p",
        text: "Les délais de validation institutionnels sont souvent vécus comme une lourdeur par les agences habituées au privé. C’est une erreur d’analyse : la collégialité n’est pas un défaut d’organisation, c’est le mode de fonctionnement légitime d’une instance. Le travail consiste à concevoir un rétroplanning qui l’intègre, avec des points de validation formels identifiés, plutôt qu’à espérer des arbitrages rapides.",
      },
      {
        kind: "note",
        text: "Notre règle : deux ou trois validations formelles inscrites au rétroplanning valent mieux qu’une validation continue. La validation continue produit des allers-retours infinis parce qu’aucune décision n’est jamais actée.",
      },
      {
        kind: "h2",
        text: "Contrainte 4 — La neutralité de ton est une obligation, pas un style",
        id: "neutralite",
      },
      {
        kind: "p",
        text: "Le registre institutionnel exclut certaines facilités : l’humour appuyé, la posture provocatrice, l’exagération publicitaire. Ce n’est pas une question de goût mais de position : une institution qui joue l’irrévérence perd la neutralité qui fonde son autorité. Cela ne condamne pas au discours administratif — la sobriété peut être précise, incarnée et vivante. Mais elle ne peut pas être racoleuse.",
      },
      {
        kind: "p",
        text: "C’est aussi ce qui rend le travail d’[identité de marque institutionnelle](/blog/identite-marque-institutionnelle) particulier : les codes du privé s’y transposent mal.",
      },
      {
        kind: "h2",
        text: "Contrainte 5 — Les preuves doivent être sourçables",
        id: "preuves",
      },
      {
        kind: "p",
        text: "Une institution ne peut pas avancer un chiffre qu’elle ne peut pas documenter. Un ordre professionnel qui publie une donnée sur sa filière sera repris par la presse et contesté par ses contradicteurs. Cela impose une discipline que la communication commerciale ignore souvent : toute affirmation chiffrée doit avoir une source identifiable dans le texte.",
      },
      {
        kind: "h2",
        text: "Comment se mesure une communication institutionnelle réussie",
        id: "mesure",
      },
      {
        kind: "p",
        text: "Pas en volume de contacts. Les indicateurs pertinents sont d’une autre nature : est-ce que l’institution est citée comme référence sur ses sujets, est-ce qu’elle est sollicitée par la presse plutôt que l’inverse, est-ce que ses membres reprennent son discours, est-ce que ses interlocuteurs publics la considèrent comme un interlocuteur légitime. Ce sont des indicateurs lents, ce qui exige de la constance.",
      },
      {
        kind: "p",
        text: "C’est le terrain sur lequel A6 travaille — voir [nos clients](/nos-clients) et notre offre de [relations presse](/nos-services/relations-presse). Si vous portez la communication d’une institution en Occitanie, [échangeons](/contact).",
      },
    ],
    faq: [
      {
        question: "Quelle est la différence entre communication institutionnelle et communication corporate ?",
        answer:
          "La communication corporate est le versant institutionnel d’une entreprise : elle parle de l’entreprise elle-même plutôt que de ses produits. La communication institutionnelle au sens large couvre en plus les organisations dont l’objet n’est pas commercial — ordres, fédérations, collectivités, fondations, associations — où la légitimité repose sur un mandat et non sur une performance de marché.",
      },
      {
        question: "Pourquoi les délais sont-ils plus longs en communication institutionnelle ?",
        answer:
          "Parce que la décision est collégiale. Une position engage l’ensemble des membres, ce qui suppose des instances de validation. Ce n’est pas une inefficacité à corriger mais un cadre à intégrer dans le rétroplanning, avec des points de validation formels plutôt qu’une validation permanente.",
      },
      {
        question: "Peut-on avoir un ton vivant en communication institutionnelle ?",
        answer:
          "Oui, à condition de distinguer la vivacité de l’irrévérence. La sobriété institutionnelle n’oblige pas au style administratif : elle peut être précise, incarnée et lisible. Ce qu’elle exclut, c’est la posture provocatrice ou l’exagération publicitaire, qui entament la neutralité sur laquelle repose l’autorité de l’institution.",
      },
    ],
    related: [
      { label: "Communication publique : comment une collectivité choisit son agence", href: "/blog/agence-communication-publique-collectivites" },
      { label: "Organiser un congrès de fédération", href: "/blog/organiser-congres-federation" },
      { label: "Relations presse", href: "/nos-services/relations-presse" },
    ],
  },

  {
    slug: "agence-communication-publique-collectivites",
    title: "Communication publique : comment une collectivité choisit son agence",
    metaTitle: "Agence communication publique | A6",
    metaDescription:
      "Les critères réels de sélection d’une agence de communication publique : commande publique, neutralité, accessibilité et continuité du service.",
    keyword: "agence communication publique",
    category: "Institutionnel",
    date: "2026-07-21",
    dateLabel: "Juillet 2026",
    readingMinutes: 8,
    img: "/photos/DSC_0836.webp",
    imgAlt:
      "Supports de communication publique conçus pour une collectivité territoriale en Occitanie",
    excerpt:
      "Une collectivité ne choisit pas son agence comme une entreprise : le cadre est réglementaire, l’exigence de neutralité constante et la continuité du service prime sur l’effet. Ce que cela implique concrètement.",
    body: [
      {
        kind: "p",
        text: "La communication publique désigne la communication des collectivités territoriales, établissements publics et services de l’État : informer les habitants, rendre compte de l’action publique, faire connaître un service, conduire une concertation. Elle se distingue de la communication institutionnelle privée par un cadre juridique contraignant et par une obligation permanente de neutralité — deux paramètres qui redéfinissent le métier.",
      },
      {
        kind: "h2",
        text: "Le cadre de la commande publique change la relation",
        id: "commande-publique",
      },
      {
        kind: "p",
        text: "Une collectivité ne peut pas choisir librement son prestataire au-delà de certains seuils : elle doit passer par une procédure de mise en concurrence, avec des critères annoncés et pondérés. Pour l’agence, cela signifie répondre à un cahier des charges plutôt que proposer une vision, et être jugée sur des critères explicites dont le prix n’est qu’une composante.",
      },
      {
        kind: "p",
        text: "Pour la collectivité, l’enjeu est de rédiger un cahier des charges qui laisse la place à une proposition intelligente. Un cahier trop prescriptif obtient l’exécution de ce qu’il a décrit, y compris ses erreurs ; un cahier trop vague rend les offres incomparables. Nous détaillons ce point dans [répondre à un marché public de communication](/blog/marche-public-communication-repondre).",
      },
      {
        kind: "h2",
        text: "La neutralité, en particulier en période préélectorale",
        id: "neutralite",
      },
      {
        kind: "p",
        text: "La communication d’une collectivité informe sur l’action publique ; elle ne promeut pas une personne. Cette frontière, toujours exigeante, devient critique dans la période qui précède un scrutin, où la valorisation d’un bilan peut être requalifiée en campagne. Une agence qui travaille pour le secteur public doit connaître cette contrainte et savoir dire non à une demande qui exposerait la collectivité.",
      },
      {
        kind: "note",
        text: "Un signal fiable de sérieux : une agence qui vous alerte spontanément sur le risque d’un support en période sensible, plutôt que de livrer ce qui a été demandé. C’est un réflexe de métier, pas un excès de prudence.",
      },
      {
        kind: "h2",
        text: "L’accessibilité n’est pas une option",
        id: "accessibilite",
      },
      {
        kind: "p",
        text: "Un support public s’adresse à toute la population, ce qui inclut les personnes en situation de handicap, les personnes âgées et les publics en difficulté avec l’écrit. L’accessibilité numérique fait l’objet d’obligations légales pour les sites publics, et la lisibilité des supports imprimés relève de la même logique de service. Une agence qui traite l’accessibilité comme une contrainte esthétique produira des supports non conformes.",
      },
      {
        kind: "ul",
        items: [
          "Contrastes de couleur suffisants entre texte et fond, vérifiés et non estimés à l’œil.",
          "Hiérarchie de titres réelle, structure de document navigable au clavier et au lecteur d’écran.",
          "Alternatives textuelles sur les visuels porteurs d’information.",
          "Niveau de langue adapté : une information de service doit être comprise du premier coup.",
        ],
      },
      {
        kind: "h2",
        text: "La continuité prime sur l’effet",
        id: "continuite",
      },
      {
        kind: "p",
        text: "Une collectivité communique en continu : bulletin municipal, information de travaux, ouverture d’un équipement, concertation, alerte. Ce flux régulier compte davantage que les campagnes ponctuelles. L’agence doit donc livrer des outils que les équipes internes pourront utiliser sans elle : gabarits, [charte graphique](/blog/charte-graphique-utile) documentée, bibliothèque de visuels, règles éditoriales claires.",
      },
      {
        kind: "p",
        text: "C’est un critère de sélection sous-estimé. Une agence qui conçoit un système autonome sert mieux la collectivité qu’une agence qui rend chaque support dépendant d’une nouvelle commande.",
      },
      {
        kind: "h2",
        text: "La concertation, un exercice à part",
        id: "concertation",
      },
      {
        kind: "p",
        text: "Faire participer les habitants à une décision publique n’est pas une opération de communication descendante. Cela suppose un dispositif honnête : une question réellement ouverte, un cadre expliqué, un compte rendu de ce qui a été retenu et de ce qui a été écarté avec les raisons. Une concertation dont les conclusions étaient écrites d’avance produit plus de défiance que d’absence de concertation.",
      },
      {
        kind: "h2",
        text: "Les critères à mettre dans votre grille de sélection",
        id: "grille",
      },
      {
        kind: "p",
        text: "Si vous portez la communication d’une collectivité et devez sélectionner une agence, ces six critères discriminent mieux que le portfolio. Ils sont vérifiables en entretien et prédisent assez bien la qualité de la relation de travail sur la durée du marché.",
      },
      {
        kind: "ul",
        items: [
          "Connaissance du cadre de la commande publique et des contraintes de période sensible.",
          "Maîtrise réelle de l’accessibilité, y compris numérique.",
          "Capacité à produire des outils autonomes, pas seulement des livrables.",
          "Réactivité sur le flux d’information courant, pas seulement sur les campagnes.",
          "Références sur des commanditaires publics ou parapublics — voir [nos clients](/nos-clients).",
          "Implantation territoriale : connaissance du terrain, des acteurs et des relais locaux.",
        ],
      },
      {
        kind: "p",
        text: "A6 est implantée à Montpellier et intervient en Occitanie auprès d’institutions, de collectivités et du monde associatif et culturel. Pour en discuter, [contactez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Une collectivité peut-elle choisir librement son agence de communication ?",
        answer:
          "Au-delà de certains seuils, non : elle doit organiser une mise en concurrence avec des critères de sélection annoncés et pondérés. En dessous, la procédure est allégée mais les principes de la commande publique — égalité de traitement, transparence, bon usage des deniers publics — continuent de s’appliquer.",
      },
      {
        question: "Qu’est-ce qui change en communication publique en période préélectorale ?",
        answer:
          "La frontière entre informer sur l’action publique et valoriser une personne devient critique, car un support qui met en avant un bilan peut être requalifié en communication de campagne. Une agence expérimentée sur le secteur public alerte sur ce risque en amont plutôt que de livrer sans commentaire.",
      },
      {
        question: "L’accessibilité des supports publics est-elle obligatoire ?",
        answer:
          "Pour les sites et services numériques publics, des obligations légales d’accessibilité s’appliquent. Pour les supports imprimés, l’exigence relève de la mission de service public : une information destinée à toute la population doit être lisible par toute la population. Dans les deux cas, cela se vérifie techniquement et ne s’estime pas à l’œil.",
      },
    ],
    related: [
      { label: "Communication institutionnelle : les enjeux", href: "/blog/communication-institutionnelle-enjeux" },
      { label: "Répondre à un marché public de communication", href: "/blog/marche-public-communication-repondre" },
      { label: "Communiquer avec des moyens associatifs", href: "/blog/communication-associations-moyens-limites" },
    ],
  },

  {
    slug: "communication-associations-moyens-limites",
    title: "Communiquer avec des moyens associatifs : la méthode qui tient",
    metaTitle: "Communication associations | A6",
    metaDescription:
      "Structurer la communication d’une association à budget contraint : les arbitrages qui comptent, ce qu’il faut internaliser et ce qui s’externalise.",
    keyword: "agence communication associations",
    category: "Institutionnel",
    date: "2026-06-30",
    dateLabel: "Juin 2026",
    readingMinutes: 7,
    img: "/photos/DSC_1091.webp",
    imgAlt:
      "Supports de communication réalisés pour une association culturelle en Occitanie",
    excerpt:
      "Une association ne manque pas d’idées mais de temps et de continuité. La bonne stratégie n’est pas de faire plus avec moins : c’est de choisir moins de canaux et de les tenir vraiment.",
    body: [
      {
        kind: "p",
        text: "La communication associative a une contrainte particulière : elle repose sur des personnes qui ont autre chose à faire. Le bénévole qui gère les réseaux sociaux le fait après son travail, le salarié unique porte trois fonctions, et le président change tous les trois ans. Toute stratégie qui suppose une disponibilité régulière échoue — non par manque de volonté mais par structure.",
      },
      {
        kind: "h2",
        text: "Le principe directeur : moins de canaux, réellement tenus",
        id: "moins-de-canaux",
      },
      {
        kind: "p",
        text: "L’erreur la plus fréquente est l’ouverture de trop de canaux : un site, trois réseaux sociaux, une newsletter, un blog. Chacun demande un rythme de publication, et un canal abandonné depuis huit mois nuit davantage qu’un canal inexistant, parce qu’il signale une association endormie. La question n’est pas « où faut-il être » mais « qu’est-ce que nous pouvons tenir douze mois de suite ».",
      },
      {
        kind: "ul",
        items: [
          "Un canal principal, choisi selon où se trouvent réellement vos publics.",
          "Un canal de contact fiable et à jour, ce qui est le minimum vital.",
          "Rien d’autre, jusqu’à ce que le premier canal soit tenu sans effort.",
        ],
      },
      {
        kind: "h2",
        text: "Distinguer les trois publics d’une association",
        id: "trois-publics",
      },
      {
        kind: "p",
        text: "Une association parle à trois publics dont les attentes n’ont rien en commun, et confondre les trois produit des messages qui ne touchent personne. Les distinguer explicitement permet d’arbitrer : la plupart des associations sur-communiquent vers le public le plus large et sous-communiquent vers celui qui décide de leurs moyens.",
      },
      {
        kind: "ul",
        items: [
          "Les membres et bénévoles, qui attendent de l’information pratique et de la reconnaissance.",
          "Les financeurs — collectivités, fondations, mécènes — qui attendent des preuves d’action et de rigueur.",
          "Le public bénéficiaire ou le grand public, qui attend une raison de venir ou de soutenir.",
        ],
      },
      {
        kind: "h2",
        text: "Ce qu’il faut internaliser",
        id: "internaliser",
      },
      {
        kind: "p",
        text: "Tout ce qui demande de la fréquence et de la proximité doit rester à l’intérieur : l’animation quotidienne, la réponse aux messages, la photo d’une activité, l’annonce d’un changement d’horaire. Personne ne peut faire cela mieux ni moins cher que les personnes présentes. Confier ce flux à un prestataire coûte cher et produit un ton faux.",
      },
      {
        kind: "h2",
        text: "Ce qui mérite un professionnel",
        id: "externaliser",
      },
      {
        kind: "p",
        text: "À l’inverse, certaines choses se font une fois et servent des années — ce sont précisément celles qu’il vaut mieux ne pas improviser. Un logo bricolé, une plaquette illisible ou un dossier de mécénat mal structuré coûtent des financements bien au-delà du prix d’une prestation.",
      },
      {
        kind: "ul",
        items: [
          "L’[identité visuelle](/nos-services/identite-visuelle) et les gabarits réutilisables, faits une fois, utilisés par tous.",
          "Le document de référence adressé aux financeurs : rapport d’activité, dossier de mécénat.",
          "Les [photos](/nos-services/production-de-contenus) d’une activité représentative, qui alimenteront tous les supports pendant des années.",
          "Les temps forts : un événement annuel ne se rate pas deux fois.",
        ],
      },
      {
        kind: "note",
        text: "L’investissement le plus rentable pour une association est presque toujours une banque d’images propres de ses propres activités. Elle alimente le site, les réseaux, les dossiers de subvention et la presse pendant des années, sans coût récurrent.",
      },
      {
        kind: "h2",
        text: "Le problème de la transmission",
        id: "transmission",
      },
      {
        kind: "p",
        text: "Dans une association, celui qui sait part. Les accès aux comptes, les fichiers sources du logo, la liste de presse et l’historique des subventions disparaissent avec la personne qui les détenait. C’est le risque le plus concret et le plus sous-estimé de la communication associative — et le plus simple à traiter.",
      },
      {
        kind: "ul",
        items: [
          "Des accès détenus par l’association, jamais par un compte personnel.",
          "Les fichiers sources archivés dans un espace partagé, pas dans une boîte mail.",
          "Une charte graphique écrite, même courte, qui survit au départ de son auteur.",
        ],
      },
      {
        kind: "p",
        text: "A6 accompagne des structures associatives et culturelles en Occitanie sur cette structuration. Si vous voulez faire le point sur ce qui existe et ce qui manque, [écrivez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Combien de réseaux sociaux une petite association doit-elle tenir ?",
        answer:
          "Un seul, tant qu’il n’est pas tenu sans effort. Un canal actif vaut mieux que trois canaux à l’abandon, car une page inactive depuis plusieurs mois signale une association endormie et dissuade autant les bénévoles que les financeurs. Le critère de choix est la présence réelle de vos publics, pas la popularité générale de la plateforme.",
      },
      {
        question: "Qu’est-ce qui mérite un budget quand on n’a presque rien ?",
        answer:
          "Ce qui se fait une fois et sert longtemps : l’identité visuelle avec ses gabarits réutilisables, et une banque de photos de vos propres activités. Ces deux investissements alimentent ensuite tous vos supports, vos dossiers de subvention et vos relations presse sans coût récurrent.",
      },
    ],
    related: [
      { label: "Identité visuelle", href: "/nos-services/identite-visuelle" },
      { label: "Charte graphique : à quoi elle sert vraiment", href: "/blog/charte-graphique-utile" },
      { label: "Événementiel culturel et patrimoine", href: "/blog/evenementiel-culturel-patrimoine" },
    ],
  },

  {
    slug: "evenementiel-culturel-patrimoine",
    title: "Événementiel culturel et patrimoine : faire vivre un lieu sans le trahir",
    metaTitle: "Agence événementiel culturel | A6",
    metaDescription:
      "Produire un événement dans un site patrimonial : conservation, scénographie réversible, médiation et équilibre entre fréquentation et respect du lieu.",
    keyword: "agence événementiel culturel",
    category: "Institutionnel",
    date: "2026-06-17",
    dateLabel: "Juin 2026",
    readingMinutes: 8,
    img: "/photos/DSC_5640.webp",
    imgAlt:
      "Événement culturel mis en scène dans un site patrimonial en Occitanie",
    excerpt:
      "Un événement dans un site patrimonial obéit à une règle qui inverse les réflexes de l’événementiel classique : ce n’est pas le lieu qui sert l’événement, c’est l’événement qui doit servir le lieu.",
    body: [
      {
        kind: "p",
        text: "L’événementiel culturel et patrimonial a une particularité que l’événementiel corporate ignore : le lieu est le sujet, pas le décor. Une scénographie qui écrase un bâtiment historique, une signalétique qui masque une façade ou un flux de visiteurs mal canalisé dans un espace fragile produisent un événement réussi et un patrimoine abîmé. L’équilibre est le cœur du métier.",
      },
      {
        kind: "h2",
        text: "Le principe : réversibilité totale",
        id: "reversibilite",
      },
      {
        kind: "p",
        text: "Dans un site protégé, rien ne se perce, rien ne se colle, rien ne s’appuie sur un élément porteur ou décoratif. Toute installation doit être autoportante, démontable, et laisser le lieu strictement dans son état initial. Cette contrainte élimine d’emblée une partie de la boîte à outils événementielle habituelle et impose de concevoir différemment plutôt que d’adapter à la marge.",
      },
      {
        kind: "ul",
        items: [
          "Structures autoportantes et lestées, jamais fixées au bâti.",
          "Éclairage à distance, sans contact ni chaleur sur les surfaces sensibles.",
          "[Signalétique](/nos-services/impressions-signaletique) sur supports indépendants, jamais apposée sur les murs.",
          "Un état des lieux photographique avant montage et après démontage.",
        ],
      },
      {
        kind: "h2",
        text: "Les autorisations arrivent en premier, pas en dernier",
        id: "autorisations",
      },
      {
        kind: "p",
        text: "Selon le statut du site, plusieurs autorités peuvent avoir un mot à dire : le propriétaire, le gestionnaire, les services de conservation, la commune pour l’espace public, les services de sécurité pour la jauge. Les délais ne sont pas compressibles et les avis peuvent modifier le projet en profondeur. Concevoir puis demander l’autorisation est la meilleure façon de tout refaire.",
      },
      {
        kind: "note",
        text: "Notre pratique : soumettre un principe d’implantation très tôt, même incomplet, pour connaître les lignes rouges avant d’investir dans la conception détaillée. Cela évite d’aimer une idée qui sera refusée.",
      },
      {
        kind: "h2",
        text: "Concilier fréquentation et fragilité",
        id: "frequentation",
      },
      {
        kind: "p",
        text: "Un site patrimonial a une capacité d’accueil qui ne se déduit pas de sa surface : elle dépend de la fragilité des sols, de la largeur des circulations, des points d’étranglement et des issues. Faire venir plus de monde que le lieu ne peut absorber ne dégrade pas seulement l’expérience — cela crée un risque réel. La jauge se fixe donc avant la communication, jamais l’inverse.",
      },
      {
        kind: "p",
        text: "Le corollaire est une décision de communication : mieux vaut un événement complet et bien vécu qu’un événement saturé. Cela suppose parfois d’assumer une billetterie ou une inscription là où la gratuité libre serait plus séduisante.",
      },
      {
        kind: "h2",
        text: "La médiation fait la différence",
        id: "mediation",
      },
      {
        kind: "p",
        text: "Un visiteur qui traverse un site sans comprendre ce qu’il regarde a vu un beau décor. La médiation — ce qui explique, situe et raconte — est ce qui transforme la visite en expérience. Elle ne demande pas nécessairement de gros moyens : une [rédaction éditoriale](/nos-services/production-de-contenus) juste, quelques dispositifs bien placés et des médiateurs briefés valent mieux qu’un dispositif technologique mal intégré.",
      },
      {
        kind: "h2",
        text: "Un registre de communication spécifique",
        id: "registre",
      },
      {
        kind: "p",
        text: "La communication culturelle a un équilibre délicat à tenir : donner envie sans trahir. Un visuel spectaculaire qui ne correspond pas à ce que le visiteur trouvera sur place produit de la déception, et la déception se transmet. À l’inverse, une communication austère par respect du sujet ne fait venir personne. La justesse consiste à promettre exactement ce qui sera tenu.",
      },
      {
        kind: "quote",
        text: "Sur un site patrimonial, la réussite ne se mesure pas au nombre d’entrées mais à ce que les visiteurs ont compris — et à l’état dans lequel on rend le lieu.",
      },
      {
        kind: "h2",
        text: "Notre terrain",
        id: "terrain",
      },
      {
        kind: "p",
        text: "Le champ culturel, patrimonial et associatif fait partie des segments sur lesquels A6 s’est construite, aux côtés des institutions professionnelles. Voir [nos réalisations](/realisations) et notre offre de [conception et scénographie](/nos-services/conception-et-scenographie). Pour un projet dans un site sensible, [parlons-en tôt](/contact) — c’est là que le conseil a le plus de valeur.",
      },
    ],
    faq: [
      {
        question: "Peut-on installer une scénographie dans un monument historique ?",
        answer:
          "Oui, à condition qu’elle soit entièrement réversible : structures autoportantes, aucune fixation au bâti, aucun contact avec les surfaces sensibles, éclairage sans chaleur. Les autorisations dépendent du statut du site et des autorités concernées, et doivent être engagées avant la conception détaillée car leurs avis peuvent modifier le projet en profondeur.",
      },
      {
        question: "Comment fixer la jauge d’un événement dans un site patrimonial ?",
        answer:
          "Pas à partir de la surface mais des contraintes réelles : fragilité des sols, largeur des circulations, points d’étranglement, issues de secours. La jauge doit être arrêtée avant l’ouverture de la communication, car il est impossible de restreindre ensuite une fréquentation qu’on a encouragée.",
      },
    ],
    related: [
      { label: "Conception & scénographie", href: "/nos-services/conception-et-scenographie" },
      { label: "Communiquer avec des moyens associatifs", href: "/blog/communication-associations-moyens-limites" },
      { label: "Événementiel responsable : les repères", href: "/blog/evenementiel-responsable-reperes" },
    ],
  },

  {
    slug: "marche-public-communication-repondre",
    title: "Répondre à un marché public de communication : ce que l’acheteur attend",
    metaTitle: "Marché public communication | A6",
    metaDescription:
      "Comment se juge une offre de communication en marché public : critères pondérés, structure du mémoire technique et erreurs qui éliminent d’emblée.",
    keyword: "marché public communication",
    category: "Institutionnel",
    date: "2026-05-27",
    dateLabel: "Mai 2026",
    readingMinutes: 7,
    img: "/photos/DSC_0856.webp",
    imgAlt:
      "Dossier de réponse à un marché public de communication préparé par l’agence A6",
    excerpt:
      "Un marché public ne se gagne pas avec la plus belle idée mais avec l’offre qui répond le mieux aux critères annoncés. Comment les lire, et comment structurer un mémoire technique qui se laisse noter.",
    body: [
      {
        kind: "p",
        text: "Répondre à un marché public de communication demande un travail différent d’une réponse à un appel d’offres privé. L’acheteur public est tenu par les critères qu’il a publiés : il ne peut pas retenir une offre séduisante qui note mal. Comprendre ce cadre est utile aux deux parties — aux agences pour bâtir une offre notable, aux collectivités pour rédiger des critères qui font remonter les bonnes propositions.",
      },
      {
        kind: "h2",
        text: "Les critères pondérés sont la vraie grille de lecture",
        id: "criteres",
      },
      {
        kind: "p",
        text: "Chaque consultation annonce ses critères et leur poids : valeur technique, prix, délais, parfois performance environnementale ou insertion. Ce tableau est l’énoncé exact de ce sur quoi vous serez noté. Une offre qui développe brillamment un aspect non pondéré ne gagne aucun point. La première étape d’une réponse sérieuse est donc de reconstruire son plan sur la structure des critères, et non sur son propre plan de présentation.",
      },
      {
        kind: "note",
        text: "Erreur classique : envoyer une plaquette d’agence en guise de mémoire technique. Une plaquette parle de l’agence ; un mémoire technique répond aux critères. La première est inévaluable, donc mal notée.",
      },
      {
        kind: "h2",
        text: "Ce que l’acheteur cherche vraiment sous « valeur technique »",
        id: "valeur-technique",
      },
      {
        kind: "p",
        text: "Derrière ce critère, souvent le plus lourd, l’acheteur cherche à réduire son risque. Il veut savoir qui fera le travail, selon quel processus, avec quels délais de réaction, et ce qui se passera si quelque chose dérape. Les réponses qui notent bien sont concrètes et vérifiables ; celles qui notent mal sont des déclarations d’intention sur la créativité.",
      },
      {
        kind: "ul",
        items: [
          "Les personnes affectées, nommées, avec leur rôle et leur disponibilité réelle.",
          "Le processus de production d’un support type, du brief à la livraison.",
          "Les délais de réaction engagés, notamment sur les demandes urgentes.",
          "Le dispositif de continuité : que se passe-t-il en cas d’absence de l’interlocuteur principal.",
          "Les modalités de transfert des fichiers sources et des droits.",
        ],
      },
      {
        kind: "h2",
        text: "La question des droits et des sources",
        id: "droits",
      },
      {
        kind: "p",
        text: "C’est un point sur lequel les acheteurs publics sont devenus attentifs, et à juste titre : une collectivité qui ne détient pas les fichiers sources de son identité est captive de son prestataire. Une offre qui précise clairement l’étendue de la cession de droits et la remise des sources exploitables lève une inquiétude réelle. À l’inverse, un silence sur ce point est lu comme une intention de verrouillage.",
      },
      {
        kind: "h2",
        text: "Le prix se justifie, il ne se devine pas",
        id: "prix",
      },
      {
        kind: "p",
        text: "Un bordereau de prix doit être cohérent avec le mémoire technique : si vous annoncez une équipe dédiée et une forte réactivité, un prix anormalement bas rend l’offre suspecte plutôt que compétitive. Les acheteurs savent identifier une offre sous-évaluée, qui présage des avenants ou une exécution dégradée. La cohérence entre ce qui est promis et ce qui est facturé est un élément d’évaluation en soi.",
      },
      {
        kind: "h2",
        text: "Côté collectivité : rédiger un cahier des charges utile",
        id: "cahier-charges",
      },
      {
        kind: "p",
        text: "Le symétrique mérite d’être dit, parce que la qualité des offres dépend largement de la qualité de la consultation. Un cahier des charges trop prescriptif obtient l’exécution littérale de ce qu’il décrit, erreurs incluses, et prive la collectivité de l’expertise qu’elle achète. Trop vague, il rend les offres incomparables et transforme la sélection en pari.",
      },
      {
        kind: "ul",
        items: [
          "Décrire les objectifs et les contraintes, laisser la solution ouverte.",
          "Donner le volume réel attendu : nombre de supports, fréquence, saisonnalité.",
          "Pondérer la valeur technique à un niveau qui reflète l’importance du sujet.",
          "Demander explicitement la remise des sources et l’étendue des droits.",
          "Prévoir un échange oral pour les offres présélectionnées quand le sujet le justifie.",
        ],
      },
      {
        kind: "p",
        text: "A6 travaille avec des institutions et des collectivités en Occitanie — voir [nos clients](/nos-clients) et notre approche de la [communication publique](/blog/agence-communication-publique-collectivites). Pour une consultation en cours, [contactez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Peut-on envoyer sa plaquette d’agence comme mémoire technique ?",
        answer:
          "C’est l’erreur la plus fréquente et la plus coûteuse. Une plaquette parle de l’agence, alors que le mémoire technique doit répondre point par point aux critères pondérés publiés dans la consultation. Une offre qui ne se laisse pas noter sur ces critères obtient une note faible, quelle que soit la qualité de ses références.",
      },
      {
        question: "Pourquoi un prix très bas peut-il pénaliser une offre publique ?",
        answer:
          "Parce qu’il crée une incohérence avec le mémoire technique. Si l’offre annonce une équipe dédiée et une forte réactivité pour un montant anormalement faible, l’acheteur en déduit soit une sous-évaluation qui se traduira par des avenants, soit une exécution dégradée. La cohérence entre promesse et prix fait partie de l’évaluation.",
      },
    ],
    related: [
      { label: "Communication publique et collectivités", href: "/blog/agence-communication-publique-collectivites" },
      { label: "Communication institutionnelle : les enjeux", href: "/blog/communication-institutionnelle-enjeux" },
      { label: "Comment choisir une agence de communication", href: "/blog/choisir-agence-communication" },
    ],
  },
];
