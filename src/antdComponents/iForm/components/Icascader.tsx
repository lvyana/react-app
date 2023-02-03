/**
 * @file 联级
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import { Cascader } from 'antd';
import type { FormItemMap } from '../type';

export const formCascader: FormItemMap['cascader'] = (item) => {
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
