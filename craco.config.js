/**
 * TODO: 区分环境 —— NODE_ENV
 * - whenDev ☞ process.env.NODE_ENV === 'development'
 * - whenTest ☞ process.env.NODE_ENV === 'test'
 * - whenProd ☞ process.env.NODE_ENV === 'production'
 */

const { when, whenDev, whenProd, getPlugin, pluginByName } = require('@craco/craco');
const path = require('path');
// 对js进行压缩
const TerserPlugin = require('terser-webpack-plugin');
// 循环依赖检查
const CircularDependencyPlugin = require('circular-dependency-plugin');
// 大文件定位
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// 编译进度条
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');

// 生产调试模式
const production_debugging = false;

// 生产模式
const prodMode = process.env.NODE_ENV === 'production';

let public_path = prodMode ? '/admin' : '';

/* 修改默认的打包后文件夹名称build->dist */
const paths = require('react-scripts/config/paths');
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');

// 配置在开发环境需要用到的插件
const whenDevPlugin = whenDev(() => {
	return [
		// 循环依赖检查
		new CircularDependencyPlugin({
			exclude: /a\.js|node_modules/,
			include: /src/,
			failOnError: true,
			allowAsyncCycles: false,
			cwd: process.cwd()
		})
	];
}, []);

// 生产环境需要用到的插件
const whenProdPlugin = whenProd(() => {
	if (production_debugging) return [];
	return [
		new CompressionWebpackPlugin({
			test: /\.js$|\.css$/,
			threshold: 1024
		}),
		new TerserPlugin({
			terserOptions: {
				// https://github.com/terser/terser#minify-options
				compress: {
					warnings: false, // 删除无用代码时是否给出警告
					drop_debugger: true, // 删除所有的debugger
					drop_console: true, // 删除所有的console.*
					// pure_funcs: ['']
					pure_funcs: ['console.log'] // 删除所有的console.log
				}
			}
		}),
		new BundleAnalyzerPlugin({ analyzerHost: '127.0.0.2', analyzerPort: 8999 })
	];
}, []);

module.exports = {
	devServer: {
		proxy: {
			[process.env.REACT_APP_BASE_API]: {
				target: `http://127.0.0.1:4523`,
				changeOrigin: true,
				// 跨域配置
				pathRewrite: {
					['^' + process.env.REACT_APP_BASE_API]: '/m1/544622-0-default'
				}
			}
		}
	},
	// babel: {
	// 	presets: [
	// 		[
	// 			'@babel/preset-env',
	// 			{
	// 				modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
	// 				useBuiltIns: 'entry', // browserslist环境不支持的所有垫片都导入
	// 				// https://babeljs.io/docs/en/babel-preset-env#usebuiltins
	// 				// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
	// 				corejs: {
	// 					version: 3, // 使用core-js@3
	// 					proposals: true
	// 				}
	// 			}
	// 		]
	// 	]
	// },
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		configure: (webpackConfig, { env, paths }) => {
			// webpackConfig自动注入的webpack配置对象
			// 可以在这个函数中对它进行详细的自定义配置
			// 只要最后return出去就行
			let cdn = {
				js: [],
				css: []
			};

			// 开发环境配置
			whenDev(() => {
				webpackConfig.devtool = 'source-map';
				cdn = {
					js: [
						// {
						// 	url: '/react.development.js'
						// },
						// {
						// 	url: '/react-dom.development.js'
						// }
					],
					css: [
						// 编辑器
						// {
						// 	url: 'http://114.132.242.253:81/wangeditor.css',
						// 	rel: 'prefetch'
						// }
					]
				};
				webpackConfig.externals = {
					// 注意对应的在public/index.html引入jquery的远程文件地址
					// react: 'React',
					// 'react-dom': 'ReactDOM'
				};
			});

			// 生产环境配置
			whenProd(() => {
				// paths.appPath='public'
				paths.appBuild = 'dist'; // 配合输出打包修改文件目录
				// webpackConfig中可以解构出你想要的参数比如mode、devtool、entry等等，更多信息请查看webpackConfig.json文件
				/**
				 * 修改 output
				 */
				webpackConfig.output = {
					...webpackConfig.output,
					...{
						filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].[chunkhash].js'),
						chunkFilename: 'static/js/[name].[chunkhash].js'
					},
					path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
					publicPath: public_path + '/'
				};
				// 关闭 devtool
				webpackConfig.devtool = production_debugging ? 'hidden-source-map' : false;

				// 配置扩展扩展名
				webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.scss']];

				webpackConfig.externals = {
					// 注意对应的在public/index.html引入jquery的远程文件地址
					// jQuery: 'jQuery',
					// react: 'React',
					// 'react-dom': 'ReactDOM',
					// '@ant-design/plots': 'Plots',
					// '@ant-design/graphs': 'Graphs',
					// '@wangeditor/editor': 'wangEditor',
					// '@antv/g2plot': 'G2Plot'
				};

				// 配置现成的cdn 资源数组 现在是公共为了测试
				// 实际开发的时候 用公司自己花钱买的cdn服务器
				cdn = {
					js: [
						// antv 依赖react
						// 'https://unpkg.com/react@18.2.0/umd/react.production.min.js',
						// 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
						// Plots 相关的图表
						// 'https://unpkg.com/@ant-design/plots@latest/dist/plots.min.js',
						// Flowchart 相关的图
						// 'https://unpkg.com/@ant-design/flowchart@latest/dist/flowchart.min.js"',
						// Maps 相关的图表
						// 'https://unpkg.com/@ant-design/maps@latest/dist/maps.min.js'
						// Graphs 相关的图表
						// 'https://unpkg.com/@ant-design/graphs@latest/dist/graphs.min.js',
						// 编辑器
						// {
						// 	url: 'http://114.132.242.253:81/wangeditor.js',
						// 	defer: true
						// },
						// {
						// 	url: 'http://114.132.242.253:81/g2plot.min.js'
						// }
					],
					css: [
						// 编辑器
						// {
						// 	url: 'http://114.132.242.253:81/wangeditor.css',
						// 	rel: 'prefetch'
						// }
					]
				};

				// 配置optimization
				webpackConfig.optimization = {
					splitChunks: {
						cacheGroups: {
							// 分离第三方库
							antd: {
								test: /[\\/]node_modules[\\/]antd[\\/]/,
								name: 'antd',
								chunks: 'all'
							},
							reactDom: {
								test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
								name: 'react-dom',
								chunks: 'all'
							},
							refractor: {
								test: /[\\/]node_modules[\\/](refractor)[\\/]/,
								name: 'refractor',
								chunks: 'all'
							}
						}
					}
				};

				// 启用多线程打包
				// 在这里进行 thread-loader 的配置
				const jsRule = webpackConfig.module.rules.find((rule) => rule.test && rule.test.toString().includes('.js'));
				if (jsRule) {
					jsRule.use.unshift('thread-loader');
					// 	.loader('thread-loader').options({
					// 	// 可以根据实际情况进行配置
					// 	workers: 4, // 启用的 worker 数量，默认为 cpu 核心数减1
					// 	workerParallelJobs: 50, // 每个 worker 并行执行的任务数量
					// 	poolRespawn: false, // 是否在 worker 退出后重启 worker
					// 	poolTimeout: 2000 // worker 空闲时自动销毁的时间，单位 ms
					// });
				}
			});

			// 配置 htmlWebpackPlugin插件 将在public/index.html注入
			// cdn资源数组时 准备好的一些现成的资源
			const { isFound, match } = getPlugin(webpackConfig, pluginByName('HtmlWebpackPlugin'));

			if (isFound) {
				// 找到了HtmlWebpackPlugin的插件
				match.userOptions.cdn = cdn;
				match.userOptions.public_path = public_path;
			}

			// 小于 40K 的图片都会变成 base64 的图片格式
			const urlLoader = webpackConfig.module.rules.find((rule) => rule.loader && rule.loader.includes('url-loader'));
			if (urlLoader) {
				urlLoader.test = /\.(png|jpe?g|gif|webp)(\?.*)?$/;
				urlLoader.use[0].options.limit = 40960;
			}

			// 返回重写后的新配置
			return webpackConfig;
		},

		plugins: [new ProgressBarWebpackPlugin(), ...whenDevPlugin, ...whenProdPlugin]
	},

	style: {
		postcssOptions: {
			plugins: [require('tailwindcss'), require('autoprefixer')]
		}
	}
};
