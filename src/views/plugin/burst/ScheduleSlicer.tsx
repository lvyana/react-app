/**
 * @file 计划切片
 * @author ly
 * @createDate 2023年6月4日
 */
import React, { Fragment, forwardRef, useCallback, useRef, useState, useImperativeHandle, ForwardedRef } from 'react';

let handleIdleCallback: number;

type ScheduleSlicerProps<T> = {
	arr: T[];
	ReandList: (value: T) => React.ReactNode;
	eachRenderNum: number;
};

export interface ScheduleSlicerRef {
	onCallback: () => void;
	reset: () => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ScheduleSlicer = <T,>({ arr, ReandList, eachRenderNum }: ScheduleSlicerProps<T>, ref: ForwardedRef<ScheduleSlicerRef | null>) => {
	// 渲染次数
	const count = useRef(0);

	// 渲染数据
	const [list, setList] = useState<T[]>([]);

	// 中断渲染
	const interruptRendering = useRef(false);

	// 调度渲染
	const onCallback = useCallback(() => {
		if (interruptRendering.current) return;

		const currentCount = Math.ceil(arr.length / eachRenderNum);
		const listItem = arr.slice(count.current * eachRenderNum, (count.current + 1) * eachRenderNum);

		if (count.current >= currentCount) {
			return window.cancelIdleCallback(handleIdleCallback);
		}

		setList((value) => {
			return [...value, ...listItem];
		});
		count.current += 1;
		handleIdleCallback = requestIdleCallback(
			() => {
				onCallback();
			},
			{
				timeout: 1500
			}
		);
	}, []);

	// 暴露调用事件
	useImperativeHandle(ref, () => {
		return {
			onCallback,
			reset: () => {
				interruptRendering.current = true;
				count.current = 0;
				setList([]);
			}
		};
	});

	return (
		<div style={{ height: 500, overflow: 'auto' }}>
			{list.map((item, index) => {
				return <Fragment key={index}>{ReandList(item)}</Fragment>;
			})}
		</div>
	);
};

const scheduleSlicerHoc = <T,>() => forwardRef(ScheduleSlicer<T>);

export default scheduleSlicerHoc;
