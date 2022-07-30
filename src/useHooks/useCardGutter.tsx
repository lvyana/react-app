/**
 *	@name 实现 计算宽度 marign
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useState, useEffect, useMemo } from 'react';

const useCardGutter = () => {
	// 计算内容卡片width
	// 监听左侧sidebar width
	const [sidebarWidth, setSidebarWidth] = useState(document.getElementsByClassName('sidebar-container')[0].clientWidth);

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			setSidebarWidth(entries[0].contentRect.width);
		});
		resizeObserver.observe(document.getElementsByClassName('sidebar-container')[0]);
		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	// 计算margin值
	let residueWidth = useMemo(() => {
		return Math.floor(
			Math.floor(Math.floor(sidebarWidth % 300) / Math.floor(sidebarWidth / 300)) *
				((Math.floor(sidebarWidth / 300) * 2) / (Math.floor(sidebarWidth / 300) * 2 - 2 ? Math.floor(sidebarWidth / 300) * 2 - 2 : 1))
		);
	}, [sidebarWidth]);
	return residueWidth;
};

export default useCardGutter;
