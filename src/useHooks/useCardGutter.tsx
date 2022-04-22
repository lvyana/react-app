import React, { useState, useEffect, useMemo } from 'react';
import { useWidth } from '@/useHooks/useScreenSize';

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

	let [Width] = useWidth(33);

	if (sidebarWidth && Width > 960) {
		Width -= sidebarWidth;
	}

	// 计算margin值
	let residueWidth = useMemo(() => {
		return Math.floor(
			Math.floor(Math.floor(Width % 300) / Math.floor(Width / 300)) *
				((Math.floor(Width / 300) * 2) / (Math.floor(Width / 300) * 2 - 2 ? Math.floor(Width / 300) * 2 - 2 : 1))
		);
	}, [Width]);
	return residueWidth;
};

export default useCardGutter;
