/**
 * @file 选择器
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { ReactNode } from 'react';
import { Select } from 'antd';
import { BaseOptionType, LabeledValue } from 'antd/es/select';

/**
 * 选择器props
 * @param value 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新）
 * @param label 选择框默认文本
 * @param disabled 是否禁用
 * @param allowClear 自定义清除按钮
 * @param mode 设置 Select 的模式为多选或标签
 * @param placeholder 选择框默认文本
 * @param option 数据化配置选项内容
 * @param fieldNames 自定义节点 label、value、options、groupLabel 的字段
 * @param filterOption 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false
 * @param style 样式
 * @method onChange 选中 option，或 input 的 value 变化时，调用此函数
 */
export type SelectType<T> = {
	value?: SelectValueType;
	label?: string;
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: SelectValueType, option: T | T[]) => void) | undefined;
	mode?: Mode;
	placeholder?: string;
	option?: T[];
	fieldNames?: fieldNamesType;
	filterOption?: boolean | FilterOptionType;
	style?: React.CSSProperties;
};

type Mode = 'multiple' | 'tags';
export type SelectValueType = string | string[] | number | number[] | LabeledValue | LabeledValue[];

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

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export const getSelect = <T extends BaseOptionType>(item: SelectType<T>) => {
	return (
		<Select
			value={item?.value}
			showSearch
			allowClear={item.allowClear !== false}
			onChange={item.onChange}
			fieldNames={item.fieldNames}
			options={item.option}
			mode={item.mode}
			placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
			optionFilterProp={item.fieldNames?.label}
			filterOption={item.filterOption}
			disabled={item.disabled}
			style={{ width: '100%', ...item.style }}></Select>
	);
};

type FilterOptionType = <T extends BaseOptionType>(input: string, option?: T) => boolean;
type GetFilterOptionType = <T extends BaseOptionType>(item: SelectType<T>) => FilterOptionType;
const getFilterOption: GetFilterOptionType = (item) => {
	return (input, option) => {
		if (option) {
			return option[item.fieldNames?.label ? item.fieldNames?.label : 'label'].toLowerCase().indexOf(input.toLowerCase()) >= 0;
		} else {
			return false;
		}
	};
};
