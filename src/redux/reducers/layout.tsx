import { SIZE, SizeType, layoutActions } from '../constant/layout';

/**
 * @param size 组件尺寸类型
 */
interface initialStateParams {
	size: SizeType;
}
let initialState: initialStateParams = {
	size: 'middle'
};

const layout = (state = initialState, action: layoutActions) => {
	let newState: initialStateParams = JSON.parse(JSON.stringify(state));
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
