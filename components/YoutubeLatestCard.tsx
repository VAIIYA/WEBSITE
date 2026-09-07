import type { LatestVideo } from '@/lib/youtube'

const COPY = {
  nl: { badge: 'Nieuwste Video', watch: 'Bekijk op YouTube' },
  en: { badge: 'Latest Video', watch: 'Watch on YouTube' },
} as const

export default function YoutubeLatestCard({
  video,
  locale = 'nl',
}: {
  video: LatestVideo
  locale?: 'nl' | 'en'
}) {
  const t = COPY[locale]

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full sm:w-64 aspect-video sm:aspect-square shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 fill-red-600 ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="relative z-10 min-w-0 flex-1 text-center sm:text-left">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          {t.badge}
        </span>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight mb-4 group-hover:text-red-400 transition-colors">
          {video.title}
        </h3>
        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 group-hover:bg-red-500 text-white text-sm font-semibold transition-colors">
          ▶ {t.watch}
        </span>
      </div>
    </a>
  )
}
