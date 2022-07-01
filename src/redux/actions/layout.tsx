import { SIZE, editorSizeType } from '../constant/layout';

/**
 * 编辑组件大小
 */
export const editorSize: editorSizeType = (value) => {
	return { type: SIZE, value };
};
