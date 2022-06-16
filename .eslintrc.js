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
	extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended'],
	// 为我们提供运行环境，一个环境定义了一组预定义的全局变量
	env: {
		browser: true,
		node: true,
		es6: true
	},
	// ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
	// 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	settings: {
		react: {
			version: '17.0.2'
		}
	},
	// ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
	// "off" 或 0 - 关闭规则
	// "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
	// "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)。
	rules: {
		// ts
		'@typescript-eslint/no-unused-vars': ['off'],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-empty-function': ['off'],
		// react-hooks
		'react-hooks/rules-of-hooks': 'error',
		'no-empty-function': 'off',
		'react-hooks/exhaustive-deps': 'off',
		// ---
		'no-console': 'warn',
		'no-debugger': 'warn',
		'prettier/prettier': 'off', // 关闭prettier的提示
		'no-unused-vars': 'off', // 关闭未使用的变量
		'no-console': 'off',
		'no-empty': ['error', { allowEmptyCatch: true }], // 禁止空语句块 允许空catch子句
		'no-nested-ternary': 0, // 不允许使用嵌套的三元表达式
		'no-plusplus': 0, // 禁止使用一元操作符 ++ 和 --
		'no-trailing-spaces': 2, // 禁用行尾空格
		'no-var': 1, // 要求使用 let 或 const 而不是 var
		'prefer-const': 0, // 要求使用const
		eqeqeq: 2, //必须使用 === 和 !==
		'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
		'no-multiple-empty-lines': [1, { max: 2 }], //空行最多不能超过2行
		'no-redeclare': 2, //禁止重复声明变量
		'no-unneeded-ternary': 2, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false
		'no-unused-expressions': 2, //禁止无用的表达式
		camelcase: 2, //强制驼峰法命名
		'callback-return': 1, //避免多次调用回调什么的
		complexity: [0, 11], //循环复杂度
		'max-depth': [0, 4], //嵌套块深度
		'max-nested-callbacks': [0, 2] //回调嵌套深度
	}
};

// # 安装 eslint
// npm i eslint -D

// # 使用 ts 的解析器
// npm i @typescript-eslint/parser -D

// # 添加 ts 相关规则
// npm i @typescript-eslint/eslint-plugin -D

// # 添加 react, hooks 相关的规则
// npm i eslint-plugin-react eslint-plugin-react-hooks  -D
