// /** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
            esModule: false
          }
        }
      ]
    })
    config.module = {
      ...config.module,
      exprContextCritical: false
    }
    return config
  }
}

module.exports = nextConfig
