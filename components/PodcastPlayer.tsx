'use client'

import { useState, useRef, useEffect } from 'react'
import type { PodcastChannel, PodcastEpisode } from '@/lib/podcast'

const COPY = {
  nl: {
    nowPlaying: 'Nu Aan Het Spelen',
    back15: '15 seconden terug',
    forward15: '15 seconden vooruit',
    download: 'Download MP3',
    subscribeTitle: 'Abonneer via jouw favoriete app',
    subscribeDesc: 'Voeg onze officiële RSS feed toe aan Apple Podcasts, Pocket Casts of Spotify',
    copyRss: '🔗 Kopieer RSS URL',
    copied: '✅ Gekopieerd!',
    viewOnRss: 'Bekijk op RSS.com →',
    allEpisodes: 'Alle Afleveringen',
    sortNewest: 'Sorteer: Nieuwste eerst',
    episode: 'Aflevering',
    pause: 'Pauzeren',
    listenNow: 'Nu Luisteren',
    sourcePage: 'Bronpagina →',
  },
  en: {
    nowPlaying: 'Now Playing',
    back15: 'Back 15 seconds',
    forward15: 'Forward 15 seconds',
    download: 'Download MP3',
    subscribeTitle: 'Subscribe in your favorite app',
    subscribeDesc: 'Add our official RSS feed to Apple Podcasts, Pocket Casts or Spotify',
    copyRss: '🔗 Copy RSS URL',
    copied: '✅ Copied!',
    viewOnRss: 'View on RSS.com →',
    allEpisodes: 'All Episodes',
    sortNewest: 'Sort: Newest first',
    episode: 'Episode',
    pause: 'Pause',
    listenNow: 'Listen Now',
    sourcePage: 'Source page →',
  },
} as const

export default function PodcastPlayer({
  channel,
  locale = 'nl',
}: {
  channel: PodcastChannel
  locale?: 'nl' | 'en'
}) {
  const t = COPY[locale]
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode>(
    channel.episodes[0] || null
  )
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [copiedRss, setCopiedRss] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

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

  const selectEpisode = (ep: PodcastEpisode) => {
    if (currentEpisode?.id === ep.id) {
      togglePlay()
      return
    }
    setCurrentEpisode(ep)
    setIsPlaying(true)
    if (audioRef.current) {
      audioRef.current.src = ep.audioUrl
      audioRef.current.play().catch((e) => console.error(e))
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

  const copyRssFeed = () => {
    navigator.clipboard.writeText(channel.feedUrl)
    setCopiedRss(true)
    setTimeout(() => setCopiedRss(false), 2500)
  }

  const formatSecs = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00'
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="space-y-12">
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        src={currentEpisode?.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {/* Featured Master Player Card */}
      {currentEpisode && (
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl p-6 sm:p-10">
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
                    {t.nowPlaying}
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
                  {/* Skip back 15s */}
                  <button
                    onClick={() => skipTime(-15)}
                    className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title={t.back15}
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

                  {/* Play / Pause Primary Button */}
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

                  {/* Skip forward 15s */}
                  <button
                    onClick={() => skipTime(15)}
                    className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title={t.forward15}
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

                {/* Secondary Actions */}
                <div className="flex items-center gap-3">
                  {/* Speed toggle */}
                  <button
                    onClick={cycleSpeed}
                    className="px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-xs font-mono font-bold text-slate-300 hover:text-[#E25A3C] border border-slate-800 transition-colors"
                  >
                    {playbackRate}x
                  </button>

                  {/* Download MP3 */}
                  <a
                    href={currentEpisode.audioUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    title={t.download}
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
      )}

      {/* Subscription & Feed Links Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-card-border shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-lg">📡</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {t.subscribeTitle}
            </p>
            <p className="text-xs text-slate-500">
              {t.subscribeDesc}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyRssFeed}
            className="px-4 py-2 rounded-full bg-slate-100 hover:bg-[#E25A3C] hover:text-white text-xs font-semibold text-slate-700 transition-all flex items-center gap-1.5"
          >
            {copiedRss ? t.copied : t.copyRss}
          </button>
          <a
            href={channel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#E25A3C]/10 hover:bg-[#E25A3C] text-[#E25A3C] hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
          >
            {t.viewOnRss}
          </a>
        </div>
      </div>

      {/* Episode Catalog List */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-card-border pb-4">
          <h3 className="text-2xl font-serif font-bold text-slate-900">
            {t.allEpisodes} ({channel.episodes.length})
          </h3>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {t.sortNewest}
          </span>
        </div>

        <div className="space-y-4">
          {channel.episodes.map((ep, idx) => {
            const isThisPlaying = isPlaying && currentEpisode?.id === ep.id
            const isSelected = currentEpisode?.id === ep.id

            return (
              <div
                key={ep.id}
                className={`group p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 ${
                  isSelected
                    ? 'border-[#E25A3C] shadow-md ring-1 ring-[#E25A3C]/30'
                    : 'border-card-border hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Play Button Icon */}
                  <button
                    onClick={() => selectEpisode(ep)}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow transition-all ${
                      isThisPlaying
                        ? 'bg-[#E25A3C] text-white scale-105'
                        : 'bg-slate-100 group-hover:bg-[#E25A3C] text-slate-800 group-hover:text-white'
                    }`}
                  >
                    {isThisPlaying ? (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  {/* Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E25A3C]">
                        {t.episode} #{channel.episodes.length - idx}
                      </span>
                      <span className="text-xs text-slate-400">&bull;</span>
                      <span className="text-xs font-mono text-slate-500">
                        {ep.pubDateFormatted}
                      </span>
                      <span className="text-xs text-slate-400">&bull;</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
                        ⏱️ {ep.durationFormatted}
                      </span>
                    </div>

                    <h4
                      onClick={() => selectEpisode(ep)}
                      className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#E25A3C] transition-colors cursor-pointer"
                    >
                      {ep.title}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {ep.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex sm:flex-col items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => selectEpisode(ep)}
                      className="btn-metamask btn-orange !py-2 !px-4 text-xs font-semibold"
                    >
                      {isThisPlaying ? t.pause : t.listenNow}
                    </button>
                    {ep.link && (
                      <a
                        href={ep.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-slate-700 underline"
                      >
                        {t.sourcePage}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
