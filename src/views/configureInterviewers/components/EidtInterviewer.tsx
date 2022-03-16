import React, { FC, useState, useEffect } from 'react';
import { Button, Form } from 'antd';
import Iform, { FormInstance } from '@/components/iForm';
import getKey from '@/utils/onlyKey';
import { PlusOutlined } from '@ant-design/icons';
import { MODE, FORMITEM } from '@/components/iForm/type';
import Imodal, { ImodalProps } from '@/components/iModal';

interface Iprops {
	form: FormInstance;
	type?: string;
}
const EidtInterviewer: FC<Iprops> = ({ form, type }) => {
	//表单
	const [addInterForm] = Form.useForm();
	const [title, setTitle] = useState('');
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const handleOk = async () => {
		try {
			// 校验表单
			const values = await form.validateFields();
			setConfirmLoading(true);
			setTimeout(() => {
				form.resetFields(); //重置表单数据
				setConfirmLoading(false);
				setVisible(false);
			}, 2000);
		} catch (error) {}
	};

	const handleCancel = () => {
		form.resetFields(); //重置表单数据
		setVisible(false);
	};

	const addInterview = () => {
		setTitle('新增面试官');
		setVisible(true);
	};

	// 参数
	const addFormList = [
		{
			type: 'select',
			name: 'select',
			label: '请选择用户作为面试官:',
			placeholder: '请选择用户作为面试官',
			rules: [],
			key: getKey(),
			span: 24,
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
				labelCol: { span: 24 },
				wrapperCol: { offset: 2, span: 16 }
			}
		},
		{
			type: 'userDefined',
			name: 'select34',
			key: getKey(),
			span: 24,
			children: (
				<Button
					type="dashed"
					onClick={addInterview}
					style={{ width: '301px', marginLeft: '38px', marginBottom: '24px' }}
					icon={<PlusOutlined />}>
					添加面试官账号
				</Button>
			)
		},
		{
			type: 'select',
			name: 'select343',
			label: '请选择该面试官关联的项目:',
			placeholder: '请选择该面试官关联的项目',
			rules: [],
			mode: 'multiple' as MODE,
			key: getKey(),
			span: 24,
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
				labelCol: { span: 24 },
				wrapperCol: { offset: 2, span: 16 }
			}
		},
		{
			type: 'radio',
			name: 'radio',
			label: '状态',
			rules: [],
			key: getKey(),
			span: 24,
			option: [
				{
					name: '正常',
					value: '1',
					key: getKey()
				},
				{
					name: '停用',
					value: '2',
					key: getKey()
				}
			],
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		}
	];
	const amendFormList = [
		{
			type: 'select',
			name: 'select343',
			label: '请选择该面试官关联的项目:',
			placeholder: '请选择该面试官关联的项目',
			rules: [],
			mode: 'multiple' as MODE,
			key: getKey(),
			span: 24,
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
				labelCol: { span: 24 },
				wrapperCol: { offset: 2, span: 16 }
			}
		}
	];
	const [state, setstate] = useState<FORMITEM[]>([]);

	useEffect(() => {
		if (type === '添加面试官') {
			setstate(addFormList);
			form.setFieldsValue({ radio: '1' });
		} else if (type === '修改面试官') {
			setstate(amendFormList);
		}
	}, [type]);
	return (
		<div>
			<Iform formList={state} form={form} formLayout={'vertical'} />
			<Imodal title={title} visible={visible} confirmLoading={confirmLoading} handleOk={handleOk} handleCancel={handleCancel}>
				<AddInterviewerInfo form={addInterForm}></AddInterviewerInfo>
			</Imodal>
		</div>
	);
};

export default EidtInterviewer;

const AddInterviewerInfo: FC<Iprops> = ({ form }) => {
	// 参数
	const formList = [
		{
			type: 'input',
			name: 'name',
			label: '用户名称',
			rules: [
				{
					required: true,
					message: '请输入用户名称'
				}
			],
			key: getKey(),
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'input',
			name: 'name2',
			label: '登录账号',
			rules: [
				{
					required: true,
					message: '请输入登录账号'
				}
			],
			key: getKey(),
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'input',
			name: 'name4',
			label: '手机号码',
			rules: [
				{
					required: true,
					message: '请输入手机号码'
				}
			],
			key: getKey(),
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'input',
			name: 'name4',
			label: '邮箱号码',
			rules: [
				{
					required: true,
					message: '请输入邮箱号码'
				}
			],
			key: getKey(),
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		}
	];
	const [state, setstate] = useState(formList);

	return (
		<>
			<Iform formList={state} form={form} />
		</>
	);
};
