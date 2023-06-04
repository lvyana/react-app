/**
 * @file 虚拟滚动
 * @author ly
 * @createDate 2023年6月4日
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface VirtualScrollProps<T> {
	data: T[];
	renderItem: (item: T) => React.ReactNode;
	itemHeight: number;
	visibleCount: number;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const VirtualScroll = <T,>({ data, renderItem, itemHeight, visibleCount }: VirtualScrollProps<T>) => {
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(visibleCount);
	const containerRef = useRef<HTMLDivElement>(null);

	// 总高度 =  总数 * 一行高度
	const totalHeight = useMemo(() => data.length * itemHeight, [data, itemHeight]);

	// 可视高度 = (渲染总条数 - 预渲染条数) * 一行高度
	const containerHeight = useMemo(() => (visibleCount - 6) * itemHeight, [visibleCount, itemHeight]);

	// 滚动执行函数
	const handleScroll = useCallback(() => {
		const scrollTop = containerRef.current?.scrollTop ?? 0;
		const start = Math.floor(scrollTop / itemHeight);
		const end = Math.min(start + visibleCount, data.length);

		setStart(start);
		setEnd(end);
	}, [data.length, itemHeight, visibleCount]);

	return (
		<div ref={containerRef} style={{ height: containerHeight, overflowY: 'auto' }} onScroll={handleScroll}>
			<div style={{ height: totalHeight }}>
				{data.slice(start, end).map((item, index) => {
					return (
						<div key={index} style={{ transform: `translateY(${start * itemHeight}px)` }}>
							{renderItem(item)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default VirtualScroll;
