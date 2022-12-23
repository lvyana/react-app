import React, { FC } from 'react';
import IsearchForm, { FormInstance, FormItemParam } from '@/antdComponents/iSearchForm';
import { useHooksStatus } from '@/useHooks/usePublicApi';
import { statusDataProps } from '@/api/publicApi';
import { IformButton } from '@/antdComponents/iForm/components/Ibutton';
import { TabelDataParams } from '../service';

interface Iprops {
	form: FormInstance<Omit<TabelDataParams, 'pageSize' | 'pageNum '>>;
	onFinish: (type?: string) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const SeachForm: FC<Iprops> = ({ form, onFinish }) => {
	const { statusData } = useHooksStatus();

	const formList: [
		FormItemParam<never, never>,
		FormItemParam<never, never>,
		FormItemParam<statusDataProps, never>,
		FormItemParam<IformButton, never>
	] = [
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
				{ BTtype: 'primary', type: 'primary', name: '搜索', iconType: 'icon-sousuo' },
				{ type: 'onReset', name: '重置', iconType: 'icon-zhongzhi' }
			],
			style: { marginLeft: '10px' }
		}
	];

	return <IsearchForm form={form} formList={formList} onFinish={onFinish}></IsearchForm>;
};

export default SeachForm;
