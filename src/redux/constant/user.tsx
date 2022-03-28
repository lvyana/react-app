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
export const FORM_KEEP_ALIVE = 'formKeepAlive';
export interface reSetFormKeepAliveValue {
	path: string;
	data: any;
}
export interface reSetFormKeepAliveAction {
	type: 'formKeepAlive';
	value: reSetFormKeepAliveValue;
}
export type setFormKeepAlive = (value: reSetFormKeepAliveValue) => reSetFormKeepAliveAction;

export type userActions = reSetPhotoAction | reSetTokenAction | reSetPermissAction | reSetFormKeepAliveAction;
