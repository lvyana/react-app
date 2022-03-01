import React, { FC, ReactNode } from 'react';
import { Modal } from 'antd';

interface Iprops {
	children: ReactNode;
	visible: boolean;
	title: string;
	handleOk?: () => void;
	handleCancel?: () => void;
	footer?: ReactNode[];
	width?: string;
}
const ILookModal: FC<Iprops> = ({ children, visible, title, handleOk, handleCancel, footer = [], width = '500px' }) => {
	return (
		<div>
			<Modal visible={visible} title={title} onOk={handleOk} onCancel={handleCancel} footer={footer} width={width}>
				{children}
			</Modal>
		</div>
	);
};

export default ILookModal;
