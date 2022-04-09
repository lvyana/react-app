export const PROJECT_DATA = 'projectData';

export interface IprojectItem {
	id: number;
	projectName: string;
}
export interface projectAction {
	type: 'projectData';
	value: IprojectItem[];
}
export type Iproject = (value: IprojectItem[]) => projectAction;
