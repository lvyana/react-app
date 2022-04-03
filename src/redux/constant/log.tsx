export const VERY_ONE = 'evryOne';
export interface logValue {
	time: string;
	text: string;
}
export interface setLogActions {
	type: 'evryOne';
	value: logValue[];
}
export type setLogType = (value: logValue[]) => setLogActions;

export type logActions = setLogActions;
