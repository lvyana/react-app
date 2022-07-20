import React, { FC, useEffect, useState, useRef, Key } from 'react';
import { useAppSelector } from '@/store/hooks';
import { GET_SIZE } from '@/store/reducers/layout';
import { Table, Pagination, Switch } from 'antd';
// 表格头部按钮接口
import { ColumnsType } from 'antd/es/table';
import { antIcon } from '@/components/loading';

/**
 *
 * 表格接口
 * columns 定义表头格式数据
 * data 表格美容显示数据
 * loading 加载状态
 * rowSelection 事件回调对象
 * rowKey 定义唯一key字段
 */
interface Iprops<T> {
	columns?: IcolumnsType; //表头
	data?: T[]; //表内容
	loading?: boolean;
	rowSelection?: object;
	rowKey?: string;
	bordered?: boolean;
}

export type IcolumnsType = ColumnsType<any>; //表头

/**
 *
 * 表格内事件
 */
export type ItbClick<T> = (type: string, record: T) => void;

export type AlignType = 'left' | 'right' | 'center';

const Itable: FC<Iprops<any>> = ({ columns = [], data = [], rowSelection, rowKey = 'key', loading = false, bordered = false }) => {
	const size = useAppSelector(GET_SIZE);

	return (
		<Table
			style={{ marginTop: '10px' }}
			size={size}
			columns={columns}
			rowSelection={rowSelection && { ...rowSelection }}
			dataSource={data}
			loading={{ indicator: antIcon, spinning: loading }}
			pagination={false}
			rowKey={rowKey}
		/>
	);
};
export default Itable;
