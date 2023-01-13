/**
 * @name 表单组件集合
 */
import React, { ReactNode, ChangeEventHandler } from 'react';
import type { Rule } from 'rc-field-form/lib/interface';
import type { Dayjs } from 'dayjs';
import type { CheckboxOptionType, RadioChangeEvent } from 'antd';
import type { RangeValue } from './components/Ipicker';
import type { formRadioOptionsParams } from './components/Iradio';
import type { ChangeEventExtra } from './components/ItreeSelect';
import type { BaseOptionType } from 'antd/es/cascader';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { DefaultOptionType } from 'antd/es/select';
import type { SwitchChangeEventHandler } from 'antd/es/switch';
import type { LabelTooltipType } from 'antd/es/form/FormItemLabel';
import type { UploadChangeParam, UploadFile } from 'antd/es/upload';
import type { ButtonItemParams } from '../iButton';

// input
type InputType<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
	onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
	placeholder?: string;
	option?: T[];
	checkbox?: boolean;
	maxLength?: number;
	style?: React.CSSProperties;
};
export type FormInputType<T> = FormItem & InputType<T>;

// select
type SelectType<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: string | number, option: T | T[]) => void) | undefined;
	mode?: Mode;
	placeholder?: string;
	option?: T[];
	fieldNames?: fieldNamesType;
	style?: React.CSSProperties;
	handleSearch?: (value: string) => void;
	children?: ReactNode;
};
export type FormSelectType<T> = FormItem & SelectType<T>;

// treeselect
type TreeselectType<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: (string | number)[], labelList: ReactNode[], extra: ChangeEventExtra) => void) | undefined;
	placeholder?: string;
	option?: T[];
	checkbox?: boolean;
	fieldNames?: fieldNamesType;
	style?: React.CSSProperties;
	children?: ReactNode;
};
export type FormTreeselectType<T> = FormItem & TreeselectType<T>;

// cascader
type CascaderType<T> = {
	name: string;
	label?: FormItem['label'];
	validateTrigger?: string | string[];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: (value: unknown[], selectedOptions: BaseOptionType) => void;
	placeholder?: string;
	option?: T[];
	fieldNames?: fieldNamesType;
	style?: React.CSSProperties;
	children?: ReactNode;
};
export type FormCascaderType<T> = FormItem & CascaderType<T>;

// alonePicker 单个
export type AlonePicker<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: Dayjs | null, dateString: string) => void) | undefined;
	placeholder?: string;
	option?: T[];
	style?: React.CSSProperties;
	disabledDate?: (currentDate: Dayjs) => boolean;
	children?: ReactNode;
};
export type FormAlonePicker<T> = FormItem & AlonePicker<T>;

// bothPicker 双个
type BothPicker<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: (dates: RangeValue<Dayjs>, dateStrings: [string, string]) => void | undefined;
	placeholder?: string;
	option?: T[];
	style?: React.CSSProperties;
	disabledDate?: (currentDate: Dayjs) => boolean;
	children?: ReactNode;
};
export type FormBothPicker<T> = FormItem & BothPicker<T>;

// inputNumber
type InputNumberType<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: 0 | null) => void) | undefined;
	placeholder?: string;
	option?: T[];
	checkbox?: boolean;
	style?: React.CSSProperties;
	children?: ReactNode;
};
export type FormInputNumberType<T> = FormItem & InputNumberType<T>;

// switch
type SwitchType<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: SwitchChangeEventHandler | undefined;
	placeholder?: string;
	option?: T[];
	style?: React.CSSProperties;
	children?: ReactNode;
};
export type FormSwitchType<T> = FormItem & SwitchType<T>;

// button
type ButtonType<T> = {
	name: string;
	label?: FormItem['label'];
	option?: ButtonItemParams<T>[];
	style?: React.CSSProperties;
	children?: ReactNode;
	onFinish?: FinishType<T>;
};
export type FormButtonType<T> = FormItem & ButtonType<T>;

export type FinishType<T> = ((value: T) => void) | undefined;

// radio
type RadioType<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((e: RadioChangeEvent) => void) | undefined;
	option?: T[];
	style?: React.CSSProperties;
	children?: ReactNode;
	optionType?: 'default' | 'button';
};
export type FormRadioType<T> = FormItem & RadioType<T>;

// checkbox
type CheckboxType<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((checkedValue: CheckboxValueType[]) => void) | undefined;
	option?: T[];
	style?: React.CSSProperties;
	children?: ReactNode;
};
export type FormCheckboxType<T> = FormItem & CheckboxType<T>;

// rate
type RateType<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: number) => void) | undefined;
	placeholder?: string;
	option?: T[];
	style?: React.CSSProperties;
	children?: ReactNode;
};
export type FormRateType<T> = FormItem & RateType<T>;

// textArea
type TextAreaType<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
	maxLength?: number;
	placeholder?: string;
	option?: T[];
	style?: React.CSSProperties;
	children?: ReactNode;
	rows?: number;
};
export type FormTextAreaType<T> = FormItem & TextAreaType<T>;

// seachSelect
type SeachSelectType<T> = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	mode?: Mode;
	placeholder?: string;
	option?: T[];
	checkbox?: boolean;
	fieldNames?: fieldNamesType;
	style?: React.CSSProperties;
	handleSearch?: (value: string) => void;
	children?: ReactNode;
};

// slider
interface SliderRange {
	draggableTrack?: boolean;
}

type SliderType = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: [number, number]) => void) | undefined;
	range?: true | SliderRange;
	style?: React.CSSProperties;
	children?: ReactNode;
	max?: number;
	min?: number;
};

type SliderSingleType = {
	name: string;
	label?: FormItem['label'];
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: number) => void) | undefined;
	range?: false;
	style?: React.CSSProperties;
	children?: ReactNode;
	max?: number;
	min?: number;
};
export type FormSliderType = FormItem & (SliderType | SliderSingleType);

// upload
type UploadType = {
	name: string;
	label?: FormItem['label'];
	onChange?: ((info: UploadChangeParam<UploadFile<any>>) => void) | undefined;
	mode?: Mode;
	style?: React.CSSProperties;
	children?: ReactNode;
	multiple?: boolean;
	action?: string;
};
export type FormUploadType = FormItem & UploadType;

// userDefined
type UserDefinedType = {
	name: string;
	children?: ReactNode;
};
export type FormUserDefinedType = FormItem & UserDefinedType;

export interface FormItemMap {
	input: <T>(item: InputType<T>) => JSX.Element;
	select: <T extends DefaultOptionType>(item: SelectType<T>) => JSX.Element;
	treeselect: <T extends DefaultOptionType>(item: TreeselectType<T>) => JSX.Element;
	cascader: <T extends BaseOptionType>(item: CascaderType<T>) => JSX.Element;
	datePicker: <T>(item: AlonePicker<T>) => JSX.Element;
	rangePicker: <T>(item: BothPicker<T>) => JSX.Element;
	timePicker: <T>(item: AlonePicker<T>) => JSX.Element;
	timeRangePicker: <T>(item: BothPicker<T>) => JSX.Element;
	inputNumber: <T>(item: InputNumberType<T>) => JSX.Element;
	switch: <T>(item: SwitchType<T>) => JSX.Element;
	button: <T>(item: ButtonType<T>) => JSX.Element;
	radio: <T extends formRadioOptionsParams>(item: RadioType<T>) => JSX.Element;
	checkbox: <T extends CheckboxOptionType>(item: CheckboxType<T>) => JSX.Element;
	rate: <T extends string>(item: RateType<T>) => JSX.Element;
	textArea: <T>(item: TextAreaType<T>) => JSX.Element;
	seachSelect: <T extends DefaultOptionType>(item: SeachSelectType<T>) => JSX.Element;
	slider: (item: SliderType & SliderSingleType) => JSX.Element;
	upload: (item: UploadType) => JSX.Element;
	userDefined: (item: UserDefinedType) => ReactNode;
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
// export interface FormItemCom<T, E> {
// 	name: string;
// 	label?: FormItem['label'];
// 	validateTrigger?: string | string[];
// 	disabled?: boolean;
// 	allowClear?: boolean;
// 	onChange?: E;
// 	onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
// 	mode?: Mode;
// 	placeholder?: string;
// 	option?: T[];
// 	checkbox?: boolean;
// 	fieldNames?: fieldNamesType;
// 	maxLength?: number;
// 	style?: React.CSSProperties;
// 	disabledDate?: (currentDate: Dayjs) => boolean;
// 	handleSearch?: (value: string) => void;
// 	children?: ReactNode;
// 	max?: number;
// 	min?: number;
// 	multiple?: boolean;
// 	action?: string;
// 	range?: any;
// }

// export interface FormItemParam<T, E> extends FormItemCom<T, E>, FormItem {}

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
