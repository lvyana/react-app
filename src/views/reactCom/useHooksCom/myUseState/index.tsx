/**
 * @file useState
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState } from 'react';
import { Button } from 'antd';

const MyUseState = () => {
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

		// 异步更新会render两次
		setTimeout(() => setValue(value + 1), 1000);
		setTimeout(() => setfirst(first + 1), 1000);
		// setValue((value) => value + 1);
		// setTimeout(() => setValue((value) => value + 1), 1000);
		// setTimeout(() => setfirst((first) => first + 1), 1000);

		// console.log(value);
		// console.log(first);
	};

	console.log('组件刷新');

	return (
		<>
			<Button type="link" onClick={add}>
				+1
			</Button>
			{value}
			{first}
		</>
	);
};

export default MyUseState;
