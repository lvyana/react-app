/**
 * @file 实现表单集合demo
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState } from 'react';
import Iform from '@/antdComponents/iForm';
import { Form, Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type {
	FormInputType,
	FormSelectType,
	FormRadioType,
	FormCheckboxType,
	FormRateType,
	FormTreeselectType,
	FormCascaderType,
	FormAlonePicker,
	FormBothPicker,
	FormInputNumberType,
	FormSwitchType,
	FormUploadType,
	FormButtonType
} from '@/antdComponents/iForm/type';
import Icard from '@/antdComponents/iCard';
import { baseURL } from '@/api/request';
import { SelectValueType } from '@/antdComponents/iSelect';
import { OnClickBtn } from '@/antdComponents/iButton/type';

type SubmitParam = 'submit' | 'onReset';

type FormListType = [
	FormInputType,
	FormSelectType<{
		name: string;
		value: string;
		key: number;
	}>,
	FormRadioType<{
		icon: string;
		value: string;
		name: string;
		key: number;
	}>,
	FormRadioType<{
		name: string;
		value: string;
		key: number;
	}>,
	FormCheckboxType<{
		label: string;
		value: string;
		key: number;
	}>,
	FormRateType<string>,
	FormTreeselectType<{
		title: string;
		value: string;
		children?: {
			title: string;
			value: string;
			children?: number;
		}[];
	}>,
	FormCascaderType<{
		label: string;
		value: string;
		children?: {
			label: string;
			value: string;
			children?: number;
		}[];
	}>,
	FormAlonePicker,
	FormBothPicker,
	FormBothPicker,
	FormInputNumberType,
	FormSwitchType,
	FormUploadType,
	FormButtonType<SubmitParam>
];

type FormListParam = {
	selectOnChange: (value: SelectValueType) => void;
	onSubmit: OnClickBtn<SubmitParam>;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Dynamicform = () => {
	const selectOnChange = (value: SelectValueType) => {};

	const onSubmit: OnClickBtn<SubmitParam> = (type) => {
		// console.log(form.getFieldsValue());
	};

	const { formList } = useFormList({ selectOnChange, onSubmit });

	//表单
	const [form] = Form.useForm();

	return (
		<div>
			<Icard>
				<Iform<FormListType, object> formList={formList} form={form} />
			</Icard>
		</div>
	);
};
export default Dynamicform;

const useFormList = ({ selectOnChange, onSubmit }: FormListParam) => {
	// 参数
	const formList: FormListType = [
		{
			type: 'input',
			name: 'name',
			label: '姓名',
			rules: [],
			key: 1,
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'select',
			name: 'select',
			label: '下拉框',
			rules: [],
			key: 2,
			span: 24,
			comConfig: {
				option: [
					{ name: 'male', value: 'male', key: 1 },
					{ name: 'female', value: 'female', key: 2 }
				],
				onChange: selectOnChange,
				fieldNames: {
					label: 'name',
					value: 'value'
				}
			},
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'radio',
			name: 'radioIcon',
			label: '图标单选框',
			rules: [],
			key: 3,
			span: 24,
			comConfig: {
				option: [
					{
						icon: 'icon-taiyang',
						value: 'icon-zhuzhuangtu-dashuju',
						name: '太阳',
						key: 1
					},
					{
						icon: 'icon-ClearNight-qing-yewan',
						value: 'icon-drxx91',
						name: '月亮',
						key: 2
					}
				]
			},
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'radio',
			name: 'radio',
			label: '单选框',
			rules: [],
			key: 4,
			span: 24,
			comConfig: {
				option: [
					{ name: '按钮11111111', value: '1', key: 1 },
					{ name: '菜单222222222', value: '2', key: 2 }
				]
			},
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'checkbox',
			name: 'checkbox',
			label: '多选框',
			rules: [],
			key: 5,
			span: 24,
			comConfig: {
				option: [
					{ label: '按钮', value: '1', key: 1 },
					{ label: '菜单', value: '2', key: 2 }
				]
			},
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'rate',
			name: 'rate',
			label: '评分',
			rules: [],
			key: 6,
			span: 24,
			comConfig: {
				option: ['terrible', 'bad', 'normal', 'good', 'wonderful']
			},
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'treeSelect',
			name: 'treeSelect',
			label: '下拉树',
			rules: [],
			key: 7,
			span: 24,
			comConfig: {
				option: [
					{
						title: 'Light122222222222',
						value: 'light',
						children: [{ title: 'Bamboo', value: 'bamboo' }]
					},
					{
						title: 'Light22333333333333',
						value: 'light2',
						children: [{ title: 'Bamboo2', value: 'bamboo2' }]
					}
				],
				checkbox: true
			},

			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'cascader',
			name: 'cascader',
			label: '联级',
			rules: [],
			key: 8,
			span: 24,
			comConfig: {
				option: [
					{
						value: 'zhejiang',
						label: 'Zhejiang',
						children: [
							{
								value: 'hangzhou',
								label: 'Hangzhou'
							}
						]
					}
				]
			},
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'datePicker',
			name: 'date',
			label: '时间',
			rules: [],
			key: 9,
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'rangePicker',
			name: 'rangePicker',
			label: '时间区间',
			rules: [],
			key: 10,
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'timeRangePicker',
			name: 'timeRangePicker2',
			label: '可面试时间',
			rules: [
				{
					required: true,
					message: '请选择时间'
				}
			],
			key: 11,
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'inputNumber',
			name: 'inputNumber',
			label: '数字',
			rules: [],
			key: 12,
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'switch',
			name: 'switch',
			valuePropName: 'checked',
			label: '是否',
			rules: [],
			key: 13,
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'upload',
			key: 14,
			label: 'upload',
			name: 'file',
			comConfig: {
				name: 'file',
				action: `${baseURL}/file`,
				headers: {
					Authorization: '{token:00}'
				},
				onChange: (info) => {
					const { status } = info.file;

					if (status !== 'uploading') {
						// console.log(info.file, info.fileList);
					}
					if (status === 'done') {
						message.success(`${info.file.name} file uploaded successfully.`);
					} else if (status === 'error') {
						message.error(`${info.file.name} file upload failed.`);
					}
				}
			},
			span: 24,
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'button',
			name: 'button',
			key: 15,
			span: 24,
			comConfig: {
				option: [
					{ type: 'submit', name: '搜索', btnType: 'primary' },
					{ type: 'onReset', name: '重置' }
				],
				onClick: onSubmit,
				style: { float: 'right' }
			}
		}
	];
	return { formList };
};
