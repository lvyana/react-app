import React, { useState, useMemo } from 'react';
import { Button } from 'antd';
/**
 * 优化任意组件计算 缓存变量
 * ly
 * 日期：2020年4月27日
 */

const MyUseMemo = () => {
	const [value, setValue] = useState(10);

	const [first, setFirst] = useState(0);

	const count = useMemo(() => {
		console.log('mome更新');

		let initNum = 0;
		for (let i = 0; i < 100000; i++) {
			initNum += i;
		}
		return initNum + value;
	}, [value]);

	return (
		<div>
			{count}
			<div>
				<Button type="link" onClick={() => setFirst(first + 1)}>
					first+
				</Button>
				{first}
			</div>
			<div>
				<Button type="link" onClick={() => setValue(value + 1)}>
					value+
				</Button>
				{value}
			</div>
		</div>
	);
};

export default MyUseMemo;
