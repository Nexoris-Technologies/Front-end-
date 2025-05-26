// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // Strapi’s local dev server
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
