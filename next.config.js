/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },

  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "video"
          }
        }
      ]
    });
    return config;
  }
};

module.exports = nextConfig
