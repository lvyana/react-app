import { SizeType } from 'antd/lib/config-provider/SizeContext';

import { SIZE } from '../constant/layout';
export const editorSize = (value: SizeType) => {
	return { type: SIZE, value };
};
