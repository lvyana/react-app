import React, { useState } from 'react';
import { Tag, Switch } from 'antd';
import Idropdown from '@/components/iDropdown';
import { AlignType } from '@/components/iTable';
import useIconfirm from '@/components/iModal/Iconfirm';
import { pageData } from '../service';

export interface ItableBt {
	name: string;
	nickName: string;
	email: string;
	phone: string;
	project: string[];
	status: number;
}

interface Iprops {
	buttonEvent: (type: string, value: ItableBt) => void;
}

const useHeaderTable = ({ buttonEvent }: Iprops) => {
	const { onConfirm } = useIconfirm();
	// 表格图表移入移出功能
	const onVisibleChange = (visible: boolean, record: any) => {
		console.log(visible, record);
		if (visible) {
			setBtFun([{ name: '修改' }]);
		} else {
			setBtFun([]);
		}
	};
	// 初始化按钮
	const [btFun, setBtFun] = useState<{ name: string }[]>([]);

	const onCallback = async () => {
		// 接口
		await pageData();
	};
	const onChangeSwitch = (checked: boolean, record: ItableBt) => {
		onConfirm(`您是否停用${record.name}面试官账号?`, onCallback);
	};
	const columns = [
		{
			title: '账号',
			dataIndex: 'name',
			key: 'name',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '用户名称',
			dataIndex: 'nickName',
			key: 'nickName',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '电子邮箱',
			dataIndex: 'email',
			key: 'email',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '手机号码',
			dataIndex: 'phone',
			key: 'phone',
			align: 'center' as AlignType,
			render: (text: string) => <div>{text}</div>
		},
		{
			title: '关联项目',
			dataIndex: 'project',
			key: 'project',
			align: 'center' as AlignType,
			render: (tags: string[]) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 5 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			)
		},
		{
			title: '状态',
			dataIndex: 'status',
			key: 'name',
			align: 'center' as AlignType,
			render: (text: string, record: ItableBt) => (
				<div>
					<Switch checked={text === '1' ? true : false} onChange={(checked) => onChangeSwitch(checked, record)} />
				</div>
			)
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
