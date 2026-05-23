import { useState } from 'react'

type CopyPromptButtonProps = {
  promptText: string
  label?: string
}

export function CopyPromptButton({
  promptText,
  label = 'Copier le prompt modele',
}: CopyPromptButtonProps) {
  const [status, setStatus] = useState<string | null>(null)

  async function copyPrompt() {
    if (!navigator.clipboard?.writeText) {
      setStatus('Copie indisponible.')
      return
    }

    try {
      await navigator.clipboard.writeText(promptText)
      setStatus('Instruction copiee.')
    } catch {
      setStatus('Copie impossible. Selectionnez le texte manuellement.')
    }
  }

  return (
    <div className="prompt-copy-action">
      <button type="button" className="secondary-button prompt-copy-button" onClick={copyPrompt}>
        {label}
      </button>
      {status ? (
        <span className="copy-status" role="status">
          {status}
        </span>
      ) : null}
    </div>
  )
}
