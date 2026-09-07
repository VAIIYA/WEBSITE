'use client'

import { useState } from 'react'
import type { PodcastEpisode } from '@/lib/podcast'
import { formatDuration, formatEpisodeDate } from '@/lib/podcast'

/** Native audio player for the RSS feed, with an episode picker. */
export default function PodcastPlayer({ episodes }: { episodes: PodcastEpisode[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = episodes[activeIndex]

  if (!active) {
    return <p className="text-ink/60 text-sm">Episodes are on their way — check back soon.</p>
  }

  return (
    <div className="rounded-3xl border border-card-border bg-white overflow-hidden shadow-sm">
      {/* Now playing */}
      <div className="p-6 sm:p-7 border-b border-card-border">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#E25A3C]">Now playing</p>
        <h3 className="mt-1 text-xl font-bold font-serif text-ink">{active.title}</h3>
        <p className="mt-1 text-xs text-ink/50 font-medium">
          {[formatEpisodeDate(active.pubDate), formatDuration(active.durationSeconds)].filter(Boolean).join(' · ')}
        </p>
        <audio
          key={active.guid}
          controls
          preload="none"
          src={active.audioUrl}
          className="mt-4 w-full"
        >
          Your browser doesn&apos;t support audio playback.
        </audio>
        {active.description && (
          <p className="mt-4 text-sm text-ink/70 leading-relaxed line-clamp-4">{active.description}</p>
        )}
      </div>

      {/* Episode list */}
      <ul className="max-h-80 overflow-y-auto divide-y divide-card-border">
        {episodes.map((ep, i) => (
          <li key={ep.guid}>
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`flex w-full items-baseline gap-3 px-6 py-3 text-left transition-colors hover:bg-cream ${
                i === activeIndex ? 'bg-cream' : ''
              }`}
            >
              <span
                className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                  i === activeIndex ? 'bg-[#E25A3C]' : 'bg-ink/20'
                }`}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-ink leading-snug">{ep.title}</span>
                <span className="block text-[11px] text-ink/45 font-medium mt-0.5">
                  {[formatEpisodeDate(ep.pubDate), formatDuration(ep.durationSeconds)].filter(Boolean).join(' · ')}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
