import React, { FC, useState } from 'react';
import { Form } from 'antd';
import Ifrom, { FormInstance } from '@/components/iForm';
import Imodal, { ImodalProps } from '@/components/iModal';
import getKey from '@/utils/onlyKey';
import { FORMITEM } from '@/components/iForm/type';

/**
 * 拒绝面试弹窗
 * visibleRefuse 控制弹窗开光变量
 * setVisibleRefuse 更改弹窗开光变量
 */
interface Iprops {
	visibleRefuse: boolean;
	setVisibleRefuse: React.Dispatch<React.SetStateAction<boolean>>;
}
const Refuse: FC<Iprops> = ({ visibleRefuse, setVisibleRefuse }) => {
	//表单
	const [form] = Form.useForm();

	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		try {
			// 校验表单
			const values = await form.validateFields();
			setConfirmLoading(true);
			setTimeout(() => {
				form.resetFields(); //重置表单数据
				setConfirmLoading(false);
				setVisibleRefuse(false);
			}, 2000);
		} catch (error) {}
	};

	const handleCancel = () => {
		form.resetFields(); //重置表单数据
		setVisibleRefuse(false);
	};
	return (
		<div>
			<Imodal
				title="拒绝面试"
				visible={visibleRefuse}
				confirmLoading={confirmLoading}
				handleOk={handleOk}
				handleCancel={handleCancel}
				width="600px">
				<RefuseForm form={form}></RefuseForm>
			</Imodal>
		</div>
	);
};

interface IrefuseFormProps {
	form: FormInstance;
}
const RefuseForm: FC<IrefuseFormProps> = ({ form }) => {
	// 参数
	const stateForm = [
		{
			type: 'textArea',
			name: 'textArea',
			label: '拒绝理由',
			rules: [{ required: true, message: '请输入拒绝理由' }],
			key: getKey(),
			span: 24,
			maxLength: 150,
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		}
	];
	const [state, setstate] = useState<FORMITEM[]>(stateForm);
	return <Ifrom formList={state} form={form} />;
};
export default Refuse;
