/**
 * @file 虚拟滚动
 * @author ly
 * @createDate 2023年6月4日
 */
import React, { useCallback, useMemo, useRef, useState } from 'react';

/**
 * @param data 集合数据
 * @param itemHeight 每一个组件高度
 * @param visibleCount 窗口可见的组件数量
 * @param visibleCount 预加载的组件数量
 * @param key 唯一值
 */
type ConfigParam<T> = {
	data: T[];
	itemHeight: number;
	visibleCount: number;
	preloadCount?: number;
	key: keyof T;
};

/**
 * @param readerComponent 渲染的组件
 * @param config 参数配置
 */
interface VirtualScrollProps<T> {
	readerComponent: (item: T) => React.ReactNode;
	config: ConfigParam<T>;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const VirtualScroll = <T,>({ config, readerComponent }: VirtualScrollProps<T>) => {
	const { data, itemHeight, visibleCount, key, preloadCount = 6 } = config;

	// 本次渲染开始位置
	const [start, setStart] = useState(0);

	// 本次渲染结束位置
	const [end, setEnd] = useState(visibleCount);

	// 外层ref 用于获取滚动位置
	const containerRef = useRef<HTMLDivElement>(null);

	// 总高度 =  总数 * 一行高度
	const totalHeight = useMemo(() => data.length * itemHeight, [data, itemHeight]);

	// 可视高度 = 渲染总条数 * 一行高度
	const containerHeight = useMemo(() => visibleCount * itemHeight, [visibleCount, itemHeight]);

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
				{/* 渲染总条数 = 渲染数据 + 预渲染条数 */}
				{data.slice(start, end + preloadCount).map((item) => {
					return (
						<div key={item[key] as React.Key} style={{ transform: `translateY(${start * itemHeight}px)` }}>
							{readerComponent(item)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default VirtualScroll;
