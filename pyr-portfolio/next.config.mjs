/** @type {import('next').NextConfig} */
const nextConfig = {
  // styled-component 지원
  compiler: {
    styledComponents: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kimbangul.github.io',
        port: '',
        pathname: '/cdn/**',
      },
    ],
  },

  // svg to component
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

export default nextConfig;
