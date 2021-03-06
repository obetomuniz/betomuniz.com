require('dotenv-safe').config();
const withImages = require('next-images');

const DEFAULT_HEADERS = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
];

module.exports = withImages({
  future: {
    webpack5: true,
  },
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/',
        headers: [...DEFAULT_HEADERS],
      },
      {
        source: '/:path*',
        headers: [...DEFAULT_HEADERS],
      },
    ];
  },
  env: {
    DEVTO_API_KEY: process.env.DEVTO_API_KEY,
  },
});
