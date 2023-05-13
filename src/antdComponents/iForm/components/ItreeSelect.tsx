/**
 * @file 树形下拉
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import { TreeSelect } from 'antd';
import type { ChangeEventExtra } from 'rc-tree-select/lib/TreeSelect';
import type { FormItemMap } from '../type';

export const formTreeSelect: FormItemMap['treeSelect'] = (item) => {
	return (
		<TreeSelect
			value={item.value}
			treeData={item.option}
			showCheckedStrategy={item.showCheckedStrategy}
			treeCheckable={item.checkbox}
			fieldNames={item.fieldNames}
			allowClear={item.allowClear !== false}
			onChange={item.onChange}
			placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
			disabled={item.disabled}
			style={{ width: '100%', ...item.style }}
		/>
	);
};

export type { ChangeEventExtra };
