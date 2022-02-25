import React, { FC, ReactNode } from 'react';
import { Card } from 'antd';

interface Iprops {
	children: ReactNode;
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
