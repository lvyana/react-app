import React, { useState } from 'react';
import { Button, Tag, Space } from 'antd';
import Itooltip from '@/components/iTooltip';
import Idropdown, { ButtonItemParams } from '@/components/iDropdown';
import { ItbClick, AlignType } from '@/components/iTable';
import { useNavigate } from 'react-router-dom';
import { TabelDataResponse } from '../service';

interface Iprops {
	buttonEvent: (type: string | number, value: TabelDataResponse) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useHeaderTable = ({ buttonEvent }: Iprops) => {
	const navigate = useNavigate();

	//表格单元里面的功能回调
	const tbClick: ItbClick<TabelDataResponse> = (type, record) => {
		if (type === 'name') {
			navigate('/mycenter', { state: { name: record.name } });
		}
	};

	// 表格图表移入移出功能
	const onOpenChange = (open: boolean, record: TabelDataResponse) => {
		if (open) {
			setBtFun([
				{ type: '修改', name: '修改', btType: 'link' },
				{ type: '删除', name: '删除', btType: 'link' }
			]);
		} else {
			// setBtFun([]);
		}
	};
	// 初始化按钮
	const [btFun, setBtFun] = useState<ButtonItemParams[]>([]);

	const columns = [
		{
			title: '名字',
			dataIndex: 'name',
			key: 'name',
			width: 100,
			align: 'center' as AlignType,
			render: (text: string, record: TabelDataResponse) => (
				<Itooltip placement="top" overlayInnerStyle={{ width: '100px' }} color={'purple'} title={<>{text}</>}>
					<div className="omit" style={{ color: 'blue' }} onClick={() => tbClick('name', record)}>
						{text}
					</div>
				</Itooltip>
			)
		},
		{
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
			width: 100,
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
			title: '操作',
			key: 'operation',
			width: 80,
			align: 'center' as AlignType,
			render: (text: unknown, record: TabelDataResponse) => {
				return (
					<Idropdown
						btFun={btFun}
						onOpenChange={(open) => onOpenChange(open, record)}
						buttonEvent={(type) => buttonEvent(type, record)}></Idropdown>
				);
			}
		}
	];
	return { columns };
};

export default useHeaderTable;
