/**
 * @file localStorage
 * @author ly
 * @createData 2020年4月27日
 */

const USER_NAME = 'userName';

/**
 * @method 存储用户账号
 * @param val 用户账号
 */
export const setUserName = (val: string): void => {
	localStorage.setItem(USER_NAME, val);
};

/**
 * @method 获取用户账号
 */
export const getUserName = (): string | null => {
	return localStorage.getItem(USER_NAME);
};

/**
 * @method 清空用户账号
 */
export const clearUserName = () => {
	localStorage.removeItem(USER_NAME);
};

const PASSWORD = 'password';

/**
 * @method 存储用户密码
 * @param val 密码
 */
export const setPassword = (val: string): void => {
	localStorage.setItem(PASSWORD, val);
};

/**
 * @method 获取用户密码
 */
export const getPassword = (): string | null => {
	return localStorage.getItem(PASSWORD);
};

/**
 * @method 清空用户密码
 */
export const clearPassword = () => {
	localStorage.removeItem(PASSWORD);
};

const REMEMBER = 'remember';

/**
 * @method 存储 是否保存账号密码
 * @param val 是否保存账号密码
 */
export const setRemember = (val: string): void => {
	localStorage.setItem(REMEMBER, val);
};

/**
 * @method 获取 是否保存账号密码
 */
export const getRemember = (): string | null => {
	return localStorage.getItem(REMEMBER);
};

/**
 * @method 清空 是否保存账号密码
 */
export const clearRemember = () => {
	localStorage.removeItem(REMEMBER);
};

/**
 * @method 版本更新
 * @param val 是否第一次
 */
export const setIsItour = (val: '0' | '1') => {
	localStorage.setItem('Itour', val);
};

/**
 * @method 版本更新
 */
export const getIsItour = () => {
	return localStorage.getItem('Itour');
};

/**
 * @method 版本更新
 */
export const clearIsItour = () => {
	localStorage.removeItem('Itour');
};
