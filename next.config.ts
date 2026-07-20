import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ローカル /public/assets 配下の素材のみを使用するため最適化はデフォルト設定
  },
};

export default nextConfig;
