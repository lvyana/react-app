import { PROJECT_DATA, Iproject, IprojectItem } from '../constant/configureInterviewers';
import { projectList } from '@/views/configureInterviewers/service';
export const getProject: Iproject = (value) => {
	return { type: PROJECT_DATA, value };
};

export const getProjectApi = () => {
	return async (dispatch: (arg0: { type: string; value: IprojectItem[] }) => void) => {
		// setTimeout(() => {
		// 	// Yay! Can invoke sync or async actions with `dispatch`
		// 	dispatch(getProject(value));
		// }, 1000);

		let res = await projectList();
		let data = res.data.map((item: IprojectItem) => {
			return {
				id: item.id,
				projectName: item.projectName
			};
		});
		dispatch(getProject(data));
	};
};
