/**
 * @file 通知提醒框
 * @author ly
 * @createDate 2022年12月11日
 */
import React from 'react';
import { App } from 'antd';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

/**
 * @param type notification方法
 * @param message 通知提醒标题
 * @param description 通知提醒内容
 * @param duration 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭
 */
type OpenNotificationParam = {
	type: NotificationType;
	message: string;
	description?: string;
	duration?: number;
};

/**
 * @method 通知提醒框
 * @param OpenNotificationParam 参数
 * @returns void
 */
type OpenNotification = ({ type, message, description, duration }: OpenNotificationParam) => void;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useNotification = () => {
	const { notification } = App.useApp();

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

	return { openNotification };
};

export default useNotification;
