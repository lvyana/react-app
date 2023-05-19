/**
 * @file 创建useContext
 * @author ly
 * @createDate 2020年11月15日
 */
import React, { createContext, FC, useReducer } from 'react';
import { TaskListParams } from '../components/taskList';
interface ToDayReducerProps {
	children: React.ReactNode;
}

interface InitStateParams {
	taskListData: TaskListParams[];
	taskListLoading: boolean;
}

type ActionValueParams = InitStateParams[keyof InitStateParams];

interface ActionParams {
	type: keyof InitStateParams;
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
	taskListData: [],
	taskListLoading: true
};

// reducer action
const toDayReducer: ToDayReducerType = (state, action) => {
	const { type, value } = action;
	if (type === 'taskListData') {
		return { ...state, taskListData: value as InitStateParams['taskListData'] };
	} else if (type === 'taskListLoading') {
		return { ...state, taskListLoading: value as InitStateParams['taskListLoading'] };
	}
	return state;
};

// context组件
const ToDayContext: FC<ToDayReducerProps> = ({ children }) => {
	const [state, dispatch] = useReducer(toDayReducer, initState);

	return <toDayContext.Provider value={{ state, dispatch }}>{children}</toDayContext.Provider>;
};

export default ToDayContext;
