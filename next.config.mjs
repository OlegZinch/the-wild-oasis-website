/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 80, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yvykkisaoyylqpjsdedw.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cabin-images/**',
      },
    ],
  },
  // output: 'export',
}

export default nextConfig
