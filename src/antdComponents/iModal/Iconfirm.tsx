/**
 * @file 实现弹框异步加载
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { ReactNode } from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import type { LegacyButtonType } from 'antd/es/button/button';
const { confirm } = Modal;

export type Icallback = () => Promise<void>;

/**
 * @param title 标题
 * @param callbackfn 接口回调函数
 * @param content 内容
 */
type ConfirmType = {
	title: string;
	callbackfn: Icallback;
	content?: ReactNode;
	okText?: string;
	okType?: LegacyButtonType;
	cancelText?: string;
};

/**
 * @method 异步弹框
 * @param ConfirmType
 */
type onConfirmType = ({ title, callbackfn, content }: ConfirmType) => void;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iconfirm = () => {
	const onConfirm: onConfirmType = ({ title, callbackfn, content, okText = '确定', okType = 'primary', cancelText = '取消' }) => {
		confirm({
			title: title,
			icon: <ExclamationCircleOutlined />,
			content: content,
			okText,
			okType,
			cancelText,
			onOk() {
				return new Promise<void>(async (resolve, reject) => {
					try {
						await callbackfn();
						resolve();
					} catch (error) {
						reject();
					}
				}).catch(() => {});
			},
			onCancel() {}
		});
	};
	return { onConfirm };
};

export default Iconfirm;
