/**
 * @name 左侧有哪些表单类型
 */
export type ItemTypesParams = 'input' | 'select' | 'textArea' | 'cascader' | 'button';
export interface ItemTypes {
	INPUT: ItemTypesParams;
	SELECT: ItemTypesParams;
	TEXTAREA: ItemTypesParams;
	CASCADER: ItemTypesParams;
	BUTTON: ItemTypesParams;
}
export const ITEM_TYPES: ItemTypes = {
	INPUT: 'input',
	SELECT: 'select',
	TEXTAREA: 'textArea',
	CASCADER: 'cascader',
	BUTTON: 'button'
};

/**
 * @name 左侧item类型
 */
export const FORM_ITEM = 'formItem';

/**
 * @name 中间生成表单中item
 */
export const GENERATE_FORM_ITEM = 'GenerateFormItem';

/**
 * @param value option value
 * @param label option label
 * @param id 唯一key
 */
export interface Options {
	value: string;
	label: string;
	id: string;
}
