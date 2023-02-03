/**
 * @file 修改用户信息
 * @author ly
 * @createDate 2022年1月3日
 */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { Rule, ValidateErrorEntity } from 'rc-field-form/lib/interface';

interface FormType {
	userName: string;
	passWord: string;
}
const ResetPassword = () => {
	const location = useLocation();

	const [form] = Form.useForm();

	useEffect(() => {
		if (location.state) {
			form.setFieldsValue({ userName: (location.state as { name: string })?.name });
		} else {
			form.setFieldsValue({ userName: undefined });
		}
	}, [form, location]);

	const onFinish = (values: FormType) => {};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<FormType>) => {};

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
