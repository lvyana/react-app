import { PHOTO, TOKEN, PERMISS, FORM_KEEP_ALIVE, reSetFormKeepAliveValue, userActions } from '../constant/user';
interface initialStateType {
	photo: string;
	token: string;
	permiss: string[];
	formKeepAlive: reSetFormKeepAliveValue;
}
export let initialState: initialStateType = {
	photo: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	token: '',
	permiss: ['*:*:*'],
	formKeepAlive: { path: '', data: {} }
};
const user = (state = initialState, action: userActions) => {
	let newState: initialStateType = JSON.parse(JSON.stringify(state));
	let { type, value } = action;
	switch (type) {
		case PHOTO:
			newState[PHOTO] = value as string;
			return newState;
		case TOKEN:
			newState[TOKEN] = value as string;
			return newState;
		case PERMISS:
			newState[PERMISS] = value as string[];
			return newState;
		case FORM_KEEP_ALIVE:
			newState[FORM_KEEP_ALIVE] = value as reSetFormKeepAliveValue;
			return newState;
		default:
			return newState;
	}
};

export default user;
