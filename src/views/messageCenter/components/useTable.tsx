/**
 * @file 消息中心表格
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { useState } from 'react';
import { Button, Tag, Space } from 'antd';
import Itooltip from '@/antdComponents/iTooltip';
import Ibutton from '@/antdComponents/iButton/List';
import { ItbClick, AlignType } from '@/antdComponents/iTable';
import { useNavigate } from 'react-router-dom';
import { TabelDataResponse } from '../service';
import Idropdown from '@/antdComponents/iDropdown';
import type { ButtonItemParams } from '@/antdComponents/iDropdown';
interface useHeaderTableParams {
	buttonEvent: (type: string | number, value: TabelDataResponse) => void;
}

type OnClickBtnType = '去处理';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useHeaderTable = ({ buttonEvent }: useHeaderTableParams) => {
	const navigate = useNavigate();

	//表格单元里面的功能回调
	const tbClick: ItbClick<TabelDataResponse> = (type, record) => {
		if (type === 'name') {
			navigate('/mycenter', { state: { name: record.name } });
		}
	};

	// 初始化按钮
	const [buttonOption, setButtonOption] = useState<ButtonItemParams<OnClickBtnType>[]>([
		{ type: '去处理', name: '去处理', btnType: 'link' }
	]);

	const onOpenChange = (open: boolean) => {};

	const columns = [
		{
			title: '名字',
			dataIndex: 'name',
			key: 'name',
			width: 100,
			align: 'center' as AlignType,
			render: (text: string, record: TabelDataResponse) => (
				<Itooltip placement="top" overlayInnerStyle={{ width: 200 }} title={<>{text}</>}>
					<div className="truncate" style={{ width: 100 }} onClick={() => tbClick('name', record)}>
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
				<Itooltip placement="top" overlayInnerStyle={{ width: '100px' }} title={<>{text}</>}>
					<div className="truncate">{text}</div>
				</Itooltip>
			)
		},
		{
			title: '体重',
			dataIndex: 'weight',
			key: 'weight',
			align: 'center' as AlignType,
			render: (text: string) => (
				<Itooltip placement="top" overlayInnerStyle={{ width: '100px' }} title={<>{text}</>}>
					<div className="truncate">{text}</div>
				</Itooltip>
			)
		},
		{
			title: '身高',
			dataIndex: 'height',
			key: 'height',
			align: 'center' as AlignType,
			render: (text: string) => (
				<Itooltip placement="top" overlayInnerStyle={{ width: '100px' }} title={<>{text}</>}>
					<div className="truncate">{text}</div>
				</Itooltip>
			)
		},
		{
			title: '操作',
			key: 'operation',
			width: 160,
			align: 'center' as AlignType,
			render: (text: unknown, record: TabelDataResponse) => {
				return (
					<>
						<Idropdown
							option={buttonOption}
							onOpenChange={(open) => onOpenChange(open)}
							onClick={(type) => buttonEvent(type, record)}></Idropdown>
					</>
				);
			}
		}
	];
	return { columns };
};

export default useHeaderTable;
