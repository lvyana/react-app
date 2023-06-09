/**
 * @file message hooks
 * @author ly
 * @createDate 2023年6月9日
 */
import React from 'react';
import { message } from 'antd';
import { ArgsProps } from 'antd/es/message';

type MessageParam = {
	config: ArgsProps;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useMessage = () => {
	const [messageApi, contextHolder] = message.useMessage();

	const onSuccess = ({ config }: MessageParam) => {
		messageApi.open(config);
	};

	return { onSuccess, contextHolder };
};

export default useMessage;
