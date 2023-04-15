/**
 * @file 登录
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification, Tabs, Row, Col, Form } from 'antd';
import { getRemember, setRemember, setToken } from '@/utils/storage';
import Account from './account';
import Phone from './phone';
import styles from './index.module.scss';
import { decrypt, encrypt } from '@/utils/jsencrypt';
import { setUserName, setPassword, getUserName, getPassword } from '@/utils/storage';
import openNotification from '@/antdComponents/iNotification';

/**
 * @param userName 用户名
 * @param password 密码
 * @param remember 记住密码
 */
export interface FromType {
	userName: string | undefined;
	password: string | undefined;
	remember: boolean | undefined;
	// phone?: string;
	// code?: string;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Login = () => {
	const [accountForm] = Form.useForm<FromType>();

	useEffect(() => {
		// console.log(encrypt('123'));
		const remember = Boolean(getRemember());

		if (remember === true) {
			const jsencryptUserName = getUserName();
			const jsencryptPassword = getPassword();
			const userName = jsencryptUserName && decrypt(jsencryptUserName);
			const password = jsencryptPassword && decrypt(jsencryptPassword);
			accountForm.setFieldsValue({ userName, password, remember });
		}
	}, []);

	const navigate = useNavigate();
	// 登录弹框
	const openNotificationFn = () => {
		const key = `open${Date.now()}`;
		notification.open({
			message: '欢迎登录',
			description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
			key,
			duration: 1.5,
			placement: 'bottomRight'
		});
	};

	const setUserInfo = (userName: FromType['userName'], password: FromType['password'], remember: FromType['remember']) => {
		const jsencryptUserName = userName && encrypt(userName);
		const jsencryptPassword = password && encrypt(password);
		setUserName(jsencryptUserName);
		setPassword(jsencryptPassword);
		if (remember) {
			setRemember(remember.toString());
		}
		let { token } = { token: '11' };
		// 存token
		setToken(token);
	};
	const onFinish = async (values: FromType) => {
		const { password, userName, remember } = values;
		if (userName === 'admin' && password === '123456') {
			setUserInfo(userName, password, remember);
			navigate('/');
			openNotification({
				type: 'info',
				message: '欢迎登录',
				description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).'
			});
			return;
		} else if (userName === 'today' && password === '123456') {
			setUserInfo(userName, password, remember);
			navigate('/today');
			openNotification({
				type: 'info',
				message: '欢迎登录',
				description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).'
			});
			return;
		}
		openNotification({ type: 'error', message: '密码错误' });
	};

	const items = [
		{ label: '账号登录', key: '1', children: <Account form={accountForm} onFinish={onFinish} /> },
		{ label: '手机号登录', key: '2', children: <Phone onFinish={onFinish} /> }
	];
	return (
		<div className={styles.login}>
			{/* <Row justify="center" style={{ height: '100%' }}>
				<Col flex="300px">
					<Tabs
						items={items}
						className={styles.loginAnimate}
						defaultActiveKey="1"
						centered
						style={{
							width: '100%',
							background: 'rgba(16 18 27 / 40%)',
							backdropFilter: 'blur(10px)',
							padding: '0 20px',
							borderRadius: '8px'
						}}></Tabs>
				</Col>
			</Row> */}
			<Account form={accountForm} onFinish={onFinish} />
		</div>
	);
};
export default Login;
