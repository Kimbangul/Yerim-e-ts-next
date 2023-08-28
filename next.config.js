/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  // assetPrefix: isProduction ? 'https://kimbangul.github.io/' : null,
  // trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  // basePath: '/',
  //basePath: isProduction ? '/.' : 'http://127.0.0.1:3000/',

  // HTTP 431 Error로 설정 삭제
  // i18n: {
  //   locales: ["ko"],
  //   defaultLocale: "ko",
  // },
  // images: isProduction ? {
  //   loader: 'akamai',
  //   path: '',
  // } : {},

  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: `${process.env.NEXT_PUBLIC_BACK_API_URL}/:path*`,
  //     },
  //   ];
  // },

  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'video',
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
