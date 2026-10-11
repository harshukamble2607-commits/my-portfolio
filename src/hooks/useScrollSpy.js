import { useEffect, useRef, useState } from 'react'

/**
 * Determines which page section is currently active for the navigation.
 * Uses IntersectionObserver to track section visibility and selects the
 * section occupying the largest share of the viewport, which reads better
 * than a pure scroll-position guess for sections of varying height.
 */
export function useScrollSpy(ids, { offset = 120 } = {}) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')
  const ratios = useRef(new Map())

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const pick = () => {
      // Keep the section just under the navigation bar as active when the page
      // is at (or near) the top or bottom, otherwise pick the most visible one.
      let best = activeId
      let bestRatio = 0
      ratios.current.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio
          best = id
        }
      })
      if (bestRatio > 0) setActiveId(best)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })
        pick()
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.35, 0.6, 0.9],
      },
    )

    sections.forEach((section) => observer.observe(section))

    // At the very top, pin "home"; if the user scrolls to the absolute bottom,
    // pin the last section so the indicator never gets stuck mid-page.
    const onEdge = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 4
      const atTop = window.scrollY <= offset * 0.5
      if (atTop) setActiveId(ids[0])
      else if (atBottom) setActiveId(ids[ids.length - 1])
    }
    window.addEventListener('scroll', onEdge, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onEdge)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(','), offset])

  return activeId
}
