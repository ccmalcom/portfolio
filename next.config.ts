import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow placeholder images during development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Optimize images
    formats: ["image/avif", "image/webp"],
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
};

export default nextConfig;
