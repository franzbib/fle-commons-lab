# Audit de sobriete v0

Date: 2026-05-23

Role: Gardien sobriete du projet `fle-commons-lab`.

## Perimetre audite

- `package.json` et dependances installees.
- Code applicatif dans `src/`.
- Donnees locales dans `src/data/demoResources.ts`.
- Documentation projet dans `README.md`, `docs/` et `PROJECT_STATE_FOR_LLMS.md`.

## Points conformes

### Absence d'appel IA automatique

Conforme.

Aucun SDK IA, aucune cle API, aucun appel `fetch` vers un service IA et aucune logique d'audit automatique ne sont presents dans le code applicatif.

La seule mention de l'IA dans les donnees concerne une ressource pedagogique sur le theme de l'IA en education. Cette ressource precise explicitement qu'elle traite l'IA comme sujet de cours, sans appel d'outil IA.

### Absence de backend premature

Conforme.

Le projet utilise Vite, React et TypeScript en application locale. Il n'existe pas de serveur applicatif, pas de route API, pas de fonction serverless, pas de client HTTP metier et pas de schema de base de donnees.

### Absence de stockage lourd

Conforme.

Les ressources sont stockees dans un fichier TypeScript local. La zone de retour d'usage est illustrative et non persistante. Aucun stockage de fichiers, blob, bucket, base SQL, IndexedDB ou localStorage n'est utilise.

### Dependances limitees

Conforme.

Les dependances runtime sont uniquement:

- `react`
- `react-dom`

Les autres dependances servent au developpement: Vite, TypeScript, ESLint et types React. Aucun framework UI, aucun routeur, aucun client de base de donnees, aucun outil d'authentification et aucun SDK externe n'ont ete ajoutes.

### Simplicite des composants

Conforme.

Les composants sont peu nombreux et lisibles:

- `ResourceCard`: affichage d'une carte.
- `ResourceFilters`: filtres controles simples.
- `ResourceDetail`: vue detail et sections pedagogiques.
- `App`: orchestration de l'etat local et filtrage.

Le filtrage reste local et comprehensible. Il n'y a pas de gestion d'etat globale, de routeur, de cache applicatif ou d'abstraction prematuree.

### Clarite de la documentation

Conforme.

La documentation explicite:

- la vision du projet;
- l'architecture v0;
- le modele de ressource;
- les limites volontaires;
- une checklist de non-regression;
- l'etat du projet pour reprise par un autre agent IA.

Les interdits de v0 sont repetes dans plusieurs fichiers, ce qui limite le risque de derive lors de futures interventions.

### Conformite avec l'objectif v0

Conforme.

L'application permet bien de consulter, filtrer et ouvrir des ressources FLE locales de demonstration. Elle reste sobre, gratuite ou quasi gratuite, sans backend et sans fonctionnalite communautaire prematuree.

## Risques identifies

### Documentation plus ambitieuse que le code actuel

Le document `docs/resource-model.md` decrit des champs facultatifs et une compatibilite future Supabase. C'est utile pour cadrer le modele, mais cela peut inciter un futur contributeur a normaliser trop tot ou a installer Supabase prematurement.

Risque: moyen, surtout pour un agent IA qui chercherait a "completer" l'architecture.

### Donnees de demonstration volumineuses dans un fichier unique

`src/data/demoResources.ts` contient 18 ressources completes. C'est acceptable en v0, mais le fichier peut devenir difficile a relire si le corpus grossit.

Risque: faible maintenant, moyen si le nombre de ressources augmente fortement.

### Assets de demarrage Vite conserves

Les fichiers `src/assets/react.svg`, `src/assets/vite.svg`, `src/assets/hero.png` et `public/icons.svg` semblent herites du template. Ils ne sont plus utilises par l'application principale.

Risque: faible. Ils ajoutent peu de poids, mais brouillent legerement la lisibilite du depot.

### Styles centralises dans un fichier CSS assez long

`src/styles/global.css` reste simple, mais il concentre tous les styles de l'interface.

Risque: faible. A surveiller si plusieurs vues sont ajoutees.

### Absence de tests automatises

La checklist manuelle existe, mais aucun test ne protege encore la logique de filtrage.

Risque: faible pour la v0, moyen si les filtres ou le modele evoluent.

## Corrections prioritaires

1. Supprimer les assets inutilises du template Vite si aucune future maquette ne les utilise.
2. Ajouter un court commentaire dans `docs/resource-model.md` ou `PROJECT_STATE_FOR_LLMS.md` rappelant que la compatibilite Supabase ne signifie pas installation en v0.
3. Ajouter des tests unitaires tres limites sur le filtrage, sans ajouter de framework lourd si possible.
4. Surveiller la taille de `src/data/demoResources.ts`; si le corpus depasse 20 a 30 ressources, envisager une separation par fichiers locaux JSON ou TS.
5. Garder `ResourceDetail` sous controle: si de nouvelles sections apparaissent, preferer des sous-composants simples plutot qu'une logique conditionnelle complexe.

## Fonctionnalites a differer

### A differer strictement

- Supabase ou toute autre base de donnees.
- Authentification, comptes utilisateurs, roles et permissions.
- Upload de fichiers.
- Stockage de fichiers ou medias lourds.
- Commentaires persistants.
- Temps reel.
- Appels IA automatiques.
- Audit automatique de qualite pedagogique.
- Generation automatique de ressources.
- Systeme de moderation communautaire.

### A differer jusqu'a stabilisation du modele

- Routeur et URLs partageables pour chaque ressource.
- Recherche plein texte avancee.
- Tags libres massifs.
- Import/export de corpus.
- Comparaison visuelle de versions.
- Workflow editorial complet avec validation multi-acteurs.

### Acceptable en prochaine etape sobre

- Tests unitaires sur le filtrage.
- Nettoyage des assets inutilises.
- Petites ameliorations d'accessibilite.
- Relecture pedagogique des 18 ressources de demonstration.
- Documentation d'une strategie future Supabase, sans installation ni dependance.

## Conclusion

L'etat actuel est conforme a l'objectif v0. Le projet reste local, lisible, peu couteux et techniquement sobre.

La vigilance principale porte sur les prochaines contributions: ne pas confondre preparation conceptuelle et implementation technique. Tant que le modele editorial et les usages enseignants ne sont pas stabilises, le projet doit rester une bibliotheque locale simple.
