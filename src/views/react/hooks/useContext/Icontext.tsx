/**
 * @name 创建一个公用的useContext
 * @user ly
 * @date 日期：2020年4月27日
 */
import React, { FC, useMemo } from 'react';
import useContextReducer from './IuseReducer';

export interface ReduerValueParam {
	count: number;
	sum?: number;
}

export interface dispatchParam {
	type: string;
	value: number;
}

interface IuseContextComProps {
	children?: React.ReactNode;
}

type MyContextParam = {
	sum: ReduerValueParam;
	dispatch: React.Dispatch<dispatchParam>;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export const Context = React.createContext<MyContextParam | null>(null);

const Icontext: FC<IuseContextComProps> = ({ children }) => {
	const { sum, dispatch } = useContextReducer();

	const value = useMemo(() => ({ sum, dispatch }), [sum]);

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Icontext;
