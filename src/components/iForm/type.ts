import React, { ReactNode } from 'react';
import { Rule } from 'rc-field-form/lib/interface';
import moment, { Moment } from 'moment';
import { LabelTooltipType } from 'antd/lib/form/FormItemLabel';

/**
 * 动态表单集合
 * type 类型
 * name key
 * label 表单名字
 * rules 校验
 * validateTrigger 校验类型
 * key 绑定唯一key
 * disabled 禁用
 * span formitem 宽度
 * layout 样式
 * onChange change事件
 * onBlur input 失焦事件
 * mode 下拉多选
 * placeholder 提示信息
 * labelAlign label位置
 * show 显示隐藏
 * option 拉下..数据
 * checkbox 下拉树多选
 * fieldNames 修改option数据key
 * maxLength 文本框字数限制
 * style 按钮样式
 * disabledDate 设置时间范围
 * children 自定义组件内容
 */

export interface FORMITEM {
	type: string;
	name: string;
	label?: string;
	tooltip?: LabelTooltipType;
	rules?: Rule[];
	validateTrigger?: string | string[];
	key: string | number;
	disabled?: boolean;
	span?: number;
	layout?: LAYOUT;
	onChange?: (e: any) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
	mode?: MODE;
	placeholder?: string;
	labelAlign?: FormLabelAlign;
	show?: boolean;
	option?: any[];
	checkbox?: boolean;
	fieldNames?: fieldNamesType;
	maxLength?: number;
	style?: object;
	disabledDate?: (currentDate: Moment) => boolean;
	children?: ReactNode;
	handleSearch?: (value: string) => void;
}

export type FormLabelAlign = 'left' | 'right';

export type MODE = 'multiple' | 'tags';

/**
 *
 * lable 和 value 宽度比例
 */
export interface LAYOUT {
	labelCol: object;
	wrapperCol: object;
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
