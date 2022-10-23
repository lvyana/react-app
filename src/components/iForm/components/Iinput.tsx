import React, { FC } from 'react';
import { Input, InputNumber } from 'antd';
import type { FormItemCom } from '../type';

// input
export const formInputItem = (item: FormItemCom) => {
	return (
		// getValueFromEvent={(e) => e.target.value.replace(/(^\s*)|(\s*$)/g, '')}
		<Input
			onChange={item.onChange}
			onBlur={item.onBlur}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			disabled={item.disabled}
			allowClear
			style={{ width: '100%', ...item.style }}
		/>
	);
};

// 文本框
export const formInputTextArea = (item: FormItemCom) => {
	return (
		<Input.TextArea
			showCount={!!item.maxLength}
			onChange={item.onChange}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			maxLength={item.maxLength}
			allowClear
			disabled={item.disabled}
			style={{ width: '100%', ...item.style }}
		/>
	);
};

// 数字
export const formInputNumber = (item: FormItemCom) => {
	return <InputNumber min={0} onChange={item.onChange} disabled={item.disabled} style={{ width: '100%', ...item.style }} />;
};
