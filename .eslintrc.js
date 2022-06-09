module.exports = {
	root: true,
	// 配置解析器支持的语法
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	parser: '@typescript-eslint/parser',
	// 为我们提供运行环境，一个环境定义了一组预定义的全局变量
	env: {
		browser: true,
		node: true,
		es6: true
	},
	// ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
	// 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	// ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
	// "off" 或 0 - 关闭规则
	// "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
	// "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)。
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': 'off', //关闭prettier的提示
		'no-unused-vars': 'off',
		'no-console': 'off',
		'no-empty': 2, // 禁止空语句块
		'no-nested-ternary': 0, // 不允许使用嵌套的三元表达式
		'no-plusplus': 0, // 禁止使用一元操作符 ++ 和 --
		'no-trailing-spaces': 2, // 禁用行尾空格
		'no-var': 1 // 要求使用 let 或 const 而不是 var
	}
};
