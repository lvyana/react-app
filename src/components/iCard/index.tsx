import React, { FC, ReactNode } from 'react';
import { Card } from 'antd';

/**
 *
 * children 传入内容
 * styles 样式
 */
interface Iprops {
	children?: ReactNode;
	styles?: object;
}
const Icard: FC<Iprops> = ({ children, styles = {} }) => {
	return (
		<>
			<Card hoverable bordered={false} bodyStyle={{ padding: '16px', ...styles }}>
				{children}
			</Card>
		</>
	);
};

export default Icard;
