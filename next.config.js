/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/porfolio',
  assetPrefix: '/porfolio',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

