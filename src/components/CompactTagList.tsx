type CompactTagListProps = {
  tags: string[]
  limit?: number
}

export function CompactTagList({ tags, limit = 3 }: CompactTagListProps) {
  const visibleTags = tags.slice(0, limit)
  const remainingCount = Math.max(tags.length - visibleTags.length, 0)

  if (tags.length === 0) {
    return null
  }

  return (
    <div className="tag-list compact-tag-list" aria-label="Tags">
      {visibleTags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
      {remainingCount > 0 ? (
        <span title={tags.slice(limit).join(', ')}>+{remainingCount} tags</span>
      ) : null}
    </div>
  )
}
