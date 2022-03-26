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
const Icard: FC<Iprops> = ({ children, styles = { padding: '16px' } }) => {
	return (
		<>
			<Card hoverable bordered={false} bodyStyle={styles}>
				{children}
			</Card>
		</>
	);
};

export default Icard;
