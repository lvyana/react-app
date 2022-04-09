import { PHOTO, setPhotoType, TOKEN, setTokenType, setPermissType, PERMISS, FORM_KEEP_ALIVE, setFormKeepAliveType } from '../constant/user';

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
export const setFormKeepAlive: setFormKeepAliveType = (value) => {
	return { type: FORM_KEEP_ALIVE, value };
};
