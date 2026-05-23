# Technologies Et IA

FLE Commons Lab doit pouvoir accueillir des pratiques numériques et IA, mais sans rendre la v0 dépendante d’un outil ou d’un fournisseur.

## Pourquoi Cette Dimension

Les enseignants FLE utilisent déjà des environnements numériques: plateformes de cours, quiz interactifs, tableaux collaboratifs, supports projetables, outils de création et assistants IA. Le projet doit pouvoir décrire ces usages pour faciliter la recherche, l’adaptation et l’audit pédagogique.

## Ressource Utilisant L’IA Vs Plateforme Appelant Une API IA

Une ressource peut documenter un usage IA possible:

- reformuler une consigne;
- vérifier une réponse;
- simuler un dialogue;
- générer des idées de variantes;
- comparer une production humaine et une production IA.

Cela ne signifie pas que la plateforme appelle une API IA.

Dans la v0:

- aucun appel OpenAI, Claude, Gemini ou autre fournisseur;
- aucune clé API;
- aucun prompt envoyé automatiquement;
- aucune correction automatique;
- aucune analyse IA active.

## Principes De Prudence

- Transparence: l’usage de l’IA doit être explicite.
- Contrôle enseignant: la décision finale reste humaine.
- Protection des données: ne pas transmettre de données personnelles d’apprenants.
- Vérification: toute réponse IA doit pouvoir être discutée et contrôlée.
- Non-substitution: l’étudiant ne doit pas déléguer entièrement son travail.
- Coût maîtrisé: éviter de rendre une ressource dépendante d’un compte payant.
- Alternative: proposer une variante sans IA si possible.

## Métadonnées IA

Le type `AiMetadata` permet de documenter:

- le cas d’usage;
- le niveau d’assistance;
- les outils suggérés;
- les risques;
- les garde-fous;
- le rôle de l’enseignant;
- l’exposition éventuelle des étudiants.

Ces champs sont descriptifs. Ils n’activent rien.

## Idées Futures

- Audit pédagogique manuel puis assisté.
- Conversion `.docx` vers Markdown.
- Suggestion de variantes.
- Détection de consignes floues.
- Aide à la création de corrigés.
- Génération de métadonnées.
- Recherche sémantique.
- Recommandations de ressources.

Ces pistes devront être déclenchées manuellement, documentées, testées et protégées par un backend ou une fonction serveur si elles utilisent des clés privées.
