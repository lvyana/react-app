import React, { FC, useState, useEffect } from 'react';
import Pinyin from 'pinyin';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Button, Form } from 'antd';
import Iform, { FormInstance } from '@/components/iForm';
import { PlusOutlined } from '@ant-design/icons';
import { MODE, FORMITEM } from '@/components/iForm/type';
import Imodal, { ImodalProps } from '@/components/iModal';
import { findAllInterviewer, checkpinyin, addInterviewerAccount, addInterviewerAndProject, updateInterviewerAndProject } from '../service';
import { Rule } from 'antd/lib/form';
import { validatePhoneTwo, validateEMail } from '@/utils/rules';

/**
 * 配置和修改面试官
 * visible 弹框开关
 * setVisible 修改弹框开关
 * title 弹框名字
 * getTaableData 查询列表接口
 * interviewerId 修改接口的时候要用唯一id
 * projectIds 修改接口的时候回显面试官关联的项目
 */
interface Iprops {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	getTaableData: () => void;
	interviewerId?: string;
	projectIds: number[];
}
const ModalInterviewer: FC<Iprops> = ({ visible, setVisible, title, getTaableData, interviewerId, projectIds }) => {
	const [form] = Form.useForm();
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		editInterviewer();
	};

	const handleCancel = () => {
		form.resetFields(); //重置表单数据
		setVisible(false);
	};

	// 修改和新增面试官
	const editInterviewer = async () => {
		let formData = form.getFieldsValue();
		if (title === '配置面试官') {
			try {
				const values = await form.validateFields();
				setConfirmLoading(true);
				let res = await addInterviewerAndProject({ ...formData });
				form.resetFields(); //重置表单数据
				setConfirmLoading(false);
				setVisible(false);
				getTaableData();
			} catch (error) {
				setConfirmLoading(false);
			}
		} else if (title === '修改面试官') {
			try {
				const values = await form.validateFields();
				setConfirmLoading(true);
				let res = await updateInterviewerAndProject({ ...formData, interviewerId });
				form.resetFields(); //重置表单数据
				setConfirmLoading(false);
				setVisible(false);
				getTaableData();
			} catch (error) {
				setConfirmLoading(false);
			}
		}
	};

	return (
		<Imodal title={title} visible={visible} confirmLoading={confirmLoading} handleOk={handleOk} handleCancel={handleCancel}>
			<EidtInterviewer form={form} type={title} projectIds={projectIds}></EidtInterviewer>
		</Imodal>
	);
};

export default ModalInterviewer;

/**
 * 配置和修改面试官弹框
 */
interface IeidtInterviewer {
	form: FormInstance;
	type?: string;
	projectIds: number[];
}
/**
 * 配置和修改面试官接口参数
 */
export interface IinterviewerProjectType {
	userId?: number;
	projectIds?: number[];
	status?: string;
	interviewerId?: string;
}
const EidtInterviewer: FC<IeidtInterviewer> = ({ form, type, projectIds }) => {
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
		setTitle('配置面试官');
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
			key: 1,
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
			key: 2,
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
			key: 3,
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
			key:4,
			span: 24,
			option: [
				{
					name: '正常',
					value: '0',
					key: 1
				},
				{
					name: '删除',
					value: '1',
					key:2
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
			key: 1,
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
		if (type === '配置面试官') {
			setstate(addFormList);
			form.setFieldsValue({ status: '0' });
		} else if (type === '修改面试官') {
			setstate(amendFormList);
			form.setFieldsValue({ projectIds });
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

/**
 * 添加面试官弹框
 */
interface IaddInterviewerInfo {
	form: FormInstance;
}
/**
 * 添加面试官接口参数
 */
export interface checkInterviewerExistForm {
	nickName: string;
	pinYinName: string;
	phone: string;
	email: string;
}
const AddInterviewerInfo: FC<IaddInterviewerInfo> = ({ form }) => {
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
			key: 1,
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
			key: 2,
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
			key: 3,
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
			key: 4,
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
