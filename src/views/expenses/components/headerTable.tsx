import React from 'react';
import { Button, Tag, Space } from 'antd';
import Post, { PostTitle, InameList } from '@/components/iTable/components/TbPost';
import Itooltip from '@/components/iTooltip';
import Multi from '@/components/iTable/components/TbMulti';
import TbButton from '@/components/iTable/components/TbButton';
import { ItbClick } from '@/components/iTable';

export interface ItableBt {
	key: string;
	name: string;
	age: number;
	address: string[];
	tags: string[];
}

interface Iprops {
	buttonEvent: (value: ItableBt) => void;
}

const useHeaderTable = ({ buttonEvent }: Iprops) => {
	const tbClick: ItbClick = (type, record) => {
		console.log(type, record);
	};
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text: string) => (
				<Itooltip placement="top" overlayInnerStyle={{ width: '100px' }} color={'purple'} title={<>{text}</>}>
					<div className="omit" style={{ color: 'blue' }}>
						{text}
					</div>
				</Itooltip>
			)
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
			width: 200,
			render: (text: string, record: ItableBt) => (
				<Itooltip
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
							type={'Age'}
							nameList={['1', '2', '322222222222222222', '44444444444444444', '555555555555555555']}
							record={record}
							tbClick={tbClick}></Post>
					</div>
				</Itooltip>
			)
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
			render: (text: string, record: ItableBt) => (
				<Itooltip
					placement="top"
					overlayInnerStyle={{ width: '200px' }}
					color={'purple'}
					title={
						<>
							<Multi option={record.address} />
						</>
					}>
					<div>
						<Multi option={record.address} />
					</div>
				</Itooltip>
			)
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
							<Button color={color} key={tag}>
								{tag.toUpperCase()}
							</Button>
						);
					})}
				</>
			)
		},

		{
			title: 'age',
			key: 'age',
			dataIndex: 'age',
			render: (text: string, record: ItableBt) => <TbButton type={'age'} name={text} record={record} tbClick={tbClick}></TbButton>
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
