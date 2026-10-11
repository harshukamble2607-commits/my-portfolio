/**
 * Line/word reveal for headings.
 *
 * Each word sits inside a clipped, inline-block wrapper and slides up into
 * place with a small stagger. The full text stays in the DOM (and the
 * accessibility tree) at all times — it is only visually animated, never
 * injected by JavaScript, so screen readers and no-JS users get the real text.
 *
 * @param {{ segments: {text: string, className?: string}[], delayStart?: number, step?: number }} props
 */
export function TextReveal({
  segments,
  as: Tag = 'span',
  className,
  delayStart = 0,
  step = 42,
}) {
  let wordIndex = 0

  return (
    <Tag className={className}>
      {segments.map((segment, sIdx) => {
        const words = segment.text.split(/\s+/).filter(Boolean)
        return (
          <span key={sIdx} className={segment.className}>
            {words.map((word, wIdx) => {
              const delay = delayStart + wordIndex * step
              wordIndex += 1
              const isLast = wIdx === words.length - 1
              return (
                <span
                  key={wIdx}
                  className="inline-block overflow-hidden pb-[0.08em] align-bottom"
                >
                  <span
                    className="inline-block animate-word-up"
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    {word}
                    {!isLast ? '\u00A0' : ''}
                  </span>
                </span>
              )
            })}
          </span>
        )
      })}
    </Tag>
  )
}
