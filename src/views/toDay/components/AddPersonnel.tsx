/**
 *	@name 新增人员
 *	@user ly
 *  @data 日期：2020年11月15日
 */
import React, { FC, useState } from 'react';
import { Form } from 'antd';
import Imodal, { OnOkOrCancelType } from '@/components/iModal';
import Iform, { FormItemParam } from '@/components/iForm';

interface AddPersonnelProps {
	addPersonnelOpen: boolean;
	addPersonnelLoading: boolean;
	onOkOrCancel: OnOkOrCancelType;
}

interface FormParams {
	name: string;
}

type FormList = [FormItemParam<never, never>];
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const AddPersonnel: FC<AddPersonnelProps> = ({ addPersonnelOpen, addPersonnelLoading, onOkOrCancel }) => {
	const [form] = Form.useForm<FormParams>();

	const formList: FormList = [
		{
			type: 'input',
			name: 'name',
			key: 1,
			label: '姓名',
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
