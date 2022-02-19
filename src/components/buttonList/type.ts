import { MouseEventHandler } from 'react';
/**
 *
 * 按钮集合
 */
export interface BUTTON {
	buttonList: BUTTONITEM[]; //按钮集合
	loadingName?: string; // 那个按钮需要加载直接传名字
	editBtn?: MouseEventHandler<HTMLElement>;
}

/**
 *
 * 按钮接口
 */
export interface BUTTONITEM {
	name: string;
	type: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
	disabled: boolean; // 开启禁用模式 true  否则 false
	edit?: (item: string) => void; // 编辑
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
