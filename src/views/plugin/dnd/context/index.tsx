/**
 * @name dnd Context
 * @user ly
 * @date 2022年12月21日
 */
import React, { FC, createContext, useReducer } from 'react';
import type { ItemTypesParams } from '../itemTypes';
import type { FormItemParam } from '@/antdComponents/iForm/type';

interface DndContextProps {
	children: React.ReactNode;
}

interface FormItemParams extends Omit<FormItemParam<never, never>, 'key'> {
	type: ItemTypesParams;
	key: string;
}

interface StateParams {
	formList: FormItemParams[];
	selectFormItemKey?: string;
}

interface actionParams {
	type: keyof StateParams;
	value: StateParams[keyof StateParams];
}

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
		return { ...state, formList: value as StateParams['formList'] };
	} else if (type === 'selectFormItemKey') {
		return { ...state, selectFormItemKey: value as StateParams['selectFormItemKey'] };
	}
	return state;
};
const DndContext: FC<DndContextProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export { Context };
export type { FormItemParams };
export default DndContext;
