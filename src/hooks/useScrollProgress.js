import { useEffect, useState } from 'react'

/**
 * Returns the vertical scroll progress of the page as a number between 0 and 1.
 * Reads are batched with requestAnimationFrame so the listener stays passive
 * and never causes layout thrash while scrolling.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const next = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      setProgress(next)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}
