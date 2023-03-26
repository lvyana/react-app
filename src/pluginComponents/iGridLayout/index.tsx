/**
 * @file GridLayout 布局
 * @author ly
 * @createDate 2020年11月10日
 */
import React, { createElement, FC, useEffect, useMemo, useRef, useState } from 'react';
import useResize from '@/useHooks/useResize';
import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { v4 as uuidv4 } from 'uuid';

interface IgridLayoutProps {
	layout?: LayoutsParams[];
	onLayoutChange?: (layout: Layout[]) => void;
	cols?: number;
	width?: number;
}

// x 在x轴位置 从0开始
// y 在y轴位置 从0开始
// w 分12等分
// h 高度
export interface LayoutsParams {
	x: number;
	y: number;
	w: number;
	h: number;
	minW?: number;
	maxW?: number;
	children?: React.ReactNode;
	id?: string;
}

const layouts: LayoutsParams[] = [
	{ x: 0, y: 0, w: 1, h: 2, children: <div>123</div> },
	{ x: 1, y: 0, w: 3, h: 10, minW: 2, maxW: 4 },
	{ x: 4, y: 0, w: 1, h: 2 },
	{ x: 5, y: 0, w: 1, h: 2 },
	{ x: 6, y: 0, w: 1, h: 2 },
	{ x: 7, y: 0, w: 1, h: 2 },
	{ x: 8, y: 0, w: 4, h: 2 }
];

const CLOS = 8;

const LAYOUT_WIDTH = 1200;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IgridLayout: FC<IgridLayoutProps> = ({ layout = layouts, onLayoutChange, cols = CLOS, width = LAYOUT_WIDTH }) => {
	const children = React.useMemo(() => {
		return layout.map((val, i) => {
			const { x, y, w, h, id } = val;
			return (
				/**
				 * key:uuidv4()
				 * layout每一次更新都会导致重新渲染
				 * 解决每次更新插入顺序不一致
				 */
				<div key={uuidv4()} data-grid={{ x, y, w, h }} className="bg-blue-100">
					{val.children}
				</div>
			);
		});
	}, [layout]);

	//存储拖拽移动的位置到缓存
	// const onLayoutChange = (layout: Layout[]) => {
	// 	// 缓存到后端
	// 	// console.log(layout, '=----layout----', layouts);
	// };
	return (
		<div>
			<GridLayout className="layout" cols={cols} margin={[0, 0]} rowHeight={1} width={width} onLayoutChange={onLayoutChange}>
				{children}
			</GridLayout>
			{/* <ImgGrid></ImgGrid> */}
		</div>
	);
};

export default IgridLayout;
