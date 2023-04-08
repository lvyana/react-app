/**
 * @file useContext + useResource
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { useState, useContext, useMemo, memo } from 'react';
import Icontext, { Context } from './UseContextCom';
import { Button } from 'antd';
import IuseReducer from './IuseReducer';
import Icard from '@/antdComponents/iCard';

/**
 * tips: 可以结合useReduce实现redux
 */

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseContext = () => {
	const [parentValue, setParentValue] = useState(0);

	return (
		<Icard>
			{parentValue}

			<Button type="link" onClick={() => setParentValue(parentValue + 1)}>
				+1
			</Button>

			<Icontext>
				<ChildMemo></ChildMemo>
			</Icontext>
		</Icard>
	);
};

export default IuseContext;

const ChildMemo = memo(() => {
	return (
		<>
			<UseContextComItem></UseContextComItem>
			<Child></Child>
		</>
	);
});
ChildMemo.displayName = 'childMemo';

const UseContextComItem = () => {
	const context = useContext(Context);
	// console.log('READER');

	return (
		<div>
			{'我是子组件: '}
			{context?.sum.count}
			<Button
				type="link"
				onClick={() => {
					context?.dispatch({ type: 'sub', value: 1 });
				}}>
				-1
			</Button>
		</div>
	);
};

const Child = () => {
	// console.log('Child');

	return <div>Child</div>;
};
