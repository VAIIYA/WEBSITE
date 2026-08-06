export type AppPlatform = 'android' | 'ios' | 'web'

export interface PortfolioApp {
  id: string
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
    gradient: 'from-blue-500 to-cyan-400',
    platforms: ['android'],
    appStoreUrl: 'https://play.google.com/store',
    projectUrl: '/projects/fynder',
  },
  {
    id: 'vynder',
    gradient: 'from-orange-500 to-red-500',
    platforms: ['android', 'ios'],
    appStoreUrl: 'https://play.google.com/store',
    playStoreUrl: 'https://apps.apple.com',
    projectUrl: '/projects/vynder',
    externalUrl: 'https://vynder.vercel.app/',
  },
  {
    id: 'nightstudio',
    gradient: 'from-purple-600 to-indigo-600',
    platforms: ['web'],
    projectUrl: '/projects/nightstudio',
    externalUrl: 'https://nightstudio.vercel.app/',
  },
  {
    id: 'blobio',
    gradient: 'from-emerald-500 to-green-500',
    platforms: ['android', 'ios'],
    appStoreUrl: 'https://play.google.com/store',
    playStoreUrl: 'https://apps.apple.com',
    projectUrl: '/projects/blobio',
    externalUrl: 'https://blobio.vercel.app/',
  },
  {
    id: 'dollarmilkshake',
    gradient: 'from-pink-500 to-rose-500',
    platforms: ['web'],
    projectUrl: '/projects/dollarmilkshake',
    externalUrl: 'https://dollarmilkshake.vercel.app/',
  },
  {
    id: 'hunter84',
    gradient: 'from-red-600 to-yellow-500',
    platforms: ['web'],
    projectUrl: '/projects/hunter84',
    externalUrl: 'https://hunter84.vercel.app',
  },
  {
    id: 'luckyhaus',
    gradient: 'from-amber-500 to-orange-600',
    platforms: ['web'],
    projectUrl: '/projects/luckyhaus',
    externalUrl: 'https://luckyhaus.vercel.app/',
  },
  {
    id: 'memehaus',
    gradient: 'from-fuchsia-500 to-purple-600',
    platforms: ['web'],
    projectUrl: '/projects/memehaus',
    externalUrl: 'https://memehaus.vercel.app/',
  },
]
