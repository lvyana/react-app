import { SizeType } from 'antd/lib/config-provider/SizeContext';

/**
 * @const 组件大小
 */
export const SIZE = 'size';

/**
 * Action 返回类型
 * @param type 类型
 * @param value 尺寸类型
 */
export interface reEditorSizeTypeAction {
	type: 'size';
	value: SizeType;
}

/**
 * @param value 尺寸类型
 * @return reEditorSizeTypeAction
 */
export type editorSizeType = (value: SizeType) => reEditorSizeTypeAction;

export type layoutActions = reEditorSizeTypeAction;

export type { SizeType };
