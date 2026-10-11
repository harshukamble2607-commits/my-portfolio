import { cn } from '../lib/utils.js'

/**
 * Consistent page section: vertical rhythm + centered content container.
 * `muted` paints the soft full-width section background without breaking the
 * content width, which keeps alternating sections feeling intentional.
 */
export function Section({ id, children, className, muted = false, ...rest }) {
  return (
    <section id={id} className={cn('relative py-20 sm:py-24', className)} {...rest}>
      {muted && <div aria-hidden="true" className="absolute inset-0 -z-10 bg-subtle" />}
      <div className="container-page">{children}</div>
    </section>
  )
}
