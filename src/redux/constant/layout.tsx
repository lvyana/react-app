import { SizeType } from 'antd/lib/config-provider/SizeContext';

// 组件大小
export const SIZE = 'size';

export interface reEditorSizeTypeAction {
	type: 'size';
	value: SizeType;
}
export type editorSizeType = (value: SizeType) => reEditorSizeTypeAction;

export type layoutActions = reEditorSizeTypeAction;

export type { SizeType };
