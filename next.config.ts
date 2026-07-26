import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 정적 배포: 순수 HTML로 내보내기
  output: "export",
  // 정적 export에는 이미지 최적화 서버가 없으므로 원본 그대로 서빙
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
