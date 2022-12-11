/**
 * @name 手机号登录
 * @user ly
 * @date 2022年12月11日
 */
import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Checkbox } from 'antd';
import { MobileOutlined, LockOutlined } from '@ant-design/icons';
import { FromType } from './index';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import styles from './index.module.scss';

interface methodProps {
	onFinish: (value: FromType) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Phone = ({ onFinish }: methodProps) => {
	// 按钮状态
	const [disabled, setDisabled] = useState(false);
	let timer: NodeJS.Timer;
	const [verificationName, setVerificationName] = useState('获取验证码');
	const verificationCode = () => {
		setDisabled(true);
		countDown();
	};
	// 倒计时
	const countDown = () => {
		let time = 5;
		timer = setInterval(() => {
			if (time === 0) {
				clearInterval(timer);
				setVerificationName('获取验证码');
				setDisabled(false);
				return;
			}
			setVerificationName(time + ' 获取验证码');
			time--;
		}, 1000);
	};
	return (
		<Form onFinish={onFinish}>
			<Form.Item name="phone" rules={[{ required: true, message: '请输入手机号!' }]}>
				<Input prefix={<MobileOutlined />} placeholder="手机号" />
			</Form.Item>
			<Row style={{ height: '100%' }} justify="space-between">
				<Col span={14}>
					<Form.Item name="code" rules={[{ required: true, message: '请输入验证码!' }]}>
						<Input prefix={<LockOutlined />} placeholder="验证码" />
					</Form.Item>
				</Col>
				{/* <Col span={9}> */}
				<Button onClick={verificationCode} disabled={disabled}>
					{verificationName}
				</Button>
				{/* </Col> */}
			</Row>
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
export default Phone;
