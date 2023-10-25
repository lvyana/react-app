/**
 * @file 表单组件type
 * @author ly
 * @createDate 2023年12月27日
 */
import React, { ReactNode } from 'react';
import type { Rule } from 'rc-field-form/lib/interface';
import type { CheckboxOptionType, RadioChangeEvent } from 'antd';
import type { AlonePicker, BothPicker, RangeValue } from '../iPicker';
import type { RadioOptionsParam, RadioType } from '../iRadio';
import type { TreeselectType } from '../iTreeSelect';
import type { BaseOptionType } from 'antd/es/cascader';
import type { DefaultOptionType } from 'antd/es/select';
import type { LabelTooltipType } from 'antd/es/form/FormItemLabel';
import { InputNumberType, InputType, TextAreaType } from '../iInput';
import { SeachSelectType, SelectType } from '../iSelect';
import { CascaderType } from '../iCascader';
import { SwitchType } from '../iSwitch';
import { IbuttonListProps } from '../iButton/List';
import { CheckboxType } from '../iCheckbox';
import { RateType } from '../iRate';
import { SliderType } from '../iSlider';
import { UploadType } from '../iUpload';

// input
export type FormInputType = FormItemParams<InputType>;

// select
export type FormSelectType<T> = FormItemParams<SelectType<T>>;

// treeSelect
export type FormTreeselectType<T> = FormItemParams<TreeselectType<T>>;

// cascader
export type FormCascaderType<T> = FormItemParams<CascaderType<T>>;

// alonePicker 单个
export type FormAlonePicker = FormItemParams<AlonePicker>;

// bothPicker 双个
export type FormBothPicker = FormItemParams<BothPicker>;

// inputNumber
export type FormInputNumberType = FormItemParams<InputNumberType>;

// switch
export type FormSwitchType = FormItemParams<SwitchType>;

// button
export interface ButtonType<T> extends IbuttonListProps<T> {
	style?: React.CSSProperties;
	children?: ReactNode;
}
export type FormButtonType<T> = FormItemParams<ButtonType<T>>;

// radio
export type FormRadioType<T extends RadioOptionsParam> = FormItemParams<RadioType<T>>;

// checkbox
export type FormCheckboxType<T> = FormItemParams<CheckboxType<T>>;

// rate
export type FormRateType<T> = FormItemParams<RateType<T>>;

// textArea
export type FormTextAreaType = FormItemParams<TextAreaType>;

// seachSelect
export type FormSeachSelectType<T> = FormItemParams<SeachSelectType<T>>;

// slider
export type FormSliderType = FormItemParams<SliderType>;

// upload
export type FormUploadType = FormItemParams<UploadType>;

// userDefined
export type SlotType = {
	children?: ReactNode;
};

export type FormSlotType = FormItemParams<SlotType>;

export interface FormItemMap {
	input: (item: InputType) => JSX.Element;
	select: <T extends BaseOptionType>(item: SelectType<T>) => JSX.Element;
	treeSelect: <T extends BaseOptionType>(item: TreeselectType<T>) => JSX.Element;
	cascader: <T extends BaseOptionType>(item: CascaderType<T>) => JSX.Element;
	datePicker: (item: AlonePicker) => JSX.Element;
	rangePicker: (item: BothPicker) => JSX.Element;
	timePicker: (item: AlonePicker) => JSX.Element;
	timeRangePicker: (item: BothPicker) => JSX.Element;
	inputNumber: (item: InputNumberType) => JSX.Element;
	switch: (item: SwitchType) => JSX.Element;
	button: <T>(item: ButtonType<T>) => JSX.Element;
	radio: <T extends RadioOptionsParam>(item: RadioType<T>) => JSX.Element;
	checkbox: <T extends CheckboxOptionType>(item: CheckboxType<T>) => JSX.Element;
	rate: <T extends string>(item: RateType<T>) => JSX.Element;
	textArea: (item: TextAreaType) => JSX.Element;
	seachSelect: <T extends DefaultOptionType>(item: SeachSelectType<T>) => JSX.Element;
	slider: (item: SliderType) => JSX.Element;
	upload: (item: UploadType) => JSX.Element;
	slot: (item: SlotType) => ReactNode;
}
export type FormItemMapType = keyof FormItemMap;

/**
 * 表单item参数
 * @param show 是否显示
 * @param type 表单类型
 * @param span 宽度
 * @param key 唯一标识
 * @param name 表单标识
 * @param valuePropName 子节点的值的属性，如 Switch 的是 'checked'。该属性为 getValueProps 的封装，自定义 getValueProps 后会失效
 * @param label 表单名字
 * @param layout 表单布局
 * @param labelAlign 标签文本对齐方式
 * @param tooltip 配置提示信息
 * @param rules 校验规则
 * @param comConfig 表单子组件参数
 */
export interface FormItemParams<T> {
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
	comConfig?: T;
}

export type FormLabelAlign = 'left' | 'right';

export type Mode = 'multiple' | 'tags';

/**
 * 宽度比例
 * @param lable labelCol: { span: 6 },
 * @param value wrapperCol: { span: 18 }
 */
export interface LayoutParams {
	labelCol: object;
	wrapperCol: object;
}

/**
 * 下拉类型
 * @param lable 名称
 * @param value 标识
 * @param children 子集
 */
interface fieldNamesType {
	label: string;
	value: string;
	children?: string;
}

/**
 * @method 处理表单显示隐藏
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
