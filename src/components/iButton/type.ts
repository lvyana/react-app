import { ReactNode } from 'react';

/**
 *
 * 按钮集合
 */
export type BTeditBtn = (type: string, value: BUTTONITEM) => void; //点击事件

/**
 *
 * @param buttonList 按钮集合
 * @param loadingName 那个按钮需要加载直接传名字
 * @param editBtn 按钮事件
 */
export interface IbuttonProps {
	buttonList: BUTTONITEM[];
	loadingName?: string;
	editBtn?: BTeditBtn;
	style?: React.CSSProperties;
}

export type BTtype = 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;

/**
 * @param 按钮接口
 * @param name 名称
 * @param type 类型
 * @param disabled 开启禁用模式 true  否则 false
 * @param hasPermiss 权限
 */
export interface BUTTONITEM {
	name: string;
	type: string;
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
type setDisDataType = (data: BUTTONITEM[], btnList: string[], is: boolean) => BUTTONITEM[];

export const setDisData: setDisDataType = (data, btnList, is) => {
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
