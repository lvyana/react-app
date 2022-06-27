import React, { useState } from 'react';
import Iform from '@/components/iForm';
import { FormItemParam } from '@/components/iForm/type';
import { Form, Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Dynamicform = () => {
	const selectOnChange = (value: number) => {};
	// 参数
	const formList = [
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
			type: 'radioIcon',
			name: 'radioIcon',
			label: '图标单选框',
			rules: [],
			key: 3,
			span: 24,
			option: [
				{
					name: 'icon-zhuzhuangtu-dashuju',
					value: 'icon-zhuzhuangtu-dashuju',
					key: 1
				},
				{
					name: 'icon-drxx91',
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
			type: 'radio',
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
			type: 'checkbox',
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
			type: 'rate',
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
			type: 'treeselect',
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
			type: 'cascader',
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
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
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
			type: 'button',
			name: 'button',
			key: 14,
			span: 24,
			option: [
				{ type: 'submit', name: '搜索' },
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
			<Iform formList={formList} form={form} onFinish={onFinish} />
		</div>
	);
};
export default Dynamicform;
