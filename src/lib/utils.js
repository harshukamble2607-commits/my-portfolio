/** Tiny className joiner (keeps the dependency list short). */
export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}

/**
 * Smoothly scrolls to a section by id while respecting reduced-motion
 * preferences. Falls back to an instant jump when motion is reduced.
 */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  el.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
  })
}
