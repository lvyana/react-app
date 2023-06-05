/**
 * @file 数据切片
 * @author ly
 * @createDate 2023年3月17日
 */
import React, { useRef } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';
import VirtualScroll from './VirtualScroll';
import scheduleSlicerHoc, { ScheduleSlicerRef } from './ScheduleSlicer';

/**
 * @param name 姓名
 * @param age 年龄
 * @param sex 性别
 */
type listParam = {
	name: string;
	age: number;
	sex: string;
};

let arr: listParam[] = Array.from({ length: 40000 }, (v, k) => k).map((item) => {
	return {
		name: '张三' + item,
		age: item,
		sex: item % 2 === 0 ? '男' : '女'
	};
});

// 每次渲染数量
const eachRenderNum = 400;

// 初始化ScheduleSlicer组件
const ScheduleSlicer = scheduleSlicerHoc<listParam>();

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Burst = () => {
	const ScheduleSlicerRef = useRef<ScheduleSlicerRef | null>(null);

	const onCallback = () => {
		ScheduleSlicerRef.current?.onCallback();
	};

	return (
		<Icard>
			<div>
				<Button type="primary" onClick={onCallback}>
					优化渲染
				</Button>

				<Button
					type="primary"
					onClick={() => {
						ScheduleSlicerRef.current?.reset();
					}}>
					清除数据
				</Button>
			</div>

			<ScheduleSlicer
				ref={ScheduleSlicerRef}
				config={{ arr, eachRenderNum, key: 'age' }}
				readerComponent={readerComponent}></ScheduleSlicer>
			{/* 性能要求还是得要虚拟加载 */}
			<VirtualScroll<listParam>
				config={{ data: arr, itemHeight: 50, visibleCount: 10, key: 'age', preloadCount: 2 }}
				readerComponent={readerComponent}
			/>
		</Icard>
	);
};

const readerComponent = ({ name, age, sex }: listParam) => {
	return (
		<div style={{ height: 50, border: '1px solid blue' }}>
			<span> 姓名: {name}</span>
			<span>年龄:{age}</span>
			<span> 性别:{sex}</span>
		</div>
	);
};
readerComponent.displayName = 'readerComponent';

export default Burst;
