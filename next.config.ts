import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Supprimez ou mettez à false pour activer les vérifications
  typescript: {
    ignoreBuildErrors: false,  // ✅ Vérifie TypeScript
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;