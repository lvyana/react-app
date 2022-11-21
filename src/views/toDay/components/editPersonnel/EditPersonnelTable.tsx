/**
 * @name 编辑团队表格信息
 * @user ly
 * @date 2022年11月20日
 */
import React, { FC } from 'react';
import Itable, { IcolumnsType } from '@/antdComponents/iTable';

export interface EditPersonnelTableDataParams {
	key: string;
	name: string;
	age: number;
	address: string;
}

const columns: IcolumnsType<EditPersonnelTableDataParams> = [
	{
		title: '姓名',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: '年龄',
		dataIndex: 'age',
		key: 'age'
	},
	{
		title: '地址',
		dataIndex: 'address',
		key: 'address'
	}
];

const DATA_SOURCE: EditPersonnelTableDataParams[] = [
	{
		key: '1',
		name: '胡彦斌',
		age: 32,
		address: '西湖区湖底公园1号'
	}
];

interface EditPersonnelTableProps {
	loading: boolean;
	data: EditPersonnelTableDataParams[];
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EditPersonnelTable: FC<EditPersonnelTableProps> = ({ loading, data }) => {
	return (
		<div>
			<Itable<EditPersonnelTableDataParams> rowKey="key" columns={columns} data={data} loading={loading}></Itable>
		</div>
	);
};

export default EditPersonnelTable;
