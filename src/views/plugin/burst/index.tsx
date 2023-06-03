/**
 * @file 数据切片
 * @author ly
 * @createDate 2023年3月17日
 */
import { Button } from 'antd';
import React, { FC, Fragment, ReactNode, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icard from '@/antdComponents/iCard';
import VirtualScroll from './VirtualScroll';

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

let handleIdleCallback: number;

const Burst = () => {
	const [list, setList] = useState<ReactNode[]>([]);
	const count = useRef(0);

	const onGeneral = () => {
		setList([...arr.map((item) => <ReandList name={item.name} age={item.age} sex={item.sex} key={item.age}></ReandList>)]);
	};

	const onCallback = useCallback(() => {
		const currentCount = Math.ceil(arr.length / eachRenderNum);
		const listItem = arr.slice(count.current * eachRenderNum, (count.current + 1) * eachRenderNum);

		if (count.current >= currentCount) {
			return window.cancelIdleCallback(handleIdleCallback);
		}

		setList((value) => {
			return [...value, ...listItem.map((item) => <Fragment key={item.age}>{ReandList(item)}</Fragment>)];
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

	return (
		<Icard>
			<div>
				<Button type="primary" onClick={onCallback}>
					优化渲染
				</Button>
				<Button type="primary" onClick={onGeneral}>
					普通渲染
				</Button>
				<Button
					type="primary"
					onClick={() => {
						count.current = 0;
						setList([]);
					}}>
					清除数据
				</Button>
			</div>
			<div style={{ height: 500, overflow: 'auto' }}>{list}</div>
			{/* 性能要求还是得要虚拟加载 */}
			<VirtualScroll<listParam> data={arr} renderItem={ReandList} itemHeight={50} visibleCount={10} />
		</Icard>
	);
};

const ReandList = ({ name, age, sex }: listParam) => {
	return (
		<div style={{ height: 50 }}>
			<Icard className="mb-2">
				<span> 姓名: {name}</span>
				<span>年龄:{age}</span>
				<span> 性别:{sex}</span>
			</Icard>
		</div>
	);
};
ReandList.displayName = 'ReandList';

export default Burst;
