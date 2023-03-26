/**
 * @file GridLayout 布局
 * @author ly
 * @createDate 2020年11月10日
 */
import React, { createElement, FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useResize from '@/useHooks/useResize';
import { v4 as uuidv4 } from 'uuid';
import Icard from '@/antdComponents/iCard';
import IgridLayout, { LayoutsParams } from '@/pluginComponents/iGridLayout';

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

type ReaderUrlArrParams = LayoutsParams & { url: string };
// const LAYOUT_WIDTH = 1200;
// const LAYOUT_WIDTH_ITEM = LAYOUT_WIDTH / CLOS;
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

// export default DemoGridLayout;

const ImgGrid = () => {
	const { resize } = useResize(document.getElementById('DemoGridLayout'));

	const width = useMemo(() => resize?.width, [resize?.width]) || 1000;

	const arrImg = useRef<{ clientHeight: number; currentSrc: string }[]>([]);

	// 次数
	const num = useRef(0);

	// 每次渲染条数
	const count = 10;

	const onLoad = (value: { target: HTMLImageElement }) => {
		const { clientHeight, currentSrc, clientWidth } = value.target;

		// 计算等比高度
		const height = Math.floor(clientHeight * (width / CLOS / clientWidth));
		console.log(clientHeight, clientWidth, width / CLOS, clientHeight * (width / CLOS / clientWidth));

		arrImg.current.push({ clientHeight: height, currentSrc });
	};

	const getList = () => {
		num.current += 1;

		// 每次取count条数数据
		const splitImgArr = urlArr
			.filter((item, i) => {
				return num.current * count > i && i >= (num.current - 1) * count;
			})
			.map((item, i) => {
				return {
					url: item,
					x: (i + (num.current - 1) * count) % CLOS,
					y: Math.floor((i + (num.current - 1) * count) / CLOS),
					w: 1,
					h: 100,
					children: createElement('img', {
						key: uuidv4(),
						width: '100%',
						src: item,
						onLoad: onLoad
					}),
					id: uuidv4()
				};
			});

		setreaderUrlArr((value) => {
			// 寻找对应图片的高度
			return [
				...value.map((v) => {
					console.log(
						arrImg.current.find((item, i) => {
							return item.currentSrc === v.url;
						})
					);

					return {
						...v,
						h:
							arrImg.current.find((item, i) => {
								return item.currentSrc === v.url;
							})?.clientHeight || 100
					};
				}),
				...splitImgArr
			];
		});

		if (count * (num.current - 1) >= urlArr.length) return;

		// requestAnimationFrame(() => {
		// 	a();
		// });

		requestIdleCallback(
			() => {
				getList();
			},
			{ timeout: 20000 }
		);
	};

	useEffect(() => {
		getList();
	}, []);

	const [readerUrlArr, setreaderUrlArr] = useState<ReaderUrlArrParams[]>([]);

	return (
		<Icard>
			<div id="DemoGridLayout" style={{ width: 1000 }}>
				<IgridLayout layout={readerUrlArr} width={width}></IgridLayout>
			</div>
		</Icard>
	);
};
export default ImgGrid;
