/**
 * Declarative wrapper for the global scroll-reveal system. It simply tags the
 * element with `data-reveal` + an optional delay; the IntersectionObserver in
 * `useRevealObserver` toggles the `is-visible` class.
 *
 * @param {'up'|'left'|'right'|'scale'} variant
 */
export function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className,
  style,
  children,
  ...rest
}) {
  return (
    <Tag
      data-reveal={variant}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}
