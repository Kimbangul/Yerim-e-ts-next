/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  assetPrefix: '.',
  reactStrictMode: true,
  swcMinify: true,

  // i18n: {
  //   locales: ["ko"],
  //   defaultLocale: "ko",
  // },

  images: {
    loader: 'akamai',
    path: '.',
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
