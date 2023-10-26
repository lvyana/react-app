/**
 * @file input
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { ChangeEventHandler, FC, ReactNode } from 'react';
import { Input, InputNumber } from 'antd';

/**
 * 输入框
 * @param value 内容
 * @param label 占位文本
 * @param disabled 是否禁用状态
 * @param allowClear 自定义清除按钮
 * @method onChange 输入框内容变化时的回调
 * @method onBlur 输入框数去焦点时的回调
 * @param maxLength 最大长度
 * @param style 样式
 */
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

export interface AutoSizeType {
	minRows?: number;
	maxRows?: number;
}

/**
 * 文本框
 * @param label 占位文本
 * @param disabled 是否禁用状态
 * @param allowClear 自定义清除按钮
 * @method onChange 内容变化时的回调
 * @param maxLength 最大长度
 * @param placeholder 占位文本
 * @param style 样式
 * @param autoSize 自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }
 */
export type TextAreaType = {
	label?: string;
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
	maxLength?: number;
	placeholder?: string;
	style?: React.CSSProperties;
	autoSize?: boolean | AutoSizeType;
};

/**
 * 数字输入框
 * @param label 占位文本
 * @param disabled 是否禁用状态
 * @param allowClear 自定义清除按钮
 * @method onChange 变化回调
 * @param placeholder 占位文本
 * @param value 当前值
 * @param style 样式
 * @param min 最小值
 * @param max 最大值
 */
export type InputNumberType = {
	label?: string;
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: number | string | null) => void) | undefined;
	placeholder?: string;
	value?: number | string | null;
	style?: React.CSSProperties;
	min?: number;
	max?: number;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export const getInput = (item: InputType) => {
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
export const getTextArea = (item: TextAreaType) => {
	return (
		<Input.TextArea
			showCount={!!item.maxLength}
			onChange={item.onChange}
			autoSize={item.autoSize}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			maxLength={item.maxLength}
			allowClear={item.allowClear !== false}
			disabled={item.disabled}
			style={{ width: '100%', ...item.style }}
		/>
	);
};

// 数字
export const getNumber = (item: InputNumberType) => {
	return (
		<InputNumber
			value={item?.value}
			min={item.min}
			max={item.max}
			onChange={item.onChange}
			disabled={item.disabled}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			style={{ ...item.style }}
		/>
	);
};
