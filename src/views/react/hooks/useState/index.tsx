/**
 * @file useState
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState } from 'react';
import { Button } from 'antd';
import useEasyTyper from '@/pluginComponents/easyTyper';
import Icard from '@/antdComponents/iCard';

const IuseState = () => {
	const init = 0;

	const [value, setValue] = useState(init);

	const [first, setfirst] = useState(() => init);

	const add = () => {
		// setValue(value + 1);

		// setfirst((value) => value + 1);
		// setfirst((value) => {
		// 	// console.log(value);

		// 	return value + 1;
		// });

		// 17 异步更新会render两次
		// 18 异步更新会render1次
		setTimeout(() => setValue(value + 1), 1000);
		setTimeout(() => setValue(value + 1), 1000);
		setTimeout(() => setfirst(first + 1), 2000);
		// setValue((value) => value + 1);
		// setTimeout(() => setValue((value) => value + 1), 1000);
		// setTimeout(() => setValue((value) => value + 1), 1000);
		// setTimeout(() => setfirst((first) => first + 1), 1000);

		// console.log(value);
		// console.log(first);
	};

	return (
		<Icard>
			<EasyTyper />
			<Button type="link" onClick={add}>
				+1
			</Button>
			{value}
			{first}
		</Icard>
	);
};

export default IuseState;

const EasyTyper = () => {
	const { output } = useEasyTyper('useState是一个 React Hook，可让您向组件添加状态变量。const [state, setState] = useState(initialState)');

	const { output: initStr } = useEasyTyper(
		'initialState：您希望状态初始为的值。它可以是任何类型的值，但函数有特殊行为。初始呈现后将忽略此参数。'
	);

	const { output: initStrOne } = useEasyTyper(
		'如果将函数传递为 ，则该函数将被视为初始值设定项函数。它应该是纯的，应该不带任何参数，并且应该返回任何类型的值。React 会在初始化组件时调用你的初始值设定项函数，并将其返回值存储为初始状态。'
	);

	const { output: stateReturn } = useEasyTyper('useState返回一个正好包含两个值的数组：');

	const { output: stateReturnOne } = useEasyTyper('1.当前状态。在第一次渲染期间，它将匹配您经过的内容。initialState');
	const { output: stateReturnTwo } = useEasyTyper('2.set 函数，允许您将状态更新为不同的值并触发重新呈现。');

	return (
		<>
			<div>{output}</div>
			<div>{initStr}</div>
			<div>{initStrOne}</div>
			<div>{stateReturn}</div>
			<div>{stateReturnOne}</div>
			<div>{stateReturnTwo}</div>
		</>
	);
};
