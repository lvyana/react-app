import React, { ReactNode, ChangeEventHandler } from 'react';
import type { Rule } from 'rc-field-form/lib/interface';
import type { Dayjs } from 'dayjs';
import type { CheckboxOptionType, RadioChangeEvent } from 'antd';
import type { RangeValue } from './components/Idate';
import type { IformButton } from './components/Ibutton';
import type { formRadioOptionsParams } from './components/Iradio';
import type { ChangeEventExtra } from './components/ItreeSelect';
import type { BaseOptionType } from 'antd/es/cascader';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { DefaultOptionType } from 'antd/es/select';
import type { SwitchChangeEventHandler } from 'antd/es/switch';
import type { LabelTooltipType } from 'antd/es/form/FormItemLabel';
import type { UploadChangeParam, UploadFile } from 'antd/es/upload';

/**
 * @name 表单组件集合
 */
export interface FormItemMap {
	input: <T, E extends ChangeEventHandler<HTMLInputElement> | undefined>(item: FormItemCom<T, E>) => JSX.Element;
	select: <T extends DefaultOptionType, E extends ((value: string | number, option: T | T[]) => void) | undefined>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	treeselect: <
		T extends BaseOptionType | DefaultOptionType,
		E extends ((value: (string | number)[], labelList: ReactNode[], extra: ChangeEventExtra) => void) | undefined
	>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	cascader: <T extends BaseOptionType, E extends (value: unknown[], selectedOptions: BaseOptionType) => void>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	datePicker: <T, E extends ((value: Dayjs | null, dateString: string) => void) | undefined>(item: FormItemCom<T, E>) => JSX.Element;
	rangePicker: <T, E extends (dates: RangeValue<Dayjs>, dateStrings: [string, string]) => void | undefined>(
		item: FormItemCom<T, E>
	) => JSX.Element;
	timePicker: <T, E extends ((value: Dayjs | null, dateString: string) => void) | undefined>(item: FormItemCom<T, E>) => JSX.Element;
	timeRangePicker: <T, E extends ((values: RangeValue<Dayjs>, formatString: [string, string]) => void) | undefined>(
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
	slider: <T, E>(item: FormItemCom<T, E>) => JSX.Element;
	upload: <T, E extends ((info: UploadChangeParam<UploadFile<any>>) => void) | undefined>(item: FormItemCom<T, E>) => JSX.Element;
	userDefined: <T, E>(item: FormItemCom<T, E>) => ReactNode;
}
export type FormItemMapType = keyof FormItemMap;

/**
 * @name 表单item参数
 */
export interface FormItem {
	show?: boolean;
	type: FormItemMapType;
	span?: number;
	key: string | number;
	name: string;
	valuePropName?: string;
	label?: string;
	layout?: LayoutParams;
	labelAlign?: FormLabelAlign;
	tooltip?: LabelTooltipType;
	rules?: Rule[];
}

/**
 * FormItem内组件参数
 */
export interface FormItemCom<T, E> {
	name: string;
	label?: FormItem['label'];
	validateTrigger?: string | string[];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: E;
	onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
	mode?: Mode;
	placeholder?: string;
	option?: T[];
	checkbox?: boolean;
	fieldNames?: fieldNamesType;
	maxLength?: number;
	style?: React.CSSProperties;
	disabledDate?: (currentDate: Dayjs) => boolean;
	handleSearch?: (value: string) => void;
	children?: ReactNode;
	max?: number;
	min?: number;
	multiple?: boolean;
	action?: string;
}

export interface FormItemParam<T, E> extends FormItemCom<T, E>, FormItem {}

export type FormLabelAlign = 'left' | 'right';

export type Mode = 'multiple' | 'tags';

/**
 * @name 宽度比例
 * @param lable labelCol: { span: 6 },
 * @param value wrapperCol: { span: 18 }
 */
export interface LayoutParams {
	labelCol: object;
	wrapperCol: object;
}

/**
 * @name 下拉类型
 */
interface fieldNamesType {
	label: string;
	value: string;
	children?: string;
}

/**
 * @name 处理表单显示隐藏
 * @param data数据
 * @param nameList[]
 * @param is:boolean
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
