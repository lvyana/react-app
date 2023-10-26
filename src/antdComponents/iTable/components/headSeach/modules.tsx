import type { FormItemMapType } from '@/antdComponents/iForm';
import getTreeSelect from '@/antdComponents/iTreeSelect';

const tableHeadSeach = (type: FormItemMapType) => {
	if (type === 'treeSelect') {
		return getTreeSelect;
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
