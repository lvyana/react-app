/**
 * @name 中间生成表单
 * @user ly
 * @date 2022年12月17日
 */
import React, { FC, useContext } from 'react';
import { useDrop } from 'react-dnd';
import { Button, Col, Form, Row } from 'antd';
import Iform from '@/antdComponents/iForm';
import { FORM_ITEM } from './itemTypes';
import { Context } from './context';
import { CloseCircleOutlined } from '@ant-design/icons';

import type { formItemParams } from './context';
import type { FormItemParam } from '@/antdComponents/iForm';

interface GenerateFormItemParams {
	formParams: formItemParams;
	index: number;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const GenerateForm = () => {
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
		<div ref={drop} data-testid="GenerateForm" className="p-2 border-2 border-solid border-indigo-600" style={{ minHeight: 500 }}>
			{context?.state.formList.map((item, i) => {
				return <GenerateFormItem key={i} formParams={item} index={i}></GenerateFormItem>;
			})}
		</div>
	);
};

const GenerateFormItem: FC<GenerateFormItemParams> = ({ formParams, index }) => {
	const [form] = Form.useForm();
	console.log(formParams);

	const formList: [FormItemParam<never, never>] = [{ ...formParams }];
	return (
		<Row className="p-4 pb-0 mb-2 border border-solid border-indigo-600">
			<Col flex="auto">
				<Iform form={form} formList={formList}></Iform>
			</Col>
			<Col flex="150px" className="text-center">
				<Button type="link" icon={<CloseCircleOutlined />}></Button>
			</Col>
		</Row>
	);
};
export default GenerateForm;
