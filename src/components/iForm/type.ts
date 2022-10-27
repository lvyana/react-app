import React, { ReactNode } from 'react';
import { Rule } from 'rc-field-form/lib/interface';
import { LabelTooltipType } from 'antd/lib/form/FormItemLabel';
import type { Moment } from 'moment';

/**
 * FormItem 参数
 */
export interface FormItem {
	show?: boolean;
	type:
		| 'input'
		| 'select'
		| 'treeselect'
		| 'cascader'
		| 'datePicker'
		| 'rangePicker'
		| 'TimePicker'
		| 'timeRangePicker'
		| 'inputNumber'
		| 'switch'
		| 'button'
		| 'radio'
		| 'checkbox'
		| 'rate'
		| 'textArea'
		| 'seachSelect'
		| 'userDefined';
	span?: number;
	key: string | number;
	name: string;
	valuePropName?: string;
	label?: string;
	layout?: LAYOUT;
	labelAlign?: FormLabelAlign;
	tooltip?: LabelTooltipType;
	rules?: Rule[];
}

/**
 * FormItem内组件参数
 */
export interface FormItemCom {
	label?: FormItem['label'];
	validateTrigger?: string | string[];
	disabled?: boolean;
	onChange?: (e: any) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
	mode?: MODE;
	placeholder?: string;
	option?: any[];
	checkbox?: boolean;
	fieldNames?: fieldNamesType;
	maxLength?: number;
	style?: React.CSSProperties;
	disabledDate?: (currentDate: Moment) => boolean;
	handleSearch?: (value: string) => void;
	children?: ReactNode;
}

export interface FormItemParam extends FormItemCom, FormItem {}

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
