/**
 *	@name 实现card
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { Children, FC, ReactNode } from 'react';
import { Card, theme } from 'antd';

/**
 * @param children 传入内容
 * @param style 样式
 */
interface IcardProps {
	children?: ReactNode;
	style?: object;
	hoverable?: boolean;
	className?: string;
}

const { useToken } = theme;
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Icard: FC<IcardProps> = ({ children, style = {}, hoverable = false, className }) => {
	const { token } = useToken();

	return (
		<>
			<Card hoverable={hoverable} bordered={false} bodyStyle={{ padding: '16px', ...style }} className={className}>
				{children}
			</Card>
		</>
	);
};

export default Icard;
