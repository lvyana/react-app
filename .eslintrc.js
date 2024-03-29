module.exports = {
	root: true, // 根目录
	// 配置解析器支持的语法
	parserOptions: {
		ecmaFeatures: {
			jsx: true // 支持 JSX 语法
		},
		ecmaVersion: 2020, // ECMAScript 版本
		sourceType: 'module' // 模块化语法
	},
	parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
	extends: [
		'plugin:react/recommended', // 推荐的 React 规则
		'plugin:react-hooks/recommended', // 推荐的 React Hooks 规则
		'plugin:@typescript-eslint/recommended', // 推荐的 TypeScript 规则
		'plugin:prettier/recommended', // 推荐的 Prettier 规则
		'plugin:react/jsx-runtime' // 不需要导入 React
	],
	// 为我们提供运行环境，一个环境定义了一组预定义的全局变量
	env: {
		browser: true, // 浏览器环境
		node: true, // Node.js 环境
		es6: true // ECMAScript 6 版本环境
	},
	// ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
	// 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect' // 自动检测 React 版本
			// pragma: 'React', // 指定 JSX 的 pragma
			// version: '17.0.2' // 指定 React 版本
		}
	},
	// ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
	// "off" 或 0 - 关闭规则
	// "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
	// "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)。
	rules: {
		'max-lines-per-function': ['error', { max: 300 }], // 函数最大行数
		// ts
		'@typescript-eslint/no-unused-vars': ['off'], // 禁止未使用的变量
		'@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
		'@typescript-eslint/no-empty-interface': 'off', // 禁止空接口
		'@typescript-eslint/no-empty-function': ['off'], // 禁止空函数
		// react-hooks
		'react/prop-types': 'off', // 禁止使用 propTypes
		'react/jsx-uses-react': 'error', // 检测是否使用了 React
		'react/jsx-uses-vars': 'error', // 检测是否使用了 JSX 变量
		'react-hooks/exhaustive-deps': 'off', // 检测 useEffect 依赖项是否完整
		'react-hooks/rules-of-hooks': 'error', // 检测是否正确使用了 Hooks
		'no-empty-function': 'off', // 禁止空函数
		'@typescript-eslint/no-var-requires': 'off', // 禁止使用 require
		'prettier/prettier': ['error', { endOfLine: 'auto' }], // Prettier 配置
		'no-console': 'warn', // 禁止使用 console
		'no-debugger': 'warn', // 禁止使用 debugger
		'no-unused-vars': 'off', // 禁止未使用的变量
		'no-empty': ['error', { allowEmptyCatch: true }], // 禁止空语句块，允许空 catch 子句
		'no-nested-ternary': 'off', // 禁止使用嵌套的三元表达式
		'no-plusplus': 'off', // 禁止使用一元操作符 ++ 和 --
		'no-trailing-spaces': 'error', // 禁用行尾空格
		'no-var': 'warn', // 要求使用 let 或 const 而不是 var
		'prefer-const': 'off', // 要求使用 const
		eqeqeq: 'error', // 必须使用 === 和 !==
		'no-constant-condition': 'error', // 禁止在条件中使用常量表达式 if(true) if(1)
		'no-multiple-empty-lines': ['warn', { max: 2 }], // 空行最多不能超过2行
		'no-redeclare': 'error', // 禁止重复声明变量
		'no-unneeded-ternary': 'error', // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false
		'no-unused-expressions': 'error', // 禁止无用的表达式
		camelcase: 'error', // 强制驼峰法命名
		'callback-return': 'warn', // 避免多次调用回调
		complexity: ['off', 11], // 循环复杂度
		'max-depth': ['error', 3], // 嵌套块深度
		'max-nested-callbacks': ['off', 2] // 回调嵌套深度
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
