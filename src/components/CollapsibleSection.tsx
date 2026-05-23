import React, { useState } from 'react'

type CollapsibleSectionProps = {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <details
      className="collapsible-section"
      open={isOpen}
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="collapsible-summary">
        <span className="summary-icon">{isOpen ? '▾' : '▸'}</span>
        <span className="summary-title">{title}</span>
      </summary>
      <div className="collapsible-content">{children}</div>
    </details>
  )
}
