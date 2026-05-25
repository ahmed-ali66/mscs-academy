import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: "standalone" output is for Docker/self-hosting only.
  // Vercel handles its own build optimization, so we omit it here.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
  ],
};

export default nextConfig;
