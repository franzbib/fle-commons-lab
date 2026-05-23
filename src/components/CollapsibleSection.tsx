import type { ReactNode } from 'react'

type CollapsibleSectionProps = {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  return (
    <details className="collapsible-section" open={defaultOpen}>
      <summary>{title}</summary>
      <div className="collapsible-content">{children}</div>
    </details>
  )
}
