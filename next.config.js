const path = require("path");
const {i18n} = require("./next-i18next.config");

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "common/_config";`
  },
  i18n,
  images: {
    domains: ['dev-weverse-cdn.snaps.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: CDN_URL.split("https://")[1],
        port: '',
        pathname: '/**/*'
      }
    ]
  },
/*  experimental: {
    forceSwcTransforms: true,
  },*/
  babel: {
    plugins: [
      ['@babel/plugin-transform-react-jsx', { 'throwIfNamespace': false }]
    ]
  }
}

module.exports = nextConfig
