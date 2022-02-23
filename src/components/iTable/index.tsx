import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Table, Pagination, Switch } from 'antd';
// 表格头部按钮接口
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ColumnsType } from 'antd/es/table';
/**
 *
 * 表格接口
 */
interface TABEL<T> {
	columns?: ColumnsType<any>; //表头
	data?: T[]; //表内容
	loading?: boolean;
	rowSelection?: object;
	rowKey?: string;
}
// type SizeType = "small" | "middle" | "default" | undefined
const Itable = ({ columns = [], data = [], rowSelection, rowKey = 'key' }: TABEL<object>) => {
	const size = useSelector<RootState>((state) => state.layout.size);
	console.log(size);

	return (
		<Table
			style={{ marginTop: '10px' }}
			size={size as SizeType}
			columns={columns}
			rowSelection={rowSelection && { ...rowSelection }}
			dataSource={data}
			pagination={false}
			rowKey={rowKey}
			// bordered
		/>
	);
};
export default Itable;
