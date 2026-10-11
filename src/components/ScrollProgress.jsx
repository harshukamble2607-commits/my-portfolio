import { useScrollProgress } from '../hooks/useScrollProgress.js'

/**
 * Thin, unobtrusive reading-progress line pinned to the very top of the page.
 * Its width is driven by a CSS transform so it never triggers layout.
 */
export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
      role="presentation"
    >
      <div
        className="h-full origin-left bg-accent transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
