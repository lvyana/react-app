/**
 * @file 表头搜索
 * @author ly
 * @createDate 2023年4月9日
 */
import { Button, Col, Divider, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnType } from 'antd/es/table';
import { formTreeSelect } from '@/antdComponents/iForm/components/ItreeSelect';
import { BaseOptionType } from 'antd/es/cascader';

type FormParamType = (string | number)[];
type FormParam<T> = { [K in keyof T]?: FormParamType };

type SearchProps<T, D> = {
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
		<RowSeach
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
		return <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />;
	}
});

const RowSeach = <T, D extends BaseOptionType>({
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
				<div className="w-52">{formTreeSelect({ value: selectValue, option, fieldNames, onChange: onChange, placeholder })}</div>
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

export default getColumnSearchProps;
