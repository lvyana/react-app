import React, { FC, useState, memo, useCallback } from 'react';
import { Button } from 'antd';
/**
 * useCallback优化子组件 tips: useCallback 一定要搭配memo使用 否则子组件也会更新 props参数会影响更新
 * ly
 * 日期：2022-4-27
 */
const MyUseCallback = () => {
	console.log('父组件更新了');

	const [item, setItem] = useState(0);

	const [count, setCount] = useState(1);

	const addFunc = useCallback(() => {
		console.log('addFunc');
		setItem(item + 1);
	}, [item]);

	const jianFunc = () => {
		console.log('jianFunc');
		setCount(count - 1);
	};
	return (
		<div>
			<div>
				我是父组件: {count}
				<Button type="link" onClick={jianFunc}>
					-
				</Button>
			</div>

			<div>
				<MyUseCallbackItem item={item} addFunc={addFunc}></MyUseCallbackItem>
			</div>
		</div>
	);
};

export default MyUseCallback;

interface MyUseCallbackItemProps {
	addFunc: () => void;
	item: number;
}
// eslint-disable-next-line react/display-name
const MyUseCallbackItem = memo(({ item, addFunc }: MyUseCallbackItemProps) => {
	console.log('子组件我更新了');

	return (
		<div>
			我是子组件: {item}
			<Button type="link" onClick={addFunc}>
				+
			</Button>
		</div>
	);
});
