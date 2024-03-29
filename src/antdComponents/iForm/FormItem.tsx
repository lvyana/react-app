/**
 * @file FormItem
 * @author ly
 * @createDate 2023年10月25日
 */
import React, { FC } from 'react';
import { Form } from 'antd';
import FORM_ITEM_MAP from './components/formItemMap';
import type { ButtonType, FormItemParams, SlotType } from './type';
import type { RadioOptionType, RadioType } from '../iRadio';
import type { CheckboxOptionType } from 'antd/lib/checkbox/Group';
import type { DefaultOptionType } from 'antd/es/select';
import type { BaseOptionType } from 'antd/es/cascader';
import type { UploadFile } from 'antd/lib/upload/interface';
import type { InputNumberType, InputType, TextAreaType } from '../iInput';
import type { SelectType } from '../iSelect';
import type { TreeselectType } from '../iTreeSelect';
import type { CascaderType } from '../iCascader';
import type { AlonePicker, BothPicker } from '../iPicker';
import type { SwitchType } from '../iSwitch';
import type { CheckboxType } from '../iCheckbox';
import type { RateType } from '../iRate';
import type { SliderType } from '../iSlider';
import type { UploadType } from '../iUpload';

export type FormItemProps = {
	item: FormItemParams<object>;
};

/**
 * React Ant Design Upload 组件在Form中使用的警告,如何排除:
 * 警告信息 Warning: [antd: Upload] value is not a valid prop, do you mean fileList?
 *
 * 解决方法:
 * 当您在Form.Item中使用Upload时,可能遇到此类警告,解决该问题只需要在Form.Item组件的属性列表中添加如下两个属性即可:
 * valuePropName="fileList"
 * getValueFromEvent={normFile}
 */

const normFile = (e: { fileList: UploadFile[] }) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e?.fileList;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

// 通过type处理不同formItem
const FormItem: FC<FormItemProps> = ({ item }) => {
	if (item.type === 'input') {
		return (
			<Form.Item
				name={item.name}
				valuePropName={item.valuePropName}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}
				getValueFromEvent={(e) => e.target.value.replace(/(^\s*)|(\s*$)/g, '')}>
				{getFormItemCom(item)}
			</Form.Item>
		);
	}

	if (item.type === 'upload') {
		return (
			<Form.Item
				name={item.name}
				valuePropName={'fileList'}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}
				getValueFromEvent={normFile}>
				{getFormItemCom(item)}
			</Form.Item>
		);
	}

	return (
		<Form.Item
			name={item.name}
			valuePropName={item.valuePropName}
			label={item.label}
			tooltip={item.tooltip}
			rules={item.rules}
			{...item.layout}
			labelAlign={item.labelAlign}>
			{getFormItemCom(item)}
		</Form.Item>
	);
};

// 获取对应的formItem 子组件
const getFormItemCom = (item: FormItemParams<object>) => {
	const comConfig = { ...item.comConfig, label: item.label };

	if (item.type === 'input') {
		return FORM_ITEM_MAP[item.type](comConfig as InputType);
	}

	if (item.type === 'select') {
		return FORM_ITEM_MAP[item.type](comConfig as SelectType<DefaultOptionType>);
	}

	if (item.type === 'treeSelect') {
		return FORM_ITEM_MAP[item.type](comConfig as TreeselectType<DefaultOptionType>);
	}

	if (item.type === 'cascader') {
		return FORM_ITEM_MAP[item.type](comConfig as CascaderType<BaseOptionType>);
	}

	if (item.type === 'datePicker') {
		return FORM_ITEM_MAP[item.type](comConfig as AlonePicker);
	}

	if (item.type === 'rangePicker') {
		return FORM_ITEM_MAP[item.type](comConfig as BothPicker);
	}

	if (item.type === 'timePicker') {
		return FORM_ITEM_MAP[item.type](comConfig as AlonePicker);
	}

	if (item.type === 'timeRangePicker') {
		return FORM_ITEM_MAP[item.type](comConfig as BothPicker);
	}

	if (item.type === 'inputNumber') {
		return FORM_ITEM_MAP[item.type](comConfig as InputNumberType);
	}

	if (item.type === 'switch') {
		return FORM_ITEM_MAP[item.type](comConfig as SwitchType);
	}

	if (item.type === 'button') {
		return FORM_ITEM_MAP[item.type](comConfig as unknown as ButtonType<unknown>);
	}

	if (item.type === 'radio') {
		return FORM_ITEM_MAP[item.type](comConfig as RadioType<RadioOptionType>);
	}

	if (item.type === 'checkbox') {
		return FORM_ITEM_MAP[item.type](comConfig as CheckboxType<CheckboxOptionType>);
	}

	if (item.type === 'rate') {
		return FORM_ITEM_MAP[item.type](comConfig as RateType<string>);
	}

	if (item.type === 'textArea') {
		return FORM_ITEM_MAP[item.type](comConfig as TextAreaType);
	}

	if (item.type === 'slider') {
		return FORM_ITEM_MAP[item.type](comConfig as SliderType);
	}

	if (item.type === 'upload') {
		return FORM_ITEM_MAP[item.type](comConfig as unknown as UploadType);
	}

	if (item.type === 'slot') {
		return FORM_ITEM_MAP[item.type](comConfig as SlotType);
	}
};

export default FormItem;
