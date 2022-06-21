import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification, Tabs, Row, Col } from 'antd';
import { setToken } from '@/utils/storage';
import Account from './account';
import Phone from './phone';
import styles from './index.module.less';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { login } from './service';
const { TabPane } = Tabs;

export interface FromType {
	userName?: string;
	password?: string;
	phone?: string;
	code?: string;
}
const Login = () => {
	const navigate = useNavigate();
	// 登录弹框
	const openNotification = () => {
		const key = `open${Date.now()}`;
		notification.open({
			message: '欢迎登录',
			description:
				'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
			key,
			duration: 1.5,
			placement: 'bottomRight'
		});
	};
	const onFinish = async (values: FromType) => {
		let { token } = { token: '11' };
		// 存token
		setToken(token);
		navigate('/expenses');
		openNotification();
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<FromType>) => {

	};

	return (
		<div className={styles.login}>
			<Row justify="center" style={{ height: '100%' }}>
				<Col flex="300px">
					<Tabs
						className={styles.loginAnimate}
						defaultActiveKey="1"
						centered
						style={{
							background: 'rgba(16 18 27 / 40%)',
							backdropFilter: 'blur(10px)',
							padding: '0 20px',
							borderRadius: '8px'
						}}>
						<TabPane tab="账号登录" key="1">
							<Account onFinish={onFinish} onFinishFailed={onFinishFailed} />
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
