/**
 * @name 左侧示例表单
 * @user ly
 * @date 2022年12月17日
 */
import React, { FC, useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Col, Row } from 'antd';
import { useDrag } from 'react-dnd';
import { ITEM_TYPES, FORM_ITEM } from './itemTypes';
import { Context } from './context';
import type { ItemTypesParams } from './itemTypes';

export const FORM_TYPE_LIST = [
	{
		name: '输入框',
		type: ITEM_TYPES.INPUT
	},
	{
		name: '文本框',
		type: ITEM_TYPES.TEXTAREA
	},
	{
		name: '下拉框',
		type: ITEM_TYPES.SELECT
	},
	{
		name: '联级框',
		type: ITEM_TYPES.CASCADER
	}
];

interface ExamplesItemProps {
	name: string;
	type: ItemTypesParams;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ExamplesList = () => {
	return (
		<div className="rounded-lg p-2 border-2 border-solid border-indigo-600">
			<Row gutter={16}>
				{FORM_TYPE_LIST.map((item) => {
					return <ExamplesItem name={item.name} type={item.type} key={item.type}></ExamplesItem>;
				})}
			</Row>
		</div>
	);
};

const ExamplesItem: FC<ExamplesItemProps> = ({ name, type }) => {
	const context = useContext(Context);
	const formList = context?.state.formList;

	const id = useRef(1);

	const [{ isDragging }, drag] = useDrag(
		() => ({
			type: FORM_ITEM,
			item: { name: type },
			end: (item, monitor) => {
				const dropResult = monitor.getDropResult();
				if (item && dropResult) {
					// 放入目标
					const { name: type } = item;
					// 生成formItem
					const newFormList = [
						...(formList || []),
						{
							type: type as ItemTypesParams,
							label: 'label',
							name: 'name' + formList?.length,
							disabled: false,
							key: uuidv4(),
							isRule: 1 as const,
							span: 24,
							layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
						}
					];
					context?.dispatch({ type: 'formList', value: newFormList });
				}
			},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
				handlerId: monitor.getHandlerId()
			})
		}),
		[formList]
	);

	return (
		<>
			<Col span={12}>
				<div ref={drag} data-testid={`formItem`} className="rounded-lg p-2 mb-2 border border-solid border-indigo-600">
					{name}
				</div>
			</Col>
		</>
	);
};

export default ExamplesList;
