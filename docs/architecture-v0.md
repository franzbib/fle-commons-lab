# Architecture V0

## Choix Techniques

La v0 utilise:

- Vite pour le serveur de développement et le build;
- React pour l’interface;
- TypeScript pour stabiliser le modèle;
- CSS simple pour éviter une dépendance UI prématurée;
- données locales TypeScript.

Aucun backend n’est présent.

## Pourquoi Des Données Locales

Les données locales permettent de travailler le modèle éditorial avant de choisir une persistance. Cela évite d’adapter trop tôt le projet à une base de données, un fournisseur ou un workflow communautaire encore incertain.

## Structure

```text
src/
  App.tsx
  main.tsx
  components/
    Badge.tsx
    Layout.tsx
    ResourceCard.tsx
    ResourceDetail.tsx
    ResourceFilters.tsx
  data/
    demoResources.ts
  pages/
    HomePage.tsx
    LibraryPage.tsx
    ResourcePage.tsx
    AboutPage.tsx
    DocumentationPage.tsx
  styles/
    global.css
  types/
    resource.ts
  utils/
    filters.ts
    formatters.ts
docs/
PROJECT_STATE_FOR_LLMS.md
```

## Navigation

La navigation utilise des hash routes simples:

- `#/`
- `#/library`
- `#/resources/:id`
- `#/about`
- `#/docs`

Ce choix évite React Router dans la v0. Une vraie solution de routage pourra être ajoutée plus tard si le besoin devient réel.

## Supabase Plus Tard

Supabase pourrait stocker plus tard:

- ressources;
- versions;
- retours d’usage;
- suggestions de contribution;
- collections.

Mais Supabase ne doit pas être installé en v0. La préparation actuelle se limite aux types, à la documentation et à la séparation des données.

## Audit IA Plus Tard

Un audit IA pourrait un jour analyser:

- clarté des consignes;
- cohérence niveau / tâche;
- présence d’un corrigé;
- droits à vérifier;
- pistes de simplification.

En v0, aucun appel IA n’existe. L’audit est seulement anticipé par le type `ResourceReviewSummary`.

La taxonomie IA est également anticipée par `AiMetadata`: cas d’usage, niveau d’assistance, risques, garde-fous et contrôle enseignant. Ces champs servent à documenter des pratiques, pas à appeler un fournisseur.

## Contributions Communautaires Plus Tard

Des contributions pourraient inclure:

- amélioration d’une ressource;
- variante;
- retour d’usage;
- correction;
- signalement.

En v0, aucun workflow communautaire n’existe. Le type `ContributionSuggestion` sert seulement de préparation conceptuelle.

## Technologies Et Ressources Numériques

Les ressources peuvent décrire un usage numérique via `TechMetadata`: outil, format, besoin d’Internet, compte requis, appareils nécessaires, difficulté technique et précautions de confidentialité.

Cette information sert aux filtres, à l’audit futur et à la préparation pédagogique. Elle n’installe aucun outil externe.

## Variables D’Environnement

La v0 ne nécessite aucune variable d’environnement. Voir `docs/environment.md`.

Ne pas créer de `.env.local` et ne pas ajouter de variable obligatoire sans décision explicite.
