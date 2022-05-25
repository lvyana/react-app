import { PHOTO, TOKEN, PERMISS, KEEP_ALIVE, reSetKeepAliveValue, userActions } from '../constant/user';
interface initialStateType {
	photo: string;
	token: string;
	permiss: string[];
	keepAlive: reSetKeepAliveValue[];
}
export let initialState: initialStateType = {
	photo: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	token: '',
	permiss: ['*:*:*'],
	keepAlive: []
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
		case KEEP_ALIVE:
			newState[KEEP_ALIVE] = value as reSetKeepAliveValue[];
			return newState;
		default:
			return newState;
	}
};

export default user;
