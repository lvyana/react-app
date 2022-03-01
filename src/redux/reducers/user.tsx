import { PHOTO, TOKEN, PERMISS } from '../constant/user';
export let initialState = {
	photo: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	token: '',
	permiss: ['*:*:*']
};
const user = (state = initialState, action: { type: string; value: any }) => {
	let newState = JSON.parse(JSON.stringify(state));
	let { type, value } = action;
	switch (type) {
		case PHOTO:
			newState[PHOTO] = value;
			return newState;
		case TOKEN:
			newState[TOKEN] = value;
			return newState;
		case PERMISS:
			newState[PERMISS] = value;
			return newState;
		default:
			return newState;
	}
};

export default user;
