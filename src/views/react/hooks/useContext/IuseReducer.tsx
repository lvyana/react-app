import React, { useReducer } from 'react';
import { ReduerValueParam } from './Icontext';

interface ActionFuncType<T> {
	(state: T, action: { type: string; value: number }): T;
}

const initValue = {
	count: 0,
	sum: 10
};

const myActions: ActionFuncType<ReduerValueParam> = (state, action) => {
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

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useContextReducer = () => {
	const [sum, dispatch] = useReducer(myActions, initValue);
	return { sum, dispatch };
};

export default useContextReducer;
