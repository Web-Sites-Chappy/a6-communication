import type { BlogPost } from "@/lib/blog/types";

/**
 * Cluster méthode & services restants : couvre les requêtes informationnelles
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
    readingMinutes: 11,
    img: "/photos/blog/choisir-agence-communication-1-v2.webp",
    imgAlt:
      "Réunion d’équipe autour d’une table de travail, illustration du choix d’une agence de communication",
    excerpt:
      "Toutes les agences présentent de beaux projets et disent la même chose. La sélection se joue ailleurs : sur la façon dont vous cadrez votre besoin et sur trois ou quatre questions que peu de clients posent.",
    body: [
      {
        kind: "p",
        text: "Savoir comment choisir une agence de communication est plus difficile qu’il n’y paraît : les portfolios se ressemblent et le discours commercial est homogène, puisque tout le monde se présente comme à l’écoute, créatif et stratégique. La sélection utile ne consiste donc pas à comparer des présentations mais à cadrer précisément votre besoin, puis à poser les questions qui font apparaître les différences réelles.",
      },
      {
        kind: "p",
        text: "Une précision de méthode avant d’entrer dans le détail. Une consultation d’agences n’est pas un concours de beauté : c’est le début d’une relation de travail qui durera souvent plusieurs années, avec des arbitrages, des périodes tendues et des changements d’interlocuteurs de part et d’autre. Les critères qui prédisent le mieux la réussite ne sont donc pas ceux qui se voient en rendez-vous de présentation, mais ceux qui décrivent la façon dont l’agence travaille quand personne ne regarde.",
      },
      {
        kind: "h2",
        text: "Temps 1 : Écrire ce que vous voulez obtenir, pas ce que vous voulez acheter",
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
      { kind: "h3", text: "Décrire une situation plutôt qu’un livrable" },
      {
        kind: "p",
        text: "L’écart entre les deux formulations paraît formel, il ne l’est pas. « Nous voulons une nouvelle plaquette » ferme le champ des réponses à une seule : une plaquette. « Nos partenaires institutionnels ne savent pas ce que nous faisons au-delà de notre mission historique » ouvre un espace où l’agence peut proposer une plaquette, mais aussi une refonte de la page d’accueil, une série de rencontres, ou un travail sur le discours avant tout support. Ce que vous achetez est une capacité de proposition : la neutraliser dans le brief revient à payer un exécutant au prix d’un conseil.",
      },
      { kind: "h3", text: "Ce qu’un brief doit contenir même quand il est court" },
      {
        kind: "p",
        text: "Un bon brief tient souvent en deux pages. La longueur n’est pas le critère ; la présence de quelques informations difficiles l’est. Un brief qui ne dit rien des désaccords internes sur le sujet, des tentatives précédentes et de leurs résultats, ou du poids réel de chaque public, produira des propositions élégantes et hors sol. Les informations gênantes sont celles qui ont le plus de valeur pour l’agence, et ce sont précisément celles que l’on omet.",
      },
      { kind: "h3", text: "Le budget fait partie du brief" },
      {
        kind: "note",
        text: "Le budget fait partie du brief. Sans enveloppe, vous recevrez des propositions non comparables et souvent hors de portée. L’annoncer n’augmente pas le prix : cela oriente la conception vers ce qui est réalisable chez vous.",
      },
      {
        kind: "p",
        text: "L’objection habituelle est que l’annonce d’une enveloppe pousse toutes les agences à s’aligner sur le plafond. Le risque existe et il se traite par une question supplémentaire : demandez à chaque agence ce qu’elle ferait avec le budget annoncé, puis ce qu’elle ferait avec la moitié. La réponse à cette seconde question est souvent la plus instructive de toute la consultation, parce qu’elle oblige à hiérarchiser et révèle ce que l’agence considère comme le cœur du problème.",
      },
      {
        kind: "h2",
        text: "Temps 2 : Vérifier l’adéquation de registre",
        id: "registre",
      },
      {
        kind: "p",
        text: "C’est le critère le plus prédictif et le moins regardé. Une agence excellente sur des marques grand public peut être inadaptée à une institution, non par incompétence mais par habitude de registre : elle proposera de l’audace là où il faut de la neutralité, de la réactivité là où il faut de la collégialité. Regardez donc moins la qualité des références que leur nature.",
      },
      { kind: "h3", text: "Registre institutionnel et registre marchand" },
      {
        kind: "p",
        text: "Une communication marchande cherche la préférence : elle peut trancher, exagérer, prendre parti, parce que son échec commercial est réversible et se corrige à la campagne suivante. Une communication institutionnelle engage une autorité, une mission ou un mandat, et son échec se paie en légitimité, ce qui se répare beaucoup plus lentement. Les deux exigent de la qualité, mais pas les mêmes réflexes : ce qui passe pour de la timidité dans un univers de marque est, dans l’autre, une exigence de justesse. Une agence qui n’a jamais eu à composer avec un conseil d’administration, une tutelle ou un partenaire cosignataire découvrira ces contraintes à vos frais.",
      },
      {
        kind: "ul",
        items: [
          "L’agence a-t-elle travaillé pour des commanditaires de votre type ?",
          "Comprend-elle votre circuit de validation, ou le considère-t-elle comme un obstacle ?",
          "Ses références récentes relèvent-elles du même registre que le vôtre ?",
        ],
      },
      { kind: "h3", text: "Le circuit de validation comme critère de sélection" },
      {
        kind: "p",
        text: "Demandez explicitement comment l’agence organise la validation quand cinq personnes doivent donner leur avis et que deux d’entre elles ne sont pas disponibles avant trois semaines. Une agence habituée aux commanditaires institutionnels a une réponse construite : des jalons formalisés, un interlocuteur unique côté client, des versions numérotées, un délai de retour au-delà duquel la version est réputée validée. Une agence qui répond que cela se passe bien en général vous fera porter seul le coût des allers-retours.",
      },
      { kind: "h3", text: "Le cas des structures hybrides" },
      {
        kind: "p",
        text: "Certaines organisations relèvent de deux registres à la fois : une structure culturelle qui doit remplir une salle, une fédération professionnelle qui recrute des adhérents, une association qui collecte des dons tout en portant une parole publique. Le réflexe est alors de chercher une agence marchande pour la partie conquête et une agence institutionnelle pour le reste, ce qui produit deux territoires visuels et deux discours que le public finit par percevoir. Il vaut mieux chercher une agence capable de tenir les deux registres dans une seule architecture de marque, et le vérifier en lui demandant comment elle traiterait la contradiction plutôt qu’en lui demandant si elle sait la traiter. La logique d’ensemble est celle décrite dans [l’identité de marque institutionnelle](/blog/identite-marque-institutionnelle).",
      },
      {
        kind: "h2",
        text: "Temps 3 : Les questions qui font la différence",
        id: "questions",
      },
      {
        kind: "p",
        text: "Ces questions ne testent pas la créativité mais la solidité de l’engagement. Elles se posent en entretien et les réponses sont très discriminantes, non parce qu’il existe une bonne réponse unique, mais parce qu’une réponse floue révèle un point non pensé.",
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
      { kind: "h3", text: "Combien d’allers-retours sont prévus, et qu’appelez-vous un aller-retour ?" },
      {
        kind: "p",
        text: "La question paraît administrative, elle est financière. Le nombre d’allers-retours inclus détermine ce qui bascule en facturation supplémentaire, et c’est la première source de litige en fin de projet. Faites préciser ce qui compte comme un aller-retour : une série de corrections regroupées et transmises en une fois, ou chaque courriel de remarque isolé. La différence entre ces deux définitions pèse lourd sur la facture finale d’un projet d’identité, et elle ne se négocie plus une fois le travail engagé.",
      },
      { kind: "h3", text: "Que ferez-vous si nous ne sommes pas d’accord avec vous ?" },
      {
        kind: "p",
        text: "La réponse révèle la posture, et il n’en existe pas de mauvaise à condition de la connaître avant de signer. Une agence qui répond qu’elle applique la décision du client vend une prestation d’exécution, ce qui est un choix légitime et parfois exactement ce dont vous avez besoin. Une agence qui répond qu’elle défend son parti pris, l’argumente, puis applique la décision retenue si elle n’a pas convaincu, décrit une relation de conseil. Le désaccord arrive toujours au moins une fois dans un projet d’identité ou de positionnement : mieux vaut savoir à l’avance comment il sera traité.",
      },
      {
        kind: "h2",
        text: "Temps 4 : Comparer ce qui est comparable",
        id: "comparer",
      },
      {
        kind: "p",
        text: "Deux devis très écartés indiquent presque toujours des périmètres différents, pas un écart de prix. Avant de conclure, ramenez chaque proposition à une grille commune : ce qui est inclus, ce qui est en option, ce qui est refacturé, et le nombre d’allers-retours prévus. Cette dernière ligne est celle qui produit le plus de litiges en fin de projet.",
      },
      { kind: "h3", text: "Construire la grille vous-même" },
      {
        kind: "p",
        text: "La grille ne doit pas être reprise de la proposition la mieux présentée, sinon elle épouse le découpage de cette agence et défavorise les autres. Établissez-la à partir de votre besoin, remplissez-la vous-même à partir des devis reçus, et appelez les agences pour les lignes que vous ne parvenez pas à renseigner. Ces appels sont eux-mêmes informatifs : une agence qui ne sait pas répondre en quelques minutes sur son propre périmètre ne l’a pas travaillé.",
      },
      {
        kind: "ul",
        items: [
          "Ce qui est inclus dans le forfait, ligne par ligne, et ce qui figure en option.",
          "Les achats refacturés (impression, régie technique, droits photo, licences de polices) et leur mode de refacturation.",
          "Le nombre d’allers-retours inclus et la définition retenue d’un aller-retour.",
          "Les droits cédés : durée, territoire, supports couverts, et ce qui reste à négocier en cas d’usage nouveau.",
          "La remise des fichiers sources et des accès, prévue ou non au contrat.",
          "Le taux journalier appliqué au-delà du forfait, qui détermine le coût réel des imprévus.",
        ],
      },
      { kind: "h3", text: "Forfait, régie ou accord-cadre" },
      {
        kind: "p",
        text: "Trois modes contractuels coexistent et ils ne servent pas les mêmes situations. Le forfait convient à un périmètre stable et bien décrit : il protège le commanditaire du dérapage, mais rend chaque évolution négociable. La régie, facturée au temps passé, convient aux missions dont le contenu se précise en avançant, à condition de plafonner l’enveloppe et de suivre les temps consommés. L’accord-cadre à bons de commande, très utilisé par les acheteurs publics, sécurise une relation pluriannuelle sans figer les projets, mais il exige un bordereau de prix assez détaillé pour rester opérant quand les besoins évoluent.",
      },
      {
        kind: "h2",
        text: "Le cas particulier de la commande publique",
        id: "commande-publique",
      },
      {
        kind: "p",
        text: "Quand l’acheteur est une collectivité, un établissement public ou un opérateur soumis au [code de la commande publique](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000037701019/), la sélection obéit à des règles de publicité et de mise en concurrence qui encadrent tout ce qui précède sans le rendre inutile. Le cadrage du besoin devient un cahier des charges, les questions à poser deviennent des critères de jugement pondérés, et la grille de comparaison devient la méthode de notation. L’erreur la plus fréquente consiste à pondérer le prix trop lourdement sur une prestation intellectuelle, ce qui sélectionne la proposition la moins ambitieuse plutôt que la mieux-disante.",
      },
      {
        kind: "p",
        text: "L’autre point d’attention est la description des livrables. Un cahier des charges qui décrit très précisément les supports attendus obtient exactement ces supports, sans qu’aucun candidat n’ait intérêt à proposer mieux : le cadre a fermé l’espace de proposition avant même la remise des offres. Réserver une part de la note à la pertinence de la réponse méthodologique rouvre cet espace. Le sujet est traité du côté du candidat dans [répondre à un marché public de communication](/blog/marche-public-communication-repondre).",
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
      { kind: "h3", text: "Les faux signaux d’alerte" },
      {
        kind: "p",
        text: "Trois éléments inquiètent souvent à tort. Une structure de petite taille n’est pas un risque en soi : elle le devient seulement si rien n’est prévu en cas d’absence ou de pic d’activité, ce qui se vérifie par une question et non par une intuition. L’absence de références portant exactement sur votre secteur n’est pas rédhibitoire non plus, dès lors que le registre de commande est le même : c’est le registre qui se transfère d’un projet à l’autre, pas le vocabulaire métier, qui s’apprend en quelques semaines. Enfin, une agence qui vous dit non pendant l’entretien, qui conteste une partie du brief ou qui annonce qu’une partie de la demande ne tient pas dans le budget est en général un meilleur signe qu’une agence qui accepte tout sans discuter.",
      },
      {
        kind: "h2",
        text: "Comment choisir une agence de communication : la synthèse en quatre temps",
        id: "synthese",
      },
      {
        kind: "p",
        text: "Écrire ce que vous voulez obtenir plutôt que ce que vous voulez acheter. Vérifier l’adéquation de registre avant la qualité créative. Poser les quelques questions qui engagent : qui produit, que se passe-t-il en cas d’incident, que reste-t-il à la fin, comment se déroule la validation. Puis comparer sur une grille que vous avez construite vous-même. Cette démarche ne garantit pas le résultat, mais elle élimine la plus grande partie des échecs, qui tiennent rarement au talent et presque toujours à un malentendu de périmètre ou de registre.",
      },
      {
        kind: "p",
        text: "A6 est une agence de communication et d’événementiel implantée à Montpellier, positionnée auprès des institutions, des collectivités et des structures culturelles et associatives en Occitanie. Si vous voulez nous confronter à cette checklist, [écrivez-nous](/contact).",
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
      {
        question: "Faut-il indemniser les agences consultées ?",
        answer:
          "L’indemnisation se justifie dès que la consultation demande un travail de création ou une réponse méthodologique construite. En commande publique, elle est prévue pour les candidats non retenus lorsque la procédure impose des prestations substantielles, et le même bon sens s’applique en dehors. Une consultation non indemnisée qui exige plusieurs jours de production sélectionne les agences qui peuvent se le permettre, pas celles qui répondent le mieux à votre besoin. Si votre budget de consultation est nul, réduisez ce que vous demandez plutôt que de le demander gratuitement.",
      },
      {
        question: "Comment savoir si une agence a vraiment compris notre besoin ?",
        answer:
          "À la nature de ses questions plus qu’à la qualité de sa restitution. Une agence qui a compris reformule votre problème dans des termes que vous n’aviez pas employés, identifie une tension que vous n’aviez pas explicitée, et vous demande des informations que vous n’aviez pas prévu de donner. Une agence qui se contente de reprendre votre brief en le mettant en forme n’a rien ajouté à ce stade et n’ajoutera probablement rien ensuite. C’est le test le plus fiable dont vous disposez, et il ne coûte rien à administrer.",
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
    title: "Signalétique événementielle : les règles avant d’imprimer",
    metaTitle: "Signalétique événementielle | A6",
    metaDescription:
      "Concevoir une signalétique événementielle qui fonctionne : obligations de sécurité, hiérarchie de l’information, dimensionnement et supports réutilisables.",
    keyword: "signalétique événementielle",
    category: "Méthode",
    date: "2026-05-13",
    dateLabel: "Mai 2026",
    readingMinutes: 10,
    img: "/photos/blog/signaletique-evenementielle-regles-1-v2.webp",
    imgAlt:
      "Stands et signalétique d’un salon professionnel, illustration de la signalétique événementielle",
    excerpt:
      "La signalétique est le poste où l’on économise en dernier et où l’on se trompe en premier. Ce qui relève de l’obligation, ce qui relève du confort, et comment dimensionner sans réimprimer chaque année.",
    body: [
      {
        kind: "p",
        text: "La signalétique événementielle remplit deux fonctions distinctes qu’on confond souvent : une fonction réglementaire de sécurité, non négociable, et une fonction d’orientation et d’identité, qui relève de la conception. Les traiter comme un seul lot produit soit des supports non conformes, soit une signalétique de sécurité esthétisée jusqu’à devenir illisible.",
      },
      {
        kind: "p",
        text: "C’est aussi le poste où les erreurs se voient le plus, parce qu’elles se manifestent le jour même, devant tout le monde, et qu’elles ne se corrigent plus. Un participant qui tourne dans un hall sans savoir où aller ne se souviendra pas du soin apporté au programme : il se souviendra d’avoir été mal reçu. La signalétique est donc un élément d’accueil avant d’être un élément de décor, et c’est à ce titre qu’elle mérite d’être arbitrée tôt.",
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
      { kind: "h3", text: "La signalisation de sécurité appartient au lieu, pas à l’événement" },
      {
        kind: "p",
        text: "C’est la distinction pratique la plus utile à garder en tête. Les blocs d’issue de secours, les plans d’évacuation et l’indication des moyens de secours sont installés et entretenus par le gestionnaire du site : ils restent en place quoi que vous installiez par-dessus. Votre marge de manœuvre porte sur ce que vous ajoutez, jamais sur ce qui existe. Toute demande de masquage temporaire, y compris pour une captation ou une prise de vue, se traite avec le gestionnaire et se documente par écrit.",
      },
      { kind: "h3", text: "L’accessibilité, souvent oubliée du lot signalétique" },
      {
        kind: "p",
        text: "Une signalétique conforme aux règles de sécurité n’est pas pour autant accessible. Les points à traiter sont concrets : une hauteur de lecture compatible avec une personne assise, un contraste suffisant entre le texte et son fond, une taille de caractère qui reste lisible pour une personne malvoyante, et des informations essentielles (accueil, sanitaires, ascenseur, sortie) qui ne reposent pas uniquement sur une couleur ou sur un pictogramme non standard. Les règles d’accessibilité du [code de la construction et de l’habitation](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006074096/) applicables aux établissements recevant du public donnent une base de travail utile, y compris quand la manifestation n’y est pas formellement soumise.",
      },
      { kind: "h3", text: "L’affichage extérieur et les autorisations d’occupation" },
      {
        kind: "p",
        text: "Dès que la signalétique sort du site, elle change de régime. Un fléchage posé sur le domaine public, une banderole sur une façade donnant sur la rue, un totem sur un trottoir relèvent d’une autorisation d’occupation délivrée par la commune ou le gestionnaire de voirie, avec des délais d’instruction qui se comptent en semaines. Le sujet se traite donc au moment du dépôt des autres demandes, et non dans les jours qui précèdent, quand il ne reste plus qu’à renoncer.",
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
      { kind: "h3", text: "Identifier : être reconnu depuis la rue" },
      {
        kind: "p",
        text: "Le premier doute d’un participant n’est pas « où dois-je aller » mais « est-ce bien ici ». Un bâtiment sans marquage visible depuis le trottoir produit des appels téléphoniques, des retards à l’accueil et une file qui se forme au mauvais endroit. L’élément d’identification se dimensionne donc pour la distance depuis laquelle on arrive, à pied ou en voiture, et il porte le nom de l’événement plutôt que le logo seul, qui ne renseigne pas quelqu’un qui ne le connaît pas encore.",
      },
      { kind: "h3", text: "Orienter : une décision, une information" },
      {
        kind: "p",
        text: "Un panneau directionnel répond à une seule question, celle que le participant se pose à cet endroit précis. Multiplier les destinations sur un même support oblige à lire, donc à s’arrêter, donc à créer un point de congestion là où l’on cherchait à fluidifier. Quand plusieurs flux se croisent, deux supports séparés et clairs valent mieux qu’un support unique exhaustif.",
      },
      { kind: "h3", text: "Informer : à l’arrêt, hors du flux" },
      {
        kind: "p",
        text: "Le programme, le plan des salles et les informations pratiques se lisent debout et immobile. Les afficher dans un couloir crée un bouchon ; les afficher dans une zone d’attente, près du vestiaire ou de l’espace café, les rend réellement consultables. C’est une décision d’implantation autant que de conception, et elle se prend en regardant où les gens s’arrêtent naturellement.",
      },
      {
        kind: "h2",
        text: "Concevoir une signalétique événementielle lisible",
        id: "lisibilite",
      },
      {
        kind: "p",
        text: "La lisibilité d’une signalétique événementielle ne dépend pas du soin apporté à la mise en page mais de trois variables concrètes : le contraste, la hauteur des caractères rapportée à la distance de lecture, et la hauteur de pose. Une charte graphique élégante peut produire une signalétique parfaitement illisible si elle impose un texte clair sur fond clair, une graisse trop fine ou une couleur pâle.",
      },
      { kind: "h3", text: "Le contraste prime sur la couleur de marque" },
      {
        kind: "p",
        text: "C’est l’arbitrage le plus fréquent et il se tranche presque toujours dans le même sens. Une couleur institutionnelle pâle, parfaitement identitaire sur un document imprimé tenu en main, devient inopérante sur un panneau lu de loin, sous un éclairage inégal, parfois à contre-jour. La solution n’est pas d’abandonner la couleur mais de la déplacer : bandeau coloré, aplat de fond, cadre, avec un texte en fort contraste. L’identité se lit alors à distance sans que le message soit sacrifié, ce qui est exactement ce qu’une [charte graphique utile](/blog/charte-graphique-utile) doit prévoir.",
      },
      { kind: "h3", text: "La hauteur de pose et le champ de vision" },
      {
        kind: "p",
        text: "Un support posé trop bas disparaît dès qu’il y a du monde ; posé trop haut, il sort du champ de vision d’un participant qui marche en regardant devant lui. Les informations directionnelles se placent dans la zone haute, au-dessus des têtes, quand le flux est dense ; les informations à lire à l’arrêt se placent à hauteur de regard. Afficher un même contenu aux deux hauteurs n’est pas une redondance inutile lorsque la jauge est importante.",
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
        kind: "p",
        text: "La règle pratique consiste à retirer, sur chaque support, tout ce qui n’aide pas à la décision que le participant doit prendre à cet endroit. Le logo de l’organisateur figure déjà sur le totem d’accueil et sur le fond de scène ; il n’a pas besoin d’occuper un tiers d’un panneau de fléchage. Quant aux partenaires, ils sont mieux servis par des supports dédiés et visibles que par une présence diluée sur l’ensemble du dispositif, où personne ne les regarde.",
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
      { kind: "h3", text: "Marcher le parcours avant de le dessiner" },
      {
        kind: "p",
        text: "La méthode est banale et peu pratiquée : parcourir le trajet complet depuis l’arrêt de transport ou le parking jusqu’à la salle, en notant chaque endroit où l’on hésite. Ces points d’hésitation forment la liste exacte des supports nécessaires, ni plus ni moins, et elle est presque toujours différente de celle qu’on aurait établie sur plan. Le faire au repérage, si possible à la même heure que l’événement, révèle en prime les conditions d’éclairage réelles.",
      },
      { kind: "h3", text: "Les lieux qui contraignent la pose" },
      {
        kind: "p",
        text: "Un site patrimonial, un musée ou un bâtiment classé interdisent en général toute fixation sur les murs et les sols, ce qui écarte d’un coup l’adhésif, le clou et le ruban. Il faut alors travailler sur pied : totems lestés, chevalets, potences autoportantes, kakémonos sur base. La contrainte se découvre au repérage et non à la livraison, sous peine de se retrouver avec des supports impossibles à installer le matin même. Ce point rejoint les arbitrages décrits dans [l’événementiel culturel et patrimonial](/blog/evenementiel-culturel-patrimoine).",
      },
      {
        kind: "h2",
        text: "Les supports et leurs contraintes",
        id: "supports",
      },
      {
        kind: "p",
        text: "Le choix du support n’est ni seulement esthétique ni seulement budgétaire : chaque famille a des contraintes de pose, de transport et de réemploi qui se répercutent sur le planning et sur la personne qui installera.",
      },
      {
        kind: "ul",
        items: [
          "Kakémonos et roll-ups : légers, réutilisables, sensibles au vent, à réserver à l’intérieur.",
          "Totems rigides sur base lestée : autoportants, adaptés aux lieux où la fixation est interdite, encombrants au transport.",
          "Panneaux en polypropylène alvéolaire : peu coûteux et faciles à découper, mais fragiles au réemploi.",
          "Bâches et banderoles extérieures : soumises à la prise au vent, elles demandent œillets, tendeurs et parfois une autorisation.",
          "Marquage adhésif au sol : efficace pour canaliser les flux, à valider avec le gestionnaire selon la nature du revêtement.",
          "Affichage numérique : modifiable jusqu’au dernier moment, dépendant d’une alimentation et d’une personne capable d’intervenir sur place.",
        ],
      },
      { kind: "h3", text: "Le vent, contrainte sous-estimée en extérieur" },
      {
        kind: "p",
        text: "Tout support extérieur est soumis à la prise au vent, et un panneau qui se couche est un risque pour les personnes avant d’être un problème d’image. Les dispositifs extérieurs se lestent, se haubanent ou se démontent, et le scénario de démontage rapide se décide en amont, avec une personne identifiée pour le déclencher et un critère simple pour le faire. Beaucoup d’organisateurs traitent ce point le jour même, alors qu’il relève de la préparation et qu’il ne se décide pas correctement dans l’urgence.",
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
          "Éléments permanents : identité, totems d’accueil, fléchage générique, sans date ni millésime.",
          "Éléments d’édition : programme, noms d’intervenants, plan des salles, sur supports peu coûteux et interchangeables.",
          "Éléments jetables : badges, marquages au sol, à minimiser.",
        ],
      },
      { kind: "h3", text: "Ce que la réutilisation coûte à l’entrée" },
      {
        kind: "p",
        text: "L’arbitrage a un prix immédiat qu’il faut assumer : un totem conçu pour durer coûte plus cher qu’un panneau jetable, il demande un lieu de stockage et une logistique de transport entre deux éditions. Le calcul se fait sur trois éditions au moins, et il ne se justifie ni pour un événement unique ni pour un format encore instable. Décider de tout réutiliser dès la première édition d’une manifestation expérimentale revient souvent à stocker des supports qui ne resserviront pas.",
      },
      {
        kind: "h2",
        text: "Le rétroplanning de production",
        id: "retroplanning",
      },
      {
        kind: "p",
        text: "La signalétique est le dernier poste validé et l’un des premiers à devoir être produit, ce qui explique la plupart des urgences de fin de projet. Les fichiers d’impression se bouclent quand le programme est encore susceptible de bouger, et chaque modification tardive coûte une réimpression complète du support concerné.",
      },
      {
        kind: "ul",
        items: [
          "Repérage et relevé des points de décision, avant toute conception.",
          "Conception, puis validation des maquettes à la distance de lecture réelle.",
          "Bon à tirer, en distinguant explicitement les supports permanents des supports datés.",
          "Production, avec une marge prévue pour un réassort de dernière minute sur les supports peu coûteux.",
          "Livraison, stockage sur site et remise du plan d’implantation à l’équipe de montage.",
        ],
      },
      {
        kind: "p",
        text: "Le plan d’implantation est le document qui manque le plus souvent. Sans lui, les supports arrivent sur site et sont posés au jugé par des personnes qui n’ont pas participé à la conception, ce qui annule le travail de repérage. Une feuille par zone, avec une photo et l’emplacement exact de chaque support, suffit à éviter cela.",
      },
      {
        kind: "p",
        text: "Nous produisons la signalétique dans la même chaîne que l’identité de l’événement : voir [impressions et signalétique](/nos-services/impressions-signaletique) et notre approche de l’[événementiel responsable](/blog/evenementiel-responsable-reperes).",
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
      {
        question: "Quelle taille de caractères prévoir sur un panneau directionnel ?",
        answer:
          "Il n’existe pas de valeur unique, parce que la taille dépend de la distance à laquelle le support sera lu, de l’éclairage du lieu et du contraste retenu. La méthode fiable consiste à imprimer un support d’essai, à le poser à son emplacement définitif et à le lire depuis le point où le participant se trouvera réellement. Ce test prend une demi-journée au moment du repérage et évite de réimprimer l’ensemble du dispositif. Une validation sur écran, à trente centimètres, ne renseigne sur rien.",
      },
      {
        question: "Faut-il une autorisation pour installer une signalétique à l’extérieur du lieu ?",
        answer:
          "Dès que le support occupe le domaine public (trottoir, mobilier urbain, façade donnant sur la voie), une autorisation d’occupation temporaire est nécessaire et se demande à la commune ou au gestionnaire de voirie. Les délais d’instruction se comptent en semaines et non en jours, ce qui impose de traiter le sujet en même temps que les autres autorisations de la manifestation. À l’intérieur d’un site privé, c’est le gestionnaire du lieu qui donne son accord, notamment sur les modes de fixation admis. Dans les deux cas, l’accord porte aussi sur la date de dépose, souvent oubliée.",
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
    title: "Communication interne en entreprise : par où commencer",
    metaTitle: "Communication interne entreprise | A6",
    metaDescription:
      "Structurer une communication interne qui existe à peine : diagnostic, canaux réalistes, rythme tenable et indicateurs qui disent quelque chose.",
    keyword: "communication interne entreprise",
    category: "Méthode",
    date: "2026-03-25",
    dateLabel: "Mars 2026",
    readingMinutes: 10,
    img: "/photos/blog/communication-interne-entreprise-1-v2.webp",
    imgAlt:
      "Échange entre collègues dans un bureau, illustration de la communication interne en entreprise",
    excerpt:
      "La communication interne échoue rarement par manque d’outils : elle échoue par manque de rythme et par confusion entre informer et faire adhérer. Le point de départ, dans l’ordre.",
    body: [
      {
        kind: "p",
        text: "Le point de départ est presque toujours le même : une organisation qui communique correctement vers l’extérieur, et dont les équipes apprennent les nouvelles importantes par la rumeur, par un client ou par la presse. La communication interne en entreprise n’y est pas absente, elle est intermittente, et cette intermittence produit à elle seule une bonne partie du problème.",
      },
      {
        kind: "p",
        text: "Elle est rarement sous-investie par désintérêt. Elle l’est parce qu’elle n’a pas de propriétaire clair : elle se partage entre direction, ressources humaines et communication, chacun la considérant comme partiellement de son ressort, et finit par n’être portée par personne de façon continue. C’est un problème d’organisation avant d’être un problème d’outils, et c’est pourquoi l’achat d’une plateforme ne le résout jamais.",
      },
      {
        kind: "h2",
        text: "Diagnostiquer la communication interne en entreprise avant d’outiller",
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
      { kind: "h3", text: "Cartographier les canaux réels, pas les canaux officiels" },
      {
        kind: "p",
        text: "L’exercice consiste à prendre trois nouvelles importantes des douze derniers mois et à reconstituer, en demandant, par quel chemin chacune est arrivée jusqu’aux équipes. Le résultat est presque toujours instructif : une note officielle parvenue après coup, un manager qui a prévenu son équipe en réunion de service, une conversation de couloir qui a précédé les deux. Cette cartographie dit où passe réellement l’information et fournit les points d’appui sur lesquels construire, au lieu d’un canal supplémentaire qui viendra s’ajouter à ceux que personne ne lit.",
      },
      { kind: "h3", text: "Les rumeurs comme carte des zones d’ombre" },
      {
        kind: "p",
        text: "Une rumeur n’est pas un dysfonctionnement social, c’est le symptôme d’un vide informationnel. Là où l’information officielle est absente, incomplète ou tardive, une explication se construit pour combler l’écart, et elle est rarement rassurante. Recenser ce qui circule sans être confirmé donne donc la liste des sujets sur lesquels une parole officielle manque, ce qui constitue un point de départ nettement plus utile qu’un questionnaire de satisfaction.",
      },
      { kind: "h3", text: "Les populations que les dispositifs oublient" },
      {
        kind: "p",
        text: "Beaucoup de dispositifs sont conçus par des personnes qui travaillent devant un écran, pour des personnes qui travaillent devant un écran. Les équipes de terrain, les postes en horaires décalés, les sites secondaires et les personnes sans adresse professionnelle individuelle sortent alors du champ sans que quiconque l’ait décidé. Le diagnostic doit établir, population par population, ce à quoi chacun a réellement accès pendant son temps de travail : un poste informatique, un téléphone, un panneau d’affichage, une réunion d’équipe. Ce recensement conditionne tout le reste, parce qu’un dispositif inaccessible à une partie des effectifs installe durablement l’idée d’une information à deux vitesses.",
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
      { kind: "h3", text: "Le coût réel d’une fausse consultation" },
      {
        kind: "p",
        text: "Le mécanisme est simple : une consultation ouverte sur un choix déjà arrêté est détectée en quelques jours, parce que les contributions n’ont visiblement aucun effet sur la décision finale. Le coût ne se limite pas à l’opération concernée. Il se reporte sur la suivante, où la participation sera plus faible, et sur toutes les consultations sincères qui viendront ensuite. Annoncer clairement qu’une décision est prise et en expliquer les raisons est mieux reçu qu’un simulacre de débat, y compris quand la décision déplaît.",
      },
      { kind: "h3", text: "Le cas des annonces difficiles" },
      {
        kind: "p",
        text: "Une réorganisation, un plan d’économies ou le départ d’un dirigeant relèvent du registre « expliquer » et jamais du registre « informer ». Trois principes s’appliquent : dire ce qui est décidé et ce qui ne l’est pas encore, donner le calendrier même lorsqu’il est incomplet, et ouvrir un espace de questions dans un délai court. Le silence entre l’annonce et les précisions est précisément le moment où l’inquiétude se transforme en défiance ; il se comble par une information intermédiaire, même minimale, qui dit au moins quand la suite arrivera.",
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
      { kind: "h3", text: "Fixer un calendrier plutôt qu’une intention" },
      {
        kind: "p",
        text: "Une communication interne qui repose sur la disponibilité de ses porteurs disparaît au premier trimestre chargé. La contre-mesure est un calendrier posé en début d’année : des dates fixes, des formats définis à l’avance, et des contenus par défaut prévus pour les périodes creuses. Mieux vaut publier une édition courte et peu spectaculaire à la date prévue que reporter en attendant d’avoir quelque chose d’important à dire, parce que c’est le rendez-vous tenu qui construit l’habitude de lecture, et non le contenu exceptionnel.",
      },
      {
        kind: "h2",
        text: "Choisir des canaux adaptés aux conditions de travail",
        id: "canaux",
      },
      {
        kind: "p",
        text: "Le choix des canaux se déduit du diagnostic et non de l’inverse. Un dispositif fonctionne quand il est accessible pendant le temps de travail, sans effort particulier, et quand il correspond au registre du message qu’il doit porter.",
      },
      {
        kind: "ul",
        items: [
          "La réunion d’équipe animée par le manager : le canal le plus efficace pour expliquer, le plus dépendant de la qualité du relais.",
          "Le courriel ou la lettre interne : adapté à l’information factuelle, saturé dès qu’on lui demande de porter de l’explication.",
          "L’affichage sur site : souvent le seul canal réellement universel dans les organisations à forte proportion de terrain.",
          "La messagerie instantanée d’équipe : rapide et informelle, mais sans mémoire consultable et difficile à cadrer.",
          "L’intranet ou l’espace documentaire : utile comme référence, inefficace comme canal d’annonce.",
          "La rencontre en présence de la direction : forte valeur symbolique, coût d’organisation élevé, à réserver aux moments qui le justifient.",
        ],
      },
      { kind: "h3", text: "Pourquoi l’intranet déçoit presque toujours" },
      {
        kind: "p",
        text: "L’intranet est le premier réflexe et la première déception, parce qu’il repose sur une démarche volontaire : il faut y aller pour savoir. Or personne ne consulte spontanément un espace pour vérifier s’il s’y est passé quelque chose. Un intranet est excellent comme référentiel, quand une personne cherche une procédure ou un document précis, et médiocre comme canal d’annonce. Le confondre avec un dispositif de communication conduit à investir dans un outil qui ne peut pas produire l’effet attendu, puis à conclure que les équipes ne s’intéressent à rien.",
      },
      { kind: "h3", text: "Le manager, canal principal et point de fragilité" },
      {
        kind: "p",
        text: "Dans la plupart des organisations, l’essentiel de l’information descendante passe par l’encadrement de proximité. C’est le canal le plus efficace, parce qu’il autorise la question immédiate et l’adaptation au contexte de l’équipe, et le plus fragile, parce qu’il dépend entièrement de ce que le manager a compris et du temps qu’il y consacre. Le rendre fiable suppose de l’outiller : recevoir l’information avant les équipes, disposer d’un support qui sépare le message des éléments de contexte, et avoir une voie de retour pour les questions auxquelles il ne sait pas répondre. Une organisation qui compte sur ses managers sans les outiller ne fait pas de communication interne, elle délègue un problème.",
      },
      {
        kind: "h2",
        text: "Donner un porteur et un format à chaque canal",
        id: "porteur",
      },
      {
        kind: "p",
        text: "Un canal sans propriétaire nommé meurt. Chaque dispositif doit avoir une personne responsable, un format défini et une longueur maximale, ces contraintes ne bridant pas le contenu mais rendant la production soutenable. Ce qui prend deux heures à préparer chaque semaine ne se maintient pas ; ce qui prend vingt minutes, oui.",
      },
      { kind: "h3", text: "Dimensionner à partir du temps réellement disponible" },
      {
        kind: "p",
        text: "Le dimensionnement se fait à l’envers du réflexe habituel. Plutôt que de définir un format ambitieux et d’espérer tenir, il vaut mieux partir du temps réellement disponible chaque semaine et concevoir un format qui rentre dedans. Une lettre interne d’une page produite en vingt minutes se maintient sur une année ; une lettre de quatre pages produite en une demi-journée s’arrête au premier pic d’activité. La contrainte de longueur est ici une protection, pas un appauvrissement.",
      },
      { kind: "h3", text: "Prévoir la continuité en cas d’absence" },
      {
        kind: "p",
        text: "Un dispositif porté par une seule personne s’interrompt quand elle est en congé, en arrêt ou en poste ailleurs. La continuité se prépare de façon très concrète : une deuxième personne capable de produire l’édition suivante, un modèle documenté, et un stock de contenus prêts à publier. C’est peu de travail au moment de la mise en place et cela évite l’interruption de plusieurs mois qui suit systématiquement un départ, après laquelle la relance est plus coûteuse que la création initiale.",
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
      { kind: "h3", text: "Ce que le taux d’ouverture ne mesure pas" },
      {
        kind: "p",
        text: "Un taux d’ouverture élevé indique qu’un objet de courriel a fonctionné, pas qu’une information a été comprise, ni qu’elle a atteint les personnes concernées. Il est de surcroît aveugle aux populations qui n’ont pas d’adresse professionnelle, c’est-à-dire souvent celles qui posent le véritable problème de couverture. S’en contenter revient à mesurer la partie du dispositif qui fonctionne déjà, et à ignorer celle qui pose problème.",
      },
      { kind: "h3", text: "L’enquête interne et ses deux limites" },
      {
        kind: "p",
        text: "Une enquête annuelle a l’avantage de produire une base comparable d’une année sur l’autre. Elle a deux limites qu’il faut connaître avant de la lancer : elle mesure une perception à un instant donné, souvent influencée par l’actualité des semaines précédentes, et elle crée une attente de suite. Lancer une enquête sans publier les résultats ni ce qui en découle produit exactement le même effet qu’une fausse consultation, avec un coût de préparation en plus.",
      },
      {
        kind: "h2",
        text: "Les moments qui font ou défont le dispositif",
        id: "moments",
      },
      {
        kind: "p",
        text: "Quelques séquences pèsent davantage que le régime courant, parce qu’elles fixent durablement ce que les équipes attendent de l’organisation. Un dispositif correct le reste de l’année ne rattrape pas une de ces séquences manquée.",
      },
      {
        kind: "ul",
        items: [
          "L’arrivée : ce qu’un nouvel entrant reçoit dans ses deux premières semaines installe sa représentation de la maison.",
          "Le changement d’organisation : le moment où l’écart entre le discours et le vécu est le plus visible.",
          "L’incident ou la crise : la vitesse compte davantage que l’exhaustivité, et tout silence est interprété.",
          "L’annonce publique : une communication externe non précédée en interne dégrade la confiance, y compris quand le contenu est positif.",
          "Le départ d’une figure interne : traité comme un non-sujet, il alimente immédiatement l’interprétation.",
        ],
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
      { kind: "h3", text: "Tenir la règle même sous contrainte de calendrier" },
      {
        kind: "p",
        text: "L’objection est réelle : certaines annonces sont soumises à des contraintes de confidentialité, de calendrier réglementaire ou de communication financière qui interdisent une diffusion interne préalable large. La règle se conserve alors sous une forme adaptée : prévenir l’encadrement au dernier moment mais avant la publication, prévoir une communication interne complète le jour même, et expliquer pourquoi l’ordre habituel n’a pas pu être respecté. Ce qui dégrade la confiance n’est pas la contrainte, c’est l’absence d’explication de la contrainte.",
      },
      { kind: "h3", text: "Le cas d’une nouvelle identité" },
      {
        kind: "p",
        text: "Un changement d’identité visuelle est le cas d’école, parce qu’il touche des personnes qui utilisent la marque tous les jours et qui l’ont souvent portée longtemps. Une identité dévoilée d’abord au public place les équipes en position de spectateurs de leur propre maison, et transforme un projet en sujet de réticence. Le traitement est connu : associer quelques équipes en amont, présenter en interne avant la diffusion publique, expliquer le raisonnement plutôt que le résultat, et fournir des outils utilisables dès le premier jour. Le sujet est développé dans [ce qu’il faut prévoir lors d’une refonte de logo d’institution](/blog/refonte-logo-institution).",
      },
      {
        kind: "p",
        text: "A6 propose cet accompagnement en lien avec la [production de contenus](/nos-services/production-de-contenus). Pour en parler, [contactez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Quel rythme adopter pour une communication interne ?",
        answer:
          "Celui que vous pouvez tenir douze mois de suite, ce qui est presque toujours plus modeste que le rythme envisagé au départ. Un rendez-vous mensuel maintenu vaut mieux qu’un hebdomadaire abandonné au bout d’un mois et demi, car l’irrégularité envoie un message négatif : les équipes finissent par associer toute communication à l’annonce d’un problème. Le dimensionnement se fait donc à partir du temps réellement disponible chaque semaine, et non à partir d’une ambition éditoriale. Prévoir des contenus par défaut pour les périodes creuses et une deuxième personne capable de produire en cas d’absence sécurise le rythme bien mieux qu’une bonne volonté initiale.",
      },
      {
        question: "Faut-il consulter les équipes sur les décisions ?",
        answer:
          "Seulement lorsque la décision n’est pas encore prise. Une consultation sur un choix déjà arrêté est identifiée immédiatement et coûte plus de confiance que l’absence de consultation. Quand la décision est prise, le bon registre est d’expliquer et d’ouvrir un espace de questions, pas de simuler un débat.",
      },
      {
        question: "Qui doit porter la communication interne dans une organisation ?",
        answer:
          "Peu importe le rattachement, à condition qu’il soit explicite et qu’une personne nommée en soit responsable. Le rattachement à la direction de la communication donne de la cohérence avec l’externe ; le rattachement aux ressources humaines donne un meilleur accès aux sujets sociaux et à l’encadrement. Ce qui ne fonctionne pas est la responsabilité partagée sans arbitre, où chacun suppose que l’autre s’en occupe. Dans une structure de petite taille, la fonction peut ne représenter qu’une fraction de poste, mais elle doit figurer explicitement dans une fiche de mission.",
      },
      {
        question: "Comment toucher les équipes qui n’ont pas d’adresse professionnelle ?",
        answer:
          "Par des canaux qui existent déjà dans leur environnement de travail plutôt que par un outil supplémentaire. L’affichage sur site, la réunion d’équipe et le relais par l’encadrement de proximité restent les dispositifs les plus fiables pour ces populations. Une application mobile peut compléter l’ensemble, à condition de ne pas reposer sur l’équipement personnel des salariés sans que la question ait été posée et acceptée. Le principe à tenir est qu’aucune information importante ne doit dépendre exclusivement d’un canal auquel une partie des effectifs n’a pas accès pendant son temps de travail.",
      },
      {
        question: "Au bout de combien de temps voit-on un effet ?",
        answer:
          "L’effet ne se mesure pas sur une opération isolée mais sur la régularité, ce qui suppose de tenir un dispositif au moins une année complète avant de l’évaluer sérieusement. Les premiers signes sont qualitatifs et apparaissent plus tôt : moins de questions portant sur des sujets déjà traités, des rumeurs qui se déplacent vers des sujets plus périphériques, des managers qui relaient sans qu’on le leur demande. Un dispositif jugé et abandonné au bout de trois mois n’a pas été évalué, il a été interrompu avant d’exister. C’est précisément pour cette raison que le rythme tenable prime sur l’ambition du format.",
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
    title: "Captation vidéo d’événement : ce qu’il faut décider en amont",
    metaTitle: "Captation vidéo événement | A6",
    metaDescription:
      "Réussir la captation vidéo d’un événement professionnel : usage final, dispositif, son, droits à l’image et livrables (les décisions à prendre en amont).",
    keyword: "captation vidéo événement",
    category: "Méthode",
    date: "2026-03-11",
    dateLabel: "Mars 2026",
    readingMinutes: 11,
    img: "/photos/blog/captation-video-evenement-1-v2.webp",
    imgAlt:
      "Caméra professionnelle en configuration de tournage, illustration de la captation vidéo d’événement",
    excerpt:
      "Une captation ratée ne se rattrape pas au montage. Les cinq décisions qui déterminent le résultat se prennent avant l’événement, et la plus importante concerne le son, pas l’image.",
    body: [
      {
        kind: "p",
        text: "La captation vidéo d’événement paraît simple et se rate souvent, parce que l’essentiel se décide en amont. Une fois l’événement passé, aucun montage ne compense un son inexploitable, un cadrage qui coupe le support projeté ou une autorisation manquante sur l’intervenant le plus intéressant. Voici les décisions à prendre, dans l’ordre.",
      },
      {
        kind: "p",
        text: "L’autre difficulté tient au calendrier de commande. La captation est presque toujours décidée en dernier, une fois le programme arrêté et le lieu réservé, alors que plusieurs de ses conditions de réussite dépendent justement du programme et du lieu. Décider tôt ne coûte rien ; décider tard coûte soit de la qualité, soit un tournage supplémentaire pour rattraper ce qui n’a pas pu être capté.",
      },
      {
        kind: "h2",
        text: "Décision 1 : À quoi servira la vidéo",
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
      { kind: "h3", text: "Le direct impose ses propres contraintes" },
      {
        kind: "p",
        text: "Diffuser en direct n’est pas une variante de la captation, c’est un autre métier. Le direct supprime tout rattrapage au montage, impose une régie, un mélangeur et une personne dédiée à la diffusion, et déplace le point de fragilité vers la connexion réseau du lieu. Une salle qui dispose d’un réseau partagé avec les participants ne garantit rien : il faut une liaison dédiée, filaire de préférence, testée à l’avance dans les conditions de charge réelles. Le direct oblige enfin à décider avant l’événement ce qui se passe en cas d’incident, puisque l’incident se produira devant le public.",
      },
      { kind: "h3", text: "Enregistrer même quand on diffuse en direct" },
      {
        kind: "p",
        text: "Un flux diffusé n’est pas un fichier exploitable. La qualité d’un direct est adaptée à la bande passante, avec une compression qui rend tout montage ultérieur médiocre. Si la vidéo doit resservir, prévoir un enregistrement local en parallèle, à la meilleure qualité disponible, est une précaution qui ne coûte presque rien au moment du tournage et qui change tout ensuite.",
      },
      {
        kind: "h2",
        text: "Décision 2 : Le son, avant l’image",
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
        kind: "p",
        text: "Le même problème se pose pour les tables rondes sans micro individuel, pour les interventions depuis la salle et pour tout échange informel que l’on souhaiterait conserver. La règle pratique tient en une phrase : ce qui n’est pas sonorisé pour la salle ne sera pas exploitable à l’enregistrement, sauf micro dédié. Faire reformuler les questions par l’animateur est la solution la moins coûteuse, et elle sert aussi les personnes assises au fond de la salle.",
      },
      { kind: "h3", text: "Prévoir un second enregistrement sonore" },
      {
        kind: "p",
        text: "Une prise de son unique est un point de défaillance unique. Un câble débranché, un niveau saturé ou une console mal configurée se découvrent au dérushage, quand il est trop tard pour quoi que ce soit. Doubler la prise, par exemple un enregistreur autonome branché sur la console et un micro d’ambiance sur la caméra, coûte peu et sauve les situations où la source principale est perdue. C’est une précaution standard en captation, et son absence dans un devis renseigne sur le prestataire.",
      },
      {
        kind: "h2",
        text: "Décision 3 : Les droits à l’image",
        id: "droits-image",
      },
      {
        kind: "p",
        text: "Filmer des personnes suppose une base juridique et une information claire. Pour les intervenants, cela se règle par une autorisation écrite précisant les usages et la durée. Pour le public, l’information doit être donnée en amont et sur place, avec une possibilité réelle de ne pas être filmé, ce qui a une conséquence pratique sur le plan de salle et les axes de caméra.",
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
      { kind: "h3", text: "Les intervenants : une autorisation écrite et précise" },
      {
        kind: "p",
        text: "L’autorisation ne se limite pas à un accord de principe donné oralement. Elle précise les supports sur lesquels l’image sera diffusée, les territoires concernés, la durée de l’autorisation et la possibilité ou non de réutiliser des extraits dans d’autres contextes. Une autorisation sans durée ni périmètre est fragile, et elle le devient davantage lorsque la vidéo est réexploitée deux ans plus tard dans une campagne que personne n’avait envisagée. Le bon moment pour la faire signer est celui de la confirmation de l’intervention, pas l’accueil du jour même, où personne ne lit rien.",
      },
      { kind: "h3", text: "Le public : une information réelle et une alternative réelle" },
      {
        kind: "p",
        text: "Informer ne suffit pas si l’information ne laisse aucun choix. Une mention en petits caractères sur le formulaire d’inscription, sans zone non filmée sur place ni possibilité de le signaler à l’accueil, reste une information formelle. Un dispositif crédible comporte trois éléments : une information à l’inscription, un rappel visible à l’entrée, et une zone identifiée dont les axes de caméra tiennent réellement compte. La présence de mineurs impose une vigilance supplémentaire et l’accord des représentants légaux.",
      },
      { kind: "h3", text: "Ce que deviennent les images après l’événement" },
      {
        kind: "p",
        text: "Les images permettant d’identifier des personnes relèvent des données personnelles, ce qui implique de savoir où elles sont stockées, qui y a accès et pendant combien de temps elles sont conservées. Le point se règle simplement au contrat avec le prestataire : durée de conservation des rushes, modalités de restitution ou de suppression, interdiction d’usage en autopromotion sans accord préalable. Ce dernier point est le plus souvent oublié, et il se découvre quand des extraits de votre événement apparaissent sur le site du prestataire.",
      },
      { kind: "h3", text: "La musique et les contenus projetés" },
      {
        kind: "p",
        text: "Deux sources d’ennui échappent au droit à l’image. La musique diffusée pendant l’événement se retrouve dans la bande son de la captation et relève de droits distincts de ceux acquis pour la diffusion en salle. Les supports projetés par les intervenants contiennent fréquemment des images, des graphiques ou des extraits dont ils ne détiennent pas les droits de diffusion en ligne, ce qu’ils ignorent le plus souvent de bonne foi. Le traitement est le même dans les deux cas : identifier en amont, remplacer par une source libre de droits, ou couper au montage.",
      },
      {
        kind: "h2",
        text: "Décision 4 : Le dispositif dans l’espace",
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
      { kind: "h3", text: "La lumière, contrainte partagée avec la régie" },
      {
        kind: "p",
        text: "La lumière pose un problème symétrique de celui des écrans : un éclairage de scène conçu pour le confort de la salle sculpte mal les visages à la caméra, et un fond de scène rétroéclairé transforme les intervenants en silhouettes. L’arbitrage se fait avec le régisseur lumière et porte sur peu de choses : un niveau minimal sur les visages, un contre-jour maîtrisé, une température de couleur stable pendant toute la séquence. Les changements d’ambiance lumineuse en cours d’intervention, souvent prévus pour rythmer la salle, produisent au montage des ruptures difficiles à corriger.",
      },
      { kind: "h3", text: "Alimentation, câbles et circulation" },
      {
        kind: "p",
        text: "Un dispositif de captation consomme de l’électricité et produit des câbles au sol, deux sujets qui se traitent au repérage avec le régisseur du lieu. Les câbles traversant une circulation doivent être passés en passe-câbles ou fixés, non par souci d’esthétique mais parce qu’ils constituent un risque de chute pour les participants. Ce point figure systématiquement dans les contrôles du gestionnaire de site, et il est plus simple de l’anticiper que de le corriger une heure avant l’ouverture des portes.",
      },
      {
        kind: "h2",
        text: "Ce qui fait varier le coût d’une captation vidéo d’événement",
        id: "cout",
      },
      {
        kind: "p",
        text: "Le prix d’une captation dépend moins de la durée de l’événement que du nombre de personnes mobilisées et du volume de travail après tournage. Les postes suivants expliquent l’essentiel des écarts entre deux devis apparemment comparables.",
      },
      {
        kind: "ul",
        items: [
          "Le nombre de caméras et d’opérateurs, qui détermine à la fois la richesse du montage et le coût du jour de tournage.",
          "La complexité de la prise de son : liaison console, micros dédiés, enregistrement doublé.",
          "La présence ou non d’une régie de direct, poste le plus lourd de tout le dispositif.",
          "Le volume de montage attendu, qui dépasse souvent le coût du tournage lui-même.",
          "Le sous-titrage, la traduction et les déclinaisons par format de diffusion.",
          "Les droits d’exploitation demandés, en durée comme en périmètre.",
        ],
      },
      {
        kind: "p",
        text: "Le poste sous-estimé est presque toujours le montage. Une journée de tournage à plusieurs caméras produit un volume de rushes dont le seul dérushage mobilise plusieurs jours, avant même la première version soumise à validation. Un devis dont la ligne montage paraît faible au regard du dispositif de tournage annonce en général un livrable plus proche du fichier brut assemblé bout à bout que du film attendu. Le mécanisme rejoint la logique décrite dans [ce qui fait varier le budget d’un événement](/blog/budget-evenement-corporate).",
      },
      {
        kind: "h2",
        text: "Décision 5 : Les livrables et leur format",
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
      { kind: "h3", text: "Sous-titrer n’est pas une option de confort" },
      {
        kind: "p",
        text: "Une vidéo diffusée sur un fil social est fréquemment lue sans le son, et elle reste inaccessible aux personnes sourdes ou malentendantes sans sous-titres. Le sous-titrage se commande donc avec la vidéo et non après, parce qu’il suppose une transcription puis une relecture qui prennent du temps. Pour un contenu institutionnel, il faut ajouter la vérification des noms propres, des sigles et des intitulés de fonction, que les outils automatiques transcrivent mal. Une version sous-titrée approximative sur un contenu institutionnel produit exactement l’effet inverse de celui recherché.",
      },
      { kind: "h3", text: "Les rushes, les droits et la suite" },
      {
        kind: "p",
        text: "La propriété des rushes se règle au contrat et non à la livraison. Trois configurations existent : le prestataire les conserve et cède les seuls livrables finis, il les remet en fin de mission, ou il les conserve pour une durée convenue avant suppression. Aucune n’est illégitime, mais la deuxième est la seule qui permette de refaire un montage différent des années plus tard sans repasser par le même prestataire. Pour une organisation qui capte chaque année le même rendez-vous, l’écart entre ces options se creuse vite.",
      },
      {
        kind: "h2",
        text: "Les erreurs qui ne se rattrapent pas",
        id: "limites",
      },
      {
        kind: "p",
        text: "Il est utile de savoir ce qu’un montage peut réparer et ce qu’il ne peut pas. Un rythme mou, un plan raté, une intervention trop longue se corrigent au prix de quelques heures de travail. Les situations suivantes, non.",
      },
      {
        kind: "ul",
        items: [
          "Un son saturé ou absent : aucune restauration ne reconstitue une information qui n’a pas été enregistrée.",
          "Une autorisation manquante sur l’intervenant central : l’extrait est inutilisable, quel que soit son intérêt.",
          "Un cadre qui coupe systématiquement le support projeté, sans fichier source récupérable après coup.",
          "Une séquence tournée à contre-jour intégral, où les visages n’existent tout simplement pas dans l’image.",
          "Un enregistrement interrompu par une carte pleine ou une batterie vide, faute de doublon.",
        ],
      },
      {
        kind: "p",
        text: "Ces cinq situations ont un point commun : elles se préviennent toutes en amont pour un coût faible, et se paient toutes très cher une fois l’événement passé. C’est la raison pour laquelle la réunion de préparation avec le prestataire technique, souvent perçue comme une formalité, est l’étape la plus rentable du projet.",
      },
      {
        kind: "p",
        text: "Voir notre offre de [production vidéo et de reportage](/nos-services/production-de-contenus). Pour un projet, [écrivez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Quel est le point le plus critique d’une captation d’événement ?",
        answer:
          "Le son. Une image imparfaite reste exploitable, un son dégradé rend la vidéo inutilisable et ne se répare pas au montage. Le son doit être pris à la source (sur la console de sonorisation ou sur des micros dédiés), ce qui suppose une coordination avec le prestataire technique décidée avant l’événement.",
      },
      {
        question: "Faut-il une autorisation pour filmer les participants d’un événement ?",
        answer:
          "Les intervenants doivent donner une autorisation écrite précisant les usages et la durée. Pour le public, l’information doit être donnée dès l’inscription puis rappelée sur place, avec une possibilité réelle de ne pas être filmé : cela implique de prévoir une zone non filmée et des axes de caméra qui la respectent. La vigilance est renforcée en présence de mineurs.",
      },
      {
        question: "Combien de caméras faut-il pour filmer une conférence ?",
        answer:
          "Cela dépend de l’usage prévu et non de la taille de la salle. Une archive intégrale se satisfait d’un dispositif fixe à une ou deux caméras, à condition que le son soit irréprochable. Un film de restitution destiné à circuler demande davantage de points de vue, et surtout des plans de coupe sur la salle qu’une caméra unique ne peut pas capter pendant qu’elle filme la scène. Ajouter une caméra augmente le coût du tournage mais aussi celui du montage, ce qui doit être arbitré avant l’événement et non pendant.",
      },
      {
        question: "Peut-on filmer avec les moyens internes plutôt qu’un prestataire ?",
        answer:
          "Oui pour une archive interne, rarement pour un contenu destiné à une diffusion publique. Le matériel n’est plus le facteur limitant : le facteur limitant est la prise de son à la source et la présence d’une personne dont c’est la seule tâche pendant toute la durée de l’événement. Confier la captation à un collaborateur qui a par ailleurs un rôle dans l’organisation produit presque toujours un résultat dégradé, parce qu’il sera appelé ailleurs au moment précis où il faudrait surveiller le niveau sonore. Une solution intermédiaire consiste à faire installer et régler le dispositif par un professionnel, puis à en confier la surveillance en interne.",
      },
      {
        question: "À quel moment décider de la captation dans la préparation d’un événement ?",
        answer:
          "Au moment du choix du lieu, et au plus tard au repérage. Les emplacements de caméra, les besoins électriques, la liaison son avec la console et la liaison réseau pour un éventuel direct sont des contraintes d’espace et de technique qui entrent en concurrence avec la scénographie et la jauge. Décidée après la validation du plan de salle, la captation s’installe dans ce qui reste, ce qui explique la plupart des cadres médiocres. Les autorisations d’image des intervenants se demandent quant à elles dès la confirmation de leur participation.",
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
    title: "Agence de communication digitale à Montpellier : ce qui change",
    metaTitle: "Agence communication digitale Montpellier | A6",
    metaDescription:
      "Ce qu’apporte une agence de communication digitale à Montpellier : visibilité locale, contenus produits sur place, et ce que la proximité ne change pas.",
    keyword: "agence communication digitale montpellier",
    category: "Digital",
    date: "2026-02-25",
    dateLabel: "Février 2026",
    readingMinutes: 10,
    img: "/photos/blog/agence-communication-digitale-montpellier-1-v2.webp",
    imgAlt:
      "Présentation d’une stratégie de marketing digital en réunion d’agence",
    excerpt:
      "La proximité géographique n’améliore pas un algorithme. Elle change en revanche trois choses très concrètes : la visibilité locale, la qualité des contenus produits sur place, et la vitesse de décision.",
    body: [
      {
        kind: "p",
        text: "Retenir une agence de communication digitale à Montpellier plutôt qu’ailleurs se justifie par des effets précis, et l’argument est souvent mal défendu par les agences locales elles-mêmes, qui en font une question de convivialité. La proximité géographique n’améliore aucun algorithme. Elle change en revanche trois choses très concrètes, et il est honnête de dire aussi ce qu’elle ne change pas.",
      },
      {
        kind: "p",
        text: "La distinction a une conséquence pratique pour un commanditaire. Les prestations où la proximité pèse réellement, à savoir la visibilité de terrain, la production de contenus sur site et la compréhension du contexte local, gagnent à être confiées localement. Celles où elle ne pèse pas, comme le développement, la publicité en ligne ou la conception d’un site, se jugent sur la compétence seule : il n’y a alors aucune raison de s’interdire une agence distante si elle est meilleure sur ce terrain.",
      },
      {
        kind: "h2",
        text: "1. La visibilité locale, qui ne se pilote pas à distance",
        id: "visibilite-locale",
      },
      {
        kind: "p",
        text: "Pour une organisation dont les publics sont sur un territoire, l’essentiel de la visibilité en recherche ne vient pas du site mais de la présence locale : fiche d’établissement à jour et documentée, avis, cohérence des informations sur les annuaires, mentions par des acteurs du territoire. Ces leviers demandent une connaissance du tissu local : quels relais existent, quelles structures citent qui, quels annuaires sectoriels comptent réellement.",
      },
      {
        kind: "ul",
        items: [
          "Une fiche d’établissement complète : c’est souvent le premier point de contact, avant le site.",
          "Des informations identiques partout : une adresse ou un numéro divergent brouille le signal.",
          "Des mentions par des acteurs locaux réels, plutôt qu’un volume de liens sans rapport avec le territoire.",
        ],
      },
      { kind: "h3", text: "La fiche d’établissement, premier point de contact" },
      {
        kind: "p",
        text: "Pour beaucoup d’organisations, la fiche d’établissement est consultée plus souvent que le site lui-même : elle donne l’adresse, les horaires, le téléphone, les photos et les avis, sans qu’aucun clic supplémentaire soit nécessaire. Une fiche incomplète ou obsolète produit donc des effets immédiats, qui n’apparaissent nulle part dans les statistiques du site. Le travail utile est fastidieux et concret : catégories correctement choisies, horaires tenus à jour y compris pour les fermetures exceptionnelles, photos récentes et représentatives, description rédigée plutôt que recopiée du site, réponses systématiques aux avis.",
      },
      { kind: "h3", text: "La cohérence des informations, signal faible et cumulatif" },
      {
        kind: "p",
        text: "Une adresse écrite de trois façons différentes, un numéro de téléphone ancien qui subsiste sur un annuaire, un nom d’organisation qui varie selon les sources : chacun de ces écarts est mineur, leur accumulation brouille l’identification. La correction demande un inventaire des endroits où l’organisation est citée, ce qui relève du travail de terrain plus que de la technique. C’est aussi un travail qui ne se fait qu’une fois, puis se maintient à peu de frais.",
      },
      { kind: "h3", text: "Les mentions par des acteurs du territoire" },
      {
        kind: "p",
        text: "Une citation par une structure locale réelle, un partenaire, une institution ou un média régional vaut mieux qu’un volume de liens sans rapport avec le territoire. La différence tient à ce qu’une mention locale s’accompagne en général d’un trafic qualifié et d’une association d’idées utile, alors qu’un lien acheté n’apporte ni l’un ni l’autre. Savoir quelles structures citent qui, quels annuaires sectoriels sont réellement consultés et quels événements produisent des retombées suppose une connaissance du tissu local qui ne se documente nulle part.",
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
      { kind: "h3", text: "Contenu propre ou banque d’images" },
      {
        kind: "p",
        text: "L’écart se voit immédiatement et il se creuse avec le temps. Une organisation qui illustre ses publications avec des photographies de banque produit une présence interchangeable, y compris pour son propre public, qui n’y reconnaît ni les lieux ni les visages. Une organisation qui dispose de ses propres images se constitue un capital réutilisable : le même reportage alimente le site, les réseaux, un rapport d’activité et une plaquette. La proximité change ici quelque chose de très matériel, puisqu’une demi-journée de reportage devient possible sans frais de déplacement ni logistique.",
      },
      { kind: "h3", text: "Ce que coûte réellement un contenu propre" },
      {
        kind: "p",
        text: "Il faut dire l’autre versant. Produire sur place demande du temps de préparation côté organisation, des autorisations, parfois une interruption d’activité, et la disponibilité des personnes filmées ou photographiées. Ce coût interne est systématiquement sous-estimé au moment de la commande, et il explique une bonne partie des reportages annulés. La contre-mesure consiste à regrouper : une journée de production bien préparée alimente plusieurs mois de publications, alors que des captations ponctuelles au fil de l’eau ne se font jamais.",
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
      { kind: "h3", text: "Ce que la connaissance du contexte évite concrètement" },
      {
        kind: "p",
        text: "Concrètement, cela évite de programmer une prise de parole le jour d’un rendez-vous régional majeur, de citer un partenaire dans un rôle qui n’est plus le sien, ou de traiter un sujet local avec un angle qui a déjà été mal reçu ailleurs. Aucune de ces erreurs n’est grave prise isolément. Toutes signalent une méconnaissance du terrain qui, pour un commanditaire institutionnel, se paie en crédibilité auprès de publics qu’il retrouvera dans d’autres circonstances.",
      },
      { kind: "h3", text: "La relecture, un exercice qui gagne à se faire en présence" },
      {
        kind: "p",
        text: "Sur les contenus institutionnels, la validation porte souvent sur des nuances de formulation qui engagent l’organisation, et parfois sur des arbitrages entre plusieurs signataires. Ces discussions se règlent mal par courriel, où chaque remarque se transforme en aller-retour, et bien en une heure autour d’une table. Une agence à distance compense par des méthodes de travail rigoureuses, mais la réunion de relecture reste, pour ce type de contenu, l’endroit où la proximité fait gagner le plus de temps. Le sujet rejoint les contraintes décrites dans [la communication institutionnelle et ses enjeux](/blog/communication-institutionnelle-enjeux).",
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
      { kind: "h3", text: "Ce que la distance ne pénalise pas" },
      {
        kind: "p",
        text: "Il faut être précis sur ce point, parce que l’inverse est souvent sous-entendu. Le développement d’un site, l’optimisation technique, la gestion de campagnes publicitaires en ligne, la conception d’une identité visuelle et la stratégie éditoriale ne dépendent en rien de la distance. Une agence située à l’autre bout du pays et excellente sur ces terrains fera mieux qu’une agence voisine et moyenne. La proximité est un avantage sur un périmètre défini, pas une compétence transversale.",
      },
      { kind: "h3", text: "Le risque symétrique du choix local" },
      {
        kind: "p",
        text: "Le choix local a son propre défaut : il réduit le champ des candidats et pousse parfois à retenir la seule structure disponible plutôt que la mieux adaptée. Dans un territoire où l’offre est dense, comme la métropole montpelliéraine, ce risque reste faible. Il devient réel dès qu’on cherche une spécialité rare, auquel cas le montage le plus efficace consiste à confier le pilotage et la production de terrain localement, et la brique spécialisée à un intervenant choisi sur sa seule compétence.",
      },
      {
        kind: "h2",
        text: "Choisir une agence de communication digitale à Montpellier : les critères qui comptent",
        id: "criteres",
      },
      {
        kind: "p",
        text: "Les critères utiles ne sont pas propres au digital, à une exception près : la capacité à rendre compte de son travail sur des éléments vérifiables plutôt que sur des indicateurs flatteurs.",
      },
      {
        kind: "ul",
        items: [
          "La nature des références plutôt que leur prestige : même registre de commanditaire, mêmes contraintes de validation.",
          "La propriété des comptes et des accès, qui doivent être ouverts au nom de l’organisation et non de l’agence.",
          "La restitution des données prévue au contrat : accès aux statistiques, fichiers sources, contenus produits.",
          "La distinction claire entre ce qui relève de la production et ce qui relève de l’achat d’espace publicitaire.",
          "La capacité à dire ce qu’elle ne sait pas faire, et à le sous-traiter en le disant.",
        ],
      },
      {
        kind: "p",
        text: "Le deuxième point de cette liste mérite d’être vérifié avant toute signature. Une organisation qui découvre, en changeant de prestataire, que sa fiche d’établissement, son nom de domaine ou son compte publicitaire appartiennent à l’agence sortante perd des mois à reconstruire ce qui existait. La démarche générale de sélection est détaillée dans [comment choisir une agence de communication](/blog/choisir-agence-communication).",
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
          "Enfin la mesure, pour arbitrer la suite sur des faits : voir notre [stratégie digitale](/nos-services/strategie-digitale).",
        ],
      },
      { kind: "h3", text: "Un canal tenu vaut mieux que quatre canaux ouverts" },
      {
        kind: "p",
        text: "L’erreur la plus fréquente consiste à ouvrir une présence sur tous les réseaux au motif que c’est gratuit. Le coût n’est pas l’ouverture, c’est l’entretien : un compte abandonné depuis huit mois est un signal plus négatif qu’une absence, parce qu’il suggère une organisation qui ne termine pas ce qu’elle commence. Le raisonnement utile part des publics : sur quel canal se trouvent réellement les personnes que vous devez atteindre, et quel volume de production pouvez-vous tenir sans renfort. La réponse conduit presque toujours à un seul canal, parfois deux.",
      },
      {
        kind: "h2",
        text: "Mesurer sans se raconter d’histoires",
        id: "mesure",
      },
      {
        kind: "p",
        text: "La mesure est le point où une prestation digitale se juge ou se laisse juger sur des apparences. Quelques principes suffisent à écarter les indicateurs qui flattent sans rien dire.",
      },
      {
        kind: "ul",
        items: [
          "Un nombre d’abonnés ne dit rien s’il ne se traduit pas en contacts, en visites ou en participations.",
          "Une hausse de trafic sans hausse des contacts signale un problème de public ou de page d’arrivée, pas un succès.",
          "Les indicateurs se lisent sur des périodes comparables, en tenant compte de la saisonnalité propre à l’activité.",
          "Un objectif non défini avant le début de la période ne peut pas être atteint : il peut seulement être raconté après coup.",
        ],
      },
      {
        kind: "p",
        text: "Pour une organisation dont la conversion se produit hors ligne, par un appel, une inscription à un événement ou une visite, la mesure purement numérique reste partielle. Mieux vaut l’assumer et compléter par une question posée aux nouveaux contacts sur la façon dont ils ont connu la structure, plutôt que de produire un tableau de bord très précis sur des indicateurs sans rapport avec l’objectif poursuivi.",
      },
      {
        kind: "p",
        text: "A6 est implantée à Montpellier et se positionne en Occitanie. Si vous voulez faire le point sur votre présence en ligne, [contactez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Une agence locale améliore-t-elle le référencement ?",
        answer:
          "Pas par sa localisation en elle-même : les algorithmes sont les mêmes pour tout le monde et aucun d’eux ne récompense la proximité d’un prestataire. En revanche, la visibilité locale repose largement sur des leviers de terrain (fiche d’établissement documentée, cohérence des informations sur les annuaires, mentions par des acteurs réels du territoire), qui demandent une connaissance du tissu local difficile à obtenir à distance. C’est cette connaissance qui fait la différence, pas l’adresse de l’agence. Sur les prestations purement techniques, comme l’optimisation d’un site ou la gestion de campagnes en ligne, une agence distante et compétente obtiendra de meilleurs résultats qu’une agence voisine et moyenne.",
      },
      {
        question: "Par quoi commencer quand on n’a aucune présence en ligne ?",
        answer:
          "Par un point de contact fiable et à jour, puis par la présence locale documentée qui capte l’essentiel des recherches de proximité. Ouvrir plusieurs comptes sur les réseaux avant cela revient à faire venir des visiteurs vers une porte fermée. Un seul canal éditorial, tenu régulièrement, vaut mieux que quatre canaux abandonnés.",
      },
      {
        question: "Une agence locale coûte-t-elle plus cher qu’une agence à distance ?",
        answer:
          "Pas mécaniquement, et la comparaison est faussée si elle ne porte que sur le prix affiché. Une prestation à distance peut sembler moins chère et générer des coûts internes plus élevés, en temps de brief, de relecture et de fourniture de contenus. À l’inverse, une agence locale ne se justifie pas par sa seule proximité sur des prestations où celle-ci n’apporte rien. La méthode utile consiste à comparer le coût complet, en incluant le temps que votre propre équipe devra y consacrer.",
      },
      {
        question: "Faut-il un site avant les réseaux sociaux ?",
        answer:
          "Il faut d’abord un point de contact fiable, ce qui n’est pas nécessairement un site complet. Une fiche d’établissement documentée et une page unique correctement rédigée suffisent à recevoir quelqu’un qui vous cherche, alors qu’un compte social actif renvoyant vers une page obsolète gaspille l’attention obtenue. Le site devient prioritaire dès que vous avez besoin d’expliquer une offre, de publier des documents ou d’accueillir des inscriptions. L’ordre à retenir est donc : point de contact fiable, présence locale documentée, puis canal éditorial.",
      },
      {
        question: "Que demander à une agence sur la propriété des comptes et des données ?",
        answer:
          "Que tous les comptes soient créés au nom de l’organisation, avec une adresse de messagerie qui lui appartient, l’agence disposant d’un accès délégué et non de la propriété. Cela vaut pour la fiche d’établissement, le nom de domaine, l’hébergement, les outils de mesure et les comptes publicitaires. Faites préciser au contrat ce qui vous est restitué en fin de mission et dans quel délai : fichiers sources, contenus produits, historique de mesure. Ce point ne coûte rien à traiter au départ et se paie très cher lorsqu’il est découvert au moment d’un changement de prestataire.",
      },
    ],
    related: [
      { label: "Stratégie digitale", href: "/nos-services/strategie-digitale" },
      { label: "Production de contenus", href: "/nos-services/production-de-contenus" },
      { label: "Comment choisir une agence de communication", href: "/blog/choisir-agence-communication" },
    ],
  },
];
