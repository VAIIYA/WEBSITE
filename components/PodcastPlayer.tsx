'use client'

import { useState } from 'react'
import type { PodcastEpisode } from '@/lib/podcast'
import { formatDuration, formatEpisodeDate } from '@/lib/podcast'

/** Native audio player for the RSS feed, with an episode picker. */
export default function PodcastPlayer({ episodes }: { episodes: PodcastEpisode[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = episodes[activeIndex]

  if (!active) {
    return <p className="text-[#5E5D59] text-sm">Episodes are on their way — check back soon.</p>
  }

  return (
    <div className="rounded-2xl bg-ivory overflow-hidden">
      {/* Now playing */}
      <div className="p-6 sm:p-7 border-b border-[#E8E6DC]">
        <p className="text-[13px] font-medium text-[#C2603F]">Now playing</p>
        <h3 className="mt-1 font-serif text-2xl text-ink">{active.title}</h3>
        <p className="mt-1 text-xs text-[#5E5D59]">
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
          <p className="mt-4 text-sm text-[#3D3D3A] leading-relaxed line-clamp-4">{active.description}</p>
        )}
      </div>

      {/* Episode list */}
      <ul className="max-h-80 overflow-y-auto divide-y divide-[#E8E6DC]">
        {episodes.map((ep, i) => (
          <li key={ep.guid}>
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`flex w-full items-baseline gap-3 px-6 py-3 text-left transition-colors hover:bg-[#F0EEE6] ${
                i === activeIndex ? 'bg-[#F0EEE6]' : ''
              }`}
            >
              <span
                className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                  i === activeIndex ? 'bg-coral' : 'bg-[#D1CFC5]'
                }`}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-ink leading-snug">{ep.title}</span>
                <span className="block text-xs text-[#87867F] mt-0.5">
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
