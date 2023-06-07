/**
 * @file 新增人员
 * @author ly
 * @createDate 2020年11月15日
 */
import React, { FC, useState } from 'react';
import { Form, FormInstance } from 'antd';
import Imodal, { OnOkOrCancelType } from '@/antdComponents/iModal';
import Iform from '@/antdComponents/iForm';
import type { FormInputType, FormSelectType } from '@/antdComponents/iForm/type';

interface AddPersonnelProps {
	addPersonnelOpen: boolean;
	addPersonnelLoading: boolean;
	onOkOrCancel: OnOkOrCancelType;
	form: FormInstance<FormParams>;
}

export interface FormParams {
	name: string;
	post: number;
}

type FormList = [FormInputType, FormSelectType<PostOptions>];
type PostOptions = {
	value: number;
	label: string;
};

const POST_OPTIONS: PostOptions[] = [
	{
		value: 0,
		label: '产品'
	},
	{
		value: 1,
		label: '前端'
	},
	{
		value: 2,
		label: '后端'
	},
	{
		value: 3,
		label: '测试'
	}
];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const AddPersonnel: FC<AddPersonnelProps> = ({ form, addPersonnelOpen, addPersonnelLoading, onOkOrCancel }) => {
	const formList: FormList = [
		{
			type: 'input',
			name: 'name',
			key: 1,
			label: '姓名',
			span: 12,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		},
		{
			type: 'select',
			name: 'post',
			key: 2,
			label: '岗位',
			comConfig: {
				option: POST_OPTIONS
			},
			span: 12,
			layout: {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 }
			}
		}
	];

	return (
		<Imodal title="新增人员" open={addPersonnelOpen} confirmLoading={addPersonnelLoading} onOkOrCancel={onOkOrCancel}>
			<Iform<FormList, FormParams> form={form} formList={formList}></Iform>
		</Imodal>
	);
};

export default AddPersonnel;
