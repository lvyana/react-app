/**
 * @file 表格组件
 * @author ly
 * @createDate 2022年3月26日
 */
import React, { useState } from 'react';
import { Button, Tag, Space } from 'antd';
import Itooltip from '@/antdComponents/iTooltip';
import Idropdown, { ButtonItemParams } from '@/antdComponents/iDropdown';
import { ItbClick, AlignType } from '@/antdComponents/iTable';
import { useNavigate } from 'react-router-dom';
import { TabelDataResponse } from '../service';

/**
 * @method 按钮回调事件
 * @param type 事件类型标识
 * @param value 某一条数据
 * @returns void
 */
type ButtonEvent = (type: string | number, value: TabelDataResponse) => void;

interface useHeaderTableParams {
	buttonEvent: ButtonEvent;
}

type OnClickBtnType = '修改' | '删除';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useHeaderTable = ({ buttonEvent }: useHeaderTableParams) => {
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
	const [btArr, setBtFun] = useState<ButtonItemParams<OnClickBtnType>[]>([]);

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
			width: 80,
			align: 'center' as AlignType,
			render: (text: unknown, record: TabelDataResponse) => {
				return (
					<Idropdown
						btArr={btArr}
						onOpenChange={(open) => onOpenChange(open, record)}
						onClickBtn={(type) => buttonEvent(type, record)}></Idropdown>
				);
			}
		}
	];
	return { columns };
};

export default useHeaderTable;
