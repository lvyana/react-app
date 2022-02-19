/**
 *
 * 存储token
 */

const TOKEN = 'token';
export const setToken = (val: string): void => {
	sessionStorage.setItem(TOKEN, JSON.stringify(val));
};
export const getToken = (): string | null => {
	return sessionStorage.getItem(TOKEN);
};
