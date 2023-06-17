/**
 * @file 组件参数配置
 * @author ly
 * @createDate 2020年4月27日
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
export type ThemeType = 'white' | 'dark';

/**
 * @type tabsMainLayout 1-显示   2-隐藏
 * @type footerLayout 1-显示   2-隐藏
 */
export type LayoutType = 1 | 2;
/**
 * @type 1-卡片菜单   2-左侧菜单展开    3-左侧菜单收起
 */
export type LayoutMenuType = 1 | 2 | 3;

/**
 * @param size 组件大小
 * @param color 主题
 * @param menuLayout 菜单布局
 * @param tabsMainLayout tabs布局
 * @param footerLayout 底部布局
 * @param
 */
export interface InitLayoutParams {
	size: SizeType;
	color: ThemeType;
	menuLayout: LayoutMenuType;
	tabsMainLayout: LayoutType;
	footerLayout: LayoutType;
	leftMenuCollapsed: boolean;
}
let initialState: InitLayoutParams = {
	size: 'middle',
	color: 'white',
	menuLayout: 1,
	tabsMainLayout: 1,
	footerLayout: 1,
	leftMenuCollapsed: false
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const layout = createSlice({
	name: 'layout',
	initialState,
	reducers: {
		SET_SIZE: (state, { payload, type }: PayloadAction<SizeType>) => {
			state.size = payload;
		},
		SET_THEME: (state, { payload, type }: PayloadAction<ThemeType>) => {
			state.color = payload;
		},
		SET_MENU_LAYOUT: (state, { payload, type }: PayloadAction<LayoutMenuType>) => {
			state.menuLayout = payload;
		},
		SET_TABSMAIN_LAYOUT: (state, { payload, type }: PayloadAction<LayoutType>) => {
			state.tabsMainLayout = payload;
		},
		SET_FOOTER_LAYOUT: (state, { payload, type }: PayloadAction<LayoutType>) => {
			state.footerLayout = payload;
		},
		SET_LEFT_MENU_COLLAPSED: (state, { payload, type }: PayloadAction<boolean>) => {
			state.leftMenuCollapsed = payload;
		}
	}
});

export const { SET_SIZE, SET_THEME, SET_MENU_LAYOUT, SET_TABSMAIN_LAYOUT, SET_FOOTER_LAYOUT, SET_LEFT_MENU_COLLAPSED } = layout.actions;

export const GET_SIZE = (state: RootState) => state.layout.size;
export const GET_THEME = (state: RootState) => state.layout.color;
export const GET_MENU_LAYOUT = (state: RootState) => state.layout.menuLayout;
export const GET_TABSMAIN_LAYOUT = (state: RootState) => state.layout.tabsMainLayout;
export const GET_FOOTER_LAYOUT = (state: RootState) => state.layout.footerLayout;
export const GET_LEFT_MENU_COLLAPSED = (state: RootState) => state.layout.leftMenuCollapsed;

export default layout.reducer;
