/**
 * @name dnd Context
 * @user ly
 * @date 2022年12月21日
 */
import React, { FC, createContext, useReducer } from 'react';
import type { ItemTypesParams } from '../itemTypes';
import type { FormItemParam } from '@/antdComponents/iForm/type';

interface DndContextProps {
	children: React.ReactElement;
}

interface formItemParams extends FormItemParam<never, never> {
	type: ItemTypesParams;
}

interface StateParams {
	formList: formItemParams[];
}

interface actionParams {
	type: keyof StateParams;
	value: StateParams[keyof StateParams];
}

type ReducerFun = (state: StateParams, action: actionParams) => StateParams;
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Context = createContext<{ state: StateParams; dispatch: React.Dispatch<actionParams> } | null>(null);

const initState = {
	formList: []
};

const reducer: ReducerFun = (state, action) => {
	const { type, value } = action;
	if (type === 'formList') {
		return { ...state, formList: value };
	}
	return state;
};
const DndContext: FC<DndContextProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	return <Context.Provider value={{ state, dispatch }}>{React.cloneElement(children)}</Context.Provider>;
};

export { Context };
export type { formItemParams };
export default DndContext;
