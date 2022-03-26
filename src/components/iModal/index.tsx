import React, { FC, ReactNode } from 'react';
import { Modal } from 'antd';

/**
 * 弹框
 * title 标题
 * visible 控制弹框打开关闭
 * confirmLoading 确定按钮loading
 * handleOk 确定事件回调
 * handleCancel 取消事件回调
 * width 宽度
 * maskClosable 点击弹框之外是否关闭
 * destroyOnClose 关闭时销毁 Modal 里的子元素
 */
export interface ImodalProps {
	title: string;
	visible: boolean;
	confirmLoading: boolean;
	handleOk: () => void;
	handleCancel: () => void;
	width?: string | number;
	maskClosable?: boolean;
	destroyOnClose?: boolean;
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
	maskClosable = false,
	destroyOnClose = true
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
				maskClosable={maskClosable}
				destroyOnClose={destroyOnClose}>
				{children}
			</Modal>
		</div>
	);
};

export default Imodal;
