import React, { FC, ReactNode } from 'react';
import { Modal } from 'antd';

interface Iprops {
	children: ReactNode;
	visible: boolean;
	title: string;
	handleOk?: () => void;
	handleCancel?: () => void;
	footer?: ReactNode[];
}
const ILookModal: FC<Iprops> = ({ children, visible, title, handleOk, handleCancel, footer = [] }) => {
	return (
		<div>
			<Modal visible={visible} title={title} onOk={handleOk} onCancel={handleCancel} footer={footer}>
				{children}
			</Modal>
		</div>
	);
};

export default ILookModal;
