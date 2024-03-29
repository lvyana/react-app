/**
 * @file 封装card
 * @author ly
 * @createDate 日期：2020年4月27日
 */
import React, { FC, ReactNode } from 'react';
import { Card } from 'antd';

/**
 * 卡片props
 * @param bordered 边框
 * @param children 传入内容
 * @param style 样式
 * @param bodyStyle 内容区域自定义样式
 * @param hoverable 鼠标移过时可浮起
 * @param className 类名
 * @method onClick 点击事件
 */
interface IcardProps {
	bordered?: boolean;
	children?: ReactNode;
	style?: React.CSSProperties;
	bodyStyle?: React.CSSProperties;
	hoverable?: boolean;
	className?: string;
	onClick?: () => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Icard: FC<IcardProps> = ({ bordered = false, children, style = {}, bodyStyle = {}, hoverable = false, className, onClick }) => {
	return (
		<>
			<Card
				hoverable={hoverable}
				bordered={bordered}
				style={style}
				bodyStyle={{ padding: '16px', ...bodyStyle }}
				className={className}
				onClick={onClick}>
				{children}
			</Card>
		</>
	);
};

export default Icard;
