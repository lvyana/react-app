import React, { FC, useState, useEffect } from 'react';
import Pinyin from 'pinyin';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Button, Form } from 'antd';
import Iform, { FormInstance } from '@/components/iForm';
import getKey from '@/utils/onlyKey';
import { PlusOutlined } from '@ant-design/icons';
import { MODE, FORMITEM } from '@/components/iForm/type';
import Imodal, { ImodalProps } from '@/components/iModal';
import { findAllInterviewer, checkpinyin, addInterviewerAccount } from '../service';
import { Rule } from 'antd/lib/form';
import { validatePhoneTwo, validateEMail } from '@/utils/rules';
interface Iprops {
	form: FormInstance;
	type?: string;
}
export interface IinterviewerProjectType {
	userId?: number;
	projectIds?: number[];
	status?: string;
	interviewerId?: string;
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
			const values = await addInterForm.validateFields();
			setConfirmLoading(true);
			let res = await addInterviewerAccount({ ...addInterForm.getFieldsValue() });
			addInterForm.resetFields(); //重置表单数据
			setConfirmLoading(false);
			setVisible(false);
			getFindAllInterviewer();
		} catch (error) {
			setConfirmLoading(false);
		}
	};

	const handleCancel = () => {
		addInterForm.resetFields(); //重置表单数据
		setVisible(false);
	};

	const addInterview = () => {
		setTitle('新增面试官');
		setVisible(true);
	};

	useEffect(() => {
		getFindAllInterviewer();
	}, []);
	// 查询用户作为面试官
	const projectData = useSelector((state: RootState) => state.configureInterviewers.projectData);
	const [interviewerData, setInterviewerData] = useState([]);
	// 查询所有用户
	const getFindAllInterviewer = async () => {
		let res = await findAllInterviewer();
		console.log(res);
		let data = res.data.data.map((item: { userId: string; nickName: string }) => {
			return {
				userId: item.userId,
				nickName: item.nickName
			};
		});
		setInterviewerData(data);
	};

	// 参数
	const addFormList = [
		{
			type: 'select',
			name: 'userId',
			label: '请选择用户作为面试官',
			placeholder: '请选择用户作为面试官',
			rules: [{ required: true, message: '请选择用户作为面试官' }],
			key: getKey(),
			span: 24,
			fieldNames: {
				value: 'userId',
				label: 'nickName'
			},
			option: interviewerData,
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
			name: 'projectIds',
			label: '请选择该面试官关联的项目',
			placeholder: '请选择该面试官关联的项目',
			rules: [{ required: true, message: '请选择该面试官关联的项目' }],
			mode: 'multiple' as MODE,
			key: getKey(),
			span: 24,
			fieldNames: {
				value: 'id',
				label: 'projectName'
			},
			option: projectData,
			layout: {
				labelCol: { span: 24 },
				wrapperCol: { offset: 2, span: 16 }
			}
		},
		{
			type: 'radio',
			name: 'status',
			label: '状态',
			rules: [{ required: true, message: '请选择状态' }],
			key: getKey(),
			span: 24,
			option: [
				{
					name: '正常',
					value: '0',
					key: getKey()
				},
				{
					name: '停用',
					value: '1',
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
			name: 'projectIds',
			label: '请选择该面试官关联的项目',
			placeholder: '请选择该面试官关联的项目',
			rules: [{ required: true, message: '请选择该面试官关联的项目' }],
			mode: 'multiple' as MODE,
			key: getKey(),
			span: 24,
			fieldNames: {
				value: 'id',
				label: 'projectName'
			},
			option: projectData,
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
			form.setFieldsValue({ status: '0' });
		} else if (type === '修改面试官') {
			setstate(amendFormList);
		}
	}, [type, interviewerData]);

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

export interface checkInterviewerExistForm {
	nickName: string;
	pinYinName: string;
	phone: string;
	email: string;
}
const AddInterviewerInfo: FC<Iprops> = ({ form }) => {
	const pinYinNameValidator = async (rule: Rule, value: string | number): Promise<void> => {
		console.log(value);
		if (value) {
			try {
				let res = await checkpinyin({ pinYinName: form.getFieldValue('pinYinName') });
				console.log(res);
			} catch (error) {
				return Promise.reject('用户名已存在');
			}
		}
	};

	const setPinYin = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		console.log(e.target.value);
		let pinYinStr = '';
		let pinyinArr = Pinyin(e.target.value, {
			style: Pinyin.STYLE_NORMAL // 设置拼音风格
		});
		pinyinArr.map((item) => {
			pinYinStr = pinYinStr + item[0];
		});
		console.log(pinYinStr, pinyinArr);

		form.setFieldsValue({ pinYinName: pinYinStr.replace(/\s*/g, '') });
	};
	// 参数
	const formList = [
		{
			type: 'input',
			name: 'nickName',
			label: '姓名',
			rules: [
				{
					required: true,
					message: '请输入姓名'
				}
			],
			key: getKey(),
			onBlur: setPinYin,
			span: 24,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'input',
			name: 'pinYinName',
			label: '登录账号',
			validateTrigger: 'onBlur',
			rules: [
				{
					required: true,
					message: '请输入登录账号'
				},
				{
					validator: pinYinNameValidator
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
			name: 'phone',
			label: '手机号码',
			rules: [
				{
					required: true,
					message: '请输入手机号码'
				},
				{
					validator: validatePhoneTwo
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
			name: 'email',
			label: '邮箱',
			rules: [
				{
					required: true,
					message: '请输入邮箱'
				},
				{
					validator: validateEMail
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

	return (
		<>
			<Iform formList={formList} form={form} />
		</>
	);
};
