import { PHOTO, setPhotoType, TOKEN, setTokenType, setPermissType, PERMISS, KEEP_ALIVE, setKeepAliveType } from '../constant/user';

/**
 * 设置头像
 * @param value
 * @returns
 */
export const setPhoto: setPhotoType = (value) => {
	return { type: PHOTO, value };
};

/**
 * 设置token
 * @param value
 * @returns
 */
export const setToken: setTokenType = (value) => {
	return { type: TOKEN, value };
};

/**
 * 设置权限列表
 * @param value
 * @returns
 */
export const setPermiss: setPermissType = (value) => {
	return { type: PERMISS, value };
};

/**
 * 设置缓存
 * @param value
 * @returns
 */
export const setKeepAlive: setKeepAliveType = (value) => {
	return { type: KEEP_ALIVE, value };
};
