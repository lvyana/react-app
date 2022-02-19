import { PHOTO } from '../constant/user';

export const setPhoto = (value: string) => {
	return { type: PHOTO, value };
};
