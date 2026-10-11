import { Reveal } from './Reveal.jsx'

/**
 * Consistent section heading with an optional eyebrow ("kicker"), a title,
 * and a supporting description. The small accent rule animates in with the
 * heading rather than on its own timer.
 */
export function SectionHeading({ kicker, title, description, align = 'left', id }) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {kicker && (
        <Reveal>
          <div className={centered ? 'flex flex-col items-center' : ''}>
            <span className="eyebrow">{kicker}</span>
            <span
              className="mt-2 block h-px w-10 origin-left bg-accent/40 animate-draw-line"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      )}
      <Reveal delay={70}>
        <h2
          id={id}
          className="mt-3 text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl"
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
