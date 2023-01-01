import React, { FC } from 'react';
import { TreeSelect } from 'antd';
import type { ChangeEventExtra } from 'rc-tree-select/lib/TreeSelect';
import { FormItemMap } from '../type';

const { SHOW_PARENT } = TreeSelect;

// 树形下拉
export const formTreeSelect: FormItemMap['treeselect'] = (item) => {
	return (
		<TreeSelect
			treeData={item.option}
			showCheckedStrategy={SHOW_PARENT}
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
