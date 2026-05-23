# Rapport UX : Divulgation Progressive et Allègement de l'Interface

**Date :** Mai 2026
**Sujet :** Stratégie UX pour l'application FLE Commons Lab (Progressive Disclosure).

---

## 1. Diagnostic UX Général

Le projet FLE Commons Lab dispose d'un modèle de données extrêmement riche (pédagogie, IA, droits, retours d'usage). Cette richesse documentaire est la grande force du projet, mais elle génère un risque majeur de surcharge cognitive (information overload) pour l'utilisateur principal : l'enseignant de FLE.

Un enseignant pressé a besoin de trouver et d'évaluer une ressource en quelques secondes. S'il est confronté à 20 métadonnées dès la page d'accueil ou sur la fiche de résultats, il risque d'abandonner l'outil. 

**Principe directeur retenu :** *Afficher d'abord ce qui aide l'enseignant à décider ; rendre le reste disponible à la demande, sans jamais supprimer la donnée sous-jacente.*

---

## 2. Architecture d'Information : Les 5 Niveaux de Divulgation

L'information doit être structurée en entonnoir.

### Niveau 1 : La Carte Ressource (Aperçu)
Objectif : Décision rapide de clic (Oui/Non/Peut-être).
- **Affiché** : Titre, résumé très court, niveau, compétence principale, durée, type/gabarit, statut, 2 à 3 tags max.
- **Indicateurs discrets (icônes/puces)** : Usage IA optionnelle, composante numérique, licence à surveiller.
- **Masqué** : Liste complète des tags, métadonnées techniques, historique, accès futurs.

### Niveau 2 : Vue rapide de la fiche détail (Le "Above the fold")
Objectif : Confirmer l'adéquation au besoin pédagogique.
- **Affiché** : Titre, résumé complet, bloc de "Prise en main" (Niveau, durée, objectif principal, modalité), déroulé synthétique, accès direct aux supports (étudiant/prof/corrigé).

### Niveau 3 : Sections complémentaires repliables (Accordéons)
Objectif : Fournir le contexte expert si l'enseignant souhaite auditer ou adapter la ressource.
- **Blocs repliés par défaut** : Métadonnées complètes, Notes IA et numériques, Licence et accès, Versions de la ressource, Retours d'usage communautaires, Audit simulé.

### Niveau 4 & 5 : Documentation globale et Markdown source
- La documentation complète explique la taxonomie.
- Le fichier Markdown (+ Frontmatter YAML) reste la source de vérité absolue contenant 100% des données pour les contributeurs.

---

## 3. Wireframes Textuels

### Wireframe : Carte Ressource (ProgressiveResourceCard)

```text
+-------------------------------------------------------------+
| [ GRAM: B1 ]  [ COMP: ORAL ]  [ ⏱ 30 MIN ]                 |
|                                                             |
| Titre : Les pronoms y et en en contexte professionnel       |
| Un résumé très court de deux lignes maximum expliquant le   |
| scénario de l'activité.                                     |
|                                                             |
| Fiche • Tags : entreprise, localisation, +3                 |
|                                                             |
| ✦ IA Optionnelle  |  💻 Numérique  |  ⚠️ Licence à vérifier   |
|                                                             |
|                                         [ Voir la fiche ➔ ] |
+-------------------------------------------------------------+
```

### Wireframe : Fiche Détail (ResourceDetail - Vue Progressive)

```text
===============================================================
# Les pronoms y et en en contexte professionnel
[ VERIFIED ] • CC-BY-SA
Un résumé complet sur plusieurs lignes expliquant pourquoi
et comment utiliser cette fiche.

[ À UTILISER RAPIDEMENT ]
- Niveau : B1
- Durée : 30 minutes
- Objectif : Décrire l'emplacement de bureaux.
- Modalité : Binôme.

[ CONTENU PÉDAGOGIQUE ]
### Support Étudiant
(Texte et exercices...)

### Guide Professeur
(Consignes d'animation...)
===============================================================
[ DÉTAILS AVANCÉS ]

▸ Métadonnées complètes (Cliquable pour déplier)
▸ IA et usages numériques
▸ Licence, accès et sources
▸ Versions et retours d'usage
===============================================================
```

---

## 4. Organisation des Filtres

Pour éviter l'effet "cockpit d'avion" dans la barre latérale, les filtres doivent être scindés. L'objectif est de ne pas décourager la recherche.

**Filtres essentiels visibles par défaut :**
- Barre de recherche libre
- Niveau (A1 -> C2)
- Compétence (Grammaire, Oral, etc.)
- Type (Fiche, Séquence, etc.)
- Statut (Validé, Brouillon)

**Filtres avancés (derrière un bouton "Filtres avancés ⚙️") :**
- Gabarit pédagogique
- Thème / Thème lexical
- Usage numérique requis / Usage IA
- Accès futur
- Licence
- Préparation requise par l'enseignant

---

## 5. Application de l'Identité "Laboratoire Typographique"

L'esthétique "Laboratoire Typographique" est forte. Pour éviter la surcharge :
- **Sobriété stricte** : Plus la donnée est secondaire, plus son traitement visuel doit être discret. Les métadonnées repliables doivent utiliser une typographie plus petite (`text-sm`), grise (`text-slate-500`), en police monospace (`font-mono`).
- **Modération des cadres** : Éviter d'imbriquer des bordures noires (`border-black`) dans des bordures noires. Utiliser l'espace blanc ou un très léger trait gris pour séparer les éléments d'une liste détaillée.
- **Tampons visuels limités** : Limiter l'affichage des gros badges typographiques stricts (`[ GRAM: B1 ]`) aux informations primaires de la carte.
- **Focus Surlignage** : Utiliser le "surlignage jaune" uniquement pour l'objectif principal ou la compétence phare, pas pour tout le texte.
- **Couleur IA** : Le violet IA ne doit survenir que si la section "Notes IA" est dépliée.

---

## 6. Composants Simples Proposés (Pour Codex)

1. `CompactTagList` : Affiche 2 tags et un "+X" qui affiche le reste au survol.
2. `CollapsibleSection` : Un simple composant Accordéon (`<details><summary>` ou via React state) sans animation lourde.
3. `AdvancedFiltersPanel` : Un tiroir ou menu déroulant cachant les filtres de second niveau.
4. `MetadataSummary` : Un bloc formaté en monospace listant les paires `Clé: Valeur` pour la zone détails.
5. `ResourceQuickFacts` : Le composant "Prise en main rapide" en haut de la fiche détail.
6. `ProgressiveResourceCard` : La nouvelle carte allégée implémentant `CompactTagList`.

---

## 7. Risques UX à Surveiller

- **L'effet "Fiche administrative"** : Empiler trop de texte monospace peut rebuter.
- **La fatigue du clic (Click fatigue)** : Si une information essentielle est cachée dans un accordéon, l'enseignant s'épuisera. D'où l'importance du bloc `ResourceQuickFacts`.
- **Confusion IA** : Confondre une fiche "Générée par l'IA" (statut de production) avec une fiche "Qui parle d'IA" (thème) ou "Qui s'utilise avec une IA en classe" (usage pédagogique). Les icônes doivent être très précises (ex: 🤖 pour usage, ✨ pour généré).
- **Confusion Accès/Paywall** : Si une ressource affiche "Accès : Institutionnel" de façon trop rouge ou bloquée, l'utilisateur pensera qu'il doit payer. Il faut désamorcer via le microcopy.

---

## 8. Priorisation des Recommandations

**Priorité 1 — À faire très vite (Quick wins)**
- Allègement de la carte ressource principale (`ProgressiveResourceCard`).
- Implémentation des tags limités (`CompactTagList`).
- Réorganisation de la page Détail avec les sections repliables (`CollapsibleSection`).
- Séparation Filtres essentiels / Filtres avancés.

**Priorité 2 — À faire ensuite (Consolidation)**
- Mettre en place un guide visuel (Légende) pour les statuts et les icônes IA/Numérique.
- Travailler le microcopy explicatif dans les zones avancées.

**Priorité 3 — À différer (Hors scope actuel)**
- Mode d'affichage personnalisable (Compact vs Détaillé).
- Sauvegarde des préférences de filtres.
- Système de compte ou authentification.

---

## 9. Prompt Conseillé pour l'Agent Codex

```markdown
**Mission Codex : Intégration de la Divulgation Progressive**

Ton objectif est d'alléger l'interface de FLE Commons Lab sans supprimer aucune donnée du modèle sous-jacent. Réfère-toi au document `docs/ux-progressive-disclosure.md`.

1. **Créer un composant `CollapsibleSection`** : Un simple accordéon React pour cacher les données de second niveau.
2. **Alléger `ResourceCard`** : 
   - Limite l'affichage à 3 tags (crée un `CompactTagList`).
   - Ajoute des icônes/indicateurs discrets pour l'IA et les licences, au lieu de longs textes.
3. **Réorganiser les Filtres** : Divise ton composant de filtrage actuel en "Filtres essentiels" et "Filtres avancés" (ces derniers étant cachés par défaut sous un bouton).
4. **Restructurer `ResourceDetail`** : 
   - Crée un bloc "Prise en main" en haut (Niveau, durée, objectif).
   - Utilise `CollapsibleSection` pour toutes les autres métadonnées (IA, Numérique, Versions, Licence, Audit).
5. **Règles strictes** : 
   - NE SUPPRIME AUCUNE DONNÉE du type `Resource`. 
   - Ne crée pas de backend, pas de base de données, pas d'authentification.
   - Respecte la sobriété de l'identité "Laboratoire Typographique".
6. N'oublie pas de commiter et pousser tes modifications.
```
