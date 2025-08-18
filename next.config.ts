import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during builds (optionnel) 
    ignoreBuildErrors: true,
  },
  // Configuration pour les images si vous en avez
  images: {
    unoptimized: true
  }
};

export default nextConfig;