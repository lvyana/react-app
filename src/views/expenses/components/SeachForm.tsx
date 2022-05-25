import React, { FC } from 'react';
import Iform, { FORMITEM, FormInstance } from '@/components/iForm';
import AnimateComponent from '@/components/animateComponent';
interface Iprops {
	form: FormInstance;
	onFinish: (type?: string) => void;
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
				{ BTtype: 'primary', type: 'primary', name: '搜索', iconType: 'icon-sousuo1' },
				{ type: 'onReset', name: '重置', iconType: 'icon-zhongzhi-' }
			],
			style: { marginLeft: '10px' }
		}
	];

	return (
		<AnimateComponent>
			<Iform form={form} formList={formList} onFinish={onFinish}></Iform>
		</AnimateComponent>
	);
};

export default SeachForm;
