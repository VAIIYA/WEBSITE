export type AppPlatform = 'android' | 'ios' | 'web'
export type AppCategory = 'app' | 'game' | 'web'
export type AppStatus = 'live' | 'closed-beta' | 'in-development'

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
  /** Which homepage pillar this belongs under: Apps, Games, or Website work */
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
      'One tap, one emoji, endless pipes. Classic runs or Arcade chaos with power-ups, coins and 100+ emoji skins — native for Android, iOS planned.',
    image: '/games/flapmoji/icon.png',
    featureImage: '/games/flapmoji/feature.png',
    gradient: 'from-sky-400 to-emerald-400',
    platforms: ['android'],
    category: 'game',
    status: 'in-development',
    betaGroupUrl: 'https://groups.google.com/g/vaiiya/c/2zJvHbgUggc',
    projectUrl: '/games/flapmoji',
    comingSoon: true,
    // Fill these in once the app is live:
    // playStoreUrl: 'https://play.google.com/store/apps/details?id=com.flapmoji.game',
  },
  {
    id: 'hexmoji',
    name: 'HEXMOJI',
    description:
      'Kawaii hexxagon. Claim the board one emoji hop at a time against a sharp CPU, unlock a cabinet of characters and pastel themes. Android Closed Beta is live now!',
    featureImage: '/games/hexmoji/feature.svg',
    gradient: 'from-fuchsia-400 to-violet-500',
    platforms: ['android'],
    category: 'game',
    status: 'closed-beta',
    betaGroupUrl: 'https://groups.google.com/g/vaiiya',
    playTestingUrl: 'https://play.google.com/apps/testing/com.hexmoji',
    projectUrl: '/games/hexmoji',
    comingSoon: false,
  },
  {
    id: 'fynder',
    name: 'FYNDER',
    description: 'Premium Android dating experience. Connection, simplified. Your next chapter starts with a swipe.',
    gradient: 'from-blue-500 to-cyan-400',
    platforms: ['android'],
    category: 'app',
    status: 'live',
    hideFromPortfolio: true,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.fynder',
    projectUrl: '/projects/fynder',
  },
  {
    id: 'vynder',
    name: 'VYNDER',
    description: 'Dating on the blockchain. The first Web3 PWA dating app built on Solana.',
    gradient: 'from-orange-500 to-red-500',
    platforms: ['android'],
    category: 'app',
    status: 'live',
    hideFromPortfolio: true,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.vynder',
    projectUrl: '/projects/vynder',
    externalUrl: 'https://vynder.vercel.app/',
  },
  {
    id: 'nightstudio',
    name: 'NIGHTSTUDIO',
    description: 'Creative digital studio crafting immersive Web3 experiences on Solana.',
    gradient: 'from-purple-600 to-indigo-600',
    platforms: ['web'],
    category: 'web',
    hideFromPortfolio: true,
    projectUrl: '/projects/nightstudio',
    externalUrl: 'https://nightstudio.vercel.app/',
  },
  {
    id: 'model82',
    name: 'MODEL82',
    description: 'Sleek Web3 digital experience with modern responsive design and seamless on-chain integration.',
    gradient: 'from-slate-700 to-slate-900',
    platforms: ['web'],
    category: 'web',
    hideFromPortfolio: true,
    externalUrl: 'https://model82.vercel.app/',
  },
  {
    id: 'vynder-web',
    name: 'VYNDER',
    description: 'Dating on the blockchain. The first Web3 PWA dating app built on Solana, live in the browser.',
    gradient: 'from-orange-500 to-red-500',
    platforms: ['web'],
    category: 'web',
    hideFromPortfolio: true,
    externalUrl: 'https://vynder.vercel.app/',
  },
  {
    id: 'velvetmusic',
    name: 'VELVET MUSIC',
    description: 'Immersive music discovery experience with a sleek, atmospheric interface built for browsing and listening.',
    gradient: 'from-fuchsia-600 to-purple-800',
    platforms: ['web'],
    category: 'web',
    hideFromPortfolio: true,
    externalUrl: 'https://velvetmusic.vercel.app/',
  },
  {
    id: 'bruidsmodechange',
    name: 'BRUIDSMODE CHANGE',
    description: 'Elegant bridal fashion showcase with a refined, editorial design for browsing collections online.',
    gradient: 'from-rose-300 to-rose-500',
    platforms: ['web'],
    category: 'web',
    hideFromPortfolio: true,
    externalUrl: 'https://bruidsmodechange.vercel.app/',
  },
  {
    id: 'wynder',
    name: 'WYNDER',
    description: 'Premium Web3 watch experience on Solana — stay connected to the vibe on your wrist.',
    gradient: 'from-blue-600 to-indigo-600',
    platforms: ['web'],
    category: 'web',
    hideFromPortfolio: true,
    externalUrl: 'https://wynder.vercel.app/',
  },
  {
    id: 'hashcube',
    name: 'HASHCUBE',
    description: 'Sleek, modern digital experience with a clean interface and smooth interactions.',
    gradient: 'from-cyan-500 to-blue-700',
    platforms: ['web'],
    category: 'web',
    hideFromPortfolio: true,
    externalUrl: 'https://hashcube.vercel.app/',
  },
  {
    id: 'ospuze',
    name: 'OSPUZE',
    description: 'Bold, modern web experience built for speed and clarity.',
    gradient: 'from-amber-500 to-orange-600',
    platforms: ['web'],
    category: 'web',
    hideFromPortfolio: true,
    externalUrl: 'https://ospuze.vercel.app/',
  },
  {
    id: 'blobio',
    name: 'BLOBIO',
    description: 'Engage in thrilling blob battles and conquer the arena.',
    gradient: 'from-emerald-500 to-green-500',
    platforms: ['android'],
    category: 'game',
    status: 'live',
    hideFromPortfolio: true,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.blobio',
    projectUrl: '/projects/blobio',
    externalUrl: 'https://blobio.vercel.app/',
  },
]
