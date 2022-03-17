import React, { useState, useEffect } from 'react';
import { Tag, Switch } from 'antd';
import { AlignType } from '@/components/iTable';
import useIconfirm from '@/components/iModal/Iconfirm';

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
	getTaableData: () => void;
}

const useHeaderTable = ({ getTaableData }: Iprops) => {
	const { onConfirm } = useIconfirm();

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
		}
	];
	return { columns };
};

export default useHeaderTable;
