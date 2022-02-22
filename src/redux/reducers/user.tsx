import { PHOTO, TOKEN } from '../constant/user';
export let initialState = {
	photo: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	token: ''
};
const user = (state = initialState, action: { type: string; value: number }) => {
	let newState = JSON.parse(JSON.stringify(state));
	let { type, value } = action;
	switch (type) {
		case PHOTO:
			newState[PHOTO] = value;
			return newState;
		case TOKEN:
			newState[TOKEN] = value;
			console.log(newState);
			return newState;
		default:
			return newState;
	}
};

export default user;
