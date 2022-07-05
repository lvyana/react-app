import React, { useState, useMemo, useEffect } from 'react';
import { Button } from 'antd';
/**
 * 优化任意组件计算 缓存变量
 * ly
 * 日期：2020年4月27日
 */

const MyUseMemo = () => {
	const [value, setValue] = useState(10);

	const [name, setName] = useState('tt');

	const getProductName = () => {
		// console.log('getProductName触发了', name);

		return name;
	};
	const memoGetProductName = useMemo(() => {
		// console.log('memo_getProductName触发了', name);

		return name;
	}, [name]);

	useEffect(() => {
		// console.log('name触发');
		getProductName();
	}, [name]);

	useEffect(() => {
		// console.log('value触发');
	}, [value]);

	return (
		<div>
			{getProductName()}
			<div>
				<Button type="link" onClick={() => setValue(value + 1)}>
					value+
				</Button>
				{value}
			</div>
			<div>
				<Button type="link" onClick={() => setName(Math.floor(Math.random() * 100) + '1')}>
					name+
				</Button>
				{name}-{memoGetProductName}
			</div>
		</div>
	);
};

export default MyUseMemo;
