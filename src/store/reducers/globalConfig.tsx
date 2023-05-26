/**
 * @file 功能参数配置
 * @author ly
 * @createDate 2022年7月30日
 */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { headerConfig } from '@/api/publicApi';
import type { Router } from '@/layout/menu/routerData';
import { SET_SIZE } from './layout';
/**
 * @param headerFieldId 唯一标识
 * @param headerFieldKey 标识
 * @param headerFieldName 名称
 * @param headerSelected 是否选中
 * @param key
 */
export type headerConfigListArrType = {
	headerFieldId: string;
	headerFieldKey: string;
	headerFieldName: string;
	headerSelected: string;
	key: string;
};

/**
 * @param type 表头某一项标识
 * @param headerField 表头集合参数
 */
export type headerConfigListType = {
	type: string;
	headerField: headerConfigListArrType[];
};

/**
 * @param headerConfigList
 * @param router
 */
export interface InitGlobalConfigParams {
	headerConfigList: headerConfigListType[];
	router: Router[];
}

/**
 * @param headerConfigList 编辑表头
 * @param router 路由
 */
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
		SET_ROUTER: (state, { payload, type }: PayloadAction<Router[]>) => {
			state.router = payload;
		}
	},
	// extraReducers 字段让 slice 处理在别处定义的 actions，
	// 包括由 createAsyncThunk 或其他slice生成的actions。
	extraReducers(builder) {
		builder.addCase(SET_SIZE, (state, { payload }) => {
			// increment方法触发时的处理
			// console.log(payload);
		});
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
