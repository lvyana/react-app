import { createFromIconfontCN } from '@ant-design/icons';
/**
 *
 * icon 图标
 */
const IconFont = createFromIconfontCN({
	scriptUrl: [
		'//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
		'//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
		'//at.alicdn.com/t/font_2672178_l0j8r2ycsy.js'
	]
});
export default IconFont;
