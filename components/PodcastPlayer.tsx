'use client'

import { useEffect, useRef, useState } from 'react'
import type { PodcastEpisode } from '@/lib/podcast'
import { formatDuration, formatEpisodeDate } from '@/lib/podcast'

interface PodcastPlayerProps {
  episodes: PodcastEpisode[]
  /** Show cover art from the RSS feed */
  cover?: string
}

/** Audio player for the RSS.com feed: cover art, episode list, autoplay of the picked and next episode. */
export default function PodcastPlayer({ episodes, cover }: PodcastPlayerProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const active = episodes[activeIndex]

  // Start playing after the user picks an episode (or one ends), never on first page load.
  useEffect(() => {
    if (autoplay) audioRef.current?.play().catch(() => {})
  }, [activeIndex, autoplay])

  if (!active) {
    return <p className="text-sm text-[#5E5D59]">Episodes are on their way — check back soon.</p>
  }

  const pick = (i: number) => {
    setAutoplay(true)
    setActiveIndex(i)
  }

  const meta = (ep: PodcastEpisode) =>
    [formatEpisodeDate(ep.pubDate), formatDuration(ep.durationSeconds)].filter(Boolean).join(' · ')

  return (
    <div className="overflow-hidden rounded-2xl bg-ivory">
      <div className="border-b border-[#E8E6DC] p-6 sm:p-8">
        <div className="flex gap-5 sm:gap-7">
          {cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cover}
              alt=""
              className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-36 sm:w-36"
            />
          )}
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-[#C2603F]">
              Episode {episodes.length - activeIndex} of {episodes.length}
            </p>
            <h3 className="mt-1 font-serif text-2xl leading-tight text-ink sm:text-3xl">{active.title}</h3>
            <p className="mt-2 text-sm text-[#5E5D59]">{meta(active)}</p>
          </div>
        </div>

        <audio
          ref={audioRef}
          key={active.guid}
          controls
          preload="none"
          src={active.audioUrl}
          className="mt-6 w-full"
          onEnded={() => {
            if (activeIndex < episodes.length - 1) pick(activeIndex + 1)
          }}
        >
          Your browser doesn&apos;t support audio playback.
        </audio>

        {active.description && (
          <p className="mt-5 line-clamp-4 text-[15px] leading-relaxed text-[#3D3D3A]">{active.description}</p>
        )}
      </div>

      <ul className="max-h-96 divide-y divide-[#E8E6DC] overflow-y-auto">
        {episodes.map((ep, i) => (
          <li key={ep.guid}>
            <button
              type="button"
              onClick={() => pick(i)}
              aria-current={i === activeIndex}
              className={`flex w-full items-baseline gap-3 px-6 py-3.5 text-left transition-colors hover:bg-[#F0EEE6] ${
                i === activeIndex ? 'bg-[#F0EEE6]' : ''
              }`}
            >
              <span
                className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                  i === activeIndex ? 'bg-coral' : 'bg-[#D1CFC5]'
                }`}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium leading-snug text-ink">{ep.title}</span>
                <span className="mt-0.5 block text-xs text-[#87867F]">{meta(ep)}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
