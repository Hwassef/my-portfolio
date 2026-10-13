/** @type {import('next').NextConfig} */
const nextConfig = {
  // images are pre-compressed in public/; plain URLs let the service worker cache them for offline use
  images: { unoptimized: true },
  async redirects() {
    return [
      // the old Le Jeu Qui page lived at a misspelt path
      { source: '/project/lejeugui', destination: '/project/lejeuqui', permanent: true },
      { source: '/fr/project/lejeugui', destination: '/fr/project/lejeuqui', permanent: true },
      // English is served from the root; keep /en URLs from becoming duplicates
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
    ]
  },
  async rewrites() {
    return {
      // pages live under app/[lang]; English is the unprefixed default
      beforeFiles: [
        { source: '/', destination: '/en' },
        { source: '/project/:slug', destination: '/en/project/:slug' },
      ],
    }
  },
};

export default nextConfig;
