import React, { useState, useEffect } from 'react';
import { Tag, Switch } from 'antd';
import Idropdown, { IbtFunItem } from '@/components/iDropdown';
import { AlignType } from '@/components/iTable';
import useIconfirm from '@/components/iModal/Iconfirm';
import { updateInterviewerStatus } from '../service';

export interface ItableBt {
	userName: string;
	nickName: string;
	email: string;
	phone: string;
	projectName: string[];
	status: number;
	interviewerId: string;
	projectIds: number[];
}

interface Iprops {
	buttonEvent: (type: string | number, value: ItableBt) => void;
	getTaableData: () => void;
}

const useHeaderTable = ({ buttonEvent, getTaableData }: Iprops) => {
	const { onConfirm } = useIconfirm();
	// 表格图表移入移出功能
	const onVisibleChange = (visible: boolean, record: ItableBt) => {
		console.log(visible, record);
		if (visible) {
			setBtFun([{ type: '修改', name: '修改' }]);
		} else {
			setBtFun([]);
		}
	};
	// 初始化按钮
	const [btFun, setBtFun] = useState<IbtFunItem[]>([]);

	const onChangeSwitch = (checked: boolean, record: ItableBt) => {
		console.log(checked);
		const onCallback = async () => {
			let status = checked ? '0' : '1';
			// 接口
			let res = await updateInterviewerStatus({ status, interviewerId: record.interviewerId });
			getTaableData();
		};
		onConfirm(`您是否删除${record.userName}面试官账号?`, onCallback);
	};
	const columns = [
		{
			title: '账号',
			dataIndex: 'userName',
			key: 'userName',
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
			dataIndex: 'projectName',
			key: 'projectName',
			align: 'center' as AlignType,
			render: (tags: string[]) => (
				<>
					{tags.map((tag, index) => {
						let color = tag.length > 3 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={index}>
								{tag}
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
					<Switch checked={text === '0' ? true : false} onChange={(checked) => onChangeSwitch(checked, record)} />
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
