import React, { useReducer } from 'react';
import { Button } from 'antd';

type ActionFuncType = (state: number, action: { type: string; value: number }) => number;
/**
 * useReduce 使用
 * ly
 * 日期：2020年4月27日
 */
const MyUseReducer = () => {
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
		<div>
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
		</div>
	);
};

export default MyUseReducer;
