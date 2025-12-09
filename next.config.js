/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/maggiemayer-portfolio' : '',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
}

module.exports = nextConfig


