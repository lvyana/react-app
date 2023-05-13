module.exports = {
	printWidth: 140, // 超过最大值换行
	tabWidth: 2, // tab键宽度，默认为4
	useTabs: true, // 使用tab（制表符）缩进而非空格
	singleQuote: true, // 用单引号代替双引号
	semi: true, // 行末是否加分号
	trailingComma: 'none', // 最后一个对象元素加逗号
	bracketSpacing: true, // 对象，数组加空格
	jsxBracketSameLine: true, // jsx > 是否另起一行
	requirePragma: false, // 是否严格按照文件顶部的特殊注释格式化代码
	arrowParens: 'always', // 箭头函数，单个参数添加括号
	bracketSpacing: true, // 大括号有空格 { name: 'rose' }
	endOfLine: 'auto', // 换行符格式为系统默认
	quoteProps: 'as-needed', // 对象属性只在必要时加引号
	jsxSingleQuote: false, // jsx中使用双引号
	proseWrap: 'always', // 换行应用于markdown和其他类似格式的文件
	htmlWhitespaceSensitivity: 'ignore' // HTML空白灵敏度忽略
};

// prettier
// yarn add prettier -D

// 避免 eslint 和 prettier 冲突，我们需要再安装两个包eslint-config-prettier、eslint-plugin-prettier。
// eslint-config-prettier的作用是关闭 eslint 中所有不必要的或可能与 prettier 冲突的规则，让 eslint 检测代码时不会对这些规则报错或告警。比如 eslint 规定是双引号，而我们用 prettier 格式化代码时是用单引号，会存在冲突。我们在eslint-config-prettier 代码可以看到，例如缩进、引号等格式规则都被关闭了。关闭后，我们可以完全自定义 prettier 来格式化我们的代码，而不受 eslint 影响。
// eslint-plugin-prettier 是一个 ESLint 插件。上面我们说关闭了一些 eslint 的代码格式规则。假设我们约定 prettier 规则使用双引号，然而敲代码写成单引号，我还是希望能够按 prettier 的规则给我一些代码不规范的报错或警告提示。那么eslint-config-prettier是关闭了 eslint 中与 prettier 冲突的规则，eslint-plugin-prettier就是开启了以 prettier 为准的规则，并将报告错误给 eslint。

// prettier 官方提供了一款工具 eslint-config-prettier 来解决这个问题(eslint和prettier冲突)。
// yarn add eslint-config-prettier -D

// prettier 官方提供了一个 ESLint 插件 eslint-plugin-prettier。
// yarn add eslint-plugin-prettier -D
