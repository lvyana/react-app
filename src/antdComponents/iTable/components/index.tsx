/**
 * @file 表头搜索
 * @author ly
 * @createDate 2023年4月9日
 */
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnType } from 'antd/es/table';
import { BaseOptionType } from 'antd/es/cascader';
import TableSeach from './TableSeach';

export type FormParamType = (string | number)[];
type FormParam<T> = { [K in keyof T]?: FormParamType };

/**
 * @param dataIndex 表头搜索对应名字
 * @param onSearch 搜索和充值回调
 * @param form 表头所有搜索的ref数据
 * @param option 下拉数据
 * @param fieldNames option 对应的key
 * @param visible 打开表头搜索
 * @param placeholder 搜索提示
 */
export type SearchProps<T, D> = {
	dataIndex: keyof T;
	onSearch: () => void;
	form: React.MutableRefObject<FormParam<T>>;
	option: D[];
	fieldNames: { label: string; value: string };
	visible: boolean;
	placeholder: string;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getColumnSearchProps = <T, D extends BaseOptionType>({
	dataIndex,
	onSearch,
	form,
	option,
	fieldNames,
	placeholder
}: Omit<SearchProps<T, D>, 'visible'>): ColumnType<T> => ({
	filterDropdown: ({ setSelectedKeys, confirm, visible }) => (
		<TableSeach
			option={option}
			onSearch={() => {
				onSearch();
				setSelectedKeys(form.current[dataIndex]?.length ? [1] : []);
				confirm();
			}}
			dataIndex={dataIndex}
			form={form}
			fieldNames={fieldNames}
			visible={visible}
			placeholder={placeholder}
		/>
	),
	filterIcon: (filtered: boolean) => {
		console.log(filtered);

		return <SearchOutlined style={{ color: form.current[dataIndex]?.length ? '#1890ff' : undefined }} />;
	}
});

export default getColumnSearchProps;
