import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  tone?: 'neutral' | 'level' | 'status' | 'tech' | 'ai' | 'access'
}

export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}
