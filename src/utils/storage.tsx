/**
 *	@name 实现 localStorage
 *	@user ly
 *  @data 日期：2020年4月27日
 */

const TOKEN = 'token';

/**
 *
 * @returns 存储token
 */
export const setToken = (val: string): void => {
	localStorage.setItem(TOKEN, val);
};

/**
 *
 * @returns 获取token
 */
export const getToken = (): string | null => {
	return localStorage.getItem(TOKEN);
};

/**
 *
 * @returns 清空token
 */
export const clearToken = () => {
	localStorage.removeItem(TOKEN);
};
