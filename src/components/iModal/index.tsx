import React, { FC, ReactNode } from 'react';
import { Modal } from 'antd';

export interface ImodalProps {
	title: string;
	visible: boolean;
	confirmLoading: boolean;
	handleOk: () => void;
	handleCancel: () => void;
}
interface Iprops extends ImodalProps {
	children: ReactNode;
}
const Imodal: FC<Iprops> = ({ children, title, visible, handleOk, confirmLoading, handleCancel }) => {
	return (
		<div>
			<Modal title={title} visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
				{children}
			</Modal>
		</div>
	);
};

export default Imodal;
