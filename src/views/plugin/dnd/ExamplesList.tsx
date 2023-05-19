/**
 * @file 左侧示例表单组件
 * @author ly
 * @createDate 2022年12月17日
 */
import React, { FC, useContext, useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Col, Row } from 'antd';
import { useDrag } from 'react-dnd';
import { ITEM_TYPES, FORM_ITEM } from './itemTypes';
import { Context } from './context';
import type { ItemTypesParams } from './itemTypes';
import useThemeHooks from '@/config/theme/useThemeHooks';
import hoverEvenHoc from '@/hoc/hoverEvenHoc';

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
	},
	{
		name: '按钮集合',
		type: ITEM_TYPES.BUTTON
	}
];

/**
 * @param name 表单名称
 * @param type 表单类型
 */

interface ExamplesItemProps {
	name: string;
	type: ItemTypesParams;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ExamplesList = () => {
	const { token } = useThemeHooks();

	return (
		<div className="rounded-lg p-2 border-2 border-solid" style={{ borderColor: token.colorPrimaryBorder }}>
			<Row gutter={16}>
				{FORM_TYPE_LIST.map((item) => {
					return <ExamplesItem name={item.name} type={item.type} key={item.type}></ExamplesItem>;
				})}
			</Row>
		</div>
	);
};

const ExamplesItem: FC<ExamplesItemProps> = ({ name, type }) => {
	const { token } = useThemeHooks();

	const context = useContext(Context);
	const formList = context?.state.formList;

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
					let newFormList = formList;
					if (type === 'button') {
						newFormList?.push({
							type: type as ItemTypesParams,
							name: 'name' + formList?.length,
							key: uuidv4(),
							span: 24,
							option: [
								{
									name: '确认',
									type: 'ok',
									btnType: 'primary',
									span: 12,
									permission: '',
									iconFont: '',
									id: '0'
								}
							]
						});
					} else {
						newFormList?.push({
							type: type as ItemTypesParams,
							label: 'label',
							name: 'name' + formList?.length,
							disabled: false,
							key: uuidv4(),
							isRule: 1 as const,
							span: 24,
							labelCol: 6,
							trigger: '1'
							// layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
						});
					}
					// const newFormList = [...(formList || []), {}];
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
				{useMemo(
					() =>
						hoverEvenHoc(
							<div
								ref={drag}
								data-testid={`formItem`}
								className="rounded-lg p-2 mb-2 border border-solid cursor-pointer"
								style={{ borderColor: token.colorPrimaryBorder }}>
								{name}
							</div>
						),
					[token]
				)}
			</Col>
		</>
	);
};

export default ExamplesList;
