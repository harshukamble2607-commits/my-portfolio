import { experience } from '../data/profile.js'
import { Icon } from './Icon.jsx'
import { Reveal } from './Reveal.jsx'
import { Section } from './Section.jsx'
import { SectionHeading } from './SectionHeading.jsx'

/**
 * Renders a single experience entry. Entries whose exact details have not been
 * confirmed yet (`configured: false`) are shown as a clearly-marked "pending"
 * state — no title, dates, or responsibilities are invented.
 */
function TimelineEntry({ entry, delay }) {
  return (
    <Reveal as="li" delay={delay} className="relative pl-10 sm:pl-12">
      {/* Node */}
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-1.5 grid h-3.5 w-3.5 -translate-x-1/2 place-items-center rounded-full border-2 border-accent bg-canvas sm:left-[9px]"
      />

      <article className="rounded-card border border-line bg-card p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-ink">{entry.organization}</h3>
          {entry.configured ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-muted">
              {entry.status && (
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              )}
              {entry.status}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-line bg-canvas px-2.5 py-1 text-xs font-medium text-muted">
              <Icon name="AlertCircle" size={13} />
              Details pending
            </span>
          )}
        </div>

        {entry.configured ? (
          <>
            <p className="mt-1 text-[15px] font-medium text-accent">{entry.title}</p>
            <p className="mt-1 text-sm text-muted">
              {entry.dates}
              {entry.location ? ` · ${entry.location}` : ''}
            </p>
            <ul className="mt-4 space-y-2">
              {entry.points.map((point, i) => (
                <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <p className="mt-1 text-[15px] font-medium text-accent">
              Machine Learning Internship
            </p>
            <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-muted">
              Exact internship title, dates, current status, and verified
              responsibilities will be published here once confirmed from the offer
              letter and completed work. Nothing is listed until it is verified.
            </p>
            <p className="mt-3 text-xs text-muted/80">
              To update, edit{' '}
              <span className="font-mono">experience.entries</span> in{' '}
              <span className="font-mono">src/data/profile.js</span> and set{' '}
              <span className="font-mono">configured: true</span>.
            </p>
          </>
        )}
      </article>
    </Reveal>
  )
}

export function Experience() {
  const { entries, extras } = experience

  return (
    <Section id="experience" muted>
      <SectionHeading
        kicker="Experience"
        title={experience.heading}
        description={experience.intro}
      />

      <ol className="relative mt-12 max-w-3xl space-y-8 border-l border-line">
        {entries.map((entry, i) => (
          <TimelineEntry key={entry.id} entry={entry} delay={i * 90} />
        ))}
      </ol>

      {/* Optional, clearly-marked areas for verified extras */}
      <Reveal delay={120} className="mt-12 max-w-3xl">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
          {extras.title}
        </h3>

        {extras.items.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {extras.items.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-card border border-line bg-card px-5 py-3.5 shadow-soft"
              >
                <span className="text-[15px] text-ink">{item.label}</span>
                {item.detail && <span className="text-sm text-muted">{item.detail}</span>}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {['Certifications', 'Hackathons', 'Technical Training'].map((slot) => (
              <div
                key={slot}
                className="rounded-card border border-dashed border-line bg-card/60 px-4 py-5 text-center"
              >
                <p className="text-[13px] font-medium text-muted">{slot}</p>
                <p className="mt-1 text-xs text-muted/70">Available for verified entries</p>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </Section>
  )
}
