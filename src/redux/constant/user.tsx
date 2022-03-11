// 头像
export const PHOTO = 'photo';
export interface reSetPhotoType {
	type: 'photo';
	value: string;
}
export type setPhotoType = (value: string) => reSetPhotoType;

// token
export const TOKEN = 'token';
export interface reSetTokenType {
	type: 'token';
	value: string;
}
export type setTokenType = (value: string) => reSetTokenType;

// 权限
export const PERMISS = 'permiss';
export interface reSetPermissType {
	type: 'permiss';
	value: string[];
}
export type setPermissType = (value: string[]) => reSetPermissType;

export type userActions = reSetPhotoType | reSetTokenType | reSetPermissType;
