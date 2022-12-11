/**
 * @name 账号登录
 * @user ly
 * @date 2022年12月11日
 */
import React, { FC, useEffect } from 'react';
import { Form, Input, Button, Checkbox, FormInstance } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { FromType } from './index';
import styles from './index.module.scss';

interface AccountProps {
	onFinish: (value: FromType) => void;
	form: FormInstance<FromType>;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Account: FC<AccountProps> = ({ onFinish, form }) => {
	// useEffect(() => {
	// 	form.setFieldsValue({ userName: 'admin', password: '123456' });
	// }, []);

	return (
		<Form form={form} onFinish={onFinish}>
			<Form.Item name="userName" rules={[{ required: true, message: '请输入账号!' }]}>
				<Input prefix={<UserOutlined />} placeholder="账号" />
			</Form.Item>

			<Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
				<Input.Password prefix={<LockOutlined />} placeholder="密码" />
			</Form.Item>

			<Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 16 }}>
				<Checkbox>记住密码</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ span: 24 }}>
				<Button type="primary" htmlType="submit" style={{ width: '100%' }} className={styles.LogonBtn}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default Account;
