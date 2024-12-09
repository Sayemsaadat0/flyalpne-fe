/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'http',
        hostname: 'api.thekazirichoverseas.com',
      },
      {
        protocol: 'https',
        hostname: 'api.thekazirichoverseas.com',
      },
    ],
  },
};

export default nextConfig;
