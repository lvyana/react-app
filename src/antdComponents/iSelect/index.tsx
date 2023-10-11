/**
 * @file 下拉
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { ReactNode } from 'react';
import { Select } from 'antd';
import { BaseOptionType, DefaultOptionType, LabeledValue } from 'antd/es/select';

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
	style?: React.CSSProperties;
	children?: ReactNode;
};

/**
 * @method select
 */
type IselectProps<T> = {
	item: SelectType<T>;
};

export type SeachSelectType<T> = {
	label?: string;
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

/**
 * @method 远程搜索
 */
type IseachSelectProps<T> = {
	item: SeachSelectType<T>;
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

export const Iselect = <T extends BaseOptionType>({ item }: IselectProps<T>) => {
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
			filterOption={(input, option) => {
				if (option) {
					return option[item.fieldNames?.label ? item.fieldNames?.label : 'label'].toLowerCase().indexOf(input.toLowerCase()) >= 0;
				} else {
					return false;
				}
			}}
			disabled={item.disabled}
			style={{ width: '100%', ...item.style }}
			// filterSort={(optionA, optionB) =>
			// 	optionA[item.fieldNames?.label ? item.fieldNames?.label : 'label']
			// 		.toLowerCase()
			// 		.localeCompare(optionB[item.fieldNames?.label ? item.fieldNames?.label : 'label'].toLowerCase())
			// }
		></Select>
	);
};

export const IseachSelect = <T extends DefaultOptionType>({ item }: IseachSelectProps<T>) => {
	return (
		<Select
			showSearch
			allowClear={item.allowClear !== false}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			defaultActiveFirstOption={false}
			showArrow={false}
			filterOption={false}
			onSearch={item.handleSearch}
			options={item.option}
			fieldNames={item.fieldNames}
			notFoundContent={null}
			disabled={item.disabled}
			style={{ width: '100%', ...item.style }}></Select>
	);
};
