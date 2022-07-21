import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface LogValue {
	time: string;
	text: string;
}

export interface InitLogParams {
	everyOne: LogValue[];
	list: { name: string }[];
	totals: number;
}
let initialState: InitLogParams = {
	everyOne: [],
	list: [],
	totals: 0
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

// 请求电影列表
const getMovieListApi = () =>
	fetch('https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48').then((res) => res.json());

// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const getMovieData = createAsyncThunk('log/getMovie', async () => {
	const res = await getMovieListApi();
	return res;
});

/**
 * @name log reducers
 */
const log = createSlice({
	name: 'log',
	initialState,
	reducers: {
		SET_EVERY_ONE: (state, { payload, type }: PayloadAction<[]>) => {
			state.everyOne = payload;
		},
		// 数据请求完触发
		loadDataEnd: (state, { payload }: PayloadAction<[]>) => {
			state.list = payload;
			state.totals = payload.length;
		}
	},
	// extraReducers 字段让 slice 处理在别处定义的 actions，
	// 包括由 createAsyncThunk 或其他slice生成的actions。
	extraReducers(builder) {
		builder
			.addCase(getMovieData.pending, (state) => {
				// console.log('🚀 ~ 进行中！');
			})
			.addCase(getMovieData.fulfilled, (state, { payload }) => {
				// console.log('🚀 ~ fulfilled', payload);
				state.list = payload.data.list;
				state.totals = payload.data.list.length;
			})
			.addCase(getMovieData.rejected, (state, err) => {
				// console.log('🚀 ~ rejected', err);
			});
	}
});

export const { SET_EVERY_ONE, loadDataEnd } = log.actions;

export const GET_EVERY_ONE = (state: RootState) => state.log.everyOne;
export const GET_LIST = (state: RootState) => state.log.list;

export default log.reducer;
