/**
 * @file 实现监听宽高、宽度
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export const useHeight = (subtractHeight = 0) => {
	const [scrollHeight, setScrollHeight] = useState(0);

	useEffect(() => {
		window.addEventListener('resize', resize);
		resize();
		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	const resize = debounce(() => {
		let height = document.documentElement.clientHeight - subtractHeight;
		// console.log(height);
		setScrollHeight(height);
	}, 500);

	return [scrollHeight];
};

export const useWidth = (subtractWidth = 0) => {
	const [scrollWidth, setScrollWidth] = useState(0);

	useEffect(() => {
		window.addEventListener('resize', resize);
		resize();
		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	const resize = debounce(() => {
		let width = document.documentElement.clientWidth - subtractWidth;

		setScrollWidth(width);
	}, 500);
	return { scrollWidth };
};
