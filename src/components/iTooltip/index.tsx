import React, { FC, ReactNode } from 'react';
import { Tooltip, Tag, Space } from 'antd';

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

interface Iprops {
	children: ReactNode;
	overlayInnerStyle?: object;
	placement?: Iplacement;
	color?: string;
	title: ReactNode;
}

const Itooltip: FC<Iprops> = ({ children, title, overlayInnerStyle, placement = 'top', color }) => {
	return (
		<div>
			<Tooltip placement={placement} overlayInnerStyle={overlayInnerStyle} color={color} title={title}>
				{children}
			</Tooltip>
		</div>
	);
};

export default Itooltip;
