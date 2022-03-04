import React, { FC, ReactNode } from 'react';
import { Modal } from 'antd';

export interface ImodalProps {
	title: string;
	visible: boolean;
	confirmLoading: boolean;
	handleOk: () => void;
	handleCancel: () => void;
	width?: string | number;
	maskClosable?: boolean;
}
interface Iprops extends ImodalProps {
	children: ReactNode;
}
const Imodal: FC<Iprops> = ({
	children,
	title,
	visible,
	handleOk,
	confirmLoading,
	handleCancel,
	width = '500px',
	maskClosable = false
}) => {
	return (
		<div>
			<Modal
				title={title}
				visible={visible}
				confirmLoading={confirmLoading}
				onOk={handleOk}
				onCancel={handleCancel}
				width={width}
				maskClosable={maskClosable}>
				{children}
			</Modal>
		</div>
	);
};

export default Imodal;
