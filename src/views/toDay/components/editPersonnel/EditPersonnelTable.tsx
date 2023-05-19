/**
 * @file 编辑团队表格信息
 * @author ly
 * @createDate 2022年11月20日
 */
import React, { FC } from 'react';
import Itable, { IcolumnsType } from '@/antdComponents/iTable';
import Idropdown, { ButtonItemParams } from '@/antdComponents/iDropdown';
export interface EditPersonnelTableDataParams {
	key: string;
	name: string;
	age: number;
	address: string;
}

interface EditPersonnelTableProps {
	loading: boolean;
	data: EditPersonnelTableDataParams[];
}

type OnClickBtnType = '修改' | '删除';

const btArr: ButtonItemParams<OnClickBtnType>[] = [
	{ type: '修改', name: '修改', btnType: 'link' },
	{ type: '删除', name: '删除', btnType: 'link' }
];
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EditPersonnelTable: FC<EditPersonnelTableProps> = ({ loading, data }) => {
	const onOpenChange = (open: boolean) => {};

	const onClickBtn = (type: OnClickBtnType, value: EditPersonnelTableDataParams) => {
		// console.log(type, value);
	};

	const columns: IcolumnsType<EditPersonnelTableDataParams> = [
		{
			title: '姓名',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: '岗位',
			dataIndex: 'post',
			key: 'post'
		},
		{
			title: '操作',
			dataIndex: 'operation',
			key: 'operation',
			render: (value, record) => {
				return <Idropdown btArr={btArr} onOpenChange={onOpenChange} onClickBtn={(type, value) => onClickBtn(type, record)}></Idropdown>;
			}
		}
	];

	return (
		<div>
			<Itable<EditPersonnelTableDataParams> rowKey="key" columns={columns} data={data} loading={loading}></Itable>
		</div>
	);
};

export default EditPersonnelTable;
