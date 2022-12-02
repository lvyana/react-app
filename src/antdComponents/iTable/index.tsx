/**
 *	@name 实现表格封装
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { FC, useEffect, useState, useRef, Key } from 'react';
import { useAppSelector } from '@/store';
import { GET_SIZE } from '@/store/reducers/layout';
import { Table, Pagination, Switch } from 'antd';
// 表格头部按钮接口
import { ColumnsType } from 'antd/es/table';
import { antIcon } from '@/antdComponents/iLoading';

/**
 * @param columns 定义表头格式数据
 * @param data 表格美容显示数据
 * @param loading 加载状态
 * @param rowSelection 事件回调对象
 * @param rowKey 定义唯一key字段
 */
interface ItableProps<T> {
	columns?: ColumnsType<T>; //表头
	data: T[]; //表内容
	loading?: boolean;
	rowSelection?: object;
	rowKey?: string;
	bordered?: boolean;
}

export type IcolumnsType<T> = ColumnsType<T>; //表头

/**
 *
 * @Function ItbClick 表格内事件
 * @params type 类型
 * @retrun void
 */
export type ItbClick<T> = (type: string, record: T) => void;

export type AlignType = 'left' | 'right' | 'center';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Itable = <T extends object>({
	columns = [],
	data = [],
	rowSelection,
	rowKey = 'key',
	loading = false,
	bordered = false
}: ItableProps<T>) => {
	const size = useAppSelector(GET_SIZE);

	return (
		<Table
			bordered={bordered}
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
