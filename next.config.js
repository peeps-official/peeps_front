/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  },

  images: {
    domains: ['s3-alpha-sig.figma.com', 'cdn3.iconfinder.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
}

export default nextConfig
