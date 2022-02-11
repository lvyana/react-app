// config-overrides.js
const {
  override,
  fixBabelImports,
  addWebpackPlugin,
  addLessLoader,
  addWebpackAlias,
  addWebpackExternals,
  overrideDevServer,
  watchAll,
} = require('customize-cra');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { name } = require('./package');

// 跨域配置
const devServerConfig = () => (config) => {
  // config.host = '127.0.0.1';
  config.port = 80;
  config.compress = true;
  return config;
  // return {
  //   ...config,
  //   host: '127.0.0.1',
  //   port: 80,
  //   // 服务开启gzip
  //   compress: true,
  //   proxy: {
  //     '/api': {
  //       target: 'xxx',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/api',
  //       },
  //     },
  //   },
  // };
};

module.exports = {
  devServer: overrideDevServer(watchAll(), devServerConfig()),
  webpack: override(
    (config) => {
      config.output.library = `${name}-[name]`;
      config.output.libraryTarget = 'umd';
      // output.jsonpFunction 更名为 output.chunkLoadingGlobal​​​​​​​
      config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
      config.output.globalObject = 'window';

      return config;
    },
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    addLessLoader({
      // 这里可以添加less的其他配置
      lessOptions: {
        // 根据自己需要配置即可~
      },
    }),
    // alias
    addWebpackAlias({
      // 加载模块的时候，可以使用“@”符号来进行简写啦~
      '@': path.resolve(__dirname, './src/'),
    }),
    // externals
    addWebpackExternals({
      // 注意对应的在public/index.html引入jquery的远程文件地址
      // jQuery: 'jQuery',
    }),
    // 注意是production环境启动该plugin
    process.env.NODE_ENV === 'production' &&
      addWebpackPlugin(
        new UglifyJsPlugin({
          // 开启打包缓存
          cache: true,
          // 开启多线程打包
          parallel: true,
          uglifyOptions: {
            // 删除警告
            warnings: false,
            // 压缩
            compress: {
              // 移除console
              drop_console: true,
              // 移除debugger
              drop_debugger: true,
            },
          },
        })
      ),
    // 判断环境变量ANALYZER参数的值
    process.env.ANALYZER && addWebpackPlugin(new BundleAnalyzerPlugin()),
    addWebpackPlugin(new ProgressBarPlugin())
  ),
};
