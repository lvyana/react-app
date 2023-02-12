/**
 * @file 账号登录
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
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
	const [_, dispatch] = useState('');

	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	useLayoutEffect(() => {
		if (username.current && password.current) {
			username.current.value = 'admin';
			password.current.value = '123456';
		}
	}, []);

	const onSubmit = () => {
		onFinish({
			userName: username.current?.value,
			password: password.current?.value,
			remember: false
		});
	};
	return (
		// <Form form={form} onFinish={onFinish}>
		// 	<Form.Item name="userName" rules={[{ required: true, message: '请输入账号!' }]}>
		// 		<Input prefix={<UserOutlined />} placeholder="账号" />
		// 	</Form.Item>

		// 	<Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
		// 		<Input.Password prefix={<LockOutlined />} placeholder="密码" />
		// 	</Form.Item>

		// 	<Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 16 }}>
		// 		<Checkbox>记住密码</Checkbox>
		// 	</Form.Item>

		// 	<Form.Item wrapperCol={{ span: 24 }}>
		// 		<Button type="primary" htmlType="submit" style={{ width: '100%' }} className={styles.LogonBtn}>
		// 			Submit
		// 		</Button>
		// 	</Form.Item>
		// </Form>
		<div className={styles['login-box']}>
			<h2>Login</h2>
			<form>
				<div className={styles['user-box']}>
					<input ref={username} type="text" name="" required id="Username" autoComplete="on" />
					<label htmlFor="Username">Username</label>
				</div>
				<div className={styles['user-box']}>
					<input ref={password} type="password" name="" required id="Password" autoComplete="on" />
					<label htmlFor="Password">Password</label>
				</div>
				<div className="text-right">
					<a href="#" onClick={onSubmit}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Submit
					</a>
				</div>
			</form>
		</div>
	);
};
export default Account;
