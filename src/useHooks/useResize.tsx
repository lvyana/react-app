/**
 * @file 监听DOM变化
 * @author ly
 * @createDate 2022年12月13日
 */
import React, { useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

type ResizeParams = {
	left: number;
	top: number;
	width: number;
	height: number;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useResize = (Dom?: HTMLElement | null) => {
	const [resize, setResize] = useState<ResizeParams>();

	const ro = new ResizeObserver((entries, observer) => {
		// console.log(entries, observer);

		for (const entry of entries) {
			const { left, top, width, height } = entry.contentRect;
			setResize({ left, top, width, height });

			// console.log('Element:', entry.target);
			// console.log(`Element's size: ${width}px x ${height}px`);
			// console.log(`Element's paddings: ${top}px ; ${left}px`);
		}
	});

	useEffect(() => {
		if (Dom) {
			ro.observe(Dom);
		}

		return () => {
			if (Dom) {
				ro.unobserve(Dom);
			}
		};
	}, [Dom]);

	return { resize };
};

export default useResize;
