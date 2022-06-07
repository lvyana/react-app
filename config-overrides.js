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
// 开发配置
const devServerConfig = () => (config) => {
	// config.host = '127.0.0.1';
	// config.port = 80;
	config.compress = true;
	config.proxy = {
		[process.env.REACT_APP_BASE_API]: {
			target: `http://127.0.0.1:4523`,
			changeOrigin: true,
			// 跨域配置
			pathRewrite: {
				['^' + process.env.REACT_APP_BASE_API]: '/mock/544622'
			}
		}
	};
	return config;
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

			// 配置打包后的文件位置 js、css会打包到dist目录下
			// config.output.path = path.join(path.dirname(config.output.path), 'dist');
			// config.output.publicPath = path.join(path.dirname(config.output.path), 'dist/');
			// config.output.path = path.resolve(__dirname, 'dist');
			// // assets文件修改
			// config.output.assetModuleFilename = 'images/[contenthash][ext]';
			config.output.clean = true;
			return config;
		},
		// fixBabelImports('import', { //配置按需加载
		// 	libraryName: 'antd',
		// 	libraryDirectory: 'es',
		// 	style: true,
		// }),
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
			'@antv/g2plot': 'G2Plot',
			'@wangeditor/editor': 'wangEditor'
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
		process.env.REACT_APP_ANALYZER === 'true' &&
			addWebpackPlugin(new BundleAnalyzerPlugin({ analyzerHost: '127.0.0.2', analyzerPort: 8999 })),
		addWebpackPlugin(new ProgressBarPlugin())
	)
};
