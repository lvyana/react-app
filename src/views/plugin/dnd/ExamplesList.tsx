/**
 * @name 左侧示例表单
 * @user ly
 * @date 2022年12月17日
 */
import React, { FC, useContext, useState } from 'react';
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
		<div className="p-2 border-2 border-solid border-indigo-600">
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

	const [{ isDragging }, drag] = useDrag(() => ({
		type: FORM_ITEM,
		item: { name },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				// 放入目标
				console.log(item, dropResult);
				const { name } = item;
				const formList = [...(context?.state.formList || []), { type: name as ItemTypesParams }];
				context?.dispatch({ type: 'formList', value: formList });
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId()
		})
	}));

	return (
		<>
			<Col span={12}>
				<div ref={drag} data-testid={`formItem`} className="p-2 mb-2 border border-solid border-indigo-600">
					{name}
				</div>
			</Col>
		</>
	);
};

export default ExamplesList;
