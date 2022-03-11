import { SizeType } from 'antd/lib/config-provider/SizeContext';

// 组件大小
export const SIZE = 'size';

export interface reEditorSizeType {
	type: 'size';
	value: SizeType;
}
export type editorSizeType = (value: SizeType) => reEditorSizeType;

export type layoutActions = reEditorSizeType;

export type { SizeType };
