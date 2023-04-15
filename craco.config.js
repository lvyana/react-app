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

const devMode = process.env.NODE_ENV === 'production';

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
const whenProdPlugin = whenProd(
	() => [
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
	],
	[]
);

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
	babel: {
		presets: [
			[
				'@babel/preset-env',
				{
					modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
					useBuiltIns: 'entry', // browserslist环境不支持的所有垫片都导入
					// https://babeljs.io/docs/en/babel-preset-env#usebuiltins
					// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
					corejs: {
						version: 3, // 使用core-js@3
						proposals: true
					}
				}
			]
		]
	},
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

			// 只有生产环境才配置
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
					publicPath: '/'
				};
				// 关闭 devtool
				webpackConfig.devtool = false;

				// 配置扩展扩展名
				webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.scss']];

				// 覆盖已经内置的 plugin 配置
				// webpackConfig.plugins.map((plugin) => {
				// 	whenProd(() => {
				// 		if (plugin instanceof MiniCssExtractPlugin) {
				// 			Object.assign(plugin.options, {
				// 				filename: 'static/css/[name].css',
				// 				chunkFilename: 'static/css/[name].css'
				// 			});
				// 		}
				// 	});
				// 	return plugin;
				// });

				webpackConfig.externals = {
					// 注意对应的在public/index.html引入jquery的远程文件地址
					// jQuery: 'jQuery',
					// react: 'React',
					// 'react-dom': 'ReactDOM',
					// '@ant-design/plots': 'Plots',
					// '@ant-design/graphs': 'Graphs',
					'@wangeditor/editor': 'wangEditor'
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
						'https://cdn-file-1308388249.cos.ap-nanjing.myqcloud.com/wangeditor.js'
					],
					css: [
						// 编辑器
						'https://cdn-file-1308388249.cos.ap-nanjing.myqcloud.com/wangeditor.css'
					]
				};

				/**
				 * webpack split chunks
				 */
				webpackConfig.optimization.splitChunks = {
					...webpackConfig.optimization.splitChunks,
					...{
						chunks: 'all',
						name: false
					}
				};
			});

			// 开发环境配置
			whenDev(() => {
				webpackConfig.devtool = 'source-map';
			});

			// 配置 htmlWebpackPlugin插件 将在public/index.html注入
			// cdn资源数组时 准备好的一些现成的资源
			const { isFound, match } = getPlugin(webpackConfig, pluginByName('HtmlWebpackPlugin'));

			if (isFound) {
				// 找到了HtmlWebpackPlugin的插件
				match.userOptions.cdn = cdn;
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
