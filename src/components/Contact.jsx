import { contact, profile } from '../data/profile.js'
import { cn } from '../lib/utils.js'
import { ContactForm } from './ContactForm.jsx'
import { Icon } from './Icon.jsx'
import { Reveal } from './Reveal.jsx'
import { Section } from './Section.jsx'

function ContactLinks() {
  const links = [
    { icon: 'Github', label: 'GitHub', href: profile.socials.github, external: true },
    { icon: 'Linkedin', label: 'LinkedIn', href: profile.socials.linkedin, external: true },
  ]

  return (
    <div className="mt-8">
      {/* Email: shown only once configured, otherwise a clearly-marked notice. */}
      {profile.email ? (
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-3 rounded-card border border-line bg-card px-5 py-4 shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-raised"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-subtle text-accent">
            <Icon name="Mail" size={18} />
          </span>
          <span>
            <span className="block text-xs font-medium uppercase tracking-wide text-muted">
              Email
            </span>
            <span className="block text-[15px] font-medium text-ink">{profile.email}</span>
          </span>
        </a>
      ) : (
        <div className="rounded-card border border-dashed border-line bg-card/60 px-5 py-4">
          <div className="flex items-center gap-2 text-sm font-medium text-muted">
            <Icon name="Mail" size={16} />
            Email address not configured yet
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted/80">
            Set <span className="font-mono">profile.email</span> in{' '}
            <span className="font-mono">src/data/profile.js</span> to display a
            contact address here.
          </p>
        </div>
      )}

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-between rounded-card border border-line bg-card px-5 py-3.5 shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-raised"
          >
            <span className="flex items-center gap-3">
              <Icon name={link.icon} size={17} className="text-muted group-hover:text-accent" />
              <span className="text-[15px] font-medium text-ink">{link.label}</span>
            </span>
            <Icon
              name="ArrowUpRight"
              size={16}
              className="text-muted transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">Contact</span>
            <span
              className="mt-2 block h-px w-10 origin-left bg-accent/40 animate-draw-line"
              aria-hidden="true"
            />
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
              {contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
              {contact.intro}
            </p>
          </Reveal>

          <Reveal delay={210}>
            <ContactLinks />
          </Reveal>
        </div>

        <Reveal variant="right" delay={120} className={cn('lg:pt-2')}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
