import type { NextConfig } from "next";

// 开发环境不使用 basePath，生产环境（GitHub Pages）使用
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
