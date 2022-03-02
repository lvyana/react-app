import { MouseEventHandler } from 'react';
/**
 *
 * 按钮集合
 */
export type BTeditBtn = (type: string, value: BUTTONITEM) => void; //点击事件

export interface IBUTTON {
	buttonList: BUTTONITEM[]; //按钮集合
	loadingName?: string; // 那个按钮需要加载直接传名字
	editBtn?: BTeditBtn;
}
/**
 *
 * 按钮接口
 */
export type BTtype = 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
export interface BUTTONITEM {
	name: string;
	type: BTtype;
	disabled?: boolean; // 开启禁用模式 true  否则 false
	hasPermiss?: string | undefined; //权限
}

/**
 *
 * 传入disabbled data数据  数组['删除','新增'] true禁用 false启用
 */
export const setDisData = (data: BUTTONITEM[], btnList: string[], is: boolean) => {
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
