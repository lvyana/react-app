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
	adjustStyleLoaders,
	setWebpackPublicPath
} = require('customize-cra');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin'); // 对js进行压缩
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 大文件定位
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // gzip压缩

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

	config.hot = true; // 热更新
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
					'primary-color': 'pink',
					'link-color': 'pink',
					'border-radius-base': '2px'
				},
				javascriptEnabled: true,
				localIdentName: '[local]--[hash:base64:5]'
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
				new TerserPlugin({
					terserOptions: {
						// https://github.com/terser/terser#minify-options
						compress: {
							warnings: false, // 删除无用代码时是否给出警告
							drop_debugger: true, // 删除所有的debugger
							drop_console: true, // 删除所有的console.*
							pure_funcs: ['']
							// pure_funcs: ['console.log'], // 删除所有的console.log
						}
					}
				})
			),
		// 加上这一行，假设打包后的路径为 /console/....
		devMode && setWebpackPublicPath('https://react-1308388249.cos.ap-nanjing.myqcloud.com/'),
		// 判断环境变量ANALYZER参数的值
		devMode && addWebpackPlugin(new BundleAnalyzerPlugin({ analyzerHost: '127.0.0.2', analyzerPort: 8999 }))
	)
};
