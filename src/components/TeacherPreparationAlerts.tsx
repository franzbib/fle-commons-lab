import type { PreparationAlertType, Resource } from '../types/resource'

type TeacherPreparationAlertsProps = {
  resource: Resource
  variant?: 'summary' | 'full'
}

const alertTypeLabels: Record<PreparationAlertType, string> = {
  materiel: 'Matériel',
  impression_decoupage: 'À imprimer / découper',
  media: 'Média à vérifier',
  organisation: 'Organisation',
  temps_preparation: 'Préparation',
  vigilance: 'Vigilance',
  impression: 'Impression',
}

export function TeacherPreparationAlerts({
  resource,
  variant = 'full',
}: TeacherPreparationAlertsProps) {
  const alerts = resource.preparationAlerts ?? []

  if (alerts.length === 0) {
    return null
  }

  if (variant === 'summary') {
    const summary = alerts
      .slice(0, 3)
      .map((alert) => alert.label)
      .join(' · ')
    const remainingCount = alerts.length - 3

    return (
      <div className="preparation-summary">
        <strong>Préparation :</strong> {summary}
        {remainingCount > 0 ? ` · +${remainingCount}` : ''}
      </div>
    )
  }

  return (
    <section className="detail-section preparation-alerts" aria-label="Préparation enseignant">
      <h2>Avant la séance</h2>
      <div className="preparation-alert-grid">
        {alerts.map((alert) => (
          <article key={`${alert.type}-${alert.label}`} className="preparation-alert-card">
            <span>{alertTypeLabels[alert.type]}</span>
            <h3>{alert.label}</h3>
            <p>{alert.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
