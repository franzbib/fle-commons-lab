export const contributorRoles = [
  'nouveau_contributeur',
  'contributeur_reconnu',
  'mainteneur_pedagogique',
  'mainteneur_technique',
  'administrateur_projet',
] as const

export const contributionStatuses = [
  'brouillon',
  'soumise',
  'en_relecture',
  'modifications_demandees',
  'acceptee',
  'integree',
  'refusee',
  'archivee',
] as const

export const resourceEditorialStatuses = [
  'brouillon',
  'utilisable',
  'testee',
  'validee',
  'a_reviser',
  'archivee',
] as const

export const contributionReviewLevels = [
  'auto_verification',
  'relecture_pedagogique',
  'relecture_technique',
  'validation_mainteneur',
] as const

export type ContributorRole = (typeof contributorRoles)[number]
export type ContributionStatus = (typeof contributionStatuses)[number]
export type ResourceEditorialStatus = (typeof resourceEditorialStatuses)[number]
export type ContributionReviewLevel = (typeof contributionReviewLevels)[number]

export type ContributorProfile = {
  id: string
  displayName: string
  role: ContributorRole
  bio?: string
  areasOfInterest: string[]
}

export const contributorRoleLabels: Record<ContributorRole, string> = {
  nouveau_contributeur: 'Nouveau contributeur',
  contributeur_reconnu: 'Contributeur reconnu',
  mainteneur_pedagogique: 'Mainteneur pedagogique',
  mainteneur_technique: 'Mainteneur technique',
  administrateur_projet: 'Administrateur projet',
}

export const contributionStatusLabels: Record<ContributionStatus, string> = {
  brouillon: 'Brouillon',
  soumise: 'Soumise',
  en_relecture: 'En relecture',
  modifications_demandees: 'Modifications demandees',
  acceptee: 'Acceptee',
  integree: 'Integree',
  refusee: 'Refusee',
  archivee: 'Archivee',
}
