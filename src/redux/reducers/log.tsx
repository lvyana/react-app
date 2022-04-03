import { VERY_ONE, logValue, setLogActions } from '../constant/log';

interface initialStateType {
	evryOne: logValue[];
}
let initialState: initialStateType = {
	evryOne: []
};
const log = (state = initialState, action: setLogActions) => {
	let newState: initialStateType = JSON.parse(JSON.stringify(state));
	let { type, value } = action;
	switch (type) {
		case VERY_ONE:
			newState[VERY_ONE] = value;
			return newState;
		default:
			return newState;
	}
};
export default log;
