import React, { useState } from 'react';
import Ifrom from '@/components/iForm';
import getKey from '@/utils/onlyKey';
import { Form } from 'antd';

const Dynamicform = () => {
	const [num, setNum] = useState(4);
	const selectOnChange = (value: number) => {
		console.log(value);
		setstate([
			{
				type: 'input',
				name: 'name',
				label: '姓名',
				rules: [],
				key: getKey(),
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
				key: getKey(),
				span: 24,
				onChange: selectOnChange,
				option: [
					{
						name: 'male',
						value: 'male',
						key: getKey()
					},
					{
						name: 'female',
						value: 'female',
						key: getKey()
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
				key: getKey(),
				span: 24,
				option: [
					{
						name: 'icon-zhuzhuangtu-dashuju',
						value: 'icon-zhuzhuangtu-dashuju',
						key: getKey()
					},
					{
						name: 'icon-drxx91',
						value: 'icon-drxx91',
						key: getKey()
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
				key: getKey(),
				span: 24,
				option: [
					{
						name: '按钮11111111',
						value: '1',
						key: getKey()
					},
					{
						name: '菜单222222222',
						value: '2',
						key: getKey()
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
				key: getKey(),
				span: 24,
				option: [
					{
						label: '按钮',
						value: '1',
						key: getKey()
					},
					{
						label: '菜单',
						value: '2',
						key: getKey()
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
				key: getKey(),
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
				key: getKey(),
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
				key: getKey(),
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
				key: getKey(),
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
				key: getKey(),
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
				key: getKey(),
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
				key: getKey(),
				span: 24,
				layout: {
					labelCol: { span: 6 },
					wrapperCol: { span: 18 }
				}
			},
			{
				type: 'uploaddragger',
				name: 'uploaddragger',
				label: '拖拽上传',
				rules: [],
				key: getKey(),
				span: 24,

				layout: {
					labelCol: { span: 6 },
					wrapperCol: { span: 18 }
				},
				value: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
			},
			{
				type: 'button',
				name: 'button',
				key: getKey(),
				span: 24,
				option: [
					{ type: 'submit', name: '搜索' },
					{ type: 'onReset', name: '重置' }
				],
				style: { float: 'right' }
			}
		]);
	};
	// 参数
	const formList = [
		{
			type: 'input',
			name: 'name',
			label: '姓名',
			rules: [],
			key: getKey(),
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
			key: getKey(),
			span: 24,
			onChange: selectOnChange,
			option: [
				{
					name: 'male',
					value: 'male',
					key: getKey()
				},
				{
					name: 'female',
					value: 'female',
					key: getKey()
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
			key: getKey(),
			span: 24,
			option: [
				{
					name: 'icon-zhuzhuangtu-dashuju',
					value: 'icon-zhuzhuangtu-dashuju',
					key: getKey()
				},
				{
					name: 'icon-drxx91',
					value: 'icon-drxx91',
					key: getKey()
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
			key: getKey(),
			span: 24,
			option: [
				{
					name: '按钮',
					value: '1',
					key: getKey()
				},
				{
					name: '菜单',
					value: '2',
					key: getKey()
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
			key: getKey(),
			span: 24,
			option: [
				{
					label: '按钮',
					value: '1',
					key: getKey()
				},
				{
					label: '菜单',
					value: '2',
					key: getKey()
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
			key: getKey(),
			span: 24,
			option: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'treeselect',
			name: 'treeselect',
			label: '下拉树',
			rules: [],
			key: getKey(),
			span: 24,
			checkbox: true,
			option: [
				{
					title: 'Light',
					value: 'light',
					children: [{ title: 'Bamboo', value: 'bamboo' }]
				},
				{
					title: 'Light2',
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
			key: getKey(),
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
			key: getKey(),
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
			key: getKey(),
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
			key: getKey(),
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
			key: getKey(),
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'textArea',
			name: 'textArea',
			label: '文本框',
			rules: [],
			key: getKey(),
			span: 24,
			maxLength: 150,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'uploaddragger',
			name: 'uploaddragger',
			label: '拖拽上传',
			rules: [],
			key: getKey(),
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			},
			value: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
		},
		{
			type: 'button',
			name: 'button',
			option: [
				{ type: 'submit', name: '搜索' },
				{ type: 'onReset', name: '重置' }
			],
			key: getKey(),
			span: 24,
			style: { float: 'right' }
		}
	];
	const [state, setstate] = useState(formList);
	//表单
	const [form] = Form.useForm();
	const fileUrl = 'http://172.16.92.62:8088/file/statics/2021/08/11/da3c8e15-4432-4de2-b39b-ded7af333194.pdf';
	return (
		<div className="animate__animated animate__fadeIn">
			<Ifrom formList={state} form={form} num={num} setNum={setNum} />
		</div>
	);
};
export default Dynamicform;
