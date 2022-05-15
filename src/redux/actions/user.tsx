import { PHOTO, setPhotoType, TOKEN, setTokenType, setPermissType, PERMISS, KEEP_ALIVE, setKeepAliveType } from '../constant/user';

// 头像
export const setPhoto: setPhotoType = (value) => {
	return { type: PHOTO, value };
};

// token
export const setToken: setTokenType = (value) => {
	return { type: TOKEN, value };
};

// 权限列表
export const setPermiss: setPermissType = (value) => {
	return { type: PERMISS, value };
};

// 缓存
export const setKeepAlive: setKeepAliveType = (value) => {
	return { type: KEEP_ALIVE, value };
};
