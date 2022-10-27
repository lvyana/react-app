/**
 *	@name 实现弹框
 *	@user ly
 *  @data 日期：2020年4月27日
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
	handleOk: () => void;
	handleCancel: () => void;
	width?: string | number;
	maskClosable?: boolean;
	destroyOnClose?: boolean;
	children: ReactNode;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Imodal: FC<ImodalProps> = ({
	children,
	title,
	open,
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
