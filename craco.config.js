/**
 * TODO: 区分环境 —— NODE_ENV
 * - whenDev ☞ process.env.NODE_ENV === 'development'
 * - whenTest ☞ process.env.NODE_ENV === 'test'
 * - whenProd ☞ process.env.NODE_ENV === 'production'
 */

const { when, whenDev, whenProd } = require('@craco/craco');
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
			exclude: /node_modules/,
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

	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		configure: (webpackConfig, { env, paths }) => {
			// paths.appPath='public'
			paths.appBuild = 'dist'; // 配合输出打包修改文件目录
			// webpackConfig中可以解构出你想要的参数比如mode、devtool、entry等等，更多信息请查看webpackConfig.json文件
			/**
			 * 修改 output
			 */
			webpackConfig.output = {
				...webpackConfig.output,
				...{
					filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
					chunkFilename: 'static/js/[name].js'
				},
				path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
				publicPath: '/'
			};
			// 关闭 devtool
			webpackConfig.devtool = false;

			webpackConfig.externals = {
				// 注意对应的在public/index.html引入jquery的远程文件地址
				// jQuery: 'jQuery',
				// react: 'React',
				// 'react-dom': 'ReactDOM',
				// '@ant-design/plots': 'Plots',
				// '@ant-design/graphs': 'Graphs',
				'@wangeditor/editor': 'wangEditor'
			};
			/**
			 * webpack split chunks
			 */
			// webpackConfig.optimization.splitChunks = {
			//   ...webpackConfig.optimization.splitChunks,
			//   ...{
			//     chunks: 'all',
			//     name: true
			//   }
			// }
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
