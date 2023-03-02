/**
 * @file 右侧编辑表单
 * @author ly
 * @createDate 2022年12月17日
 */
import React, { useContext, useEffect, useMemo, useState } from 'react';
import Iform, { OnValuesChange } from '@/antdComponents/iForm';
import { Button, Form, Tabs, TabsProps } from 'antd';
import { Context } from './context';
import { useEditFormItemValue, useEditItemValue, useWatchUrl } from './useHooks';
import StaticOptions from './components/StaticOptions';
import CreatButton from './components/CreatButton';
import { isPassword } from '@/utils/rules';
import { v4 as uuidv4 } from 'uuid';
import type {
	FormSliderType,
	FormInputType,
	FormSelectType,
	FormRadioType,
	FormUserDefinedType,
	FormTextAreaType
} from '@/antdComponents/iForm/type';
import type { Options } from './itemTypes';
import { ButtonItemParams } from '@/antdComponents/iButton/type';

type FormListType = [
	// 标签
	FormInputType,
	// 数据字段
	FormInputType,
	// label宽度
	FormSliderType,
	// 总宽度
	FormSliderType,
	// 是否禁用
	FormSelectType<DisabledParams>,
	// option获取类型
	FormUserDefinedType,
	// 静态数据
	FormUserDefinedType,
	// url
	FormInputType,
	// urlLabel
	FormInputType,
	// urlValue
	FormInputType,
	// 发送
	FormUserDefinedType,
	// 关联父级
	FormSelectType<FormListLabel>,
	// 是否必填
	FormRadioType<{
		// icon: string;
		value: number;
		key: number;
		name: string;
	}>,
	// 是否必填提示语
	FormTextAreaType,
	// 校验规则
	FormInputType,
	// 校验规则提示语
	FormTextAreaType,
	// 生成按钮
	FormUserDefinedType
];

/**
 * @param span 宽度
 * @param label 名称
 * @param disabled 禁用
 * @param url 请求数据路径
 * @param parent 关联父级id
 * @param isRule 是否必填
 * @param ruleTitle 必填提示
 * @param name 字段名
 * @param labelCol label宽度
 * @param trigger option切换类型
 * @param option options数据
 * @param urlLabel options label
 * @param urlValue options value
 */
export type FormParams = {
	span: number;
	label?: string;
	disabled?: boolean;
	url?: string;
	parent?: string;
	isRule?: 1 | 2;
	isRuleTitle?: string;
	rule?: string;
	ruleTitle?: string;
	name: string;
	labelCol?: number;
	trigger?: string;
	option?: Options[] | ButtonOptionsParams[];
	urlLabel?: string;
	urlValue?: string;
};

/**
 * @param label 名称
 * @param value 标识
 */
type DisabledParams = {
	label: string;
	value: boolean;
};

const DISABLED_OPTIONS: DisabledParams[] = [
	{ label: '启用', value: false },
	{ label: '禁用', value: true }
];

/**
 * @param label 名称
 * @param value 标识
 */
export type ButtonOptionsParams = {
	// name: string;
	// type: string;
	// btType: string;
	// span: number | string | null;
	// hasPermiss: string;
	iconFont?: string;
	id: string;
} & Omit<ButtonItemParams<string>, 'iconFont'>;

const BUTTON_OPTIONS: ButtonOptionsParams[] = [
	// {
	// 	name: '确认',
	// 	type: 'ok',
	// 	btType: 'primary',
	// 	span: 12,
	// 	hasPermiss: '',
	// 	iconFont: '',
	// 	id: '0'
	// }
];

/**
 * 父级集合
 * @param label 名称
 * @param name 标识
 */
type FormListLabel = {
	label?: string;
	name: string;
};

// options类型对应form类型
const HAS_SELECT_TYPE = ['select', 'cascader'];
const HAS_SELECT_NAME = [
	'label',
	'name',
	'labelCol',
	'span',
	'disabled',
	'trigger',
	'staticOptions',
	'url',
	'urlLabel',
	'urlValue',
	'urlBtn',
	'parent',
	'isRule',
	'isRuleTitle',
	'rule',
	'ruleTitle'
];

// 通用类型
const HAS_COMMON_TYPE = ['input', 'textArea'];
const HAS_COMMON_NAME = ['label', 'name', 'labelCol', 'span', 'disabled', 'parent', 'isRule', 'isRuleTitle', 'rule', 'ruleTitle'];

// 按钮
const HAS_BUTTON_TYPE = ['button'];
const HAS_BUTTON_NAME = ['name', 'span', 'button'];

const OPTIONS = [{ value: '', label: '', id: uuidv4() }];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EditForm = () => {
	const { editItemValue } = useEditItemValue();

	const context = useContext(Context);

	const [form] = Form.useForm<FormParams>();

	// 获取options数据
	const [getAnyOptions] = useWatchUrl();

	// 点击发送
	const onGetOption = async () => {
		if (staticPattern === '1') {
			editItemValue({ option: staticOptions });
		} else if (staticPattern === '2') {
			try {
				await form.validateFields(['url']);
				const url = form.getFieldValue('url');
				getAnyOptions(url);
			} catch (error) {}
		}
	};

	// 获取所有label name(不包括自己 关联父级)
	const formListLabel = useMemo(() => {
		// 先过滤
		const filterOneself = context?.state.formList.filter((item) => {
			return item.key !== context.state.selectFormItemKey;
		});

		return filterOneself?.map((item) => {
			return { label: item.label, name: item.name };
		});
	}, [context?.state.formList]);

	// 静态、动态模式切换
	const [staticPattern, setStaticPattern] = useState('1');

	const items: TabsProps['items'] = [
		{
			key: '1',
			label: `静态数据`
		},
		{
			key: '2',
			label: `动态数据`
		}
	];

	const onChangeStatic = (value: string) => {
		setStaticPattern(value);

		if (value === '1') {
			form.setFieldValue('url', '');
			form.setFieldValue('urlLabel', '');
			form.setFieldValue('urlValue', '');
		} else if (value === '2') {
			setStaticOptions(OPTIONS);
		}

		// 清空option数据
		editItemValue({ option: [], trigger: value });
	};

	// 静态数据模板
	const [staticOptions, setStaticOptions] = useState(OPTIONS);
	const updateStaticOptions = (data: Options[]) => {
		setStaticOptions(data);
	};

	// 生成按钮
	const [buttonOptions, setButtonOptions] = useState(BUTTON_OPTIONS);
	const updateButtonOptions = (data: ButtonOptionsParams[]) => {
		setButtonOptions(data);
		editItemValue({ option: data });
	};

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
			label: 'label宽度',
			name: 'labelCol',
			max: 24,
			min: 0,
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'slider',
			key: '4',
			label: '总宽度',
			name: 'span',
			max: 24,
			min: 6,
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'select',
			key: '5',
			label: '是否禁用',
			name: 'disabled',
			allowClear: false,
			option: DISABLED_OPTIONS,
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'userDefined',
			name: 'trigger',
			children: (
				<>
					<Tabs activeKey={staticPattern} items={items} onChange={onChangeStatic} />
				</>
			),
			key: '6'
		},
		{
			type: 'userDefined',
			key: '7777',
			name: 'staticOptions',
			span: 24,
			show: staticPattern === '1',
			children: <StaticOptions options={staticOptions} updateOptions={updateStaticOptions} />,
			layout: { labelCol: { span: 0 }, wrapperCol: { span: 24 } }
		},
		{
			type: 'input',
			key: '88',
			label: '',
			name: 'url',
			placeholder: '请输入url',
			rules: [{ required: true, message: '请输入url' }],
			span: 12,
			show: staticPattern === '2',
			layout: { labelCol: { span: 0 }, wrapperCol: { span: 24 } }
		},
		{
			type: 'input',
			key: '98',
			label: '',
			name: 'urlLabel',
			placeholder: 'label',
			rules: [{ required: true, message: '请输入label' }],
			span: 6,
			show: staticPattern === '2',
			layout: { labelCol: { span: 0 }, wrapperCol: { span: 24 } }
		},
		{
			type: 'input',
			key: '108',
			label: '',
			name: 'urlValue',
			placeholder: 'value',
			rules: [{ required: true, message: '请输入value' }],
			span: 6,
			show: staticPattern === '2',
			layout: { labelCol: { span: 0 }, wrapperCol: { span: 24 } }
		},
		{
			type: 'userDefined',
			key: '11',
			name: 'urlBtn',
			span: 6,
			// show: staticPattern === '1',
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
			key: '12',
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
			key: '13',
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
			type: 'textArea',
			key: '14',
			label: '是否必填提示语',
			name: 'isRuleTitle',
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'textArea',
			key: '15',
			label: '校验规则',
			name: 'rule',
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'textArea',
			key: '16',
			label: '校验规则提示语',
			name: 'ruleTitle',
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'userDefined',
			key: 'button',
			name: 'button',
			span: 24,
			children: <CreatButton options={buttonOptions} updateOptions={updateButtonOptions} />,
			layout: { labelCol: { span: 0 }, wrapperCol: { span: 24 } }
		}
	];

	// 匹配类型 生成表单
	const newFormList = useMemo(() => {
		const selectFormItem = context?.state.formList.find((item) => {
			return item.key === context?.state.selectFormItemKey;
		});
		if (selectFormItem?.type) {
			return formList.filter((item) => {
				if (HAS_SELECT_TYPE.indexOf(selectFormItem?.type) > -1) {
					// 读取下拉类型所需要的form类型
					return HAS_SELECT_NAME.indexOf(item.name) > -1;
				} else if (HAS_COMMON_TYPE.indexOf(selectFormItem?.type) > -1) {
					// 读取通用类型所需要的form类型
					return HAS_COMMON_NAME.indexOf(item.name) > -1;
				} else if (HAS_BUTTON_TYPE.indexOf(selectFormItem?.type) > -1) {
					return HAS_BUTTON_NAME.indexOf(item.name) > -1;
				}
			});
		} else {
			return [];
		}
	}, [context?.state.selectFormItemKey, context?.state.formList, staticOptions, buttonOptions]);

	// 初始化表单数据
	useEffect(() => {
		if (context?.state.selectFormItemKey) {
			const newFormListItem = context.state.formList.find((item) => {
				return context?.state.selectFormItemKey === item.key;
			});

			const { type, span, label, disabled, url, parent, name, rule, isRule, labelCol, trigger, urlLabel, urlValue, option } =
				newFormListItem || {};
			form.setFieldsValue({ span, label, disabled, url, parent, name, rule, isRule, labelCol, urlLabel, urlValue, option });

			if (trigger) {
				setStaticPattern(trigger);
			}

			if (type === 'button') {
				setButtonOptions(option as ButtonOptionsParams[]);
			}
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
	useEditFormItemValue('isRuleTitle', form);
	useEditFormItemValue('rule', form);
	useEditFormItemValue('ruleTitle', form);

	// name
	useEditFormItemValue('name', form);

	// labelCol
	useEditFormItemValue('labelCol', form);

	// urlLabel
	useEditFormItemValue('urlLabel', form);

	// urlValue
	useEditFormItemValue('urlValue', form);

	return <div>{context?.state.selectFormItemKey && <Iform form={form} formList={newFormList}></Iform>}</div>;
};

export default EditForm;
