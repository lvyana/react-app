import React, { ReactNode } from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

type Icallback = () => void;
/**
 * Iconfirm
 * title 标题
 * callbackfn 接口回调函数
 * content 内容
 */
type onConfirmType = (title: string, callbackfn: Icallback, content?: ReactNode) => void;

const useIconfirm = () => {
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
				}).catch(() => console.log('Oops errors!'));
			},
			onCancel() {
				console.log('Cancel');
			}
		});
	};
	return { onConfirm };
};

export default useIconfirm;
