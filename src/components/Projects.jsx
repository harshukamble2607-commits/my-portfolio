import { projects } from '../data/profile.js'
import { Icon } from './Icon.jsx'
import { ProjectCard } from './ProjectCard.jsx'
import { Reveal } from './Reveal.jsx'
import { Section } from './Section.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        kicker="Projects"
        title={projects.heading}
        description={projects.intro}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.items.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={(i % 2) * 100} />
        ))}
      </div>

      {projects.allReposUrl && (
        <Reveal delay={120} className="mt-12 flex justify-center">
          <a
            href={projects.allReposUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink shadow-soft transition-all duration-300 ease-out-soft hover:border-accent/30 hover:text-accent hover:shadow-raised"
          >
            <Icon name="Github" size={16} />
            View All Projects on GitHub
            <Icon
              name="ArrowRight"
              size={16}
              className="transition-transform duration-300 ease-out-soft group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      )}
    </Section>
  )
}
