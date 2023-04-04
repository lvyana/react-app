import React, { useReducer } from 'react';
import { sumProps } from './UseContextCom';

interface ActionFuncType<T> {
	(state: T, action: { type: string; value: number }): T;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseReducer = () => {
	const initValue = {
		count: 0,
		sum: 10
	};
	const myActions: ActionFuncType<sumProps> = (state, action) => {
		const { type, value } = action;
		if (type === 'add') {
			return {
				...state,
				count: state.count + value
			};
		} else if (type === 'sub') {
			return {
				...state,
				count: state.count - value
			};
		}
		return state;
	};
	const [sum, dispatch] = useReducer(myActions, initValue);
	return { sum, dispatch };
};

export default IuseReducer;
