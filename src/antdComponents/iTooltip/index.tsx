/**
 *	@name 鼠标移入出现提示
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { CSSProperties, FC, ReactNode } from 'react';
import { Tooltip } from 'antd';

type Iplacement =
	| 'top'
	| 'left'
	| 'right'
	| 'bottom'
	| 'topLeft'
	| 'topRight'
	| 'bottomLeft'
	| 'bottomRight'
	| 'leftTop'
	| 'leftBottom'
	| 'rightTop'
	| 'rightBottom';

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
	placement?: Iplacement;
	color?: string;
	title: ReactNode;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Itooltip: FC<ItooltipProps> = ({ children, title, overlayInnerStyle, placement = 'top', color }) => {
	return (
		<>
			<Tooltip placement={placement} overlayInnerStyle={overlayInnerStyle} color={color} title={title}>
				{children}
			</Tooltip>
		</>
	);
};

export default Itooltip;
