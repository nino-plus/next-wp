/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ninocompnay.wordpress.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
