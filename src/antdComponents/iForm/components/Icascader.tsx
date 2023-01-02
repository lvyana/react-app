import React, { FC } from 'react';
import { Cascader } from 'antd';
import type { FormItemMap } from '../type';

// 联级
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
