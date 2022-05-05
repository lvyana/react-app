// 头像
export const PHOTO = 'photo';
export interface reSetPhotoAction {
	type: 'photo';
	value: string;
}
export type setPhotoType = (value: string) => reSetPhotoAction;

// token
export const TOKEN = 'token';
export interface reSetTokenAction {
	type: 'token';
	value: string;
}
export type setTokenType = (value: string) => reSetTokenAction;

// 权限
export const PERMISS = 'permiss';
export interface reSetPermissAction {
	type: 'permiss';
	value: string[];
}
export type setPermissType = (value: string[]) => reSetPermissAction;

// 缓存
export const KEEP_ALIVE = 'keepAlive';
export interface reSetKeepAliveValue {
	path: string;
	data: any;
}
export interface reSetKeepAliveAction {
	type: 'keepAlive';
	value: reSetKeepAliveValue;
}
export type setKeepAliveType = (value: reSetKeepAliveValue) => reSetKeepAliveAction;

export type userActions = reSetPhotoAction | reSetTokenAction | reSetPermissAction | reSetKeepAliveAction;
