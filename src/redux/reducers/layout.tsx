import { SIZE, SizeType, layoutActions } from '../constant/layout';

export interface TabPaneListType {
	path: string;
	key: string;
	closable: boolean;
}
interface initialStateType {
	size: SizeType;
}
let initialState: initialStateType = {
	size: 'middle'
};
const layout = (state = initialState, action: layoutActions) => {
	let newState: initialStateType = JSON.parse(JSON.stringify(state));
	let { type, value } = action;
	switch (type) {
		case SIZE:
			newState[SIZE] = value;
			return newState;
		default:
			return newState;
	}
};
export default layout;
