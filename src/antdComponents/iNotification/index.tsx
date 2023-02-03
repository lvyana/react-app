/**
 * @name 封装通知提醒框
 * @user ly
 * @date 2022年12月11日
 */
import React from 'react';
import { Button, notification, Space } from 'antd';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

type OpenNotificationParam = {
	type: NotificationType;
	message: string;
	description?: string;
	duration?: number;
};
type OpenNotification = ({ type, message, description }: OpenNotificationParam) => void;

const openNotification: OpenNotification = ({ type, message, description, duration = 1.5 }) => {
	const key = `open${Date.now()}`;
	notification[type]({
		message,
		description,
		key,
		duration,
		placement: 'bottomRight'
	});
};

export default openNotification;
