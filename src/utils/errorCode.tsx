/**
 * @file 错误提示
 * @author ly
 * @createDate 2020年4月27日
 */
import React from 'react';
import { Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { clearToken } from './cookie';

const { confirm } = Modal;

export const errorCode = (code: number | string) => {
	let codeMsg;
	if (code === 401) {
		codeMsg = '登陆已过期,请重新登录!';
	} else if (code === 404) {
		codeMsg = '当前操作没有权限!';
	} else if (code === 'default') {
		codeMsg = '系统正在打盹，请稍后重试!';
	}
	return codeMsg;
};

export const messages = (type: string, msg: string) => {
	if (type === 'error') {
		return message[type](msg);
	}
	if (type === 'success') {
		return message[type](msg);
	}
	if (type === 'info') {
		return message[type](msg);
	}
	if (type === 'warning') {
		return message[type](msg);
	}
	if (type === 'loading') {
		return message[type](msg);
	}
};

// 登录失效
let isModal = true;
export const logonFailure = () => {
	if (isModal === true) {
		isModal = false;
		confirm({
			title: '系统提示',
			icon: <ExclamationCircleOutlined />,
			content: '登录状态已过期，您可以继续留在该页面，或者重新登录',
			okText: '重新登陆',
			onOk() {
				clearToken();
				// window.location.href = '/login';
				isModal = true;
			},
			onCancel() {
				isModal = true;
			}
		});
	}
};
