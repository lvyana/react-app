import { MouseEventHandler } from 'react';
/**
 *
 * 按钮集合
 */
export type BTeditBtn = (type: string, value: BUTTONITEM) => void; //点击事件

/**
 *
 * buttonList 按钮集合
 * loadingName 那个按钮需要加载直接传名字
 * editBtn 按钮事件
 */
export interface IBUTTON {
	buttonList: BUTTONITEM[];
	loadingName?: string;
	editBtn?: BTeditBtn;
}
/**
 *
 * 按钮接口
 */
export type BTtype = 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;

/**
 * 每个按钮参数
 * name 名称
 * type 类型
 * disabled 开启禁用模式 true  否则 false
 * hasPermiss 权限
 */
export interface BUTTONITEM {
	name: string;
	type: string;
	btType: BTtype;
	disabled?: boolean;
	hasPermiss?: string;
}

/**
 *
 * data 数据
 * btnList 数组['删除','新增']
 * is 设置true禁用 false启用
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
