import React, { FC, ReactNode } from 'react';
import { Card } from 'antd';

/**
 * @param children 传入内容
 * @param style 样式
 */
interface Iprops {
	children?: ReactNode;
	style?: object;
}
/**
 * @props Iprops
 * @return 卡片
 */
const Icard: FC<Iprops> = ({ children, style = {} }) => {
	return (
		<>
			<Card hoverable bordered={false} bodyStyle={{ padding: '16px', ...style }}>
				{children}
			</Card>
		</>
	);
};

export default Icard;
