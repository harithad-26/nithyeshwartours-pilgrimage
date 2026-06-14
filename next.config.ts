import type { NextConfig } from "next";
import path from "path";

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
        hostname: "*.nithyeshwartours.com",
        pathname: "/uploads/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
