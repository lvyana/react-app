/**
 * @file icon图标
 * @author ly
 * @createDate 2020年4月27日
 */
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
	scriptUrl: [
		'//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
		'//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
		'//at.alicdn.com/t/c/font_3416197_y9c1g2w3lcs.js'
	]
});
export default IconFont;
