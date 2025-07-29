/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sp.yimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
