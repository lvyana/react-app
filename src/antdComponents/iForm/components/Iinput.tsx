import React, { FC } from 'react';
import { Input, InputNumber } from 'antd';
import { FormItemMap } from '../type';

// input
export const formInputItem: FormItemMap['input'] = (item) => {
	return (
		// getValueFromEvent={(e) => e.target.value.replace(/(^\s*)|(\s*$)/g, '')}
		<Input
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
export const formInputTextArea: FormItemMap['textArea'] = (item) => {
	return (
		<Input.TextArea
			showCount={!!item.maxLength}
			onChange={item.onChange}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			maxLength={item.maxLength}
			allowClear={item.allowClear !== false}
			disabled={item.disabled}
			style={{ width: '100%', ...item.style }}
		/>
	);
};

// 数字
export const formInputNumber: FormItemMap['inputNumber'] = (item) => {
	return <InputNumber min={0} onChange={item.onChange} disabled={item.disabled} style={{ ...item.style }} />;
};
