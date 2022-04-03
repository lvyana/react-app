import { VERY_ONE, setLogType } from '../constant/log';

export const setLog: setLogType = (value) => {
	return { type: VERY_ONE, value };
};
