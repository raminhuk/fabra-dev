/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.notion.so',
                port: '',
                pathname: '/image/**',
            },
        ],
    },
    amp: 'hybrid',
}

module.exports = nextConfig
