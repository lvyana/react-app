import { ButtonType } from 'antd/es/button';
import { CSSProperties, ReactElement } from 'react';

// 点击按钮事件
export type OnClickBtn<T> = (type: T, value: ButtonItemParams<T>) => void; //点击事件

/**
 * 按钮接口
 * @param name 名称
 * @param type 类型
 * @param btnType 按钮类型
 * @param disabled 开启禁用模式 true  否则 false
 * @param permission 权限标识
 * @param iconFont 图标
 * @param className 类名
 * @param style 样式
 * @param span col的比例
 * @param block 将按钮宽度调整为其父宽度的选项
 */
export interface ButtonItemParams<T> {
	name: string;
	type: T;
	btnType?: ButtonType;
	disabled?: boolean;
	permission?: string;
	iconFont?: string | ReactElement;
	className?: string;
	style?: CSSProperties;
	span?: number;
	block?: boolean;
}

/**
 * 设置禁用、非禁用
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
