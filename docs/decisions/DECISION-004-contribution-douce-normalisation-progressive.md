# DECISION-004 — Contribution douce, normalisation progressive et publication graduée

## Statut

Adoptée pour la v0.3.

## Problème

Les enseignants de FLE travaillent majoritairement avec des matériaux pédagogiques réels et imparfaits : documents Word, PDF, copier-coller, plans de cours, exercices incomplets, supports longs, fragments de corrigés, consignes testées oralement ou documents encore peu structurés.

Ces matériaux sont précieux, mais ils ne sont pas immédiatement publiables comme ressources ouvertes. Ils peuvent être incomplets, hétérogènes, trop dépendants d’un contexte local, contenir des éléments juridiquement incertains ou mélanger support étudiant, notes professeur et corrigé.

Le projet doit donc éviter deux impasses :

- demander aux enseignants de comprendre Markdown, YAML, Git ou GitHub avant de contribuer ;
- publier trop vite des supports bruts comme s’ils étaient déjà des ressources FLE normalisées.

Le projet ne doit pas non plus dépendre d’une modération humaine lourde et coûteuse. Même si Laforge grandit, il doit rester sobre financièrement, lisible techniquement et capable de traiter progressivement des contributions sans construire trop tôt une plateforme complexe.

## Décision

Laforge accepte le principe des matériaux pédagogiques bruts, mais distingue clairement dépôt, normalisation et publication.

Un dépôt brut n’est pas une publication.

Toute ressource issue d’un support réel passe par un sas de normalisation avant de devenir une ressource partageable dans la forge. Ce sas sert à transformer un matériau enseignant en ressource structurée, lisible, réutilisable, améliorable et juridiquement plus sûre.

La publication est graduée par statuts. Une ressource peut être visible ou exploitable avec prudence sans être validée par la forge. La validation finale reste une étape éditoriale et pédagogique explicite.

L’IA peut assister certaines opérations de tri, extraction, reformulation, diagnostic ou anonymisation. Elle ne valide jamais seule une ressource, un niveau CECRL, une licence, un corrigé ou une qualité pédagogique.

La v0.3 reste statique ou semi-statique. Elle peut documenter ce cycle, préparer les types et les exemples, mais ne doit pas encore ajouter de backend, Supabase, authentification ou stockage massif.

Les structures créées doivent toutefois rester compatibles avec une future migration vers Supabase ou un autre backend sobre : identifiants stables, statuts explicites, séparation des blocs de données et documentation claire.

## Cycle de vie d’une ressource

Le cycle de vie cible d’une ressource Laforge est le suivant :

1. **Ressource brute**
   Matériau pédagogique déposé ou transmis tel quel : texte, Word, PDF, extrait de plan de cours, exercice incomplet, consignes, notes ou support composite.

2. **En normalisation**
   Le matériau est analysé pour identifier sa structure pédagogique, ses manques, ses risques et ses possibilités de transformation.

3. **À compléter**
   La ressource possède une structure minimale, mais il manque encore des éléments importants : objectifs, corrigé, guide professeur, licence, source, variante ou retour d’usage.

4. **Partageable avec prudence**
   La ressource peut être consultée ou testée, mais elle comporte encore des limites explicites : droit à vérifier, niveau approximatif, corrigé incomplet, adaptation nécessaire.

5. **Testée en classe**
   La ressource a été utilisée dans un contexte réel et dispose au moins d’un retour d’usage exploitable.

6. **Relue**
   La ressource a fait l’objet d’une relecture pédagogique, linguistique, éditoriale ou juridique selon son contenu.

7. **Validée par la forge**
   La ressource est suffisamment structurée, relue, documentée et sûre pour être présentée comme ressource de référence du commun pédagogique.

8. **Archivée**
   La ressource reste conservée pour mémoire ou réutilisation future, mais n’est plus recommandée telle quelle.

## Rôle du sas de normalisation

Le sas de normalisation est l’espace conceptuel entre le dépôt brut et la publication.

Il sert à :

- extraire les blocs pédagogiques ;
- identifier le support étudiant ;
- identifier le guide professeur ;
- identifier le corrigé ou les critères de réussite ;
- identifier les variantes possibles ;
- signaler les manques ;
- signaler les risques juridiques ;
- aider à anonymiser les données personnelles ;
- repérer les contenus protégés ou de provenance incertaine ;
- clarifier le niveau, la durée, les compétences, le type et le thème ;
- générer ou préparer une structure Markdown/YAML propre ;
- documenter ce qui reste à vérifier humainement.

Le sas n’est pas une validation automatique. C’est un dispositif d’aide à la mise en forme, à la clarification et à la montée en qualité.

## Rôle de l’IA

L’IA peut intervenir comme assistance, jamais comme autorité finale.

Usages possibles :

- extraction de blocs pédagogiques depuis un matériau brut ;
- classement provisoire par niveau, compétence, type ou thème ;
- diagnostic des manques ;
- proposition de normalisation ;
- reformulation de consignes ;
- anonymisation assistée ;
- signalement de risques juridiques ou de données personnelles ;
- suggestion de variantes ;
- préparation d’une structure Markdown/YAML.

Limites non négociables :

- l’IA ne valide pas seule une ressource ;
- l’IA ne valide pas seule un niveau CECRL ;
- l’IA ne certifie pas une licence ;
- l’IA ne garantit pas l’absence de contenu protégé ;
- l’IA ne remplace pas la relecture enseignante ;
- l’IA ne décide pas de la publication finale.

Toute assistance IA doit rester traçable, contrôlée et relue par un humain.

## Conséquences techniques pour la v0.3

La v0.3 doit préparer cette architecture sans l’implémenter lourdement.

Conséquences attendues :

- conserver des identifiants stables pour les ressources ;
- distinguer clairement métadonnées, contenu pédagogique, audit, retours d’usage, versions et suggestions ;
- maintenir des statuts éditoriaux explicites ;
- documenter les statuts de normalisation et de publication ;
- ne pas rendre obligatoire un compte utilisateur ;
- ne pas rendre obligatoire une base de données ;
- ne pas ajouter Supabase tant que le modèle de contribution n’est pas stabilisé ;
- garder les fichiers locaux et exemples Markdown comme base de réflexion ;
- préparer conceptuellement une future migration vers Supabase ou un backend sobre ;
- éviter toute dépendance à une modération temps réel ou à une infrastructure coûteuse.

Cette décision confirme que la contribution ordinaire doit rester douce : un enseignant doit pouvoir transmettre un matériau pédagogique sans comprendre l’architecture technique du projet.

## Ce qui est explicitement différé

Les éléments suivants sont différés et ne doivent pas être ajoutés sans décision explicite :

- authentification ;
- profils utilisateurs complets ;
- rôles et permissions réels ;
- messagerie ;
- forum ;
- modération avancée ;
- notifications ;
- paiement ;
- abonnement ;
- restriction réelle d’accès ;
- stockage massif de fichiers ;
- upload public ;
- traitement automatique complet de documents ;
- validation IA autonome ;
- publication automatique d’un dépôt brut.

## Principe directeur final

**Accueil généreux des matériaux bruts, publication exigeante des ressources structurées.**

Laforge doit être accueillant pour les enseignants qui partent de leurs supports réels, mais exigeant au moment de publier une ressource comme commun pédagogique réutilisable.
