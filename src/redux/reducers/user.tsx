import { PHOTO } from '../constant/user';
let initialState = {
	photo: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
};
const user = (state = initialState, action: { type: string; value: number }) => {
	let newState = JSON.parse(JSON.stringify(state));
	let { type, value } = action;
	switch (type) {
		case PHOTO:
			newState[PHOTO] = value;
			return newState;
		default:
			return newState;
	}
};

export default user;
