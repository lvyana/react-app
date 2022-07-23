/**
 * useRef tips: useRef.current的值修改不会重新渲染组件
 * useState 更新处理
 * ly
 * 日期：2022-4-27
 */
import React, { FC, LegacyRef, useEffect, useRef, useState } from 'react';
import { Button } from 'antd';

interface SonProps {
	sonRef: LegacyRef<HTMLDivElement>;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const MyUseRef = () => {
	const sonRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		// console.log(sonRef);
	}, []);
	// console.log('组件刷新');

	const [count, setcount] = useState(0);
	const [first, setfirst] = useState(1);

	const Ref = useRef(0);

	const addFunc = () => {
		// console.log('触发了');

		// useRef不会触发render
		Ref.current = count;
		// console.log(Ref.current);

		// 异步更新会render两次
		// setTimeout(() => setcount(count + 1), 1000);
		// setTimeout(() => setfirst(first + 1), 1000);

		// setTimeout(() => setcount((count) => count + 1), 1000);
		// setTimeout(() => setfirst((first) => first + 1), 1000);

		// 同步更新render一次 会合并处理
		setcount(count + 1);
		// setfirst(first + 1);
	};
	return (
		<div>
			add:{count}----- ref:{Ref.current}
			<Button onClick={addFunc}>+</Button>
			<Son sonRef={sonRef}></Son>
		</div>
	);
};

const Son: FC<SonProps> = ({ sonRef }) => {
	return <div ref={sonRef}>son</div>;
};
export default MyUseRef;
