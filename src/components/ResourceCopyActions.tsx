import { useState } from 'react'
import type { Resource, ResourceSectionKey } from '../types/resource'
import { formatResourceForCopy, formatResourceSectionForCopy } from '../utils/resourceText'

type ResourceCopyActionsProps = {
  resource: Resource
}

type CopyAction = {
  label: string
  text: string
}

const copyTargets: Array<{ key: ResourceSectionKey; label: string }> = [
  { key: 'studentInstructions', label: 'Copier la fiche étudiant' },
  { key: 'teacherGuide', label: 'Copier le guide professeur' },
  { key: 'answerKey', label: 'Copier le corrigé' },
]

export function ResourceCopyActions({ resource }: ResourceCopyActionsProps) {
  const [status, setStatus] = useState<string>('')

  const actions: CopyAction[] = [
    ...copyTargets
      .filter(({ key }) => resource.content[key])
      .map(({ key, label }) => ({
        label,
        text: formatResourceSectionForCopy(resource, key),
      })),
    {
      label: 'Copier la fiche complète',
      text: formatResourceForCopy(resource),
    },
  ]

  async function copyText(action: CopyAction) {
    try {
      await navigator.clipboard.writeText(action.text)
      setStatus(`${action.label.replace('Copier ', '')} copié.`)
    } catch {
      setStatus('Copie impossible dans ce navigateur. Vous pouvez sélectionner le texte de la fiche.')
    }
  }

  function printPage() {
    window.print()
  }

  return (
    <section className="copy-actions-panel" aria-label="Actions enseignant">
      <div>
        <h2>Copier ou imprimer</h2>
        <p>
          Les blocs ci-dessous copient un texte propre, prêt à adapter dans un document de
          préparation.
        </p>
      </div>
      <div className="copy-actions">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            className="secondary-button"
            onClick={() => {
              void copyText(action)
            }}
          >
            {action.label}
          </button>
        ))}
        <button type="button" className="secondary-button" onClick={printPage}>
          Imprimer
        </button>
      </div>
      {status ? (
        <p className="copy-status" role="status">
          {status}
        </p>
      ) : null}
    </section>
  )
}
