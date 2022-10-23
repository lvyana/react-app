/**
 *	@name 实现 log reducers
 *	@user ly
 *  @data 日期：2022年7月30日
 */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { headerConfig } from '@/api/publicApi';

export type headerConfigListArrType = {
	headerFieldId: string;
	headerFieldKey: string;
	headerFieldName: string;
	headerSelected: string;
	key: string;
};

export type headerConfigListType = {
	type: string;
	headerField: headerConfigListArrType[];
};
export interface InitGlobalConfigParams {
	headerConfigList: headerConfigListType[];
	router: any[];
}

let initialState: InitGlobalConfigParams = {
	headerConfigList: [],
	router: []
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const getHeaderConfig = createAsyncThunk('globalConfig/getHeaderConfig', async () => {
	try {
		const res = await headerConfig();
		const { data } = res;
		return data;
	} catch (error) {
		return [];
	}
});

// Slice
const globalConfig = createSlice({
	name: 'globalConfig',
	initialState,
	reducers: {
		SET_HEADER_CONFIG: (state, { payload, type }: PayloadAction<headerConfigListType[]>) => {
			state.headerConfigList = payload;
		},
		SET_ROUTER: (state, { payload, type }: PayloadAction<[]>) => {
			state.router = payload;
		}
	},
	// extraReducers 字段让 slice 处理在别处定义的 actions，
	// 包括由 createAsyncThunk 或其他slice生成的actions。
	extraReducers(builder) {
		builder
			.addCase(getHeaderConfig.pending, (state) => {
				// console.log('🚀 ~ 进行中！');
			})
			.addCase(getHeaderConfig.fulfilled, (state, { payload }) => {
				// console.log('🚀 ~ fulfilled', payload);
				state.headerConfigList = payload;
			})
			.addCase(getHeaderConfig.rejected, (state, err) => {
				// console.log('🚀 ~ rejected', err);
			});
	}
});

export const { SET_HEADER_CONFIG, SET_ROUTER } = globalConfig.actions;

export const GET_HEADER_CONFIG = (state: RootState) => state.globalConfig.headerConfigList;
export const GET_ROUTER = (state: RootState) => state.globalConfig.router;

export default globalConfig.reducer;
