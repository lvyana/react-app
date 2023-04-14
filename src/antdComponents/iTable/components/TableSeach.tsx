/**
 * @file 表头搜索
 * @author ly
 * @createDate 2023年4月9日
 */
import { Button, Col, Divider, Row, TreeSelect } from 'antd';
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnType } from 'antd/es/table';
import { formTreeSelect } from '@/antdComponents/iForm/components/ItreeSelect';
import { BaseOptionType } from 'antd/es/cascader';
import type { SearchProps, FormParamType } from './index';

const { SHOW_PARENT } = TreeSelect;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const TableSeach = <T, D extends BaseOptionType>({
	option,
	onSearch = () => {},
	form,
	dataIndex,
	fieldNames,
	visible,
	placeholder
}: SearchProps<T, D>) => {
	const onChange = (value: FormParamType) => {
		setselectValue(value);
	};
	useEffect(() => {
		if (visible) {
			setselectValue(form.current[dataIndex] || []);
		}
	}, [visible]);

	const [selectValue, setselectValue] = useState<FormParamType>([]);

	return (
		<Row className="p-2">
			<Col>
				<div className="w-52">
					{formTreeSelect({
						value: selectValue,
						option,
						fieldNames,
						onChange: onChange,
						placeholder,
						checkbox: true,
						showCheckedStrategy: SHOW_PARENT
					})}
				</div>
			</Col>
			<Col>
				<Button
					className="ml-2"
					type="default"
					onClick={() => {
						setselectValue([]);
						form.current[dataIndex] = [];
						onSearch();
					}}>
					清空
				</Button>
				<Button
					className="ml-2"
					type="primary"
					onClick={() => {
						form.current[dataIndex] = selectValue;
						onSearch();
					}}>
					确定
				</Button>
			</Col>
		</Row>
	);
};

export default TableSeach;
