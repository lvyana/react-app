/**
 * @file input
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { ChangeEventHandler, FC, ReactNode } from 'react';
import { Input, InputNumber } from 'antd';

export type InputType = {
	value?: string;
	label?: string;
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
	onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
	placeholder?: string;
	maxLength?: number;
	style?: React.CSSProperties;
};

type IinputProps = {
	item: InputType;
};

export type TextAreaType = {
	label?: string;
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
	maxLength?: number;
	placeholder?: string;
	style?: React.CSSProperties;
	children?: ReactNode;
	rows?: number;
};
type ItextAreaProps = {
	item: TextAreaType;
};

// inputNumber
export type InputNumberType = {
	label?: string;
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: number | string | null) => void) | undefined;
	placeholder?: string;
	value?: number | string | null;
	style?: React.CSSProperties;
	children?: ReactNode;
};

type InumberProps = {
	item: InputNumberType;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

// input
export const Iinput: FC<IinputProps> = ({ item }) => {
	return (
		// getValueFromEvent={(e) => e.target.value.replace(/(^\s*)|(\s*$)/g, '')}
		<Input
			value={item?.value}
			onChange={item.onChange}
			onBlur={item.onBlur}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			disabled={item.disabled}
			allowClear={item.allowClear !== false}
			style={{ width: '100%', ...item.style }}
		/>
	);
};

// 文本框
export const ItextArea: FC<ItextAreaProps> = ({ item }) => {
	return (
		<Input.TextArea
			showCount={!!item.maxLength}
			onChange={item.onChange}
			rows={item.rows}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			maxLength={item.maxLength}
			allowClear={item.allowClear !== false}
			disabled={item.disabled}
			style={{ width: '100%', ...item.style }}
		/>
	);
};

// 数字
export const Inumber: FC<InumberProps> = ({ item }) => {
	return (
		<InputNumber
			value={item?.value}
			min={0}
			onChange={item.onChange}
			disabled={item.disabled}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			style={{ ...item.style }}
		/>
	);
};
