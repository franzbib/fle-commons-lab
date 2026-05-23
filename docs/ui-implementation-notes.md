# Notes d'implémentation UI

Date: 2026-05-23

## Direction intégrée

Première intégration sobre de la direction **Laboratoire Typographique** documentée dans:

- `docs/branding-directions.md`
- `docs/visual-identity-v0.md`
- `assets/branding/style-tile.svg`

## Tokens ajoutés

Les tokens principaux sont déclarés dans `src/styles/global.css`:

- `--color-paper`
- `--color-ivory`
- `--color-ink`
- `--color-muted-ink`
- `--color-amethyst`
- `--color-highlight`
- `--color-border`
- `--color-success`
- `--color-warning`
- `--color-info`
- `--color-draft`
- `--color-validated`
- `--font-sans`
- `--font-mono`
- `--radius-card`
- `--shadow-hard`

## Assets intégrés

- `assets/branding/logo-temp.svg` est utilisé dans l'en-tête.
- `public/favicon.svg` est utilisé par `index.html`.
- `assets/branding/wordmark.svg` et `assets/branding/style-tile.svg` restent disponibles comme références.

## Composants modifiés

- `Layout`: logo temporaire dans l'en-tête.
- `Badge`: ajout de variantes visuelles `tech`, `ai`, `access`.
- `ResourceCard`: rendu plus proche d'une fiche d'index, avec identifiant de ressource.
- `ResourceDetail`: badges cohérents pour numérique, IA et accès futur.
- `ResourceFilters`: style plus strict par CSS global.

## Ce qui reste à harmoniser

- Les pages statiques pourraient recevoir des repères typographiques plus fins.
- Les états éditoriaux pourraient être affinés visuellement par statut.
- Les collections et propositions d'amélioration peuvent encore gagner en hiérarchie.
- Le wordmark n'est pas encore utilisé dans l'interface pour éviter de charger l'en-tête.

## Garde-fous

- Ne pas rendre l'interface agressive ou illisible.
- Ne pas multiplier les motifs graphiques.
- Ne pas transformer la démo en landing page commerciale.
- Ne pas figer trop tôt une charte définitive.
- Ne pas ajouter de dépendance UI lourde pour cette identité.
