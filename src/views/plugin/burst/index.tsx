import { Button } from 'antd';
import React, { Fragment, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

let arr = Array.from({ length: 40000 }, (v, k) => k);
const eachRenderNum = 1000; // 每次渲染数量

const Burst = () => {
	const [list, setList] = useState<ReactNode[]>([]);
	const count = useRef(0);
	const time = useRef(0);

	const onGeneral = () => {
		let arr = Array.from({ length: 100000 }, (v, k) => k);
		setList([ReandList(0, arr)]);
	};

	const getArr = () => {
		const times = Math.ceil(arr.length / eachRenderNum);
		const listItem = arr.slice(count.current * eachRenderNum, (count.current + 1) * eachRenderNum);

		if (count.current >= times) {
			time.current = Date.now() - time.current;
			return;
		}

		setList((value) => {
			return [...value, ReandList(count.current, listItem)];
		});
		count.current += 1;
		requestIdleCallback(
			() => {
				getArr();
			},
			{
				timeout: 1500
			}
		);
	};

	const ReandList = (index: number, listItem: number[]) => {
		return (
			<Fragment key={index}>
				{listItem.map((item, i) => {
					return (
						<div style={{ border: '1px solid red' }} className="m-1" key={i}>
							{index} {i}
						</div>
					);
				})}
			</Fragment>
		);
	};

	const onCallback = () => {
		console.log(Date.now());
		time.current = Date.now();
		getArr();
	};

	return (
		<>
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
				<div>渲染时间:{time.current}</div>
			</div>
			<div style={{ height: 500, overflow: 'auto' }}>{list}</div>
		</>
	);
};

export default Burst;