/**
 * @name 左侧有哪些表单类型
 */
export type ItemTypesParams = 'input' | 'select' | 'textarea' | 'cascader';
export interface ItemTypes {
	INPUT: ItemTypesParams;
	SELECT: ItemTypesParams;
	TEXTAREA: ItemTypesParams;
	CASCADER: ItemTypesParams;
}
export const ITEM_TYPES: ItemTypes = {
	INPUT: 'input',
	SELECT: 'select',
	TEXTAREA: 'textarea',
	CASCADER: 'cascader'
};

/**
 * @name 左侧item类型
 */
export const FORM_ITEM = 'formItem';
