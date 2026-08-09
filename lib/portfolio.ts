export type AppPlatform = 'android' | 'ios' | 'web'

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
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.fynder',
    projectUrl: '/projects/fynder',
  },
  {
    id: 'vynder',
    name: 'VYNDER',
    description: 'Dating on the blockchain. The first Web3 PWA dating app built on Solana.',
    gradient: 'from-orange-500 to-red-500',
    platforms: ['android', 'ios'],
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
    projectUrl: '/projects/nightstudio',
    externalUrl: 'https://nightstudio.vercel.app/',
  },
  {
    id: 'blobio',
    name: 'BLOBIO',
    description: 'Engage in thrilling blob battles and conquer the arena.',
    gradient: 'from-emerald-500 to-green-500',
    platforms: ['android', 'ios'],
    appStoreUrl: 'https://apps.apple.com/app/id0000000000',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.blobio',
    projectUrl: '/projects/blobio',
    externalUrl: 'https://blobio.vercel.app/',
  },
]
