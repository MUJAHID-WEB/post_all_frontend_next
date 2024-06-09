/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scontent.fdac11-1.fna.fbcdn.net',
          },
          {
            protocol: 'https',
            hostname: 'scontent.fdac11-2.fna.fbcdn.net',
          },
          //linkedin
          {
            protocol: 'https',
            hostname: 'media.licdn.com',
          },
        ],
      },
}

module.exports = nextConfig
