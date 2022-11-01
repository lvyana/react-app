import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification, Tabs, Row, Col, Form } from 'antd';
import { getRemember, setRemember, setToken } from '@/utils/storage';
import Account from './account';
import Phone from './phone';
import styles from './index.module.less';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { login } from './service';
import { decrypt, encrypt } from '@/utils/jsencrypt';
import { setUserName, setPassword, getUserName, getPassword } from '@/utils/storage';
import openNotificationWithIcon from '@/components/iNotification';
const { TabPane } = Tabs;

/**
 * @return 登录
 */
export interface FromType {
	userName: string | null;
	password: string | null;
	remember: boolean | null;
	// phone?: string;
	// code?: string;
}

const Login = () => {
	const [accountForm] = Form.useForm<FromType>();

	useEffect(() => {
		// console.log(encrypt('123'));
		const remember = Boolean(getRemember());
		console.log(remember);

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
	const openNotification = () => {
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
			navigate('/antd/expenses');
			openNotification();
			return;
		} else if (userName === 'today' && password === '123456') {
			setUserInfo(userName, password, remember);
			navigate('/today');
			openNotification();
			return;
		}
		openNotificationWithIcon('error', '密码错误');
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<FromType>) => {};

	return (
		<div className={styles.login}>
			<Row justify="center" style={{ height: '100%' }}>
				<Col flex="300px">
					<Tabs
						className={styles.loginAnimate}
						defaultActiveKey="1"
						centered
						style={{
							width: '100%',
							background: 'rgba(16 18 27 / 40%)',
							backdropFilter: 'blur(10px)',
							padding: '0 20px',
							borderRadius: '8px'
						}}>
						<TabPane tab="账号登录" key="1">
							<Account form={accountForm} onFinish={onFinish} onFinishFailed={onFinishFailed} />
						</TabPane>
						<TabPane tab="手机号登录" key="2">
							<Phone onFinish={onFinish} onFinishFailed={onFinishFailed} />
						</TabPane>
					</Tabs>
				</Col>
			</Row>
		</div>
	);
};
export default Login;
