import { Rule } from 'rc-field-form/lib/interface';

/**
 *
 * 动态表单集合
 */

export interface FORMITEM {
	type: string; //类型
	name: string; //key
	label?: string; //表单名字
	rules?: Rule[] | undefined; //校验
	key: string | number; //key
	span?: number; //formitem 宽度
	layout?: LAYOUT; //样式
	onChange?: (e: any) => void; //change事件
	mode?: MODE; // 下拉多选
	placeholder?: string; //提示信息
	labelAlign?: FormLabelAlign; //label位置
	show?: boolean; //显示隐藏
	option?: any[] | undefined; //拉下..数据
	checkbox?: boolean; //下拉树多选
	fieldNames?: fieldNamesType; //修改option数据key
	maxLength?: number; //文本框字数
	style?: object; //按钮外边距 float:'right'
}

/**
 *
 * label
 */
type FormLabelAlign = 'left' | 'right';

export type MODE = 'multiple' | 'tags';
/**
 *
 * lable 和 value 宽度比例
 */
export interface LAYOUT {
	labelCol: Object;
	wrapperCol: Object;
}

/**
 *
 * 下拉类型
 */
interface fieldNamesType {
	label: string;
	value: string;
	children?: string;
}
/**
 *
 * data数据 nameList[]  is:boolean
 */
export const setIsForm = <T extends { name: string }>(data: T[], nameList: string[], is: boolean): T[] => {
	return data.map((item) => {
		if (nameList.indexOf(item.name) > -1) {
			return { ...item, show: is };
		} else {
			return { ...item, show: !is };
		}
	});
};
