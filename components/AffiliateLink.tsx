'use client'

export default function AffiliateLink({
  href,
  slug,
  className,
  children,
}: {
  href: string
  slug: string
  className?: string
  children: React.ReactNode
}) {
  const logClick = () => {
    try {
      const payload = JSON.stringify({ slug })
      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          '/api/shop/click',
          new Blob([payload], { type: 'application/json' })
        )
      } else {
        fetch('/api/shop/click', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true,
        }).catch(() => {})
      }
    } catch {
      // Analytics failing should never block the actual link.
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={logClick}
      className={className}
    >
      {children}
    </a>
  )
}
