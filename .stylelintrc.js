module.exports = {
	plugins: ['stylelint-order'], // 使用stylelint-order插件
	extends: ['stylelint-config-standard', 'stylelint-config-css-modules'], // 继承stylelint-config-standard和stylelint-config-css-modules配置
	customSyntax: 'postcss', // 使用PostCSS解析器
	rules: {
		'selector-class-pattern': [
			// 检查选择器类名是否符合规范
			'^([A-Za-z0-9]*)(-[A-Za-z0-9]+)*$', // 匹配kebab-case
			{
				message: 'Expected class selector to be kebab-case' // 提示信息
			}
		],
		'string-quotes': 'single', // 字符串使用单引号
		'color-function-notation': 'legacy', // 颜色函数使用legacy
		'at-rule-empty-line-before': null, // 不检查@规则前是否有空行
		'at-rule-no-unknown': null, // 忽略未知的@规则
		'at-rule-name-case': 'lower', // @规则名使用小写
		'length-zero-no-unit': true, // 禁止零长度的单位（可自动修复）
		'shorthand-property-no-redundant-values': true, // 简写属性
		'number-leading-zero': 'never', // 小数不带0
		'declaration-block-no-duplicate-properties': true, // 禁止声明快重复属性
		'no-descending-specificity': true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
		'selector-max-id': 0, // 限制一个选择器中 ID 选择器的数量
		'max-nesting-depth': 3, // 最大嵌套深度为3
		'no-invalid-double-slash-comments': true, // 不允许双斜杠注释(/ /…)不支持CSS
		'no-missing-end-of-source-newline': true, // 文件末尾需要一个空行
		indentation: 2, // 缩进使用两个空格
		'selector-max-empty-lines': 0, // 选择器后不允许有空行
		'order/properties-order': [
			// 检查属性顺序是否符合规范
			'position',
			'top',
			'right',
			'bottom',
			'left',
			'z-index',
			'display',
			'float',
			'width',
			'height',
			'max-width',
			'max-height',
			'min-width',
			'min-height',
			'padding',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'margin',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'margin-collapse',
			'margin-top-collapse',
			'margin-right-collapse',
			'margin-bottom-collapse',
			'margin-left-collapse',
			'overflow',
			'overflow-x',
			'overflow-y',
			'clip',
			'clear',
			'font',
			'font-family',
			'font-size',
			'font-smoothing',
			'osx-font-smoothing',
			'font-style',
			'font-weight',
			'line-height',
			'letter-spacing',
			'word-spacing',
			'color',
			'text-align',
			'text-decoration',
			'text-indent',
			'text-overflow',
			'text-rendering',
			'text-size-adjust',
			'text-shadow',
			'text-transform',
			'word-break',
			'word-wrap',
			'white-space',
			'vertical-align',
			'list-style',
			'list-style-type',
			'list-style-position',
			'list-style-image',
			'pointer-events',
			'cursor',
			'background',
			'background-color',
			'border',
			'border-radius',
			'content',
			'outline',
			'outline-offset',
			'opacity',
			'filter',
			'visibility',
			'size',
			'transform'
		]
	}
};

// eslint 额外配置项
// yarn add stylelint-order -D
// yarn add stylelint-config-standard -D
// yarn add stylelint-config-css-modules -D
