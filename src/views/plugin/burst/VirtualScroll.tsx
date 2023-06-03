/**
 * @file 模板
 * @author 姓名
 * @createDate
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

	const totalHeight = useMemo(() => data.length * itemHeight, [data, itemHeight]);
	const containerHeight = useMemo(() => visibleCount * itemHeight, [visibleCount, itemHeight]);

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
