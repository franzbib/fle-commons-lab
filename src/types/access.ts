export const accessLevels = [
  'public',
  'unlisted',
  'private',
  'members_only',
  'institution_only',
  'premium',
  'draft_only',
] as const

export const monetizationStatuses = [
  'free',
  'donation_supported',
  'members_only',
  'paid',
  'institution_licensed',
  'undecided',
] as const

export const membershipTiers = [
  'visitor',
  'registered_member',
  'contributor',
  'recognized_contributor',
  'supporting_member',
  'institutional_member',
  'maintainer',
  'admin',
] as const

export type AccessLevel = (typeof accessLevels)[number]
export type MonetizationStatus = (typeof monetizationStatuses)[number]
export type MembershipTier = (typeof membershipTiers)[number]
