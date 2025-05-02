const isProd = process.env.APP_ENV !== 'production'

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
    }
};

export default nextConfig;
