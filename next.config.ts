import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    qualities: [100, 90, 75],
    remotePatterns: [
      { protocol: 'https', hostname: 'logo.clearbit.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
  },
  allowedDevOrigins: ['*.space-z.ai', '10.21.130.123'],
};

export default nextConfig;
