import React, { FC } from 'react';
import { Input, InputNumber } from 'antd';
import { FormItemParam } from '../type';

// input
export const formInputItem = (item: FormItemParam) => {
	return (
		// getValueFromEvent={(e) => e.target.value.replace(/(^\s*)|(\s*$)/g, '')}
		<Input
			onChange={item.onChange}
			onBlur={item.onBlur}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			disabled={item.disabled}
			allowClear
		/>
	);
};

// 文本框
export const formInputTextArea = (item: FormItemParam) => {
	return (
		<Input.TextArea
			showCount={!!item.maxLength}
			onChange={item.onChange}
			placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
			maxLength={item.maxLength}
			allowClear
		/>
	);
};

// 数字
export const formInputNumber = (item: FormItemParam) => {
	return <InputNumber min={0} onChange={item.onChange} disabled={item.disabled} />;
};
