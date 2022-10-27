import React, { FC } from 'react';
import { Form, Select } from 'antd';
import type { FormItemCom } from '../type';

// Select
export const formSelect = (item: FormItemCom) => {
	return (
		<Select
			showSearch
			allowClear
			onChange={item.onChange}
			fieldNames={item.fieldNames}
			options={item.option}
			mode={item.mode}
			placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
			optionFilterProp={item.fieldNames?.label}
			filterOption={(input, option) =>
				option[item.fieldNames?.label ? item.fieldNames?.label : 'label'].toLowerCase().indexOf(input.toLowerCase()) >= 0
			}
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

// 远程搜索
export const formSeachSelect = (item: FormItemCom) => {
	return (
		<Select
			showSearch
			allowClear
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