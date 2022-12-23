/**
 * @name 右侧编辑表单
 * @user ly
 * @date 2022年12月17日
 */
import React from 'react';
import Iform, { FormItemParam } from '@/antdComponents/iForm';
import { Form } from 'antd';

type FormListType = [FormItemParam<never, never>, FormItemParam<never, never>];
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EditForm = () => {
	const [form] = Form.useForm();
	const formList: FormListType = [
		{ type: 'slider', key: '1', label: '宽度', name: 'slider', span: 24, layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } } },
		{ type: 'select', key: '2', label: '宽度', name: 'select', span: 24, layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } } }
	];
	return (
		<div>
			<Iform form={form} formList={formList}></Iform>
		</div>
	);
};

export default EditForm;
