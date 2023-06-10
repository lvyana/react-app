/**
 * @file message hooks
 * @author ly
 * @createDate 2023年6月9日
 */
import React from 'react';
import { message } from 'antd';
import { ArgsProps } from 'antd/es/message';

export type MessageParam = (config: ArgsProps) => void;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useMessage = () => {
	const [messageApi, contextMessage] = message.useMessage();

	const onMessage: MessageParam = (config) => {
		messageApi.open(config);
	};

	return { onMessage, contextMessage };
};

export default useMessage;
