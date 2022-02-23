import React from 'react';
import { Tooltip, Tag, Space } from 'antd';
import Post, { PostTitle, InameList } from '@/components/iTable/components/Post';

export interface ItableBt {
	key: string;
	name: string;
	age: number;
	address: string;
	tags: string[];
}

interface Iprops {
	buttonEvent: (value: ItableBt) => void;
}
const useHeaderTable = ({ buttonEvent }: Iprops) => {
	const goDrawer = (name: string, nameList: InameList) => {
		console.log(name, nameList);
	};
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text: string) => <div className="omit">{text}</div>
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
			width: 200,
			render: (text: string, record: ItableBt) => (
				<Tooltip
					placement="top"
					overlayInnerStyle={{ width: '500px' }}
					color={'purple'}
					title={
						<>
							<PostTitle nameList={['1', '2', '322222222222222222', '44444444444444444', '555555555555555555']}></PostTitle>
						</>
					}>
					<div>
						<Post
							name={record.name}
							nameList={['1', '2', '322222222222222222', '44444444444444444', '555555555555555555']}
							goDrawer={goDrawer}></Post>
					</div>
				</Tooltip>
			)
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
			render: (text: unknown, record: ItableBt) => (
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
