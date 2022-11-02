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

const USER_NAME = 'userName';

/**
 *
 * @returns 存储用户账号
 */
export const setUserName = (val: string): void => {
	localStorage.setItem(USER_NAME, val);
};

/**
 *
 * @returns 获取用户账号
 */
export const getUserName = (): string | null => {
	return localStorage.getItem(USER_NAME);
};

/**
 *
 * @returns 清空用户账号
 */
export const clearUserName = () => {
	localStorage.removeItem(USER_NAME);
};

const PASSWORD = 'password';

/**
 *
 * @returns 存储用户密码
 */
export const setPassword = (val: string): void => {
	localStorage.setItem(PASSWORD, val);
};

/**
 *
 * @returns 获取用户密码
 */
export const getPassword = (): string | null => {
	return localStorage.getItem(PASSWORD);
};

/**
 *
 * @returns 清空用户密码
 */
export const clearPassword = () => {
	localStorage.removeItem(PASSWORD);
};

const REMEMBER = 'remember';

/**
 *
 * @returns 存储 是否保存账号密码
 */
export const setRemember = (val: string): void => {
	localStorage.setItem(REMEMBER, val);
};

/**
 *
 * @returns 获取 是否保存账号密码
 */
export const getRemember = (): string | null => {
	return localStorage.getItem(REMEMBER);
};

/**
 *
 * @returns 清空 是否保存账号密码
 */
export const clearRemember = () => {
	localStorage.removeItem(REMEMBER);
};
