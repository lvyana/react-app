/**
 * @file 中间 生成表单
 * @author ly
 * @createDate 2022年12月17日
 */
import React, { FC, useCallback, useContext, useRef } from 'react';
import { useDrop, useDrag, DropTargetHookSpec } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Button, Col, Form, Row } from 'antd';
import { CloseCircleOutlined, CopyOutlined } from '@ant-design/icons';
import Iform, { FormItemParams } from '@/antdComponents/iForm';
import { FORM_ITEM, GENERATE_FORM_ITEM } from './itemTypes';
import { Context, FormParams } from './context';
import { arrIndexExchange } from '@/utils/exchange';
import { useFormData } from './useHooks';
import useThemeHooks from '@/config/antd/theme/useThemeHooks';

/**
 * @param formParams 某一项表单数据
 * @param index 表单下标
 */
interface GenerateFormParams {
	formParams: FormParams;
	index: number;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const GenerateForm = () => {
	const { token } = useThemeHooks();

	const context = useContext(Context);

	const [{ isOver, canDrop }, drop] = useDrop({
		accept: FORM_ITEM,
		drop: () => ({ name: 'GenerateForm' }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	return (
		<div
			ref={drop}
			data-testid="GenerateForm"
			className="rounded-lg p-2 border-2 border-solid  "
			style={{ minHeight: 500, borderColor: token.colorPrimaryBorder }}>
			<Row>
				{context?.state.formList.map((item, i) => {
					return (
						<Col span={item.span} key={item.key}>
							<GenerateFormItem formParams={item} index={i}></GenerateFormItem>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

// 表单子组件
const GenerateFormItem: FC<GenerateFormParams> = ({ formParams, index }) => {
	const { token } = useThemeHooks();

	const context = useContext(Context);

	const { getFormData } = useFormData();

	const ref = useRef<HTMLDivElement>(null);

	const [{ handlerId }, drop] = useDrop(
		{
			accept: GENERATE_FORM_ITEM,
			collect(monitor) {
				return {
					handlerId: monitor.getHandlerId()
				};
			},
			hover(item, monitor) {
				if (!ref.current) {
					return;
				}
				const dragIndex = (item as unknown as { index: number }).index;
				const hoverIndex = index;
				// Don't replace items with themselves
				if (dragIndex === hoverIndex) {
					return;
				}
				// Determine rectangle on screen
				const hoverBoundingRect = ref.current?.getBoundingClientRect();
				// Get vertical middle
				const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
				// Determine mouse position
				const clientOffset = monitor.getClientOffset();
				// Get pixels to the top
				if (clientOffset) {
					const hoverClientY = clientOffset.y - hoverBoundingRect.top;
					// Only perform the move when the mouse has crossed half of the items height
					// When dragging downwards, only move when the cursor is below 50%
					// When dragging upwards, only move when the cursor is above 50%
					// Dragging downwards
					if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
						return;
					}
					// Dragging upwards
					if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
						return;
					}
				}

				// Time to actually perform the action
				// moveCard(dragIndex, hoverIndex);

				const newFormList = arrIndexExchange(context?.state.formList || [], hoverIndex, dragIndex);
				// console.log(dragIndex, hoverIndex, newFormList);
				context?.dispatch({ type: 'formList', value: newFormList || [] });
				// Note: we're mutating the monitor item here!
				// Generally it's better to avoid mutations,
				// but it's good here for the sake of performance
				// to avoid expensive index searches.
				(item as unknown as { index: number }).index = hoverIndex;
			}
		},
		[context?.state.formList]
	);

	const [{ isDragging }, drag, preview] = useDrag(
		() => ({
			type: GENERATE_FORM_ITEM,
			item: () => {
				return { id: formParams.key, index };
			},
			collect: (monitor) => ({
				handlerId: monitor.getHandlerId(),
				isDragging: monitor.isDragging()
			})
		}),
		[index]
	);

	const opacity = isDragging ? 0 : 1;
	drag(drop(ref));

	const [form] = Form.useForm();

	// 处理回显表单数据
	const formList: FormItemParams<object>[] = [{ ...getFormData(formParams), span: 24 }];

	const onEditFormParams = () => {
		if (formParams.key === context?.state.selectFormItemKey) return;
		context?.dispatch({ type: 'selectFormItemKey', value: formParams.key });
	};

	// 删除formItem
	const onDeleteFormItem = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		e.stopPropagation();

		const formList =
			context?.state.formList.filter((item) => {
				return item.key !== formParams.key;
			}) || [];

		context?.dispatch({ type: 'formList', value: formList });

		if (formParams.key === context?.state.selectFormItemKey) {
			context?.dispatch({ type: 'selectFormItemKey', value: undefined });
		}
	};

	// 复制formItem
	const onCopyFormItem = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		e.stopPropagation();
		const newFormList =
			context?.state.formList.reduce<FormParams[]>((prev, item) => {
				if (formParams.key === item.key) {
					return [
						...prev,
						...[
							item,
							{
								...item,
								name: 'name' + formList?.length,
								key: uuidv4()
							}
						]
					];
				} else {
					return [...prev, item];
				}
			}, []) || [];

		context?.dispatch({ type: 'formList', value: newFormList });
	};

	return (
		<Row
			onClick={onEditFormParams}
			className={
				'rounded-lg p-4 pb-0 mb-2 border border-solid ' + `${context?.state.selectFormItemKey === formParams.key ? 'shadow-lg' : ''}`
			}
			style={{
				opacity,
				height: 100,
				backgroundColor: context?.state.selectFormItemKey === formParams.key ? token.colorPrimaryBg : '',
				borderColor: token.colorPrimaryBorder
			}}
			data-handler-id={handlerId}
			ref={ref}>
			<Col flex="auto">
				<Iform form={form} formList={formList}></Iform>
			</Col>
			<div className="absolute right-0 bottom-1 text-center">
				<Button type="link" icon={<CloseCircleOutlined />} onClick={(e) => onDeleteFormItem(e)}></Button>
				<Button type="link" icon={<CopyOutlined />} onClick={(e) => onCopyFormItem(e)}></Button>
			</div>
		</Row>
	);
};
export default GenerateForm;
