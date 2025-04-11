/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/calorie-intake-calculator',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 