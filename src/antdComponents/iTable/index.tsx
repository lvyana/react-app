/**
 * @file 表格封装
 * @author ly
 * @createDate 2020年4月27日
 */
import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { antIcon } from '@/antdComponents/iLoading';

/**
 * @param columns 定义表头格式数据
 * @param data 表格美容显示数据
 * @param loading 加载状态
 * @param rowSelection 事件回调对象
 * @param rowKey 定义唯一key字段
 * @param bordered 边框
 */
interface ItableProps<T> {
	columns?: ColumnsType<T>; //表头
	data: T[]; //表内容
	loading?: boolean;
	rowSelection?: object;
	rowKey?: string;
	bordered?: boolean;
	scroll?: object;
}

export type IcolumnsType<T> = ColumnsType<T>; //表头

/**
 * @method 表格内事件
 * @param type 类型
 * @param record 选中数据
 * @retruns void
 */
export type ItbClick<T> = (type: keyof T, record: T) => void;

export type AlignType = 'left' | 'right' | 'center';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Itable = <T extends object>({
	columns = [],
	data = [],
	rowSelection,
	rowKey = 'key',
	loading = false,
	bordered = false,
	scroll = {}
}: ItableProps<T>) => {
	return (
		<Table
			bordered={bordered}
			style={{ marginTop: '10px' }}
			columns={columns}
			rowSelection={rowSelection && { ...rowSelection }}
			dataSource={data}
			loading={{ indicator: antIcon, spinning: loading }}
			pagination={false}
			rowKey={rowKey}
			scroll={scroll}
		/>
	);
};
export default Itable;
