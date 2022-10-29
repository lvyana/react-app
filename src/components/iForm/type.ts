import React, { ReactNode, ChangeEventHandler } from 'react';
import { Rule } from 'rc-field-form/lib/interface';
import { LabelTooltipType } from 'antd/lib/form/FormItemLabel';
import type { Moment } from 'moment';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
import { CheckboxOptionType, RadioChangeEvent } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { SwitchChangeEventHandler } from 'antd/lib/switch';
import { RangeValue } from './components/Idate';
import { IformButton } from './components/ibutton';
import { formRadioOptionsParams } from './components/Iradio';
import { ChangeEventExtra } from './components/ItreeSelect';

export interface FormItemMap {
	input: <T, E extends ChangeEventHandler<HTMLInputElement> | undefined>(item: FormItemCom<T, E>) => JSX.Element;
	select: <T extends DefaultOptionType, E extends ((value: any, option: T | T[]) => void) | undefined>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	treeselect: <T extends DefaultOptionType, E extends ((value: any, labelList: ReactNode[], extra: ChangeEventExtra) => void) | undefined>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	cascader: <T extends BaseOptionType, E extends (value: unknown[], selectedOptions: BaseOptionType) => void>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	datePicker: <T, E extends ((value: moment.Moment | null, dateString: string) => void) | undefined>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	rangePicker: <T, E extends (dates: RangeValue<moment.Moment>, dateStrings: [string, string]) => void | undefined>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	TimePicker: <T, E extends ((value: moment.Moment | null, dateString: string) => void) | undefined>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	timeRangePicker: <T, E extends ((values: RangeValue<moment.Moment>, formatString: [string, string]) => void) | undefined>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	inputNumber: <T, E extends ((value: 0 | null) => void) | undefined>(item: FormItemCom<T, E>) => JSX.Element;
	switch: <T, E extends SwitchChangeEventHandler | undefined>(item: FormItemCom<T, E>) => JSX.Element;
	button: <T extends IformButton, E>(item: FormItemCom<T, E>, onFinish?: ((value: string) => void) | undefined) => JSX.Element;
	radio: <T extends formRadioOptionsParams, E extends ((e: RadioChangeEvent) => void) | undefined>(item: FormItemCom<T, E>) => JSX.Element;
	checkbox: <T extends CheckboxOptionType, E extends ((checkedValue: CheckboxValueType[]) => void) | undefined>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	rate: <T extends string, E extends ((value: number) => void) | undefined>(item: FormItemCom<T, E>) => JSX.Element;
	textArea: <T, E extends ChangeEventHandler<HTMLTextAreaElement> | undefined>(item: FormItemCom<T, E>) => JSX.Element;
	seachSelect: <T extends DefaultOptionType, E>(item: FormItemCom<T, E>) => JSX.Element;
	userDefined: <T, E>(item: FormItemCom<T, E>) => ReactNode;
}
export type FormItemMapType = keyof FormItemMap;

/**
 * FormItem 参数
 */
export interface FormItem {
	show?: boolean;
	type: FormItemMapType;
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
export interface FormItemCom<T, E> {
	label?: FormItem['label'];
	validateTrigger?: string | string[];
	disabled?: boolean;
	onChange?: E;
	onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
	mode?: MODE;
	placeholder?: string;
	option?: T[];
	checkbox?: boolean;
	fieldNames?: fieldNamesType;
	maxLength?: number;
	style?: React.CSSProperties;
	disabledDate?: (currentDate: Moment) => boolean;
	handleSearch?: (value: string) => void;
	children?: ReactNode;
}

export interface FormItemParam<T, E> extends FormItemCom<T, E>, FormItem {}

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
