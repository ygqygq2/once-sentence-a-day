import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/once-sentence-a-day",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
