import React, { FC } from 'react';
import { TreeSelect } from 'antd';
import type { FormItemCom } from '../type';

const { SHOW_PARENT } = TreeSelect;

// 树形下拉
export const formTreeSelect = (item: FormItemCom) => {
	return (
		<TreeSelect
			treeData={item.option}
			showCheckedStrategy={SHOW_PARENT}
			treeCheckable={item.checkbox}
			fieldNames={item.fieldNames}
			allowClear
			onChange={item.onChange}
			placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
			disabled={item.disabled}
			style={{ width: '100%', ...item.style }}
		/>
	);
};
