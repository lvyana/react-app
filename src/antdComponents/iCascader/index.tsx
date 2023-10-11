/**
 * @file 联级
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { ReactNode } from 'react';
import { Cascader } from 'antd';
import { BaseOptionType } from 'antd/es/select';

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

export type CascaderType<T> = {
	label?: string;
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

type IcascaderProps<T> = {
	item: CascaderType<T>;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Icascader = <T extends BaseOptionType>({ item }: IcascaderProps<T>) => {
	return (
		<Cascader
			fieldNames={item.fieldNames}
			options={item.option}
			allowClear={item.allowClear !== false}
			onChange={item.onChange}
			placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
			disabled={item.disabled}
			style={{ ...item.style }}
		/>
	);
};

export default Icascader;
