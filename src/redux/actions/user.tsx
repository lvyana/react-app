import { PHOTO, TOKEN, PERMISS } from '../constant/user';

// 头像
export const setPhoto = (value: string) => {
	return { type: PHOTO, value };
};

// token
export const setToken = (value: string) => {
	return { type: TOKEN, value };
};

// 权限列表
export const setPermiss = (value: string[]) => {
	return { type: PERMISS, value };
};
