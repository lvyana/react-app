/**
 * @name 监听DOM变化
 * @user ly
 * @date 2022年12月13日
 */
import React, { useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResize = (Dom?: HTMLElement) => {
	const [resize, setResize] = useState<number[]>([]);

	const ro = new ResizeObserver((entries, observer) => {
		// console.log(entries, observer);

		for (const entry of entries) {
			const { left, top, width, height } = entry.contentRect;
			setResize([left, top, width, height]);
			// console.log('Element:', entry.target);
			// console.log(`Element's size: ${width}px x ${height}px`);
			// console.log(`Element's paddings: ${top}px ; ${left}px`);
		}
	});

	useEffect(() => {
		ro.observe(Dom || document.body);
		return () => {
			ro.unobserve(Dom || document.body);
		};
	}, []);

	return [resize];
};

export default useResize;
