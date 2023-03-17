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
	FormButtonType,
	SelectValueType
} from '@/antdComponents/iForm/type';
import type { UploadFile } from 'antd/lib/upload/interface';
import Icard from '@/antdComponents/iCard';

type FileChangeType = (info: { file: UploadFile; fileList: UploadFile[] }) => void;

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
	FormButtonType<'submit' | 'onReset'>
];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Dynamicform = () => {
	const selectOnChange = (value: SelectValueType) => {};
	// 参数
	const formList: FormListType = [
		{
			type: 'input' as const,
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
			type: 'select' as const,
			name: 'select',
			label: '下拉框',
			rules: [],
			key: 2,
			span: 24,
			onChange: selectOnChange,
			fieldNames: {
				label: 'name',
				value: 'value'
			},
			option: [
				{
					name: 'male',
					value: 'male',
					key: 1
				},
				{
					name: 'female',
					value: 'female',
					key: 2
				}
			],
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'radio' as const,
			name: 'radioIcon',
			label: '图标单选框',
			rules: [],
			key: 3,
			span: 24,
			option: [
				{
					icon: 'icon-zhuzhuangtu-dashuju',
					value: 'icon-zhuzhuangtu-dashuju',
					key: 1
				},
				{
					icon: 'icon-drxx91',
					value: 'icon-drxx91',
					key: 2
				}
			],
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'radio' as const,
			name: 'radio',
			label: '单选框',
			rules: [],
			key: 4,
			span: 24,
			option: [
				{
					name: '按钮11111111',
					value: '1',
					key: 1
				},
				{
					name: '菜单222222222',
					value: '2',
					key: 2
				}
			],
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'checkbox' as const,
			name: 'checkbox',
			label: '多选框',
			rules: [],
			key: 5,
			span: 24,
			option: [
				{
					label: '按钮',
					value: '1',
					key: 1
				},
				{
					label: '菜单',
					value: '2',
					key: 2
				}
			],
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'rate' as const,
			name: 'rate',
			label: '评分',
			rules: [],
			key: 6,
			span: 24,

			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			},
			option: ['terrible', 'bad', 'normal', 'good', 'wonderful']
		},
		{
			type: 'treeselect' as const,
			name: 'treeselect',
			label: '下拉树',
			rules: [],
			key: 7,
			span: 24,
			checkbox: true,
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
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'cascader' as const,
			name: 'cascader',
			label: '联级',
			rules: [],
			key: 8,
			span: 24,
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
			],
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'datePicker' as const,
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
			type: 'rangePicker' as const,
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
			type: 'timeRangePicker' as const,
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
			type: 'inputNumber' as const,
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
			type: 'switch' as const,
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
			name: 'upload',
			span: 24,
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
			},
			layout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
		},
		{
			type: 'button' as const,
			name: 'button',
			key: 15,
			span: 24,
			option: [
				{ type: 'submit', name: '搜索', btType: 'primary' },
				{ type: 'onReset', name: '重置' }
			],
			style: { float: 'right' }
		}
	];

	//表单
	const [form] = Form.useForm();
	const onFinish = () => {};
	return (
		<div className="animate__animated animate__fadeIn">
			<Icard>
				<Iform<FormListType, object> formList={formList} form={form} />
			</Icard>
		</div>
	);
};
export default Dynamicform;
