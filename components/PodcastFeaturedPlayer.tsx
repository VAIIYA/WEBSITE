'use client'

import { useState, useRef, useEffect } from 'react'
import type { PodcastChannel, PodcastEpisode } from '@/lib/podcast'

/**
 * Standalone "now playing" podcast card — the same dark player card used
 * atop the full episode catalog on /podcast, extracted so it can also be
 * dropped onto the homepage (or anywhere else) showing just the latest
 * episode.
 */
export default function PodcastFeaturedPlayer({
  channel,
  locale = 'nl',
}: {
  channel: PodcastChannel
  locale?: 'nl' | 'en'
}) {
  const [currentEpisode] = useState<PodcastEpisode>(channel.episodes[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  if (!currentEpisode) return null

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch((e) => console.error(e))
      setIsPlaying(true)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      setDuration(audioRef.current.duration || currentEpisode.durationSeconds || 0)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = targetTime
      setCurrentTime(targetTime)
    }
  }

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        Math.min(audioRef.current.duration || 99999, audioRef.current.currentTime + seconds)
      )
    }
  }

  const cycleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2]
    const nextIndex = (speeds.indexOf(playbackRate) + 1) % speeds.length
    setPlaybackRate(speeds[nextIndex])
  }

  const formatSecs = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00'
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl p-6 sm:p-10">
      <audio
        ref={audioRef}
        src={currentEpisode.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E25A3C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Artwork */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 shrink-0 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentEpisode.image || channel.image}
              alt={currentEpisode.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
              🎙️ {currentEpisode.durationFormatted}
            </span>
          </div>
        </div>

        {/* Player Controls & Info */}
        <div className="md:col-span-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E25A3C] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E25A3C] animate-pulse" />
                {locale === 'en' ? 'Latest Episode' : 'Nieuwste Aflevering'}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {currentEpisode.pubDateFormatted}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mb-3">
              {currentEpisode.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 font-normal">
              {currentEpisode.description}
            </p>
          </div>

          {/* Progress Bar & Scrubber */}
          <div className="space-y-2">
            <div className="relative flex items-center">
              <input
                type="range"
                min={0}
                max={duration || currentEpisode.durationSeconds || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 rounded-lg bg-slate-800 accent-[#E25A3C] cursor-pointer appearance-none"
                style={{
                  background: `linear-gradient(to right, #E25A3C 0%, #E25A3C ${progressPercent}%, #1e293b ${progressPercent}%, #1e293b 100%)`,
                }}
              />
            </div>
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>{formatSecs(currentTime)}</span>
              <span>{formatSecs(duration || currentEpisode.durationSeconds)}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-900">
            <div className="flex items-center gap-4">
              <button
                onClick={() => skipTime(-15)}
                className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title={locale === 'en' ? 'Back 15 seconds' : '15 seconden terug'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                  />
                </svg>
              </button>

              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-[#E25A3C] hover:bg-[#c94b30] text-white flex items-center justify-center shadow-lg shadow-[#E25A3C]/30 hover:scale-105 active:scale-95 transition-all"
              >
                {isPlaying ? (
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => skipTime(15)}
                className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title={locale === 'en' ? 'Forward 15 seconds' : '15 seconden vooruit'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 005 8v8a1 1 0 001.6.8l5.334-4zM19.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.334-4z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={cycleSpeed}
                className="px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-xs font-mono font-bold text-slate-300 hover:text-[#E25A3C] border border-slate-800 transition-colors"
              >
                {playbackRate}x
              </button>

              <a
                href={currentEpisode.audioUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="Download MP3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
