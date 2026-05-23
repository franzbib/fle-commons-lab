# Revue de Cohérence de la Démo Publique (FLE Commons Lab)

**Date de la revue** : 23 Mai 2026
**Profil relecteur** : Agent de Cohérence UX/Pédagogique
**Objectif** : Évaluer la compréhension immédiate du projet par un visiteur (enseignant non-technicien) face aux deux entrées principales (Bibliothèque vs Atelier IA).

---

## 1. Verdict global
La démo publique a franchi un cap : le projet ressemble désormais à un véritable espace professionnel pour enseignants. L'ajout de l'Atelier IA démontre une prise en compte des besoins actuels tout en gardant l'ADN "artisanal" du projet. Cependant, l'accumulation de manifestes théoriques (sur l'accueil, sur l'espace contribution, sur l'Atelier IA) commence à ralentir l'accès direct aux outils. Le visiteur doit comprendre en moins de 3 secondes que le projet est une bibliothèque ouverte et statique, et non un éditeur de texte dopé à l'IA.

## 2. Réponses aux 10 questions d'analyse

1. **La page d'accueil oriente-t-elle assez clairement ?**
   *Oui et non*. Elle explique bien la philosophie, mais les appels à l'action (CTA) concurrents peuvent perdre l'utilisateur.
2. **Les deux entrées Bibliothèque / Atelier IA sont-elles bien distinguées ?**
   *Oui*, si elles ont chacune un onglet clair dans la barre de navigation. L'Atelier IA doit être présenté comme un outil *complémentaire* et non comme le cœur du site.
3. **Le vocabulaire est-il compréhensible pour un enseignant non technicien ?**
   *Presque*. Des termes comme "Forge" ou "Documentation" peuvent évoquer l'univers des développeurs. Préférer "Bibliothèque ouverte" et "Comment ça marche ?".
4. **L'identité visuelle Laboratoire Typographique aide-t-elle ou surcharge-t-elle ?**
   *Elle aide énormément* à donner un côté "document de travail sérieux" et imprimable. Mais attention au "mur de texte" si les marges et les espacements ne sont pas aérés.
5. **Les alertes "Avant la séance" sont-elles visibles au bon moment ?**
   *Perfectibles*. Elles ont été identifiées comme critiques dans les tests précédents. Elles doivent être le premier élément visuel du 3e onglet (Notes prof).
6. **La séparation apprenant/professeur est-elle immédiatement compréhensible ?**
   *Oui*, la logique des 3 onglets (Vue d'ensemble / Contenu apprenant / Corrigés) est le point le plus fort de la nouvelle UX.
7. **L'Atelier IA & FLE évite-t-il le malentendu d'une IA intégrée ?**
   *Non, pas encore assez*. Le réflexe naturel face au mot "Atelier IA" est de chercher un champ de texte pour "parler à l'IA". Un bandeau rouge permanent est requis.
8. **Quelles microcopies faudrait-il améliorer ?**
   - "Prompts" -> "Instructions à copier".
   - "Atelier IA" -> "Atelier IA (Boîte à outils)".
9. **Quelles zones sont encore trop longues ?**
   Les blocs d'introduction de la page d'accueil et de l'Atelier IA. L'enseignant a besoin de la promesse en une phrase, puis d'accéder directement au catalogue.
10. **Quelle serait la prochaine amélioration la plus utile ?**
    Revoir le header (menu de navigation) et la "hero section" (haut de la page d'accueil) pour diviser clairement le trafic sans noyade textuelle.

---

## 3. Points forts
* **Cohérence de la mission** : L'Atelier IA et la Bibliothèque servent tous deux le même but (faire gagner du temps à l'enseignant).
* **Sobriété assumée** : L'absence de backend/login/auth garantit que le projet reste perçu comme un bien commun, gratuit et immédiat.
* **Sécurité pédagogique** : Le choix de ne jamais générer de texte automatiquement sur la plateforme prévient tout risque de "fraude" ou de dérive.

## 4. Points confus
* **Où chercher ?** Si la barre de recherche principale est sur l'accueil, cherche-t-elle aussi dans les prompts IA, ou seulement dans les fiches FLE ?
* **Le mot "Démo"** : S'il est partout, l'enseignant peut hésiter à utiliser les fiches ("Est-ce vraiment fini ou est-ce faux ?"). Il faut clarifier que *la plateforme* est une démo, mais que *les fiches* (sélectionnées) sont prêtes pour la classe.

## 5. Corrections rapides recommandées
1. **Navigation** : Créer un header minimaliste en haut de chaque page : `[Logo] | Chercher une ressource | Boîte à outils IA | Comment contribuer ?`.
2. **Clarification IA** : Ajouter le badge : *"Ce site est statique. Copiez nos instructions et utilisez-les dans votre IA favorite (ChatGPT, Claude, etc.)."* en haut de la page `/ai-workshop`.
3. **Badge "Prêt pour la classe"** : Rassurer l'utilisateur sur les fiches FLE complètes en indiquant visuellement qu'elles ne sont pas justes des brouillons techniques.

## 6. Corrections à différer (Ne pas faire maintenant)
* **Système de filtres complexes** (Niveaux/Tags) pour l'Atelier IA (inutile avec seulement 8 prompts).
* **Authentification ou Sauvegarde** : Toujours repousser cette idée pour la v0. La mémorisation doit se faire par copier-coller local.

## 7. Prochaine tâche conseillée pour Codex
**Refonte de la Home et de la Navigation Globale.**
> Instruction pour Codex : "L'architecture globale de l'application React doit être ajustée. Le header doit désormais présenter deux entrées de même niveau visuel : 'Bibliothèque' et 'Atelier IA'. Allège le texte de la page d'accueil : supprime le long paragraphe explicatif, remplace-le par un titre d'accroche très court ('Vos cours préparés plus vite, par et pour des profs') et deux gros boutons menant aux deux sections principales. Assure-toi que la page d'accueil n'appelle aucun backend."
