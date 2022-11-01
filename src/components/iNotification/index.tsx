import React from 'react';
import { Button, notification, Space } from 'antd';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

type OpenNotificationWithIconFun = (type: NotificationType, message: string, description?: string) => void;

const openNotificationWithIcon: OpenNotificationWithIconFun = (type, message, description) => {
	notification[type]({
		message,
		description
	});
};

export default openNotificationWithIcon;
