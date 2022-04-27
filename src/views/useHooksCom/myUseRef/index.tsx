import React, { useRef, useState } from 'react';
import { Button } from 'antd';

/**
 * useRef tips: useRef.current的值修改不会重新渲染组件
 * useState 更新处理
 * ly
 * 日期：2022-4-27
 */
const MyUseRef = () => {
	console.log('组件刷新');

	const [count, setcount] = useState(0);
	const [first, setfirst] = useState(1);

	const Ref = useRef(0);

	const addFunc = () => {
		console.log('触发了');

		// useRef不会触发render
		Ref.current = count;

		// 异步更新会render两次
		// setTimeout(() => setcount(count + 1), 1000);
		// setTimeout(() => setfirst(first + 1), 1000);

		// setTimeout(() => setcount((count) => count + 1), 1000);
		// setTimeout(() => setfirst((first) => first + 1), 1000);

		// 同步更新render一次 会合并处理
		// setcount(count + 1);
		// setfirst(first + 1);
	};
	return (
		<div>
			add:{count}
			{Ref.current}
			<Button onClick={addFunc}>+</Button>
		</div>
	);
};

export default MyUseRef;
