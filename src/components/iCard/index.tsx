import React, { FC, ReactNode } from 'react';
import { Card } from 'antd';

/**
 * @param children 传入内容
 * @param styles 样式
 */
interface Iprops {
	children?: ReactNode;
	styles?: object;
}
/**
 * @props Iprops
 * @return 卡片
 */
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
