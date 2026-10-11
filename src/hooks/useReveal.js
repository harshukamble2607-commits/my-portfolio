import { useEffect } from 'react'

/**
 * Mounts a single IntersectionObserver that reveals every element carrying a
 * `data-reveal` attribute by adding the `is-visible` class once it enters the
 * viewport. Elements are unobserved after revealing, so each one animates a
 * single time and scrolling stays cheap.
 *
 * If IntersectionObserver is unavailable the elements are revealed
 * immediately, so content is never trapped at opacity 0.
 */
export function useRevealObserver() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))

    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    nodes.forEach((node) => observer.observe(node))

    // Safety net: reveal anything still hidden shortly after load in case the
    // observer misses an element (e.g. it is already past the viewport).
    const fallback = window.setTimeout(() => {
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect()
        if (rect.top < window.innerHeight) node.classList.add('is-visible')
      })
    }, 1200)

    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [])
}
