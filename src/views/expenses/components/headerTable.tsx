import React, { useState } from 'react';
import { Button, Tag, Space } from 'antd';
import Post, { PostTitle, InameList } from '@/components/iTable/components/TbPost';
import Itooltip from '@/components/iTooltip';
import Multi from '@/components/iTable/components/TbMulti';
import TbButton from '@/components/iTable/components/TbButton';
import Idropdown, { IbtFunItem } from '@/components/iDropdown';
import { ItbClick, AlignType } from '@/components/iTable';

export interface tableProps {
	key: string;
	name: string;
	age: number;
	weight: number;
	height: number;
}

interface Iprops {
	buttonEvent: (type: string | number, value: tableProps) => void;
}

const useHeaderTable = ({ buttonEvent }: Iprops) => {
	//表格单元里面的功能回调
	const tbClick: ItbClick = (type, record) => {
		console.log(type, record);
	};

	// 表格图表移入移出功能
	const onVisibleChange = (visible: boolean, record: tableProps) => {
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
			title: '名字',
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
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
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
			title: '体重',
			dataIndex: 'weight',
			key: 'weight',
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
			title: '身高',
			dataIndex: 'height',
			key: 'height',
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
			title: 'Action',
			key: 'action',
			align: 'center' as AlignType,
			render: (text: unknown, record: tableProps) => {
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
