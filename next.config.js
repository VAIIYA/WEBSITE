/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No longer a static export — Vercel runs this as a normal Next.js app now
  // that Strato hosting (which needed a plain folder of static files) is
  // gone. Every existing page still prerenders to static HTML exactly as
  // before; this only additionally allows the handful of app/api/* routes
  // (contact form, newsletter, affiliate click logging) to run as small
  // serverless functions.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;
