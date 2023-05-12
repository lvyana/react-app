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
 * @param icon 自定义图标
 * @param okText 确认按钮文字
 * @param okType 确认按钮类型
 * @param cancelText 取消按钮文字
 */
type ConfirmType = {
	title: string;
	callbackfn: Icallback;
	content?: ReactNode;
	icon?: ReactNode;
	okText?: string;
	okType?: LegacyButtonType;
	cancelText?: string;
};

/**
 * @method 异步弹框
 * @param ConfirmType
 * @returns void
 */
type onConfirmType = ({ title, callbackfn, content }: ConfirmType) => void;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iconfirm = () => {
	const onConfirm: onConfirmType = ({
		title,
		callbackfn,
		content,
		icon = <ExclamationCircleOutlined />,
		okText = '确定',
		okType = 'primary',
		cancelText = '取消'
	}) => {
		confirm({
			title: title,
			icon: icon,
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
