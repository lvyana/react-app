import React, { FC } from 'react';
import { Cascader } from 'antd';
import type { FormItemCom } from '../type';

// 联级
export const formCascader = (item: FormItemCom) => {
	return (
		<Cascader
			fieldNames={item.fieldNames}
			options={item.option}
			allowClear
			onChange={item.onChange}
			placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
			disabled={item.disabled}
			style={{ ...item.style }}
		/>
	);
};
