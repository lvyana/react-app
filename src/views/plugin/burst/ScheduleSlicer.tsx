/**
 * @file 计划切片
 * @author ly
 * @createDate 2023年6月4日
 */
import React, { Fragment, forwardRef, useCallback, useRef, useState, useImperativeHandle, ForwardedRef } from 'react';

let handleIdleCallback: number;
/**
 * @param arr 数据集合
 * @parma eachRenderNum 每次渲染条数
 * @param key 唯一值
 */
type ConfigParam<T> = {
	arr: T[];
	eachRenderNum: number;
	key: keyof T;
};

/**
 * @param readerComponent 渲染的组件
 * @param config 参数配置
 */
type ScheduleSlicerProps<T> = {
	readerComponent: (value: T) => React.ReactNode;
	config: ConfigParam<T>;
};

/**
 * @param onCallback 触发渲染事件
 * @param reset 暂停渲染，并清楚渲染dom
 */
export interface ScheduleSlicerRef {
	onCallback: () => void;
	reset: () => void;
}

type ForwardRefParam<T> = {
	props: ScheduleSlicerProps<T>;
	ref: ScheduleSlicerRef | null;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ScheduleSlicer = <T,>({ readerComponent, config }: ForwardRefParam<T>['props'], ref: ForwardedRef<ForwardRefParam<T>['ref']>) => {
	const { arr, eachRenderNum, key } = config;
	// 渲染次数
	const count = useRef(0);

	// 渲染数据
	const [list, setList] = useState<T[]>([]);

	// 中断渲染
	const interruptRendering = useRef(false);

	// 需要渲染多少次完成所有渲染
	const currentCount = Math.ceil(arr.length / eachRenderNum);

	// 调度渲染
	const onCallback = useCallback(() => {
		// 是否中断渲染
		if (interruptRendering.current) return;

		// 当前次数大于等于最大次数,终止程序
		if (count.current >= currentCount) {
			return window.cancelIdleCallback(handleIdleCallback);
		}

		// 取出本次渲染的数据
		const listItem = arr.slice(count.current * eachRenderNum, (count.current + 1) * eachRenderNum);

		// 数据添加到本次渲染
		setList((value) => {
			return [...value, ...listItem];
		});

		// 执行下一次渲染的操作
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
			onCallback: () => {
				interruptRendering.current = false;
				onCallback();
			},
			reset: () => {
				interruptRendering.current = true;
				count.current = 0;
				setList([]);
			}
		};
	});

	return (
		<div style={{ height: 500, overflow: 'auto' }}>
			{list.map((item) => {
				return <Fragment key={item[key] as React.Key}>{readerComponent(item)}</Fragment>;
			})}
		</div>
	);
};

const scheduleSlicerHoc = <T,>() => forwardRef<ForwardRefParam<T>['ref'], ForwardRefParam<T>['props']>(ScheduleSlicer);

export default scheduleSlicerHoc;
