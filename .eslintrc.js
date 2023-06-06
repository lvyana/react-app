module.exports = {
	root: true,
	// 配置解析器支持的语法
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:react/jsx-runtime' // 顶部不需要导入React
	],
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
			version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
			// pragma: 'React',
			// version: '17.0.2'
		}
	},
	// ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
	// "off" 或 0 - 关闭规则
	// "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
	// "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)。
	rules: {
		'max-lines-per-function': ['error', { max: 300 }],
		// ts
		'@typescript-eslint/no-unused-vars': ['off'],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-empty-function': ['off'],
		// react-hooks
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react-hooks/exhaustive-deps': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'no-empty-function': 'off',
		// ---
		//配置camelcase选项
		camelcase: [0, { properties: 'always' }],
		'@typescript-eslint/no-var-requires': 'off',
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'no-console': 'warn',
		'no-debugger': 'warn',
		'no-unused-vars': 'off', // 关闭未使用的变量
		'no-empty': ['error', { allowEmptyCatch: true }], // 禁止空语句块 允许空catch子句
		'no-nested-ternary': 'off', // 不允许使用嵌套的三元表达式
		'no-plusplus': 'off', // 禁止使用一元操作符 ++ 和 --
		'no-trailing-spaces': 'error', // 禁用行尾空格
		'no-var': 'warn', // 要求使用 let 或 const 而不是 var
		'prefer-const': 'off', // 要求使用const
		eqeqeq: 'error', //必须使用 === 和 !==
		'no-constant-condition': 'error', //禁止在条件中使用常量表达式 if(true) if(1)
		'no-multiple-empty-lines': ['warn', { max: 2 }], //空行最多不能超过2行
		'no-redeclare': 'error', //禁止重复声明变量
		'no-unneeded-ternary': 'error', //禁止不必要的嵌套 var isYes = answer === 1 ? true : false
		'no-unused-expressions': 'error', //禁止无用的表达式
		camelcase: 'error', //强制驼峰法命名
		'callback-return': 'warn', //避免多次调用回调什么的
		complexity: ['off', 11], //循环复杂度
		'max-depth': ['off', 4], //嵌套块深度
		'max-nested-callbacks': ['off', 2] //回调嵌套深度
	}
};

// # 安装 eslint
// yarn add eslint -D

// # 使用 ts 的解析器
// yarn add @typescript-eslint/parser -D

// # 添加 ts 相关规则
// yarn add @typescript-eslint/eslint-plugin -D

// # 添加 react, hooks 相关的规则
// yarn add eslint-plugin-react eslint-plugin-react-hooks  -D
