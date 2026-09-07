import Script from 'next/script'
import type { XEmbed } from '@/lib/x'

const COPY = {
  nl: { badge: 'Laatste Post op X' },
  en: { badge: 'Latest Post on X' },
} as const

export default function XLatestCard({
  embed,
  locale = 'nl',
}: {
  embed: XEmbed
  locale?: 'nl' | 'en'
}) {
  const t = COPY[locale]

  return (
    <div className="rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl p-5">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#E25A3C] mb-3">{t.badge}</p>
      {/* X's oEmbed HTML is a <blockquote class="twitter-tweet">; widgets.js
          below finds it and swaps it for the actual live embed. */}
      <div className="x-embed-wrapper [&_blockquote]:!m-0" dangerouslySetInnerHTML={{ __html: embed.html }} />
      <Script src="https://platform.x.com/widgets.js" strategy="lazyOnload" />
    </div>
  )
}
