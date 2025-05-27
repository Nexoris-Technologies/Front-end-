import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "nexoris-backend-production.up.railway.app",
        pathname: "/uploads/**",
      },
    ],
  },

  experimental: {
    useLightningcss: false, // ✅ Correct property for Next.js 15.3.2
  },
};

export default nextConfig;
