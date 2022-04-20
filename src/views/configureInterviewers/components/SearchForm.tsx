import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Icard from '@/components/iCard';
import Iform, { FormInstance } from '@/components/iForm';
import useFormKeepAlive from '@/useHooks/useFormKeepAlive';

interface IsearchForm {
	name: string;
	select: string;
	danwei: string;
}
// 表单数据
export interface IsearchFormType {
	nickName: string;
	userName: string;
	phone: string;
	projectId: string;
	pageSize?: number;
	pageNum?: number;
}
interface Iprops {
	form: FormInstance;
	getTaableData: () => void;
}
const SearchForm: FC<Iprops> = ({ form, getTaableData }) => {
	const projectData = useSelector((state: RootState) => state.configureInterviewers.projectData);
	console.log(projectData);

	const [formData, setFormData] = useFormKeepAlive();
	console.log(formData, setFormData, 123321);

	// 参数
	const formList = [
		{
			type: 'input',
			name: 'nickName',
			label: '姓名',
			rules: [],
			key: 1,
			span: 5,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'input',
			name: 'userName',
			label: '登录账号',
			rules: [],
			key: 2,
			span: 5,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'input',
			name: 'phone',
			label: '手机号码',
			rules: [],
			key: 3,
			span: 5,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'select',
			name: 'projectId',
			label: '关联项目',
			rules: [],
			key: 4,
			span: 5,
			fieldNames: {
				value: 'id',
				label: 'projectName'
			},
			option: projectData,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},

		{
			type: 'button',
			name: 'button',
			option: [
				{ type: 'submit', name: '搜索' },
				{ type: 'onReset', name: '重置' }
			],
			key: 5,
			span: 4,
			style: { float: 'right' }
		}
	];
	useEffect(() => {
		form.setFieldsValue(formData);
	}, []);
	const onFinish = () => {
		getTaableData();
		setFormData(form.getFieldsValue());
	};
	return (
		<Icard styles={{ padding: '16px 16px 0' }}>
			<Iform formList={formList} form={form} onFinish={onFinish} setReset={onFinish} />
		</Icard>
	);
};

export default SearchForm;
