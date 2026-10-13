/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // the old Le Jeu Qui page lived at a misspelt path
    return [{ source: '/project/lejeugui', destination: '/project/lejeuqui', permanent: true }]
  },
};

export default nextConfig;
