/**
 *	@name 抽屉
 *	@user ly
 *  @data 日期：2020年11月15日
 */
import React, { FC } from 'react';
import { Drawer } from 'antd';

type PlacementType = 'top' | 'right' | 'bottom' | 'left';
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
