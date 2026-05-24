import type { Resource } from '../types/resource'

// Fichier genere par scripts/generate-markdown-resources.mjs.
// Ne pas modifier manuellement: corriger les fichiers Markdown sources puis relancer npm run generate:resources.
export const generatedMarkdownResources: Resource[] = [
  {
    "id": "evaluation-b1-b2-vie-etudiante",
    "title": "Evaluation contextualisee: organiser sa vie etudiante",
    "summary": "Evaluation B1/B2 fictive avec exercices courts, production finale et bareme explicite.",
    "level": "mixte",
    "durationMinutes": 75,
    "durationCategory": "60_120_min",
    "mainSkill": "expression_ecrite",
    "secondarySkills": [
      "comprehension_ecrite",
      "grammaire",
      "methodologie"
    ],
    "theme": "Vie etudiante",
    "lexicalThemes": [
      "campus",
      "organisation",
      "services universitaires"
    ],
    "grammarPoints": [
      "cause et consequence",
      "conseil",
      "connecteurs"
    ],
    "resourceType": "evaluation",
    "resourceTemplate": "evaluation",
    "activityFormat": "individuel",
    "classroomMode": "presentiel",
    "status": "brouillon",
    "reuseReadiness": "pret_a_tester",
    "license": "CC_BY_NC_SA",
    "licenseNotes": "Contenu original de demonstration. Aucun document Drive ou support authentique n'est repris. Licence proposee: CC BY-NC-SA.",
    "authors": [
      "FLE Commons Lab demo"
    ],
    "tags": [
      "evaluation",
      "B1-B2",
      "vie etudiante"
    ],
    "materialNeeded": [
      "sujet imprime",
      "bareme professeur"
    ],
    "sourceType": "document_cree",
    "teacherPreparationLevel": "moyen",
    "createdAt": "2026-05-24",
    "updatedAt": "2026-05-24",
    "content": {
      "objectives": {
        "title": "Objectifs",
        "items": [
          "Evaluer la comprehension d'un court document pratique fictif.",
          "Reutiliser des connecteurs de cause et de consequence.",
          "Produire un message de conseil structure."
        ]
      },
      "prerequisites": {
        "title": "Pre-requis",
        "items": [
          "Savoir formuler un conseil avec `il faut`, `tu peux`, `je te conseille de`.",
          "Connaitre quelques connecteurs: parce que, donc, c'est pourquoi, grace a."
        ]
      },
      "lessonPlan": {
        "title": "Deroule",
        "items": [
          "Distribuer le sujet et rappeler la duree.",
          "Laisser 15 minutes pour la comprehension ecrite.",
          "Laisser 20 minutes pour les exercices de langue.",
          "Laisser 35 minutes pour la production finale.",
          "Recuperer les copies et corriger avec le bareme."
        ]
      },
      "studentInstructions": {
        "title": "Support etudiant",
        "items": [
          "Document fictif:\n> La Maison des etudiants propose cette semaine trois ateliers: organiser son emploi du temps, trouver un partenaire de conversation et decouvrir les services de la bibliotheque. Les inscriptions sont gratuites, mais les places sont limitees.\nExercice 1: repondez en une phrase.\nCombien d'ateliers sont proposes ?\nPourquoi faut-il s'inscrire rapidement ?\nQuel atelier peut aider un etudiant qui veut parler davantage en francais ?\nExercice 2: completez avec un connecteur logique.\nLes places sont limitees, ___ il faut s'inscrire vite.\nL'atelier est utile ___ il aide a mieux organiser la semaine.\nLes inscriptions sont gratuites, ___ tous les etudiants peuvent participer.\nProduction finale:\nUn nouvel etudiant vous ecrit: il est fatigue, il ne connait personne et il oublie souvent ses rendez-vous. Repondez-lui en 120 a 150 mots. Donnez trois conseils et expliquez pourquoi."
        ]
      },
      "teacherGuide": {
        "title": "Guide professeur",
        "items": [
          "Preciser que le document est fictif et original.",
          "Ne pas evaluer les informations personnelles des apprenants.",
          "Accepter plusieurs connecteurs si le lien logique est correct.",
          "Pour la production, valoriser la structure et la pertinence des conseils."
        ]
      },
      "answerKey": {
        "title": "Corrige",
        "items": [
          "Exercice 1:\nTrois ateliers sont proposes.\nIl faut s'inscrire rapidement parce que les places sont limitees.\nL'atelier pour trouver un partenaire de conversation.\nExercice 2, reponses possibles:\ndonc / c'est pourquoi\nparce qu'\ndonc / c'est pourquoi\nBareme propose sur 20 points:\ncomprehension du document: 5 points;\nconnecteurs et correction grammaticale: 5 points;\nproduction finale: 8 points;\nlisibilite et respect de la consigne: 2 points."
        ]
      },
      "variants": {
        "title": "Variantes",
        "items": [
          "Variante formative: faire corriger la production avec une grille en binomes.",
          "Variante B1: reduire la production a 90 mots.",
          "Variante B2: demander un ton plus nuance et deux connecteurs supplementaires."
        ]
      },
      "usageNotes": {
        "title": "Retours d'usage possibles",
        "items": [
          "La duree de 75 minutes est-elle realiste ?",
          "Le bareme distingue-t-il assez clairement langue, contenu et organisation ?"
        ]
      },
      "techNotes": {
        "title": "Notes numeriques / IA",
        "items": [
          "Aucun outil numerique ou IA n'est requis. Si cette evaluation devient sommative, preciser les conditions d'usage des outils de correction ou d'aide a la redaction."
        ]
      },
      "versionHistory": {
        "title": "Historique des versions",
        "items": [
          "0.1: exemple fictif cree pour tester le gabarit d'evaluation contextualisee."
        ]
      }
    },
    "versions": [
      {
        "id": "evaluation-b1-b2-vie-etudiante-generated-v01",
        "versionNumber": "0.1",
        "label": "generation depuis Markdown",
        "changelog": [
          "Ressource generee automatiquement depuis examples/resources-markdown/evaluation-b1-b2-vie-etudiante.md."
        ],
        "createdAt": "2026-05-24",
        "createdBy": "FLE Commons Lab demo",
        "status": "brouillon"
      }
    ],
    "reviewSummary": {
      "clarityScore": 3,
      "reusabilityScore": 3,
      "progressionScore": 3,
      "languageReliabilityScore": 3,
      "digitalReadinessScore": 2,
      "aiReadinessScore": 1,
      "strengths": [
        "Structure Markdown valide",
        "Sections pedagogiques identifiables"
      ],
      "issues": [
        "Ressource generee depuis un fichier source; relecture enseignante requise"
      ],
      "recommendations": [
        "Verifier le niveau, le corrige et les droits avant publication comme fiche etalon"
      ]
    },
    "techMetadata": {
      "usesDigitalTool": false,
      "digitalTools": [],
      "digitalFormat": "document_imprimable",
      "requiresInternet": false,
      "requiresAccount": false,
      "deviceRequirements": [],
      "technicalDifficulty": "aucune",
      "privacyConsiderations": [
        "Ne pas demander de donnees personnelles reelles dans la production finale."
      ]
    },
    "aiMetadata": {
      "usesAI": false,
      "aiUseCase": "aucun",
      "aiAssistanceLevel": "aucun",
      "suggestedTools": [],
      "teacherControlRequired": true,
      "studentFacingAI": false,
      "risks": [],
      "safeguards": [
        "Interdire l'aide automatique pendant l'evaluation si elle est sommative."
      ]
    }
  },
  {
    "id": "grammaire-b1-b2-medias-nominalisation",
    "title": "Transformer une information en titre de presse",
    "summary": "Sequence grammaticale inductive B1/B2 pour observer la nominalisation et reformuler des informations courtes.",
    "level": "mixte",
    "durationMinutes": 90,
    "durationCategory": "60_120_min",
    "mainSkill": "grammaire",
    "secondarySkills": [
      "lexique",
      "expression_ecrite"
    ],
    "theme": "Medias",
    "lexicalThemes": [
      "presse",
      "vie locale",
      "actualite"
    ],
    "grammarPoints": [
      "nominalisation",
      "titres de presse",
      "articles contractes"
    ],
    "resourceType": "sequence",
    "resourceTemplate": "grammaire_inductive",
    "activityFormat": "petits_groupes",
    "classroomMode": "presentiel",
    "status": "brouillon",
    "reuseReadiness": "pret_a_tester",
    "license": "CC_BY_SA",
    "licenseNotes": "Contenu original de demonstration. Aucun texte issu d'un document externe ou du corpus Drive n'est repris. Licence proposee: CC BY-SA.",
    "authors": [
      "FLE Commons Lab demo"
    ],
    "tags": [
      "grammaire",
      "B1-B2",
      "medias",
      "nominalisation"
    ],
    "materialNeeded": [
      "fiche apprenant",
      "tableau"
    ],
    "sourceType": "document_cree",
    "teacherPreparationLevel": "moyen",
    "createdAt": "2026-05-24",
    "updatedAt": "2026-05-24",
    "content": {
      "objectives": {
        "title": "Objectifs",
        "items": [
          "Observer comment une phrase verbale peut devenir un groupe nominal.",
          "Reperer les transformations utiles pour ecrire un titre court.",
          "Reformuler des informations fictives de maniere concise."
        ]
      },
      "prerequisites": {
        "title": "Pre-requis",
        "items": [
          "Connaitre les noms d'action frequents: ouverture, fermeture, augmentation, baisse, creation.",
          "Identifier le verbe principal d'une phrase simple."
        ]
      },
      "lessonPlan": {
        "title": "Deroule",
        "items": [
          "Lire le corpus d'observation et souligner les verbes.",
          "Associer chaque phrase a un titre nominalise.",
          "Completer une regle de formation avec la classe.",
          "Transformer cinq informations fictives en titres.",
          "Rediger trois breves pour un journal de classe."
        ]
      },
      "studentInstructions": {
        "title": "Support etudiant",
        "items": [
          "Associez les phrases et les titres, puis repondez.\nQuel verbe disparait dans le titre ?\nQuel nom exprime l'action ?\nQuels mots sont ajoutes avec `de`, `du`, `des` ou `par` ?\nTransformez ensuite:\nLe restaurant universitaire augmente ses horaires le soir.\nLes etudiants creent un club de conversation.\nLa mairie installe de nouveaux arceaux pour les velos."
        ]
      },
      "teacherGuide": {
        "title": "Guide professeur",
        "items": [
          "Faire remarquer que plusieurs titres sont possibles.",
          "Ne pas exiger une nominalisation parfaite si le sens reste clair.",
          "Insister sur le lien entre concision journalistique et lisibilite.",
          "Ajouter un temps de comparaison entre productions de groupes."
        ]
      },
      "answerKey": {
        "title": "Corrige",
        "items": [
          "Reponses possibles:\nAugmentation des horaires du restaurant universitaire le soir.\nCreation d'un club de conversation par les etudiants.\nInstallation de nouveaux arceaux pour les velos par la mairie.\nRegle a construire:\nOn peut transformer certains verbes en noms.\nLe complement est souvent introduit par `de`, `du`, `des` ou `par`.\nLe titre doit rester clair et ne pas supprimer une information essentielle."
        ]
      },
      "variants": {
        "title": "Variantes",
        "items": [
          "Variante B1: proposer une liste de noms d'action.",
          "Variante B2: demander une breve de cinq lignes apres chaque titre.",
          "Variante sans presse: transformer des annonces administratives fictives."
        ]
      },
      "usageNotes": {
        "title": "Retours d'usage possibles",
        "items": [
          "Les apprenants distinguent-ils bien phrase complete et titre nominal ?",
          "Les transformations restent-elles comprehensibles pour un lecteur absent ?"
        ]
      },
      "techNotes": {
        "title": "Notes numeriques / IA",
        "items": [
          "Aucun outil numerique ou IA n'est necessaire. Une future variante pourrait comparer des titres generes automatiquement, mais uniquement avec des exemples fictifs et une verification enseignante."
        ]
      },
      "versionHistory": {
        "title": "Historique des versions",
        "items": [
          "0.1: exemple fictif cree pour tester le gabarit de sequence grammaticale inductive longue."
        ]
      }
    },
    "versions": [
      {
        "id": "grammaire-b1-b2-medias-nominalisation-generated-v01",
        "versionNumber": "0.1",
        "label": "generation depuis Markdown",
        "changelog": [
          "Ressource generee automatiquement depuis examples/resources-markdown/grammaire-b1-b2-medias-nominalisation.md."
        ],
        "createdAt": "2026-05-24",
        "createdBy": "FLE Commons Lab demo",
        "status": "brouillon"
      }
    ],
    "reviewSummary": {
      "clarityScore": 3,
      "reusabilityScore": 3,
      "progressionScore": 3,
      "languageReliabilityScore": 3,
      "digitalReadinessScore": 2,
      "aiReadinessScore": 1,
      "strengths": [
        "Structure Markdown valide",
        "Sections pedagogiques identifiables"
      ],
      "issues": [
        "Ressource generee depuis un fichier source; relecture enseignante requise"
      ],
      "recommendations": [
        "Verifier le niveau, le corrige et les droits avant publication comme fiche etalon"
      ]
    },
    "techMetadata": {
      "usesDigitalTool": false,
      "digitalTools": [],
      "digitalFormat": "document_imprimable",
      "requiresInternet": false,
      "requiresAccount": false,
      "deviceRequirements": [],
      "technicalDifficulty": "aucune",
      "privacyConsiderations": []
    },
    "aiMetadata": {
      "usesAI": false,
      "aiUseCase": "aucun",
      "aiAssistanceLevel": "aucun",
      "suggestedTools": [],
      "teacherControlRequired": true,
      "studentFacingAI": false,
      "risks": [],
      "safeguards": [
        "Utiliser uniquement des exemples inventes ou libres."
      ]
    }
  },
  {
    "id": "grammaire-b1-plus-pronoms-cod-coi-enquete",
    "title": "Les pronoms COD et COI dans une enquete",
    "summary": "Fiche de grammaire guidee pour distinguer et employer les pronoms COD et COI dans un scenario d'enquete situe dans une ecole de langue. Niveau vise: B1+ vers B2.",
    "level": "B1",
    "durationMinutes": 90,
    "durationCategory": "60_120_min",
    "mainSkill": "grammaire",
    "secondarySkills": [
      "comprehension_ecrite",
      "interaction_orale"
    ],
    "theme": "Enquete",
    "lexicalThemes": [
      "enquete",
      "ecole de langue",
      "objets perdus"
    ],
    "grammarPoints": [
      "pronoms COD",
      "pronoms COI",
      "le la l les",
      "lui leur"
    ],
    "resourceType": "fiche",
    "resourceTemplate": "grammaire_inductive",
    "activityFormat": "binomes",
    "classroomMode": "presentiel",
    "status": "brouillon",
    "reuseReadiness": "a_completer",
    "license": "CC_BY_SA",
    "licenseNotes": "Source de depart: support de cours contextualise ISPA, groupe B1+, theme de l'enquete.\nContenu de cette version Markdown: normalisation et reecriture pour Laforge. Licence proposee: CC BY-SA, a confirmer par l'auteur avant publication publique.\nAucune source externe protegee n'est reproduite dans cette version. Les noms, lieux et objets peuvent etre adaptes pour une reutilisation hors contexte ISPA.",
    "authors": [
      "Francois Carbonnier"
    ],
    "tags": [
      "pronoms",
      "COD",
      "COI",
      "enquete",
      "grammaire B1+"
    ],
    "materialNeeded": [
      "fiche apprenant",
      "tableau"
    ],
    "sourceType": "document_cree",
    "teacherPreparationLevel": "moyen",
    "createdAt": "2026-05-24",
    "updatedAt": "2026-05-24",
    "content": {
      "objectives": {
        "title": "Objectifs",
        "items": [
          "Reconnaitre un complement d'objet direct et un complement d'objet indirect.",
          "Choisir entre `le`, `la`, `l'`, `les`, `lui` et `leur`.",
          "Transformer des phrases avec un pronom COD ou COI.",
          "Eviter la confusion entre `je le vois` et `je lui parle`.",
          "Reemployer les pronoms dans un court scenario d'enquete."
        ]
      },
      "prerequisites": {
        "title": "Pre-requis",
        "items": [
          "Connaitre les formes de base des pronoms COD et COI.",
          "Savoir identifier un verbe et son complement.",
          "Avoir deja rencontre des verbes frequents avec ou sans preposition: voir, chercher, appeler, parler a, demander a, telephoner a."
        ]
      },
      "lessonPlan": {
        "title": "Deroule",
        "items": [
          "Durée indicative: 90 minutes.",
          "Mise en situation: une enquete rapide autour d'un parapluie disparu dans une ecole de langue.",
          "Lecture du court recit d'observation.",
          "Reperage des pronoms dans le recit et identification de ce qu'ils remplacent.",
          "Construction guidee de la distinction COD / COI.",
          "Exercice 1: remplacer un COD par `le`, `la`, `l'` ou `les`.",
          "Exercice 2: remplacer un COI par `lui` ou `leur`.",
          "Exercice 3: choisir entre pronom COD et pronom COI.",
          "Correction guidee avec justification orale.",
          "Mini-reemploi: dialogue d'enquete en binomes ou courte production ecrite."
        ]
      },
      "studentInstructions": {
        "title": "Support etudiant",
        "items": [
          "Situation",
          "Cette semaine, a l'ecole de langue d'Amiens, la classe travaille sur le theme de l'enquete. Dans le hall, Chen cherche son parapluie bleu. Il l'a pose pres de la porte avant la pause, mais il ne le retrouve plus.",
          "La responsable de l'accueil l'aide. Elle interroge deux etudiants. Mila dit qu'elle a vu le parapluie pres du panneau d'affichage. Karim explique qu'il a parle a Chen pendant la pause, mais qu'il ne sait pas ou est l'objet. Finalement, la surveillante retrouve le parapluie dans la salle 204. Elle le rapporte a Chen et lui conseille d'ecrire son nom sur l'etiquette.",
          "A. Questions de reperage",
          "Relevez tous les pronoms personnels complements dans le recit.",
          "Pour chaque pronom, indiquez le mot ou le groupe de mots qu'il remplace.",
          "Classez les pronoms en deux colonnes:",
          "pronoms qui remplacent une chose ou une personne directement;",
          "pronoms qui remplacent une personne introduite par `a`.",
          "Completez la regle:",
          "`le`, `la`, `l'`, `les` remplacent generalement un complement d'objet direct.",
          "`lui`, `leur` remplacent generalement un complement introduit par `a` quand il s'agit d'une personne.",
          "B. Rappel guide",
          "Observez la difference:",
          "Je vois Chen. -> Je le vois.",
          "Je parle a Chen. -> Je lui parle.",
          "La responsable cherche le parapluie. -> Elle le cherche.",
          "La responsable telephone aux etudiants. -> Elle leur telephone.",
          "Question utile: le verbe est-il construit directement ou avec `a` ?",
          "Verbes utiles",
          "voir quelqu'un / quelque chose",
          "chercher quelqu'un / quelque chose",
          "appeler quelqu'un",
          "interroger quelqu'un",
          "parler a quelqu'un",
          "repondre a quelqu'un",
          "telephoner a quelqu'un",
          "demander quelque chose a quelqu'un",
          "donner quelque chose a quelqu'un",
          "C. Exercice 1: remplacer par un pronom COD",
          "Transformez les phrases.",
          "La responsable cherche le parapluie bleu.",
          "Chen regarde la camera du hall.",
          "Mila lit le message de la surveillante.",
          "Karim ferme la porte de la salle.",
          "Les etudiants observent les objets trouves.",
          "La surveillante ouvre le placard.",
          "Chen retrouve son etiquette.",
          "La classe ecoute le temoin.",
          "La responsable note les indices.",
          "Karim connait la salle 204.",
          "D. Exercice 2: remplacer par un pronom COI",
          "Transformez les phrases.",
          "La responsable parle a Chen.",
          "Chen repond a la surveillante.",
          "Mila telephone aux etudiants.",
          "Karim ecrit a la responsable.",
          "La surveillante demande une precision a Mila.",
          "Chen explique la situation aux camarades.",
          "La responsable conseille a Chen d'ecrire son nom.",
          "Les etudiants obeissent a la surveillante.",
          "Karim sourit a ses amis.",
          "La responsable donne une fiche aux temoins.",
          "E. Exercice 3: choisir entre COD et COI",
          "Completez avec `le`, `la`, `l'`, `les`, `lui` ou `leur`.",
          "Tu vois Chen ? Oui, je ___ vois.",
          "Tu parles a Chen ? Oui, je ___ parle.",
          "La responsable cherche le parapluie ? Oui, elle ___ cherche.",
          "Chen appelle la surveillante ? Oui, il ___ appelle.",
          "Chen repond a la surveillante ? Oui, il ___ repond.",
          "Mila connait les temoins ? Oui, elle ___ connait.",
          "Karim explique l'histoire aux etudiants ? Oui, il ___ explique l'histoire.",
          "La responsable interroge Karim ? Oui, elle ___ interroge.",
          "La surveillante donne le parapluie a Chen ? Oui, elle ___ donne le parapluie.",
          "Chen remercie la responsable ? Oui, il ___ remercie.",
          "La responsable parle aux temoins ? Oui, elle ___ parle.",
          "Chen retrouve son parapluie ? Oui, il ___ retrouve.",
          "F. Mini-reemploi",
          "En binomes, ecrivez ou jouez un court dialogue d'enquete.",
          "Votre dialogue doit contenir:",
          "deux pronoms COD;",
          "deux pronoms COI;",
          "une phrase au passe compose;",
          "au moins un objet disparu ou retrouve.",
          "Exemple de situation possible: un badge, un cahier, une cle USB ou un manteau a disparu dans l'ecole."
        ]
      },
      "teacherGuide": {
        "title": "Guide professeur",
        "items": [
          "Intention pedagogique",
          "La fiche vise a stabiliser une distinction souvent fragile au niveau B1+/B2: remplacer un complement direct par `le`, `la`, `l'`, `les`, ou un complement introduit par `a` par `lui`, `leur`.",
          "Le scenario d'enquete sert a donner une coherence narrative aux transformations, sans traiter tous les pronoms personnels du document-source.",
          "Public conseille",
          "Public FLE B1 solide, B1+ ou debut B2. La ressource peut convenir a des jeunes adultes en centre de langue, en parcours preparatoire aux etudes ou en francais general renforce.",
          "Duree et formats possibles",
          "Version courte: 60 minutes sans mini-reemploi developpe.",
          "Version complete: 90 minutes avec mini-reemploi et correction guidee.",
          "Points de vigilance",
          "Ne pas reduire la distinction COD/COI a la question \"personne ou chose\": `Je vois Chen` -> `je le vois`, mais `je parle a Chen` -> `je lui parle`.",
          "Faire verbaliser la construction du verbe: chercher quelque chose, parler a quelqu'un, repondre a quelqu'un.",
          "Eviter d'introduire tout de suite `y`, `en`, l'imperatif ou la double pronominalisation.",
          "Rappeler que cette fiche est extraite d'un support plus large: elle ne traite que COD/COI.",
          "Gestion possible en classe",
          "Lecture individuelle du recit, puis reperage en binomes.",
          "Mise en commun au tableau en deux colonnes: COD / COI.",
          "Correction des exercices par justification: \"Pourquoi `le` ? Pourquoi `lui` ?\"",
          "Mini-reemploi oral en fin de seance, pour eviter une fiche uniquement mecanique.",
          "Conseils de correction",
          "Demander aux apprenants de retrouver la phrase complete avant de choisir le pronom.",
          "Pour les erreurs frequentes, faire comparer:",
          "Je le vois.",
          "Je lui parle.",
          "Je l'appelle.",
          "Je lui telephone.",
          "La ressource vient d'un support contextualise ISPA/Amiens, mais elle peut etre utilisee dans tout centre de langue apres adaptation des noms, du lieu et de l'objet disparu."
        ]
      },
      "answerKey": {
        "title": "Corrige",
        "items": [
          "A. Questions de reperage",
          "Pronoms dans le recit:",
          "`l'` dans `Il l'a pose`: remplace `son parapluie bleu` ou `le parapluie bleu`; COD.",
          "`le` dans `il ne le retrouve plus`: remplace `son parapluie bleu`; COD.",
          "`l'` dans `l'aide`: remplace `Chen`; COD.",
          "`le` dans `Elle le rapporte`: remplace `le parapluie` ou `l'objet`; COD.",
          "`lui` dans `lui conseille`: remplace `a Chen`; COI.",
          "Remarque: `l'objet` dans `retrouve l'objet` n'est pas un pronom; c'est un groupe nominal.",
          "C. Exercice 1: COD",
          "La responsable le cherche.",
          "Chen la regarde.",
          "Mila le lit.",
          "Karim la ferme.",
          "Les etudiants les observent.",
          "La surveillante l'ouvre.",
          "Chen la retrouve.",
          "La classe l'ecoute.",
          "La responsable les note.",
          "Karim la connait.",
          "D. Exercice 2: COI",
          "La responsable lui parle.",
          "Chen lui repond.",
          "Mila leur telephone.",
          "Karim lui ecrit.",
          "La surveillante lui demande une precision.",
          "Chen leur explique la situation.",
          "La responsable lui conseille d'ecrire son nom.",
          "Les etudiants lui obeissent.",
          "Karim leur sourit.",
          "La responsable leur donne une fiche.",
          "E. Exercice 3: choix COD / COI",
          "Oui, je le vois.",
          "Oui, je lui parle.",
          "Oui, elle le cherche.",
          "Oui, il l'appelle.",
          "Oui, il lui repond.",
          "Oui, elle les connait.",
          "Oui, il leur explique l'histoire.",
          "Oui, elle l'interroge.",
          "Oui, elle lui donne le parapluie.",
          "Oui, il la remercie.",
          "Oui, elle leur parle.",
          "Oui, il le retrouve.",
          "Justifications utiles pour les cas sensibles:",
          "`appeler quelqu'un` se construit directement: `il l'appelle`.",
          "`telephoner a quelqu'un` se construit avec `a`: `elle leur telephone`.",
          "`repondre a quelqu'un` se construit avec `a`: `il lui repond`.",
          "`demander quelque chose a quelqu'un`: si on remplace la personne, on utilise `lui` ou `leur`.",
          "`donner quelque chose a quelqu'un`: si on remplace la personne, on utilise `lui` ou `leur`.",
          "F. Mini-reemploi",
          "Reponses ouvertes. Verifier:",
          "au moins deux pronoms COD corrects;",
          "au moins deux pronoms COI corrects;",
          "une phrase au passe compose;",
          "un dialogue coherent avec le scenario d'enquete.",
          "Exemple acceptable:",
          "> Tu as vu mon cahier ?\n> Oui, je l'ai vu dans la salle 204. J'ai parle a Mila et je lui ai demande si elle le connaissait. Elle m'a dit qu'elle l'avait donne a Karim, puis elle lui a envoye un message."
        ]
      },
      "variants": {
        "title": "Variantes et adaptations possibles",
        "items": [
          "Version plus guidee pour B1 fragile: fournir la liste des verbes avec leur construction (`chercher quelque chose`, `parler a quelqu'un`, `telephoner a quelqu'un`).\nVersion plus autonome pour B1+/B2: supprimer le rappel guide et demander aux apprenants de formuler eux-memes la regle.\nVersion generique sans reference a l'ISPA: remplacer Amiens par `une ville`, l'ecole de langue par `un centre de formation`, Chen par un prenom au choix et le parapluie par un autre objet.\nModele de variables: `[ville]`, `[centre de langue]`, `[prenom]`, `[objet disparu]`, `[lieu du centre]`.\nVariante orale: transformer les exercices en cartes \"temoin / enqueteur\"."
        ]
      },
      "usageNotes": {
        "title": "Retours d'usage",
        "items": [
          "A completer apres test en classe:",
          "duree reelle;",
          "difficultes observees;",
          "phrases a modifier;",
          "reussite du mini-reemploi;",
          "besoin eventuel d'une fiche separee sur `y` et `en`.",
          "",
          "Notes de normalisation",
          "Cette fiche est une premiere extraction depuis une source-mere Word contextualisee. Elle ne traite pas les autres blocs du document-source: `y/en`, pronoms toniques, infinitif, imperatif, double pronominalisation ou pronom neutre `le`.",
          "Cette ressource est techniquement marquee comme `brouillon` dans le frontmatter pour rester compatible avec le validateur actuel, mais son statut pedagogique est: en normalisation / partageable avec prudence apres relecture.",
          "La fiche doit etre relue et testee avant d'etre consideree comme fiche etalon."
        ]
      },
      "versionHistory": {
        "title": "Historique des versions",
        "items": [
          "v0.1: extraction et normalisation depuis une source-mere Word contextualisee."
        ]
      }
    },
    "versions": [
      {
        "id": "grammaire-b1-plus-pronoms-cod-coi-enquete-generated-v01",
        "versionNumber": "0.1",
        "label": "generation depuis Markdown",
        "changelog": [
          "Ressource generee automatiquement depuis examples/resources-markdown/grammaire-b1-plus-pronoms-cod-coi-enquete.md."
        ],
        "createdAt": "2026-05-24",
        "createdBy": "Francois Carbonnier",
        "status": "brouillon"
      }
    ],
    "reviewSummary": {
      "clarityScore": 3,
      "reusabilityScore": 3,
      "progressionScore": 3,
      "languageReliabilityScore": 3,
      "digitalReadinessScore": 2,
      "aiReadinessScore": 1,
      "strengths": [
        "Structure Markdown valide",
        "Sections pedagogiques identifiables"
      ],
      "issues": [
        "Ressource generee depuis un fichier source; relecture enseignante requise"
      ],
      "recommendations": [
        "Verifier le niveau, le corrige et les droits avant publication comme fiche etalon"
      ]
    },
    "techMetadata": {
      "usesDigitalTool": false,
      "digitalTools": [],
      "digitalFormat": "document_imprimable",
      "requiresInternet": false,
      "requiresAccount": false,
      "deviceRequirements": [],
      "technicalDifficulty": "aucune",
      "privacyConsiderations": []
    },
    "aiMetadata": {
      "usesAI": false,
      "aiUseCase": "aucun",
      "aiAssistanceLevel": "aucun",
      "suggestedTools": [],
      "teacherControlRequired": true,
      "studentFacingAI": false,
      "risks": [],
      "safeguards": [
        "Ressource en normalisation: relecture enseignante necessaire avant publication comme fiche etalon."
      ]
    }
  },
  {
    "id": "grammaire-b1-pronoms-y-en",
    "title": "Les pronoms y et en dans la ville",
    "summary": "Activite courte pour observer et reutiliser y et en dans des situations urbaines.",
    "level": "B1",
    "durationMinutes": 45,
    "durationCategory": "30_60_min",
    "mainSkill": "grammaire",
    "secondarySkills": [
      "expression_orale",
      "interaction_orale"
    ],
    "theme": "Ville et services",
    "lexicalThemes": [
      "ville",
      "transports",
      "services"
    ],
    "grammarPoints": [
      "pronoms y et en"
    ],
    "resourceType": "exercice",
    "resourceTemplate": "grammaire_inductive",
    "activityFormat": "binomes",
    "classroomMode": "presentiel",
    "status": "brouillon",
    "reuseReadiness": "pret_a_tester",
    "license": "CC_BY_SA",
    "licenseNotes": "Contenu original de demonstration. Licence proposee: CC BY-SA. Aucune source externe.",
    "authors": [
      "FLE Commons Lab demo"
    ],
    "tags": [
      "grammaire",
      "B1",
      "ville"
    ],
    "materialNeeded": [
      "tableau",
      "fiche apprenant"
    ],
    "sourceType": "document_cree",
    "teacherPreparationLevel": "faible",
    "createdAt": "2026-05-24",
    "updatedAt": "2026-05-24",
    "content": {
      "objectives": {
        "title": "Objectifs",
        "items": [
          "Distinguer les emplois de `y` et `en` dans des phrases simples.",
          "Remplacer un complement deja mentionne.",
          "Reutiliser les pronoms dans une mini-conversation."
        ]
      },
      "prerequisites": {
        "title": "Pre-requis",
        "items": [
          "Connaitre quelques lieux de la ville.",
          "Avoir deja rencontre les verbes aller, venir, parler, avoir besoin."
        ]
      },
      "lessonPlan": {
        "title": "Deroule",
        "items": [
          "Lire six phrases courtes et reperer les complements repetes.",
          "Classer les phrases en deux colonnes: lieu / quantite ou origine.",
          "Proposer la transformation avec `y` ou `en`.",
          "Jouer une conversation en binomes avec deux lieux et deux besoins."
        ]
      },
      "studentInstructions": {
        "title": "Support etudiant",
        "items": [
          "Transformez les phrases.",
          "Je vais a la mairie demain. Je vais ___ demain.",
          "Tu parles de ton quartier ? Oui, j'___ parle souvent.",
          "Nous avons besoin de deux tickets. Nous ___ avons besoin.",
          "Elle habite pres du marche et elle ___ va tous les samedis.",
          "Mini-dialogue: choisissez un lieu, un service et un probleme. Utilisez au moins deux pronoms."
        ]
      },
      "teacherGuide": {
        "title": "Guide professeur",
        "items": [
          "Faire verbaliser la difference entre lieu et element introduit par `de`.",
          "Accepter des formulations variees si le pronom est correct.",
          "Ne pas transformer l'activite en lecon exhaustive sur tous les emplois."
        ]
      },
      "answerKey": {
        "title": "Corrige",
        "items": [
          "J'y vais demain.",
          "Oui, j'en parle souvent.",
          "Nous en avons besoin.",
          "Elle y va tous les samedis."
        ]
      },
      "variants": {
        "title": "Variantes",
        "items": [
          "Variante plus simple: fournir le pronom attendu.",
          "Variante orale: donner des cartes lieux et besoins.",
          "Variante numerique: utiliser un tableau collaboratif sans compte."
        ]
      },
      "usageNotes": {
        "title": "Retours d'usage possibles",
        "items": [
          "Le classement lieu / de aide-t-il vraiment le groupe ?",
          "Les apprenants reutilisent-ils les pronoms en production libre ?"
        ]
      },
      "techNotes": {
        "title": "Notes numeriques / IA",
        "items": [
          "Aucun outil numerique ni IA n'est requis. Une future aide IA pourrait proposer des phrases supplementaires, mais elles devraient etre relues par un enseignant."
        ]
      },
      "versionHistory": {
        "title": "Historique des versions",
        "items": [
          "0.1: version initiale Markdown pour tester le format source."
        ]
      }
    },
    "versions": [
      {
        "id": "grammaire-b1-pronoms-y-en-generated-v01",
        "versionNumber": "0.1",
        "label": "generation depuis Markdown",
        "changelog": [
          "Ressource generee automatiquement depuis examples/resources-markdown/grammaire-b1-pronoms-y-en.md."
        ],
        "createdAt": "2026-05-24",
        "createdBy": "FLE Commons Lab demo",
        "status": "brouillon"
      }
    ],
    "reviewSummary": {
      "clarityScore": 3,
      "reusabilityScore": 3,
      "progressionScore": 3,
      "languageReliabilityScore": 3,
      "digitalReadinessScore": 2,
      "aiReadinessScore": 1,
      "strengths": [
        "Structure Markdown valide",
        "Sections pedagogiques identifiables"
      ],
      "issues": [
        "Ressource generee depuis un fichier source; relecture enseignante requise"
      ],
      "recommendations": [
        "Verifier le niveau, le corrige et les droits avant publication comme fiche etalon"
      ]
    },
    "techMetadata": {
      "usesDigitalTool": false,
      "digitalTools": [],
      "digitalFormat": "document_imprimable",
      "requiresInternet": false,
      "requiresAccount": false,
      "deviceRequirements": [],
      "technicalDifficulty": "aucune",
      "privacyConsiderations": []
    },
    "aiMetadata": {
      "usesAI": false,
      "aiUseCase": "aucun",
      "aiAssistanceLevel": "aucun",
      "suggestedTools": [],
      "teacherControlRequired": true,
      "studentFacingAI": false,
      "risks": [],
      "safeguards": [
        "Prevoir une correction humaine des productions."
      ]
    }
  },
  {
    "id": "ia-b2-esprit-critique",
    "title": "Verifier une reponse produite par une IA",
    "summary": "Atelier B2 pour analyser une reponse fictive d'IA et distinguer aide, erreur et verification.",
    "level": "B2",
    "durationMinutes": 60,
    "durationCategory": "30_60_min",
    "mainSkill": "esprit_critique",
    "secondarySkills": [
      "litteratie_numerique",
      "expression_orale",
      "methodologie"
    ],
    "theme": "IA et apprentissage",
    "lexicalThemes": [
      "verification",
      "sources",
      "argumentation"
    ],
    "grammarPoints": [
      "modalisation",
      "connecteurs d'opposition"
    ],
    "resourceType": "scenario_ia",
    "resourceTemplate": "scenario_ia",
    "activityFormat": "petits_groupes",
    "classroomMode": "salle_informatique",
    "status": "brouillon",
    "reuseReadiness": "a_adapter",
    "license": "CC_BY_NC_SA",
    "licenseNotes": "Contenu original de demonstration. La reponse IA est fictive et redigee pour ce fichier. Licence proposee: CC BY-NC-SA.",
    "authors": [
      "FLE Commons Lab demo"
    ],
    "tags": [
      "IA",
      "B2",
      "esprit critique"
    ],
    "materialNeeded": [
      "reponse IA fictive fournie",
      "grille de verification"
    ],
    "sourceType": "interaction_ia",
    "teacherPreparationLevel": "moyen",
    "createdAt": "2026-05-24",
    "updatedAt": "2026-05-24",
    "content": {
      "objectives": {
        "title": "Objectifs",
        "items": [
          "Identifier les informations fiables, douteuses ou non verifiables.",
          "Formuler des questions de verification.",
          "Discuter le role de l'enseignant et de l'apprenant face a une aide IA."
        ]
      },
      "prerequisites": {
        "title": "Pre-requis",
        "items": [
          "Savoir exprimer un doute: `il est possible que`, `cela semble`, `je ne suis pas certain`.",
          "Avoir deja discute de sources et de fiabilite."
        ]
      },
      "lessonPlan": {
        "title": "Deroule",
        "items": [
          "Lire une reponse IA fictive sur un sujet culturel simple.",
          "Surligner trois affirmations a verifier.",
          "Classer: fiable / a verifier / probablement faux / trop vague.",
          "Reformuler la reponse en ajoutant des precautions.",
          "Debattre: quand l'IA aide-t-elle vraiment a apprendre ?"
        ]
      },
      "studentInstructions": {
        "title": "Support etudiant",
        "items": [
          "Extrait fictif:",
          "> Dans toutes les villes francophones, les habitants utilisent exactement les memes expressions de politesse. Il suffit donc d'apprendre une liste unique.",
          "Questions:",
          "Qu'est-ce qui semble trop general ?",
          "Quelles informations faudrait-il verifier ?",
          "Comment reformuler de maniere plus prudente ?"
        ]
      },
      "teacherGuide": {
        "title": "Guide professeur",
        "items": [
          "Preciser que l'extrait est fictif et cree pour la classe.",
          "Ne pas demander aux apprenants de se connecter a un outil IA.",
          "Valoriser la verification linguistique et culturelle.",
          "Faire produire une reformulation nuancee."
        ]
      },
      "answerKey": {
        "title": "Corrige",
        "items": [
          "Reponses attendues:",
          "`toutes les villes francophones` est une generalisation excessive;",
          "`exactement les memes expressions` est peu plausible;",
          "une reformulation prudente peut mentionner des variations selon pays, region et contexte."
        ]
      },
      "variants": {
        "title": "Variantes",
        "items": [
          "Sans IA: utiliser uniquement l'extrait fictif.",
          "Avec IA encadree: l'enseignant genere une reponse avant le cours et la relit.",
          "C1: ajouter une discussion sur biais, sources et responsabilite."
        ]
      },
      "usageNotes": {
        "title": "Retours d'usage possibles",
        "items": [
          "Les apprenants justifient-ils leurs doutes ?",
          "La discussion reste-t-elle centree sur l'apprentissage, pas sur la performance de l'outil ?"
        ]
      },
      "techNotes": {
        "title": "Notes numeriques / IA",
        "items": [
          "Aucun appel IA n'est requis pendant la seance. Si un outil IA est utilise par l'enseignant pour preparer un exemple, la reponse doit etre anonymisee, relue et signalee comme support fabrique."
        ]
      },
      "versionHistory": {
        "title": "Historique des versions",
        "items": [
          "0.1: version initiale Markdown avec frontmatter IA."
        ]
      }
    },
    "versions": [
      {
        "id": "ia-b2-esprit-critique-generated-v01",
        "versionNumber": "0.1",
        "label": "generation depuis Markdown",
        "changelog": [
          "Ressource generee automatiquement depuis examples/resources-markdown/ia-b2-esprit-critique.md."
        ],
        "createdAt": "2026-05-24",
        "createdBy": "FLE Commons Lab demo",
        "status": "brouillon"
      }
    ],
    "reviewSummary": {
      "clarityScore": 3,
      "reusabilityScore": 3,
      "progressionScore": 3,
      "languageReliabilityScore": 3,
      "digitalReadinessScore": 2,
      "aiReadinessScore": 1,
      "strengths": [
        "Structure Markdown valide",
        "Sections pedagogiques identifiables"
      ],
      "issues": [
        "Ressource generee depuis un fichier source; relecture enseignante requise"
      ],
      "recommendations": [
        "Verifier le niveau, le corrige et les droits avant publication comme fiche etalon"
      ]
    },
    "techMetadata": {
      "usesDigitalTool": true,
      "digitalTools": [
        "outil IA generique",
        "navigateur web"
      ],
      "digitalFormat": "prompt",
      "requiresInternet": false,
      "requiresAccount": false,
      "deviceRequirements": [
        "un support projetable ou imprime"
      ],
      "technicalDifficulty": "faible",
      "privacyConsiderations": [
        "Ne pas saisir de donnees personnelles.",
        "Utiliser une reponse fictive si aucun outil IA n'est autorise."
      ]
    },
    "aiMetadata": {
      "usesAI": true,
      "aiUseCase": "analyse_de_document",
      "aiAssistanceLevel": "guide",
      "suggestedTools": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "teacherControlRequired": true,
      "studentFacingAI": false,
      "risks": [
        "Confiance excessive dans une reponse fluide.",
        "Sources inventees ou invérifiables."
      ],
      "safeguards": [
        "Travailler sur une reponse fictive ou fournie par l'enseignant.",
        "Faire justifier chaque correction."
      ]
    }
  },
  {
    "id": "oral-a2-logement",
    "title": "Signaler un probleme dans un logement",
    "summary": "Jeu de roles A2 pour decrire un probleme simple et demander une solution.",
    "level": "A2",
    "durationMinutes": 35,
    "durationCategory": "30_60_min",
    "mainSkill": "interaction_orale",
    "secondarySkills": [
      "lexique",
      "expression_orale"
    ],
    "theme": "Logement",
    "lexicalThemes": [
      "pieces du logement",
      "pannes",
      "demandes polies"
    ],
    "grammarPoints": [
      "il y a",
      "devoir au present"
    ],
    "resourceType": "activite_orale",
    "resourceTemplate": "conversation_guidee",
    "activityFormat": "binomes",
    "classroomMode": "presentiel",
    "status": "brouillon",
    "reuseReadiness": "pret_a_tester",
    "license": "CC_BY",
    "licenseNotes": "Contenu original de demonstration. Licence proposee: CC BY. Aucune source externe.",
    "authors": [
      "FLE Commons Lab demo"
    ],
    "tags": [
      "oral",
      "A2",
      "logement"
    ],
    "materialNeeded": [
      "cartes situations",
      "tableau"
    ],
    "sourceType": "document_cree",
    "teacherPreparationLevel": "faible",
    "createdAt": "2026-05-24",
    "updatedAt": "2026-05-24",
    "content": {
      "objectives": {
        "title": "Objectifs",
        "items": [
          "Decrire un probleme courant dans un logement.",
          "Demander une intervention ou une solution.",
          "Utiliser des formules polies simples."
        ]
      },
      "prerequisites": {
        "title": "Pre-requis",
        "items": [
          "Lexique des pieces.",
          "Formules: `Bonjour`, `Je voudrais`, `Pouvez-vous`, `Merci`."
        ]
      },
      "lessonPlan": {
        "title": "Deroule",
        "items": [
          "Mise en route: nommer trois objets de la maison.",
          "Presentation des expressions utiles.",
          "Preparation en binomes avec une carte probleme.",
          "Jeu de roles: locataire / proprietaire ou agence.",
          "Retour collectif sur les formulations utiles."
        ]
      },
      "studentInstructions": {
        "title": "Support etudiant",
        "items": [
          "Choisissez une situation:",
          "La douche ne fonctionne pas.",
          "La fenetre ferme mal.",
          "Il y a une fuite dans la cuisine.",
          "Le chauffage ne marche pas.",
          "Preparez un dialogue de six repliques. Utilisez au moins une demande polie."
        ]
      },
      "teacherGuide": {
        "title": "Guide professeur",
        "items": [
          "Modeliser une demande courte avant le travail en binomes.",
          "Encourager les reformulations plutot que corriger chaque erreur.",
          "Noter au tableau les expressions reutilisables."
        ]
      },
      "answerKey": {
        "title": "Corrige",
        "items": [
          "Pas de corrige unique. Attendus:",
          "le probleme est clairement nomme;",
          "le lieu est precise;",
          "une demande de solution est formulee;",
          "le ton reste poli."
        ]
      },
      "variants": {
        "title": "Variantes",
        "items": [
          "A1+: fournir un dialogue a trous.",
          "B1: ajouter une negociation sur le delai.",
          "Distanciel: jouer la scene en audio court."
        ]
      },
      "usageNotes": {
        "title": "Retours d'usage possibles",
        "items": [
          "Les apprenants osent-ils jouer les deux roles ?",
          "Les expressions polies sont-elles reutilisees spontanement ?"
        ]
      },
      "techNotes": {
        "title": "Notes numeriques / IA",
        "items": [
          "Aucun outil n'est necessaire. Une variante future pourrait proposer un enregistrement audio local, sans upload."
        ]
      },
      "versionHistory": {
        "title": "Historique des versions",
        "items": [
          "0.1: version initiale Markdown pour contribution future."
        ]
      }
    },
    "versions": [
      {
        "id": "oral-a2-logement-generated-v01",
        "versionNumber": "0.1",
        "label": "generation depuis Markdown",
        "changelog": [
          "Ressource generee automatiquement depuis examples/resources-markdown/oral-a2-logement.md."
        ],
        "createdAt": "2026-05-24",
        "createdBy": "FLE Commons Lab demo",
        "status": "brouillon"
      }
    ],
    "reviewSummary": {
      "clarityScore": 3,
      "reusabilityScore": 3,
      "progressionScore": 3,
      "languageReliabilityScore": 3,
      "digitalReadinessScore": 2,
      "aiReadinessScore": 1,
      "strengths": [
        "Structure Markdown valide",
        "Sections pedagogiques identifiables"
      ],
      "issues": [
        "Ressource generee depuis un fichier source; relecture enseignante requise"
      ],
      "recommendations": [
        "Verifier le niveau, le corrige et les droits avant publication comme fiche etalon"
      ]
    },
    "techMetadata": {
      "usesDigitalTool": false,
      "digitalTools": [],
      "digitalFormat": "document_imprimable",
      "requiresInternet": false,
      "requiresAccount": false,
      "deviceRequirements": [],
      "technicalDifficulty": "aucune",
      "privacyConsiderations": []
    },
    "aiMetadata": {
      "usesAI": false,
      "aiUseCase": "aucun",
      "aiAssistanceLevel": "aucun",
      "suggestedTools": [],
      "teacherControlRequired": true,
      "studentFacingAI": false,
      "risks": [],
      "safeguards": [
        "Ne pas utiliser de donnees personnelles de logement reel."
      ]
    }
  },
  {
    "id": "res-eval-baguette",
    "title": "Compréhension Écrite : La baguette de pain (A2)",
    "summary": "Fiche d'exploitation basée sur un article externe.",
    "level": "A2",
    "durationMinutes": 30,
    "durationCategory": "30_60_min",
    "mainSkill": "comprehension_ecrite",
    "secondarySkills": [],
    "theme": "Gastronomie / Culture",
    "lexicalThemes": [
      "nourriture"
    ],
    "grammarPoints": [],
    "resourceType": "evaluation",
    "resourceTemplate": "analyse_de_document",
    "activityFormat": "individuel",
    "classroomMode": "presentiel",
    "status": "utilisable",
    "reuseReadiness": "pret_a_utiliser",
    "license": "CC_BY_SA",
    "licenseNotes": "Questionnaire créé par MarieFLE sous CC-BY-SA. Le texte de base appartient au journal Le Monde.",
    "authors": [
      "MarieFLE"
    ],
    "tags": [
      "culture",
      "france",
      "A2"
    ],
    "materialNeeded": [
      "Article original"
    ],
    "sourceType": "document_authentique",
    "teacherPreparationLevel": "moyen",
    "createdAt": "2026-05-24",
    "updatedAt": "2026-05-24",
    "content": {
      "objectives": {
        "title": "Objectifs",
        "items": [
          "Comprendre un article de presse factuel court.",
          "Repérer des informations chiffrées et historiques."
        ]
      },
      "lessonPlan": {
        "title": "Déroulé",
        "items": [
          "Lecture silencieuse de l'article (10 min).",
          "Questionnaire vrai/faux (10 min).",
          "Correction (10 min)."
        ]
      },
      "studentInstructions": {
        "title": "Support étudiant",
        "items": [
          "*(Texte non fourni : L'article original se trouve dans Le Monde, 30 novembre 2022)*\nLisez l'article et répondez par Vrai ou Faux :\nLa baguette a été inventée en 2022. (V/F)\nL'UNESCO protège désormais ce pain. (V/F)"
        ]
      },
      "teacherGuide": {
        "title": "Guide professeur",
        "items": [
          "Demander aux apprenants de chercher l'article sur internet s'ils ont un smartphone."
        ]
      },
      "answerKey": {
        "title": "Corrigé",
        "items": [
          "Faux (L'article dit que sa création remonte au début du XXe siècle).",
          "Vrai."
        ]
      }
    },
    "versions": [
      {
        "id": "res-eval-baguette-generated-v01",
        "versionNumber": "0.1",
        "label": "generation depuis Markdown",
        "changelog": [
          "Ressource generee automatiquement depuis examples/resources-markdown/res-eval-baguette.md."
        ],
        "createdAt": "2026-05-24",
        "createdBy": "MarieFLE",
        "status": "utilisable"
      }
    ],
    "reviewSummary": {
      "clarityScore": 3,
      "reusabilityScore": 3,
      "progressionScore": 3,
      "languageReliabilityScore": 3,
      "digitalReadinessScore": 2,
      "aiReadinessScore": 1,
      "strengths": [
        "Structure Markdown valide",
        "Sections pedagogiques identifiables"
      ],
      "issues": [
        "Ressource generee depuis un fichier source; relecture enseignante requise"
      ],
      "recommendations": [
        "Verifier le niveau, le corrige et les droits avant publication comme fiche etalon"
      ]
    },
    "techMetadata": {
      "usesDigitalTool": false,
      "digitalTools": [],
      "digitalFormat": "document_imprimable",
      "requiresInternet": false,
      "requiresAccount": false,
      "deviceRequirements": [],
      "technicalDifficulty": "aucune",
      "privacyConsiderations": []
    },
    "aiMetadata": {
      "usesAI": false,
      "aiUseCase": "aucun",
      "aiAssistanceLevel": "aucun",
      "suggestedTools": [],
      "teacherControlRequired": true,
      "studentFacingAI": false,
      "risks": [],
      "safeguards": [
        "Ressource issue d’un fichier Markdown source; relecture enseignante requise."
      ]
    },
    "normalizationMetadata": {
      "originalFormat": "pdf",
      "submittedBy": "MarieFLE",
      "normalizationStatus": "normalisee",
      "legalWarning": "Texte source retiré pour raisons de droits d'auteur."
    }
  },
  {
    "id": "res-oral-monstre",
    "title": "Jeu du Monstre : Les parties du corps",
    "summary": "Jeu de dictée visuelle au tableau puis en binôme pour réviser le lexique du corps.",
    "level": "A1",
    "durationMinutes": 20,
    "durationCategory": "15_30_min",
    "mainSkill": "comprehension_orale",
    "secondarySkills": [
      "expression_orale",
      "lexique"
    ],
    "theme": "Le corps humain",
    "lexicalThemes": [
      "corps",
      "couleurs"
    ],
    "grammarPoints": [],
    "resourceType": "activite_orale",
    "resourceTemplate": "jeu_pedagogique",
    "activityFormat": "classe_entiere",
    "classroomMode": "presentiel",
    "status": "teste",
    "reuseReadiness": "teste_en_classe",
    "license": "CC_BY_SA",
    "licenseNotes": "Jeu classique du domaine public, formalisé sous CC-BY-SA par ProfToulouse.",
    "authors": [
      "ProfToulouse"
    ],
    "tags": [
      "jeu",
      "dessin",
      "A1"
    ],
    "materialNeeded": [
      "Tableau"
    ],
    "sourceType": "document_cree",
    "teacherPreparationLevel": "faible",
    "createdAt": "2026-05-24",
    "updatedAt": "2026-05-24",
    "content": {
      "objectives": {
        "title": "Objectifs",
        "items": [
          "Lexique : les parties du corps, les nombres, les couleurs.",
          "Action : Dessiner sous la dictée, puis dicter."
        ]
      },
      "lessonPlan": {
        "title": "Déroulé",
        "items": [
          "Le professeur dicte au tableau (5 min).",
          "Les étudiants dessinent en binômes (15 min)."
        ]
      },
      "studentInstructions": {
        "title": "Support étudiant",
        "items": [
          "*(Pas de support écrit : l'activité est purement orale)*"
        ]
      },
      "teacherGuide": {
        "title": "Guide professeur",
        "items": [
          "Étape 1 : Le professeur dicte\nAllez au tableau. Demandez aux étudiants de vous dicter un monstre : \"Dessinez trois yeux rouges\". Dessinez exactement ce qu'ils disent.\nÉtape 2 : Les étudiants dessinent\nEn binômes. L'étudiant A dessine un monstre en cachette. Il le dicte à l'étudiant B.\nOn inverse les rôles."
        ]
      },
      "answerKey": {
        "title": "Corrigé",
        "items": [
          "Activité d'expression libre, pas de corrigé type. Le dessin valide la bonne compréhension."
        ]
      }
    },
    "versions": [
      {
        "id": "res-oral-monstre-generated-v01",
        "versionNumber": "0.1",
        "label": "generation depuis Markdown",
        "changelog": [
          "Ressource generee automatiquement depuis examples/resources-markdown/res-oral-monstre.md."
        ],
        "createdAt": "2026-05-24",
        "createdBy": "ProfToulouse",
        "status": "teste"
      }
    ],
    "reviewSummary": {
      "clarityScore": 3,
      "reusabilityScore": 3,
      "progressionScore": 3,
      "languageReliabilityScore": 3,
      "digitalReadinessScore": 2,
      "aiReadinessScore": 1,
      "strengths": [
        "Structure Markdown valide",
        "Sections pedagogiques identifiables"
      ],
      "issues": [
        "Ressource generee depuis un fichier source; relecture enseignante requise"
      ],
      "recommendations": [
        "Verifier le niveau, le corrige et les droits avant publication comme fiche etalon"
      ]
    },
    "techMetadata": {
      "usesDigitalTool": false,
      "digitalTools": [],
      "digitalFormat": "document_imprimable",
      "requiresInternet": false,
      "requiresAccount": false,
      "deviceRequirements": [],
      "technicalDifficulty": "aucune",
      "privacyConsiderations": []
    },
    "aiMetadata": {
      "usesAI": false,
      "aiUseCase": "aucun",
      "aiAssistanceLevel": "aucun",
      "suggestedTools": [],
      "teacherControlRequired": true,
      "studentFacingAI": false,
      "risks": [],
      "safeguards": [
        "Ressource issue d’un fichier Markdown source; relecture enseignante requise."
      ]
    },
    "normalizationMetadata": {
      "originalFormat": "texte_brut",
      "submittedBy": "ProfToulouse",
      "normalizationStatus": "normalisee"
    }
  },
  {
    "id": "res-subj-001",
    "title": "Exercice structural : Le subjonctif présent",
    "summary": "Phrases à trous pour systématiser la conjugaison du subjonctif (verbes irréguliers).",
    "level": "B1",
    "durationMinutes": 10,
    "durationCategory": "moins_15_min",
    "mainSkill": "grammaire",
    "secondarySkills": [
      "expression_ecrite"
    ],
    "theme": "Générique",
    "lexicalThemes": [],
    "grammarPoints": [
      "subjonctif présent"
    ],
    "resourceType": "exercice",
    "resourceTemplate": "grammaire_inductive",
    "activityFormat": "individuel",
    "classroomMode": "presentiel",
    "status": "utilisable",
    "reuseReadiness": "pret_a_utiliser",
    "license": "CC_BY_SA",
    "licenseNotes": "Document créé spécifiquement. Licence CC-BY-SA.",
    "authors": [
      "ProfFLE_42"
    ],
    "tags": [
      "grammaire",
      "subjonctif"
    ],
    "materialNeeded": [],
    "sourceType": "document_cree",
    "teacherPreparationLevel": "faible",
    "createdAt": "2026-05-24",
    "updatedAt": "2026-05-24",
    "content": {
      "objectives": {
        "title": "Objectifs",
        "items": [
          "Conjuguer au subjonctif présent (venir, faire, savoir).",
          "Automatiser l'utilisation après les structures d'obligation et de volonté."
        ]
      },
      "lessonPlan": {
        "title": "Déroulé",
        "items": [
          "Le professeur distribue l'exercice (1 min).",
          "Travail individuel (5 min).",
          "Correction en plénière (4 min)."
        ]
      },
      "studentInstructions": {
        "title": "Support étudiant",
        "items": [
          "Complétez les phrases suivantes en conjuguant les verbes entre parenthèses au subjonctif présent :\nIl faut que tu (venir) demain.\nJe veux qu'il (faire) attention.\nIl est important que nous (savoir) la vérité."
        ]
      },
      "teacherGuide": {
        "title": "Guide professeur",
        "items": [
          "Pas de difficulté majeure. Insister sur la différence de radical pour \"savoir\"."
        ]
      },
      "answerKey": {
        "title": "Corrigé",
        "items": [
          "Il faut que tu **viennes** demain.",
          "Je veux qu'il **fasse** attention.",
          "Il est important que nous **sachions** la vérité."
        ]
      }
    },
    "versions": [
      {
        "id": "res-subj-001-generated-v01",
        "versionNumber": "0.1",
        "label": "generation depuis Markdown",
        "changelog": [
          "Ressource generee automatiquement depuis examples/resources-markdown/res-subj-001.md."
        ],
        "createdAt": "2026-05-24",
        "createdBy": "ProfFLE_42",
        "status": "utilisable"
      }
    ],
    "reviewSummary": {
      "clarityScore": 3,
      "reusabilityScore": 3,
      "progressionScore": 3,
      "languageReliabilityScore": 3,
      "digitalReadinessScore": 2,
      "aiReadinessScore": 1,
      "strengths": [
        "Structure Markdown valide",
        "Sections pedagogiques identifiables"
      ],
      "issues": [
        "Ressource generee depuis un fichier source; relecture enseignante requise"
      ],
      "recommendations": [
        "Verifier le niveau, le corrige et les droits avant publication comme fiche etalon"
      ]
    },
    "techMetadata": {
      "usesDigitalTool": false,
      "digitalTools": [],
      "digitalFormat": "document_imprimable",
      "requiresInternet": false,
      "requiresAccount": false,
      "deviceRequirements": [],
      "technicalDifficulty": "aucune",
      "privacyConsiderations": []
    },
    "aiMetadata": {
      "usesAI": false,
      "aiUseCase": "aucun",
      "aiAssistanceLevel": "aucun",
      "suggestedTools": [],
      "teacherControlRequired": true,
      "studentFacingAI": false,
      "risks": [],
      "safeguards": [
        "Ressource issue d’un fichier Markdown source; relecture enseignante requise."
      ]
    },
    "normalizationMetadata": {
      "originalFormat": "texte_brut",
      "submittedBy": "ProfFLE_42",
      "normalizationStatus": "normalisee"
    }
  }
]
