import { Icon } from './Icon.jsx'
import { cn } from '../lib/utils.js'
import { scrollToId } from '../lib/utils.js'

const VARIANTS = {
  primary:
    'bg-accent text-white shadow-soft hover:bg-[#2a5271] hover:shadow-raised focus-visible:outline-accent',
  secondary:
    'border border-line bg-card text-ink hover:border-accent/40 hover:text-accent shadow-soft',
  ghost: 'text-muted hover:text-accent',
}

/**
 * Shared button/link primitive with consistent micro-interactions:
 * smooth color transitions, a small arrow that glides on hover, a pressed
 * state, and a clear keyboard-focus ring.
 *
 * Renders an <a> when `href` is provided, otherwise a <button>.
 * When `to` (a section id) is provided it performs in-page smooth scrolling.
 */
export function Button({
  variant = 'primary',
  children,
  icon,
  href,
  to,
  onClick,
  className,
  type = 'button',
  ...rest
}) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium',
    'transition-all duration-300 ease-out-soft active:translate-y-px',
    VARIANTS[variant],
    className,
  )

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <Icon
          name={icon}
          size={16}
          className="transition-transform duration-300 ease-out-soft group-hover:translate-x-1"
        />
      )}
    </>
  )

  const handleClick = (event) => {
    if (to) {
      event.preventDefault()
      scrollToId(to)
    }
    onClick?.(event)
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={handleClick} {...rest}>
      {content}
    </button>
  )
}
