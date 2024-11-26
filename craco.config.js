const HtmlPlugin = require('html-webpack-plugin');
const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        entry: {
          main: path.resolve(__dirname, './src/index.tsx'),
          share: path.resolve(__dirname, './src/share.tsx'),
        },
        output: {
          filename: '[name].[contenthash:8].chunk.js',
          path: path.resolve(__dirname, 'build'),
        }
      };
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.plugins= webpackConfig.plugins.filter(plugin => !(plugin instanceof HtmlPlugin));
          webpackConfig.plugins.push(
            new HtmlPlugin({
              filename: 'index.html',
              template: path.resolve(__dirname, './public/index.html'),
              chunks: ['main'],
              inject: true,
              minify: {
                removeComments: true,
                collapseWhitespace: true
            }
            }),
          );
          webpackConfig.plugins.push(
            new HtmlPlugin({
              filename: 'share.html',
              template: path.resolve(__dirname, './public/share.html'),
              chunks: ['share'],
              inject: true,
              minify: {
                removeComments: true,
                collapseWhitespace: true
            }
            }),
          );
          return webpackConfig;
        }
      }
    }
  ],
  devServer: {
    proxy: {
      '/gateway2': {
        target: 'https://gateway2.fary.chat',
        changeOrigin: true,
        pathRewrite: {
          '^/gateway2': ''
        },
        secure: false
      }
    }
  }
};
