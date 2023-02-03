/**
 * @file 实现弹框
 * @author ly
 * @createDate 日期：2020年4月27日
 */
import React, { FC, ReactNode } from 'react';
import { Modal } from 'antd';

/**
 * @param title 标题
 * @param open 控制弹框打开关闭
 * @param confirmLoading 确定按钮loading
 * @param handleOk 确定事件回调
 * @param handleCancel 取消事件回调
 * @param width 宽度
 * @param maskClosable 点击弹框之外是否关闭
 * @param destroyOnClose 关闭时销毁 Modal 里的子元素
 */
export interface ImodalProps {
	title: string;
	open: boolean;
	confirmLoading: boolean;
	onOkOrCancel: OnOkOrCancelType;
	width?: string | number;
	maskClosable?: boolean;
	destroyOnClose?: boolean;
	children: ReactNode;
}

/**
 * @method 确认、取消事件
 * @param type 事件类型标识
 */
export type OnOkOrCancelType = (type: 'ok' | 'cancel') => void;

const OK = 'ok';
const CANCEL = 'cancel';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Imodal: FC<ImodalProps> = ({
	children,
	title,
	open,
	confirmLoading,
	onOkOrCancel,
	width = '500px',
	maskClosable = false,
	destroyOnClose = true
}) => {
	const handleOk = () => {
		onOkOrCancel(OK);
	};
	const handleCancel = () => {
		onOkOrCancel(CANCEL);
	};
	return (
		<div>
			<Modal
				title={title}
				open={open}
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
