import type { BlogPost } from "@/lib/blog/types";

/**
 * Cluster méthode & services restants — couvre les requêtes informationnelles
 * du tableau 4 du KEYWORD-MAP (choix de prestataire, signalétique
 * événementielle, communication interne) et les services encore non adressés
 * (audiovisuel, digital local).
 */
export const postsMethode: BlogPost[] = [
  {
    slug: "choisir-agence-communication",
    title: "Comment choisir une agence de communication : la checklist",
    metaTitle: "Choisir une agence de communication | A6",
    metaDescription:
      "Une méthode en quatre temps pour choisir une agence de communication : cadrer son besoin, comparer ce qui est comparable et repérer les signaux d’alerte.",
    keyword: "comment choisir une agence de communication",
    category: "Méthode",
    date: "2026-07-02",
    dateLabel: "Juillet 2026",
    readingMinutes: 8,
    img: "/photos/DSC_0836.webp",
    imgAlt:
      "Réunion de cadrage entre une organisation et son agence de communication à Montpellier",
    excerpt:
      "Toutes les agences présentent de beaux projets et disent la même chose. La sélection se joue ailleurs : sur la façon dont vous cadrez votre besoin et sur trois ou quatre questions que peu de clients posent.",
    body: [
      {
        kind: "p",
        text: "Choisir une agence de communication est difficile parce que les portfolios se ressemblent et que le discours commercial est homogène : tout le monde est à l’écoute, créatif et stratégique. La sélection utile ne consiste donc pas à comparer des présentations mais à cadrer précisément votre besoin, puis à poser les questions qui font apparaître les différences réelles.",
      },
      {
        kind: "h2",
        text: "Temps 1 — Écrire ce que vous voulez obtenir, pas ce que vous voulez acheter",
        id: "cadrer",
      },
      {
        kind: "p",
        text: "La plupart des briefs décrivent des livrables : un site, une plaquette, une campagne. C’est une erreur de méthode, parce que cela empêche l’agence de proposer une meilleure solution que celle que vous avez imaginée. Un brief utile décrit une situation et un résultat attendu, et laisse le moyen ouvert.",
      },
      {
        kind: "ul",
        items: [
          "La situation actuelle et ce qui ne fonctionne pas.",
          "Les publics que vous devez atteindre, par ordre de priorité réelle.",
          "Le résultat qui vous ferait dire, dans un an, que c’était réussi.",
          "Vos contraintes : budget, délai, circuit de validation, moyens internes.",
        ],
      },
      {
        kind: "note",
        text: "Le budget fait partie du brief. Sans enveloppe, vous recevrez des propositions non comparables et souvent hors de portée. L’annoncer n’augmente pas le prix : cela oriente la conception vers ce qui est réalisable chez vous.",
      },
      {
        kind: "h2",
        text: "Temps 2 — Vérifier l’adéquation de registre",
        id: "registre",
      },
      {
        kind: "p",
        text: "C’est le critère le plus prédictif et le moins regardé. Une agence excellente sur des marques grand public peut être inadaptée à une institution, non par incompétence mais par habitude de registre : elle proposera de l’audace là où il faut de la neutralité, de la réactivité là où il faut de la collégialité. Regardez donc moins la qualité des références que leur nature.",
      },
      {
        kind: "ul",
        items: [
          "L’agence a-t-elle travaillé pour des commanditaires de votre type ?",
          "Comprend-elle votre circuit de validation, ou le considère-t-elle comme un obstacle ?",
          "Ses références récentes relèvent-elles du même registre que le vôtre ?",
        ],
      },
      {
        kind: "h2",
        text: "Temps 3 — Les questions qui font la différence",
        id: "questions",
      },
      {
        kind: "p",
        text: "Ces questions ne testent pas la créativité mais la solidité de l’engagement. Elles se posent en entretien et les réponses sont très discriminantes — non parce qu’il existe une bonne réponse unique, mais parce qu’une réponse floue révèle un point non pensé.",
      },
      { kind: "h3", text: "Qui fera réellement le travail ?" },
      {
        kind: "p",
        text: "La personne qui vous séduit en rendez-vous n’est pas toujours celle qui produira. Demandez les noms, les rôles et le temps affecté. Dans une petite structure, la réponse est simple ; dans une grande, c’est une information que vous devez obtenir.",
      },
      { kind: "h3", text: "Que se passe-t-il quand ça dérape ?" },
      {
        kind: "p",
        text: "Un délai raté, une livraison non conforme, une urgence non prévue : demandez comment l’agence a géré un incident réel sur un projet passé. Une agence qui n’a jamais eu de problème n’a pas assez d’expérience ou n’est pas franche.",
      },
      { kind: "h3", text: "Que me restera-t-il si nous arrêtons ?" },
      {
        kind: "p",
        text: "Fichiers sources, droits cédés, accès aux comptes, documentation. Une relation saine prévoit sa propre fin. Ce point est développé dans [ce qu’on est en droit d’attendre d’une agence](/blog/identite-visuelle-agence-attendre).",
      },
      {
        kind: "h2",
        text: "Temps 4 — Comparer ce qui est comparable",
        id: "comparer",
      },
      {
        kind: "p",
        text: "Deux devis très écartés indiquent presque toujours des périmètres différents, pas un écart de prix. Avant de conclure, ramenez chaque proposition à une grille commune : ce qui est inclus, ce qui est en option, ce qui est refacturé, et le nombre d’allers-retours prévus. Cette dernière ligne est celle qui produit le plus de litiges en fin de projet.",
      },
      {
        kind: "h2",
        text: "Les signaux d’alerte",
        id: "signaux",
      },
      {
        kind: "p",
        text: "Aucun n’est éliminatoire à lui seul, mais leur accumulation est un motif sérieux de prudence. Ils ont en commun de signaler une agence qui vend une intention plutôt qu’un engagement.",
      },
      {
        kind: "ul",
        items: [
          "Une proposition créative livrée avant tout échange sur vos objectifs.",
          "Un refus de détailler le périmètre ou les achats refacturés.",
          "Un silence sur les fichiers sources et les droits.",
          "Un nombre d’allers-retours non précisé.",
          "Aucune question difficile posée pendant l’entretien : une agence qui ne vous challenge pas ne vous apportera rien.",
        ],
      },
      {
        kind: "p",
        text: "A6 est une agence de communication et d’événementiel implantée à Montpellier, qui travaille surtout avec des institutions, des collectivités et des structures culturelles et associatives en Occitanie. Si vous voulez nous confronter à cette checklist, [écrivez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Faut-il demander une proposition créative avant de choisir une agence ?",
        answer:
          "C’est rarement pertinent. Une création produite sans cadrage teste la capacité de l’agence à deviner, pas sa capacité à travailler avec vous. Il est plus utile d’évaluer la qualité des questions qu’elle pose, sa compréhension de votre registre et la solidité de ses engagements sur le périmètre, les délais et les droits.",
      },
      {
        question: "Combien d’agences consulter ?",
        answer:
          "Assez peu, à condition d’avoir cadré votre besoin. Trois propositions comparables valent mieux que six propositions bâties sur des interprétations différentes d’un brief flou. L’effort investi dans la rédaction du brief réduit davantage le risque que l’élargissement du panel.",
      },
      {
        question: "Grande agence ou petite structure ?",
        answer:
          "La question utile n’est pas la taille mais l’affectation. Dans une grande structure, demandez qui produira réellement et quel temps vous est affecté ; dans une petite, vérifiez la capacité d’absorption en cas de pic et la continuité en cas d’absence. Les deux modèles fonctionnent quand ces points sont clairs.",
      },
    ],
    related: [
      { label: "Choisir une agence événementielle à Montpellier", href: "/blog/choisir-agence-evenementielle-montpellier" },
      { label: "Ce qui fait varier le budget d’un événement", href: "/blog/budget-evenement-corporate" },
      { label: "Nos champs d’intervention", href: "/nos-services" },
    ],
  },

  {
    slug: "signaletique-evenementielle-regles",
    title: "Signalétique événementielle : les règles à connaître avant d’imprimer",
    metaTitle: "Signalétique événementielle | A6",
    metaDescription:
      "Concevoir une signalétique événementielle qui fonctionne : obligations de sécurité, hiérarchie de l’information, dimensionnement et supports réutilisables.",
    keyword: "signalétique événementielle",
    category: "Méthode",
    date: "2026-05-13",
    dateLabel: "Mai 2026",
    readingMinutes: 7,
    img: "/photos/DSC_1091.webp",
    imgAlt:
      "Signalétique directionnelle et totems d’accueil installés pour un événement professionnel",
    excerpt:
      "La signalétique est le poste où l’on économise en dernier et où l’on se trompe en premier. Ce qui relève de l’obligation, ce qui relève du confort, et comment dimensionner sans réimprimer chaque année.",
    body: [
      {
        kind: "p",
        text: "La signalétique événementielle remplit deux fonctions distinctes qu’on confond souvent : une fonction réglementaire de sécurité, non négociable, et une fonction d’orientation et d’identité, qui relève de la conception. Les traiter comme un seul lot produit soit des supports non conformes, soit une signalétique de sécurité esthétisée jusqu’à devenir illisible.",
      },
      {
        kind: "h2",
        text: "Ce qui relève de l’obligation",
        id: "obligations",
      },
      {
        kind: "p",
        text: "Dans tout lieu recevant du public, la signalisation de sécurité est encadrée : issues de secours, cheminements d’évacuation, emplacement des moyens de secours. Ces éléments obéissent à des normes de forme, de couleur et de visibilité, et ils appartiennent en général au lieu, pas à l’événement. La règle pratique est simple et absolue : la signalétique de l’événement ne doit jamais masquer, concurrencer ni imiter la signalisation de sécurité.",
      },
      {
        kind: "note",
        text: "Erreur classique et sérieuse : poser un kakémono d’identité devant un bloc d’issue de secours parce que l’emplacement était visuellement idéal. C’est un point de contrôle systématique lors du repérage, et un motif de refus légitime par le gestionnaire du lieu.",
      },
      {
        kind: "p",
        text: "Le reste des obligations dépend du lieu, de la jauge et du type de manifestation : c’est un point à vérifier avec le gestionnaire et, le cas échéant, les services compétents, dans le cadre de la [coordination des autorisations](/nos-services/logistique).",
      },
      {
        kind: "h2",
        text: "Les trois niveaux d’information",
        id: "niveaux",
      },
      {
        kind: "p",
        text: "Une signalétique efficace hiérarchise strictement, parce qu’un participant en mouvement ne lit pas : il repère. Mettre tous les messages au même niveau visuel revient à n’en transmettre aucun. La hiérarchie utile tient en trois niveaux, et chacun a un emplacement et une taille propres.",
      },
      {
        kind: "ul",
        items: [
          "Identifier : suis-je au bon endroit ? Visible depuis la rue ou le hall, avant toute autre information.",
          "Orienter : où dois-je aller ? À chaque point de décision, jamais entre deux.",
          "Informer : que se passe-t-il ici, et quand ? À l’arrêt, là où l’on peut lire sans gêner le flux.",
        ],
      },
      {
        kind: "h2",
        text: "Dimensionner pour la distance de lecture réelle",
        id: "dimensionnement",
      },
      {
        kind: "p",
        text: "Le défaut le plus fréquent est le sous-dimensionnement, parce que les supports sont validés sur écran à trente centimètres alors qu’ils seront lus à dix mètres. Le réflexe à prendre est de valider chaque support à sa distance de lecture réelle, en impression, avant de lancer la production complète.",
      },
      {
        kind: "p",
        text: "Le second défaut est la surcharge : un panneau directionnel avec six destinations, un logo, un hashtag et un slogan ne fonctionne pas. Un point de décision demande une décision, donc une information.",
      },
      {
        kind: "h2",
        text: "Placer aux points de décision, pas au milieu des couloirs",
        id: "placement",
      },
      {
        kind: "p",
        text: "Le repérage se fait où l’on hésite : à la sortie de l’ascenseur, au croisement de deux couloirs, à l’entrée d’un hall, en haut d’un escalier. Un panneau magnifique posé au milieu d’une circulation rectiligne ne sert à rien, tandis qu’un fléchage simple à chaque bifurcation supprime toutes les questions à l’accueil. Le parcours se marche avant d’être dessiné.",
      },
      {
        kind: "h2",
        text: "Concevoir pour plusieurs éditions",
        id: "reutilisation",
      },
      {
        kind: "p",
        text: "C’est l’arbitrage qui a le plus d’effet sur le budget à moyen terme. En séparant l’information permanente de l’information datée, une grande partie des supports se réutilise. Cela suppose une décision de conception en amont, pas une astuce de production.",
      },
      {
        kind: "ul",
        items: [
          "Éléments permanents : identité, totems d’accueil, fléchage générique — sans date ni millésime.",
          "Éléments d’édition : programme, noms d’intervenants, plan des salles — sur supports peu coûteux et interchangeables.",
          "Éléments jetables : badges, marquages au sol, à minimiser.",
        ],
      },
      {
        kind: "p",
        text: "Nous produisons la signalétique dans la même chaîne que l’identité de l’événement — voir [impressions et signalétique](/nos-services/impressions-signaletique) et notre approche de l’[événementiel responsable](/blog/evenementiel-responsable-reperes).",
      },
    ],
    faq: [
      {
        question: "La signalétique événementielle est-elle réglementée ?",
        answer:
          "La signalisation de sécurité l’est : issues de secours, cheminements d’évacuation et moyens de secours obéissent à des normes de forme, de couleur et de visibilité, et relèvent en général du lieu. La signalétique propre à l’événement est libre de conception mais ne doit jamais masquer, concurrencer ni imiter ces éléments. Les obligations exactes dépendent du lieu et de la jauge, et se vérifient avec le gestionnaire.",
      },
      {
        question: "Comment éviter de réimprimer toute la signalétique chaque année ?",
        answer:
          "En isolant l’information périssable dès la conception. Si la date et le millésime figurent sur chaque support, tout est à refaire. En distinguant les éléments permanents, les éléments d’édition sur supports interchangeables et les éléments jetables, l’essentiel du dispositif se réutilise d’une édition à l’autre.",
      },
      {
        question: "Où placer les panneaux directionnels ?",
        answer:
          "Aux points de décision uniquement : sorties d’ascenseur, croisements, entrées de hall, hauts d’escalier. Un panneau installé au milieu d’une circulation rectiligne n’apporte rien. La méthode fiable consiste à marcher le parcours du participant avant de dessiner le plan d’implantation.",
      },
    ],
    related: [
      { label: "Impressions & signalétique", href: "/nos-services/impressions-signaletique" },
      { label: "Événementiel responsable : les repères", href: "/blog/evenementiel-responsable-reperes" },
      { label: "Organiser un congrès de fédération", href: "/blog/organiser-congres-federation" },
    ],
  },

  {
    slug: "communication-interne-entreprise",
    title: "Communication interne : par où commencer quand tout est à faire",
    metaTitle: "Communication interne entreprise | A6",
    metaDescription:
      "Structurer une communication interne qui existe à peine : diagnostic, canaux réalistes, rythme tenable et indicateurs qui disent quelque chose.",
    keyword: "communication interne entreprise",
    category: "Méthode",
    date: "2026-03-25",
    dateLabel: "Mars 2026",
    readingMinutes: 7,
    img: "/photos/DSC_0856.webp",
    imgAlt:
      "Support de communication interne conçu pour une organisation en Occitanie",
    excerpt:
      "La communication interne échoue rarement par manque d’outils : elle échoue par manque de rythme et par confusion entre informer et faire adhérer. Le point de départ, dans l’ordre.",
    body: [
      {
        kind: "p",
        text: "La communication interne est l’ensemble des dispositifs par lesquels une organisation informe et associe ses propres membres. Elle est presque toujours sous-investie, non par désintérêt mais parce qu’elle n’a pas de propriétaire clair : elle se partage entre direction, ressources humaines et communication, et finit par n’être portée par personne de façon continue.",
      },
      {
        kind: "h2",
        text: "Commencer par un diagnostic honnête",
        id: "diagnostic",
      },
      {
        kind: "p",
        text: "Avant de créer un nouvel outil, il faut savoir ce qui existe et ce qui circule réellement. Dans la plupart des organisations, l’information passe par des canaux informels efficaces que la direction ignore, et par des canaux officiels que personne ne consulte. Ajouter un canal supplémentaire sans ce diagnostic ne fait qu’allonger la liste des outils délaissés.",
      },
      {
        kind: "ul",
        items: [
          "Par où les gens apprennent-ils réellement les nouvelles importantes ?",
          "Quels canaux officiels existent, et qui les lit vraiment ?",
          "Quelles informations manquent, du point de vue des équipes et non de la direction ?",
          "Quelles rumeurs circulent : elles indiquent précisément où l’information officielle est absente.",
        ],
      },
      {
        kind: "h2",
        text: "Distinguer informer, expliquer et associer",
        id: "trois-registres",
      },
      {
        kind: "p",
        text: "Ces trois registres demandent des dispositifs différents et les confondre est la cause d’échec la plus fréquente. Une décision structurante annoncée dans une brève de newsletter produit de l’inquiétude ; à l’inverse, organiser une réunion pour communiquer un changement d’horaire épuise l’attention disponible.",
      },
      {
        kind: "ul",
        items: [
          "Informer : factuel, court, écrit, sans discussion attendue.",
          "Expliquer : une décision et ses raisons, avec un espace de questions.",
          "Associer : une consultation réelle en amont d’une décision non encore prise.",
        ],
      },
      {
        kind: "note",
        text: "Le piège classique est la fausse consultation : demander l’avis des équipes sur une décision déjà arrêtée. C’est plus coûteux en confiance que de ne rien demander du tout.",
      },
      {
        kind: "h2",
        text: "Choisir un rythme tenable plutôt qu’ambitieux",
        id: "rythme",
      },
      {
        kind: "p",
        text: "Un rendez-vous mensuel tenu douze mois de suite produit plus d’effet qu’un hebdomadaire abandonné au bout de six semaines. Le rythme est en réalité le message : une communication régulière signale une organisation qui maîtrise ; une communication épisodique, qui apparaît surtout en période de crise, apprend aux équipes que toute communication annonce un problème.",
      },
      {
        kind: "h2",
        text: "Donner un porteur et un format à chaque canal",
        id: "porteur",
      },
      {
        kind: "p",
        text: "Un canal sans propriétaire nommé meurt. Chaque dispositif doit avoir une personne responsable, un format défini et une longueur maximale — ces contraintes ne bridant pas le contenu mais rendant la production soutenable. Ce qui prend deux heures à préparer chaque semaine ne se maintient pas ; ce qui prend vingt minutes, oui.",
      },
      {
        kind: "h2",
        text: "Ce qui se mesure vraiment",
        id: "mesure",
      },
      {
        kind: "p",
        text: "Les taux d’ouverture disent peu de choses. Les indicateurs utiles sont plus rustiques : les équipes apprennent-elles les nouvelles importantes par le canal officiel ou autrement, les questions posées en réunion portent-elles sur des sujets déjà traités, les nouveaux arrivants trouvent-ils l’information dont ils ont besoin. Ces indicateurs se recueillent en demandant, pas en instrumentant.",
      },
      {
        kind: "h2",
        text: "Le lien avec la communication externe",
        id: "lien-externe",
      },
      {
        kind: "p",
        text: "Une organisation dont les équipes découvrent ses annonces publiques dans la presse a un problème de communication interne, pas de communication externe. La règle est simple : l’interne précède l’externe, y compris quand le calendrier est contraint. Un événement, une nouvelle identité ou une prise de position se partagent d’abord à l’intérieur.",
      },
      {
        kind: "p",
        text: "Nous accompagnons ce type de structuration en lien avec la [production de contenus](/nos-services/production-de-contenus). Pour en parler, [contactez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Quel rythme adopter pour une communication interne ?",
        answer:
          "Celui que vous pouvez tenir douze mois de suite. Un rendez-vous mensuel maintenu vaut mieux qu’un hebdomadaire abandonné au bout d’un mois et demi, car l’irrégularité envoie un message négatif : les équipes finissent par associer toute communication à l’annonce d’un problème.",
      },
      {
        question: "Faut-il consulter les équipes sur les décisions ?",
        answer:
          "Seulement lorsque la décision n’est pas encore prise. Une consultation sur un choix déjà arrêté est identifiée immédiatement et coûte plus de confiance que l’absence de consultation. Quand la décision est prise, le bon registre est d’expliquer et d’ouvrir un espace de questions, pas de simuler un débat.",
      },
    ],
    related: [
      { label: "Production de contenus", href: "/nos-services/production-de-contenus" },
      { label: "Communication institutionnelle : les enjeux", href: "/blog/communication-institutionnelle-enjeux" },
      { label: "Comment choisir une agence de communication", href: "/blog/choisir-agence-communication" },
    ],
  },

  {
    slug: "captation-video-evenement",
    title: "Captation vidéo d’un événement : ce qu’il faut décider avant le jour J",
    metaTitle: "Captation vidéo événement | A6",
    metaDescription:
      "Réussir la captation vidéo d’un événement professionnel : usage final, dispositif, son, droits à l’image et livrables — les décisions à prendre en amont.",
    keyword: "captation vidéo événement",
    category: "Méthode",
    date: "2026-03-11",
    dateLabel: "Mars 2026",
    readingMinutes: 7,
    img: "/photos/DSC_5640.webp",
    imgAlt:
      "Dispositif de captation vidéo installé lors d’un événement professionnel en Occitanie",
    excerpt:
      "Une captation ratée ne se rattrape pas au montage. Les cinq décisions qui déterminent le résultat se prennent avant l’événement — et la plus importante concerne le son, pas l’image.",
    body: [
      {
        kind: "p",
        text: "Filmer un événement professionnel paraît simple et se rate souvent, parce que l’essentiel se décide en amont. Une fois l’événement passé, aucun montage ne compense un son inexploitable, un cadrage qui coupe le support projeté ou une autorisation manquante sur l’intervenant le plus intéressant. Voici les décisions à prendre, dans l’ordre.",
      },
      {
        kind: "h2",
        text: "Décision 1 — À quoi servira la vidéo",
        id: "usage",
      },
      {
        kind: "p",
        text: "C’est la question qui détermine tout le dispositif, et celle qu’on saute le plus souvent. Archiver l’intégralité d’une plénière, produire un film court qui restitue l’ambiance, ou capter des interventions destinées à être diffusées séparément sont trois objectifs qui n’appellent ni le même nombre de caméras, ni le même son, ni le même budget.",
      },
      {
        kind: "ul",
        items: [
          "Archive intégrale : priorité au son et à la continuité, dispositif léger et fixe.",
          "Film de restitution : priorité aux plans d’ambiance et au montage, tournage mobile.",
          "Interventions diffusables : priorité au son, au cadre propre et à la lisibilité des supports projetés.",
        ],
      },
      {
        kind: "h2",
        text: "Décision 2 — Le son, avant l’image",
        id: "son",
      },
      {
        kind: "p",
        text: "C’est le point le plus important de cet article. Une image médiocre reste regardable ; un son mauvais rend une vidéo inutilisable. Or le son d’une captation ne s’enregistre pas au micro de la caméra mais se prend à la source, sur la console de sonorisation de la salle ou sur des micros dédiés. Cela suppose une coordination avec le prestataire technique, décidée en amont et non le matin même.",
      },
      {
        kind: "note",
        text: "Le cas qui revient le plus souvent : les questions du public. Sans micro dans la salle, elles sont inaudibles à l’enregistrement, et l’on obtient une réponse sans question. Prévoir des micros mobiles ou faire reformuler la question par l’animateur.",
      },
      {
        kind: "h2",
        text: "Décision 3 — Les droits à l’image",
        id: "droits-image",
      },
      {
        kind: "p",
        text: "Filmer des personnes suppose une base juridique et une information claire. Pour les intervenants, cela se règle par une autorisation écrite précisant les usages et la durée. Pour le public, l’information doit être donnée en amont et sur place, avec une possibilité réelle de ne pas être filmé — ce qui a une conséquence pratique sur le plan de salle et les axes de caméra.",
      },
      {
        kind: "ul",
        items: [
          "Autorisation écrite des intervenants, obtenue avant l’événement et non le jour même.",
          "Information des participants dès l’inscription, puis rappelée à l’accueil.",
          "Une zone non filmée identifiée pour ceux qui refusent, et des axes de caméra qui la respectent.",
          "Une vigilance renforcée dès que des mineurs sont présents.",
        ],
      },
      {
        kind: "h2",
        text: "Décision 4 — Le dispositif dans l’espace",
        id: "dispositif",
      },
      {
        kind: "p",
        text: "Les emplacements de caméra doivent être arbitrés au repérage, en même temps que la scénographie, car ils entrent en concurrence avec les places assises, les circulations et les axes de vue du public. Un opérateur placé après coup se retrouve dans un couloir de passage, avec un cadre parasité et une gêne pour les participants.",
      },
      {
        kind: "p",
        text: "L’autre point d’attention est la lisibilité des supports projetés : selon la luminosité et l’angle, un écran filmé peut être totalement illisible. La solution consiste à récupérer les supports en fichier pour les incruster au montage, ce qui se décide avant, avec les intervenants.",
      },
      {
        kind: "h2",
        text: "Décision 5 — Les livrables et leur format",
        id: "livrables",
      },
      {
        kind: "p",
        text: "Une captation produit des heures de rushes dont l’exploitation dépend entièrement de ce qui a été commandé. Préciser les livrables en amont évite la situation la plus courante : un fichier brut de trois heures que personne ne regardera et qu’il faudra repayer pour transformer en quelque chose d’utile.",
      },
      {
        kind: "ul",
        items: [
          "Le format et la durée de chaque livrable attendu.",
          "Les versions sous-titrées, indispensables pour la diffusion en ligne et pour l’accessibilité.",
          "Les formats adaptés aux canaux réellement utilisés.",
          "La remise des rushes et l’étendue des droits d’exploitation.",
        ],
      },
      {
        kind: "p",
        text: "Voir notre offre de [production vidéo et de reportage](/nos-services/production-de-contenus), et nos [réalisations](/realisations). Pour un projet, [écrivez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Quel est le point le plus critique d’une captation d’événement ?",
        answer:
          "Le son. Une image imparfaite reste exploitable, un son dégradé rend la vidéo inutilisable et ne se répare pas au montage. Le son doit être pris à la source — sur la console de sonorisation ou sur des micros dédiés — ce qui suppose une coordination avec le prestataire technique décidée avant l’événement.",
      },
      {
        question: "Faut-il une autorisation pour filmer les participants d’un événement ?",
        answer:
          "Les intervenants doivent donner une autorisation écrite précisant les usages et la durée. Pour le public, l’information doit être donnée dès l’inscription puis rappelée sur place, avec une possibilité réelle de ne pas être filmé : cela implique de prévoir une zone non filmée et des axes de caméra qui la respectent. La vigilance est renforcée en présence de mineurs.",
      },
    ],
    related: [
      { label: "Production de contenus", href: "/nos-services/production-de-contenus" },
      { label: "Organiser un congrès de fédération", href: "/blog/organiser-congres-federation" },
      { label: "Ce qui fait varier le budget d’un événement", href: "/blog/budget-evenement-corporate" },
    ],
  },

  {
    slug: "agence-communication-digitale-montpellier",
    title: "Communication digitale : ce qu’une agence locale change réellement",
    metaTitle: "Agence communication digitale Montpellier | A6",
    metaDescription:
      "Ce qu’apporte une agence de communication digitale à Montpellier : visibilité locale, contenus produits sur place, et ce que la proximité ne change pas.",
    keyword: "agence communication digitale montpellier",
    category: "Digital",
    date: "2026-02-25",
    dateLabel: "Février 2026",
    readingMinutes: 7,
    img: "/photos/DSC_1019.webp",
    imgAlt:
      "Travail sur la stratégie digitale et les réseaux sociaux d’une organisation montpelliéraine",
    excerpt:
      "La proximité géographique n’améliore pas un algorithme. Elle change en revanche trois choses très concrètes : la visibilité locale, la qualité des contenus produits sur place, et la vitesse de décision.",
    body: [
      {
        kind: "p",
        text: "L’argument de la proximité est souvent mal défendu par les agences locales, qui en font une question de convivialité. En communication digitale, la proximité a des effets réels mais précis — et il est honnête de dire aussi ce qu’elle ne change pas. Voici les trois domaines où elle produit une différence mesurable.",
      },
      {
        kind: "h2",
        text: "1. La visibilité locale, qui ne se pilote pas à distance",
        id: "visibilite-locale",
      },
      {
        kind: "p",
        text: "Pour une organisation dont les publics sont sur un territoire, l’essentiel de la visibilité en recherche ne vient pas du site mais de la présence locale : fiche d’établissement à jour et documentée, avis, cohérence des informations sur les annuaires, mentions par des acteurs du territoire. Ces leviers demandent une connaissance du tissu local — quels relais existent, quelles structures citent qui, quels annuaires sectoriels comptent réellement.",
      },
      {
        kind: "ul",
        items: [
          "Une fiche d’établissement complète : c’est souvent le premier point de contact, avant le site.",
          "Des informations identiques partout : une adresse ou un numéro divergent brouille le signal.",
          "Des mentions par des acteurs locaux réels, plutôt qu’un volume de liens sans rapport avec le territoire.",
        ],
      },
      {
        kind: "h2",
        text: "2. Les contenus qui se produisent sur place",
        id: "contenus",
      },
      {
        kind: "p",
        text: "C’est la différence la plus tangible. Une agence à distance produit des contenus génériques ou dépend de ce que vous lui envoyez ; une agence sur place peut venir photographier une activité, filmer un témoignage, couvrir un événement. Or ce sont ces contenus propres qui distinguent une présence en ligne d’un catalogue d’images d’illustration interchangeables.",
      },
      {
        kind: "p",
        text: "Cela vaut particulièrement pour les organisations dont l’activité est physique et située : un chantier, un site patrimonial, un congrès. Voir notre [production de contenus](/nos-services/production-de-contenus).",
      },
      {
        kind: "h2",
        text: "3. La vitesse de décision et la connaissance du contexte",
        id: "vitesse",
      },
      {
        kind: "p",
        text: "Une agence locale connaît le calendrier du territoire, les acteurs cités dans un dossier, la sensibilité d’un sujet régional. Cela évite les maladresses et raccourcit les explications. Sur un sujet institutionnel, ce contexte n’est pas un agrément : c’est une condition pour écrire juste.",
      },
      {
        kind: "h2",
        text: "Ce que la proximité ne change pas",
        id: "limites",
      },
      {
        kind: "p",
        text: "Il faut le dire clairement, parce que l’inverse est souvent sous-entendu. Le fonctionnement des plateformes est identique pour tout le monde ; la qualité technique d’un site ne dépend pas de la distance ; et une agence locale médiocre ne vaut pas mieux qu’une bonne agence à distance. La proximité est un avantage, pas une compétence.",
      },
      {
        kind: "quote",
        text: "La proximité fait gagner du contexte et du contenu propre. Elle ne remplace ni la méthode, ni la rigueur technique.",
      },
      {
        kind: "h2",
        text: "Par où commencer si tout est à construire",
        id: "commencer",
      },
      {
        kind: "p",
        text: "L’ordre compte plus que l’ambition. Beaucoup d’organisations commencent par ouvrir des comptes sur plusieurs réseaux avant d’avoir un point de contact fiable, ce qui revient à faire venir des gens vers une porte fermée.",
      },
      {
        kind: "ul",
        items: [
          "D’abord un point de contact fiable et à jour : coordonnées, activité, moyen de vous joindre.",
          "Ensuite la présence locale documentée, qui capte l’essentiel des recherches de proximité.",
          "Puis un canal éditorial unique, tenu régulièrement.",
          "Enfin la mesure, pour arbitrer la suite sur des faits — voir notre [stratégie digitale](/nos-services/strategie-digitale).",
        ],
      },
      {
        kind: "p",
        text: "A6 est implantée à Montpellier et intervient en Occitanie. Si vous voulez faire le point sur votre présence en ligne, [contactez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Une agence locale améliore-t-elle le référencement ?",
        answer:
          "Pas par sa localisation en elle-même : les algorithmes sont les mêmes pour tous. En revanche, la visibilité locale repose largement sur des leviers de terrain — fiche d’établissement documentée, cohérence des informations, mentions par des acteurs réels du territoire — qui demandent une connaissance du tissu local difficile à obtenir à distance.",
      },
      {
        question: "Par quoi commencer quand on n’a aucune présence en ligne ?",
        answer:
          "Par un point de contact fiable et à jour, puis par la présence locale documentée qui capte l’essentiel des recherches de proximité. Ouvrir plusieurs comptes sur les réseaux avant cela revient à faire venir des visiteurs vers une porte fermée. Un seul canal éditorial, tenu régulièrement, vaut mieux que quatre canaux abandonnés.",
      },
    ],
    related: [
      { label: "Stratégie digitale", href: "/nos-services/strategie-digitale" },
      { label: "Production de contenus", href: "/nos-services/production-de-contenus" },
      { label: "Comment choisir une agence de communication", href: "/blog/choisir-agence-communication" },
    ],
  },
];
