import { useCallback, useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../data/profile.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import { scrollToId, cn } from '../lib/utils.js'
import { Icon } from './Icon.jsx'
import { ResumeButton } from './ResumeButton.jsx'

const NAV_IDS = navItems.map((item) => item.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(NAV_IDS)

  const listRef = useRef(null)
  const itemRefs = useRef({})
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false })

  // Subtle elevation + background change once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Position the sliding active-section indicator under the active link.
  const moveIndicator = useCallback(() => {
    const node = itemRefs.current[activeId]
    const list = listRef.current
    if (!node || !list) return
    setIndicator({ left: node.offsetLeft, width: node.offsetWidth, ready: true })
  }, [activeId])

  useEffect(() => {
    moveIndicator()
    // Re-measure after fonts/layout settle and on resize.
    const t = window.setTimeout(moveIndicator, 350)
    window.addEventListener('resize', moveIndicator)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('resize', moveIndicator)
    }
  }, [moveIndicator])

  // Mobile menu: lock scroll, focus management, and Escape-to-close.
  useEffect(() => {
    if (!menuOpen) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const first = panelRef.current?.querySelector('a, button')
    first?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const go = (id) => (event) => {
    event.preventDefault()
    setMenuOpen(false)
    // Let the panel start closing before scrolling for a smoother feel.
    window.setTimeout(() => scrollToId(id), menuOpen ? 160 : 0)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-out-soft',
        scrolled
          ? 'border-line bg-canvas/85 shadow-nav backdrop-blur-md supports-[backdrop-filter]:bg-canvas/70'
          : 'border-transparent bg-canvas/0',
      )}
    >
      <nav
        className="container-page flex h-[68px] items-center justify-between gap-3"
        aria-label="Primary"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={go('home')}
          className="group flex items-center gap-2.5 rounded-lg py-1 pr-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-ink text-[13px] font-semibold tracking-tight text-white transition-colors duration-300 group-hover:bg-accent">
            {profile.monogram}
          </span>
          <span className="hidden text-[15px] font-semibold tracking-tight text-ink sm:block">
            {profile.displayName}
          </span>
        </a>

        {/* Desktop links */}
        <div ref={listRef} className="relative hidden items-center md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el
                }}
                href={`#${item.id}`}
                onClick={go(item.id)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative rounded-md px-3 py-2 text-sm transition-colors duration-200',
                  isActive ? 'font-medium text-ink' : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
              </a>
            )
          })}
          <span
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute -bottom-0.5 h-[2px] rounded-full bg-accent transition-all duration-300 ease-out-soft',
              indicator.ready ? 'opacity-100' : 'opacity-0',
            )}
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
            }}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <ResumeButton className="hidden sm:inline-flex" />

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-ink transition-colors hover:border-accent/30 hover:text-accent md:hidden"
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={cn(
          'container-page overflow-hidden border-t border-line bg-canvas md:hidden',
          'transition-[max-height,opacity] duration-300 ease-out-soft',
          menuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col py-2">
          {navItems.map((item, i) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={go(item.id)}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-current={isActive ? 'true' : undefined}
                  style={{ transitionDelay: menuOpen ? `${i * 25}ms` : '0ms' }}
                  className={cn(
                    'flex items-center justify-between border-b border-line/70 py-3.5 text-[15px] transition-all duration-300',
                    menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
                    isActive ? 'font-medium text-accent' : 'text-ink',
                  )}
                >
                  {item.label}
                  <Icon
                    name="ArrowUpRight"
                    size={16}
                    className={cn(
                      'transition-opacity',
                      isActive ? 'opacity-100 text-accent' : 'opacity-0',
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>
        <div className="pb-4 pt-1 sm:hidden">
          <ResumeButton className="w-full justify-center" />
        </div>
      </div>
    </header>
  )
}
