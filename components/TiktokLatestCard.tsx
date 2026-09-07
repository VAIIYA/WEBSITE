import Script from 'next/script'
import type { TiktokEmbed } from '@/lib/tiktok'

const COPY = {
  nl: { badge: 'Nieuwste TikTok' },
  en: { badge: 'Latest TikTok' },
} as const

export default function TiktokLatestCard({
  embed,
  locale = 'nl',
}: {
  embed: TiktokEmbed
  locale?: 'nl' | 'en'
}) {
  const t = COPY[locale]

  return (
    <div className="rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl p-5">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#E25A3C] mb-3">{t.badge}</p>
      {/* TikTok's oEmbed HTML is a <blockquote class="tiktok-embed">; embed.js
          below finds it and swaps it for the actual live player. */}
      <div className="tiktok-embed-wrapper [&_blockquote]:!m-0" dangerouslySetInnerHTML={{ __html: embed.html }} />
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  )
}
