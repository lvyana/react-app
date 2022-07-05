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
		</div>
	);
};

export default MyUseEffect;
