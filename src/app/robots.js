export default function robots() {
    const isProduction = process.env.APP_ENV === 'production';
    return {
        rules: [
            {
                userAgent: '*',
                disallow: ['/'],
            }
        ],
        sitemap: isProduction ? new URL(process.env.APP_URL) + "sitemap.xml" : null,
    }
}