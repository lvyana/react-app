/**
 * @file 下拉
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import { Form, Select } from 'antd';
import type { FormItemMap } from '../type';

/**
 * @method select
 */
export const formSelect: FormItemMap['select'] = (item) => {
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

/**
 * @method 远程搜索
 */
export const formSeachSelect: FormItemMap['seachSelect'] = (item) => {
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
