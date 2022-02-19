import { SIZE } from '../constant/layout';
type SizeType = 'small' | 'middle' | 'large' | undefined;
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
const layout = (state = initialState, action: { type: string; value: string }) => {
	let newState = JSON.parse(JSON.stringify(state));
	let { type, value } = action;
	switch (type) {
		case SIZE:
			newState.size = value;
			return newState;
		default:
			return newState;
	}
};
export default layout;
