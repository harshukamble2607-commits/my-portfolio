import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile.js'
import { Icon } from './Icon.jsx'
import { cn } from '../lib/utils.js'

/**
 * "Download Resume" control.
 *
 * - If `profile.resumeUrl` is set, this is a real download link.
 * - If it is not set yet, the control opens a small, clearly-worded notice
 *   instead of linking to a missing file. It never fakes a download.
 */
export function ResumeButton({ className }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const base =
    'group inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-sm font-medium transition-all duration-300 ease-out-soft'

  if (profile.resumeUrl) {
    return (
      <a
        href={profile.resumeUrl}
        download
        className={cn(
          base,
          'bg-accent text-white shadow-soft hover:bg-[#2a5271] hover:shadow-raised active:translate-y-px',
          className,
        )}
      >
        <Icon name="Download" size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
        <span>Résumé</span>
      </a>
    )
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={cn(
          base,
          'border border-line bg-white text-muted hover:border-accent/30 hover:text-accent',
          className,
        )}
      >
        <Icon name="Download" size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
        <span>Résumé</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Resume not available yet"
          className="absolute right-0 top-11 z-50 w-64 origin-top-right rounded-xl border border-line bg-card p-3.5 text-left shadow-raised animate-fade-up"
        >
          <p className="text-sm font-medium text-ink">Résumé coming soon</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            The PDF isn&apos;t published yet. To enable this button, add the file and set{' '}
            <code className="rounded bg-subtle px-1 py-0.5 font-mono text-[11px] text-ink">
              resumeUrl
            </code>{' '}
            in <span className="whitespace-nowrap font-mono text-[11px]">src/data/profile.js</span>.
          </p>
        </div>
      )}
    </div>
  )
}
