/**
 * @file 实现查看信息弹框
 * @author ly
 * @createDate 日期：2020年4月27日
 */
import React, { FC, ReactNode } from 'react';
import { Modal } from 'antd';

/**
 * @param children 传入内容
 * @param open 打开 关闭
 * @param title 标题
 * @param handleOk 确定事件
 * @param handleCancel 关闭事件
 * @param footer 自定义按钮
 * @param width 宽度
 * @param destroyOnClose 关闭时销毁 Modal 里的子元素
 */
interface ILookModalProps {
	children: ReactNode;
	open: boolean;
	title: string;
	handleOk?: () => void;
	handleCancel?: () => void;
	footer?: ReactNode[];
	width?: string | number;
	destroyOnClose?: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ILookModal: FC<ILookModalProps> = ({
	children,
	open,
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
				open={open}
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
