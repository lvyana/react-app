/**
 * @file useEffect
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const MyUseEffect = () => {
	const [value, setValue] = useState(0);
	useEffect(() => {
		// console.log('我没有参数', value);
		return () => {
			// console.log('return我没有参数', value);
		};
	});

	useEffect(() => {
		// console.log('我的参数[]', value);
		return () => {
			// console.log('return我的参数[]', value);
		};
	}, []);

	useEffect(() => {
		// console.log('我的参数[value]', value);
		return () => {
			// console.log('return我的参数[value]', value);
		};
	}, [value]);

	const add = () => {
		setValue(value + 1);
	};
	return (
		<div>
			<Button type="link" onClick={add}>
				+1
			</Button>
			<Son></Son>
		</div>
	);
};

export default MyUseEffect;

const Son = () => {
	useEffect(() => {
		// console.log('son effect');
		return () => {
			// console.log('son effect return');
		};
	});
	return <>1</>;
};
