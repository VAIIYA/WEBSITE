type WordmarkProps = {
  className?: string
  title?: string
}

/**
 * VA\\YA — the VAIIYA wordmark. The double "II" is drawn as two
 * backslash strokes, sized to the cap height of the surrounding letters,
 * so it scales with font-size and inherits `currentColor`.
 */
export default function Wordmark({ className = '', title = 'VAIIYA' }: WordmarkProps) {
  return (
    <span
      role="img"
      aria-label={title}
      className={`inline-flex items-baseline font-sans font-semibold uppercase leading-none tracking-[0.14em] whitespace-nowrap ${className}`}
    >
      <span aria-hidden="true">VA</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="mr-[0.14em] h-[0.72em] w-[0.8em] self-baseline overflow-visible"
      >
        <path
          d="M6 0 L42 100 M54 0 L90 100"
          stroke="currentColor"
          strokeLinecap="butt"
          vectorEffect="non-scaling-stroke"
          fill="none"
          style={{ strokeWidth: '0.105em' }}
        />
      </svg>
      <span aria-hidden="true">YA</span>
    </span>
  )
}
