const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/bff/:path*',
        destination: '/api/bff/:path*',
      },
      {
        source: '/(prdt|esntl|chorus)/:path*',
        destination: '/api/:path*',
      },
      {
        source: '/acct/api/account/user',
        destination: '/api/account/user',
      },
    ];
  },
  transpilePackages: ['@pr/ui', '@pr/types', '@pr/api', '@pr/services'],
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'), // 패키지의 애플리케이션 디렉토리 부터 프로젝트 루트 까지 경로를 설정
  },
  output: 'standalone',
};
