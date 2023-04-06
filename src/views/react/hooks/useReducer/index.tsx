/**
 * @file useReduce
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useReducer } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';
import Icollapse from '@/antdComponents/iCollapse';

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

	const list = [
		{
			header: '什么是useReducer',
			content: (
				<div>
					useReducer 是 React 推出的一个扩展 Hook ,如下代码所示,它接受 (state, action) ⇒ newState 的一个 reduce ,并返回当前的 state
					以及与其配套的 dispatch 方法,让开发人员能够更好的管理代码中的数据
				</div>
			),
			key: '0'
		},
		{
			header: '介绍useReducer变量',
			content: (
				<>
					<div>{'const [state, dispatch] = useReducer(reducer, initialState)'}</div>
					<div>1、initialState: 需要我们自己定义,是我们要管理的一个初始变量.可以是一个数字,字符串,数组,对象等</div>
					<div>2、reducer: 是我们自己定义的一个纯函数,它的作用就是通过定义好的逻辑来改变 initialState 初始变量,为我们的项目服务</div>
					<div>3、state: reduce 里面的逻辑处理数据之后,会返回一个最新的值,就是这个state</div>
					<div>4、dispatch: 触发器, reducer 中会定义很多条件,具体要使用哪一个条件来改变 initialState 变量呢,就是要通过触发器来控制</div>
					<div>
						5、init: 处理初始状态的函数。如果没有指定,初始状态将被设置为 initialState 。否则初始状态被设置为调用 init(initialState) 的结果
					</div>
				</>
			),
			key: '1'
		}
	];

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
			<Icollapse styleConfig="1" defaultActiveKey={['0']} list={list}></Icollapse>
		</Icard>
	);
};

export default IuseReducer;
