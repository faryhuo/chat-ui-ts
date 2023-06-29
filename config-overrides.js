const { override } = require("customize-cra");
const rewireCompressionPlugin = require('react-app-rewire-compression-plugin');

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

module.exports = override(
  replaceConfig()
);
