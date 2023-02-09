/**
 * @file 实现展开收起动画效果
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC, ReactNode, useState } from 'react';
import { Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

/**
 * @param children 子组件
 * @param title 图标旁的名字
 * @param minHeight 最小高度
 * @param maxHeight 最大高度
 */
interface ItransitionProps {
	children: ReactNode;
	title: string;
	minHeight?: string | number;
	maxHeight?: string | number;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Itransition: FC<ItransitionProps> = ({ children, title, minHeight, maxHeight }) => {
	// 动画效果
	const [height, setHeight] = useState(minHeight);
	const [expand, setExpand] = useState(false);
	const onIsExpand = () => {
		setExpand(!expand);
		if (expand) {
			setHeight(minHeight);
		} else {
			setHeight(maxHeight);
		}
	};
	return (
		<>
			<div style={{ height: height, transition: 'all 0.5s', overflow: 'hidden' }}>{expand ? children : <></>}</div>
			<div style={{ textAlign: 'center' }}>
				<Button type="link" onClick={onIsExpand}>
					{expand ? <UpOutlined /> : <DownOutlined />}
					{expand ? '收起' : title}
				</Button>
			</div>
		</>
	);
};

export default Itransition;
