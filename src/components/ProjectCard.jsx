import { Icon } from './Icon.jsx'
import { cn } from '../lib/utils.js'

function statusTone(status = '') {
  const s = status.toLowerCase()
  if (s.includes('progress')) return { dot: 'bg-[#B7791F]', text: 'text-[#8A5A12]' }
  if (s.includes('complete')) return { dot: 'bg-[#2F855A]', text: 'text-[#276749]' }
  return { dot: 'bg-accent', text: 'text-accent' } // prototype / concept
}

function LinkRow({ project }) {
  const hasLive = Boolean(project.live)
  const hasRepo = Boolean(project.repo)

  if (!hasLive && !hasRepo) {
    return (
      <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted/90">
        <Icon name="AlertCircle" size={15} className="text-muted/70" />
        Repository not public yet
      </p>
    )
  }

  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
      {hasLive && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer noopener"
          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent"
        >
          View Live Project
          <Icon
            name="ArrowUpRight"
            size={16}
            className="transition-transform duration-300 ease-out-soft group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      )}
      {hasRepo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent"
        >
          <Icon name="Github" size={16} />
          View Source Code
          <Icon
            name="ArrowUpRight"
            size={15}
            className="transition-transform duration-300 ease-out-soft group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      )}
    </div>
  )
}

export function ProjectCard({ project, delay = 0 }) {
  const tone = statusTone(project.status)

  return (
    <article
      data-reveal="up"
      style={{ '--reveal-delay': `${delay}ms` }}
      className="group flex h-full flex-col overflow-hidden rounded-panel border border-line bg-card shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-hover"
    >
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-subtle">
        <img
          src={project.image}
          alt={project.imageAlt}
          width="960"
          height="600"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.045]"
        />

        {/* Status label */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-card/90 px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm">
          <span className={cn('h-1.5 w-1.5 rounded-full', tone.dot)} aria-hidden="true" />
          <span className={tone.text}>{project.status}</span>
        </span>

        {project.imageIsPlaceholder && (
          <span className="absolute right-3 top-3 rounded-full border border-line bg-card/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted backdrop-blur-sm">
            Placeholder
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-accent">{project.index}</span>
          <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
        </div>
        {project.tagline && (
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        )}

        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <span className="inline-block rounded-md border border-line bg-canvas px-2 py-0.5 text-xs text-muted">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <LinkRow project={project} />
        </div>
      </div>
    </article>
  )
}
