import { ReactNode } from 'react';

export type OnClickBtn<T> = (type: T, value: ButtonItemParams<T>) => void; //点击事件

export type BTtype = 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';

/**
 * @param 按钮接口
 * @param name 名称
 * @param type 类型
 * @param disabled 开启禁用模式 true  否则 false
 * @param hasPermiss 权限
 */
export interface ButtonItemParams<T> {
	name: string;
	type: T;
	btType?: BTtype;
	disabled?: boolean;
	hasPermiss?: string;
	iconFont?: ReactNode;
}

/**
 * @param data 数据
 * @param btnList 数组['删除','新增']
 * @param is 设置true禁用 false启用
 */
export type SetDisDataType = <T>(data: ButtonItemParams<T>[], btnList: string[], is: boolean) => ButtonItemParams<T>[];

export const setDisData: SetDisDataType = (data, btnList, is) => {
	return data.map((item) => {
		if (btnList.indexOf(item.name) > -1) {
			return {
				...item,
				disabled: is
			};
		} else {
			return item;
		}
	});
};
