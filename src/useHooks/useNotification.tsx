/**
 * @file notification hooks
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { useMemo } from 'react';
import { App, notification } from 'antd';
import { ArgsProps } from 'antd/es/notification/interface';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

/**
 * @method 通知提醒框
 * @param type 方法类型
 * @param config 参数
 * @returns void
 */
type OpenNotification = (type: NotificationType, config: ArgsProps) => void;

const CONFIG: Pick<ArgsProps, 'duration' | 'placement' | 'key'> = {
	duration: 1.5,
	placement: 'bottomRight'
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useNotification = () => {
	const [api, contextHolder] = notification.useNotification({ getContainer: () => document.body });

	const onNotification: OpenNotification = (type, config) => {
		api[type]({
			...CONFIG,
			...config
		});
	};
	return { onNotification, contextHolder };
};

export default useNotification;
