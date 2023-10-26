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
 * @param children 子级
 */
interface fieldNamesType {
	label: string;
	value: string;
	children?: string;
}

/**
 * 联级选择
 * @param label 输入框占位文本
 * @param disabled 禁用
 * @param allowClear 支持清除
 * @method onChange 选择完成后的回调
 * @param placeholder 输入框占位文本
 * @param option 可选项数据源
 * @param fieldNames 自定义 options 中 label value children 的字段
 * @param style 自定义样式
 */
export type CascaderType<T> = {
	label?: string;
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: (value: unknown[], selectedOptions: BaseOptionType) => void;
	placeholder?: string;
	option?: T[];
	fieldNames?: fieldNamesType;
	style?: React.CSSProperties;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getCascader = <T extends BaseOptionType>(item: CascaderType<T>) => {
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

export default getCascader;
