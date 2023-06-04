/**
 * @file 数据切片
 * @author ly
 * @createDate 2023年3月17日
 */
import { Button } from 'antd';
import React, { FC, Fragment, ReactNode, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icard from '@/antdComponents/iCard';
import VirtualScroll from './VirtualScroll';
import scheduleSlicerHoc, { ScheduleSlicerRef } from './ScheduleSlicer';

type listParam = {
	name: string;
	age: number;
	sex: string;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

let arr: listParam[] = Array.from({ length: 40000 }, (v, k) => k).map((item) => {
	return {
		name: '张三' + item,
		age: item,
		sex: item % 2 === 0 ? '男' : '女'
	};
});

const eachRenderNum = 400; // 每次渲染数量

const ScheduleSlicer = scheduleSlicerHoc<listParam>();

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

			<ScheduleSlicer ref={ScheduleSlicerRef} arr={arr} ReandList={ReandList} eachRenderNum={eachRenderNum}></ScheduleSlicer>
			{/* 性能要求还是得要虚拟加载 */}
			<VirtualScroll<listParam> data={arr} renderItem={ReandList} itemHeight={50} visibleCount={15} />
		</Icard>
	);
};

const ReandList = ({ name, age, sex }: listParam) => {
	return (
		<div style={{ height: 50, border: '1px solid blue' }}>
			<span> 姓名: {name}</span>
			<span>年龄:{age}</span>
			<span> 性别:{sex}</span>
		</div>
	);
};
ReandList.displayName = 'ReandList';

export default Burst;
