import type { NextConfig } from "next";

export const  nextConfig: NextConfig = {
  basePath: '/US',
  assetPrefix: '/US',
  trailingSlash: true,
    images: {
    path: '/US/_next/image/', // this is critical!
    loader: 'custom',
  },
};


export default nextConfig;
