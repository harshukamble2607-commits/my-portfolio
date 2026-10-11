import { education } from '../data/profile.js'
import { Icon } from './Icon.jsx'
import { Reveal } from './Reveal.jsx'
import { Section } from './Section.jsx'
import { SectionHeading } from './SectionHeading.jsx'

const META = [
  { label: 'Degree', value: education.degree },
  { label: 'Current Year', value: education.currentYear },
  { label: 'Expected Graduation', value: education.expectedGraduation },
]

export function Education() {
  return (
    <Section id="education">
      <SectionHeading kicker="Education" title={education.heading} />

      <Reveal delay={120} className="mt-10">
        <article className="overflow-hidden rounded-panel border border-line bg-card shadow-soft">
          <div className="flex items-start gap-4 border-b border-line p-6 sm:p-7">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-subtle text-accent">
              <Icon name="GraduationCap" size={22} />
            </span>
            <div>
              <h3 className="text-lg font-semibold leading-snug text-ink">
                {education.school}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                <Icon name="MapPin" size={14} />
                {education.location}
              </p>
            </div>
          </div>

          <dl className="grid gap-px bg-line sm:grid-cols-3">
            {META.map((item) => (
              <div key={item.label} className="bg-card p-6">
                <dt className="text-2xs font-semibold uppercase tracking-wide text-muted">
                  {item.label}
                </dt>
                <dd className="mt-2 text-[15px] font-medium text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </Reveal>
    </Section>
  )
}
