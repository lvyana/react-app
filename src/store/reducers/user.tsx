import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// 缓存
export interface reSetKeepAliveValue<T = unknown> {
	path: string;
	data: T;
}

/**
 * @param photo 头像url
 * @param token
 * @param permiss 权限
 * @param keepAlive 缓存
 */
interface initialStateType {
	photo: string;
	token: string;
	permiss: string[];
	keepAlive: reSetKeepAliveValue[];
}
export let initialState: initialStateType = {
	photo: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	token: '',
	permiss: ['*:*:*'],
	keepAlive: []
};
const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		SET_PHOTO: (state, { payload, type }) => {
			// action 里面有 type 和 payload 两个属性，所有的传参都在payload里面
			state.photo = payload;
		},
		SET_TOKEN: (state, { payload, type }) => {
			state.token = payload;
		},
		SET_PERMISS: (state, { payload, type }) => {
			state.permiss = payload;
		},
		SET_KEEP_ALIVE: (state, { payload, type }) => {
			state.keepAlive = payload;
		}
	}
});

export const { SET_PHOTO, SET_TOKEN, SET_PERMISS, SET_KEEP_ALIVE } = user.actions;

export const GET_SELECTOR_PHOTO = (state: RootState) => state.user.photo;
export const GET_SELECTOR_TOKEN = (state: RootState) => state.user.token;
export const GET_SELECTOR_PERMISS = (state: RootState) => state.user.permiss;
export const GET_SELECTOR_KEEP_ALIVE = (state: RootState) => state.user.keepAlive;

export default user.reducer;