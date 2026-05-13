import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Tambahkan dua baris ini:
  basePath: '/my-portofolio', 
  assetPrefix: '/my-porotfolio',
};

export default nextConfig;
