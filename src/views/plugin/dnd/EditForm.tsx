/**
 * @name 右侧编辑表单
 * @user ly
 * @date 2022年12月17日
 */
import React, { useContext, useEffect, useMemo } from 'react';
import Iform from '@/antdComponents/iForm';
import { Button, Form } from 'antd';
import { Context } from './context';
import { useEditFormItemValue, useWatchUrl } from './useHooks';
import { isPassword } from '@/utils/rules';
import type { FormSliderType, FormInputType, FormSelectType, FormRadioType, FormUserDefinedType } from '@/antdComponents/iForm/type';

type FormListType = [
	FormInputType<never>,
	FormInputType<never>,
	FormSliderType,
	FormSelectType<DisabledParams>,
	FormInputType<never>,
	FormUserDefinedType,
	FormSelectType<FormListLabel>,
	FormRadioType<{
		// icon: string;
		value: number;
		key: number;
		name: string;
	}>,
	FormInputType<never>
];

export type FormParams = {
	span: number;
	label: string;
	disabled: boolean;
	url?: string;
	parent?: string;
	isRule: 1 | 2;
	rule?: string;
	name: string;
};

type DisabledParams = {
	label: string;
	value: boolean;
};

const DISABLED_OPTIONS: DisabledParams[] = [
	{ label: '启用', value: false },
	{ label: '禁用', value: true }
];

type FormListLabel = {
	label?: string;
	name: string;
};

const URL_TYPE = ['select', 'treeselect', 'cascader', 'seachSelect'];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EditForm = () => {
	const context = useContext(Context);

	const [form] = Form.useForm<FormParams>();

	const onGetOption = () => {
		const url = form.getFieldValue('url');
		getAnyOptions(url);
	};

	// 获取所有label name
	const formListLabel = useMemo(() => {
		// 先过滤
		const filterOneself = context?.state.formList.filter((item) => {
			return item.key !== context.state.selectFormItemKey;
		});

		return filterOneself?.map((item) => {
			return { label: item.label, name: item.name };
		});
	}, [context?.state.formList]);

	const formList: FormListType = [
		{
			type: 'input',
			key: '1',
			label: '标签',
			name: 'label',
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'input',
			rules: [
				{ required: true, message: '请输入数据字段' },
				{
					validator: isPassword
				}
			],
			key: '2',
			label: '数据字段',
			name: 'name',
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'slider',
			key: '3',
			label: '宽度',
			name: 'span',
			max: 24,
			min: 6,
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'select',
			key: '4',
			label: '是否禁用',
			name: 'disabled',
			allowClear: false,
			option: DISABLED_OPTIONS,
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'input',
			key: '5',
			label: 'url',
			name: 'url',
			span: 18,
			layout: { labelCol: { span: 8 }, wrapperCol: { span: 16 } }
		},
		{
			type: 'userDefined',
			key: '6',
			name: 'urlBtn',
			span: 6,
			children: (
				<div className="flex justify-end">
					<Button type="primary" onClick={onGetOption}>
						发送
					</Button>
				</div>
			),
			layout: { labelCol: { span: 0 }, wrapperCol: { span: 24 } }
		},
		{
			type: 'select',
			key: '7',
			label: '关联父级',
			name: 'parent',
			option: formListLabel,
			fieldNames: { label: 'label', value: 'name' },
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'radio' as const,
			name: 'isRule',
			label: '是否必填',
			rules: [],
			key: '8',
			span: 24,
			option: [
				{
					// icon: 'icon-zhuzhuangtu-dashuju',
					value: 1,
					name: '否',
					key: 1
				},
				{
					// icon: 'icon-drxx91',
					value: 2,
					name: '是',
					key: 2
				}
			],
			optionType: 'button',
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'input',
			key: '9',
			label: '校验规则',
			name: 'rule',
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		}
	];

	// 是否需要url获取option
	const newFormList = useMemo(() => {
		const selectFormItem = context?.state.formList.find((item) => {
			return item.key === context?.state.selectFormItemKey;
		});

		if (selectFormItem?.type) {
			return formList.filter((item) => {
				if (URL_TYPE.indexOf(selectFormItem?.type) > -1) {
					return true;
				} else {
					return item.name !== 'url' && item.name !== 'urlBtn';
				}
			});
		} else {
			return [];
		}
	}, [context?.state.selectFormItemKey, context?.state.formList]);

	useEffect(() => {
		if (context?.state.selectFormItemKey) {
			const newFormListItem = context.state.formList.find((item) => {
				return context?.state.selectFormItemKey === item.key;
			});
			const { span, label, disabled, url, parent, name, rule, isRule } = newFormListItem || {};
			form.setFieldsValue({ span, label, disabled, url, parent, name, rule, isRule });
		}
	}, [context?.state.selectFormItemKey]);

	// span
	useEditFormItemValue('span', form);

	// label
	useEditFormItemValue('label', form);

	// disabled
	useEditFormItemValue('disabled', form);

	// url
	useEditFormItemValue('url', form);

	// parent
	useEditFormItemValue('parent', form);

	// rule
	useEditFormItemValue('isRule', form);
	useEditFormItemValue('rule', form);

	// name
	useEditFormItemValue('name', form);

	// 获取options数据
	const [getAnyOptions] = useWatchUrl();

	return <div>{context?.state.selectFormItemKey && <Iform form={form} formList={newFormList}></Iform>}</div>;
};

export default EditForm;
