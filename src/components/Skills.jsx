import { skills } from '../data/profile.js'
import { Icon } from './Icon.jsx'
import { Reveal } from './Reveal.jsx'
import { Section } from './Section.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export function Skills() {
  return (
    <Section id="skills" muted>
      <SectionHeading
        kicker="Skills"
        title={skills.heading}
        description={skills.note}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.categories.map((category, i) => (
          <Reveal
            key={category.title}
            as="article"
            delay={(i % 3) * 90}
            className="group flex h-full flex-col rounded-card border border-line bg-card p-6 shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:border-accent/25 hover:shadow-raised"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-subtle text-accent transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent-soft">
                <Icon name={category.icon} size={17} />
              </span>
              <h3 className="text-[15px] font-semibold text-ink">{category.title}</h3>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item}>
                  <span className="inline-block cursor-default rounded-lg border border-line bg-canvas px-2.5 py-1 text-[13px] leading-6 text-muted transition-colors duration-200 hover:border-accent/35 hover:bg-accent-soft hover:text-accent">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
