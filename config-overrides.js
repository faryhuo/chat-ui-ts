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

  return configFunction;
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
