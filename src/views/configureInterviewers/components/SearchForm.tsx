import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Icard from '@/components/iCard';
import Iform, { FormInstance } from '@/components/iForm';
import { Form } from 'antd';
import getKey from '@/utils/onlyKey';

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

	// 参数
	const formList = [
		{
			type: 'input',
			name: 'nickName',
			label: '姓名',
			rules: [],
			key: getKey(),
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
			key: getKey(),
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
			key: getKey(),
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
			key: getKey(),
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
			key: getKey(),
			span: 4,
			style: { float: 'right' }
		}
	];

	const onFinish = (value: IsearchForm) => {
		console.log(value);
		getTaableData();
	};
	return (
		<Icard styles={{ padding: '16px 16px 0' }}>
			<Iform formList={formList} form={form} onFinish={onFinish} />
		</Icard>
	);
};

export default SearchForm;
