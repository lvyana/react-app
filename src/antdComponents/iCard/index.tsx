/**
 * @file 封装card
 * @author ly
 * @createDate 日期：2020年4月27日
 */
import React, { Children, FC, ReactNode } from 'react';
import { Card } from 'antd';

/**
 * @param bordered 边框
 * @param children 传入内容
 * @param style 样式
 * @param hoverable 鼠标移过时可浮起
 * @param className 类名
 */
interface IcardProps {
	bordered?: boolean;
	children?: ReactNode;
	style?: object;
	hoverable?: boolean;
	className?: string;
	onClick?: () => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Icard: FC<IcardProps> = ({ bordered = false, children, style = {}, hoverable = false, className, onClick }) => {
	return (
		<>
			<Card hoverable={hoverable} bordered={bordered} bodyStyle={{ padding: '16px', ...style }} className={className} onClick={onClick}>
				{children}
			</Card>
		</>
	);
};

export default Icard;
