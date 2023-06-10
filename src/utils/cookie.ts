/**
 *	@name cookie
 *	@user ly
 *  @data 日期：2020年4月27日
 */

const TOKEN = 'token';

/**
 * @method 存储token
 * @param val token
 */
export const setToken = (val: string): void => {
	document.cookie = `${TOKEN}=${val}; path=/`;
};

/**
 * @method 获取token
 */
export const getToken = (): string | null => {
	const cookies = document.cookie.split('; ');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].split('=');
		if (cookie[0] === TOKEN) {
			return cookie[1];
		}
	}
	return null;
};

/**
 * @method 清空token
 */
export const clearToken = () => {
	document.cookie = `${TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
