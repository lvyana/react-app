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
	useBabelRc,
	adjustStyleLoaders
} = require('customize-cra');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 代码压缩
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 大文件定位
const ProgressBarPlugin = require('progress-bar-webpack-plugin'); // 打包进度
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // gzip压缩
const { name } = require('./package');

const devMode = process.env.NODE_ENV === 'production';

// 打包配置
console.log(process.env.NODE_ENV);
const addCustomize = () => (config) => {
	if (devMode) {
		// 关闭sourceMap
		config.devtool = false;

		// 添加js打包gzip配置
		config.plugins.push(
			new CompressionWebpackPlugin({
				test: /\.js$|\.css$/,
				threshold: 1024
			})
		);
	} else {
		config.output.clean = true;
		config.devtool = 'eval-source-map';
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
		fixBabelImports('import', {
			//配置按需加载
			libraryName: 'antd',
			libraryDirectory: 'es',
			style: true
		}),
		useBabelRc(),
		addLessLoader({
			// 这里可以添加less的其他配置
			lessOptions: {
				// 根据自己需要配置即可~
				modifyVars: {
					'primary-color': 'skyblue',
					'link-color': 'pink',
					'border-radius-base': '2px'
				},
				javascriptEnabled: true
				// localIdentName: '[local]--[hash:base64:5]'
			}
		}),
		adjustStyleLoaders(({ use: [, , postcss] }) => {
			const postcssOptions = postcss.options;
			postcss.options = { postcssOptions };
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
		devMode &&
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
		devMode && addWebpackPlugin(new BundleAnalyzerPlugin({ analyzerHost: '127.0.0.2', analyzerPort: 8999 })),
		devMode && addWebpackPlugin(new ProgressBarPlugin())
	)
};
