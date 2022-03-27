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
	useBabelRc
} = require('customize-cra');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { name } = require('./package');

const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 打包配置
console.log(process.env.NODE_ENV);
const addCustomize = () => (config) => {
	if (process.env.NODE_ENV === 'production') {
		// 关闭sourceMap
		config.devtool = false;
		// 配置打包后的文件位置
		// config.output.path = __dirname + '../dist/demo/';
		// config.output.publicPath = './demo';
		// 添加js打包gzip配置
		config.plugins.push(
			new CompressionWebpackPlugin({
				test: /\.js$|\.css$/,
				threshold: 1024
			})
		);
	}
	return config;
};

// 跨域配置
const devServerConfig = () => (config) => {
	// config.host = '127.0.0.1';
	// config.port = 80;
	config.compress = true;
	config.proxy = {
		[process.env.REACT_APP_BASE_API]: {
			// target: `http://localhost:8088`,
			// target: `http://172.16.81.123:8088`,//任勇
			target: `http://172.16.102.122:8088`, //文雷
			// target: `http://172.16.81.94:8088`, //宇哲
			// target: `http://172.16.81.108:8088`, //贺辉
			// target: `http://172.16.81.91:8088`, //汽水
			changeOrigin: true,
			pathRewrite: {
				['^' + process.env.REACT_APP_BASE_API]: ''
			}
		}
	};
	return config;
	// return {
	//   ...config,
	//   host: '127.0.0.1',
	//   port: 80,
	//   // 服务开启gzip
	//   compress: true,
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
			style: 'css'
		}),
		useBabelRc(),
		addLessLoader({
			// 这里可以添加less的其他配置
			lessOptions: {
				// 根据自己需要配置即可~
			}
		}),
		addCustomize(),
		// alias
		addWebpackAlias({
			// 加载模块的时候，可以使用“@”符号来进行简写啦~
			'@': path.resolve(__dirname, './src/')
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
						drop_debugger: true
					}
				}
			})
		),
		// 判断环境变量ANALYZER参数的值
		process.env.ANALYZER && addWebpackPlugin(new BundleAnalyzerPlugin()),
		addWebpackPlugin(new ProgressBarPlugin())
	)
};
