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
 *
 * children 子集内容
 * overlayInnerStyle 样式
 * placement 位置
 * color 颜色
 * title 显示内容
 */
interface Iprops {
	children: ReactNode;
	overlayInnerStyle?: CSSProperties;
	placement?: Iplacement;
	color?: string;
	title: ReactNode;
}

const Itooltip: FC<Iprops> = ({ children, title, overlayInnerStyle, placement = 'top', color }) => {
	return (
		<>
			<Tooltip placement={placement} overlayInnerStyle={overlayInnerStyle} color={color} title={title}>
				{children}
			</Tooltip>
		</>
	);
};

export default Itooltip;
