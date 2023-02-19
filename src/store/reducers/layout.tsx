/**
 * @file 组件参数配置
 * @author ly
 * @createDate 2020年4月27日
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

export type ThemeType = 'theme1' | 'theme2';
export interface InitLayoutParams {
	size: SizeType;
	color: ThemeType;
}
let initialState: InitLayoutParams = {
	size: 'middle',
	color: 'theme1'
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
		}
	}
});

export const { SET_SIZE, SET_THEME } = layout.actions;

export const GET_SIZE = (state: RootState) => state.layout.size;
export const GET_THEME = (state: RootState) => state.layout.color;

export default layout.reducer;
