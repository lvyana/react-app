import React, { useState } from 'react';
import { Button, Tag, Space } from 'antd';
import Itooltip from '@/components/iTooltip';
import Idropdown, { ButtonItemParam } from '@/components/iDropdown';
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
	const onVisibleChange = (visible: boolean, record: TabelDataResponse) => {
		if (visible) {
			setBtFun([
				{ type: '修改', name: '修改', btType: 'primary' },
				{ type: '删除', name: '删除', btType: 'primary' }
			]);
		} else {
			setBtFun([]);
		}
	};
	// 初始化按钮
	const [btFun, setBtFun] = useState<ButtonItemParam[]>([]);

	const columns = [
		{
			title: <>名字</>,
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
			width: 400,
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
			width: 400,
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
			width: 200,
			align: 'center' as AlignType,
			render: (text: unknown, record: TabelDataResponse) => {
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
