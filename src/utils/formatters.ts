import type {
  ActivityFormat,
  AiAssistanceLevel,
  AiUseCase,
  ClassroomMode,
  CollectionVisibility,
  ContributionStatus,
  ContributionType,
  DigitalFormat,
  DurationCategory,
  EditorialStatus,
  ResourceLicense,
  ResourceSectionKey,
  ResourceSkill,
  ResourceTemplate,
  ResourceType,
  ReuseReadiness,
  SourceType,
  TeacherPreparationLevel,
  TechnicalDifficulty,
} from '../types/resource'

type LabelMap<T extends string> = Record<T, string>

const skillLabels: LabelMap<ResourceSkill> = {
  comprehension_ecrite: 'Compréhension écrite',
  comprehension_orale: 'Compréhension orale',
  expression_ecrite: 'Expression écrite',
  expression_orale: 'Expression orale',
  interaction_orale: 'Interaction orale',
  interaction_ecrite: 'Interaction écrite',
  grammaire: 'Grammaire',
  lexique: 'Lexique',
  phonetique: 'Phonétique',
  culture: 'Culture',
  methodologie: 'Méthodologie',
  mediation: 'Médiation',
  litteratie_numerique: 'Littératie numérique',
  esprit_critique: 'Esprit critique',
  collaboration: 'Collaboration',
}

const typeLabels: LabelMap<ResourceType> = {
  exercice: 'Exercice',
  sequence: 'Séquence',
  evaluation: 'Évaluation',
  fiche: 'Fiche',
  activite_orale: 'Activité orale',
  comprehension_ecrite: 'Compréhension écrite',
  comprehension_orale: 'Compréhension orale',
  jeu_pedagogique: 'Jeu pédagogique',
  projet: 'Projet',
  atelier_numerique: 'Atelier numérique',
  scenario_ia: 'Scénario IA',
  prompt_pedagogique: 'Prompt pédagogique',
  guide_enseignant: 'Guide enseignant',
  autre: 'Autre',
}

const templateLabels: LabelMap<ResourceTemplate> = {
  conversation_guidee: 'Conversation guidée',
  document_declencheur: 'Document déclencheur',
  grammaire_inductive: 'Grammaire inductive',
  lexique_actif: 'Lexique actif',
  jeu_pedagogique: 'Jeu pédagogique',
  sequence_complete: 'Séquence complète',
  evaluation: 'Évaluation',
  remediation: 'Remédiation',
  projet_collaboratif: 'Projet collaboratif',
  atelier_numerique: 'Atelier numérique',
  scenario_ia: 'Scénario IA',
  analyse_de_document: 'Analyse de document',
  production_assistee: 'Production assistée',
  autre: 'Autre',
}

const activityFormatLabels: LabelMap<ActivityFormat> = {
  individuel: 'Individuel',
  binomes: 'Binômes',
  petits_groupes: 'Petits groupes',
  classe_entiere: 'Classe entière',
  autonomie: 'Autonomie',
  semi_autonomie: 'Semi-autonomie',
  hybride: 'Hybride',
  classe_inversee: 'Classe inversée',
  atelier: 'Atelier',
  projet_long: 'Projet long',
  rituel_court: 'Rituel court',
}

const classroomModeLabels: LabelMap<ClassroomMode> = {
  presentiel: 'Présentiel',
  distanciel: 'Distanciel',
  hybride: 'Hybride',
  autonomie: 'Autonomie',
  accompagnement_enseignant: 'Accompagnement enseignant',
  salle_informatique: 'Salle informatique',
  smartphone_autorise: 'Smartphone autorisé',
  videoprojection: 'Vidéoprojection',
}

const durationLabels: LabelMap<DurationCategory> = {
  moins_15_min: 'Moins de 15 min',
  '15_30_min': '15 à 30 min',
  '30_60_min': '30 à 60 min',
  '60_120_min': '60 à 120 min',
  sequence_longue: 'Séquence longue',
  projet_plusieurs_seances: 'Projet sur plusieurs séances',
}

const statusLabels: LabelMap<EditorialStatus> = {
  brouillon: 'Brouillon',
  utilisable: 'Utilisable',
  teste: 'Testé',
  valide: 'Validé',
  archive: 'Archivé',
}

const readinessLabels: LabelMap<ReuseReadiness> = {
  a_completer: 'À compléter',
  pret_a_tester: 'Prêt à tester',
  pret_a_utiliser: 'Prêt à utiliser',
  teste_en_classe: 'Testé en classe',
  a_adapter: 'À adapter',
  valide_communautairement: 'Validé communautairement',
}

const licenseLabels: LabelMap<ResourceLicense> = {
  CC_BY: 'CC BY',
  CC_BY_SA: 'CC BY-SA',
  CC_BY_NC: 'CC BY-NC',
  CC_BY_NC_SA: 'CC BY-NC-SA',
  domaine_public: 'Domaine public',
  tous_droits_reserves: 'Tous droits réservés',
  a_verifier: 'À vérifier',
}

const sourceTypeLabels: LabelMap<SourceType> = {
  document_cree: 'Document créé',
  document_authentique: 'Document authentique',
  texte: 'Texte',
  image: 'Image',
  audio: 'Audio',
  video: 'Vidéo',
  infographie: 'Infographie',
  page_web: 'Page web',
  document_administratif: 'Document administratif',
  corpus: 'Corpus',
  interaction_ia: 'Interaction IA',
  autre: 'Autre',
}

const preparationLabels: LabelMap<TeacherPreparationLevel> = {
  faible: 'Faible',
  moyen: 'Moyen',
  important: 'Important',
}

const digitalFormatLabels: LabelMap<DigitalFormat> = {
  aucun: 'Aucun',
  document_imprimable: 'Document imprimable',
  support_videoprojectable: 'Support vidéoprojectable',
  formulaire_interactif: 'Formulaire interactif',
  quiz_interactif: 'Quiz interactif',
  jeu_numerique: 'Jeu numérique',
  tableau_collaboratif: 'Tableau collaboratif',
  prompt: 'Prompt',
  chatbot: 'Chatbot',
  audio_video: 'Audio / vidéo',
  autre: 'Autre',
}

const technicalDifficultyLabels: LabelMap<TechnicalDifficulty> = {
  aucune: 'Aucune',
  faible: 'Faible',
  moyenne: 'Moyenne',
  elevee: 'Élevée',
}

const aiUseCaseLabels: LabelMap<AiUseCase> = {
  aucun: 'Aucun',
  generation_de_support: 'Génération de support',
  reformulation: 'Reformulation',
  correction_formative: 'Correction formative',
  aide_a_la_recherche: 'Aide à la recherche',
  simulation_dialogue: 'Simulation de dialogue',
  analyse_de_document: 'Analyse de document',
  differenciation: 'Différenciation',
  aide_a_la_synthese: 'Aide à la synthèse',
  creation_de_quiz: 'Création de quiz',
  audit_pedagogique: 'Audit pédagogique',
  autre: 'Autre',
}

const aiAssistanceLabels: LabelMap<AiAssistanceLevel> = {
  aucun: 'Aucun',
  optionnel: 'Optionnel',
  guide: 'Guidé',
  central: 'Central',
  experimental: 'Expérimental',
}

const collectionVisibilityLabels: LabelMap<CollectionVisibility> = {
  privee: 'Privée',
  partagee: 'Partagée',
  publique: 'Publique',
}

const contributionTypeLabels: LabelMap<ContributionType> = {
  correction: 'Correction',
  ajout_corrige: 'Ajout de corrigé',
  clarification_consigne: 'Clarification de consigne',
  variante_niveau: 'Variante de niveau',
  variante_numerique: 'Variante numérique',
  variante_ia: 'Variante IA',
  retour_usage: 'Retour d’usage',
  signalement_droit_auteur: 'Signalement droit d’auteur',
  autre: 'Autre',
}

const contributionStatusLabels: LabelMap<ContributionStatus> = {
  en_attente: 'En attente',
  acceptee: 'Acceptée',
  refusee: 'Refusée',
  integree: 'Intégrée',
}

const sectionLabels: LabelMap<ResourceSectionKey> = {
  objectives: 'Objectifs',
  prerequisites: 'Pre-requis',
  lessonPlan: 'Deroule',
  studentInstructions: 'Support etudiant',
  teacherGuide: 'Guide professeur',
  answerKey: 'Corrige',
  variants: 'Variantes',
  usageNotes: "Retours d'usage",
  techNotes: 'Notes numeriques',
  aiNotes: 'Notes IA',
  versionHistory: 'Historique des versions',
}

export const sectionOrder: ResourceSectionKey[] = [
  'objectives',
  'prerequisites',
  'lessonPlan',
  'studentInstructions',
  'teacherGuide',
  'answerKey',
  'variants',
  'usageNotes',
  'techNotes',
  'aiNotes',
  'versionHistory',
]

export function formatSkill(value: ResourceSkill): string {
  return skillLabels[value]
}

export function formatResourceType(value: ResourceType): string {
  return typeLabels[value]
}

export function formatResourceTemplate(value: ResourceTemplate): string {
  return templateLabels[value]
}

export function formatActivityFormat(value: ActivityFormat): string {
  return activityFormatLabels[value]
}

export function formatClassroomMode(value: ClassroomMode): string {
  return classroomModeLabels[value]
}

export function formatDurationCategory(value: DurationCategory): string {
  return durationLabels[value]
}

export function formatStatus(value: EditorialStatus): string {
  return statusLabels[value]
}

export function formatReuseReadiness(value: ReuseReadiness): string {
  return readinessLabels[value]
}

export function formatLicense(value: ResourceLicense): string {
  return licenseLabels[value]
}

export function formatSourceType(value: SourceType): string {
  return sourceTypeLabels[value]
}

export function formatTeacherPreparation(value: TeacherPreparationLevel): string {
  return preparationLabels[value]
}

export function formatDigitalFormat(value: DigitalFormat): string {
  return digitalFormatLabels[value]
}

export function formatTechnicalDifficulty(value: TechnicalDifficulty): string {
  return technicalDifficultyLabels[value]
}

export function formatAiUseCase(value: AiUseCase): string {
  return aiUseCaseLabels[value]
}

export function formatAiAssistanceLevel(value: AiAssistanceLevel): string {
  return aiAssistanceLabels[value]
}

export function formatCollectionVisibility(value: CollectionVisibility): string {
  return collectionVisibilityLabels[value]
}

export function formatContributionType(value: ContributionType): string {
  return contributionTypeLabels[value]
}

export function formatContributionStatus(value: ContributionStatus): string {
  return contributionStatusLabels[value]
}

export function formatSectionLabel(value: ResourceSectionKey): string {
  return sectionLabels[value]
}

export function formatBoolean(value: boolean): string {
  return value ? 'Oui' : 'Non'
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}
