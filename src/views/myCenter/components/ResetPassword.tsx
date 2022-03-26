import React from 'react';
import { Form, Input, Button } from 'antd';
import { Rule, ValidateErrorEntity } from 'rc-field-form/lib/interface';

interface FormType {
	userName: string;
	passWord: string;
}
const ResetPassword = () => {
	const [form] = Form.useForm();
	const onFinish = (values: FormType) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<FormType>) => {
		console.log('Failed:', errorInfo);
	};

	const confirPassWord = (rule: Rule, value: string | number): Promise<void> => {
		if (!value || value === form.getFieldValue('passWord')) {
			return Promise.resolve();
		} else {
			return Promise.reject(new Error('密码不一致'));
		}
	};
	return (
		<Form form={form} labelCol={{ span: 4, offset: 4 }} wrapperCol={{ span: 12 }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
			<Form.Item label="用户名" name="userName" rules={[{ required: true, message: 'Please input your username!' }]}>
				<Input />
			</Form.Item>

			<Form.Item label="密码" name="passWord" rules={[{ required: true, message: 'Please input your password!' }]}>
				<Input.Password />
			</Form.Item>

			<Form.Item
				label="确认密码"
				name="confirmPassWord"
				rules={[
					{ required: true, message: 'Please input your confirm password!' },
					{
						validator: confirPassWord
					}
				]}>
				<Input.Password />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ResetPassword;
