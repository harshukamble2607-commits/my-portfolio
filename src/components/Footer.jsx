import { footer, profile } from '../data/profile.js'
import { scrollToId } from '../lib/utils.js'
import { Icon } from './Icon.jsx'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-ink">{footer.credit}</p>
          <p className="mt-1 text-xs text-muted">
            © {year} {profile.fullName}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-card text-muted transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent"
          >
            <Icon name="Github" size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-card text-muted transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent"
          >
            <Icon name="Linkedin" size={18} />
          </a>
          <button
            type="button"
            onClick={() => scrollToId('home')}
            className="group ml-1 inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-card px-3.5 text-sm font-medium text-muted transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent"
          >
            Back to top
            <Icon
              name="ArrowUp"
              size={16}
              className="transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  )
}
