const HtmlPlugin = require('html-webpack-plugin');
const CracoLessPlugin = require('craco-less');
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        entry: {
          main: path.resolve(__dirname, './src/index.tsx'),
          share: path.resolve(__dirname, './src/share.tsx'),
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
          if(process.env.REACT_APP_PROFILE==="prod"){
            webpackConfig.plugins.push(new CompressionWebpackPlugin({
            filename: '[path][base].gz', // 生成的文件名
            algorithm: 'gzip',          // 使用 gzip 压缩
            test: /\.(js|css|html|svg)$/, // 匹配需要压缩的文件类型
            threshold: 10240,           // 只有大小超过 10KB 的文件会被压缩
            minRatio: 0.8,              // 压缩比例阈值
          }))
        }
          webpackConfig.plugins= webpackConfig.plugins.filter(plugin => !(plugin instanceof HtmlPlugin));
          webpackConfig.plugins.push(
            new HtmlPlugin({
              filename: 'index.html',
              template: path.resolve(__dirname, './public/index.html'),
              chunks: ['main'],
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
  ]
  ,
 devServer:  (process.env.REACT_APP_PROFILE==="dev"?{
    proxy: {
      '/gateway': {
        target: 'https://api.fary.chat',
        changeOrigin: true,
        pathRewrite: {
          '^/gateway': ''
        },
        secure: false
      }
    }
  }:null)
};
