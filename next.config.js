/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? '/maggiemayer-portfolio' : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  trailingSlash: true,
}

module.exports = nextConfig


