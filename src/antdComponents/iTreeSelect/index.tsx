/**
 * @file 树选择
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

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

// treeSelect
/**
 * 树选择
 * @param value 指定当前选中的条目
 * @param label 选择框默认文字
 * @param disabled 是否禁用
 * @param allowClear 自定义清除按钮
 * @param onChange 选中树节点时调用此函数
 * @param placeholder 选择框默认文字
 * @param option 渲染数据
 * @param treeCheckable 显示 Checkbox
 * @param fieldNames 自定义节点 label、value、children 的字段
 * @param style 样式
 * @param showCheckedStrategy 配置 treeCheckable 时，定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点)。TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点
 */
export type TreeselectType<T> = {
	value?: (string | number)[];
	label?: string;
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: (string | number)[], labelList: ReactNode[], extra: ChangeEventExtra) => void) | undefined;
	placeholder?: string;
	option?: T[];
	treeCheckable?: boolean;
	fieldNames?: fieldNamesType;
	style?: React.CSSProperties;
	showCheckedStrategy?: ShowCheckedStrategy;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getTreeSelect = <T extends BaseOptionType>(item: TreeselectType<T>) => {
	return (
		<TreeSelect
			value={item.value}
			treeData={item.option}
			showCheckedStrategy={item.showCheckedStrategy}
			treeCheckable={item.treeCheckable}
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
