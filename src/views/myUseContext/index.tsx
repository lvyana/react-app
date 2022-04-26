import React, { useState, useContext } from 'react';
import UseContextCom, { MyContext } from './UseContextCom';
import { Button } from 'antd';

const MyUseContext = () => {
	const [value, setvalue] = useState(10);
	return (
		<div>
			{'我是父组件: ' + value}
			<Button type="link" onClick={() => setvalue(value + 1)}>
				+
			</Button>
			{'tips: 可以结合useReduce实现redux'}
			<UseContextCom value={value}>
				<UseContextComItem></UseContextComItem>
			</UseContextCom>
		</div>
	);
};

export default MyUseContext;

const UseContextComItem = () => {
	const value = useContext(MyContext);
	return (
		<div>
			{'我是子组件: '}
			{value}
		</div>
	);
};
