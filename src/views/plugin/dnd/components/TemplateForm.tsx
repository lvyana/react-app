/**
 * @name 表单示例
 * @user ly
 * @date 2022年12月18日
 */
import React, { FC, useContext } from 'react';
import Iform from '@/antdComponents/iForm';
import Imodal, { OnOkOrCancelType } from '@/antdComponents/iModal';
import { Context } from '../context';
import { useFormData } from '../useHooks';
import type { FormInstance } from 'antd';

type TemplateFormProps = {
	open: boolean;
	onOkOrCancel: OnOkOrCancelType;
	confirmLoading: boolean;
	form: FormInstance;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const TemplateForm: FC<TemplateFormProps> = ({ form, open, onOkOrCancel, confirmLoading }) => {
	const context = useContext(Context);

	const { getFormData } = useFormData();

	return (
		<Imodal width={800} title={'示例'} open={open} onOkOrCancel={onOkOrCancel} confirmLoading={confirmLoading}>
			<Iform
				form={form}
				formList={
					context?.state.formList.map((item) => {
						return getFormData(item);
					}) || []
				}
			/>
		</Imodal>
	);
};

export default TemplateForm;
