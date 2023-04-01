/**
 * @file IuseMemo 优化任意组件计算 缓存变量
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useMemo, useEffect } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';

const IuseMemo = () => {
	const [value, setValue] = useState(10);

	const [name, setName] = useState('0');

	const date = useMemo(() => Date.now(), [name]);
	return (
		<Icard>
			name改变触发:{date}
			<div>
				<Button type="link" onClick={() => setValue(value + 1)}>
					value
				</Button>
				{value}
			</div>
			<div>
				<Button type="link" onClick={() => setName(Math.floor(Math.random() * 100) + '1')}>
					name
				</Button>
				{name}
			</div>
		</Icard>
	);
};

export default IuseMemo;
