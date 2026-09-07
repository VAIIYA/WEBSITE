'use client'

import { useState } from 'react'
import { YOUTUBE_EMBED_URL } from '@/lib/podcast'

/** First video of the YouTube podcast playlist — used for the poster frame. */
const POSTER = 'https://i.ytimg.com/vi/8phareA3rts/hqdefault.jpg'

/**
 * Lightweight YouTube playlist embed: shows a poster + play button and only
 * loads the YouTube iframe once the visitor clicks, so the page stays fast
 * and no third-party scripts run until asked.
 */
export default function PodcastVideo() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-card-border bg-black shadow-sm">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`${YOUTUBE_EMBED_URL}&autoplay=1`}
          title="VAIIYA podcast on YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label="Play the VAIIYA podcast on YouTube"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={POSTER} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#E25A3C] text-white shadow-lg transition-transform group-hover:scale-110">
            <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
            ▶️ Watch on YouTube
          </span>
        </button>
      )}
    </div>
  )
}
