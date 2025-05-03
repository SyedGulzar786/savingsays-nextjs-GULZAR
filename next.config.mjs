import nextI18NextConfig from './i18n.js';

const isProd = process.env.APP_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: !isProd,
  images: {
    domains: [
      "localhost",
      "dragonslayer.sabzessentials.com",
      "dragonslayer.discountcodez.test",
      "cdn.sabzessentials.com"
    ]
  },
  i18n: nextI18NextConfig.i18n, // ✅ add this
};

export default nextConfig;
