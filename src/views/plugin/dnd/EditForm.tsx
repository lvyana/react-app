/**
 * @name 右侧编辑表单
 * @user ly
 * @date 2022年12月17日
 */
import React, { useContext, useEffect } from 'react';
import Iform, { FormItemParam } from '@/antdComponents/iForm';
import { Form, FormInstance } from 'antd';
import { Context } from './context';

type FormListType = [FormItemParam<never, never>, FormItemParam<never, never>, FormItemParam<DisabledParams, never>];

type FormParams = {
	span: number;
	label: string;
	disabled: boolean;
};

type DisabledParams = {
	label: string;
	value: boolean;
};

const DISABLED_OPTIONS: DisabledParams[] = [
	{ label: '正常', value: false },
	{ label: '禁用', value: true }
];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EditForm = () => {
	const context = useContext(Context);

	const [form] = Form.useForm<FormParams>();

	const formList: FormListType = [
		{
			type: 'slider',
			key: '1',
			label: '宽度',
			name: 'span',
			max: 24,
			min: 6,
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'input',
			key: '2',
			label: 'label',
			name: 'label',
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'select',
			key: '3',
			label: 'label',
			name: 'disabled',
			allowClear: false,
			option: DISABLED_OPTIONS,
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		}
	];

	useEffect(() => {
		if (context?.state.selectFormItemKey) {
			const newFormList = context.state.formList.find((item) => {
				return context?.state.selectFormItemKey === item.key;
			});
			const { span, label, disabled } = newFormList || {};
			form.setFieldsValue({ span, label, disabled });
		}
	}, [context?.state.selectFormItemKey]);

	// span
	useEditFormItemValue('span', form);

	// label
	useEditFormItemValue('label', form);

	// disabled
	useEditFormItemValue('disabled', form);

	return <div>{context?.state.selectFormItemKey && <Iform form={form} formList={formList}></Iform>}</div>;
};

export default EditForm;

const useEditFormItemValue = (key: keyof FormParams, form: FormInstance<FormParams>) => {
	const context = useContext(Context);

	const nameValue = Form.useWatch([key], form);
	useEffect(() => {
		if (context?.state.selectFormItemKey) {
			const newFormList = context.state.formList.map((item) => {
				if (context?.state.selectFormItemKey === item.key) {
					return { ...item, [key]: nameValue };
				}
				return item;
			});

			context.dispatch({ type: 'formList', value: newFormList });
		}
	}, [nameValue]);
};
