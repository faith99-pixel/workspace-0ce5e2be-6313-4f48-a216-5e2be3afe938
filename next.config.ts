import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    qualities: [100, 90, 75],
  },
  allowedDevOrigins: ['*.space-z.ai'],
};

export default nextConfig;
