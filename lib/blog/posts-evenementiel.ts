import type { BlogPost } from "@/lib/blog/types";

/**
 * Cluster événementiel — les deux quick wins du KEYWORD-MAP :
 * « agence événementielle montpellier » (KD 6) et « agence événementielle
 * toulouse » (KD 18), plus les requêtes informationnelles du tableau 4
 * (budget, organisation de congrès, événementiel responsable).
 *
 * Règle de production : aucun chiffre inventé. Là où un montant serait attendu
 * (budget), on explique la structure de coût plutôt que d’afficher des
 * fourchettes fabriquées.
 */
export const postsEvenementiel: BlogPost[] = [
  {
    slug: "choisir-agence-evenementielle-montpellier",
    title: "Choisir une agence événementielle à Montpellier : 7 critères qui comptent vraiment",
    metaTitle: "Agence événementielle Montpellier | A6",
    metaDescription:
      "Les 7 critères qui distinguent une agence événementielle à Montpellier : régie du jour J, réseau local, capacité institutionnelle et devis clair.",
    keyword: "agence événementielle montpellier",
    category: "Événementiel",
    date: "2026-08-06",
    dateLabel: "Août 2026",
    readingMinutes: 7,
    img: "/photos/DSC_0802.webp",
    imgAlt:
      "Régie et coordination d’un événement professionnel organisé à Montpellier par l’agence A6",
    excerpt:
      "Le marché événementiel montpelliérain est dense et peu lisible : beaucoup d’agences généralistes annoncent la même chose. Voici les sept critères qui séparent une agence capable de tenir un jour J d’un prestataire qui vend une intention.",
    body: [
      {
        kind: "p",
        text: "Choisir une agence événementielle à Montpellier revient rarement à comparer des créations : elles se ressemblent en portfolio. La différence se joue sur la capacité à tenir le jour J, sur la connaissance des lieux et des prestataires locaux, et sur la clarté de ce que couvre exactement le devis. Les sept critères ci-dessous sont ceux qui, en pratique, expliquent qu’un événement se déroule sans accroc ou finisse en improvisation.",
      },
      {
        kind: "h2",
        text: "1. La régie du jour J est-elle assurée par ceux qui ont conçu l’événement ?",
        id: "regie-jour-j",
      },
      {
        kind: "p",
        text: "C’est le critère le plus discriminant et le moins souvent posé. Beaucoup d’agences conçoivent puis délèguent l’exécution à un régisseur qui découvre le projet la veille. Or un événement se joue dans les vingt minutes où le programme dérape : un intervenant en retard, un vidéoprojecteur qui refuse le format, une salle qui se remplit deux fois plus vite que prévu. Celui qui arbitre à ce moment-là doit connaître l’intention initiale, pas seulement le planning.",
      },
      {
        kind: "p",
        text: "Posez la question directement : qui sera présent le jour J, et cette personne a-t-elle participé à la conception ? Chez A6, la [régie générale et le pilotage du jour J](/nos-services/logistique) font partie du même périmètre que la conception — ce n’est pas une prestation ajoutée.",
      },
      {
        kind: "h2",
        text: "2. Le réseau local : lieux, prestataires, autorisations",
        id: "reseau-local",
      },
      {
        kind: "p",
        text: "Une agence implantée localement ne vous fait pas gagner de la sympathie mais du temps et du risque en moins. Elle sait quel lieu montpelliérain accepte réellement une jauge de 300 personnes assises avec restauration, lequel impose son traiteur, lequel a une contrainte de nuisance sonore à 22 h. Elle sait aussi combien de semaines prend une autorisation d’occupation du domaine public selon la période.",
      },
      {
        kind: "ul",
        items: [
          "Demandez trois lieux proposés pour votre format, avec la raison du choix de chacun.",
          "Demandez si l’agence a déjà produit dans ces lieux, et quand.",
          "Vérifiez qui porte la [coordination des prestataires et les autorisations](/nos-services/logistique) : vous ou l’agence.",
        ],
      },
      {
        kind: "h2",
        text: "3. La capacité à travailler avec un commanditaire institutionnel",
        id: "commanditaire-institutionnel",
      },
      {
        kind: "p",
        text: "Un congrès d’ordre professionnel, une assemblée de fédération ou un événement de collectivité n’ont rien à voir avec un lancement produit. Les validations passent par plusieurs niveaux, les prises de parole sont politiques, la neutralité de ton est une obligation et non un style. Une agence habituée au corporate pur peut livrer un très bel événement inadapté à ce cadre.",
      },
      {
        kind: "p",
        text: "C’est le terrain sur lequel A6 s’est construite : nos références vont de l’Ordre des Architectes Occitanie au Groupe Seuil, en passant par le monde associatif et culturel. Le détail est sur la page [nos clients](/nos-clients).",
      },
      {
        kind: "h2",
        text: "4. Ce que le devis couvre — et ce qu’il ne couvre pas",
        id: "perimetre-devis",
      },
      {
        kind: "p",
        text: "La principale source de conflit en fin de projet n’est pas le montant initial mais le périmètre. Un devis événementiel honnête distingue trois blocs : les honoraires de conception et de coordination, les achats refacturés (lieu, traiteur, technique, mobilier), et les postes à provision qui ne peuvent être chiffrés qu’après arbitrage. Un devis qui fond tout dans un forfait unique n’est pas plus simple : il est simplement moins vérifiable.",
      },
      {
        kind: "note",
        text: "Signal d’alerte : une agence qui refuse de détailler la part d’achats refacturés. Vous ne pourrez pas savoir si sa marge porte sur son travail ou sur vos prestataires. Nous détaillons ce point dans [ce qui fait varier le budget d’un événement](/blog/budget-evenement-corporate).",
      },
      {
        kind: "h2",
        text: "5. La cohérence entre l’événement et le reste de votre communication",
        id: "coherence-communication",
      },
      {
        kind: "p",
        text: "Un événement produit un volume considérable de supports : signalétique, programme, badges, kakémonos, captation, publications. Si ces supports ne parlent pas la même langue que votre identité habituelle, l’événement devient un épisode isolé au lieu d’un moment fort de votre communication. C’est un argument fort en faveur d’une agence qui couvre les deux pôles.",
      },
      {
        kind: "p",
        text: "Concrètement, cela veut dire une [charte graphique événementielle](/nos-services/conception-et-scenographie) dérivée de votre identité, et une [signalétique](/nos-services/impressions-signaletique) produite dans la même chaîne — pas commandée en urgence à un imprimeur qui ne connaît pas vos codes.",
      },
      {
        kind: "h2",
        text: "6. La gestion des invités, ce poste qu’on découvre trop tard",
        id: "gestion-invites",
      },
      {
        kind: "p",
        text: "Les inscriptions, les relances, l’émargement et la gestion des désistements représentent une charge de travail sous-estimée dans presque tous les projets. Sur un congrès de plusieurs centaines de participants, c’est un poste à part entière qui commence des semaines avant et conditionne la qualité de l’accueil. Demandez explicitement qui le porte, avec quel outil, et ce qui se passe le jour J en cas d’arrivée non inscrite.",
      },
      {
        kind: "h2",
        text: "7. Ce qui reste après l’événement",
        id: "apres-evenement",
      },
      {
        kind: "p",
        text: "Un événement réussi qui ne laisse aucune trace exploitable est un investissement à moitié perdu. Photos utilisables sur vos supports, captation des interventions, revue de presse, bilan de fréquentation : ces livrables se décident avant, pas après. Une agence qui n’en parle pas au moment du devis ne les produira pas.",
      },
      {
        kind: "ul",
        items: [
          "Un [reportage photographique](/nos-services/production-de-contenus) avec droits d’usage clairement cédés.",
          "Une captation des temps forts, si le format le justifie.",
          "Un [bilan média et une revue de presse](/nos-services/relations-presse) quand l’événement a une dimension publique.",
        ],
      },
      {
        kind: "h2",
        text: "En résumé",
        id: "resume",
      },
      {
        kind: "p",
        text: "Les sept critères se ramènent à une seule question : l’agence porte-t-elle la responsabilité de l’ensemble, ou seulement d’un segment agréable ? Un événement professionnel n’est pas un objet créatif, c’est une chaîne où chaque maillon manquant se paie le jour J. Si vous préparez un projet en Occitanie, [parlons-en](/contact) — nous vous dirons franchement si votre format entre dans notre périmètre.",
      },
    ],
    faq: [
      {
        question: "Quel délai prévoir pour organiser un événement professionnel à Montpellier ?",
        answer:
          "Cela dépend surtout du lieu et de la jauge. Pour un format de plusieurs centaines de participants nécessitant un lieu spécifique, la réservation est le facteur limitant et se joue souvent plusieurs mois à l’avance. Pour un format interne de taille modeste, les délais se comptent en semaines. Le bon réflexe est de sécuriser le lieu et la date avant de travailler le concept.",
      },
      {
        question: "Une agence événementielle facture-t-elle un pourcentage du budget ?",
        answer:
          "Les deux modèles existent : honoraires forfaitaires sur la conception et la coordination, ou commission sur les achats refacturés. Aucun n’est malhonnête en soi, mais vous devez savoir lequel s’applique. Demandez-le explicitement avant de comparer deux devis, sans quoi la comparaison n’a pas de sens.",
      },
      {
        question: "Faut-il choisir une agence locale ou une agence nationale ?",
        answer:
          "Pour un événement ancré sur un territoire, l’agence locale apporte la connaissance des lieux, des prestataires et des délais administratifs réels. Une agence nationale a du sens si votre événement est itinérant ou si votre marque impose une homogénéité multi-villes. Le critère décisif reste la présence physique en régie le jour J.",
      },
    ],
    related: [
      { label: "Notre offre de conception & scénographie", href: "/nos-services/conception-et-scenographie" },
      { label: "Logistique et régie générale", href: "/nos-services/logistique" },
      { label: "Ce qui fait varier le budget d’un événement", href: "/blog/budget-evenement-corporate" },
    ],
  },

  {
    slug: "budget-evenement-corporate",
    title: "Budget d’un événement corporate : ce qui fait vraiment varier le devis",
    metaTitle: "Budget événement corporate : les postes | A6",
    metaDescription:
      "La structure de coût d’un événement corporate : les six postes qui font varier un devis et les arbitrages qui font baisser la facture sans dégrader.",
    keyword: "combien coûte l’organisation d’un événement corporate",
    category: "Événementiel",
    date: "2026-07-28",
    dateLabel: "Juillet 2026",
    readingMinutes: 8,
    img: "/photos/DSC_0836.webp",
    imgAlt:
      "Mise en place technique et mobilier d’un événement corporate produit par A6 en Occitanie",
    excerpt:
      "Personne ne peut chiffrer votre événement sans en connaître le format. En revanche, on peut expliquer précisément ce qui fait monter ou descendre un devis — et quels arbitrages font gagner du budget sans dégrader l’expérience.",
    body: [
      {
        kind: "p",
        text: "La question « combien coûte l’organisation d’un événement corporate » n’a pas de réponse chiffrée honnête hors contexte : entre une réunion de comité de trente personnes et un congrès de six cents participants sur deux jours, le rapport est d’un ordre de grandeur, pas d’un pourcentage. Ce qui est utile, en revanche, c’est de comprendre la structure de coût — parce que c’est elle qui vous permet d’arbitrer.",
      },
      {
        kind: "note",
        text: "Nous n’affichons pas de fourchettes en euros dans cet article. Une fourchette sans format, sans lieu et sans jauge est un chiffre décoratif qui vous induit en erreur au moment de construire votre enveloppe. Pour un ordre de grandeur sur votre projet réel, [demandez-nous une estimation](/contact) : c’est plus rapide et plus juste.",
      },
      {
        kind: "h2",
        text: "Les six postes qui composent un budget événementiel",
        id: "six-postes",
      },
      {
        kind: "p",
        text: "Un devis événementiel se décompose presque toujours de la même façon, quel que soit le format. Connaître ces six postes vous permet de lire n’importe quelle proposition et de repérer immédiatement ce qui manque. C’est aussi la grille qui rend deux devis comparables — sans elle, vous comparez des périmètres différents en croyant comparer des prix.",
      },
      { kind: "h3", text: "1. Le lieu" },
      {
        kind: "p",
        text: "Souvent le premier poste, et celui qui contraint tous les autres. Un lieu nu coûte moins cher en location mais impose d’apporter mobilier, technique et parfois électricité. Un lieu équipé coûte plus cher mais absorbe des postes que vous ne verrez pas apparaître ailleurs. Attention aux lieux qui imposent leurs prestataires exclusifs : le tarif de location ne dit alors rien du coût final.",
      },
      { kind: "h3", text: "2. La technique" },
      {
        kind: "p",
        text: "Son, lumière, vidéo, et les techniciens qui vont avec. Ce poste est piloté par vos choix de format : une table ronde filmée avec captation multi-caméra n’a rien à voir avec une prise de parole sur pupitre. C’est aussi le poste où l’économie mal placée se voit le plus — un intervenant qu’on n’entend pas ruine une journée entière.",
      },
      { kind: "h3", text: "3. La restauration" },
      {
        kind: "p",
        text: "Le poste le plus proportionnel à la jauge, donc le plus sensible aux variations d’inscriptions. Il se pilote au format de service autant qu’au menu : un cocktail debout, un buffet et un service à table pour un même nombre de convives ne mobilisent pas le même personnel. C’est aussi ici que se joue la marge d’ajustement de dernière minute.",
      },
      { kind: "h3", text: "4. La scénographie et la signalétique" },
      {
        kind: "p",
        text: "Tout ce qui rend l’événement identifiable et navigable : décor, mobilier, habillage, kakémonos, fléchage, badges, programme. Ce poste a une particularité : il est en grande partie non réutilisable si les supports mentionnent une date. Concevoir la [signalétique](/nos-services/impressions-signaletique) en distinguant les éléments datés des éléments permanents fait une différence réelle sur plusieurs éditions.",
      },
      { kind: "h3", text: "5. Les honoraires de l’agence" },
      {
        kind: "p",
        text: "La conception, la coordination des prestataires, la production des supports et la régie du jour J. C’est le poste que les clients cherchent instinctivement à comprimer, alors que c’est celui qui protège les cinq autres : une coordination faible se traduit par des surcoûts d’urgence qui dépassent largement l’économie réalisée sur les honoraires.",
      },
      { kind: "h3", text: "6. Les contenus et la trace" },
      {
        kind: "p",
        text: "Photo, vidéo, rédaction, relations presse. Techniquement optionnel, stratégiquement décisif : c’est ce qui fait qu’un événement continue d’exister après sa dernière heure. Voir notre [production de contenus](/nos-services/production-de-contenus).",
      },
      {
        kind: "h2",
        text: "Les quatre variables qui font vraiment bouger le total",
        id: "variables",
      },
      {
        kind: "p",
        text: "À format constant, quatre paramètres expliquent l’essentiel de l’écart entre un devis et un autre. Les identifier tôt vous donne des leviers d’arbitrage réels, au lieu de rogner uniformément sur tous les postes — ce qui est la meilleure façon de produire un événement médiocre partout.",
      },
      {
        kind: "ul",
        items: [
          "La jauge, qui pilote la restauration, l’accueil, la taille du lieu et la technique par effet de seuil.",
          "La durée, parce qu’une deuxième journée ne double pas le coût mais ajoute hébergement, restauration supplémentaire et immobilisation technique.",
          "La date, qui détermine la tension sur les lieux et les prestataires : la haute saison événementielle en Occitanie n’a pas les mêmes tarifs que la basse.",
          "Le délai, le plus coûteux de tous : ce qui se décide trois semaines avant se paie en surcoûts d’urgence sur presque chaque poste.",
        ],
      },
      {
        kind: "h2",
        text: "Où faire des économies sans dégrader l’événement",
        id: "economies",
      },
      {
        kind: "p",
        text: "Il existe des arbitrages qui réduisent sensiblement le budget sans que les participants le perçoivent, et d’autres qui se voient immédiatement. La distinction est assez stable d’un projet à l’autre, et il est utile de la connaître avant d’ouvrir la discussion budgétaire avec une agence.",
      },
      {
        kind: "ul",
        items: [
          "Décaler la date hors période de tension plutôt que réduire la qualité du service.",
          "Concevoir des supports réutilisables d’une édition à l’autre : seuls les éléments datés sont réimprimés.",
          "Simplifier le format de restauration sans toucher à la qualité des produits.",
          "Réduire le nombre de temps forts plutôt que la production de chacun : trois séquences tenues valent mieux que six approximatives.",
        ],
      },
      {
        kind: "p",
        text: "À l’inverse, deux économies se paient toujours : le son, et la coordination du jour J. Ce sont les deux postes que nous déconseillons systématiquement de réduire.",
      },
      {
        kind: "h2",
        text: "Comment demander un devis utilement",
        id: "demander-devis",
      },
      {
        kind: "p",
        text: "Un devis pertinent dépend surtout de la qualité du brief. Quatre informations suffisent à obtenir une première estimation sérieuse : le format et l’objectif, la jauge estimée, la fenêtre de date, et l’enveloppe dont vous disposez. Cette dernière n’est pas un aveu de faiblesse : elle permet à l’agence de vous proposer le meilleur événement possible dans votre cadre, au lieu d’un projet que vous refuserez.",
      },
      {
        kind: "quote",
        text: "Un budget annoncé n’est pas une limite qu’on cherche à atteindre, c’est une contrainte de conception. Sans elle, on conçoit à côté.",
      },
    ],
    faq: [
      {
        question: "Faut-il annoncer son budget à une agence événementielle ?",
        answer:
          "Oui. Sans enveloppe, l’agence conçoit à l’aveugle et vous présente souvent un projet hors de portée, ce qui fait perdre un cycle de travail aux deux parties. Annoncer un budget ne fait pas monter le devis : cela oriente les arbitrages de conception vers ce qui est réalisable chez vous.",
      },
      {
        question: "Quel est le poste le plus sous-estimé dans un budget événementiel ?",
        answer:
          "La gestion des participants — inscriptions, relances, émargement, désistements — et la régie du jour J. Ce sont des charges de travail réelles, étalées sur des semaines, qui n’apparaissent pas dans un devis mal construit et resurgissent en tension humaine à l’approche de l’événement.",
      },
      {
        question: "Pourquoi deux agences donnent-elles des devis très différents pour le même événement ?",
        answer:
          "Presque toujours parce que le périmètre diffère, pas le prix. L’une inclut les achats refacturés, l’autre ne chiffre que ses honoraires ; l’une prévoit une régie complète le jour J, l’autre une présence partielle. Ramenez les deux propositions à la grille des six postes avant de conclure quoi que ce soit.",
      },
    ],
    related: [
      { label: "Choisir une agence événementielle à Montpellier", href: "/blog/choisir-agence-evenementielle-montpellier" },
      { label: "Notre offre logistique", href: "/nos-services/logistique" },
      { label: "Nous demander une estimation", href: "/contact" },
    ],
  },

  {
    slug: "organiser-congres-federation",
    title: "Organiser un congrès de fédération ou d’ordre professionnel : le déroulé complet",
    metaTitle: "Organiser un congrès professionnel | A6",
    metaDescription:
      "Le déroulé réel d’un congrès de fédération ou d’ordre professionnel : gouvernance, programme, intervenants, logistique et bilan, étape par étape.",
    keyword: "organiser un congrès de fédération",
    category: "Événementiel",
    date: "2026-07-15",
    dateLabel: "Juillet 2026",
    readingMinutes: 9,
    img: "/photos/DSC_0855.webp",
    imgAlt:
      "Plénière d’un congrès professionnel organisé en Occitanie avec scénographie et régie A6",
    excerpt:
      "Un congrès d’ordre ou de fédération n’est pas un séminaire d’entreprise avec plus de monde : la gouvernance, la parole et la légitimité y fonctionnent autrement. Voici le déroulé que nous appliquons, dans l’ordre.",
    body: [
      {
        kind: "p",
        text: "Un congrès de fédération, d’ordre professionnel ou d’union syndicale se distingue d’un événement corporate sur un point structurant : le commanditaire n’est pas une personne mais une instance. Les décisions passent par un bureau, les prises de parole engagent une profession, et la satisfaction ne se mesure pas en enthousiasme mais en légitimité perçue. Cela change le déroulé du projet, pas seulement son décor.",
      },
      {
        kind: "h2",
        text: "Étape 1 — Clarifier qui décide, et à quel moment",
        id: "gouvernance",
      },
      {
        kind: "p",
        text: "C’est l’étape que l’on saute le plus souvent, et celle qui fait dérailler le plus de projets. Dans une instance, plusieurs niveaux ont un avis légitime : le président, le bureau, la commission communication, la direction opérationnelle, parfois les délégations régionales. Si le circuit de validation n’est pas fixé au départ, chaque livrable revient corrigé par une instance différente et le projet tourne en rond.",
      },
      {
        kind: "ul",
        items: [
          "Un interlocuteur unique côté instance, qui centralise les retours.",
          "Deux ou trois points de validation formels identifiés dès le rétroplanning, pas une validation continue.",
          "La liste explicite de ce qui relève d’un arbitrage politique et de ce qui relève d’un choix technique.",
        ],
      },
      {
        kind: "h2",
        text: "Étape 2 — Sécuriser lieu et date avant tout le reste",
        id: "lieu-date",
      },
      {
        kind: "p",
        text: "Un congrès est contraint par sa jauge, et les lieux capables d’accueillir plusieurs centaines de personnes en plénière avec des espaces d’ateliers en parallèle sont peu nombreux sur un territoire donné. Ils se réservent longtemps à l’avance. Travailler le concept avant d’avoir sécurisé le lieu revient à concevoir pour un espace qu’on n’aura pas.",
      },
      {
        kind: "p",
        text: "La date, elle, se choisit contre le calendrier de la profession : ne pas tomber sur un autre congrès sectoriel, éviter les périodes de charge métier, tenir compte des vacances scolaires pour les participants qui viennent de loin. C’est un arbitrage que l’instance maîtrise mieux que l’agence — à condition qu’on lui pose la question.",
      },
      {
        kind: "h2",
        text: "Étape 3 — Construire le programme comme une dramaturgie",
        id: "programme",
      },
      {
        kind: "p",
        text: "Un programme de congrès n’est pas une liste de sujets à caser dans des créneaux. C’est une progression : ouvrir sur ce qui rassemble, traiter au milieu ce qui divise, refermer sur ce qui engage. Une journée mal séquencée épuise les participants avant la séquence qui compte, et les décisions annoncées en fin d’après-midi tombent dans une salle à moitié vide.",
      },
      {
        kind: "p",
        text: "En pratique, cela veut dire arbitrer le nombre de temps forts à la baisse et soigner l’articulation entre eux — c’est exactement l’objet de notre travail de [programmation et d’articulation des temps forts](/nos-services/conception-et-scenographie).",
      },
      {
        kind: "note",
        text: "Règle empirique utile : sur une journée, trois séquences fortes bien tenues produisent plus d’effet que six séquences correctes. Le facteur limitant n’est pas le temps disponible mais l’attention disponible.",
      },
      {
        kind: "h2",
        text: "Étape 4 — Intervenants : recherche, briefing, cadrage",
        id: "intervenants",
      },
      {
        kind: "p",
        text: "La qualité d’un congrès tient largement à ses intervenants, et le travail sur ce poste est très sous-estimé. Trouver le bon profil est la partie facile ; le difficile est de le briefer pour qu’il parle à cette audience-là, dans ce temps-là, sur cet angle-là. Un expert brillant qui déroule sa conférence habituelle devant une profession qui attendait autre chose est un temps fort perdu.",
      },
      {
        kind: "ul",
        items: [
          "Un brief écrit : audience, angle attendu, durée ferme, ce qui a déjà été dit les années précédentes.",
          "Un cadrage du format : plénière, table ronde, atelier — chacun demande une préparation différente.",
          "Une [animation et une modération](/nos-services/animation) qui tiennent le temps sans brutalité, notamment sur les tables rondes.",
        ],
      },
      {
        kind: "h2",
        text: "Étape 5 — La logistique des participants",
        id: "logistique-participants",
      },
      {
        kind: "p",
        text: "Sur un congrès, l’accueil est le premier et parfois le seul contact physique entre l’instance et ses membres. Une file d’attente de vingt minutes à l’émargement abîme une journée entière, quelle que soit la qualité du programme. Ce poste commence des semaines avant : inscriptions, relances, gestion des désistements, préparation des badges, dimensionnement des postes d’accueil au flux réel d’arrivée.",
      },
      {
        kind: "p",
        text: "Le point que nous soulevons systématiquement : les arrivées ne sont jamais uniformes. Prévoir la capacité d’accueil sur la moyenne garantit l’engorgement au pic. Voir notre approche de la [gestion des invités et de l’émargement](/nos-services/logistique).",
      },
      {
        kind: "h2",
        text: "Étape 6 — Signalétique et repérage dans l’espace",
        id: "signaletique",
      },
      {
        kind: "p",
        text: "Un congrès met plusieurs centaines de personnes dans un lieu qu’elles ne connaissent pas, avec des salles parallèles et des changements de séquence. La signalétique n’est pas décorative : c’est de l’information critique. Chaque participant perdu est un participant qui arrive en retard dans une salle, ce qui perturbe la séquence en cours.",
      },
      {
        kind: "h2",
        text: "Étape 7 — Presse, captation et bilan",
        id: "bilan",
      },
      {
        kind: "p",
        text: "Un congrès professionnel produit de la parole publique : positions, annonces, motions. C’est un matériau de communication qui a une valeur bien au-delà de la journée, à condition d’avoir été capté. Les décisions de captation, de reportage photo et de [relations presse](/nos-services/relations-presse) se prennent au moment du rétroplanning, pas la semaine précédente.",
      },
      {
        kind: "p",
        text: "Le bilan, enfin, sert l’édition suivante : fréquentation réelle par séquence, retours des participants, revue de presse, points de friction logistique. Un congrès annuel qui ne capitalise pas sur son bilan recommence chaque année au même endroit.",
      },
      {
        kind: "h2",
        text: "Notre expérience sur ce format",
        id: "experience",
      },
      {
        kind: "p",
        text: "Le format congrès et assemblée professionnelle est celui sur lequel A6 s’est construite, avec des instances comme l’Ordre des Architectes Occitanie. C’est un terrain qui demande autant de rigueur administrative que de sens du récit — voir [nos réalisations](/realisations) et [nos clients](/nos-clients). Si vous préparez une édition, [écrivez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Combien de temps à l’avance faut-il lancer l’organisation d’un congrès ?",
        answer:
          "Le facteur déterminant est la disponibilité des lieux capables d’accueillir votre jauge en plénière avec des espaces parallèles. Sur un territoire donné, ils sont peu nombreux et se réservent très en avance. La règle pratique : sécuriser lieu et date en premier, puis dérouler conception et production dans le temps restant.",
      },
      {
        question: "Qui doit valider quoi dans un congrès d’instance professionnelle ?",
        answer:
          "L’essentiel est de distinguer les arbitrages politiques, qui reviennent au bureau ou à la présidence, des choix techniques, qui reviennent à l’agence et à l’interlocuteur opérationnel. Sans cette distinction posée au départ, chaque livrable est rediscuté par une instance différente et le rétroplanning ne tient pas.",
      },
      {
        question: "Combien de temps forts prévoir sur une journée de congrès ?",
        answer:
          "Moins qu’on ne le souhaite spontanément. La contrainte réelle n’est pas le temps disponible mais l’attention des participants. Trois séquences fortes correctement préparées et tenues dans leur durée produisent davantage d’effet que six séquences enchaînées dont aucune n’est aboutie.",
      },
    ],
    related: [
      { label: "Conception & scénographie", href: "/nos-services/conception-et-scenographie" },
      { label: "Animation et modération", href: "/nos-services/animation" },
      { label: "Communication institutionnelle : les enjeux", href: "/blog/communication-institutionnelle-enjeux" },
    ],
  },

  {
    slug: "agence-evenementielle-toulouse",
    title: "Événementiel à Toulouse : ce qui change par rapport à Montpellier",
    metaTitle: "Agence événementielle Toulouse | A6",
    metaDescription:
      "Produire un événement à Toulouse quand on connaît Montpellier : tissu économique, lieux, logistique, et ce que cela change à la conception.",
    keyword: "agence événementielle toulouse",
    category: "Événementiel",
    date: "2026-06-24",
    dateLabel: "Juin 2026",
    readingMinutes: 6,
    img: "/photos/DSC_1019.webp",
    imgAlt:
      "Préparation d’un événement professionnel à Toulouse coordonné par l’agence A6",
    excerpt:
      "Montpellier et Toulouse sont dans la même région et ne se produisent pas de la même façon. Tissu économique, typologie de lieux, logistique : ce qui change concrètement quand un événement se déplace vers la Haute-Garonne.",
    body: [
      {
        kind: "p",
        text: "Occitanie est une région administrative, pas un marché homogène. Une agence qui produit régulièrement à Montpellier et intervient à Toulouse doit ajuster plusieurs paramètres, sous peine d’appliquer des réflexes inadaptés. Voici les différences qui ont un effet réel sur la conception et la production d’un événement professionnel.",
      },
      {
        kind: "h2",
        text: "Un tissu économique différent, donc des audiences différentes",
        id: "tissu-economique",
      },
      {
        kind: "p",
        text: "Toulouse est structurée par des filières industrielles et techniques de grande taille, avec les cultures professionnelles qui vont avec : rigueur des process, exigence sur la précision du contenu, faible tolérance pour l’événementiel purement décoratif. Montpellier a un tissu plus fragmenté, davantage tourné vers la santé, le numérique et le secteur public régional. La même conception d’événement ne produit pas le même effet sur ces deux audiences.",
      },
      {
        kind: "p",
        text: "Conséquence pratique : sur un événement toulousain à audience technique, l’investissement se déplace du décor vers la qualité du contenu, de la captation et de la conduite des échanges. C’est un arbitrage de budget, pas seulement de style.",
      },
      {
        kind: "h2",
        text: "Des lieux plus dispersés, une logistique à repenser",
        id: "lieux-logistique",
      },
      {
        kind: "p",
        text: "L’offre de lieux toulousaine est plus étalée géographiquement, avec des équipements importants qui ne sont pas tous en centre-ville. Cela déplace deux postes : l’accessibilité pour les participants venus en transport, et la logistique de montage. Un lieu excellent mal desservi fait chuter le taux de présence effective par rapport aux inscriptions — un effet qu’on mesure toujours trop tard.",
      },
      {
        kind: "ul",
        items: [
          "Vérifier l’accès en transport en commun avant de valider un lieu, pas après.",
          "Prévoir le fléchage depuis le point d’arrivée réel des participants, pas depuis l’entrée du bâtiment.",
          "Anticiper les temps de montage : un lieu périphérique allonge les acheminements et les rotations.",
        ],
      },
      {
        kind: "h2",
        text: "Un réseau de prestataires à constituer, pas à supposer",
        id: "prestataires",
      },
      {
        kind: "p",
        text: "C’est le point sur lequel une agence doit être honnête. Un carnet d’adresses montpelliérain ne se transpose pas : traiteurs, techniciens, loueurs de mobilier et imprimeurs sont des acteurs locaux. Deux options existent, et elles ont chacune un coût. Faire monter ses prestataires habituels ajoute déplacement et hébergement mais garantit le niveau connu. Travailler avec des prestataires toulousains réduit ces coûts mais demande un repérage préalable réel.",
      },
      {
        kind: "note",
        text: "La question à poser à toute agence qui vous propose un événement à Toulouse : avez-vous déjà produit ici, et avec qui ? Une réponse floue signifie que le repérage sera fait sur votre projet.",
      },
      {
        kind: "h2",
        text: "Ce qui ne change pas",
        id: "invariants",
      },
      {
        kind: "p",
        text: "L’essentiel, en réalité. La structure d’un projet événementiel est la même d’une ville à l’autre : clarifier la gouvernance, sécuriser lieu et date, construire un programme qui tient, dimensionner l’accueil au flux réel, assurer la régie le jour J, et produire une trace exploitable. Les différences territoriales portent sur les paramètres, pas sur la méthode.",
      },
      {
        kind: "p",
        text: "C’est aussi pourquoi une agence régionale a du sens : elle capitalise sur une méthode unique tout en ajustant les paramètres locaux. Notre périmètre couvre Montpellier, Toulouse et l’Occitanie — [parlons de votre projet](/contact).",
      },
    ],
    faq: [
      {
        question: "Une agence montpelliéraine peut-elle produire un événement à Toulouse ?",
        answer:
          "Oui, à condition d’être transparente sur son réseau local. La méthode de production est transposable, le carnet d’adresses ne l’est pas. Demandez si l’agence a déjà produit sur place et avec quels prestataires : soit elle fait monter ses équipes habituelles, ce qui a un coût de déplacement, soit elle travaille avec des acteurs toulousains, ce qui demande un repérage préalable.",
      },
      {
        question: "Le budget d’un même événement est-il différent à Toulouse et à Montpellier ?",
        answer:
          "Les écarts viennent surtout du lieu et de la logistique, pas d’un différentiel de prix général. Un lieu périphérique bien desservi peut coûter moins cher en location mais davantage en acheminement et en fléchage. L’arbitrage se fait projet par projet, sur le coût complet et non sur le tarif de location.",
      },
    ],
    related: [
      { label: "Choisir une agence événementielle à Montpellier", href: "/blog/choisir-agence-evenementielle-montpellier" },
      { label: "Notre offre logistique", href: "/nos-services/logistique" },
      { label: "Nos réalisations", href: "/realisations" },
    ],
  },

  {
    slug: "evenementiel-responsable-reperes",
    title: "Événementiel responsable : les repères concrets avant de parler de label",
    metaTitle: "Événementiel responsable : repères | A6",
    metaDescription:
      "Réduire l’empreinte d’un événement professionnel sans greenwashing : les postes qui pèsent réellement, les arbitrages efficaces et ce qu’un label engage.",
    keyword: "événementiel responsable",
    category: "Événementiel",
    date: "2026-06-10",
    dateLabel: "Juin 2026",
    readingMinutes: 7,
    img: "/photos/DSC_1091.webp",
    imgAlt:
      "Supports de signalétique événementielle conçus pour être réutilisés d’une édition à l’autre",
    excerpt:
      "L’événementiel responsable se joue sur trois ou quatre postes précis, pas sur des gobelets. Ce qui pèse vraiment, ce qui relève de l’affichage, et à quoi engage une démarche de labellisation.",
    body: [
      {
        kind: "p",
        text: "L’événementiel responsable souffre d’un décalage : les actions les plus visibles sont rarement les plus efficaces, et les postes qui pèsent le plus sont les moins spectaculaires. Avant d’engager une démarche de label, il est utile de savoir où se situe réellement l’impact d’un événement professionnel — et donc où un arbitrage produit un effet mesurable.",
      },
      {
        kind: "note",
        text: "Mise au point : A6 n’est pas un organisme certificateur et ne revendique pas de certification événementielle. Cet article explique des repères de conception. Si votre cahier des charges exige une certification formelle, c’est un critère de sélection légitime et nous vous le dirons franchement.",
      },
      {
        kind: "h2",
        text: "Le poste qui domine tous les autres : le déplacement des participants",
        id: "deplacements",
      },
      {
        kind: "p",
        text: "Sur la très grande majorité des événements professionnels, le transport des participants représente le premier poste d’impact, loin devant la restauration, les supports et l’énergie du lieu. Cela a une conséquence inconfortable : les décisions les plus efficaces sont des décisions de format et de lieu, prises très tôt, et non des choix d’achats faits en fin de projet.",
      },
      {
        kind: "ul",
        items: [
          "Choisir un lieu accessible en transport collectif depuis le point d’origine réel des participants.",
          "Regrouper plusieurs objectifs sur un même déplacement plutôt que multiplier les rendez-vous courts.",
          "Envisager une part de participation à distance pour les audiences éloignées, sans en faire un format hybride bâclé.",
        ],
      },
      {
        kind: "h2",
        text: "Les supports : concevoir pour la réutilisation",
        id: "supports",
      },
      {
        kind: "p",
        text: "C’est le levier le plus direct, et le plus souvent manqué par une erreur de conception simple : mettre la date et le millésime sur tous les supports. Un kakémono d’identité, un totem d’accueil ou une signalétique directionnelle peuvent servir plusieurs éditions si l’information périssable est isolée sur un élément séparé et peu coûteux.",
      },
      {
        kind: "p",
        text: "En pratique, nous distinguons systématiquement trois familles dans la [signalétique](/nos-services/impressions-signaletique) : les éléments permanents, les éléments d’édition et les éléments jetables. Bien tracée, cette séparation réduit le volume réimprimé d’une édition à l’autre — et le budget avec.",
      },
      {
        kind: "h2",
        text: "La restauration : le format compte plus que le sourcing",
        id: "restauration",
      },
      {
        kind: "p",
        text: "Le sourcing local et de saison est un bon réflexe, mais l’effet le plus net vient d’ailleurs : du dimensionnement. Le gaspillage alimentaire sur un événement professionnel provient principalement d’un écart entre les inscrits et les présents. Un suivi sérieux des désistements dans les jours précédents permet un réajustement des volumes qui a un effet immédiat, sans rien changer au menu.",
      },
      {
        kind: "h2",
        text: "Ce qui relève de l’affichage",
        id: "affichage",
      },
      {
        kind: "p",
        text: "Certaines actions ont une valeur pédagogique réelle mais un impact marginal : suppression des bouteilles individuelles, tri sur site, goodies « écologiques ». Elles ne sont pas inutiles — elles signalent une intention et engagent les participants. Le problème commence quand elles servent d’argument principal alors que l’événement fait venir trois cents personnes en voiture individuelle sur un site non desservi.",
      },
      {
        kind: "quote",
        text: "Un événement responsable se décide au moment du choix du lieu et du format, pas au moment du choix des gobelets.",
      },
      {
        kind: "h2",
        text: "Faut-il viser une démarche labellisée ?",
        id: "label",
      },
      {
        kind: "p",
        text: "Une démarche de labellisation apporte un cadre, une méthode de mesure et une crédibilité vis-à-vis d’un commanditaire public ou d’un donneur d’ordre qui l’exige. Elle a en revanche un coût réel : temps de structuration, documentation, mesure. Pour une instance qui organise un congrès annuel récurrent, l’investissement se rentabilise ; pour un événement unique, la même énergie mise sur le choix du lieu et le dimensionnement produira souvent davantage d’effet.",
      },
      {
        kind: "p",
        text: "Notre position est simple : commencer par les trois postes qui pèsent, mesurer, puis décider si le cadre formel apporte quelque chose. Si vous voulez en discuter sur un projet précis, [contactez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Quel est le premier poste d’impact d’un événement professionnel ?",
        answer:
          "Le déplacement des participants, dans la très grande majorité des cas, loin devant la restauration et les supports. Cela signifie que les décisions les plus efficaces sont celles du lieu et du format, prises au tout début du projet, et non les choix d’achats effectués en fin de production.",
      },
      {
        question: "Comment réduire le coût et l’impact des supports événementiels ?",
        answer:
          "En isolant l’information périssable. Si la date et le millésime figurent sur tous les supports, tout est à réimprimer chaque année. En séparant les éléments permanents, les éléments d’édition et les éléments jetables, une grande partie de la signalétique se réutilise d’une édition à l’autre.",
      },
    ],
    related: [
      { label: "Impressions & signalétique", href: "/nos-services/impressions-signaletique" },
      { label: "Ce qui fait varier le budget d’un événement", href: "/blog/budget-evenement-corporate" },
      { label: "Signalétique événementielle : les règles", href: "/blog/signaletique-evenementielle-regles" },
    ],
  },
];
