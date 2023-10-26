/**
 * @file 表格组件
 * @author ly
 * @createDate 2022年3月26日
 */
import React, { useRef, useState } from 'react';
import { Button, Tag, Space } from 'antd';
import Itooltip from '@/antdComponents/iTooltip';
import Idropdown, { ButtonItemParams } from '@/antdComponents/iDropdown';
import { ItbClick, AlignType, IcolumnsType } from '@/antdComponents/iTable';
import { useNavigate } from 'react-router-dom';
import { TabelDataParams, TabelDataResponse } from '../service';
import getColumnSearchProps from '@/antdComponents/iTable/components/headSeach';
import { ColumnsSeachValue } from '../index';

type ButtonEventTypeParam = 'name' | OnClickBtnType;

/**
 * @method 按钮回调事件
 * @param type 事件类型标识
 * @param value 某一条数据
 * @returns void
 */
export type ButtonEvent = (type: ButtonEventTypeParam, value?: TabelDataResponse) => void;

interface useHeaderTableParams {
	buttonEvent: ButtonEvent;
	columnsSeachValue: React.MutableRefObject<ColumnsSeachValue>;
}

type OnClickBtnType = '修改' | '删除';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useHeaderTable = ({ buttonEvent, columnsSeachValue }: useHeaderTableParams) => {
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
			setButtonOption([
				{ type: '修改', name: '修改', btnType: 'link' },
				{ type: '删除', name: '删除', btnType: 'link' }
			]);
		} else {
			// setBtFun([]);
		}
	};
	// 初始化按钮
	const [buttonOption, setButtonOption] = useState<ButtonItemParams<OnClickBtnType>[]>([]);

	const columns: IcolumnsType<TabelDataResponse> = [
		{
			title: '名字',
			dataIndex: 'name',
			key: 'name',
			...getColumnSearchProps<TabelDataResponse, { title: string; value: string }>({
				type: 'treeSelect',
				dataIndex: 'name',
				onSearch: () => buttonEvent('name'),
				form: columnsSeachValue,
				formItemParams: {
					option: [
						{
							title: 'placeholder',
							value: 'light'
						},
						{
							title: 'placeholder1',
							value: 'light1'
						}
					],
					fieldNames: { label: 'title', value: 'value' },
					placeholder: '请选择名字'
				}
			}),

			width: 100,
			align: 'center',
			render: (text, record) => (
				<Itooltip placement="top" overlayInnerStyle={{ width: 200 }} title={<>{text}</>}>
					<Button type="link" style={{ width: 100 }} onClick={() => tbClick('name', record)}>
						<div className="truncate" style={{ width: 70 }}>
							{text}
						</div>
					</Button>
				</Itooltip>
			)
		},
		{
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
			width: 100,
			align: 'center',
			render: (text) => (
				<Itooltip placement="top" overlayInnerStyle={{ width: '100px' }} title={<>{text}</>}>
					<div className="truncate">{text}</div>
				</Itooltip>
			)
		},
		{
			title: '体重',
			dataIndex: 'weight',
			key: 'weight',
			align: 'center',
			render: (text) => (
				<Itooltip placement="top" overlayInnerStyle={{ width: '100px' }} title={<>{text}</>}>
					<div className="truncate">{text}</div>
				</Itooltip>
			)
		},
		{
			title: '身高',
			dataIndex: 'height',
			key: 'height',
			align: 'center',
			render: (text) => (
				<Itooltip placement="top" overlayInnerStyle={{ width: '100px' }} title={<>{text}</>}>
					<div className="truncate">{text}</div>
				</Itooltip>
			)
		},
		{
			title: '备注',
			dataIndex: 'remark',
			key: 'remark',
			align: 'center',
			render: (text) => (
				<Itooltip placement="top" overlayInnerStyle={{ width: '180px' }} title={<>{text}</>}>
					<div className="truncate">{text}</div>
				</Itooltip>
			)
		},
		{
			title: '操作',
			key: 'operation',
			width: 80,
			align: 'center',
			render: (text, record) => {
				return (
					<Idropdown
						option={buttonOption}
						onOpenChange={(open) => onOpenChange(open, record)}
						onClick={(type) => buttonEvent(type, record)}></Idropdown>
				);
			}
		}
	];

	return { columns };
};

export default useHeaderTable;
