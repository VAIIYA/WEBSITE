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
    id: 'nightstudio',
    name: 'NIGHTSTUDIO',
    description: 'Creatieve digitale studio die meeslepende Web3-ervaringen bouwt op Solana.',
    gradient: 'from-purple-600 to-indigo-600',
    platforms: ['web'],
    category: 'web',
    projectUrl: '/projects/nightstudio',
    externalUrl: 'https://nightstudio.vercel.app/',
  },
  {
    id: 'model82',
    name: 'MODEL82',
    description: 'Strakke Web3 digitale ervaring met modern responsive design en naadloze on-chain integratie.',
    gradient: 'from-slate-700 to-slate-900',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://model82.vercel.app/',
  },
  {
    id: 'velvetmusic',
    name: 'VELVET MUSIC',
    description: 'Meeslepende muziekontdekkingservaring met een strakke, sfeervolle interface om te browsen en te luisteren.',
    gradient: 'from-fuchsia-600 to-purple-800',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://velvetmusic.vercel.app/',
  },
  {
    id: 'bruidsmodechange',
    name: 'BRUIDSMODE CHANGE',
    description: 'Elegante bruidsmode-etalage met een verfijnd, redactioneel design om collecties online te bekijken.',
    gradient: 'from-rose-300 to-rose-500',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://bruidsmodechange.vercel.app/',
  },
  {
    id: 'wynder',
    name: 'WYNDER',
    description: 'Premium Web3 horloge-ervaring op Solana — blijf verbonden met de vibe aan je pols.',
    gradient: 'from-blue-600 to-indigo-600',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://wynder.vercel.app/',
  },
  {
    id: 'hashcube',
    name: 'HASHCUBE',
    description: 'Strakke, moderne digitale ervaring met een clean interface en soepele interacties.',
    gradient: 'from-cyan-500 to-blue-700',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://hashcube.vercel.app/',
  },
  {
    id: 'ospuze',
    name: 'OSPUZE',
    description: 'Gedurfde, moderne webervaring gebouwd voor snelheid en helderheid.',
    gradient: 'from-amber-500 to-orange-600',
    platforms: ['web'],
    category: 'web',
    externalUrl: 'https://ospuze.vercel.app/',
  },
]
