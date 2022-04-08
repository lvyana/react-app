import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Table, Pagination, Switch } from 'antd';
// 表格头部按钮接口
import { ColumnsType } from 'antd/es/table';
/**
 *
 * 表格接口
 * columns 定义表头格式数据
 * data 表格美容显示数据
 * loading 加载状态
 * rowSelection 事件回调对象
 * rowKey 定义唯一key字段
 */
interface Iprops {
	columns?: ColumnsType<any>; //表头
	data?: any[]; //表内容
	loading?: boolean;
	rowSelection?: object;
	rowKey?: string;
	bordered?: boolean;
}

/**
 *
 * 表格内事件
 */
export type ItbClick = (type: string, nameList: object | undefined) => void;

export type AlignType = 'left' | 'right' | 'center';

const Itable: FC<Iprops> = ({ columns = [], data = [], rowSelection, rowKey = 'key', loading, bordered = false }) => {
	const size = useSelector((state: RootState) => state.layout.size);
	console.log(size);

	return (
		<Table
			style={{ marginTop: '10px' }}
			size={size}
			columns={columns}
			rowSelection={rowSelection && { ...rowSelection }}
			dataSource={data}
			loading={loading}
			pagination={false}
			rowKey={rowKey}
			bordered={bordered}
		/>
	);
};
export default Itable;
