import { about } from '../data/profile.js'
import { Icon } from './Icon.jsx'
import { Reveal } from './Reveal.jsx'
import { Section } from './Section.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading kicker="About" title={about.heading} />

        <Reveal delay={120}>
          <p className="max-w-prose text-base leading-relaxed text-muted lg:pt-2">
            {about.intro}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {about.blocks.map((block, i) => (
          <Reveal
            key={block.label}
            as="article"
            delay={i * 90}
            className="group rounded-card border border-line bg-card p-6 shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:border-accent/25 hover:shadow-raised"
          >
            <span className="inline-grid h-11 w-11 place-items-center rounded-xl border border-line bg-subtle text-accent transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent-soft">
              <Icon name={block.icon} size={19} />
            </span>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-muted">
              {block.label}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {block.lines.map((line) => (
                <li key={line} className="text-[15px] leading-relaxed text-ink">
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
