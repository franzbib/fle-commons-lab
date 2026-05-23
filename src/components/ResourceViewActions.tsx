import { useState } from 'react'

type ResourceViewActionsProps = {
  copyLabel: string
  copyText: string
  printLabel?: string
}

export function ResourceViewActions({
  copyLabel,
  copyText,
  printLabel = 'Imprimer cette vue',
}: ResourceViewActionsProps) {
  const [status, setStatus] = useState<string | null>(null)

  async function copyViewText() {
    if (!navigator.clipboard?.writeText) {
      setStatus('Copie indisponible dans ce navigateur.')
      return
    }

    try {
      await navigator.clipboard.writeText(copyText)
      setStatus('Texte copié.')
    } catch {
      setStatus('Copie impossible. Vous pouvez sélectionner le texte manuellement.')
    }
  }

  return (
    <div className="view-actions-panel" aria-label="Actions de copie et impression">
      <div className="view-actions">
        <button type="button" className="secondary-button" onClick={copyViewText}>
          {copyLabel}
        </button>
        <button type="button" className="secondary-button" onClick={() => window.print()}>
          {printLabel}
        </button>
      </div>
      {status ? (
        <p className="copy-status" role="status">
          {status}
        </p>
      ) : null}
    </div>
  )
}
