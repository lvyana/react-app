/**
 * @file 抽屉
 * @author ly
 * @createDate 2020年11月15日
 */
import React, { FC } from 'react';
import { Drawer } from 'antd';

type PlacementType = 'top' | 'right' | 'bottom' | 'left';
/**
 * 抽屉props
 * @param children 子组件
 * @param open 开关
 * @param title 标题
 * @param width 宽度
 * @param maskClosable 点击蒙层是否允许关闭
 * @param onClose 关闭
 * @param placement 出现方向
 */
interface IdrawerProps {
	children: React.ReactNode;
	open: boolean;
	title: React.ReactNode;
	width?: number | string;
	maskClosable?: boolean;
	onClose: () => void;
	placement?: PlacementType;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Idrawer: FC<IdrawerProps> = ({ children, open, title, width = 378, maskClosable = false, onClose, placement = 'right' }) => {
	return (
		<Drawer title={title} width={width} maskClosable={maskClosable} placement={placement} onClose={onClose} open={open}>
			{children}
		</Drawer>
	);
};

export default Idrawer;
