/**
 *	@name 实现icon 图标
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
	scriptUrl: [
		'//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
		'//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
		'//at.alicdn.com/t/c/font_3416197_kfyeg89yfl.js'
	]
});
export default IconFont;
