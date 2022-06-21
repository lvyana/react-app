const TOKEN = 'token';

/**
 *
 * @returns 存储token
 */
export const setToken = (val: string): void => {
	sessionStorage.setItem(TOKEN, val);
};

/**
 *
 * @returns 获取token
 */
export const getToken = (): string | null => {
	return sessionStorage.getItem(TOKEN);
};

/**
 *
 * @returns 清空token
 */
export const clearToken = () => {
	sessionStorage.removeItem(TOKEN);
};
