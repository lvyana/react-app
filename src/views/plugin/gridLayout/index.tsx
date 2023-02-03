/**
 * @file GridLayout 布局
 * @author ly
 * @createDate 2020年11月10日
 */
import React, { FC } from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// x 在x轴位置 从0开始
// y 在y轴位置 从0开始
// w 分12等分
// h 高度
const layouts: LayoutsParams[] = [
	{ x: 0, y: 0, w: 1, h: 2, children: <div>123</div> },
	{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
	{ x: 4, y: 0, w: 1, h: 2 },
	{ x: 5, y: 0, w: 1, h: 2 },
	{ x: 6, y: 0, w: 1, h: 2 },
	{ x: 7, y: 0, w: 1, h: 2 },
	{ x: 8, y: 0, w: 4, h: 2 },
	{ x: 0, y: 1, w: 1, h: 2 },
	{ x: 0, y: 2, w: 1, h: 2 },
	{ x: 0, y: 3, w: 1, h: 2 },
	{ x: 0, y: 4, w: 1, h: 2 },
	{ x: 0, y: 5, w: 1, h: 2 },
	{ x: 0, y: 6, w: 1, h: 2 },
	{ x: 0, y: 7, w: 1, h: 2 },
	{ x: 0, y: 8, w: 1, h: 2 },
	{ x: 0, y: 9, w: 1, h: 2 }
];
interface LayoutsParams {
	x: number;
	y: number;
	w: number;
	h: number;
	minW?: number;
	maxW?: number;
	children?: React.ReactNode;
}
interface GridLayoutProps {
	layout?: LayoutsParams[];
	onLayoutChange?: (layout: Layout[]) => void;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const DemoGridLayout: FC<GridLayoutProps> = ({ layout = layouts, onLayoutChange }) => {
	const bgc = { backgroundColor: 'red' };

	const children = React.useMemo(() => {
		return layout.map((val, idx) => {
			return (
				<div key={idx} data-grid={val} className="bg-blue-100">
					{val.children}
				</div>
			);
		});
	}, []);

	//存储拖拽移动的位置到缓存
	// const onLayoutChange = (layout: Layout[]) => {
	// 	// 缓存到后端
	// 	// console.log(layout, '=----layout----', layouts);
	// };
	return (
		<div>
			<GridLayout className="layout" cols={12} rowHeight={30} width={1200} onLayoutChange={onLayoutChange}>
				{children}
			</GridLayout>
		</div>
	);
};

export default DemoGridLayout;
