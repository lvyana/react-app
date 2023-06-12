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
 * @type 1-卡片菜单   2-左侧菜单
 */
export type LayoutType = 1 | 2;
/**
 * @param size 组件大小
 * @param color 主题
 * @param menuLayout 菜单布局
 * @param tabsMainLayout tabs布局
 */
export interface InitLayoutParams {
	size: SizeType;
	color: ThemeType;
	menuLayout: LayoutType;
	tabsMainLayout: LayoutType;
}
let initialState: InitLayoutParams = {
	size: 'middle',
	color: 'white',
	menuLayout: 1,
	tabsMainLayout: 2
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
		SET_MENU_LAYOUT: (state, { payload, type }: PayloadAction<LayoutType>) => {
			state.menuLayout = payload;
		},
		SET_TABSMAIN_LAYOUT: (state, { payload, type }: PayloadAction<LayoutType>) => {
			state.tabsMainLayout = payload;
		}
	}
});

export const { SET_SIZE, SET_THEME, SET_MENU_LAYOUT, SET_TABSMAIN_LAYOUT } = layout.actions;

export const GET_SIZE = (state: RootState) => state.layout.size;
export const GET_THEME = (state: RootState) => state.layout.color;
export const GET_MENU_LAYOUT = (state: RootState) => state.layout.menuLayout;
export const GET_TABSMAIN_LAYOUT = (state: RootState) => state.layout.tabsMainLayout;

export default layout.reducer;
