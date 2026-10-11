import { Icon } from './Icon.jsx'

/** Small window "chrome" used by the preview panels. */
function FrameChrome({ label }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-subtle/70 px-3 py-2">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2E4E8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2E4E8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2E4E8]" />
      </span>
      <span className="ml-1 truncate text-2xs font-medium uppercase tracking-wide text-muted">
        {label}
      </span>
    </div>
  )
}

/**
 * Editorial hero composition: two overlapping project-preview panels (real
 * screenshots where available) plus a small code-inspired note. Deliberately
 * not a mock analytics dashboard — it previews actual work.
 */
export function HeroVisual() {
  return (
    <div className="relative">
      {/* Decorative ground shadow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-accent-soft/60 via-transparent to-subtle/70"
      />

      <div className="relative mx-auto max-w-[520px]">
        {/* Primary panel — Clinix (real screenshot) */}
        <figure className="overflow-hidden rounded-panel border border-line bg-card shadow-raised">
          <FrameChrome label="Clinix · Clinician Dashboard" />
          <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
            <img
              src="screenshots/clinix-dashboard.png"
              alt="Clinix clinician dashboard interface"
              width="1280"
              height="800"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </figure>

        {/* Overlapping secondary panel — FarmSwift (placeholder art) */}
        <figure className="absolute -bottom-8 -left-4 hidden w-[58%] overflow-hidden rounded-card border border-line bg-card shadow-hover sm:block lg:-left-10">
          <FrameChrome label="FarmSwift · Prototype" />
          <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
            <img
              src="screenshots/farmswift.svg"
              alt="FarmSwift marketplace prototype placeholder artwork"
              width="640"
              height="400"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-2 right-2 rounded-full border border-line bg-card/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted backdrop-blur-sm">
              Placeholder
            </span>
          </div>
        </figure>

        {/* Code-inspired note card */}
        <div className="absolute -right-3 -top-6 hidden w-52 rounded-card border border-line bg-card/95 p-3.5 shadow-raised backdrop-blur-sm sm:block lg:-right-8">
          <div className="flex items-center gap-1.5 text-2xs font-medium uppercase tracking-wide text-muted">
            <Icon name="Code2" size={13} className="text-accent" />
            Focus
          </div>
          <pre className="mt-2 overflow-hidden font-mono text-[11px] leading-relaxed text-muted">
            <span className="text-accent">const</span> focus = [
            {'\n'}  <span className="text-ink">{'"Machine Learning"'}</span>,
            {'\n'}  <span className="text-ink">{'"Full-Stack"'}</span>,
            {'\n'}  <span className="text-ink">{'"GenAI"'}</span>,
            {'\n'}]
          </pre>
        </div>
      </div>
    </div>
  )
}
