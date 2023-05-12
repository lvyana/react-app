import { CSSProperties, ReactElement, ReactNode } from 'react';

export type OnClickBtn<T> = (type: T, value: ButtonItemParams<T>) => void; //点击事件

export type BTtype = 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';

/**
 * @param 按钮接口
 * @param name 名称
 * @param type 类型
 * @param btType 按钮类型
 * @param disabled 开启禁用模式 true  否则 false
 * @param hasPermiss 权限标识
 * @param iconFont 图标
 */
export interface ButtonItemParams<T> {
	name: string;
	type: T;
	btType?: BTtype;
	disabled?: boolean;
	hasPermiss?: string;
	iconFont?: string | ReactElement;
	className?: string;
	style?: CSSProperties;
	span?: number;
	block?: boolean;
}

/**
 * @method 设置禁用、非禁用
 * @param data 数据
 * @param btnList 数组['删除','新增']
 * @param is 设置true禁用 false启用
 * @returns data数据
 */
export type SetDisDataType = <T>(data: ButtonItemParams<T>[], btnList: T[], is: boolean) => ButtonItemParams<T>[];

export const setDisData: SetDisDataType = (data, btnList, is) => {
	return data.map((item) => {
		if (btnList.indexOf(item.type) > -1) {
			return {
				...item,
				disabled: is
			};
		} else {
			return item;
		}
	});
};
