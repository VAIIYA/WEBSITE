/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // The site is English-only; the old /en/* tree is gone.
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      { source: '/earlyaccess', destination: '/early-access', permanent: true },
      { source: '/early_access', destination: '/early-access', permanent: true },
    ]
  },
}

module.exports = nextConfig;
