import React from 'react';
import { Table, Tag, Space } from 'antd';

export interface Itable {
	key: string;
	name: string;
	age: number;
	address: string;
	tags: string[];
}

interface Iprops {
	buttonEvent: (value: Itable) => void;
}
const useHeaderTable = ({ buttonEvent }: Iprops) => {
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text: string) => <a>{text}</a>
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age'
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address'
		},
		{
			title: 'Tags',
			key: 'tags',
			dataIndex: 'tags',
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
			title: 'Action',
			key: 'action',
			render: (text: unknown, record: Itable) => (
				<Space size="middle" onClick={() => buttonEvent(record)}>
					<a>Invite {record.name}</a>
					<a>Delete</a>
				</Space>
			)
		}
	];
	return { columns };
};

export default useHeaderTable;
