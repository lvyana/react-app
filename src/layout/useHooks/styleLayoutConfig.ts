/**
 * @file 所有布局的样式
 * @author ly
 *  @createDate 日期：2020年4月27日
 */

// #----------- 菜单样式配置 -----------

// 卡片配置参数
const CARD_MENU = {
	main: { transition: 'all 0.2s' }
};

// 左侧菜单配置参数
const LEFT_MENU = {
	main: {
		marginLeft: 200,
		transition: 'all 0.2s'
	}
};

// 左侧收起菜单配置参数
const LEFT_COLLAPSED_MENU = {
	main: {
		marginLeft: 80,
		transition: 'all 0.2s'
	}
};

const menuStyle = {
	1: CARD_MENU,
	2: LEFT_MENU,
	3: LEFT_COLLAPSED_MENU
};

const SHOW_FOOTER = {
	main: { minHeight: 'calc(100vh - 133px)' }
	// marginLeft: 200
};

const HIDDEN_FOOTER = {
	main: { minHeight: 'calc(100vh - 64px)' }
};

const footerStyle = {
	1: HIDDEN_FOOTER,
	2: SHOW_FOOTER
};

// #----------- 所有布局的样式 -----------
const styleLayoutConfig = {
	menuStyle,
	footerStyle
};

export type MenuLayout = typeof CARD_MENU | typeof LEFT_MENU;
export type FooterLayout = typeof SHOW_FOOTER | typeof HIDDEN_FOOTER;

export type StyleLayoutConfig = {
	menuStyle: MenuLayout;
	footerStyle: FooterLayout;
};

export default styleLayoutConfig;
