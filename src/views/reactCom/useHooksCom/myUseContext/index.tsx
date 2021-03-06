import React, { useState, useContext } from 'react';
import UseContextCom, { MyContext } from './UseContextCom';
import { Button } from 'antd';
import MyUseReducer from './MyUseReducer';
import { sumProps, dispatchProps } from './UseContextCom';

const MyUseContext = () => {
	const [value, setvalue] = useState(10);
	const [sum, dispatch] = MyUseReducer();

	return (
		<div>
			{'我是父组件: ' + (sum as sumProps).count + '和' + (sum as sumProps).sum}
			<Button type="link" onClick={() => (dispatch as React.Dispatch<dispatchProps>)({ type: 'add', value: 1 })}>
				+1
			</Button>
			<Button type="link" onClick={() => (dispatch as React.Dispatch<dispatchProps>)({ type: 'sub', value: 1 })}>
				-1
			</Button>
			{'tips: 可以结合useReduce实现redux'}
			<UseContextCom sum={sum as sumProps} dispatch={dispatch as React.Dispatch<dispatchProps>}>
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
			{/* {value} */}
		</div>
	);
};
