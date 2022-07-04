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
	bracketSpacing: true // 大括号有空格 { name: 'rose' }
};

// yarn add prettier -D
