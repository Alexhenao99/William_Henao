/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.nationalgeographic.es'
      }
    ]
  }
}

module.exports = nextConfig
