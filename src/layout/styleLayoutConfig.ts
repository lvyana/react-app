/**
 * @file 所有布局的样式
 * @author ly
 *  @createDate 日期：2020年4月27日
 */

// #----------- 菜单样式配置 -----------

// 卡片配置参数
const CARD_MENU = {
	main: {}
};

// 左侧菜单配置参数
const LEFT_MENU = {
	main: {
		marginLeft: 200
	}
};

const styleLayout = {
	1: CARD_MENU,
	2: LEFT_MENU
};

// #----------- 所有布局的样式 -----------
const styleLayoutConfig = {
	styleLayout: styleLayout
};

export type StyleLayout = typeof CARD_MENU | typeof LEFT_MENU;

export default styleLayoutConfig;
