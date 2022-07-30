/**
 *	@name 实现弹框异步加载
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { ReactNode } from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

export type Icallback = () => Promise<void>;
/**
 * @param title 标题
 * @param callbackfn 接口回调函数
 * @param content 内容
 */
type onConfirmType = (title: string, callbackfn: Icallback, content?: ReactNode) => void;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iconfirm = () => {
	const onConfirm: onConfirmType = (title, callbackfn, content) => {
		confirm({
			title: title,
			icon: <ExclamationCircleOutlined />,
			content: content,
			okText: '确认',
			okType: 'danger',
			cancelText: '取消',
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
