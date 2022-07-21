import React, { FC, ReactNode } from 'react';
import { Modal } from 'antd';

/**
 * 查看信息弹框
 * children 传入内容
 * visible 打开 关闭
 * title 标题
 * handleOk 确定事件
 * handleCancel 关闭事件
 * footer 自定义按钮
 * width 宽度
 * destroyOnClose 关闭时销毁 Modal 里的子元素
 */
interface Iprops {
	children: ReactNode;
	visible: boolean;
	title: string;
	handleOk?: () => void;
	handleCancel?: () => void;
	footer?: ReactNode[];
	width?: string | number;
	destroyOnClose?: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ILookModal: FC<Iprops> = ({
	children,
	visible,
	title,
	handleOk,
	handleCancel,
	footer = [],
	width = '500px',
	destroyOnClose = true
}) => {
	return (
		<div>
			<Modal
				visible={visible}
				title={title}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={footer}
				width={width}
				destroyOnClose={destroyOnClose}>
				{children}
			</Modal>
		</div>
	);
};

export default ILookModal;
