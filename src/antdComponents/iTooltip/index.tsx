/**
 * @file 鼠标移入出现提示
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { CSSProperties, FC, ReactNode } from 'react';
import { Tooltip } from 'antd';
import useThemeHooks from '@/config/theme/useThemeHooks';
import { TooltipPlacement } from 'antd/es/tooltip';

/**
 * @param children 子集内容
 * @param overlayInnerStyle 样式
 * @param placement 位置
 * @param color 颜色
 * @param title 显示内容
 */
interface ItooltipProps {
	children: ReactNode;
	overlayInnerStyle?: CSSProperties;
	placement?: TooltipPlacement;
	color?: string;
	title: ReactNode;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Itooltip: FC<ItooltipProps> = ({ children, title, overlayInnerStyle, placement = 'top', color }) => {
	const { token } = useThemeHooks();

	return (
		<>
			<Tooltip placement={placement} overlayInnerStyle={overlayInnerStyle} color={token.colorPrimary} title={title}>
				{children}
			</Tooltip>
		</>
	);
};

export default Itooltip;
