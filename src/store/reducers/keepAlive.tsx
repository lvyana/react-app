/**
 * @file 缓存
 * @author ly
 * @createDate 2023年3月31日
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import type { TabelDataParams } from '@/views/antdCom/expenses/service';

export interface InitLayoutParams {
	expenses: TabelDataParams | null;
	default: string;
}
const initialState: InitLayoutParams = {
	expenses: null,
	default: '匹配不正确'
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const keepAlive = createSlice({
	name: 'keepAlive',
	initialState,
	reducers: {
		SET_ANT_EXPENSES: (state, { payload, type }: PayloadAction<TabelDataParams>) => {
			state.expenses = payload;
		}
	}
});

export const GET_ANT_EXPENSES = (state: RootState) => state.keepAlive.expenses;
export const GET_DEFAULT = (state: RootState) => state.keepAlive['default'];

export const { SET_ANT_EXPENSES } = keepAlive.actions;

export default keepAlive.reducer;
