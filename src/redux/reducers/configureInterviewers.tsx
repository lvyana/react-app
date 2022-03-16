import { PROJECT_DATA, projectAction, IprojectItem } from '../constant/configureInterviewers';

interface initialStateType {
	projectData: IprojectItem[];
}
let initialState: initialStateType = {
	projectData: []
};
const configureInterviewers = (state = initialState, action: projectAction) => {
	let newState: initialStateType = JSON.parse(JSON.stringify(state));
	let { type, value } = action;
	switch (type) {
		case PROJECT_DATA:
			newState[PROJECT_DATA] = value;
			return newState;
		default:
			return newState;
	}
};
export default configureInterviewers;
