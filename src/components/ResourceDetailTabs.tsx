import { useId, useState, type KeyboardEvent, type ReactNode } from 'react'

export type ResourceDetailTab = {
  id: string
  label: string
  description: string
  content: ReactNode
}

type ResourceDetailTabsProps = {
  tabs: ResourceDetailTab[]
  defaultTabId?: string
}

export function ResourceDetailTabs({ tabs, defaultTabId }: ResourceDetailTabsProps) {
  const baseId = useId()
  const initialTabId = defaultTabId ?? tabs[0]?.id
  const [activeTabId, setActiveTabId] = useState(initialTabId)

  const activeIndex = Math.max(
    tabs.findIndex((tab) => tab.id === activeTabId),
    0,
  )
  const activeTab = tabs[activeIndex]

  function focusTab(index: number) {
    const nextTab = tabs[index]
    if (!nextTab) {
      return
    }

    setActiveTabId(nextTab.id)
    window.requestAnimationFrame(() => {
      document.getElementById(`${baseId}-${nextTab.id}-tab`)?.focus()
    })
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      focusTab((activeIndex + 1) % tabs.length)
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      focusTab((activeIndex - 1 + tabs.length) % tabs.length)
    }

    if (event.key === 'Home') {
      event.preventDefault()
      focusTab(0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      focusTab(tabs.length - 1)
    }
  }

  if (!activeTab) {
    return null
  }

  return (
    <section className="resource-tabs" aria-label="Vues de la ressource">
      <div className="resource-tab-list" role="tablist" aria-label="Vues de la fiche">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id

          return (
            <button
              key={tab.id}
              id={`${baseId}-${tab.id}-tab`}
              type="button"
              className="resource-tab"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-${tab.id}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={handleKeyDown}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        id={`${baseId}-${activeTab.id}-panel`}
        className="resource-tab-panel"
        role="tabpanel"
        aria-labelledby={`${baseId}-${activeTab.id}-tab`}
      >
        <p className="tab-description">{activeTab.description}</p>
        {activeTab.content}
      </div>
    </section>
  )
}
