import { PHOTO, setPhotoType, TOKEN, PERMISS, FORM_KEEP_ALIVE, reSetFormKeepAliveValue } from '../constant/user';

// 头像
export const setPhoto: setPhotoType = (value) => {
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

// 缓存
export const setFormKeepAlive = (value: reSetFormKeepAliveValue) => {
	return { type: FORM_KEEP_ALIVE, value };
};
