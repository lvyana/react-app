/**
 * @file useCallback优化子组件 tips: useCallback 一定要搭配memo使用 否则子组件也会更新 props参数会影响更新
 * @author ly
 * @createDate 2022年4月27日
 */
import React, { useState, memo, useCallback } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';

interface MyUseCallbackItemProps {
	addFunc: () => void;
	item: string | null;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseCallback = () => {
	const [count, setCount] = useState<string | null>(null);

	const [callbackCount, setCallbackCount] = useState<string | null>(null);

	const onCallbackClick = useCallback(() => {
		const date = new Date(Date.now()).toString();
		setCallbackCount(date);
	}, []);

	const onClick = () => {
		const date = new Date(Date.now()).toString();
		setCount(date);
	};
	return (
		<Icard>
			<div>
				<Button type="link" onClick={onClick}>
					普通点击
				</Button>
				<Button type="link" onClick={onCallbackClick}>
					useCallback点击
				</Button>
			</div>

			<div>
				<MyItem item={count} addFunc={onClick}></MyItem>
				<MyUseCallbackItem item={callbackCount} addFunc={onCallbackClick}></MyUseCallbackItem>
			</div>
		</Icard>
	);
};

export default IuseCallback;

const MyItem = ({ item, addFunc }: MyUseCallbackItemProps) => {
	// console.log('普通子组件我更新了');

	return (
		<div>
			我是子组件: {Date.now()}
			<Button type="link" onClick={addFunc}>
				+
			</Button>
		</div>
	);
};

const MyUseCallbackItem = memo(({ item, addFunc }: MyUseCallbackItemProps) => {
	// console.log('useCallback子组件我更新了');

	return (
		<div>
			我是子组件: {Date.now()}
			<Button type="link" onClick={addFunc}>
				+
			</Button>
		</div>
	);
});

MyUseCallbackItem.displayName = 'MyUseCallbackItem';
