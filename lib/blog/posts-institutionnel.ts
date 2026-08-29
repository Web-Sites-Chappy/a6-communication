import type { BlogPost } from "@/lib/blog/types";

/**
 * Cluster institutionnel / public / culturel / associatif (le différenciateur
 * SEO d’A6 selon le SERP-LANDSCAPE) : segments quasi vides en concurrence
 * (« agence communication publique » KD 7, « agence événementiel culturel »
 * KD 42, « agence communication institutionnelle » KD 45) et alignés sur les
 * références réelles de l’agence.
 */
export const postsInstitutionnel: BlogPost[] = [
  {
    // Article d'actualité (cas réel commenté), pas un cluster KEYWORD-MAP validé
    // par DataForSEO : le mot-clé "médiation du patrimoine" est informationnel,
    // volume non mesuré. Ajouté le 2026-08-29 sur la base d'une actualité
    // Toulouse Métropole vérifiée (voir sources en commentaire de fin d'article).
    slug: "noviciat-toulouse-mediation-patrimoniale",
    title: "Le Noviciat à Toulouse : une leçon grandeur nature de médiation patrimoniale",
    metaTitle: "Médiation du patrimoine à Toulouse | A6",
    metaDescription:
      "Le Noviciat, nouveau centre du patrimoine toulousain, ouvre le 19 septembre 2026. Ce que ses choix de médiation apprennent sur la communication patrimoniale.",
    keyword: "médiation du patrimoine",
    category: "Institutionnel",
    date: "2026-08-29",
    dateLabel: "Août 2026",
    readingMinutes: 8,
    img: "/photos/blog/noviciat-toulouse-mediation-patrimoniale-1-v2.webp",
    imgAlt:
      "Passage voûté en pierre d’un ancien cloître, illustration du Noviciat, nouveau centre du patrimoine toulousain",
    excerpt:
      "Le 19 septembre 2026, Toulouse Métropole ouvre le Noviciat dans un ancien couvent du XVIe siècle. Au-delà de l’exposition, ce lancement illustre plusieurs choix de médiation qui distinguent un lieu patrimonial vivant d’un lieu simplement conservé.",
    body: [
      {
        kind: "p",
        text: "Le samedi 19 septembre 2026, à l’occasion des Journées européennes du patrimoine, Toulouse Métropole ouvre au public le Noviciat, Centre de l’Architecture et du Patrimoine de Toulouse, au 17 place de la Daurade. Le lieu remplace l’ancien Espace Patrimoine installé de l’autre côté de la placette. Au-delà de l’annonce, ce lancement est un cas d’école pour qui travaille la communication institutionnelle et culturelle : il condense en un seul projet la plupart des arbitrages qui séparent un lieu patrimonial vivant d’un lieu simplement conservé.",
      },
      {
        kind: "h2",
        text: "Un bâtiment qui a déjà changé quatre fois de fonction",
        id: "batiment-histoire",
      },
      {
        kind: "p",
        text: "Le Noviciat occupe un bâtiment construit au XVIe siècle comme noviciat des Jésuites. Il a ensuite servi de caserne militaire, puis d’école, avant de devenir l’atelier de couture du Théâtre du Capitole. Les travaux de restauration ont mis au jour, au premier étage, une fresque du XVIIe siècle restée invisible jusque-là.",
      },
      {
        kind: "p",
        text: "Cette succession d’usages n’est pas un détail anecdotique pour la communication du projet : c’est le matériau principal du récit. Un bâtiment qui n’a jamais changé de fonction se raconte en une phrase ; un bâtiment qui en a traversé quatre offre autant d’angles pour des publics différents (les passionnés d’histoire militaire, les anciens du Capitole, les riverains qui ont connu l’Espace Patrimoine d’en face). La fresque redécouverte joue le même rôle que la trouvaille inattendue dans n’importe quel projet de valorisation patrimoniale : elle donne une preuve tangible que le bâtiment a encore des choses à révéler, ce qui justifie une visite plutôt qu’une simple prise de connaissance.",
      },
      {
        kind: "h2",
        text: "300 m² : le choix de l’immersif plutôt que de la vitrine",
        id: "mediation-immersive",
      },
      {
        kind: "p",
        text: "Le centre déploie environ 300 m² d’exposition sur deux niveaux, avec maquettes 3D, dioramas, panneaux pédagogiques et tables lumineuses. Le parcours ne suit pas une chronologie de la ville mais des figures et des flux qui l’ont façonnée : pêcheurs de sable de la Garonne, marchands de marbre pyrénéen, pèlerins de Compostelle, Canal du Midi.",
      },
      {
        kind: "h3",
        text: "Pourquoi un parcours thématique plutôt que chronologique",
      },
      {
        kind: "p",
        text: "Une frise chronologique protège un commissaire d’exposition de l’oubli d’un siècle, mais elle ne dit rien à un visiteur qui n’a pas de repère préalable sur l’histoire de la ville. Un parcours organisé par figures et par flux fait l’inverse : chaque section répond à une question implicite (« qui a bâti cette ville, avec quoi, en échange de quoi ») et peut se visiter dans le désordre sans perdre son sens. C’est le même principe qui structure un événement dans un lieu patrimonial plutôt qu’une exposition permanente : voir notre article sur l’[événementiel culturel et patrimonial](/blog/evenementiel-culturel-patrimoine), où l’équilibre entre médiation et conservation se pose dans des termes proches.",
      },
      {
        kind: "h2",
        text: "Un guichet-ressource, pas seulement un lieu d’exposition",
        id: "guichet-ressource",
      },
      {
        kind: "p",
        text: "Le Noviciat consacre un espace à l’accompagnement des Toulousains qui envisagent des travaux sur un bâtiment patrimonial : un guichet-ressource pour des projets de rénovation respectueux du bâti ancien, adossé à une vue sur la Garonne et à une chapelle aux volumes généreux qui fait partie du parcours.",
      },
      {
        kind: "note",
        text: "Ce doublement de fonction (exposition + service public) est ce qui distingue une communication patrimoniale d’une communication culturelle pure : le lieu doit à la fois faire rêver et répondre à une question pratique d’habitant. Les deux registres cohabitent rarement bien sans être pensés ensemble dès la conception.",
      },
      {
        kind: "h2",
        text: "Une programmation à l’année : l’enjeu réel de la communication patrimoniale",
        id: "programmation-continuite",
      },
      {
        kind: "p",
        text: "Toulouse Métropole prévoit une programmation à l’année : ateliers artistiques, visites guidées de la ville, actions à destination des scolaires, et participation aux grands rendez-vous du calendrier patrimonial national (Journées européennes du patrimoine, Journées européennes des métiers d’art, Journées européennes de l’archéologie).",
      },
      {
        kind: "p",
        text: "C’est le point le plus significatif du dossier, et le plus souvent sous-traité dans les lancements de lieux culturels : une ouverture réussie se mesure à sa couverture presse du jour J, une communication patrimoniale réussie se mesure à ce qui reste visible six mois plus tard. Nous développons ce principe de continuité, qui vaut aussi pour la communication d’une collectivité au sens large, dans notre article sur la [communication publique des collectivités](/blog/agence-communication-publique-collectivites).",
      },
      {
        kind: "h2",
        text: "Ce que ce lancement dit du positionnement de Toulouse Métropole",
        id: "positionnement-collectivite",
      },
      {
        kind: "p",
        text: "L’ouverture du Noviciat s’inscrit dans la démarche portée par Toulouse Métropole depuis l’obtention, en 2019, du label « Ville d’art et d’histoire ». Le choix de remplacer l’ancien Espace Patrimoine plutôt que de le faire évoluer sur place confirme une chose que les acteurs de la communication institutionnelle observent depuis plusieurs éditions des Rendez-vous de l’Architecture organisés par l’Ordre des Architectes d’Occitanie : à Toulouse, la question du patrimoine ne se limite pas à la conservation, elle se traduit en lieux, en programmation et en médiation vivante, ouverts à un public large.",
      },
      {
        kind: "p",
        text: "C’est précisément le terrain sur lequel A6 accompagne ses clients institutionnels et culturels en Occitanie : voir [nos clients](/nos-clients). Si vous portez un projet de valorisation ou de médiation patrimoniale, [échangeons](/contact).",
      },
    ],
    faq: [
      {
        question: "Qu’est-ce que le Noviciat, le nouveau centre du patrimoine de Toulouse ?",
        answer:
          "Le Noviciat est le nouveau Centre de l’Architecture et du Patrimoine de Toulouse Métropole, ouvert au public le 19 septembre 2026 au 17 place de la Daurade. Il remplace l’ancien Espace Patrimoine installé de l’autre côté de la placette et propose environ 300 m² d’exposition sur deux niveaux, avec maquettes 3D, dioramas et panneaux pédagogiques. Il fait aussi office de guichet-ressource pour les habitants qui envisagent des travaux sur un bâtiment patrimonial.",
      },
      {
        question: "Où se trouve le Noviciat et depuis quand le bâtiment existe-t-il ?",
        answer:
          "Le bâtiment date du XVIe siècle : construit comme noviciat des Jésuites, il a ensuite servi de caserne militaire, puis d’école, avant de devenir l’atelier de couture du Théâtre du Capitole. Les travaux de restauration ont révélé une fresque du XVIIe siècle au premier étage, restée invisible jusqu’à ce chantier. Il se situe au 17 place de la Daurade, à Toulouse.",
      },
      {
        question: "Pourquoi un parcours thématique plutôt qu’une frise chronologique classique ?",
        answer:
          "Un parcours organisé par figures et par flux (pêcheurs de sable, marchands de marbre pyrénéen, pèlerins de Compostelle, Canal du Midi) répond à une question implicite du visiteur plutôt que d’exiger de lui un repère chronologique préalable. Chaque section se comprend indépendamment des autres, ce qui permet une visite dans le désordre sans perte de sens. C’est un choix de médiation courant dans les lieux patrimoniaux récents, qui privilégient l’accès immédiat à la compréhension savante exhaustive.",
      },
      {
        question: "Qu’est-ce qui distingue une communication patrimoniale réussie d’un simple lancement d’exposition ?",
        answer:
          "La couverture presse du jour d’ouverture se pilote assez facilement ; ce qui distingue une communication patrimoniale réussie, c’est la programmation qui suit dans les mois suivants. Le Noviciat prévoit des ateliers, des visites guidées et des actions scolaires à l’année, en plus de sa participation aux rendez-vous nationaux du patrimoine. Un lieu qui redevient silencieux après son inauguration perd l’essentiel du bénéfice de communication qu’il vient de gagner.",
      },
    ],
    related: [
      { label: "Événementiel culturel et patrimoine : faire vivre un lieu sans le trahir", href: "/blog/evenementiel-culturel-patrimoine" },
      { label: "Communication publique : comment une collectivité choisit son agence", href: "/blog/agence-communication-publique-collectivites" },
      { label: "Communication institutionnelle : les enjeux", href: "/blog/communication-institutionnelle-enjeux" },
    ],
  },

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
    img: "/photos/blog/communication-institutionnelle-enjeux-1-v2.webp",
    imgAlt:
      "Prise de parole avec microphone lors d’une conférence professionnelle",
    excerpt:
      "La communication institutionnelle ne vend rien : elle établit une légitimité. Cette différence d’objectif change tout : le ton, le rythme, les preuves acceptables et la définition même de la réussite.",
    body: [
      {
        kind: "p",
        text: "La communication institutionnelle est l’ensemble des actions par lesquelles une organisation parle en son nom propre (de ce qu’elle est, de ce qu’elle défend et de la légitimité sur laquelle elle s’appuie) et non de ce qu’elle vend. Elle concerne les ordres professionnels, les fédérations, les collectivités, les établissements publics, les fondations et les associations, mais aussi toute entreprise qui s’adresse à ses parties prenantes plutôt qu’à ses clients.",
      },
      {
        kind: "p",
        text: "La situation se présente presque toujours de la même façon. Une fédération prépare son congrès annuel, un ordre régional doit réagir publiquement à une réforme, une collectivité inaugure un équipement financé sur plusieurs mandats. Personne ne cherche à vendre quoi que ce soit, et pourtant la prise de parole engage plus lourdement qu’une campagne commerciale : elle sera lue par des membres, des tutelles, des partenaires financiers, parfois des contradicteurs qui attendent l’erreur. Cette asymétrie entre un objectif modeste et un risque élevé explique l’essentiel des réflexes propres au métier.",
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
        kind: "h3",
        text: "Ce que le registre institutionnel fait perdre, et ce qu’il fait gagner",
      },
      {
        kind: "p",
        text: "Le passage au registre institutionnel supprime plusieurs facilités : l’urgence fabriquée, la promesse spectaculaire, le ciblage fin qui permet de dire une chose à un segment et une autre au segment voisin, le test rapide de plusieurs versions d’un même message. En échange, il donne aux messages une durée de vie que la communication commerciale n’a jamais. Un positionnement institutionnel bien construit sert cinq ou dix ans, traverse deux mandatures et devient le vocabulaire par lequel les tiers décrivent l’organisation. C’est un arbitrage entre intensité immédiate et capitalisation lente, et il faut l’assumer dès le brief plutôt que le découvrir en cours de projet.",
      },
      {
        kind: "h3",
        text: "Le cas des entreprises qui pratiquent les deux registres",
      },
      {
        kind: "p",
        text: "Beaucoup d’entreprises tiennent les deux discours en parallèle : un discours produit vers leurs clients, un discours corporate vers leurs recruteurs potentiels, leurs financeurs, les riverains d’un site industriel ou les élus d’un territoire. Le risque le plus courant est la contamination du second par le premier. Un rapport d’activité écrit avec les codes d’une brochure commerciale perd sa crédibilité auprès des lecteurs qui l’ouvrent justement pour y trouver des faits. La bonne pratique consiste à séparer nettement les deux systèmes éditoriaux tout en conservant une continuité visuelle, ce qui rejoint le travail de [communication interne](/blog/communication-interne-entreprise) où le même écart de registre se joue vis-à-vis des salariés.",
      },
      {
        kind: "h2",
        text: "Contrainte 1 : Plusieurs publics, un seul discours",
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
        kind: "h3",
        text: "À quoi ressemble un socle de messages exploitable",
      },
      {
        kind: "p",
        text: "Un socle utile tient sur deux pages, pas sur quarante. Il énonce ce que l’organisation est, au nom de quoi elle parle, les trois ou quatre positions qu’elle défend, et surtout la formulation exacte retenue pour chacune. La valeur du document ne vient pas de son contenu stratégique, souvent connu de tous, mais de la stabilité lexicale qu’il impose : quand le président, le directeur et le chargé de communication emploient les mêmes mots pour désigner la même chose, l’organisation devient citable. Quand chacun reformule à sa manière, la presse choisit la formulation la plus commode pour elle.",
      },
      {
        kind: "h3",
        text: "Quand deux publics attendent des choses contradictoires",
      },
      {
        kind: "p",
        text: "La contradiction n’est pas toujours réductible. Une fédération peut avoir des adhérents qui réclament une position ferme et une tutelle qui attend de la mesure. Chercher une formulation qui satisfasse les deux produit en général un texte creux que personne ne reprend. La sortie honnête consiste à hiérarchiser explicitement : décider quel public est prioritaire sur ce sujet précis, assumer le désagrément auprès de l’autre, et le lui dire directement plutôt que de le lui laisser découvrir dans un communiqué. Une explication en amont désamorce ce qu’un texte ambigu aggrave.",
      },
      {
        kind: "h2",
        text: "Contrainte 2 : La parole engage une collectivité",
        id: "parole-collective",
      },
      {
        kind: "p",
        text: "Quand un président d’ordre professionnel s’exprime, il engage une profession entière, y compris ses membres qui ne partagent pas son avis. Cela impose un travail de cadrage en amont qui n’existe pas dans le privé : vérifier ce qui relève d’une position votée, ce qui relève d’une opinion personnelle, et ce qui n’a pas été tranché. Un support de communication qui affirme une position non validée met l’institution en difficulté interne.",
      },
      {
        kind: "h3",
        text: "Position votée, position de fait, opinion personnelle",
      },
      {
        kind: "p",
        text: "Ces trois statuts se confondent facilement dans une conversation et se distinguent nettement dans un document. Une position votée existe dans une délibération et peut être citée telle quelle. Une position de fait est une pratique constante que l’organisation n’a jamais formalisée, ce qui la rend défendable mais fragile si elle est contestée. Une opinion personnelle, même émise par le président, n’engage que lui tant qu’elle n’a pas été soumise à l’instance. Avant d’écrire, il vaut la peine de classer chaque affirmation du support dans l’une des trois cases, puis de traiter la troisième avec précaution : elle s’exprime dans une interview, rarement dans un support signé de l’institution.",
      },
      {
        kind: "h3",
        text: "Qui porte la parole, et sur quel sujet",
      },
      {
        kind: "p",
        text: "Le président n’est pas toujours le meilleur porte-parole. Sur un sujet technique, un référent commission est plus crédible et engage moins l’institution sur le terrain politique. Sur un sujet sensible, à l’inverse, déléguer la parole à un échelon inférieur est lu comme une dérobade. Une répartition écrite des prises de parole par nature de sujet évite d’avoir à trancher dans l’urgence, moment où les erreurs de casting se produisent. Elle protège aussi les personnes : un porte-parole envoyé sans mandat clair se retrouve seul devant une question qu’il n’avait pas à arbitrer.",
      },
      {
        kind: "h2",
        text: "Contrainte 3 : Le circuit de validation est long, et c’est normal",
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
        kind: "h3",
        text: "Bâtir un rétroplanning qui absorbe la collégialité",
      },
      {
        kind: "p",
        text: "Le calendrier se construit à rebours des instances, pas des envies de production. On part de la date de l’événement ou de la publication, on remonte jusqu’au dernier conseil ou bureau qui précède, et c’est cette séance qui devient le jalon dur. Tout ce qui doit être validé collectivement s’y raccroche ; tout le reste peut avancer en parallèle. Ce simple renversement supprime la moitié des tensions de projet, parce qu’il rend visible dès le départ ce qui n’est pas négociable.",
      },
      {
        kind: "ul",
        items: [
          "Repérer les dates d’instances de l’année avant d’écrire le moindre calendrier de production.",
          "Distinguer ce qui exige une validation collégiale de ce qu’un référent peut arbitrer seul.",
          "Faire valider les principes (axe, ton, structure) avant les exécutions, jamais l’inverse.",
          "Prévoir un tour de relecture juridique ou déontologique quand le sujet le justifie, avec un délai propre.",
          "Acter chaque validation par écrit, même brièvement, pour éviter la réouverture d’un point tranché.",
        ],
      },
      {
        kind: "h2",
        text: "Contrainte 4 : La neutralité de ton est une obligation, pas un style",
        id: "neutralite",
      },
      {
        kind: "p",
        text: "Le registre institutionnel exclut certaines facilités : l’humour appuyé, la posture provocatrice, l’exagération publicitaire. Ce n’est pas une question de goût mais de position : une institution qui joue l’irrévérence perd la neutralité qui fonde son autorité. Cela ne condamne pas au discours administratif : la sobriété peut être précise, incarnée et vivante. Mais elle ne peut pas être racoleuse.",
      },
      {
        kind: "p",
        text: "C’est aussi ce qui rend le travail d’[identité de marque institutionnelle](/blog/identite-marque-institutionnelle) particulier : les codes du privé s’y transposent mal.",
      },
      {
        kind: "h3",
        text: "Sobriété ne veut pas dire platitude",
      },
      {
        kind: "p",
        text: "La confusion entre neutralité et absence de style produit les documents institutionnels que personne ne lit : phrases longues, verbes passifs, sujets impersonnels, aucune position identifiable. Une institution a pourtant le droit d’écrire clairement, de nommer les difficultés et d’employer des phrases courtes. Ce qui est exclu, c’est la posture, pas la netteté. Le meilleur indicateur est un test de lecture à voix haute : si le texte ne peut être prononcé sans effort par le président lors d’une assemblée générale, c’est qu’il a été écrit pour être approuvé et non pour être entendu.",
      },
      {
        kind: "h2",
        text: "Contrainte 5 : Les preuves doivent être sourçables",
        id: "preuves",
      },
      {
        kind: "p",
        text: "Une institution ne peut pas avancer un chiffre qu’elle ne peut pas documenter. Un ordre professionnel qui publie une donnée sur sa filière sera repris par la presse et contesté par ses contradicteurs. Cela impose une discipline que la communication commerciale ignore souvent : toute affirmation chiffrée doit avoir une source identifiable dans le texte.",
      },
      {
        kind: "h3",
        text: "Ce qui compte comme preuve, par ordre de solidité",
      },
      {
        kind: "p",
        text: "Toutes les preuves n’ont pas le même poids devant un lecteur qui cherche la faille. Une donnée publique documentée résiste à la contestation ; une donnée interne bien méthodologiquement décrite résiste correctement ; une estimation présentée comme telle est acceptable ; un chiffre repris d’un article de presse sans source primaire est le maillon qui cède. La règle pratique est simple : on ne publie pas un chiffre dont on ne pourrait pas produire l’origine dans la demi-journée qui suit une demande.",
      },
      {
        kind: "ul",
        items: [
          "Données publiques citées avec leur producteur et leur millésime, jamais reprises de seconde main.",
          "Données internes accompagnées de leur périmètre : qui a été compté, sur quelle période, avec quelle méthode.",
          "Estimations annoncées comme des estimations, avec l’hypothèse qui les sous-tend.",
          "Aucun chiffre rond et flatteur dont personne ne sait d’où il vient : c’est celui qui sera relevé.",
        ],
      },
      {
        kind: "h2",
        text: "Les formats où se joue concrètement la communication institutionnelle",
        id: "formats",
      },
      {
        kind: "p",
        text: "Le terme recouvre des productions très différentes, et la plupart des organisations concentrent leur budget sur les plus visibles alors que la légitimité se construit surtout dans les moins spectaculaires. Le rapport d’activité, par exemple, est souvent traité comme une obligation administrative alors qu’il est le seul document que les financeurs lisent réellement de bout en bout.",
      },
      {
        kind: "ul",
        items: [
          "Le rapport d’activité et le document de mandature, lus par les tutelles et les partenaires.",
          "La prise de position publique : communiqué, tribune, contribution à une consultation.",
          "L’événement institutionnel (assemblée générale, congrès, remise de prix), traité en détail dans [organiser un congrès de fédération](/blog/organiser-congres-federation).",
          "Les relations avec la presse spécialisée, qui déterminent qui est appelé quand un sujet sort.",
          "Les supports de représentation : plaquette, stand, signalétique, dossier de présentation.",
          "La communication de crise, préparée en amont ou improvisée dans l’urgence.",
        ],
      },
      {
        kind: "h2",
        text: "Ce qui fait échouer une communication institutionnelle",
        id: "echecs",
      },
      {
        kind: "p",
        text: "Les échecs suivent des schémas répétitifs, et presque aucun ne relève de la qualité graphique. Ils tiennent à un décalage entre ce que l’organisation dit d’elle-même et ce que ses interlocuteurs constatent, ou à une discontinuité qui efface le travail accumulé.",
      },
      {
        kind: "ul",
        items: [
          "Le décalage entre le discours et l’expérience réelle : une institution qui se dit accessible mais ne répond pas aux courriers perd sur les deux tableaux.",
          "La remise à zéro à chaque changement de mandature, qui interdit toute capitalisation.",
          "La sur-communication interne : beaucoup de supports pour les membres, aucun signal vers l’extérieur.",
          "La réactivité asymétrique : présent sur les bonnes nouvelles, silencieux quand un sujet fâche.",
          "La confusion entre visibilité et légitimité, qui pousse à mesurer des audiences sans intérêt stratégique.",
        ],
      },
      {
        kind: "h3",
        text: "Le cas particulier du changement de mandature",
      },
      {
        kind: "p",
        text: "C’est le moment où la communication institutionnelle est la plus vulnérable. Une nouvelle équipe arrive avec sa propre vision, et la tentation de tout reprendre est forte, y compris ce qui fonctionnait. Le coût est rarement mesuré : chaque refonte remet à zéro la reconnaissance visuelle, oblige les partenaires à réapprendre qui est qui, et donne au passage le signal que l’institution s’intéresse surtout à elle-même. La question utile n’est pas de savoir si l’équipe précédente avait raison, mais quels éléments ont acquis une valeur de reconnaissance qu’il serait coûteux de détruire. Le sujet est traité plus longuement dans notre article sur la [refonte de logo d’une institution](/blog/refonte-logo-institution).",
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
        kind: "h3",
        text: "Des indicateurs observables, même sans outil de mesure",
      },
      {
        kind: "p",
        text: "L’absence de tableau de bord sophistiqué n’empêche pas le suivi. Les signaux les plus fiables sont qualitatifs et se relèvent à la main, une fois par trimestre, en une heure de travail. Ils ont l’avantage de rester lisibles par un conseil d’administration, ce qui n’est pas le cas d’un rapport d’audience.",
      },
      {
        kind: "ul",
        items: [
          "Le sens de la sollicitation : appelez-vous la presse, ou vous appelle-t-elle.",
          "La reprise du vocabulaire : vos formulations se retrouvent-elles dans la bouche de tiers.",
          "La présence dans les instances : êtes-vous invité aux tables où se discutent vos sujets.",
          "La cohérence perçue par les membres, mesurable par une question simple posée en assemblée.",
          "La capacité à mobiliser rapidement : combien de temps faut-il pour remplir une salle.",
        ],
      },
      {
        kind: "p",
        text: "C’est le terrain sur lequel A6 se positionne : voir [nos clients](/nos-clients) et notre offre de [relations presse](/nos-services/relations-presse). Si vous portez la communication d’une institution en Occitanie, [échangeons](/contact).",
      },
    ],
    faq: [
      {
        question: "Quelle est la différence entre communication institutionnelle et communication corporate ?",
        answer:
          "La communication corporate est le versant institutionnel d’une entreprise : elle parle de l’entreprise elle-même plutôt que de ses produits. La communication institutionnelle au sens large couvre en plus les organisations dont l’objet n’est pas commercial (ordres, fédérations, collectivités, fondations, associations), où la légitimité repose sur un mandat et non sur une performance de marché. La différence pratique se voit dans les preuves acceptables : une entreprise peut invoquer ses résultats, une institution doit invoquer son mandat, ses procédures et ses données vérifiables. Les deux registres partagent en revanche la même exigence de continuité, puisqu’ils s’adressent à des interlocuteurs qui se souviennent de ce qui a été dit trois ans plus tôt.",
      },
      {
        question: "Faut-il une agence pour porter une communication institutionnelle ?",
        answer:
          "Pas pour tout, et rarement pour le flux courant, qui gagne à rester interne parce qu’il exige une connaissance fine des dossiers. Le recours externe se justifie sur ce qui se fait une fois et engage durablement : la définition du socle de messages, l’identité, les documents de référence adressés aux tutelles, la conception d’un événement statutaire. Un critère utile pour trancher est la fréquence : ce qui revient chaque semaine s’internalise, ce qui structure plusieurs années se travaille avec un regard extérieur. L’essentiel est que le prestataire connaisse les contraintes de collégialité et de neutralité, faute de quoi le projet se heurtera aux instances plutôt qu’à un problème de création.",
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
    img: "/photos/blog/agence-communication-publique-collectivites-1-v2.webp",
    imgAlt:
      "Salle du conseil d’une collectivité, illustration de la communication publique",
    excerpt:
      "Une collectivité ne choisit pas son agence comme une entreprise : le cadre est réglementaire, l’exigence de neutralité constante et la continuité du service prime sur l’effet. Ce que cela implique concrètement.",
    body: [
      {
        kind: "p",
        text: "La communication publique désigne la communication des collectivités territoriales, établissements publics et services de l’État : informer les habitants, rendre compte de l’action publique, faire connaître un service, conduire une concertation. Elle se distingue de la communication institutionnelle privée par un cadre juridique contraignant et par une obligation permanente de neutralité : deux paramètres qui redéfinissent le métier.",
      },
      {
        kind: "p",
        text: "Le scénario type est celui d’un service communication de trois personnes, parfois d’une seule, qui doit tenir un bulletin municipal, un site, une page de réseau social, la signalétique des équipements, les supports de six directions différentes et les demandes arrivées la veille. Le recours à une agence n’y règle pas un manque d’idées mais un manque de capacité, et il est arbitré dans un cadre où le choix du prestataire n’appartient pas entièrement à celui qui travaillera avec lui.",
      },
      {
        kind: "h2",
        text: "Le cadre de la commande publique change la relation",
        id: "commande-publique",
      },
      {
        kind: "p",
        text: "Une collectivité ne peut pas choisir librement son prestataire au-delà de certains seuils : elle doit passer par une procédure de mise en concurrence encadrée par le [code de la commande publique](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000037701019/), avec des critères annoncés et pondérés. Pour l’agence, cela signifie répondre à un cahier des charges plutôt que proposer une vision, et être jugée sur des critères explicites dont le prix n’est qu’une composante.",
      },
      {
        kind: "p",
        text: "Pour la collectivité, l’enjeu est de rédiger un cahier des charges qui laisse la place à une proposition intelligente. Un cahier trop prescriptif obtient l’exécution de ce qu’il a décrit, y compris ses erreurs ; un cahier trop vague rend les offres incomparables. Nous détaillons ce point dans [répondre à un marché public de communication](/blog/marche-public-communication-repondre).",
      },
      {
        kind: "h3",
        text: "Marché ponctuel, accord-cadre, marché à bons de commande",
      },
      {
        kind: "p",
        text: "La forme retenue détermine la nature de la relation bien plus que le montant. Un marché ponctuel achète un livrable identifié, ce qui convient à une refonte ou à un événement unique. Un accord-cadre à bons de commande achète une capacité de production sur plusieurs années, avec des commandes déclenchées au fil de l’eau : c’est la forme adaptée au flux d’une collectivité, mais elle n’a de sens que si le bordereau de prix couvre réellement les prestations qui reviendront. Beaucoup de difficultés d’exécution viennent de là : une prestation non prévue au bordereau devient un point de friction récurrent, alors qu’elle aurait pu être anticipée en analysant une année type avant la rédaction de la consultation.",
      },
      {
        kind: "h3",
        text: "Ce que la mise en concurrence change dans le travail quotidien",
      },
      {
        kind: "p",
        text: "L’effet le moins discuté est la rigidité du périmètre. Une agence retenue sur un marché ne peut pas élargir librement son intervention, même quand elle identifie un besoin évident, sans risquer de sortir du cadre. Les équipes internes découvrent parfois cette limite au premier trimestre. La parade est de prévoir dès la consultation une ligne de conseil ou d’accompagnement suffisamment large pour absorber ce qui n’a pas été anticipé, et d’organiser un point d’étape annuel où les besoins non couverts sont recensés en vue de la consultation suivante.",
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
        kind: "h3",
        text: "Informer, rendre compte, promouvoir : trois registres à ne pas confondre",
      },
      {
        kind: "p",
        text: "Informer, c’est donner un renseignement utilisable : des horaires, un itinéraire de déviation, une date d’inscription. Rendre compte, c’est expliquer ce qui a été fait avec de l’argent public, ce qui reste légitime tant que le sujet est l’action et non la personne. Promouvoir un bilan personnel sort du champ de la communication publique. La frontière se déplace selon le contexte, et un même support peut basculer d’un registre à l’autre par le seul jeu des photographies et des attributions. La question de contrôle est directe : si l’on retire tous les noms et tous les portraits, le support reste-t-il utile au lecteur.",
      },
      {
        kind: "h3",
        text: "Les supports récurrents en période sensible",
      },
      {
        kind: "p",
        text: "Le bulletin municipal, la newsletter et les réseaux sociaux ne s’arrêtent pas parce qu’un scrutin approche : la collectivité doit continuer d’informer. Ce sont précisément ces supports habituels qui exigent le plus d’attention, car leur régularité fait baisser la vigilance. La pratique la plus sûre consiste à figer suffisamment tôt le format habituel, à documenter ce format, puis à ne rien y changer pendant la période : une rubrique nouvelle, une place inhabituelle accordée à un élu ou un ton soudain plus valorisant sont autant de variations qui se remarquent. Un regard extérieur au moment de la relecture aide, à condition qu’il ait été prévu au calendrier.",
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
        kind: "h3",
        text: "Le numérique et l’imprimé ne s’évaluent pas de la même façon",
      },
      {
        kind: "p",
        text: "Pour un site ou une application, l’accessibilité se vérifie au regard du [référentiel général d’amélioration de l’accessibilité (RGAA)](https://accessibilite.numerique.gouv.fr/), qui décrit des critères techniques testables un par un : structure des titres, alternatives, navigation au clavier, gestion du focus, contrastes. Le résultat s’écrit dans une déclaration d’accessibilité publiée sur le site. Pour l’imprimé, il n’existe pas d’équivalent aussi normé, mais les mêmes principes se transposent : corps de texte suffisant, contraste réel, alignement lisible, absence de texte posé sur une photographie chargée. Une collectivité qui commande un support doit demander explicitement lequel des deux régimes s’applique, car une agence qui n’a jamais produit pour le secteur public suppose souvent qu’aucun ne s’applique.",
      },
      {
        kind: "h3",
        text: "La compréhension fait partie de l’accessibilité",
      },
      {
        kind: "p",
        text: "Un document parfaitement conforme sur le plan technique peut rester inutilisable s’il est écrit dans une langue administrative. La démarche facile à lire et à comprendre (FALC) propose une méthode pour les publics en difficulté avec l’écrit : phrases courtes, une idée par phrase, vocabulaire courant, explication des termes indispensables. Toutes les publications n’ont pas à être produites en version FALC, mais les informations de service qui conditionnent un droit ou un accès méritent ce traitement. C’est aussi le meilleur exercice pour clarifier un texte destiné à tout le monde : ce qui devient lisible pour ces publics le devient pour les autres.",
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
        kind: "h3",
        text: "Ce que contient un kit qui rend une équipe interne autonome",
      },
      {
        kind: "p",
        text: "L’autonomie ne se décrète pas dans une réunion de restitution, elle se livre sous forme de fichiers utilisables par des personnes qui ne sont pas graphistes. Le test est simple : un agent qui doit annoncer une fermeture de service un vendredi à dix-sept heures peut-il produire seul un visuel correct.",
      },
      {
        kind: "ul",
        items: [
          "Des gabarits modifiables dans les logiciels réellement installés chez la collectivité, pas seulement dans une suite professionnelle.",
          "Une [charte graphique](/blog/charte-graphique-utile) courte et opérante, avec les cas d’usage plutôt que la théorie.",
          "Une bibliothèque de visuels libres de droits pour l’usage prévu, classée et nommée intelligiblement.",
          "Des règles éditoriales tenant en une page : ce qu’on écrit, ce qu’on n’écrit pas, comment on nomme les services.",
          "Une session de prise en main avec les agents concernés, et une personne joignable ensuite.",
        ],
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
        kind: "h3",
        text: "Les trois moments qui déterminent la crédibilité du dispositif",
      },
      {
        kind: "p",
        text: "Le premier est l’annonce : elle doit dire ce qui est ouvert à la discussion et ce qui ne l’est pas, faute de quoi les participants investissent leur énergie sur des points déjà tranchés et repartent avec le sentiment d’avoir été utilisés. Le deuxième est la conduite des échanges, où la question du lieu et de l’horaire pèse davantage que la qualité des supports : une réunion à dix-huit heures en centre-ville sélectionne un public. Le troisième, presque toujours négligé, est le retour : publier ce qui a été retenu, ce qui a été écarté et pourquoi. C’est ce dernier temps qui distingue une concertation d’une opération d’affichage, et c’est celui qui coûte le moins cher.",
      },
      {
        kind: "h2",
        text: "Les erreurs les plus fréquentes côté collectivité",
        id: "erreurs",
      },
      {
        kind: "p",
        text: "Le déséquilibre d’un marché de communication ne vient pas toujours de l’agence. Plusieurs difficultés récurrentes se décident du côté de la collectivité, au moment de la consultation ou dans les premières semaines d’exécution, et elles pèsent ensuite sur toute la durée du marché.",
      },
      {
        kind: "ul",
        items: [
          "Consulter sur un périmètre qui ne correspond pas au volume réel, ce qui rend les prix incomparables et l’exécution tendue.",
          "Multiplier les interlocuteurs sans désigner de référent unique côté collectivité, ce qui produit des demandes contradictoires.",
          "Faire valider les créations par une instance qui n’a jamais vu le brief, à un stade où tout changement coûte cher.",
          "Oublier de demander les fichiers sources et l’étendue des droits, et se retrouver captive à la fin du marché.",
          "Confondre urgence et priorité, jusqu’à ce que toutes les demandes soient urgentes et qu’aucune ne soit traitée sereinement.",
        ],
      },
      {
        kind: "h2",
        text: "Choisir son agence de communication publique : les critères qui discriminent",
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
          "Références sur des commanditaires publics ou parapublics : voir [nos clients](/nos-clients).",
          "Implantation territoriale : connaissance du terrain, des acteurs et des relais locaux.",
        ],
      },
      {
        kind: "p",
        text: "A6 est implantée à Montpellier et se positionne en Occitanie auprès d’institutions, de collectivités et du monde associatif et culturel. Pour en discuter, [contactez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Une collectivité peut-elle choisir librement son agence de communication ?",
        answer:
          "Au-delà de certains seuils, non : elle doit organiser une mise en concurrence avec des critères de sélection annoncés et pondérés. En dessous, la procédure est allégée mais les principes de la commande publique (égalité de traitement, transparence, bon usage des deniers publics) continuent de s’appliquer. Concrètement, cela signifie que le choix doit pouvoir se justifier devant un candidat évincé, ce qui suppose une trace écrite de la comparaison des offres. Cette contrainte est aussi une protection pour le service demandeur, puisqu’elle rend le choix opposable en interne. Elle explique enfin pourquoi une agence ne peut pas emporter la décision par la seule qualité d’une présentation orale.",
      },
      {
        question: "Qu’est-ce qui change en communication publique en période préélectorale ?",
        answer:
          "La frontière entre informer sur l’action publique et valoriser une personne devient critique, car un support qui met en avant un bilan peut être requalifié en communication de campagne. Le risque ne porte pas seulement sur les campagnes exceptionnelles : ce sont les supports habituels, bulletin et réseaux sociaux, qui exposent le plus, parce que leur régularité fait baisser la vigilance. La pratique la plus sûre consiste à figer le format habituel suffisamment tôt, à le documenter, puis à n’y introduire aucune nouveauté pendant la période. Une agence expérimentée sur le secteur public alerte sur ce risque en amont plutôt que de livrer sans commentaire, et prévoit un temps de relecture dédié au calendrier.",
      },
      {
        question: "L’accessibilité des supports publics est-elle obligatoire ?",
        answer:
          "Pour les sites et services numériques publics, des obligations légales d’accessibilité s’appliquent, avec un référentiel technique dédié, le RGAA, et une déclaration d’accessibilité à publier. Pour les supports imprimés, l’exigence relève de la mission de service public : une information destinée à toute la population doit être lisible par toute la population. Dans les deux cas, cela se vérifie techniquement et ne s’estime pas à l’œil. Le point à traiter dès la consultation est de préciser lequel des deux régimes s’applique à chaque livrable attendu.",
      },
      {
        question: "Comment juger une agence qui n’a pas encore de références publiques ?",
        answer:
          "L’absence de référence sur un commanditaire public n’est pas éliminatoire en soi, mais elle oblige à vérifier autrement la compréhension du cadre. Trois questions suffisent en entretien : comment l’agence gère un support en période préélectorale, comment elle contrôle l’accessibilité d’un livrable, et ce qu’elle remet exactement en fin de mission en matière de fichiers sources et de droits. Une agence qui répond précisément sur ces trois points a compris le métier, même si ses références viennent du secteur privé ou associatif. Une agence qui répond par son portfolio ne l’a pas compris, quelles que soient ses réalisations.",
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
    img: "/photos/blog/communication-associations-moyens-limites-1-v2.webp",
    imgAlt:
      "Membres d’une équipe réunis autour d’une table, illustration de la communication associative",
    excerpt:
      "Une association ne manque pas d’idées mais de temps et de continuité. La bonne stratégie n’est pas de faire plus avec moins : c’est de choisir moins de canaux et de les tenir vraiment.",
    body: [
      {
        kind: "p",
        text: "La communication associative a une contrainte particulière : elle repose sur des personnes qui ont autre chose à faire. Le bénévole qui gère les réseaux sociaux le fait après son travail, le salarié unique porte trois fonctions, et le président change tous les trois ans. Toute stratégie qui suppose une disponibilité régulière échoue, non par manque de volonté mais par structure.",
      },
      {
        kind: "p",
        text: "Cette contrainte n’est pas un défaut à corriger, c’est le cadre. Une association fonctionne par à-coups : une saison chargée, un creux estival, une assemblée générale qui redistribue les rôles, un renouvellement de bureau qui fait partir la personne qui tenait tout. Une stratégie de communication associative se juge donc à sa résistance aux discontinuités, pas à son ambition sur le papier. Le bon plan est celui qui survit au départ de son auteur.",
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
        kind: "h3",
        text: "Choisir le canal principal sans se fier aux usages généraux",
      },
      {
        kind: "p",
        text: "Les classements d’audience des plateformes ne disent rien de votre situation. Une association de parents d’élèves atteint ses familles par un groupe de messagerie, une association patrimoniale touche ses adhérents par un courriel trimestriel, un club sportif vit sur la plateforme où ses membres publient déjà leurs photos. La méthode la plus fiable consiste à demander directement, lors d’une assemblée ou d’une permanence, par quel moyen les gens ont appris la dernière information qu’ils ont retenue. La réponse contredit souvent l’intuition du bureau, et elle vous évite d’ouvrir un compte de plus.",
      },
      {
        kind: "h3",
        text: "Le rythme minimal qui rend un canal crédible",
      },
      {
        kind: "p",
        text: "Un canal n’a pas besoin d’être actif toutes les semaines, il a besoin d’être prévisible. Une publication mensuelle tenue douze fois de suite installe une attente ; huit publications en trois semaines suivies de six mois de silence installent le doute. Le meilleur test avant de s’engager est de compter ce que l’association a réellement produit l’an dernier en matière d’événements, de temps forts et d’informations utiles, puis de caler le rythme sur ce volume plutôt que sur une intention. Si la matière ne suffit pas à alimenter la fréquence envisagée, la fréquence est mauvaise, pas l’association.",
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
          "Les financeurs (collectivités, fondations, mécènes) qui attendent des preuves d’action et de rigueur.",
          "Le public bénéficiaire ou le grand public, qui attend une raison de venir ou de soutenir.",
        ],
      },
      {
        kind: "h3",
        text: "Le public le plus négligé est celui qui décide des moyens",
      },
      {
        kind: "p",
        text: "Les financeurs publics et privés lisent peu de choses, mais ils lisent attentivement. Un compte rendu d’activité clair, quelques photographies utilisables et une description honnête de ce qui a fonctionné pèsent davantage qu’une année de publications sur les réseaux. Beaucoup d’associations produisent chaque semaine du contenu qui ne parviendra jamais à ces interlocuteurs, et rédigent une fois par an, dans l’urgence, le seul document qu’ils ouvriront. Inverser ce rapport ne coûte rien : il s’agit de collecter tout au long de l’année la matière dont le dossier aura besoin, plutôt que de la reconstituer en décembre.",
      },
      {
        kind: "h3",
        text: "Un même événement raconté sous trois angles",
      },
      {
        kind: "p",
        text: "La rareté du temps rend précieuse la capacité à réutiliser. Une même sortie, une même représentation ou un même atelier fournit trois messages distincts : aux membres, l’information pratique et le remerciement nominatif ; aux financeurs, le nombre de personnes touchées et l’effet observé ; au grand public, l’invitation à la prochaine occasion. Ce sont trois textes courts écrits à partir d’une même collecte, pas trois projets éditoriaux. Une association qui prend l’habitude de ce triple usage double sa production apparente sans augmenter sa charge réelle.",
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
        kind: "h3",
        text: "Organiser la collecte plutôt que le planning éditorial",
      },
      {
        kind: "p",
        text: "Les calendriers éditoriaux échouent dans les structures bénévoles parce qu’ils supposent qu’une personne écrira à une date donnée. Ce qui tient, en revanche, c’est un réflexe de collecte : un dossier partagé où chacun dépose des photos et deux lignes de contexte après chaque activité. La rédaction se fait ensuite en une seule séance mensuelle, à partir de matière déjà disponible, ce qui transforme une tâche de création en tâche de mise en forme. La différence de charge mentale entre les deux explique une bonne part des abandons.",
      },
      {
        kind: "h3",
        text: "Désigner un référent, même sans compétence technique",
      },
      {
        kind: "p",
        text: "Le rôle utile n’est pas celui d’un rédacteur mais celui d’un gardien de la continuité : quelqu’un qui détient les accès, qui sait où sont les fichiers, qui vérifie que la page de contact est à jour et qui relance quand rien n’a été publié depuis deux mois. Cette fonction demande peu de temps et se transmet facilement, à condition d’être inscrite dans les rôles du bureau plutôt que laissée à la bonne volonté de la personne la plus à l’aise avec les outils. C’est aussi elle qui évite que les accès partent avec un départ.",
      },
      {
        kind: "h2",
        text: "Ce qu’une agence de communication apporte vraiment aux associations",
        id: "externaliser",
      },
      {
        kind: "p",
        text: "À l’inverse, certaines choses se font une fois et servent des années : ce sont précisément celles qu’il vaut mieux ne pas improviser. Un logo bricolé, une plaquette illisible ou un dossier de mécénat mal structuré coûtent des financements bien au-delà du prix d’une prestation.",
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
        kind: "h3",
        text: "Cadrer une petite prestation sans y passer six mois",
      },
      {
        kind: "p",
        text: "Une association qui commande pour la première fois hésite souvent entre un brief d’une ligne et un cahier des charges qu’elle n’aura pas le temps d’écrire. Le format intermédiaire suffit : une page qui dit à qui l’on s’adresse, ce que l’association fait vraiment, ce qui existe déjà, les trois usages prioritaires du livrable et la date à laquelle il doit servir. La question de l’usage est celle qui fait le plus économiser : une identité pensée pour un dossier de subvention et une banderole ne se conçoit pas comme une identité pensée pour un site. Prévoir dès le départ la remise des fichiers sources et le droit de les réutiliser évite d’avoir à recommencer quand le prestataire n’est plus disponible.",
      },
      {
        kind: "h3",
        text: "Le mécénat de compétences et les dispositifs d’appui",
      },
      {
        kind: "p",
        text: "Quand le budget est nul, il reste des voies structurées qui ne relèvent pas du bricolage. Les dispositifs locaux d’accompagnement à la vie associative, les fondations d’entreprise qui financent des projets plutôt que du fonctionnement, ou le mécénat de compétences proposé par certaines entreprises du territoire permettent de faire réaliser un livrable durable. La contrepartie est un calendrier plus long et une exigence de formalisation du besoin, qui reste de toute façon la partie que personne d’autre ne peut faire à votre place. La règle constante est la même : n’acceptez pas un travail dont vous ne récupérez pas les fichiers sources.",
      },
      {
        kind: "h2",
        text: "Le problème de la transmission",
        id: "transmission",
      },
      {
        kind: "p",
        text: "Dans une association, celui qui sait part. Les accès aux comptes, les fichiers sources du logo, la liste de presse et l’historique des subventions disparaissent avec la personne qui les détenait. C’est le risque le plus concret et le plus sous-estimé de la communication associative, et le plus simple à traiter.",
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
        kind: "h3",
        text: "Le dossier de passation, à constituer avant d’en avoir besoin",
      },
      {
        kind: "p",
        text: "Une demi-journée par an suffit à produire un document qui recense les comptes ouverts et leur adresse de récupération, l’hébergeur du site et l’échéance du nom de domaine, l’emplacement des fichiers sources, les contacts presse et partenaires, et l’historique des demandes de subvention avec leurs dates. Ce document n’a d’intérêt que s’il est constitué en période calme : personne ne le rédige pendant une passation. Il vaut mieux le tenir imparfaitement que pas du tout, et le relire au moment de chaque changement de bureau.",
      },
      {
        kind: "h2",
        text: "Ce qui ne fonctionne pas, malgré les apparences",
        id: "contre-cas",
      },
      {
        kind: "p",
        text: "Certaines solutions séduisent parce qu’elles semblent gratuites ou rapides, et coûtent en réalité du temps et de la crédibilité. Les reconnaître évite de refaire un chemin déjà parcouru par beaucoup de structures.",
      },
      {
        kind: "ul",
        items: [
          "Confier la communication à un stagiaire sans référent : le travail s’arrête à la fin du stage et rien n’est transmis.",
          "Multiplier les affiches sans plan de diffusion : le coût d’impression est visible, l’absence de lecteurs ne l’est pas.",
          "Attendre de la viralité d’une publication : elle ne se décide pas et ne remplace pas une relation suivie avec les publics.",
          "Refaire le logo pour relancer l’association : cela déplace l’énergie d’un problème d’activité vers un problème d’image.",
          "Ouvrir un site vitrine que personne ne mettra à jour, alors qu’une page bien tenue sur un annuaire local rend le même service.",
        ],
      },
      {
        kind: "p",
        text: "A6 propose cet accompagnement aux structures associatives et culturelles en Occitanie. Si vous voulez faire le point sur ce qui existe et ce qui manque, [écrivez-nous](/contact).",
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
          "Ce qui se fait une fois et sert longtemps : l’identité visuelle avec ses gabarits réutilisables, et une banque de photos de vos propres activités. Ces deux investissements alimentent ensuite tous vos supports, vos dossiers de subvention et vos relations presse sans coût récurrent. À l’inverse, tout ce qui doit être renouvelé chaque mois se paie chaque mois, et épuise vite un budget associatif. Si vous ne pouvez financer qu’une seule chose, financez les photographies : elles servent y compris à un support que vous n’avez pas encore imaginé.",
      },
      {
        question: "Comment éviter que la communication s’arrête au départ d’un bénévole ?",
        answer:
          "En séparant ce qui relève de la personne et ce qui relève de l’association. Les comptes doivent être ouverts avec une adresse de messagerie de la structure et non une adresse personnelle, les fichiers sources doivent être stockés dans un espace partagé accessible à plusieurs membres du bureau, et un référent doit être identifié dans les rôles, même s’il ne rédige rien lui-même. Un court dossier de passation, tenu à jour une fois par an, suffit à absorber la plupart des départs. C’est le point sur lequel une demi-journée de travail évite plusieurs mois de reconstruction.",
      },
      {
        question: "Une association doit-elle communiquer différemment vers ses financeurs ?",
        answer:
          "Oui, et c’est l’écart le plus rentable à travailler. Les financeurs attendent des preuves d’activité et de rigueur : ce qui a été fait, pour combien de personnes, avec quel effet observé, et ce qui n’a pas fonctionné. Ce registre factuel est différent de celui qui s’adresse aux membres, plus chaleureux, et de celui qui s’adresse au grand public, plus incitatif. La bonne pratique consiste à collecter la matière tout au long de l’année plutôt qu’à reconstituer un bilan au moment du dépôt du dossier, moment où les chiffres deviennent approximatifs et les photographies introuvables.",
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
    img: "/photos/blog/evenementiel-culturel-patrimoine-1-v2.webp",
    imgAlt:
      "Fronton sculpté d’un théâtre municipal, illustration de l’événementiel culturel et patrimonial",
    excerpt:
      "Un événement dans un site patrimonial obéit à une règle qui inverse les réflexes de l’événementiel classique : ce n’est pas le lieu qui sert l’événement, c’est l’événement qui doit servir le lieu.",
    body: [
      {
        kind: "p",
        text: "L’événementiel culturel et patrimonial a une particularité que l’événementiel corporate ignore : le lieu est le sujet, pas le décor. Une scénographie qui écrase un bâtiment historique, une signalétique qui masque une façade ou un flux de visiteurs mal canalisé dans un espace fragile produisent un événement réussi et un patrimoine abîmé. L’équilibre est le cœur du métier.",
      },
      {
        kind: "p",
        text: "Le mot « patrimonial » recouvre des situations très différentes : un monument protégé au titre des monuments historiques, une abbaye encore affectée au culte, un jardin remarquable dont le sol est la partie fragile, un site archéologique, une friche industrielle reconvertie. Le point commun est qu’une autorité extérieure au commanditaire dispose d’un droit de regard, et que ce regard porte sur des éléments qu’un organisateur venu du corporate n’identifie pas spontanément comme des enjeux.",
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
        kind: "h3",
        text: "Ce que la réversibilité interdit dans la pratique",
      },
      {
        kind: "p",
        text: "La liste des refus est plus instructive que le principe. Sont écartés : les adhésifs au sol sur pierre poreuse, les fixations en applique même provisoires, les élingues passées sur des éléments de charpente, les machines à fumée dans des volumes où les résidus se déposent, les projecteurs à forte émission de chaleur près d’un décor peint, les lestages posés à même un dallage ancien sans interface. Chacun de ces points a une solution de remplacement, généralement plus lourde en logistique et donc à budgéter tôt. C’est là que se joue l’écart de coût avec un événement en salle polyvalente, davantage que sur la scénographie elle-même, un poste dont nous détaillons la structure dans notre article sur le [budget d’un événement corporate](/blog/budget-evenement-corporate).",
      },
      {
        kind: "h3",
        text: "L’état des lieux n’est pas une formalité",
      },
      {
        kind: "p",
        text: "Le reportage photographique réalisé avant montage protège l’organisateur autant que le lieu. Il doit être daté, contradictoire, et couvrir en particulier les zones que le dispositif va approcher : sols, seuils, angles de murs, encadrements, mobilier laissé en place. Une éraflure préexistante non documentée devient, au démontage, une éraflure imputée. La même série refaite après démontage clôt le sujet et facilite le retour dans le lieu l’année suivante, ce qui est souvent l’enjeu réel : un gestionnaire de site accepte de rouvrir ses portes à une équipe qui lui a rendu son bâtiment intact.",
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
        kind: "h3",
        text: "Qui autorise quoi",
      },
      {
        kind: "p",
        text: "Il est utile de cartographier les interlocuteurs avant la première esquisse, car ils ne se prononcent pas sur les mêmes objets. Le propriétaire ou l’affectataire autorise l’occupation et fixe ses propres conditions d’usage. Les services de l’État chargés du patrimoine, en particulier l’unité départementale de l’architecture et du patrimoine, placée sous l’autorité du [ministère de la Culture](https://www.culture.gouv.fr/), se prononcent sur ce qui touche à un immeuble protégé ou à ses abords. La commune intervient pour l’occupation du domaine public, la circulation et le stationnement. La commission de sécurité compétente se prononce sur l’aménagement d’un établissement recevant du public, l’effectif admissible et les dégagements. Enfin, selon la programmation, s’ajoutent la déclaration des débits de boissons temporaires ou les obligations liées à la diffusion d’œuvres.",
      },
      {
        kind: "h3",
        text: "Un calendrier qui remonte à contre-courant",
      },
      {
        kind: "p",
        text: "Le rétroplanning se construit à partir de la date de la dernière séance ou du dernier avis attendu, pas à partir de la date de l’événement. Ce détail change tout, parce qu’un avis défavorable arrivant deux mois avant l’ouverture ne laisse pas le temps de reconcevoir. La pratique la plus sûre consiste à séparer la validation du principe d’implantation, obtenue tôt sur un document sommaire, et la validation des détails techniques, obtenue plus tard sur le dossier abouti. Cette séquence évite de payer une conception complète avant de savoir si l’idée est recevable.",
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
        text: "Un site patrimonial a une capacité d’accueil qui ne se déduit pas de sa surface : elle dépend de la fragilité des sols, de la largeur des circulations, des points d’étranglement et des issues. Faire venir plus de monde que le lieu ne peut absorber ne dégrade pas seulement l’expérience : cela crée un risque réel. La jauge se fixe donc avant la communication, jamais l’inverse.",
      },
      {
        kind: "p",
        text: "Le corollaire est une décision de communication : mieux vaut un événement complet et bien vécu qu’un événement saturé. Cela suppose parfois d’assumer une billetterie ou une inscription là où la gratuité libre serait plus séduisante.",
      },
      {
        kind: "h3",
        text: "Repérer les points d’étranglement avant de dessiner un parcours",
      },
      {
        kind: "p",
        text: "La capacité réelle d’un site ancien se lit dans ses passages contraints : un escalier à vis, une porte basse, un couloir où deux personnes ne se croisent pas, un seuil surélevé. Ces points fixent le débit, c’est-à-dire le nombre de personnes qui peuvent circuler par unité de temps, et donc la forme du parcours. Un sens unique de circulation résout la plupart des situations, à condition d’être décidé au moment de la conception et rendu lisible par une [signalétique](/blog/signaletique-evenementielle-regles) posée au bon endroit. La correction improvisée le jour même, avec des agents postés aux carrefours, coûte plus cher et fonctionne moins bien.",
      },
      {
        kind: "h3",
        text: "Le plan de repli fait partie du projet, pas des imprévus",
      },
      {
        kind: "p",
        text: "Beaucoup de sites patrimoniaux se visitent en extérieur ou dans des volumes non chauffés, ce qui expose la programmation à la météo. Un report n’est presque jamais possible quand les autorisations, les artistes et les publics sont calés sur une date. La solution se prépare au moment de l’implantation : identifier un volume couvert utilisable, vérifier qu’il est autorisé au même titre que l’espace principal, et dimensionner la jauge en conséquence. Un plan de repli qui n’a pas été soumis aux mêmes validations que le dispositif principal n’est pas un plan de repli, c’est une intention.",
      },
      {
        kind: "h2",
        text: "Les contraintes techniques propres aux sites anciens",
        id: "technique",
      },
      {
        kind: "p",
        text: "Un bâtiment ancien n’a pas été conçu pour accueillir un dispositif temporaire, et les difficultés se concentrent sur des sujets peu spectaculaires qui décident pourtant de la faisabilité. Elles se relèvent lors d’une visite technique, jamais sur plan.",
      },
      {
        kind: "ul",
        items: [
          "La puissance électrique disponible et son emplacement, souvent insuffisante pour l’éclairage, le son et la restauration simultanés.",
          "Les cheminements de câbles, qui ne peuvent ni traverser un passage public sans protection ni longer un élément protégé.",
          "L’accès des véhicules de montage : largeur de porche, portance du sol, absence de quai, horaires imposés par le voisinage.",
          "L’acoustique de volumes très réverbérants, qui rend inaudible une prise de parole non sonorisée correctement.",
          "La sensibilité de certains lieux à l’humidité et aux variations de température apportées par une forte affluence.",
          "Les nuisances sonores nocturnes, encadrées par la commune et souvent décisives sur l’heure de fin.",
        ],
      },
      {
        kind: "h2",
        text: "La médiation fait la différence",
        id: "mediation",
      },
      {
        kind: "p",
        text: "Un visiteur qui traverse un site sans comprendre ce qu’il regarde a vu un beau décor. La médiation (ce qui explique, situe et raconte) est ce qui transforme la visite en expérience. Elle ne demande pas nécessairement de gros moyens : une [rédaction éditoriale](/nos-services/production-de-contenus) juste, quelques dispositifs bien placés et des médiateurs briefés valent mieux qu’un dispositif technologique mal intégré.",
      },
      {
        kind: "h3",
        text: "Trois niveaux de médiation, à doser selon le public",
      },
      {
        kind: "p",
        text: "Le premier niveau répond à la question « qu’est-ce que je regarde » et doit être lisible en quelques secondes, debout, sans lunettes de lecture. Le deuxième situe l’élément dans une histoire et s’adresse au visiteur qui s’arrête. Le troisième, réservé à ceux qui veulent aller plus loin, peut prendre la forme d’un livret, d’une page en ligne ou d’un échange avec un médiateur. L’erreur classique consiste à ne produire que le deuxième niveau : trop long pour ceux qui passent, trop court pour ceux qui cherchent. Étager permet de servir les deux sans allonger les textes affichés.",
      },
      {
        kind: "h3",
        text: "Le dispositif numérique ne remplace pas la médiation",
      },
      {
        kind: "p",
        text: "Un écran, un casque ou une application ajoutent une couche technique qui doit être installée, alimentée, entretenue pendant l’événement et désinstallée. Ils apportent quelque chose quand ils montrent ce que le visiteur ne peut pas voir : un état disparu, un dessous de voûte, un geste technique. Ils n’apportent rien quand ils affichent un texte qu’un panneau bien écrit aurait porté. La question à poser avant d’engager la dépense est de savoir ce que le dispositif rend visible et qui ne l’est pas autrement. Si la réponse n’est pas évidente, l’argent est mieux placé sur des médiateurs formés.",
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
        text: "Sur un site patrimonial, la réussite ne se mesure pas au nombre d’entrées mais à ce que les visiteurs ont compris, et à l’état dans lequel on rend le lieu.",
      },
      {
        kind: "h3",
        text: "Photographier et filmer un lieu sans le trahir",
      },
      {
        kind: "p",
        text: "Les images produites pendant l’événement serviront ensuite au site, aux partenaires et à l’édition suivante, ce qui en fait un livrable à part entière et non un souvenir. Deux précautions valent d’être posées au brief : ne pas photographier sous un angle qui suggère une ampleur que le lieu n’a pas, et prévoir explicitement les autorisations de droit à l’image des participants ainsi que les conditions de diffusion négociées avec le gestionnaire du site. Le cadrage nocturne, très flatteur sur un bâtiment éclairé, est celui qui produit le plus de déception lorsqu’il devient le visuel principal d’une communication annonçant une visite de jour. Les questions d’organisation d’une [captation vidéo d’événement](/blog/captation-video-evenement) se posent ici avec une contrainte supplémentaire de discrétion des équipes.",
      },
      {
        kind: "h2",
        text: "Ce qu’une agence d’événementiel culturel apporte sur un site sensible",
        id: "terrain",
      },
      {
        kind: "p",
        text: "Le champ culturel, patrimonial et associatif fait partie des segments sur lesquels A6 se positionne, aux côtés des institutions professionnelles. Voir notre offre de [conception et scénographie](/nos-services/conception-et-scenographie). Pour un projet dans un site sensible, [parlons-en tôt](/contact) : c’est là que le conseil a le plus de valeur.",
      },
    ],
    faq: [
      {
        question: "Peut-on installer une scénographie dans un monument historique ?",
        answer:
          "Oui, à condition qu’elle soit entièrement réversible : structures autoportantes, aucune fixation au bâti, aucun contact avec les surfaces sensibles, éclairage sans chaleur. Les autorisations dépendent du statut du site et des autorités concernées, et doivent être engagées avant la conception détaillée car leurs avis peuvent modifier le projet en profondeur. En pratique, la contrainte se traduit surtout par un surcoût de logistique : lestage, interfaces de protection au sol, cheminements de câbles protégés, moyens de levage adaptés. Un état des lieux photographique contradictoire avant montage et après démontage complète le dispositif et conditionne souvent la possibilité de revenir dans le lieu l’année suivante.",
      },
      {
        question: "Comment fixer la jauge d’un événement dans un site patrimonial ?",
        answer:
          "Pas à partir de la surface mais des contraintes réelles : fragilité des sols, largeur des circulations, points d’étranglement, issues de secours. La jauge doit être arrêtée avant l’ouverture de la communication, car il est impossible de restreindre ensuite une fréquentation qu’on a encouragée. Le repère utile est le débit des passages contraints plutôt que la capacité théorique des volumes, puisque c’est le point le plus étroit qui commande l’ensemble du parcours. Une fois la jauge fixée, le choix entre entrée libre, inscription préalable ou billetterie devient une conséquence et non une préférence.",
      },
      {
        question: "Combien de temps faut-il prévoir avant un événement en site patrimonial ?",
        answer:
          "Le facteur limitant n’est pas la production mais l’instruction des autorisations, qui dépend d’autorités dont le calendrier ne s’adapte pas au vôtre. La méthode consiste à repérer d’abord les échéances des instances concernées, puis à construire le rétroplanning à rebours de la dernière validation attendue. Un principe d’implantation soumis très tôt, même sommaire, permet de connaître les lignes rouges avant d’engager la conception détaillée. À l’inverse, un projet finalisé présenté tardivement expose à une reprise complète, avec des coûts déjà engagés.",
      },
      {
        question: "Un événement culturel doit-il être gratuit pour toucher un large public ?",
        answer:
          "La gratuité élargit l’accès mais elle rend la fréquentation imprévisible, ce qui est un problème réel dans un lieu à capacité contrainte. L’inscription gratuite préalable est souvent le bon compromis : elle conserve l’accessibilité, donne une visibilité sur les effectifs et permet de prévenir les inscrits en cas de changement. Une billetterie payante, même à petit prix, réduit fortement l’absentéisme mais introduit une barrière qui doit être assumée au regard du projet. Le choix se décide au regard de la jauge et de la mission du lieu, pas au regard de la recette attendue.",
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
    img: "/photos/blog/marche-public-communication-repondre-1-v2.webp",
    imgAlt:
      "Signature d’un dossier de réponse, illustration d’un marché public de communication",
    excerpt:
      "Un marché public ne se gagne pas avec la plus belle idée mais avec l’offre qui répond le mieux aux critères annoncés. Comment les lire, et comment structurer un mémoire technique qui se laisse noter.",
    body: [
      {
        kind: "p",
        text: "Répondre à un marché public de communication demande un travail différent d’une réponse à un appel d’offres privé. L’acheteur public est tenu par les critères qu’il a publiés, dans le cadre fixé par le [code de la commande publique](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000037701019/) : il ne peut pas retenir une offre séduisante qui note mal. Comprendre ce cadre est utile aux deux parties : aux agences pour bâtir une offre notable, aux collectivités pour rédiger des critères qui font remonter les bonnes propositions.",
      },
      {
        kind: "h2",
        text: "Ce qui distingue un marché public de communication d’une consultation privée",
        id: "difference-prive",
      },
      {
        kind: "p",
        text: "Dans le privé, une agence peut convaincre en déplaçant le sujet : proposer autre chose que ce qui a été demandé, montrer un travail antérieur, créer une relation. Dans le public, ces leviers ne fonctionnent plus de la même façon, parce que l’acheteur doit pouvoir justifier son choix devant un candidat évincé et, le cas échéant, devant un juge. Tout ce qui n’est pas traçable dans le dossier remis n’existe pas.",
      },
      {
        kind: "h3",
        text: "L’écrit prime sur l’oral",
      },
      {
        kind: "p",
        text: "Une consultation publique se juge d’abord sur pièces. Même lorsqu’une audition est prévue, elle sert à confirmer ou à préciser une offre déjà déposée, rarement à la refonder. Une équipe habituée à emporter la décision en réunion se retrouve désavantagée si elle a consacré son énergie à préparer une présentation plutôt que le mémoire technique. Le réflexe utile consiste à traiter le document écrit comme le livrable principal de la réponse, et l’oral comme un complément dont on ne sait pas s’il aura lieu.",
      },
      {
        kind: "h3",
        text: "L’égalité de traitement encadre les échanges",
      },
      {
        kind: "p",
        text: "Pendant la consultation, l’acheteur ne peut pas donner à un candidat une information qu’il ne donne pas aux autres. Les questions posées via la plateforme reçoivent des réponses publiées à tous, ce qui décourage certaines agences de poser la question dont elles auraient le plus besoin. C’est un mauvais calcul : une réponse ambiguë sur un point structurant coûte plus cher qu’un avantage d’information hypothétique. Poser tôt, précisément, et sur un point qui engage le chiffrage reste la meilleure pratique. À l’inverse, solliciter un contact informel avec le service demandeur en cours de consultation place l’acheteur en difficulté et laisse une impression durable.",
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
        kind: "h3",
        text: "Lire la pondération avant de décider de répondre",
      },
      {
        kind: "p",
        text: "La répartition des points raconte l’intention de l’acheteur. Une consultation où le prix pèse très lourd cherche un exécutant sur un périmètre bien défini ; une consultation où la valeur technique domine cherche un partenaire sur un sujet qu’elle ne maîtrise pas entièrement. Les sous-critères sont encore plus parlants, car ils indiquent ce qui préoccupe réellement le service : si la continuité de service et les délais de réaction sont détaillés, c’est en général qu’une expérience passée s’est mal terminée. Une lecture attentive de ce tableau renseigne mieux sur le client qu’une réunion de présentation.",
      },
      {
        kind: "h3",
        text: "Le go ou no-go est la décision la plus rentable",
      },
      {
        kind: "p",
        text: "Une réponse à un marché mobilise plusieurs jours de travail non facturés. Décider tôt de ne pas répondre est donc un acte de gestion, pas un renoncement. Trois signaux justifient de passer son tour : un périmètre qui ne correspond pas à ce que la structure sait produire en propre, une pondération du prix qui rend la consultation inaccessible à un coût de production honnête, et un cahier des charges dont les volumes réels sont impossibles à estimer. Répondre systématiquement dégrade la qualité de chaque réponse ; sélectionner permet d’en soigner deux plutôt que d’en bâcler cinq.",
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
        kind: "h3",
        text: "Écrire un mémoire technique qui se laisse noter",
      },
      {
        kind: "p",
        text: "La personne qui note lit plusieurs dossiers dans la même journée, avec la grille sous les yeux. Tout ce qui l’oblige à chercher une information lui coûte du temps et vous coûte des points. Reprendre l’ordre exact des critères comme plan du mémoire, titrer chaque partie avec l’intitulé du critère, et placer en tête de partie la réponse directe avant les développements suffit à changer une note. Les preuves concrètes valent mieux que les intentions : un extrait de calendrier type, un exemple de circuit de validation, une copie d’écran d’un outil de suivi. Une déclaration comme « nous sommes réactifs » ne se note pas ; un engagement de réponse sous un délai précis, avec la personne qui en répond, se note.",
      },
      {
        kind: "h3",
        text: "Traiter la partie environnementale et sociale au sérieux",
      },
      {
        kind: "p",
        text: "De plus en plus de consultations comportent un critère lié aux considérations environnementales ou à l’insertion, dans la lignée des repères publiés par l’[ADEME](https://www.ademe.fr/) sur l’écoconception événementielle. Il est souvent traité en dernier et rempli de généralités, alors qu’il porte des points faciles à sécuriser. Les éléments qui se notent sont ceux qui se vérifient : le choix des supports et des imprimeurs, la gestion des fichiers de fin de vie d’un dispositif, la limitation des déplacements sur des réunions récurrentes, le recours à des prestataires locaux quand le marché l’autorise. Les mêmes logiques structurent un [événementiel responsable](/blog/evenementiel-responsable-reperes), et un candidat qui les applique déjà n’a qu’à les décrire.",
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
        kind: "h3",
        text: "Les points qu’une cession de droits doit préciser",
      },
      {
        kind: "p",
        text: "Une formule générale du type « cession de tous droits » ne règle rien et se retourne parfois contre les deux parties. Le sujet mérite quatre lignes explicites, qui évitent des discussions pénibles au moment où la collectivité voudra réutiliser un visuel plusieurs années plus tard.",
      },
      {
        kind: "ul",
        items: [
          "Les supports couverts : impression, web, réseaux, affichage, produits dérivés éventuels.",
          "La durée et le territoire de la cession, avec les conditions d’une prolongation.",
          "Le droit de modification, qui conditionne la capacité des équipes internes à décliner elles-mêmes.",
          "Le sort des éléments tiers intégrés : polices sous licence, photographies achetées, musiques, dont les droits ne se cèdent pas automatiquement.",
          "Le format et le délai de remise des fichiers sources, y compris en fin de marché ou en cas de résiliation.",
        ],
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
        kind: "h3",
        text: "Simuler une année de commandes avant de remplir le bordereau",
      },
      {
        kind: "p",
        text: "Sur un marché à bons de commande, la note de prix se calcule généralement sur un panier de prestations défini par l’acheteur, qui ne reflète pas toujours ce qui sera réellement commandé. Une agence qui optimise agressivement les lignes du panier et remonte ses prix ailleurs peut gagner la consultation et perdre de l’argent pendant trois ans. La précaution consiste à reconstituer une année type à partir des informations disponibles, puis à vérifier que la structure tarifaire proposée reste soutenable sur ce scénario. Cet exercice sert aussi de garde-fou : s’il montre une exécution déficitaire, la bonne décision est de ne pas répondre.",
      },
      {
        kind: "h2",
        text: "Les erreurs qui éliminent avant même la notation",
        id: "erreurs-forme",
      },
      {
        kind: "p",
        text: "Une partie des offres est écartée pour des motifs qui n’ont rien à voir avec leur contenu. Ce sont les plus frustrantes, parce qu’elles suppriment plusieurs jours de travail sans qu’aucun évaluateur ait lu une ligne de la proposition.",
      },
      {
        kind: "ul",
        items: [
          "Le dépôt hors délai : l’heure limite est celle de la plateforme, et un dépôt volumineux lancé au dernier moment échoue régulièrement.",
          "Une pièce administrative manquante ou non signée par la personne habilitée.",
          "Le non-respect d’un nombre de pages ou d’un format imposé, quand le règlement de consultation le prévoit expressément.",
          "Une réponse partielle sur un marché alloti, sans indiquer clairement les lots visés.",
          "Un document nommé de façon incohérente avec le bordereau demandé, qui complique le rapprochement des pièces.",
          "Une modification du cadre de réponse fourni, alors qu’il devait être complété tel quel.",
        ],
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
        kind: "h3",
        text: "Allotir ou non, une décision structurante",
      },
      {
        kind: "p",
        text: "Découper le marché en lots (conseil, création, impression, web, événementiel) ouvre la consultation à des structures spécialisées et souvent locales, mais multiplie les interlocuteurs et reporte la coordination sur le service communication, qui n’en a pas toujours le temps. Un marché non alloti simplifie la vie quotidienne au prix d’une dépendance plus forte à un seul prestataire. Il n’existe pas de bonne réponse générale, seulement une question à trancher lucidement : qui assurera la coordination, avec quelles heures disponibles. Répondre à cette question avant de rédiger évite de découvrir le problème au premier trimestre d’exécution.",
      },
      {
        kind: "h3",
        text: "Ce qui rend une exécution durablement saine",
      },
      {
        kind: "p",
        text: "La qualité d’un marché de communication se joue autant après l’attribution que pendant la sélection. Un référent unique côté collectivité, une réunion de lancement où les circuits de validation sont écrits, un point d’étape à mi-parcours où les difficultés se disent, et un bilan annuel qui alimente la consultation suivante : ces quatre habitudes coûtent quelques heures par an et évitent la dégradation progressive que beaucoup de services constatent en fin de marché. Elles donnent aussi à l’agence le cadre dont elle a besoin pour proposer autre chose que ce qu’on lui demande.",
      },
      {
        kind: "p",
        text: "A6 se positionne auprès des institutions et des collectivités en Occitanie : voir [nos clients](/nos-clients) et notre approche de la [communication publique](/blog/agence-communication-publique-collectivites). Pour une consultation en cours, [contactez-nous](/contact).",
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
          "Parce qu’il crée une incohérence avec le mémoire technique. Si l’offre annonce une équipe dédiée et une forte réactivité pour un montant anormalement faible, l’acheteur en déduit soit une sous-évaluation qui se traduira par des avenants, soit une exécution dégradée. La cohérence entre promesse et prix fait partie de l’évaluation. Sur un marché à bons de commande, le risque est amplifié par le fait que la note de prix porte sur un panier de prestations qui ne reflète pas forcément les commandes réelles.",
      },
      {
        question: "Une agence sans référence publique peut-elle remporter un marché ?",
        answer:
          "Oui, car les références ne constituent qu’un élément parmi d’autres et ne peuvent pas, à elles seules, écarter une candidature recevable. Ce qui se note est la capacité démontrée à réaliser la prestation demandée, laquelle peut s’appuyer sur des travaux comparables réalisés pour des commanditaires privés, associatifs ou culturels. Le point d’attention porte ailleurs : une agence qui n’a jamais travaillé pour un acheteur public sous-estime souvent les circuits de validation, les contraintes d’accessibilité et les périodes sensibles. Décrire précisément la façon dont ces sujets seront traités compense largement l’absence de référence.",
      },
      {
        question: "Faut-il poser des questions pendant la consultation ?",
        answer:
          "Oui, dès qu’un point structurant reste ambigu, en particulier sur les volumes attendus, le périmètre exact des prestations ou les modalités de remise des sources. Les réponses sont communiquées à l’ensemble des candidats, ce qui dissuade certaines agences de demander quoi que ce soit par crainte d’aider leurs concurrents. Le calcul est mauvais : une hypothèse erronée sur un volume fausse le chiffrage et peut rendre l’exécution déficitaire pendant toute la durée du marché. Mieux vaut poser tôt, précisément, et par le canal officiel de la plateforme.",
      },
    ],
    related: [
      { label: "Communication publique et collectivités", href: "/blog/agence-communication-publique-collectivites" },
      { label: "Communication institutionnelle : les enjeux", href: "/blog/communication-institutionnelle-enjeux" },
      { label: "Comment choisir une agence de communication", href: "/blog/choisir-agence-communication" },
    ],
  },

  {
    slug: "grand-prix-des-maires-2026",
    title: "Grand Prix des Maires 2026 : candidatures ouvertes pour les projets locaux innovants",
    metaTitle: "Grand Prix des Maires 2026 | A6",
    metaDescription:
      "BFM, RMC et l’Association des Maires de France ouvrent la 9e édition du Grand Prix des Maires. Ce que ce concours change pour la communication d’une collectivité.",
    keyword: "grand prix des maires",
    category: "Institutionnel",
    date: "2026-08-25",
    dateLabel: "Août 2026",
    readingMinutes: 3,
    img: "/photos/blog/agence-communication-publique-collectivites-1-v2.webp",
    imgAlt: "Salle du conseil d’une collectivité, illustration du Grand Prix des Maires 2026",
    excerpt:
      "BFM, BFM Locales, RMC et l’Association des Maires de France ouvrent la 9e édition du Grand Prix des Maires. Six catégories, une cérémonie au Théâtre du Lido le 24 novembre 2026 : ce qu’une collectivité candidate a intérêt à préparer dès maintenant.",
    body: [
      {
        kind: "p",
        text: "BFM, BFM Locales et RMC ouvrent, en partenariat avec l’Association des Maires de France, les candidatures de la 9ᵉ édition du [Grand Prix des Maires](https://www.grandprixdesmaires-candidatures.fr/). Le concours distingue les maires et élus locaux qui portent des projets ambitieux au service de leurs administrés, dans six catégories.",
      },
      {
        kind: "ul",
        items: [
          "Ville / commune sociale et solidaire",
          "Prix spécial santé MNT (nouveau)",
          "Aménagement et bâti responsable",
          "Environnement et mobilités",
          "Sport et culture",
          "Agriculture et alimentation",
        ],
      },
      {
        kind: "note",
        text: "La cérémonie de remise des prix se tient le mardi 24 novembre 2026 au Théâtre du Lido, à Paris. L’an dernier, plus de 380 candidatures avaient été déposées.",
      },
      {
        kind: "p",
        text: "Pour une commune ou une intercommunalité, ce type de concours n’est jamais qu’une case à cocher. Une candidature qui retient l’attention d’un jury raconte un projet avec les mêmes exigences qu’un dossier de presse ou qu’un rapport d’activité : un chiffre sourcé, un avant/après concret, un impact vérifiable pour les habitants plutôt qu’une promesse. C’est aussi l’occasion de mobiliser en interne les équipes et les partenaires qui ont porté le projet, et de préparer en amont les visuels et le récit qui serviront ensuite, prix ou non.",
      },
      {
        kind: "p",
        text: "Notre agence accompagne des institutions et collectivités d’Occitanie dans la valorisation de leurs projets et leurs [relations presse](/nos-services/relations-presse). Si vous portez un projet qui mériterait d’être candidaté, [échangeons](/contact).",
      },
    ],
  },

  {
    slug: "frederic-carre-president-ffb",
    title: "Frédéric Carré à la présidence de la FFB : ce que change une nouvelle présidence",
    metaTitle: "Frédéric Carré, président de la FFB | A6",
    metaDescription:
      "Frédéric Carré, dirigeant du Groupe Carré à Tournefeuille, préside la Fédération Française du Bâtiment depuis juin 2026. Les enjeux de communication d’une passation.",
    keyword: "élection président FFB",
    category: "Institutionnel",
    date: "2026-08-25",
    dateLabel: "Août 2026",
    readingMinutes: 3,
    img: "/photos/blog/organiser-congres-federation-1-v2.webp",
    imgAlt: "Rangées de sièges d’un auditorium vide, illustration de l’élection à la présidence d’une fédération professionnelle",
    excerpt:
      "Frédéric Carré, dirigeant du Groupe Carré à Tournefeuille, préside la Fédération Française du Bâtiment depuis le 19 juin 2026. Ce qu’une passation de ce type engage pour la communication d’une organisation professionnelle.",
    body: [
      {
        kind: "p",
        text: "Frédéric Carré a été [élu président de la Fédération Française du Bâtiment](https://www.ffbatiment.fr/actualites-batiment/presse/communique-presse-election-mars-2026-frederic-carre) (FFB) le 20 mars 2026, à l’issue d’un conseil d’administration. Il a pris ses fonctions le 19 juin 2026, succédant à Olivier Salleron, qui présidait la fédération depuis 2020. Âgé de 51 ans, Frédéric Carré dirige le Groupe Carré, entreprise de métallerie et de construction métallique de 150 salariés basée à Tournefeuille, en Haute-Garonne. Il occupait jusque-là la présidence du conseil des régions de la FFB et la présidence de la Fédération régionale FFB Occitanie.",
      },
      {
        kind: "p",
        text: "Une présidence occitane à la tête d’une fédération nationale, c’est un repère qui compte pour les acteurs du bâtiment de la région — et un rappel de ce que change, en communication, une passation à la tête d’une organisation professionnelle. Le nouveau président hérite d’une parole qui engage l’ensemble d’une profession, y compris ceux qui n’ont pas voté pour lui ; le premier travail consiste à distinguer ce qui relève d’une position déjà actée par la fédération de ce qui reste à construire sous ce nouveau mandat, avant toute prise de parole publique.",
      },
      {
        kind: "p",
        text: "C’est un exercice que nous connaissons bien aux côtés d’ordres professionnels et de fédérations en Occitanie : voir notre article sur la [communication institutionnelle](/blog/communication-institutionnelle-enjeux) et [échanger avec nous](/contact).",
      },
    ],
  },
];
