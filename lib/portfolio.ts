export type AppPlatform = 'android' | 'ios' | 'web'
export type AppCategory = 'app' | 'game' | 'web'

export interface PortfolioApp {
  id: string
  /** Display name shown on cards and pages */
  name: string
  /** Short description shown on cards */
  description: string
  /** Path to the app icon / screenshot under /public */
  image?: string
  /** Fallback gradient used when no image is provided */
  gradient: string
  platforms: AppPlatform[]
  /** Which homepage pillar this belongs under: Apps, Games, or Website work */
  category: AppCategory
  /** App Store (iOS) URL */
  appStoreUrl?: string
  /** Google Play (Android) URL */
  playStoreUrl?: string
  /** Internal project page */
  projectUrl?: string
  /** External live project URL */
  externalUrl?: string
  comingSoon?: boolean
}

export const portfolioApps: PortfolioApp[] = [
  {
    id: 'fynder',
    name: 'FYNDER',
    description: 'Premium Android dating experience. Connection, simplified. Your next chapter starts with a swipe.',
    gradient: 'from-blue-500 to-cyan-400',
    platforms: ['android'],
    category: 'app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.fynder',
    projectUrl: '/projects/fynder',
  },
  {
    id: 'vynder',
    name: 'VYNDER',
    description: 'Dating on the blockchain. The first Web3 PWA dating app built on Solana.',
    gradient: 'from-orange-500 to-red-500',
    platforms: ['android', 'ios'],
    category: 'app',
    appStoreUrl: 'https://apps.apple.com/app/id0000000000',
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
    externalUrl: 'https://model82.vercel.app/',
  },
  {
    id: 'vynder-web',
    name: 'VYNDER',
    description: 'Dating on the blockchain. The first Web3 PWA dating app built on Solana, live in the browser.',
    gradient: 'from-orange-500 to-red-500',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://vynder.vercel.app/',
  },
  {
    id: 'velvetmusic',
    name: 'VELVET MUSIC',
    description: 'Immersive music discovery experience with a sleek, atmospheric interface built for browsing and listening.',
    gradient: 'from-fuchsia-600 to-purple-800',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://velvetmusic.vercel.app/',
  },
  {
    id: 'bruidsmodechange',
    name: 'BRUIDSMODE CHANGE',
    description: 'Elegant bridal fashion showcase with a refined, editorial design for browsing collections online.',
    gradient: 'from-rose-300 to-rose-500',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://bruidsmodechange.vercel.app/',
  },
  {
    id: 'wynder',
    name: 'WYNDER',
    description: 'Premium Web3 watch experience on Solana — stay connected to the vibe on your wrist.',
    gradient: 'from-blue-600 to-indigo-600',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://wynder.vercel.app/',
  },
  {
    id: 'hashcube',
    name: 'HASHCUBE',
    description: 'Sleek, modern digital experience with a clean interface and smooth interactions.',
    gradient: 'from-cyan-500 to-blue-700',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://hashcube.vercel.app/',
  },
  {
    id: 'ospuze',
    name: 'OSPUZE',
    description: 'Bold, modern web experience built for speed and clarity.',
    gradient: 'from-amber-500 to-orange-600',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://ospuze.vercel.app/',
  },
  {
    id: 'blobio',
    name: 'BLOBIO',
    description: 'Engage in thrilling blob battles and conquer the arena.',
    gradient: 'from-emerald-500 to-green-500',
    platforms: ['android', 'ios'],
    category: 'game',
    appStoreUrl: 'https://apps.apple.com/app/id0000000000',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.blobio',
    projectUrl: '/projects/blobio',
    externalUrl: 'https://blobio.vercel.app/',
  },
]
