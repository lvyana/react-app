/**
 * @file 树形下拉
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { ReactNode } from 'react';
import { TreeSelect } from 'antd';
import type { ChangeEventExtra } from 'rc-tree-select/lib/TreeSelect';
import { BaseOptionType } from 'antd/es/select';

/**
 * 下拉类型
 * @param lable 名称
 * @param value 标识
 * @param children 子集
 */
interface fieldNamesType {
	label: string;
	value: string;
	children?: string;
}

const { SHOW_ALL, SHOW_PARENT, SHOW_CHILD } = TreeSelect;
type ShowCheckedStrategy = typeof SHOW_ALL | typeof SHOW_PARENT | typeof SHOW_CHILD;
// treeSelect
export type TreeselectType<T> = {
	value?: (string | number)[];
	label?: string;
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: (string | number)[], labelList: ReactNode[], extra: ChangeEventExtra) => void) | undefined;
	placeholder?: string;
	option?: T[];
	checkbox?: boolean;
	fieldNames?: fieldNamesType;
	style?: React.CSSProperties;
	children?: ReactNode;
	showCheckedStrategy?: ShowCheckedStrategy;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getTreeSelect = <T extends BaseOptionType>(item: TreeselectType<T>) => {
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
export default getTreeSelect;
