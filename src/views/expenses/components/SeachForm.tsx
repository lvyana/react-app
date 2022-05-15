import React, { FC } from 'react';
import Iform, { FORMITEM, FormInstance } from '@/components/iForm';

interface Iprops {
	form: FormInstance;
	onFinish: () => void;
}
const SeachForm: FC<Iprops> = ({ form, onFinish }) => {
	const formList: FORMITEM[] = [
		{
			type: 'input',
			name: 'name',
			label: '名称',
			key: 1,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			},
			span: 6
		},
		{
			type: 'input',
			name: 'age',
			label: '年龄',
			key: 2,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			},
			span: 6
		},
		{
			type: 'button',
			name: 'button',
			key: 14,
			span: 12,
			option: [
				{ type: 'submit', name: '搜索' },
				{ type: 'onReset', name: '重置' }
			],
			style: { marginLeft: '10px' }
		}
	];

	return (
		<div>
			<Iform form={form} formList={formList} onFinish={onFinish} setReset={onFinish}></Iform>
		</div>
	);
};

export default SeachForm;
