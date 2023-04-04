/**
 * @file useContext + useResource
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { useState, useContext } from 'react';
import IuseContextCom, { MyContext } from './UseContextCom';
import { Button } from 'antd';
import IuseReducer from './IuseReducer';
import { sumProps, dispatchProps } from './UseContextCom';
import Icard from '@/antdComponents/iCard';

/**
 * tips: 可以结合useReduce实现redux
 */

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseContext = () => {
	const { sum, dispatch } = IuseReducer();

	return (
		<Icard>
			<div>{'count: ' + sum.count}</div>

			<Button type="link" onClick={() => (dispatch as React.Dispatch<dispatchProps>)({ type: 'add', value: 1 })}>
				+1
			</Button>
			<Button type="link" onClick={() => (dispatch as React.Dispatch<dispatchProps>)({ type: 'sub', value: 1 })}>
				-1
			</Button>

			<IuseContextCom sum={sum as sumProps} dispatch={dispatch as React.Dispatch<dispatchProps>}>
				<UseContextComItem></UseContextComItem>
			</IuseContextCom>
		</Icard>
	);
};

export default IuseContext;

const UseContextComItem = () => {
	const context = useContext(MyContext);

	return (
		<div>
			{'我是子组件: '}
			{context?.sum.count}
		</div>
	);
};
