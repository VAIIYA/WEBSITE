/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // The site is English-only; the old /en/* tree is gone.
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      { source: '/earlyaccess', destination: '/', permanent: true },
      { source: '/early_access', destination: '/', permanent: true },
      // Games live under /games, apps under /apps.
      { source: '/apps/hexmoji', destination: '/games/hexmoji', permanent: true },
      { source: '/apps/flapmoji', destination: '/games/flapmoji', permanent: true },
      { source: '/apps/emoji-blocks', destination: '/games/emoji-blocks', permanent: true },
      { source: '/apps/matchmoji', destination: '/games/matchmoji', permanent: true },
      // Test groups and the old Android/iOS pages are gone.
      { source: '/early-access', destination: '/', permanent: true },
      { source: '/android', destination: '/apps', permanent: true },
      { source: '/ios', destination: '/apps', permanent: true },
      // News section removed — send old links home.
      { source: '/news', destination: '/', permanent: true },
      { source: '/news/:path*', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig;
