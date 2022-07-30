/**
 *	@name 实现 layout reducers
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export interface InitLayoutParams {
	size: SizeType;
}
let initialState: InitLayoutParams = {
	size: 'middle'
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const layout = createSlice({
	name: 'layout',
	initialState,
	reducers: {
		SET_SIZE: (state, { payload, type }: PayloadAction<SizeType>) => {
			state.size = payload;
		}
	}
});

export const { SET_SIZE } = layout.actions;
export const GET_SIZE = (state: RootState) => state.layout.size;

export default layout.reducer;
