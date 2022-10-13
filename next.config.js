/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const nextConfig = {
  assetPrefix: '.',
  reactStrictMode: true,
  swcMinify: true,

  // i18n: {
  //   locales: ["ko"],
  //   defaultLocale: "ko",
  // },

  images: {
    loader: 'akamai',
    path: '',
  },

  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
  //     '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
  //     '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
  //   }
  // },

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
