const { override,overrideDevServer  } = require("customize-cra");
const rewireCompressionPlugin = require('react-app-rewire-compression-plugin');
const {
  setWebpackPublicPath,
} = require('customize-cra')


// 在这里进行自定义修改相关配置
const replaceConfig = () => (config,env) => {
	// 在这里进行CompressionPlugin的配置
  config = rewireCompressionPlugin(config, env, {
    test: /\.js(\?.*)?$/i,
    cache: true
  })
  // 需要返回config对象
  return config;
};

const multipleEntry = require('react-app-rewire-multiple-entry')([{
  entry: './src/share.tsx',
  template: './public/share.html',
  outPath: '/share.html'
}]);

const addEntry = () => config => {

  multipleEntry.addMultiEntry(config);
  return config;
};
const addProxy = () => (configFunction) => {
  configFunction.historyApiFallback = {
      disableDotRule: true
      // 指明哪些路径映射到哪个html
  };
  return {
    ...configFunction,
    proxy:{
      "/gateway2": {             // 匹配到 '/api' 前缀的请求，就会触发该代理配置
        target: 'https://gateway2.fary.chat',  // 请求转发地址
        changeOrigin: true,                             // 是否跨域
        pathRewrite: {
          '^/gateway2': ''                                   // 重写请求路径
        },
        secure: false
      }
  }
  }
} 
module.exports = {
  webpack: override(
      addEntry(),
      replaceConfig()
  ),
  devServer: overrideDevServer(
      addProxy()
  )
}
