import { PHOTO, TOKEN } from '../constant/user';

export const setPhoto = (value: string) => {
	return { type: PHOTO, value };
};

export const setToken = (value: string) => {
	return { type: TOKEN, value };
};
