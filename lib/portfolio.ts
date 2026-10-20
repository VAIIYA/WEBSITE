export type AppPlatform = 'android' | 'ios' | 'web'
export type AppCategory = 'app' | 'game' | 'web'
export type AppStatus = 'live' | 'closed-beta' | 'in-development'
export type GameEngine = 'unity' | 'native' | 'web'

export interface PortfolioApp {
  id: string
  /** Display name shown on cards and pages */
  name: string
  /** Short description shown on cards */
  description: string
  /** Path to the app icon / screenshot under /public (square-ish, used on the portfolio grid) */
  image?: string
  /** Wide 2:1 feature banner under /public (used on the /games cards and detail pages) */
  featureImage?: string
  /** Fallback gradient used when no image is provided */
  gradient: string
  platforms: AppPlatform[]
  /** Engine or core framework used */
  engine?: GameEngine
  /** Which homepage pillar this belongs under: Apps or Games */
  category: AppCategory
  /** Release lifecycle status */
  status?: AppStatus
  /** Google Group URL for closed tester community */
  betaGroupUrl?: string
  /** Google Play testing opt-in URL */
  playTestingUrl?: string
  /** App Store (iOS) URL */
  appStoreUrl?: string
  /** Google Play (Android) URL */
  playStoreUrl?: string
  /** Internal project page */
  projectUrl?: string
  /** External live project URL */
  externalUrl?: string
  comingSoon?: boolean
  /** Whether to hide this item from the /portfolio page showcase */
  hideFromPortfolio?: boolean
}

export const portfolioApps: PortfolioApp[] = [
  {
    id: 'flapmoji',
    name: 'FLAPMOJI',
    description:
      'Tap to flap a grumpy little emoji through an endless gauntlet of pipes. Classic one-tap runs or Arcade chaos with power-ups (Shield, Rocket, Slow-mo, Magnet), coins, 100+ unlockable emoji skins across 8 hand-tuned worlds, daily streaks and shop cosmetics. No account, no sign-up — live on Google Play.',
    image: '/games/flapmoji/icon.png',
    featureImage: '/games/flapmoji/feature.png',
    gradient: 'from-sky-400 to-emerald-400',
    platforms: ['android', 'ios'],
    engine: 'unity',
    category: 'game',
    status: 'live',
    betaGroupUrl: 'https://groups.google.com/g/vaiiya/c/2zJvHbgUggc',
    projectUrl: '/games/flapmoji',
    comingSoon: false,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.flapmoji.game',
  },
  {
    id: 'hexmoji',
    name: 'HEXMOJI',
    description:
      'Kawaii hexxagon strategy board game. Copy to clone or jump two spaces to capture rival emoji pieces. Play vs CPU across 4 difficulties or pass-and-play 2-player, climb 4 board sizes, earn XP, unlock emoji pieces and 5 pastel themes. Offline, portrait, ad-free during matches — live on Google Play.',
    featureImage: '/games/hexmoji/feature.svg',
    gradient: 'from-fuchsia-400 to-violet-500',
    platforms: ['android', 'ios'],
    engine: 'unity',
    category: 'game',
    status: 'live',
    betaGroupUrl: 'https://groups.google.com/g/vaiiya',
    playTestingUrl: 'https://play.google.com/apps/testing/com.hexmoji',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hexmoji',
    projectUrl: '/games/hexmoji',
    comingSoon: false,
  },
  {
    id: 'tapedeck',
    name: 'TAPEDECK',
    description:
      'Retro voice recorder with a Dieter Rams-inspired tape-deck design. Dual spinning spools, tactile transport controls, live on-device dictation and transcription, and a clean searchable memo library. No bloat — just tap Record. Live on Google Play.',
    gradient: 'from-amber-400 to-orange-600',
    platforms: ['android', 'ios'],
    engine: 'native',
    category: 'app',
    status: 'live',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aistudio.voicememos.tapeqc',
  },
  {
    id: 'emoji-blocks',
    name: 'EMOJI BLOCKS',
    description:
      'The cutest block puzzle game. Stack adorable emoji blocks, clear lines, earn XP, rank up and unlock new emoji themes. Endless, relaxing and offline-friendly — easy to learn, hard to master. Live on Google Play.',
    gradient: 'from-pink-400 to-rose-500',
    platforms: ['android', 'ios'],
    engine: 'unity',
    category: 'game',
    status: 'live',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aistudio.emojiblocks.xqkztv',
  },
  {
    id: 'matchmoji',
    name: 'MATCHMOJI — EMOJI MATCH 3',
    description:
      'Cheerful emoji match-3 puzzler from VAIIYA. Swap, match and blast your way through vibrant emoji boards. Rolling out to Google Play now — join the tester community for early access.',
    gradient: 'from-emerald-400 to-teal-600',
    platforms: ['android', 'ios'],
    engine: 'unity',
    category: 'game',
    status: 'in-development',
    betaGroupUrl: 'https://groups.google.com/g/vaiiya',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.matchmoji',
    comingSoon: true,
  },
]
