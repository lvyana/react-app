import React, { FC, ReactNode, useState } from 'react';
import { Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
/**
 *	实现展开收起动画效果
 *	ly
 *  日期：2020年4月27日
 *  title 图标旁的名字
 *  minHeight 最小高度
 *  maxHeight 最大高度
 */
interface Iprops {
	children: ReactNode;
	title: string;
	minHeight?: string | number;
	maxHeight?: string | number;
}

const Itransition: FC<Iprops> = ({ children, title, minHeight, maxHeight }) => {
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
