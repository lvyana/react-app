/**
 * @file 表头搜索
 * @author ly
 * @createDate 2023年4月9日
 */
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnType } from 'antd/es/table';
import { BaseOptionType } from 'antd/es/cascader';
import TableSeach from './TableSeach';
import { FilterDropdownProps } from 'antd/es/table/interface';
import tableHeadSeach from './modules';

import type { FormItemMapType } from './modules';
import { TreeselectType } from '@/antdComponents/iTreeSelect';

export type FormParamType = (string | number)[];

type FormParam<T> = { [K in keyof T]?: FormParamType };

/**
 * @param option 下拉数据
 * @param fieldNames option 对应的key
 * @param placeholder 搜索提示
 */
export type SearchProps<D> = {
	option: D[];
	fieldNames: { label: string; value: string };
	placeholder: string;
};

/**
 * 表格表头参数配置
 * @param type 组件类型键
 * @param formItemParams 组件参数
 * @param dataIndex 表头搜索对应名字
 * @param form 表头所有搜索的ref数据
 * @param onSearch 搜索和重置回调
 */
type ColumnSearchProps<T, P> = {
	type: FormItemMapType;
	formItemParams: TreeselectType<P>;
	dataIndex: keyof T;
	form: React.MutableRefObject<FormParam<T>>;
	onSearch: () => void;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

// 表格表头参数配置
const getColumnSearchProps = <T, P extends BaseOptionType>({
	type,
	dataIndex,
	onSearch,
	form,
	formItemParams
}: ColumnSearchProps<T, P>): ColumnType<T> => ({
	filterDropdown: ({ selectedKeys, setSelectedKeys, confirm, visible }) => {
		return (
			<TableHeadSeach<T, P>
				type={type}
				form={form}
				dataIndex={dataIndex}
				selectedKeys={selectedKeys}
				setSelectedKeys={setSelectedKeys}
				confirm={confirm}
				visible={visible}
				onSearch={onSearch}
				formItemParams={formItemParams}></TableHeadSeach>
		);
	},
	filterIcon: (filtered: boolean) => {
		return <SearchOutlined style={{ color: form.current[dataIndex]?.length ? '#1890ff' : undefined }} />;
	}
});

// 表格表头filterDropdown组件
const TableHeadSeach = <T, P extends BaseOptionType>({
	type,
	form,
	selectedKeys,
	setSelectedKeys,
	confirm,
	visible,
	dataIndex,
	onSearch,
	formItemParams
}: Omit<FilterDropdownProps, 'prefixCls' | 'close'> & ColumnSearchProps<T, P>) => {
	// const onChange = (value: FormParamType) => {
	// 	setSelectedKeys(value);
	// };

	// 回显初始化数据
	useEffect(() => {
		if (visible) {
			setSelectedKeys(form.current[dataIndex] || []);
		}
	}, [visible]);

	// 重置按钮
	const onClose = () => {
		form.current[dataIndex] = [];
		setSelectedKeys([]);
		confirm();
		onSearch();
	};

	// 确认按钮
	const onSubmit = () => {
		form.current[dataIndex] = selectedKeys as (string | number)[];
		setSelectedKeys(selectedKeys);
		confirm();
		onSearch();
	};

	return (
		<TableSeach onClose={onClose} onSubmit={onSubmit}>
			{tableHeadSeach(type)({ value: selectedKeys as (string | number)[], ...formItemParams })}
			{/* {treeSelect({ value: selectedKeys, onChange, ...SeachFormItem })} */}
		</TableSeach>
	);
};

export default getColumnSearchProps;
