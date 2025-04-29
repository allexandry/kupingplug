/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flagcdn.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                port: '',
                pathname: '/**',
            },
        ],
        unoptimized: true,
    }

}

module.exports = nextConfig
