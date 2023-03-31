/**
 * @file 用户信息
 * @author ly
 * @createDate 2020年4月27日
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import menuLogo from '@/assets/images/menu.png';

/**
 * @param photo 头像url
 * @param token
 * @param permiss 权限
 */
export interface InitUserParams {
	photo: string;
	token: string;
	permiss: string[];
}
export let initialState: InitUserParams = {
	photo: menuLogo,
	token: '',
	permiss: ['*:*:*']
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		SET_PHOTO: (state, { payload, type }: PayloadAction<string>) => {
			// action 里面有 type 和 payload 两个属性，所有的传参都在payload里面
			state.photo = payload;
		},
		SET_TOKEN: (state, { payload, type }: PayloadAction<string>) => {
			state.token = payload;
		},
		SET_PERMISS: (state, { payload, type }: PayloadAction<string[]>) => {
			state.permiss = payload;
		}
	}
});

export const { SET_PHOTO, SET_TOKEN, SET_PERMISS } = user.actions;

export const GET_SELECTOR_PHOTO = (state: RootState) => state.user.photo;
export const GET_SELECTOR_TOKEN = (state: RootState) => state.user.token;
export const GET_SELECTOR_PERMISS = (state: RootState) => state.user.permiss;

export default user.reducer;
