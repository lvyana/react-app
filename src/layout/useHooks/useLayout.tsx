/**
 * @file 获取排版配置参数
 * @author ly
 * @createDate 2023年6月13日
 */
import React from 'react';
import { useAppSelector } from '@/store';
import { GET_FOOTER_LAYOUT, GET_MENU_LAYOUT, GET_TABSMAIN_LAYOUT } from '@/store/reducers/layout';
import styleLayoutConfig, { StyleLayoutConfig } from './styleLayoutConfig';
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useLayout = () => {
	// 获取当前菜单布局
	const menuLayout = useAppSelector(GET_MENU_LAYOUT);

	// 获取当前tabs布局
	const tabsMainLayout = useAppSelector(GET_TABSMAIN_LAYOUT);

	// 获取当前footer布局
	const footerLayout = useAppSelector(GET_FOOTER_LAYOUT);

	// 所有布局的样式
	// const { menu, footer } = styleLayoutConfig;

	// 菜单布局对应的样式
	const menuStyle = styleLayoutConfig.menuStyle[menuLayout];

	// footer布局对应的样式
	const footerStyle = styleLayoutConfig.footerStyle[footerLayout];

	// 所有布局的样式
	const layoutStyle = { menuStyle, footerStyle };

	return { menuLayout, tabsMainLayout, footerLayout, layoutStyle };
};

export default useLayout;
