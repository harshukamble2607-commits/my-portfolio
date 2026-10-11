import { hero, profile } from '../data/profile.js'
import { Button } from './Button.jsx'
import { HeroVisual } from './HeroVisual.jsx'
import { Icon } from './Icon.jsx'
import { TextReveal } from './TextReveal.jsx'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-28 sm:pt-32 lg:pb-28 lg:pt-40">
      {/* Extremely subtle editorial grid, faded out toward the edges. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-70"
      />

      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Text column */}
        <div className="max-w-xl">
          <p
            className="eyebrow animate-fade-up"
            style={{ animationDelay: '60ms' }}
          >
            {hero.eyebrow}
          </p>

          <h1
            className="mt-5 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-[3.35rem]"
            aria-label={`${hero.headingLead} ${hero.headingAccent}`}
          >
            <TextReveal
              as="span"
              delayStart={120}
              step={48}
              segments={[
                { text: hero.headingLead, className: 'text-ink' },
                { text: ' ', className: '' },
                { text: hero.headingAccent, className: 'text-accent' },
              ]}
            />
          </h1>

          <p
            className="mt-6 max-w-prose text-base leading-relaxed text-muted sm:text-lg animate-fade-up"
            style={{ animationDelay: '560ms' }}
          >
            {hero.intro}
          </p>

          <div
            className="mt-7 animate-fade-up"
            style={{ animationDelay: '680ms' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-muted shadow-soft">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </span>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: '780ms' }}
          >
            <Button to={hero.primaryCta.target} icon="ArrowRight">
              {hero.primaryCta.label}
            </Button>
            <Button variant="secondary" to={hero.secondaryCta.target}>
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div
            className="mt-8 flex items-center gap-5 text-sm animate-fade-up"
            style={{ animationDelay: '880ms' }}
          >
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              <Icon name="Github" size={16} />
              GitHub
            </a>
            <span className="h-3 w-px bg-line" aria-hidden="true" />
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              <Icon name="Linkedin" size={16} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Visual column */}
        <div
          className="relative animate-fade-up lg:pl-6"
          style={{ animationDelay: '420ms' }}
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
