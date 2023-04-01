/**
 * @file useReduce
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useReducer } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';

type ActionFuncType = (state: number, action: { type: string; value: number }) => number;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseReducer = () => {
	// reduce实现加减乘除

	const computerAction: ActionFuncType = (state, action) => {
		let { type, value } = action;
		if (type === 'add') {
			return state + value;
		} else if (type === 'subtract') {
			return state - value;
		} else if (type === 'multiplication') {
			return state * value;
		} else if (type === 'division') {
			return state / value;
		}
		return state;
	};

	const initCount = '0';

	// 处理初始化数据
	const init = (initialCount: string) => {
		return Number(initialCount);
	};

	const [count, dispatch] = useReducer(computerAction, initCount, init);

	return (
		<Icard>
			{count}
			<Button type="link" onClick={() => dispatch({ type: 'add', value: 1 })}>
				+
			</Button>
			<Button type="link" onClick={() => dispatch({ type: 'subtract', value: 1 })}>
				-
			</Button>
			<Button type="link" onClick={() => dispatch({ type: 'multiplication', value: 2 })}>
				*
			</Button>
			<Button type="link" onClick={() => dispatch({ type: 'division', value: 2 })}>
				/
			</Button>
		</Icard>
	);
};

export default IuseReducer;
