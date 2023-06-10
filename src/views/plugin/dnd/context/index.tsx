/**
 * @file dnd Context
 * @author ly
 * @createDate 2022年12月21日
 */
import { FormItem } from '@/antdComponents/iForm';
import React, { FC, createContext, useMemo, useReducer } from 'react';
import type { FormParams } from '../EditForm';

interface DndContextProps {
	children: React.ReactNode;
}

interface StateParams {
	formList: FormParams[];
	selectFormItemKey?: string;
}

type actionParams =
	| {
			type: 'formList';
			value: FormParams[];
	  }
	| { type: 'selectFormItemKey'; value?: string };

type ReducerFun = (state: StateParams, action: actionParams) => StateParams;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Context = createContext<{ state: StateParams; dispatch: React.Dispatch<actionParams> } | null>(null);

const initState = {
	formList: [],
	selectFormItemKey: undefined
};

const reducer: ReducerFun = (state, action) => {
	const { type, value } = action;
	if (type === 'formList') {
		return { ...state, formList: value };
	} else if (type === 'selectFormItemKey') {
		return { ...state, selectFormItemKey: value };
	}
	return state;
};

const DndContext: FC<DndContextProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	const value = useMemo(() => ({ state, dispatch }), [state]);

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context };
export type { FormParams };
export default DndContext;
