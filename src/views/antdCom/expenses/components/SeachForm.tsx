/**
 * @file 搜索组件
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import IsearchForm, { FormInstance } from '@/antdComponents/iSearchForm';
import { useHooksStatus } from '@/useHooks/usePublicApi';
import { statusDataProps } from '@/api/publicApi';
import type { ExpensesFormParams } from '../index';
import type { FormInputType, FormSelectType, FormButtonType, FinishType } from '@/antdComponents/iForm/type';

export type ButtonType = 'subimt' | 'onReset';

/**
 * @param form 表单实例
 * @param onFinish
 */
interface Iprops {
	form: FormInstance<ExpensesFormParams>;
	onFinish: FinishType<ButtonType>;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const SeachForm: FC<Iprops> = ({ form, onFinish }) => {
	const { statusData } = useHooksStatus();

	const formList: [FormInputType, FormInputType, FormSelectType<statusDataProps>, FormButtonType<ButtonType>] = [
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
				{ btType: 'primary', type: 'subimt', name: '搜索', iconFont: 'icon-sousuo' },
				{ type: 'onReset', name: '重置', iconFont: 'icon-zhongzhi', className: 'ml-1' }
			],
			style: { marginLeft: '10px' },
			onClick: onFinish
		}
	];

	return <IsearchForm form={form} formList={formList}></IsearchForm>;
};

export default SeachForm;
