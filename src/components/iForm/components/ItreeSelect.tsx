import React, { FC } from 'react';
import { TreeSelect } from 'antd';
import { FormItemParam } from '../type';

const { SHOW_PARENT } = TreeSelect;

// 树形下拉
export const formTreeSelect = (item: FormItemParam) => {
	return (
		<TreeSelect
			treeData={item.option}
			showCheckedStrategy={SHOW_PARENT}
			treeCheckable={item.checkbox}
			fieldNames={item.fieldNames}
			allowClear
			onChange={item.onChange}
			placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
		/>
	);
};
