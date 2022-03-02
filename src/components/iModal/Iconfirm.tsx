import React, { ReactNode } from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

type Icallback = () => void;
const useIconfirm = () => {
	const onConfirm = (title: string, callbackfn: Icallback, content?: ReactNode) => {
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
