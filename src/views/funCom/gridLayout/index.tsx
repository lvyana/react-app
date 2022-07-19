import React from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

/**
 *
 * @returns 布局
 */
const DemoGridLayout = () => {
	// x 在x轴位置 从0开始
	// y 在y轴位置 从0开始
	// w 分12等分
	// h 高度
	const layout = [
		{ i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
		{ i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
		{ i: 'c', x: 4, y: 0, w: 1, h: 2 },
		{ i: 'd', x: 5, y: 0, w: 1, h: 2 },
		{ i: 'e', x: 6, y: 0, w: 1, h: 2 },
		{ i: 'f', x: 7, y: 0, w: 1, h: 2 },
		{ i: 'g', x: 8, y: 0, w: 4, h: 2 },
		{ i: 'h', x: 0, y: 1, w: 1, h: 2 },
		{ i: 'i', x: 0, y: 2, w: 1, h: 2 },
		{ i: 'j', x: 0, y: 3, w: 1, h: 2 },
		{ i: 'k', x: 0, y: 4, w: 1, h: 2 },
		{ i: 'l', x: 0, y: 5, w: 1, h: 2 },
		{ i: 'm', x: 0, y: 6, w: 1, h: 2 },
		{ i: 'n', x: 0, y: 7, w: 1, h: 2 },
		{ i: 'o', x: 0, y: 8, w: 1, h: 2 },
		{ i: 'p', x: 0, y: 9, w: 1, h: 2 }
	];
	const bgc = { backgroundColor: 'red' };

	const children = React.useMemo(() => {
		return layout.map((val, idx) => {
			return <div key={idx} data-grid={val} style={bgc} />;
		});
	}, []);

	//存储拖拽移动的位置到缓存
	const onLayoutChange = (layout: Layout[]) => {
		// 缓存到后端
		// console.log(layout, '=----layout----', layouts);
	};
	return (
		<div>
			<GridLayout className="layout" cols={12} rowHeight={30} width={1200} onLayoutChange={onLayoutChange}>
				{children}
			</GridLayout>
		</div>
	);
};

export default DemoGridLayout;
