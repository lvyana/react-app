import React, { useState } from 'react';
import { Tag, Switch } from 'antd';
import Idropdown, { IbtFunItem, IbuttonEvent } from '@/components/iDropdown';
import { AlignType } from '@/components/iTable';
import useIconfirm from '@/components/iModal/Iconfirm';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

export interface ItableBt {
	name: string;
	nickName: string;
	email: string;
	phone: string;
	project: string[];
	status: number;
}

interface Iprops {
	buttonEvent: (type: string | number, value: ItableBt) => void;
}

const useHeaderTable = ({ buttonEvent }: Iprops) => {
	const { onConfirm } = useIconfirm();
	// 表格图表移入移出功能
	const onVisibleChange = (visible: boolean, record: any) => {
		console.log(visible, record);
		if (visible) {
			setBtFun([
				{ type: '通过', iconFont: <CheckOutlined /> },
				{ type: '拒绝', iconFont: <CloseOutlined style={{ color: 'red' }} /> }
			]);
		} else {
			setBtFun([]);
		}
	};
	// 初始化按钮
	const [btFun, setBtFun] = useState<IbtFunItem[]>([]);

	const columns = [
		{
			title: '标记',
			dataIndex: 'name',
			key: 'name',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '岗位',
			dataIndex: 'nickName',
			key: 'nickName',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '候选人',
			dataIndex: 'email',
			key: 'email',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '查看简历',
			dataIndex: 'phone',
			key: 'phone',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '推荐单位',
			dataIndex: 'project',
			key: 'project',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '推荐人',
			dataIndex: 'status',
			key: 'name',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '推荐理由',
			dataIndex: 'status23',
			key: 'name',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '简历筛选结果',
			dataIndex: 'sta34t34us23',
			key: 'name',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '操作',
			key: 'operation',
			align: 'center' as AlignType,
			render: (text: unknown, record: ItableBt) => {
				return (
					<Idropdown
						btFun={btFun}
						onVisibleChange={(visible) => onVisibleChange(visible, record)}
						buttonEvent={(type) => buttonEvent(type, record)}></Idropdown>
				);
			}
		}
	];
	return { columns };
};

export default useHeaderTable;
