import React, { useState } from 'react';
import { Button, Tag, Space } from 'antd';
import Post, { PostTitle, InameList } from '@/components/iTable/components/TbPost';
import Itooltip from '@/components/iTooltip';
import Multi from '@/components/iTable/components/TbMulti';
import TbButton from '@/components/iTable/components/TbButton';
import Idropdown, { IbtFunItem } from '@/components/iDropdown';
import { ItbClick, AlignType } from '@/components/iTable';

export interface ItableBt {
	key: string;
	name: string;
	age: number;
	address: string[];
	tags: string[];
}

interface Iprops {
	buttonEvent: (type: string | number, value: ItableBt) => void;
}

const useHeaderTable = ({ buttonEvent }: Iprops) => {
	//表格单元里面的功能回调
	const tbClick: ItbClick = (type, record) => {
		console.log(type, record);
	};

	// 表格图表移入移出功能
	const onVisibleChange = (visible: boolean, record: any) => {
		console.log(visible, record);
		if (visible) {
			setBtFun([
				{ type: '修改', name: '修改' },
				{ type: '删除', name: '删除' }
			]);
		} else {
			setBtFun([]);
		}
	};
	// 初始化按钮
	const [btFun, setBtFun] = useState<IbtFunItem[]>([]);

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			align: 'center' as AlignType,
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
			align: 'center' as AlignType,
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
			align: 'center' as AlignType,
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
			align: 'center' as AlignType,
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
			align: 'center' as AlignType,
			render: (text: string, record: ItableBt) => <TbButton type={'age'} name={text} record={record} tbClick={tbClick}></TbButton>
		},
		{
			title: 'Action',
			key: 'action',
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
