import React, { useState } from 'react';
import Iform from '@/components/iForm';
import { FORMITEM } from '@/components/iForm/type';
import getKey from '@/utils/onlyKey';
import { Form, Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Dynamicform = () => {
	const props = {
		name: 'file',
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		headers: {
			authorization: 'authorization-text'
		},
		onChange(info: any) {
			if (info.file.status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (info.file.status === 'done') {
				message.success(`${info.file.name} file uploaded successfully`);
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		}
	};
	const normFile = (e: any) => {
		console.log('26Upload event:', e);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};
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
				type: 'timeRangePicker',
				name: 'timeRangePicker2',
				label: '可面试时间',
				rules: [
					{
						required: true,
						message: '请选择时间'
					}
				],
				key: getKey(),
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
			type: 'userDefined',
			name: 'Upload',
			key: getKey(),
			span: 24,
			children: (
				<Form.Item
					name={'Upload'}
					label={'上传'}
					rules={[]}
					{...{
						labelCol: { span: 6 },
						wrapperCol: { span: 18 }
					}}
					valuePropName="fileList"
					getValueFromEvent={normFile}>
					<Upload {...props} key={'Upload'}>
						<Button icon={<UploadOutlined />}>Click to Upload</Button>
					</Upload>
				</Form.Item>
			)
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
	const [state, setstate] = useState<FORMITEM[]>(formList);
	//表单
	const [form] = Form.useForm();
	const onFinish = (value: any) => {
		console.log(value);
	};
	return (
		<div className="animate__animated animate__fadeIn">
			<Iform formList={state} form={form} onFinish={onFinish} />
		</div>
	);
};
export default Dynamicform;
