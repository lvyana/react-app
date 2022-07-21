import React, { FC } from 'react';
import Iform, { FormItemParam, FormInstance } from '@/components/iForm';
import AnimateComponent from '@/components/animateComponent';
import { useHooksStatus } from '@/api/usePublicApi';
interface Iprops {
	form: FormInstance;
	onFinish: (type?: string) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const SeachForm: FC<Iprops> = ({ form, onFinish }) => {
	const { statusData } = useHooksStatus();

	const formList: FormItemParam[] = [
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
			type: 'select',
			name: 'status',
			label: '状态',
			option: statusData,
			fieldNames: { label: 'name', value: 'status' },
			key: 3,
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
			span: 6,
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
