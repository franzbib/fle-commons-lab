import { useState } from 'react'

type CopyPromptButtonProps = {
  promptText: string
}

export function CopyPromptButton({ promptText }: CopyPromptButtonProps) {
  const [status, setStatus] = useState<string | null>(null)

  async function copyPrompt() {
    if (!navigator.clipboard?.writeText) {
      setStatus('Copie indisponible.')
      return
    }

    try {
      await navigator.clipboard.writeText(promptText)
      setStatus('Prompt copié.')
    } catch {
      setStatus('Copie impossible. Sélectionnez le texte manuellement.')
    }
  }

  return (
    <div className="prompt-copy-action">
      <button type="button" className="secondary-button" onClick={copyPrompt}>
        Copier le prompt
      </button>
      {status ? (
        <span className="copy-status" role="status">
          {status}
        </span>
      ) : null}
    </div>
  )
}
