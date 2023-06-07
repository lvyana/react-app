module.exports = {
	plugins: ['stylelint-order'],
	extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
	customSyntax: 'postcss',
	rules: {
		'selector-class-pattern': [
			// 命名规范 -
			'^([A-Za-z0-9]*)(-[A-Za-z0-9]+)*$',
			{
				message: 'Expected class selector to be kebab-case'
			}
		],
		'color-function-notation': 'legacy',
		'at-rule-empty-line-before': null,
		'at-rule-no-unknown': null,
		'length-zero-no-unit': true, // 禁止零长度的单位（可自动修复）
		'shorthand-property-no-redundant-values': true, // 简写属性
		'declaration-block-no-duplicate-properties': true, // 禁止声明快重复属性
		'no-descending-specificity': true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
		'selector-max-id': 0, // 限制一个选择器中 ID 选择器的数量
		'max-nesting-depth': 3,
		'no-invalid-double-slash-comments': true, //不允许双斜杠注释(/ /…)不支持CSS
		'order/properties-order': [
			// 规则顺序
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
