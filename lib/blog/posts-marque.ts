import type { BlogPost } from "@/lib/blog/types";

/**
 * Cluster identité de marque (second quick win du KEYWORD-MAP après
 * l’événementiel) : « création identité de marque » (KD 24) et « identité
 * visuelle agence » (KD 23), déclinés vers l’angle institutionnel qui est le
 * terrain différenciant d’A6.
 */
export const postsMarque: BlogPost[] = [
  {
    slug: "creation-identite-marque-etapes",
    title: "Création d’une identité de marque : les étapes réelles",
    metaTitle: "Création identité de marque | A6",
    metaDescription:
      "Le déroulé concret d’une création d’identité de marque : cadrage, territoire, conception, arbitrage et déploiement, avec ce qui se décide à chaque étape.",
    keyword: "création identité de marque",
    category: "Identité de marque",
    date: "2026-08-11",
    dateLabel: "Août 2026",
    readingMinutes: 11,
    img: "/photos/blog/creation-identite-marque-etapes-1.webp",
    imgAlt:
      "Planche de recherche graphique et palette de couleurs, étapes de création d’une identité de marque",
    excerpt:
      "Une identité de marque ne commence pas par un logo et ne finit pas par un logo. Voici les cinq étapes réelles, ce qui se décide à chacune, et le moment précis où la plupart des projets déraillent.",
    body: [
      {
        kind: "p",
        text: "Créer une identité de marque consiste à rendre une organisation reconnaissable et cohérente partout où elle apparaît. Le logo n’en est qu’un fragment : c’est un système complet (signe, typographies, couleurs, règles de composition, ton) conçu pour être utilisé par des gens qui ne l’ont pas créé. Cette dernière contrainte est la plus déterminante et la plus négligée.",
      },
      {
        kind: "h2",
        text: "Ce que recouvre vraiment une création d’identité de marque",
        id: "perimetre",
      },
      {
        kind: "p",
        text: "Le mot « identité » désigne des périmètres très différents selon l’interlocuteur. Pour certains, il s’agit d’un logo et de deux couleurs. Pour d’autres, d’un système complet incluant la papeterie, la signalétique, les gabarits de présentation, les formats numériques et les règles de discours. Un projet commence donc par une opération peu spectaculaire mais décisive : écrire ce qu’il couvre et ce qu’il ne couvre pas.",
      },
      { kind: "h3", text: "Le système compte davantage que le signe" },
      {
        kind: "p",
        text: "Un signe isolé ne fait pas une identité. Ce qui rend une organisation reconnaissable, c’est la répétition d’un ensemble de choix : une typographie, une façon de cadrer les images, un rapport constant entre le titre et le texte, une palette qu’on retrouve d’un support à l’autre. Beaucoup d’organisations très identifiables ont un logo discret et un système fort. L’inverse est plus rare, et c’est pourtant ce que produit un projet limité au dessin du signe : un logo réussi posé sur des supports hétérogènes, qui ne construit aucune reconnaissance cumulative.",
      },
      { kind: "h3", text: "Le budget se joue sur le périmètre de déclinaison" },
      {
        kind: "p",
        text: "L’écart de prix entre deux propositions d’agence tient rarement au temps passé sur le logo. Il tient au nombre de supports déclinés, à la profondeur de la documentation et à la présence ou non de gabarits. Comparer deux devis suppose donc de comparer des périmètres, ce qui n’est possible que si chacun les détaille.",
      },
      {
        kind: "ul",
        items: [
          "Le nombre de directions présentées, et le nombre d’allers-retours inclus sur celle qui est retenue.",
          "La liste nominative des supports déclinés, et non une catégorie générique.",
          "La documentation prévue, son volume et son format de diffusion.",
          "Les gabarits fournis, avec le logiciel dans lequel ils sont livrés.",
        ],
      },
      {
        kind: "h2",
        text: "Étape 1 (le cadrage) : à quoi cette identité doit servir",
        id: "cadrage",
      },
      {
        kind: "p",
        text: "Avant toute recherche graphique, il faut établir ce que l’identité doit résoudre. Une organisation qui veut être prise au sérieux par des financeurs institutionnels et une organisation qui veut se distinguer d’un concurrent local n’ont pas le même problème, donc pas la même réponse. Sauter cette étape produit des propositions qu’on juge à l’instinct, sans critère partagé, et un projet où chacun défend son goût.",
      },
      {
        kind: "ul",
        items: [
          "Ce que l’organisation fait, pour qui, et ce qui la distingue réellement.",
          "Les supports où l’identité vivra le plus souvent : c’est eux qui contraignent la conception.",
          "Qui l’utilisera au quotidien, et avec quels moyens techniques.",
          "Ce qui doit être conservé du passé, s’il y a un existant.",
        ],
      },
      { kind: "h3", text: "Les questions qui font gagner le plus de temps" },
      {
        kind: "p",
        text: "Trois questions règlent à elles seules une grande partie des désaccords ultérieurs. Qui doit reconnaître cette organisation en premier : ses membres, ses financeurs, le grand public ? Quel est le support sur lequel l’identité sera vue le plus souvent, en volume réel et non en importance symbolique ? Et qu’est-ce qui, aujourd’hui, provoque une confusion avec une autre structure ? Les réponses orientent la conception plus sûrement qu’un atelier sur les valeurs, dont les résultats se ressemblent d’une organisation à l’autre.",
      },
      { kind: "h3", text: "Le cas des organisations à double public" },
      {
        kind: "p",
        text: "Un ordre professionnel s’adresse à ses membres et au public. Une fédération parle à ses adhérents et aux pouvoirs publics. Une structure culturelle s’adresse à ses spectateurs et à ses tutelles. Ces situations ne se résolvent pas en cherchant un registre moyen qui conviendrait aux deux, ce qui produit toujours un résultat sans caractère. Elles se résolvent en hiérarchisant : une identité principale calée sur le public prioritaire, et des règles d’adaptation documentées pour les supports destinés à l’autre. Le cadrage sert précisément à établir cette hiérarchie avant que la conception ne la tranche implicitement.",
      },
      {
        kind: "h2",
        text: "Étape 2 (le territoire) : poser les critères avant les propositions",
        id: "territoire",
      },
      {
        kind: "p",
        text: "L’étape intermédiaire que beaucoup d’agences suppriment pour aller plus vite, et qui fait gagner un cycle entier. Il s’agit de définir le territoire d’expression (registres possibles, références visuelles, ce qui est exclu et pourquoi) et de le faire valider avant de dessiner. On discute alors d’une direction, ce qui est un débat productif, plutôt que d’un dessin fini, ce qui est un débat de goût.",
      },
      {
        kind: "note",
        text: "C’est ici que se joue la réussite du projet. Une direction validée en amont transforme la présentation des propositions en vérification, et non en jugement. Sans elle, chaque nouvelle proposition rouvre entièrement la discussion.",
      },
      {
        kind: "h2",
        text: "Étape 3 (la conception) : peu de pistes, poussées loin",
        id: "conception",
      },
      {
        kind: "p",
        text: "Présenter dix pistes n’est pas plus généreux que d’en présenter deux : c’est le signe qu’aucune n’a été suffisamment travaillée. Une piste d’identité ne se juge pas sur un logo isolé sur fond blanc mais sur son comportement en situation : sur une façade, sur un document administratif, en très petit dans un pied de page, en noir et blanc sur un fax de mairie.",
      },
      {
        kind: "p",
        text: "Nous présentons donc chaque piste appliquée à trois ou quatre supports réels du client. C’est le seul moyen de voir ce qui tient. Voir notre offre de [création et refonte de logo](/nos-services/identite-visuelle).",
      },
      { kind: "h3", text: "Tester en conditions dégradées" },
      {
        kind: "p",
        text: "Une piste se valide sur ses cas les plus défavorables, pas sur sa mise en scène. Le signe reste-t-il lisible à la taille d’un pied de page de courrier ? Tient-il en aplat noir sur une photocopie ? Reste-t-il identifiable sur un fond photographique chargé, sur un kakémono vu de loin, sur une vignette de quelques millimètres ? Ces conditions sont la réalité quotidienne d’une identité institutionnelle, alors que la présentation soignée sur fond neutre n’arrive presque jamais. Un test en conditions dégradées écarte en une heure des pistes qu’un débat esthétique aurait discutées pendant trois réunions.",
      },
      { kind: "h3", text: "Ce qu’une piste doit démontrer, au-delà du logo" },
      {
        kind: "p",
        text: "Une direction aboutie montre comment elle se comporte quand le contenu résiste : un titre trop long, une photo de mauvaise qualité fournie par un partenaire, un tableau de chiffres, une page dense de texte réglementaire. Elle montre aussi ce qui se passe lorsque plusieurs éléments se superposent, cas courant sur les supports d’événement. C’est à ce niveau de détail que se distinguent deux propositions qui, sur une planche de présentation, semblaient de qualité équivalente.",
      },
      {
        kind: "h2",
        text: "Étape 4 (l’arbitrage) : qui décide, sur quels critères",
        id: "arbitrage",
      },
      {
        kind: "p",
        text: "Le moment où les projets institutionnels s’enlisent. Si le circuit de décision n’a pas été fixé, chaque instance ajoute son avis et le résultat converge vers le compromis le plus tiède. Une identité obtenue par moyenne des préférences est toujours faible, parce que sa force venait précisément de ce qu’elle affirmait.",
      },
      {
        kind: "ul",
        items: [
          "Un décideur final identifié, même si la consultation est large.",
          "Des critères de décision issus du cadrage, pas des goûts personnels.",
          "Une distinction claire entre « je n’aime pas » et « cela ne fonctionne pas pour nous ».",
        ],
      },
      { kind: "h3", text: "Le vote interne, une fausse bonne idée" },
      {
        kind: "p",
        text: "Soumettre les pistes à un vote large paraît démocratique et sécurisant. En pratique, un vote agrège des préférences personnelles sur un objet que la plupart des votants jugent sans les critères du cadrage, et il désigne presque toujours la proposition la plus familière, donc la plus proche de ce qui existe déjà. La consultation garde sa valeur, mais comme collecte d’objections argumentées : ce qui bloque, ce qui prête à confusion, ce qui pose un problème d’usage concret. Ce matériau se traite ensuite par le décideur, avec les critères posés au départ.",
      },
      { kind: "h3", text: "Traiter une objection sans défaire le projet" },
      {
        kind: "p",
        text: "Toutes les remarques ne se valent pas et toutes n’appellent pas une modification. Une objection d’usage, du type « ce format ne rentre pas sur nos convocations », impose une correction. Une objection de lecture, du type « ce symbole peut se comprendre autrement », mérite une vérification auprès de personnes extérieures. Une objection de préférence, elle, s’écoute et se documente sans nécessairement changer quoi que ce soit. Trier les remarques selon cette grille avant d’y répondre évite l’effet d’érosion qui, cycle après cycle, ramène la proposition vers ce qu’elle voulait remplacer.",
      },
      {
        kind: "h2",
        text: "Étape 5 (le déploiement) : ce qui décide de la survie du système",
        id: "deploiement",
      },
      {
        kind: "p",
        text: "Une identité validée mais non outillée se dégrade en quelques mois. Les gabarits n’existent pas, chacun recompose à sa façon, les couleurs dérivent, le logo est étiré. Le déploiement n’est donc pas une formalité de fin de projet : c’est ce qui détermine si le travail des quatre étapes précédentes produit un effet durable.",
      },
      {
        kind: "ul",
        items: [
          "Une [charte graphique](/blog/charte-graphique-utile) écrite, courte et utilisable.",
          "Des gabarits pour les supports réellement produits, dans les logiciels réellement utilisés.",
          "Les fichiers sources remis, dans tous les formats nécessaires.",
          "La [papeterie et les supports institutionnels](/nos-services/identite-visuelle) de base, prêts à l’emploi.",
        ],
      },
      {
        kind: "h2",
        text: "Quand une identité neuve n’est pas la bonne réponse",
        id: "limites",
      },
      {
        kind: "p",
        text: "Une identité neuve ne résout ni un problème de notoriété, ni un problème de discours, ni un problème d’organisation. Il arrive qu’une structure engage une refonte parce qu’elle se sent peu identifiée, alors que la cause est ailleurs : absence sur les canaux où se trouvent ses publics, message illisible, ou multiplication de sous-marques qui dilue la structure mère. Dans ces situations, le projet graphique produit un résultat correct et un effet nul, ce qui alimente ensuite l’idée que la communication ne sert à rien.",
      },
      { kind: "h3", text: "Les signaux qui plaident pour attendre" },
      {
        kind: "ul",
        items: [
          "Le nom de la structure est lui-même en discussion : refaire l’identité avant de trancher revient à payer deux fois.",
          "Une fusion ou un rapprochement est envisagé à court terme.",
          "Personne en interne ne peut consacrer du temps au projet pendant sa durée.",
          "Le besoin réel est un site, une signalétique ou des gabarits, que l’identité existante permet déjà de traiter.",
        ],
      },
      {
        kind: "p",
        text: "Repousser un projet d’identité n’est pas un aveu d’immobilisme. Dans plusieurs de ces cas, une [refonte du logo](/blog/refonte-logo-institution) limitée à un toilettage technique, complétée par des gabarits, couvre le besoin immédiat pour une fraction du budget et laisse la question de fond se poser au bon moment.",
      },
      {
        kind: "h2",
        text: "Combien de temps cela prend",
        id: "duree",
      },
      {
        kind: "p",
        text: "La durée dépend presque entièrement du circuit de validation, pas du travail graphique. Une structure avec un décideur unique avance vite ; une instance collégiale avec plusieurs niveaux d’avis demande un rétroplanning qui intègre ces délais. C’est pourquoi nous fixons les points de validation au démarrage : c’est la variable la plus prédictive de la durée totale.",
      },
      {
        kind: "p",
        text: "Deux contraintes de calendrier méritent d’être posées dès le début dans une organisation collégiale. La première tient au rythme des instances : si une validation doit passer par un conseil qui se réunit tous les deux mois, le projet se cale sur ce rythme et non sur celui de la production. La seconde tient aux périodes creuses, congés d’été ou fin d’exercice, pendant lesquelles aucune décision ne se prend. Un rétroplanning qui ignore ces deux réalités annonce une durée que personne ne tiendra, et l’écart sera imputé au prestataire.",
      },
      {
        kind: "p",
        text: "Si vous avez un projet d’identité, [parlons-en](/contact) : nous commençons toujours par le cadrage, même sur un budget serré.",
      },
    ],
    faq: [
      {
        question: "Quelle est la différence entre identité de marque et identité visuelle ?",
        answer:
          "L’identité visuelle est la partie graphique : signe, typographies, couleurs, règles de composition. L’identité de marque est plus large et inclut la manière de s’exprimer : le ton, le vocabulaire, les partis pris de discours. On peut avoir une identité visuelle réussie et un discours incohérent, et l’ensemble ne fonctionne alors pas.",
      },
      {
        question: "Combien de propositions de logo une agence doit-elle présenter ?",
        answer:
          "Peu, et travaillées en profondeur. Dix pistes indiquent qu’aucune n’a été poussée jusqu’au test en situation réelle. Deux ou trois directions, chacune appliquée à plusieurs supports concrets, permettent de juger ce qui tient vraiment : ce qu’un logo isolé sur fond blanc ne montre jamais.",
      },
      {
        question: "Qu’est-ce qui fait dérailler un projet d’identité ?",
        answer:
          "L’absence de direction validée avant la conception, et un circuit de décision flou. Sans critères posés en amont, la présentation des propositions devient un débat de goûts que rien ne permet de trancher. Sans décideur identifié, le résultat converge vers un compromis tiède qui perd précisément ce qui faisait sa force. Un troisième facteur intervient plus tard : l’absence de gabarits au moment du déploiement, qui laisse le système se dégrader alors que le travail de conception était bon.",
      },
      {
        question: "Faut-il refaire son identité quand on refait son site internet ?",
        answer:
          "Pas systématiquement, mais c’est un bon moment pour vérifier si l’identité existante supporte les usages numériques. Beaucoup de logos conçus pour l’imprimé n’ont ni version compacte, ni version lisible en très petite taille, ni déclinaison pour les avatars et les vignettes de partage. Si ces manques sont les seuls, un toilettage technique suffit et coûte bien moins qu’une création complète. Si le projet web révèle en plus un problème de discours ou de hiérarchie entre les entités de la structure, la question de l’identité mérite alors d’être traitée en amont du site.",
      },
      {
        question: "Combien de supports faut-il décliner au moment de la création ?",
        answer:
          "Ceux que vous produisez réellement, dans l’ordre de leur fréquence d’usage. Une organisation qui envoie chaque semaine des courriers et des invitations a besoin d’une papeterie et de gabarits de convocation avant une déclinaison d’objets promotionnels. La méthode consiste à lister les supports sortis au cours des douze derniers mois, à les classer par volume, puis à traiter les premiers. Les autres viendront ensuite, en s’appuyant sur les règles déjà posées, ce qui coûte moins cher que de tout décliner d’un coup au démarrage.",
      },
    ],
    related: [
      { label: "Notre offre d’identité visuelle", href: "/nos-services/identite-visuelle" },
      { label: "Ce qu’on est en droit d’attendre d’une agence", href: "/blog/identite-visuelle-agence-attendre" },
      { label: "Charte graphique : à quoi elle sert vraiment", href: "/blog/charte-graphique-utile" },
    ],
  },

  {
    slug: "identite-visuelle-agence-attendre",
    title: "Identité visuelle : ce qu’on est en droit d’attendre d’une agence",
    metaTitle: "Identité visuelle agence | A6",
    metaDescription:
      "Les livrables et garanties qu’une agence doit fournir sur une identité visuelle : fichiers sources, droits cédés, déclinaisons et documentation.",
    keyword: "identité visuelle agence",
    category: "Identité de marque",
    date: "2026-07-08",
    dateLabel: "Juillet 2026",
    readingMinutes: 9,
    img: "/photos/blog/identite-visuelle-agence-attendre-1.webp",
    imgAlt:
      "Mockup de carte de visite vierge, illustration d’une identité visuelle en cours de conception",
    excerpt:
      "Beaucoup de projets d’identité se terminent sans que le client sache ce qu’il possède. Voici la liste précise de ce qu’une agence doit livrer, et les trois questions à poser avant de signer.",
    body: [
      {
        kind: "p",
        text: "Un projet d’identité visuelle se juge autant sur le résultat graphique que sur ce qui est remis à la fin. Une identité magnifique dont vous ne détenez ni les sources, ni les droits d’exploitation, ni la documentation vous laisse dépendant de votre prestataire pour chaque support futur. Cette dépendance n’est presque jamais malveillante : elle vient d’un périmètre mal défini au départ.",
      },
      {
        kind: "h2",
        text: "Les fichiers sources, dans les bons formats",
        id: "fichiers-sources",
      },
      {
        kind: "p",
        text: "Le livrable minimal n’est pas un fichier image mais le fichier vectoriel éditable du signe. Un logo livré uniquement en PNG ne peut être ni agrandi proprement, ni décliné, ni adapté à une contrainte d’impression. C’est la première question à poser, et elle se règle en une phrase dans le devis.",
      },
      {
        kind: "ul",
        items: [
          "Le signe en vectoriel éditable, plus des exports pour usage courant.",
          "Les versions couleur, monochrome, et sur fond sombre (chacune conçue, pas générée automatiquement).",
          "Les formats horizontaux et compacts selon les emplacements réels.",
          "Les polices utilisées, avec leur licence, ou une alternative libre documentée.",
        ],
      },
      { kind: "h3", text: "Vectoriel et image : ce que la distinction change" },
      {
        kind: "p",
        text: "Un fichier vectoriel décrit des formes par des courbes, ce qui permet de l’agrandir à la taille d’une façade sans perte. Un fichier image décrit des pixels et se dégrade dès qu’on dépasse sa taille d’origine. La conséquence pratique est directe : sans vectoriel, ni imprimeur, ni signalétiste, ni brodeur ne peut travailler correctement, et chaque nouveau support suppose une reconstruction facturée. C’est la raison pour laquelle le fichier éditable, et non un simple export, constitue le livrable de référence.",
      },
      { kind: "h3", text: "Ce que demandera votre imprimeur" },
      {
        kind: "p",
        text: "Les prestataires de fabrication ont des exigences précises qu’il vaut mieux anticiper à la livraison qu’au premier devis d’impression : couleurs converties dans le bon mode, polices vectorisées ou fournies, versions en une seule couleur pour la sérigraphie, la gravure ou le marquage. Une identité livrée avec ces variantes évite des allers-retours et, surtout, évite qu’un fabricant pressé ne bricole lui-même une version approximative qui deviendra ensuite la référence par défaut dans vos fichiers.",
      },
      {
        kind: "h2",
        text: "La question des licences de polices",
        id: "polices",
      },
      {
        kind: "p",
        text: "Point technique souvent ignoré, avec des conséquences juridiques concrètes. Une police commerciale utilisée dans votre identité suppose une licence adaptée à vos usages : impression, web, diffusion à des tiers. Si l’agence a travaillé sous sa propre licence, vous ne pouvez pas légalement produire vos supports en interne. Demandez ce point explicitement.",
      },
      {
        kind: "note",
        text: "Vérification utile : demandez si les polices retenues sont sous licence libre ou commerciale, et dans ce dernier cas qui doit acquérir la licence pour vos usages internes. Une réponse imprécise annonce un problème au premier support produit par vos équipes.",
      },
      { kind: "h3", text: "Licence bureautique, licence web, diffusion à des tiers" },
      {
        kind: "p",
        text: "Une même police se licencie par usage, et les trois usages courants d’une organisation sont rarement couverts par le même contrat. L’installation sur les postes de vos agents relève d’une licence bureautique, comptée par utilisateur. L’affichage sur votre site relève d’une licence web, souvent facturée au volume. La transmission des fichiers à un imprimeur ou à un partenaire relève d’un droit de diffusion à des tiers. Vérifier ces trois points au moment du choix typographique prend quelques minutes ; les découvrir après le déploiement suppose soit un rachat, soit un changement de police et une reprise de tous les supports.",
      },
      { kind: "h3", text: "L’alternative libre, une décision assumée" },
      {
        kind: "p",
        text: "Retenir une police sous licence libre supprime la question, et le choix disponible aujourd’hui rend cette option défendable sans concession de qualité. La contrepartie existe : ces familles sont largement utilisées, donc moins distinctives, et le caractère de l’identité devra alors se construire ailleurs, par la composition, le traitement de l’image ou le dessin du signe. C’est un arbitrage légitime, particulièrement pour une structure dont les supports sont produits par de nombreuses personnes ou par des bénévoles.",
      },
      {
        kind: "h2",
        text: "L’étendue des droits cédés",
        id: "droits",
      },
      {
        kind: "p",
        text: "Une création graphique est protégée par le droit d’auteur, et vous n’acquérez que ce que le contrat cède explicitement. Pour une identité destinée à représenter votre organisation, la cession doit couvrir tous supports, sans limitation de durée ni de territoire, avec le droit d’adaptation. Une cession limitée à des supports listés vous bloquera au premier usage non prévu.",
      },
      { kind: "h3", text: "Cession et paternité sont deux choses distinctes" },
      {
        kind: "p",
        text: "La cession porte sur les droits d’exploitation ; elle ne prive pas l’auteur de son droit moral, qui reste attaché à sa personne. Concrètement, vous utilisez, reproduisez et adaptez la création dans les limites cédées, et l’agence conserve la faculté d’en revendiquer la paternité, notamment dans ses références. Les deux régimes coexistent sans difficulté dès lors qu’ils sont écrits. Le point à négocier explicitement reste le droit d’adaptation : sans lui, toute déclinaison future, même mineure, suppose de revenir vers l’auteur.",
      },
      { kind: "h3", text: "Les éléments tiers intégrés à l’identité" },
      {
        kind: "p",
        text: "Une identité intègre parfois des éléments qui n’ont pas été créés pour elle : une photographie, une illustration, une icône, une police. Chacun arrive avec sa propre licence, et la cession consentie par l’agence ne peut pas couvrir ce qu’elle ne détient pas. Demandez la liste de ces éléments et le régime applicable à chacun. C’est le point qui pose problème le jour où l’organisation veut réutiliser un visuel dans un contexte non prévu, par exemple une campagne d’affichage ou un support diffusé par un partenaire.",
      },
      {
        kind: "h2",
        text: "Une documentation utilisable, pas un beau livre",
        id: "documentation",
      },
      {
        kind: "p",
        text: "Beaucoup de chartes graphiques sont des objets de présentation : épaisses, élégantes, et jamais ouvertes. Une charte utile est courte et répond aux questions que se posent réellement les gens qui produisent les supports : quelle taille minimale, quel espace autour du logo, quelle couleur pour un titre, que faire sur une photo chargée.",
      },
      {
        kind: "p",
        text: "Nous développons ce point dans [à quoi sert vraiment une charte graphique](/blog/charte-graphique-utile).",
      },
      {
        kind: "h2",
        text: "Les gabarits, le livrable qui change tout",
        id: "gabarits",
      },
      {
        kind: "p",
        text: "C’est le livrable le plus rentable et le plus souvent absent. Des gabarits prêts à remplir, dans les logiciels que vos équipes utilisent réellement, garantissent que l’identité survivra au quotidien. Sans eux, chaque support est recomposé de zéro par une personne différente, et le système se dégrade en quelques mois.",
      },
      { kind: "h3", text: "Dans quel logiciel, et pour qui" },
      {
        kind: "p",
        text: "Un gabarit livré dans un logiciel de mise en page professionnel ne sert qu’aux personnes qui le possèdent et savent l’ouvrir. Dans la plupart des institutions et des associations, les supports courants sont produits dans une suite bureautique par des personnes dont ce n’est pas le métier. Le gabarit utile est donc celui qui correspond à cette réalité, quitte à accepter quelques approximations typographiques par rapport à une composition professionnelle. Un fichier parfait que personne n’ouvre ne produit aucun effet sur la cohérence de vos supports.",
      },
      {
        kind: "h2",
        text: "Identité visuelle : les engagements que l’agence doit écrire",
        id: "engagements",
      },
      {
        kind: "p",
        text: "Les désaccords de fin de projet portent presque toujours sur des points qui n’avaient pas été écrits au début. Une proposition sérieuse ne se contente pas d’annoncer une identité complète : elle chiffre ce qu’elle contient. Ce niveau de détail sert autant l’agence que le client, parce qu’il rend visible ce qui relève du périmètre et ce qui relève d’une commande supplémentaire.",
      },
      {
        kind: "ul",
        items: [
          "Le nombre de directions présentées et le nombre de séries de modifications incluses.",
          "La liste nominative des supports déclinés, avec leur format.",
          "Le délai de remise des fichiers après validation, et leur mode de transmission.",
          "Ce qui se passe si le projet est interrompu : quels fichiers restent acquis, à quelles conditions.",
        ],
      },
      { kind: "h3", text: "La question rarement posée : la reprise par un tiers" },
      {
        kind: "p",
        text: "Une organisation change parfois de prestataire pour des raisons étrangères à la qualité du travail : un marché à renouveler, un changement d’équipe, une contrainte budgétaire. Le vrai test d’un livrable est donc sa reprenabilité. Un designer extérieur, sans accès à l’agence d’origine, peut-il produire un nouveau support conforme en une demi-journée avec ce qui vous a été remis ? Si la réponse est non, il manque quelque chose, et c’est en général soit les sources, soit la documentation des règles, soit les polices.",
      },
      {
        kind: "h2",
        text: "Les trois questions à poser avant de signer",
        id: "trois-questions",
      },
      {
        kind: "p",
        text: "Elles tiennent en trois phrases et évitent l’essentiel des mauvaises surprises. Une agence sérieuse y répond sans hésitation et par écrit ; une réponse évasive sur l’une des trois est un motif suffisant pour approfondir avant d’engager le projet.",
      },
      {
        kind: "ul",
        items: [
          "Quels fichiers sources me sont remis, et dans quels formats ?",
          "Quelle est l’étendue exacte de la cession de droits ?",
          "Quels gabarits sont fournis, dans quels logiciels ?",
        ],
      },
      {
        kind: "h2",
        text: "Ce qu’une agence ne peut pas vous garantir",
        id: "limites",
      },
      {
        kind: "p",
        text: "Trois attentes fréquentes n’ont pas de réponse contractuelle, et il vaut mieux le savoir avant de signer. Aucune agence ne peut garantir l’unicité absolue d’un signe : la recherche d’antériorité relève d’un conseil en propriété industrielle, et le dépôt de marque constitue une démarche distincte du travail de création. Aucune agence ne peut garantir l’adhésion unanime de vos publics, parce qu’une identité qui ne déplaît à personne n’affirme généralement rien. Aucune agence, enfin, ne peut garantir que l’identité sera correctement appliquée si personne, chez vous, n’en assume la responsabilité au quotidien.",
      },
      { kind: "h3", text: "Le dépôt de marque, une démarche à part" },
      {
        kind: "p",
        text: "La protection juridique du signe ne découle pas de sa création mais de son dépôt, dans les classes correspondant à vos activités. C’est une décision distincte, avec son calendrier et son coût, qui gagne à être anticipée avant la diffusion publique de la nouvelle identité plutôt qu’après. Une agence peut vous alerter sur le sujet et préparer les fichiers nécessaires ; l’examen des antériorités et la procédure relèvent d’un conseil spécialisé.",
      },
      {
        kind: "p",
        text: "Chez A6, ces points sont écrits dans la proposition avant le démarrage. Voir notre offre d’[identité visuelle](/nos-services/identite-visuelle), les [étapes d’une création d’identité de marque](/blog/creation-identite-marque-etapes), ou [écrivez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Un logo livré en PNG suffit-il ?",
        answer:
          "Non. Un fichier image ne peut être ni agrandi sans perte, ni décliné, ni adapté aux contraintes d’impression. Le livrable de référence est le fichier vectoriel éditable, accompagné d’exports pour les usages courants. Si seul un PNG vous est remis, vous devrez repayer une reconstruction au premier support un peu exigeant.",
      },
      {
        question: "À qui appartient un logo créé par une agence ?",
        answer:
          "La création est protégée par le droit d’auteur et vous n’acquérez que ce que le contrat cède explicitement. Pour une identité qui représente votre organisation, exigez une cession couvrant tous supports, sans limitation de durée ni de territoire, avec droit d’adaptation. Une cession restreinte à une liste de supports vous bloquera au premier usage imprévu.",
      },
      {
        question: "Qui doit acheter les licences de polices, l’agence ou le client ?",
        answer:
          "Le client, dès lors que ses équipes produiront des supports en interne. Une licence acquise par l’agence couvre les usages de l’agence, pas ceux de votre organisation, et cette confusion se découvre en général au premier document produit par une personne qui ne dispose pas de la police. Deux solutions existent : retenir une famille sous licence libre, ce qui supprime la question, ou budgéter la licence adaptée au nombre de postes et aux usages web. Le point se tranche au moment du choix typographique, pas à la livraison.",
      },
      {
        question: "Que faire si l’agence qui a créé notre identité n’existe plus ?",
        answer:
          "Tout dépend de ce qui vous a été remis. Si vous détenez les fichiers sources, la documentation des règles et les références typographiques, un autre prestataire reprend le travail sans difficulté particulière. Si vous ne disposez que d’exports en image, la reconstruction reste possible mais représente un coût et comporte un risque d’écart avec l’original. C’est précisément pour cette situation, plus fréquente qu’on ne le croit, que la liste des livrables mérite d’être vérifiée au démarrage plutôt qu’au moment où le besoin apparaît.",
      },
    ],
    related: [
      { label: "Création d’identité de marque : les étapes", href: "/blog/creation-identite-marque-etapes" },
      { label: "Refondre le logo d’une institution", href: "/blog/refonte-logo-institution" },
      { label: "Notre offre d’identité visuelle", href: "/nos-services/identite-visuelle" },
    ],
  },

  {
    slug: "charte-graphique-utile",
    title: "Charte graphique : à quoi elle sert le jour où vous n’êtes plus là",
    metaTitle: "Charte graphique utile | A6",
    metaDescription:
      "Pourquoi la plupart des chartes graphiques ne servent à rien, et ce qu’une charte utilisable doit contenir pour survivre au départ de ses auteurs.",
    keyword: "charte graphique",
    category: "Identité de marque",
    date: "2026-05-19",
    dateLabel: "Mai 2026",
    readingMinutes: 9,
    img: "/photos/blog/charte-graphique-utile-1.webp",
    imgAlt:
      "Nuancier de couleurs RAL consulté avec des plans, illustration d’une charte graphique",
    excerpt:
      "Une charte graphique n’est pas un objet de prestige : c’est un mode d’emploi. Son seul juge est la personne qui doit produire un support un vendredi soir sans pouvoir appeler personne.",
    body: [
      {
        kind: "p",
        text: "La charte graphique est le document qui explique comment utiliser une identité visuelle. Sa fonction est simple et sa réussite se mesure d’une seule façon : une personne qui ne connaît pas le projet parvient-elle à produire un support correct en s’y référant seule ? La plupart des chartes échouent à ce test, non par manque de soin mais parce qu’elles ont été conçues pour être présentées, non pour être consultées.",
      },
      {
        kind: "h2",
        text: "Le vrai lecteur d’une charte",
        id: "vrai-lecteur",
      },
      {
        kind: "p",
        text: "Ce n’est pas le directeur qui l’a validée, ni le graphiste qui l’a produite. C’est l’assistante qui monte un ordre du jour, le chargé de mission qui prépare une présentation, le bénévole qui fait une affiche, l’imprimeur qui reçoit un fichier douteux. Ces personnes ont une question précise et peu de temps. Une charte qui commence par vingt pages sur les valeurs de la marque ne leur répond pas.",
      },
      {
        kind: "quote",
        text: "Une charte graphique se juge un vendredi à 18 h, quand quelqu’un doit produire un document et que personne ne répond au téléphone.",
      },
      { kind: "h3", text: "Trois profils, trois usages" },
      {
        kind: "p",
        text: "Le premier profil produit des documents courants sans logiciel de mise en page : convocations, comptes rendus, présentations. Il cherche une taille de logo, une couleur de titre et une police de substitution. Le deuxième est un prestataire extérieur, imprimeur ou développeur, qui a besoin de références techniques exactes et de fichiers exploitables. Le troisième est un partenaire qui doit faire figurer votre logo sur son propre support, et qui appliquera la première règle qu’il trouvera. Une charte utile répond aux trois, dans cet ordre de fréquence et non dans l’ordre de prestige.",
      },
      { kind: "h3", text: "La question posée n’est jamais celle des valeurs" },
      {
        kind: "p",
        text: "Personne n’ouvre ce document pour comprendre le positionnement de l’organisation. On l’ouvre avec une question opérationnelle et un délai court. Placer en tête vingt pages de récit de marque impose un détour à chaque consultation, et le comportement observable est toujours le même : l’utilisateur abandonne, recopie un ancien document et perpétue l’erreur qu’il contenait. Le sommaire doit donc être organisé par question posée, pas par ordre d’élaboration du projet.",
      },
      {
        kind: "h2",
        text: "Ce qu’une charte graphique doit contenir",
        id: "contenu",
      },
      {
        kind: "p",
        text: "L’essentiel tient en peu de pages si l’on se concentre sur les décisions que les utilisateurs doivent prendre. Chaque règle doit être formulée de façon vérifiable (une valeur, une mesure, un exemple) plutôt qu’en intention. « Laisser respirer le logo » n’est pas une règle ; « conserver un espace libre égal à la hauteur du signe » en est une.",
      },
      {
        kind: "ul",
        items: [
          "Les versions du logo et le cas d’usage de chacune, sans ambiguïté.",
          "La taille minimale et la zone de protection, en valeurs mesurables.",
          "Les couleurs avec leurs références pour l’écran et pour l’impression.",
          "Les polices, leurs poids autorisés, et la substitution admise quand la police n’est pas installée.",
          "Deux ou trois compositions types reproduites plutôt que décrites.",
          "Les interdits illustrés : ce qui est montré comme faux ne se reproduit pas.",
        ],
      },
      { kind: "h3", text: "Formuler des règles vérifiables" },
      {
        kind: "p",
        text: "Une règle utile se contrôle sans jugement. « Le logo doit rester lisible » n’aide personne ; une largeur minimale exprimée en millimètres pour l’impression et en pixels pour l’écran se vérifie en trois secondes. Le même principe vaut pour les couleurs, avec une référence par mode de reproduction, et pour la typographie, avec les graisses autorisées et celles qui ne le sont pas. Chaque fois qu’une règle repose sur une appréciation, elle sera interprétée différemment par chaque utilisateur, et la cohérence recherchée disparaît en quelques mois.",
      },
      { kind: "h3", text: "Le cas des logos de partenaires et de financeurs" },
      {
        kind: "p",
        text: "C’est la situation la plus fréquente et la plus mal documentée dans le secteur institutionnel et associatif. Un support porte le logo de la structure, ceux des financeurs, parfois ceux de partenaires et d’un label. Sans règle écrite, chacun compose au jugé, et le résultat oscille entre l’alignement approximatif et la surcharge. Une charte qui prévoit un bandeau partenaires normé, avec un ordre, une hauteur de référence commune et un espacement fixe, règle définitivement une question qui reviendrait sinon sur chaque document.",
      },
      {
        kind: "h2",
        text: "Ce qui n’a pas sa place dedans",
        id: "hors-sujet",
      },
      {
        kind: "p",
        text: "Le récit de la démarche créative, les planches d’inspiration, l’argumentaire de marque. Ces contenus ont une valeur réelle mais dans un autre document : leur présence dans la charte allonge le chemin vers l’information utile et fait abandonner le lecteur. Une charte de dix pages consultée vaut mieux qu’une charte de soixante jamais ouverte.",
      },
      { kind: "h3", text: "Les règles que personne ne pourra respecter" },
      {
        kind: "p",
        text: "Un second contenu mérite d’être écarté : la règle vraie mais inapplicable dans le contexte réel de production. Imposer une police commerciale à des bénévoles qui travaillent sur leur ordinateur personnel, exiger une mise en page que seul un logiciel professionnel permet, ou prévoir un traitement d’image qui suppose des compétences absentes de la structure revient à programmer l’écart. Une charte réaliste prévoit systématiquement le niveau dégradé : quelle police de substitution, quelle version simplifiée, quel arrangement acceptable quand les moyens manquent. Documenter ce niveau n’est pas un renoncement, c’est ce qui évite que chacun improvise le sien.",
      },
      {
        kind: "h2",
        text: "Le complément indispensable : les gabarits",
        id: "gabarits",
      },
      {
        kind: "p",
        text: "Une règle écrite demande un effort d’application ; un gabarit supprime cet effort. Pour les supports que vous produisez régulièrement, le gabarit rend la charte presque superflue, ce qui est le meilleur résultat possible. La charte devient alors le recours pour les cas non prévus, ce qui est exactement sa fonction.",
      },
      {
        kind: "note",
        text: "Ordre de priorité si le budget est contraint : d’abord les gabarits des trois supports que vous produisez le plus, ensuite la charte. L’inverse est plus fréquent et moins efficace.",
      },
      {
        kind: "h2",
        text: "Le format de diffusion compte autant que le contenu",
        id: "diffusion",
      },
      {
        kind: "p",
        text: "Un document que personne ne trouve ne produit aucun effet. Le PDF reste le format le plus courant, et il a un défaut : il circule en pièce jointe, se duplique en versions successives, et plus personne ne sait laquelle fait foi. Une page interne, un espace partagé ou un dossier de référence unique répondent mieux au besoin, à condition qu’une seule adresse soit connue de tous.",
      },
      { kind: "h3", text: "Ranger les règles et les fichiers au même endroit" },
      {
        kind: "p",
        text: "La séparation entre le document qui explique et les fichiers qui servent cause plus d’écarts que la mauvaise volonté. Un utilisateur qui trouve la règle mais pas le fichier utilisera celui qu’il a sous la main, souvent un export de faible définition récupéré dans un ancien courriel. Ranger au même endroit les versions du logo, les polices, les gabarits et la documentation supprime cette dérive sans exiger d’effort supplémentaire de personne.",
      },
      { kind: "h3", text: "Prévoir la mise à jour dès le départ" },
      {
        kind: "p",
        text: "Une charte n’est pas figée : une déclinaison nouvelle apparaît, un support change de format, une règle se révèle inapplicable. Décider dès le début qui peut la modifier, et sous quelle forme la version en vigueur se reconnaît, évite la coexistence de plusieurs documents contradictoires. Un numéro de version et une date suffisent, à condition que la responsabilité soit nommée.",
      },
      {
        kind: "h2",
        text: "La question de la transmission",
        id: "transmission",
      },
      {
        kind: "p",
        text: "Dans une institution comme dans une association, les personnes changent. Une charte a précisément pour rôle de survivre à ces départs, à condition qu’elle soit rangée là où on la retrouvera, avec les fichiers sources, et non dans la boîte mail de quelqu’un qui n’est plus là. C’est un enjeu de gouvernance autant que de design.",
      },
      { kind: "h3", text: "Le passage de relais, un moment à organiser" },
      {
        kind: "p",
        text: "Le départ de la personne qui suivait les supports est le moment où la plupart des systèmes se perdent. Son successeur hérite rarement d’un dossier constitué ; il reconstitue au fil des besoins, à partir des fichiers qu’il trouve, et les écarts s’installent sans que personne ne les décide. Deux précautions suffisent à l’éviter. Consigner en une page où se trouve chaque chose, qui détient les licences et qui a produit quoi. Et faire produire un support réel par la personne entrante avant le départ de la sortante, ce qui révèle immédiatement les informations manquantes.",
      },
      {
        kind: "h2",
        text: "Ce qu’une charte graphique ne réglera pas",
        id: "limites",
      },
      {
        kind: "p",
        text: "Un document ne remplace ni une décision ni une responsabilité. Si personne n’est chargé de répondre aux cas particuliers, ils seront tranchés par celui qui a le fichier ouvert. Si les supports sont produits par des prestataires successifs sans interlocuteur unique, chacun réinterprétera les règles à sa façon. Et si l’identité comporte une faiblesse structurelle, par exemple un signe illisible en petite taille, aucune documentation ne la corrigera : la charte constatera le problème sans le résoudre.",
      },
      {
        kind: "p",
        text: "Ces limites plaident pour une répartition simple : les gabarits absorbent le volume, la charte traite les cas non prévus, et une personne identifiée tranche le reste. Dans une structure où les moyens sont comptés, ce point d’organisation pèse souvent plus lourd que la qualité du document, comme nous l’évoquons à propos de la [communication associative avec des moyens limités](/blog/communication-associations-moyens-limites).",
      },
      {
        kind: "p",
        text: "Chez A6, charte et gabarits sont conçus ensemble : voir [identité visuelle](/nos-services/identite-visuelle) et [ce qu’une agence doit livrer sur une identité visuelle](/blog/identite-visuelle-agence-attendre).",
      },
    ],
    faq: [
      {
        question: "Quelle longueur doit avoir une charte graphique ?",
        answer:
          "Aussi courte que possible tout en couvrant les décisions réelles des utilisateurs. Une dizaine de pages bien ciblées, consultées, valent mieux qu’un document de soixante pages jamais ouvert. Le critère n’est pas l’exhaustivité mais la rapidité avec laquelle un utilisateur trouve sa réponse.",
      },
      {
        question: "Charte graphique ou gabarits : que faire en premier ?",
        answer:
          "Les gabarits, si le budget est contraint. Un gabarit supprime l’effort d’application d’une règle, alors qu’une règle écrite le suppose. Commencez par les trois supports que vous produisez le plus souvent, puis documentez le reste dans une charte qui servira de recours pour les cas non prévus.",
      },
      {
        question: "Faut-il diffuser la charte graphique aux partenaires ?",
        answer:
          "Oui, au moins dans une version réduite. Les partenaires, financeurs et prestataires font figurer votre logo sur leurs propres supports et appliqueront, faute de consigne, la première règle qu’ils trouveront. Une version courte contenant les fichiers du logo, la zone de protection, la taille minimale et deux exemples d’usage correct suffit dans la grande majorité des cas. Elle évite les reproductions déformées qui, une fois imprimées ou mises en ligne, deviennent difficiles à rattraper.",
      },
      {
        question: "Qui doit rédiger la charte graphique ?",
        answer:
          "Le concepteur de l’identité, avec un relecteur choisi parmi les futurs utilisateurs. L’auteur des règles en connaît la logique mais anticipe mal les questions concrètes de ceux qui n’ont pas participé au projet. Faire tester le document par une personne qui doit produire un support réel, sans aide extérieure, révèle en une heure les zones ambiguës et les manques. C’est le seul contrôle de qualité fiable sur ce type de livrable, et il coûte une demi-journée.",
      },
    ],
    related: [
      { label: "Création d’identité de marque : les étapes", href: "/blog/creation-identite-marque-etapes" },
      { label: "Communiquer avec des moyens associatifs", href: "/blog/communication-associations-moyens-limites" },
      { label: "Notre offre d’identité visuelle", href: "/nos-services/identite-visuelle" },
    ],
  },

  {
    slug: "refonte-logo-institution",
    title: "Refondre le logo d’une institution sans casser sa mémoire",
    metaTitle: "Refonte logo institution | A6",
    metaDescription:
      "Faire évoluer l’identité d’une institution installée : ce qu’il faut conserver, comment mesurer le capital de reconnaissance et conduire la transition.",
    keyword: "refonte logo",
    category: "Identité de marque",
    date: "2026-04-22",
    dateLabel: "Avril 2026",
    readingMinutes: 9,
    img: "/photos/blog/refonte-logo-institution-1.webp",
    imgAlt:
      "Esquisses de pistes de logo sur papier, illustration d’une refonte d’identité visuelle",
    excerpt:
      "Refondre le logo d’une institution ancienne n’est pas un projet créatif mais un exercice d’équilibre : ce qui paraît vieilli à l’interne est souvent ce qui la rend reconnaissable à l’extérieur.",
    body: [
      {
        kind: "p",
        text: "La refonte de l’identité d’une institution installée obéit à une logique différente d’une création. Il existe un capital : des années de présence, une reconnaissance acquise, un attachement parfois fort de la part des membres. Ce capital ne se voit pas de l’intérieur, où l’on est surtout lassé de l’existant. C’est le principal risque du projet.",
      },
      {
        kind: "h2",
        text: "Pourquoi la lassitude interne est un mauvais guide",
        id: "lassitude",
      },
      {
        kind: "p",
        text: "Les personnes qui travaillent dans une institution voient son logo des dizaines de fois par jour depuis des années : elles en perçoivent chaque défaut. Les publics extérieurs le croisent quelques fois par an et n’y voient qu’un repère. Ce décalage de perception explique la plupart des refontes ratées : on corrige une fatigue interne au prix d’une perte de reconnaissance externe.",
      },
      { kind: "h3", text: "D’où vient la demande" },
      {
        kind: "p",
        text: "La demande apparaît rarement au terme d’une analyse. Elle surgit à l’arrivée d’une nouvelle direction, à l’approche d’un anniversaire, au moment d’un projet de site, ou après une remarque répétée en assemblée. Ces déclencheurs ne sont pas illégitimes, mais ils ne disent rien du besoin réel. Le premier travail consiste à remonter du déclencheur au problème : ce qui gêne concrètement, sur quels supports, et pour qui.",
      },
      { kind: "h3", text: "Distinguer le symptôme du problème" },
      {
        kind: "p",
        text: "Un logo jugé daté masque souvent autre chose. Des supports hétérogènes produits sans règles donnent une impression de vieillissement qui ne doit rien au signe lui-même. Une structure devenue illisible, dont les entités communiquent chacune pour son compte, produit le même sentiment. Dans ces deux cas, redessiner le logo laisse le problème intact et fait porter la déception sur le graphisme. La question de cadrage est donc moins « faut-il changer ce logo » que « qu’est-ce qui, précisément, ne fonctionne pas aujourd’hui ».",
      },
      {
        kind: "note",
        text: "Question de cadrage à poser au départ : le problème est-il que le logo est daté, ou qu’il ne fonctionne pas techniquement (illisible en petit, inutilisable en monochrome, sans version numérique correcte) ? Les deux diagnostics n’appellent pas la même réponse.",
      },
      {
        kind: "h2",
        text: "Identifier ce qui porte la reconnaissance",
        id: "reconnaissance",
      },
      {
        kind: "p",
        text: "Dans toute identité installée, un ou deux éléments seulement portent la reconnaissance : parfois une couleur, parfois une forme, parfois simplement le nom dans une disposition particulière. Le reste est du contexte d’époque, qui peut évoluer librement. Le travail d’analyse consiste à séparer les deux, et il vaut mieux le faire méthodiquement que d’en débattre en réunion.",
      },
      {
        kind: "ul",
        items: [
          "Tester la reconnaissance des éléments isolés auprès de publics extérieurs, pas seulement en interne.",
          "Repérer ce qui apparaît sur les supports les plus anciens et les plus diffusés.",
          "Distinguer les éléments qui ont une signification statutaire de ceux qui sont purement décoratifs.",
        ],
      },
      { kind: "h3", text: "Le test de la silhouette" },
      {
        kind: "p",
        text: "Un exercice simple donne des indications fiables : présenter le signe sans le nom, en aplat, à des personnes extérieures à l’organisation, et observer ce qui est reconnu. Le même test avec la couleur seule, puis avec la disposition typographique seule, permet d’isoler ce qui porte réellement la mémoire visuelle. Les résultats contredisent fréquemment les intuitions internes, et c’est précisément leur utilité : ils déplacent la discussion du terrain du goût vers celui de l’observation.",
      },
      { kind: "h3", text: "Les éléments à valeur statutaire" },
      {
        kind: "p",
        text: "Certaines institutions portent dans leur identité des éléments qui ne relèvent pas du graphisme : une mention obligatoire, une référence à une tutelle, un emblème dont l’usage est encadré, une dénomination protégée. Ces éléments ne se traitent pas comme des choix esthétiques et se vérifient avant la conception, auprès de l’autorité concernée. Les découvrir tard oblige à reprendre un travail déjà validé, ce qui reste le scénario le plus coûteux d’un projet de refonte.",
      },
      {
        kind: "h2",
        text: "Les trois degrés de refonte d’un logo institutionnel",
        id: "degres",
      },
      {
        kind: "p",
        text: "Une refonte n’est pas une décision binaire. Nommer explicitement le degré visé évite le malentendu le plus courant du projet, où le commanditaire attend un rafraîchissement et reçoit une rupture, ou l’inverse.",
      },
      { kind: "h3", text: "Le toilettage technique" },
      {
        kind: "p",
        text: "On conserve le signe et on le rend utilisable : redessin propre en vectoriel, lisibilité en petite taille, version monochrome, version pour fond sombre, déclinaisons numériques. Invisible pour le public, décisif à l’usage. C’est très souvent ce dont l’institution a réellement besoin.",
      },
      { kind: "h3", text: "L’évolution" },
      {
        kind: "p",
        text: "On garde les éléments porteurs de reconnaissance et on modernise le reste : typographie, proportions, palette élargie, système de composition. Le public perçoit un changement sans perdre le repère. C’est le compromis le plus souvent pertinent pour une institution.",
      },
      { kind: "h3", text: "La rupture" },
      {
        kind: "p",
        text: "On change de signe. Cela ne se justifie que par un changement réel : fusion, changement de nom, transformation de mission. Une rupture purement esthétique fait perdre le capital acquis sans raison que le public puisse comprendre.",
      },
      {
        kind: "p",
        text: "Le choix du degré ne revient pas à l’agence seule. Il se décide au cadrage à partir de trois éléments : ce que le test de reconnaissance a montré, ce que l’institution a réellement changé dans son mandat, et le budget de transition que suppose chaque option. Une rupture engage des dépenses très au-delà du travail graphique, puisqu’elle remet en cause l’ensemble des supports en circulation.",
      },
      {
        kind: "h2",
        text: "Conduire la transition",
        id: "transition",
      },
      {
        kind: "p",
        text: "Une identité ne se remplace pas du jour au lendemain dans une institution : il reste des stocks de papeterie, de la [signalétique](/nos-services/impressions-signaletique) en place, des documents en circulation, des partenaires qui utilisent l’ancien logo. Une transition mal préparée fait cohabiter les deux identités pendant deux ans, ce qui annule le bénéfice de la refonte.",
      },
      {
        kind: "ul",
        items: [
          "Une date de basculement annoncée, avec une priorité claire sur les supports les plus visibles.",
          "L’écoulement des stocks planifié, plutôt que subi.",
          "Les partenaires et relais informés avec les fichiers à jour.",
          "Une explication du changement adressée aux membres : ce qui change, ce qui reste, pourquoi.",
        ],
      },
      { kind: "h3", text: "La signalétique, poste le plus lourd" },
      {
        kind: "p",
        text: "Plaques, totems, enseignes et panneaux de site représentent souvent la part la plus coûteuse et la plus lente d’une transition : interventions physiques, parfois autorisations, calendrier propre. Les traiter en dernier est un réflexe compréhensible et une erreur, puisqu’il s’agit des supports les plus visibles et les plus durables, donc de ceux qui font persister l’ancienne identité dans le paysage. Un plan de transition sérieux les inventorie dès le départ et les échelonne, plutôt que de les découvrir au moment du solde budgétaire.",
      },
      { kind: "h3", text: "Les usages qui vous échappent" },
      {
        kind: "p",
        text: "Une partie de la diffusion de votre logo ne dépend pas de vous : annuaires professionnels, sites de partenaires, documents de financeurs, actes officiels, articles de presse, plaques posées par des tiers. Ces occurrences continueront à faire vivre l’ancienne identité longtemps après votre basculement. La seule action efficace consiste à envoyer par avance le nouveau jeu de fichiers, accompagné d’une consigne courte, aux structures qui vous relaient le plus. C’est une tâche administrative sans éclat, et c’est elle qui détermine la vitesse réelle de la transition.",
      },
      {
        kind: "h2",
        text: "Ce que coûte une refonte au-delà du travail graphique",
        id: "cout",
      },
      {
        kind: "p",
        text: "Le devis de conception ne représente qu’une partie du coût total, souvent la plus petite dans une institution installée. Ce qui pèse, ce sont les supports à refaire, les stocks à écouler ou à mettre au rebut, les interventions sur la signalétique, le temps interne consacré aux validations et à l’explication, parfois la mise à jour de documents contractuels ou réglementaires. Chiffrer ces postes au cadrage change fréquemment la décision, non pas en annulant le projet mais en orientant vers un degré plus mesuré.",
      },
      {
        kind: "ul",
        items: [
          "Les supports imprimés en stock, avec leur date de réapprovisionnement prévue.",
          "La signalétique existante, site par site.",
          "Les documents administratifs, contractuels et réglementaires qui portent le logo.",
          "Les outils numériques : site, comptes en ligne, modèles bureautiques, signatures de courriel.",
          "Le temps interne, qui n’apparaît sur aucun devis mais conditionne le calendrier.",
        ],
      },
      {
        kind: "h2",
        text: "Expliquer, surtout en interne",
        id: "expliquer",
      },
      {
        kind: "p",
        text: "Dans une institution, les membres ont un rapport d’appartenance à l’identité. Un changement imposé sans explication est vécu comme une décision technocratique et produit une résistance durable, y compris sur des supports que les membres refusent d’utiliser. Le temps consacré à expliquer la logique du changement n’est pas de la communication d’accompagnement : c’est une condition d’adoption.",
      },
      { kind: "h3", text: "Ce qu’il faut dire, et dans quel ordre" },
      {
        kind: "p",
        text: "L’explication la plus efficace commence par ce qui ne change pas, puis expose ce qui change et pourquoi, avant de préciser ce que cela implique concrètement pour chacun. Cet ordre désamorce la crainte principale, qui n’est presque jamais esthétique : les membres redoutent que la structure se détourne de ce qu’elle représentait. Montrer que le signe conserve les éléments porteurs de reconnaissance répond à cette inquiétude mieux qu’un argumentaire sur la modernité. Le registre compte également : une note factuelle passe mieux qu’un discours de marque, qui donne le sentiment qu’on vend l’institution à ses propres membres.",
      },
      {
        kind: "p",
        text: "A6 se positionne sur ce type de projet auprès d’institutions et de fédérations en Occitanie : voir [nos clients](/nos-clients) et notre offre d’[identité visuelle](/nos-services/identite-visuelle). Pour en discuter, [contactez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Faut-il changer complètement un logo institutionnel jugé vieilli ?",
        answer:
          "Rarement. Une rupture complète se justifie par un changement réel (fusion, changement de nom, transformation de mission) et non par une lassitude interne. Dans la majorité des cas, un toilettage technique ou une évolution qui conserve les éléments porteurs de reconnaissance répond mieux au besoin sans détruire le capital acquis.",
      },
      {
        question: "Combien de temps dure la transition entre deux identités ?",
        answer:
          "Le temps qu’on planifie. Sans date de basculement annoncée et sans plan d’écoulement des stocks, les deux identités cohabitent souvent plus d’un an, ce qui annule le bénéfice de la refonte. La transition se pilote support par support, en commençant par les plus visibles.",
      },
      {
        question: "Comment savoir si notre logo est réellement daté ?",
        answer:
          "En séparant le jugement esthétique de l’examen technique. Un signe qui fonctionne en petite taille, en monochrome, sur fond sombre et dans un format compact remplit son office, même s’il ne correspond plus aux tendances graphiques du moment. À l’inverse, un logo conçu avant les usages numériques présente souvent des manques objectifs, faciles à constater sans débat. Commencez par cet inventaire technique : il indique dans quelle proportion le problème relève de l’usage plutôt que du goût, et il oriente le degré de refonte à retenir.",
      },
      {
        question: "Faut-il consulter les membres avant une refonte ?",
        answer:
          "Oui pour comprendre, non pour choisir. Une consultation bien menée collecte des informations utiles : ce à quoi les membres sont attachés, ce qu’ils trouvent gênant à l’usage, ce qu’ils pensent que l’organisation représente. Soumettre les propositions finales à un vote produit en revanche un résultat prévisible, où la piste la plus proche de l’existant l’emporte presque toujours. La décision revient à l’instance compétente, à charge pour elle d’expliquer ensuite la logique retenue.",
      },
    ],
    related: [
      { label: "Création d’identité de marque : les étapes", href: "/blog/creation-identite-marque-etapes" },
      { label: "Marque institutionnelle : pourquoi les codes du privé échouent", href: "/blog/identite-marque-institutionnelle" },
      { label: "Impressions & signalétique", href: "/nos-services/impressions-signaletique" },
    ],
  },

  {
    slug: "identite-marque-institutionnelle",
    title: "Marque institutionnelle : pourquoi les codes du privé ne marchent pas",
    metaTitle: "Identité de marque institutionnelle | A6",
    metaDescription:
      "Ce qui distingue une identité de marque institutionnelle d’une marque commerciale : durabilité, neutralité, pluralité d’usages et contrainte de sobriété.",
    keyword: "identité de marque institutionnelle",
    category: "Identité de marque",
    date: "2026-04-08",
    dateLabel: "Avril 2026",
    readingMinutes: 9,
    img: "/photos/blog/identite-marque-institutionnelle-1.webp",
    imgAlt:
      "Documents de marque institutionnelle imprimés et présentés sur un bureau",
    excerpt:
      "Une marque commerciale peut être audacieuse, saisonnière, clivante. Une marque institutionnelle doit tenir dix ans devant des publics qui ne s’accordent sur rien. Ce sont deux métiers.",
    body: [
      {
        kind: "p",
        text: "Transposer les méthodes du branding commercial sur une institution produit des identités qui ne tiennent pas. Non par manque de talent, mais parce que les contraintes sont différentes en nature : une marque institutionnelle n’a pas à séduire un consommateur mais à représenter un collectif devant des publics multiples, sur une durée longue, sans jamais paraître prendre parti.",
      },
      {
        kind: "h2",
        text: "Ce qui définit une identité de marque institutionnelle",
        id: "definition",
      },
      {
        kind: "p",
        text: "Une identité institutionnelle porte un mandat, pas une promesse commerciale. Elle signale qu’une décision, un document ou une manifestation émane d’une structure légitime, et elle doit le faire de la même façon pendant des années, sur des supports que l’organisation ne maîtrise pas toujours. Cette fonction d’attestation change la question de départ : il ne s’agit pas de savoir si l’identité donne envie, mais si elle rend l’émetteur immédiatement identifiable et crédible.",
      },
      { kind: "h3", text: "Trois familles d’organisations, un même régime" },
      {
        kind: "p",
        text: "Ordres et syndicats professionnels, collectivités et structures satellites, fédérations et institutions culturelles subventionnées partagent les mêmes contraintes malgré des métiers très différents. Toutes représentent un collectif qu’elles n’ont pas choisi, rendent des comptes à des instances, et communiquent avec des moyens encadrés. Toutes voient leur identité appliquée par des personnes dont ce n’est pas le métier. C’est cette configuration, davantage que le statut juridique, qui définit le registre institutionnel.",
      },
      { kind: "h3", text: "La différence avec une marque commerciale" },
      {
        kind: "p",
        text: "Une marque commerciale cherche la préférence ; une marque institutionnelle cherche la reconnaissance. La première peut plaire fortement à une partie de son marché et laisser le reste indifférent, ce qui constitue même une stratégie efficace. La seconde ne le peut pas : son périmètre de représentation lui est donné, et elle doit valoir pour l’ensemble de celui-ci. Toutes les différences de méthode découlent de ce point unique.",
      },
      {
        kind: "h2",
        text: "Contrainte de durée : dix ans, pas une saison",
        id: "duree",
      },
      {
        kind: "p",
        text: "Une marque commerciale peut se rafraîchir tous les trois ans : c’est même un signe de vitalité. Une institution qui change d’identité tous les trois ans donne le sentiment de ne pas savoir ce qu’elle est. Cela élimine d’emblée les partis pris trop marqués par une époque : une typographie très datée, un effet graphique à la mode, une palette liée à une tendance.",
      },
      {
        kind: "quote",
        text: "Le bon test d’une identité institutionnelle : aurait-elle pu être conçue il y a dix ans, et pourra-t-elle être défendue dans dix ans ?",
      },
      { kind: "h3", text: "Les marqueurs d’époque" },
      {
        kind: "p",
        text: "Certains partis pris datent un logo aussi sûrement qu’une signature : effets de volume, dégradés élaborés, typographies très caractéristiques d’une mode, compositions calées sur un format d’écran particulier. Ce n’est pas une question de goût mais de mécanique, puisque ces éléments renvoient à une technique de production repérable, donc à une période. Une identité institutionnelle a intérêt à les éviter, non par timidité, mais parce qu’elle sera encore utilisée quand ces codes se liront comme la marque d’une décennie précise.",
      },
      { kind: "h3", text: "Ce qui vieillit bien" },
      {
        kind: "p",
        text: "Les identités institutionnelles qui traversent le temps reposent en général sur peu d’éléments et sur des rapports justes : une forme simple, une typographie solide, un contraste net, un système de composition régulier. Elles supportent des ajustements successifs sans changer d’allure, ce qui autorise des toilettages discrets plutôt que des refontes complètes. La logique est économique autant qu’esthétique : une identité conçue pour évoluer par retouches coûte, sur vingt ans, bien moins qu’une identité qu’il faut remplacer deux fois.",
      },
      {
        kind: "h2",
        text: "Contrainte de neutralité : représenter sans arbitrer",
        id: "neutralite",
      },
      {
        kind: "p",
        text: "Un ordre professionnel représente des membres aux intérêts divergents ; une collectivité représente des habitants aux opinions opposées. L’identité ne peut donc pas exprimer une préférence : ni esthétique tranchée qui exclut une partie du corps représenté, ni référence symbolique appropriable par un camp. Cette contrainte est frustrante en conception, mais elle est constitutive du mandat.",
      },
      { kind: "h3", text: "Le piège de la référence territoriale" },
      {
        kind: "p",
        text: "La tentation est forte, pour une collectivité ou une structure régionale, de faire figurer un élément du territoire : silhouette d’un monument, relief, motif local. Ces références rassurent en réunion et posent deux problèmes à l’usage. Elles saturent le champ, puisque les organisations voisines ont la même idée, ce qui produit des identités interchangeables. Et elles désignent une partie du territoire au détriment des autres, ce qui ne passe jamais inaperçu auprès des habitants concernés.",
      },
      { kind: "h3", text: "La couleur n’est pas un choix neutre" },
      {
        kind: "p",
        text: "Dans un contexte institutionnel, certaines couleurs portent une lecture politique, confessionnelle ou concurrentielle dont la conception doit tenir compte. Une teinte peut évoquer une famille politique, une autre rappeler la charte d’une collectivité voisine ou d’une tutelle, une troisième entrer en conflit avec un dispositif national existant. Vérifier ces proximités avant de présenter une piste évite un débat qui, une fois ouvert en séance, se règle rarement de façon rationnelle.",
      },
      {
        kind: "h2",
        text: "Contrainte d’usage : des utilisateurs très différents",
        id: "usages",
      },
      {
        kind: "p",
        text: "Une marque commerciale est appliquée par des professionnels du marketing. Une identité institutionnelle est appliquée par des juristes, des agents administratifs, des élus, des bénévoles, des partenaires. Elle doit donc résister à des usages non experts : un logo qui ne fonctionne que bien centré dans une composition maîtrisée sera déformé dès la première utilisation.",
      },
      {
        kind: "ul",
        items: [
          "Une seule version évidente pour l’usage courant, les variantes réservées aux cas particuliers.",
          "Une lisibilité qui tient dans un document bureautique, pas seulement dans une mise en page soignée.",
          "Des règles simples : moins de règles bien respectées valent mieux qu’un système complet ignoré.",
        ],
      },
      { kind: "h3", text: "Le document bureautique comme cas de référence" },
      {
        kind: "p",
        text: "Un test utile consiste à concevoir l’identité en pensant d’abord au courrier et à la note interne, produits en masse dans un traitement de texte, plutôt qu’à l’affiche. Si le système tient dans cet environnement pauvre, avec une police disponible partout et une mise en page sommaire, il tiendra ailleurs. L’inverse n’est pas vrai : une identité conçue pour des supports maîtrisés se dégrade dès qu’elle atteint le poste de travail d’un agent. Or, dans la plupart des institutions, ce sont ces documents ordinaires qui constituent l’essentiel de la présence visuelle.",
      },
      {
        kind: "h2",
        text: "Contrainte de sobriété : la précision plutôt que l’effet",
        id: "sobriete",
      },
      {
        kind: "p",
        text: "La sobriété institutionnelle est souvent confondue avec la fadeur, ce qui produit des identités ennuyeuses qu’on justifie par le registre. C’est une erreur : la sobriété est une exigence de précision, pas une absence de parti pris. Une identité institutionnelle réussie a un caractère net : simplement, ce caractère s’exprime par la justesse des proportions, la qualité typographique et la cohérence du système, non par un effet spectaculaire.",
      },
      { kind: "h3", text: "Sobre ne veut pas dire interchangeable" },
      {
        kind: "p",
        text: "L’argument de la sobriété sert parfois à justifier l’absence de décision : un cartouche typographique sans caractère, une couleur retenue par défaut, aucune règle de composition. Le résultat est une identité que rien ne distingue de celle de la structure voisine, c’est-à-dire exactement l’échec que l’on cherchait à éviter. Le caractère se construit par des choix précis et peu nombreux : une typographie identifiable, un rapport d’échelle constant, un traitement de l’image reconnaissable. Ces choix se défendent devant une instance parce qu’ils s’expliquent, contrairement à un effet graphique qui ne se justifie que par le goût de son auteur.",
      },
      {
        kind: "h2",
        text: "Les cas où le registre institutionnel se discute",
        id: "limites",
      },
      {
        kind: "p",
        text: "Le régime décrit ici vaut pour l’identité principale, celle qui engage la structure. Il ne s’applique pas mécaniquement à tout ce qu’elle produit. Une manifestation publique, un festival, une campagne de recrutement ou un programme adressé à un public jeune peuvent assumer un registre plus libre, à condition que le lien avec l’émetteur reste explicite et que la marque principale conserve son rôle de caution.",
      },
      { kind: "h3", text: "Marques d’événement et sous-marques" },
      {
        kind: "p",
        text: "Une structure institutionnelle organise souvent des rendez-vous récurrents qui ont leur nom et leur public. Leur donner une expression distincte est légitime, parfois nécessaire pour toucher au-delà du cercle habituel. Le point à trancher n’est pas l’autorisation mais l’architecture : ce qui relève d’une simple déclinaison de l’identité mère, ce qui mérite une identité liée, et ce qui devient une marque autonome. Sans cette décision, les sous-marques prolifèrent et finissent par rendre la structure principale invisible, ce qui produit précisément le sentiment de dispersion que la refonte suivante cherchera à corriger.",
      },
      {
        kind: "p",
        text: "Ces arbitrages relèvent de la stratégie autant que du graphisme, et rejoignent les questions traitées dans [les enjeux de la communication institutionnelle](/blog/communication-institutionnelle-enjeux).",
      },
      {
        kind: "h2",
        text: "Ce qui reste commun avec le privé",
        id: "commun",
      },
      {
        kind: "p",
        text: "La rigueur de méthode. Cadrage avant conception, direction validée avant dessin, test en situation réelle, outillage du déploiement : ces étapes valent dans les deux univers, et les négliger produit les mêmes échecs. Le déroulé détaillé est décrit dans [les étapes réelles d’une création d’identité](/blog/creation-identite-marque-etapes).",
      },
      {
        kind: "p",
        text: "C’est le registre dans lequel A6 se positionne, auprès d’institutions, de collectivités et de structures culturelles en Occitanie : voir [nos clients](/nos-clients) ou [écrivez-nous](/contact).",
      },
    ],
    faq: [
      {
        question: "Pourquoi une identité institutionnelle doit-elle être sobre ?",
        answer:
          "Parce qu’elle doit tenir longtemps et représenter un collectif aux opinions divergentes. Un parti pris esthétique très marqué vieillit vite et peut exclure une partie du corps représenté. Sobriété ne signifie pas fadeur : elle impose de faire porter le caractère par la justesse des proportions et la qualité typographique plutôt que par un effet visuel.",
      },
      {
        question: "À quelle fréquence une institution peut-elle changer d’identité ?",
        answer:
          "Beaucoup moins souvent qu’une marque commerciale. Un changement tous les trois ans, banal dans le privé, donne à une institution l’image de ne pas savoir ce qu’elle est. Une identité institutionnelle se conçoit pour une décennie, ce qui écarte les partis pris trop liés à une tendance graphique.",
      },
      {
        question: "Comment défendre une identité sobre devant une instance qui la trouve trop discrète ?",
        answer:
          "En ramenant la discussion aux usages plutôt qu’à l’impression générale. Présenter le signe appliqué à un courrier, à une convocation, à un panneau et à une vignette numérique montre ce que le système produit réellement, ce qu’une planche de présentation ne montre jamais. Il est également utile de rappeler la durée visée : une identité conçue pour dix ans ne se juge pas sur l’effet qu’elle produit en première présentation. La comparaison avec les structures du même champ objective enfin la question de la distinction, qui est le vrai sujet derrière la remarque.",
      },
      {
        question: "Faut-il tester l’identité auprès du public avant de la valider ?",
        answer:
          "Un test apporte des informations utiles s’il porte sur les bonnes questions. Demander à des publics extérieurs ce qu’ils préfèrent ne renseigne sur rien, puisque la préférence spontanée va toujours au plus familier. Demander en revanche ce que le signe évoque, quelle structure il pourrait désigner, ou s’il se confond avec une autre organisation connue produit des réponses exploitables. Le test sert à repérer les contresens et les confusions, pas à désigner un gagnant.",
      },
    ],
    related: [
      { label: "Refondre le logo d’une institution", href: "/blog/refonte-logo-institution" },
      { label: "Communication institutionnelle : les enjeux", href: "/blog/communication-institutionnelle-enjeux" },
      { label: "Notre offre d’identité visuelle", href: "/nos-services/identite-visuelle" },
    ],
  },
];
