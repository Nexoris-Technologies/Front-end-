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
    useLightningcss: false, 
  },
};

export default nextConfig;
