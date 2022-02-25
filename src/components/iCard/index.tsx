import React, { FC, ReactNode } from 'react';
import { Card } from 'antd';

interface Iprops {
	children: ReactNode;
}
const Icard: FC<Iprops> = ({ children }) => {
	return (
		<>
			<Card hoverable bordered={false} bodyStyle={{ padding: '16px' }}>
				{children}
			</Card>
		</>
	);
};

export default Icard;
