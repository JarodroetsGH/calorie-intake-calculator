/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export',
  basePath: '/calorie-intake-calculator',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 