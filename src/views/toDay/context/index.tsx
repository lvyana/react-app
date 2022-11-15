/**
 * @name 创建useContext
 * @user ly
 * @date 日期：2020年11月15日
 */
import React, { createContext, FC, useReducer } from 'react';

interface ToDayReducerProps {
	children: React.ReactNode;
}

interface InitStateParams {
	addPersonnelOpen: boolean;
}

type ActionValueParams = InitStateParams[keyof InitStateParams];

interface ActionParams {
	type: 'addPersonnelOpen';
	value: ActionValueParams;
}

type ToDayReducerType = (state: InitStateParams, action: ActionParams) => InitStateParams;

interface CreateContextParams {
	state: InitStateParams;
	dispatch: React.Dispatch<ActionParams>;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

// 创建context
export const toDayContext = createContext<CreateContextParams | null>(null);

// 初始化reducer数据
const initState: InitStateParams = {
	addPersonnelOpen: false
};

// reducer action
const toDayReducer: ToDayReducerType = (state, action) => {
	const { type, value } = action;
	if (type === 'addPersonnelOpen') {
		return { ...state, addPersonnelOpen: value };
	}
	return state;
};

// 套一个外壳
const ToDayReducer: FC<ToDayReducerProps> = ({ children }) => {
	const [state, dispatch] = useReducer(toDayReducer, initState);

	return <toDayContext.Provider value={{ state, dispatch }}>{children}</toDayContext.Provider>;
};

export default ToDayReducer;
