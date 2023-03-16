/**
 * @file GridLayout 布局
 * @author ly
 * @createDate 2020年11月10日
 */
import React, { createElement, FC, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { v4 as uuidv4 } from 'uuid';

// x 在x轴位置 从0开始
// y 在y轴位置 从0开始
// w 分12等分
// h 高度
const layouts: LayoutsParams[] = [
	{ x: 0, y: 0, w: 1, h: 2, children: <div>123</div> },
	{ x: 1, y: 0, w: 3, h: 10, minW: 2, maxW: 4 },
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
	id?: string;
}
interface GridLayoutProps {
	layout?: LayoutsParams[];
	onLayoutChange?: (layout: Layout[]) => void;
	cols?: number;
	width?: number;
}
const urlArr = [
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/6.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/7.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/6.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/7.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/6.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/7.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/6.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/7.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/6.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/7.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/6.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/7.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/6.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/7.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/6.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/7.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/6.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/7.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/6.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/7.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/4.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/5.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/8.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/1.jpg',
	'https://project-1308388249.cos.ap-guangzhou.myqcloud.com/3.jpg'
];

const CLOS = 8;

const LAYOUT_WIDTH = 1200;

const LAYOUT_WIDTH_ITEM = LAYOUT_WIDTH / CLOS;
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const DemoGridLayout: FC<GridLayoutProps> = ({ layout = layouts, onLayoutChange, cols = CLOS, width = LAYOUT_WIDTH }) => {
	const children = React.useMemo(() => {
		return layout.map((val, i) => {
			const { x, y, w, h } = val;
			return (
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

// export default DemoGridLayout;

const ImgGrid = () => {
	const ImgEl = (url: string) => {
		return new Promise<number>((r) => {
			// 图片地址 后面加时间戳是为了避免缓存
			let imgUrl = url;
			// 创建对象
			let img = new Image();
			// 改变图片的src
			img.src = imgUrl;

			// 加载完成执行
			img.onload = function () {
				// 打印

				r(img.height / (img.width / LAYOUT_WIDTH_ITEM));
			};
		});
	};

	const num = useRef(0);
	const count = 10;

	const a = async () => {
		num.current += 1;
		const arr: LayoutsParams[] = [];

		for (let i = 0; i < count; i++) {
			if (count * (num.current - 1) + i >= urlArr.length) {
				continue;
			}

			const h = await ImgEl(urlArr[i + (num.current - 1) * count]);
			arr.push({
				x: (i + (num.current - 1) * count) % CLOS,
				y: Math.floor((i + (num.current - 1) * count) / CLOS),
				w: 1,
				h: Math.floor(h),
				children: createElement('img', {
					key: uuidv4(),
					width: LAYOUT_WIDTH_ITEM,
					src: urlArr[i + (num.current - 1) * count],
					className: i + (num.current - 1) * count
				}),
				id: uuidv4()
			});
		}

		setreaderUrlArr((value) => {
			return [...value, ...arr];
		});
		if (count * (num.current - 1) >= urlArr.length) return;
		// requestAnimationFrame(() => {
		// 	a();
		// });

		requestIdleCallback(
			() => {
				a();
			},
			{ timeout: 20000 }
		);
	};

	useEffect(() => {
		a();
	}, []);

	const [readerUrlArr, setreaderUrlArr] = useState<LayoutsParams[]>([]);

	return <DemoGridLayout layout={readerUrlArr}></DemoGridLayout>;
};
export default ImgGrid;
