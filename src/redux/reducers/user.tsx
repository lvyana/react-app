import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

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
		setPhoto: (state, { payload, type }) => {
			state.photo = payload;
		},
		setToken: (state, { payload, type }) => {
			state.token = payload;
		},
		setPermiss: (state, { payload, type }) => {
			state.permiss = payload;
		},
		setKeepAlive: (state, { payload, type }) => {
			state.keepAlive = payload;
		}
	}
});
// const user = (state = initialState, action: userActions) => {
// 	let newState: initialStateType = JSON.parse(JSON.stringify(state));
// 	let { type, value } = action;
// 	switch (type) {
// 		case PHOTO:
// 			newState[PHOTO] = value as string;
// 			return newState;
// 		case TOKEN:
// 			newState[TOKEN] = value as string;
// 			return newState;
// 		case PERMISS:
// 			newState[PERMISS] = value as string[];
// 			return newState;
// 		case KEEP_ALIVE:
// 			newState[KEEP_ALIVE] = value as reSetKeepAliveValue[];
// 			return newState;
// 		default:
// 			return newState;
// 	}
// };

export const { setPhoto, setToken, setPermiss, setKeepAlive } = user.actions;
export const getSelectPhoto = (state: RootState) => state.user.photo;
export const getSelectToken = (state: RootState) => state.user.token;
export const getPermiss = (state: RootState) => state.user.permiss;
export const getKeepAlive = (state: RootState) => state.user.keepAlive;

export default user.reducer;
