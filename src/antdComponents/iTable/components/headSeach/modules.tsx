import { treeSelect } from './TableSeach';
import type { FormItemMapType } from '@/antdComponents/iForm';

const tableHeadSeach = (type: FormItemMapType) => {
	if (type === 'treeSelect') {
		return treeSelect;
	}

	return () => {
		const defaultUi = () => {
			return <>出错啦</>;
		};
		return defaultUi();
	};
};

export type { FormItemMapType };
export default tableHeadSeach;
